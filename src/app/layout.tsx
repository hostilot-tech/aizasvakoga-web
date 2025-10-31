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
  metadataBase: new URL('https://aizasvakoga.com'),
  title: {
    default: "AI za svakoga | Edukacija i consulting za uspješnu AI adopciju",
    template: "%s | AI za svakoga"
  },
  description: "Ne nudimo samo jednokratnu edukaciju. Postajemo vaš AI partner — od strategije do implementacije i rasta. Iskoristite AI za veću učinkovitost, bržu inovaciju i oštriju konkurentsku prednost.",
  keywords: ["AI edukacija", "AI consulting", "umjetna inteligencija", "AI implementacija", "AI strategija", "poslovna učinkovitost", "AI obuka", "digitalna transformacija", "AI za poslovanje", "AI adopcija"],
  authors: [{ name: "ADRIATECH OÜ", url: "https://aizasvakoga.com" }],
  creator: "ADRIATECH OÜ",
  publisher: "ADRIATECH OÜ",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://aizasvakoga.com",
    siteName: "AI za svakoga",
    title: "AI za svakoga | Edukacija i consulting za uspješnu AI adopciju",
    description: "Postajemo vaš AI partner — od strategije do implementacije i rasta. Iskoristite AI za veću učinkovitost, bržu inovaciju i oštriju konkurentsku prednost.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI za svakoga - Edukacija i consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI za svakoga | Edukacija i consulting za uspješnu AI adopciju",
    description: "Postajemo vaš AI partner — od strategije do implementacije i rasta.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "", // Dodati Google Search Console verification kod
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI za svakoga",
    "legalName": "ADRIATECH OÜ",
    "url": "https://aizasvakoga.com",
    "logo": "https://aizasvakoga.com/logo.png",
    "description": "Edukacija i consulting za uspješnu AI adopciju u poslovanju",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EE"
    },
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["hr", "en"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Croatia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Edukacija i Consulting Usluge",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Edukacija",
            "description": "Prilagođena edukacija za timove o korištenju AI alata i tehnologija"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Consulting",
            "description": "Strateško savjetovanje za implementaciju AI rješenja u poslovanju"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Implementacija",
            "description": "Podrška u implementaciji i integraciji AI alata u poslovne procese"
          }
        }
      ]
    }
  };

  return (
    <html lang="hr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
