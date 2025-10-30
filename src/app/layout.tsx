import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import Header from "@/components/layout/Header";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI za svakoga | Edukacija i consulting za uspješnu AI adopciju",
  description: "Ne nudimo samo jednokratnu edukaciju. Postajemo vaš AI partner — od strategije do implementacije i rasta. Iskoristite AI za veću učinkovitost, bržu inovaciju i oštriju konkurentsku prednost.",
  keywords: ["AI edukacija", "AI consulting", "umjetna inteligencija", "AI implementacija", "AI strategija", "poslovna učinkovitost"],
  authors: [{ name: "ADRIATECH OÜ" }],
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://aizasvakoga.com",
    siteName: "AI za svakoga",
    title: "AI za svakoga | Edukacija i consulting za uspješnu AI adopciju",
    description: "Postajemo vaš AI partner — od strategije do implementacije i rasta.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={inter.variable}>
      <body className="font-sans antialiased bg-neutral-950 text-neutral-100">
        <Header />
        <div className="pt-16 md:pt-20">
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
