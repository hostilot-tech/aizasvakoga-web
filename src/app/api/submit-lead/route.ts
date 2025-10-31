import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Validation schema
const leadSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email(),
  company: z.string().min(1).optional(),
  website: z.string().url().optional().or(z.literal("")),
  message: z.string().optional(),
  consent: z.boolean().optional(),
  source: z.string().optional(),
  preferredTimes: z.string().optional(),
});

// Simple rate limiting (in-memory, for production use Redis or similar)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  
  // Filter out old requests
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: Request) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Previše zahtjeva. Pokušajte ponovno za 15 minuta." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    // Honeypot check (if you add a hidden field in the form)
    if ((body as any).honeypot) {
      return NextResponse.json({ success: true }); // Fake success for bots
    }

    // Send email notification
    if (!resend) {
      console.error("Resend API key not configured");
      return NextResponse.json(
        { error: "Email servis nije konfiguriran. Kontaktirajte administratora." },
        { status: 500 }
      );
    }

    const emailTo = process.env.EMAIL_TO || "info@edupoligon.com";
    const emailFrom = process.env.EMAIL_FROM || "noreply@aizasvakoga.com";

    const emailContent = `
Novi lead zahtjev - AI za svakoga

${validatedData.name ? `Ime: ${validatedData.name}` : ""}
Email: ${validatedData.email}
${validatedData.company ? `Tvrtka: ${validatedData.company}` : ""}
${validatedData.website ? `Web: ${validatedData.website}` : ""}
${validatedData.message ? `\nPoruka:\n${validatedData.message}` : ""}
${validatedData.preferredTimes ? `\nPoželjni termini:\n${validatedData.preferredTimes}` : ""}

Izvor: ${validatedData.source || "hero_form"}
Vrijeme prijave: ${new Date().toLocaleString("hr-HR", { timeZone: "Europe/Zagreb" })}
    `.trim();

    const emailResult = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `Novi lead: ${validatedData.name || validatedData.email}`,
      text: emailContent,
    });

    console.log("Email sent successfully:", emailResult);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Nevažeći podaci", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Došlo je do greške. Pokušajte ponovno." },
      { status: 500 }
    );
  }
}
