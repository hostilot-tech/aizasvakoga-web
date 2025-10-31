"use client";

import { trackEvent } from "@/components/analytics/GoogleAnalytics";
import ContactForm from "@/components/forms/ContactForm";

export default function Hero() {
  const handleCTAClick = () => {
    trackEvent("cta_click", { 
      cta_location: "hero",
      cta_type: "primary"
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="section-padding space-y-12">
          {/* Hero content */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/10 border border-primary-600/20 rounded-full text-primary-400 text-body-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Edukacija i consulting za AI adopciju</span>
            </div>
            <h1 className="text-display-sm md:text-display-md lg:text-display-lg font-bold text-white mb-6 leading-tight">
              Iskoristite AI za veću učinkovitost, bržu inovaciju i oštriju konkurentsku prednost.
            </h1>
            <p className="text-body-lg md:text-heading-sm text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Ne nudimo samo jednokratnu edukaciju. Postajemo vaš AI partner — od strategije do implementacije i rasta.
            </p>
          </div>

          {/* Contact Form */}
          <div id="kontakt-forma" className="max-w-2xl mx-auto">
            <ContactForm
              source="hero"
              title="Zakažite besplatni uvodni online poziv"
              description="Pošaljite nam upit i javit ćemo vam se u roku 24 sata"
              submitButtonText="Zatražite besplatni uvodni online poziv"
              showTrustIndicators={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
