"use client";

import ContactForm from "@/components/forms/ContactForm";

export default function SecondaryCTA() {
  return (
    <section id="kontakt" className="section-padding bg-neutral-950">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm font-bold text-white mb-6">
            Spremni za sljedeći korak?
          </h2>
          <p className="text-body-lg text-neutral-300 mb-8">
            Zakažite besplatni uvodni online poziv i saznajte kako AI može transformirati vašu organizaciju.
          </p>

          <ContactForm
            source="secondary_cta"
            submitButtonText="Zatražite besplatni uvodni online poziv"
            emailPlaceholder="vas@email.com"
            messagePlaceholder="Npr: Pon 10:00, Sri 14:00, Pet 11:00 + kratko opišite što vas zanima..."
          />
        </div>
      </div>
    </section>
  );
}
