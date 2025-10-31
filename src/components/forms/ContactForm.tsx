"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";
import Link from "next/link";

interface ContactFormProps {
  source: string;
  title?: string;
  description?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  showTrustIndicators?: boolean;
}

export default function ContactForm({
  source,
  title = "Zakažite besplatni uvodni online poziv",
  description = "Pošaljite nam upit i javit ćemo vam se u roku 24 sata",
  emailPlaceholder = "vas@tvrtka.hr",
  messagePlaceholder = "Npr: Pon 10:00, Sri 14:00, Pet 11:00 + kratko opišite što vas zanima...",
  submitButtonText = "Zatražite besplatni uvodni online poziv",
  showTrustIndicators = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    trackEvent("view_form", { form_location: source });
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Unesite valjanu email adresu";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Molimo unesite prihvatljive termine";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      
      trackEvent("submit_form", { 
        form_location: source,
        form_type: "contact"
      });
      
      trackEvent("submit_success", { form_location: source });
      
      setIsSuccess(true);
      setFormData({
        email: "",
        message: "",
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setErrors({ submit: "Došlo je do greške. Molimo pokušajte ponovno." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-neutral-800">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-heading-lg font-semibold text-white mb-2">
          Hvala! Vaš zahtjev je uspješno poslan.
        </h3>
        <p className="text-body-md text-neutral-300">
          Javit ćemo vam se u roku 24 sata.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-neutral-800">
      {(title || description) && (
        <div className="mb-6 text-center">
          {title && (
            <h2 className="text-heading-md font-semibold text-white mb-2">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-body-sm text-neutral-400">
              {description}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Desktop: 2 kolone, Mobile: 1 kolona */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <Input
              id={`email-${source}`}
              label="Poslovni email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              placeholder={emailPlaceholder}
            />
          </div>

          <div className="flex flex-col">
            <Textarea
              id={`message-${source}`}
              label="Prihvatljivi termini (+ ostale informacije)"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              error={errors.message}
              placeholder={messagePlaceholder}
              rows={4}
            />
          </div>
        </div>

        {errors.submit && (
          <div className="p-4 bg-red-900/20 border border-red-800/50 rounded-lg">
            <p className="text-body-sm text-red-400">{errors.submit}</p>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? "Šaljem..." : submitButtonText}
        </Button>

        <p className="text-body-xs text-neutral-500 text-center">
          Slanjem obrasca prihvaćate našu{" "}
          <Link href="/privatnost" className="text-primary-400 hover:text-primary-300 underline">
            Politiku privatnosti
          </Link>
          .
        </p>
      </form>

      {showTrustIndicators && (
        <div className="mt-8 pt-6 border-t border-neutral-800">
          <div className="grid md:grid-cols-2 gap-4 text-body-sm text-neutral-400">
            <div className="flex items-start gap-2">
              <span className="text-primary-600 mt-0.5">✓</span>
              <span>Odgovaramo u roku 24h. NDA po potrebi.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-600 mt-0.5">✓</span>
              <span>Metodologija 100% prilagođena vašoj organizaciji.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
