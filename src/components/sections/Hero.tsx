"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Checkbox from "@/components/ui/Checkbox";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";
import Link from "next/link";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
    consent: false,
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
    
    // Track form view
    trackEvent("view_form", { form_location: "hero" });
    
    // Validation
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Ime i prezime su obavezni";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Unesite valjanu email adresu";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Naziv tvrtke je obavezan";
    }
    
    if (!formData.consent) {
      newErrors.consent = "Morate prihvatiti politiku privatnosti";
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
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      
      trackEvent("submit_form", { 
        form_location: "hero",
        form_type: "primary"
      });
      
      trackEvent("submit_success", { form_location: "hero" });
      
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      setErrors({ submit: "Došlo je do greške. Molimo pokušajte ponovno." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCTAClick = () => {
    trackEvent("cta_click", { 
      cta_location: "hero",
      cta_text: "Zakažite besplatni uvodni online poziv"
    });
  };

  return (
    <section id="hero" className="relative bg-neutral-950 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-[600px] h-[600px] bg-primary-900/20 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-primary-800/20 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-900/20 to-transparent rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full text-body-sm font-medium mb-6 border border-primary-800/50">
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

          {/* Form or Success State */}
          <div id="kontakt-forma"></div>
          {!isSuccess ? (
            <div className="bg-neutral-900 rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 max-w-4xl mx-auto border border-neutral-800">
              <div className="mb-6">
                <h2 className="text-heading-md font-semibold text-white mb-2">
                  Zakažite besplatni uvodni online poziv
                </h2>
                <p className="text-body-sm text-neutral-400 flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Poziv je online. Ne primamo direktne telefonske pozive.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    id="name"
                    label="Ime i prezime"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    error={errors.name}
                    placeholder="Ana Horvat"
                  />
                  
                  <Input
                    id="email"
                    label="Poslovni email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={errors.email}
                    placeholder="ana@tvrtka.hr"
                    helperText="Preferirano poslovni email"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    id="company"
                    label="Tvrtka"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    error={errors.company}
                    placeholder="Naziv tvrtke"
                  />
                  
                  <Input
                    id="website"
                    label="Web stranica"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://tvrtka.hr"
                    helperText="Opcionalno"
                  />
                </div>

                <Textarea
                  id="message"
                  label="Koji je vaš glavni AI cilj u narednih 3–6 mjeseci?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Kratko opišite što želite postići..."
                  rows={4}
                />

                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  error={errors.consent}
                  label={
                    <>
                      Prihvaćam{" "}
                      <Link href="/privatnost" className="text-primary-600 hover:text-primary-700 underline">
                        Politiku privatnosti
                      </Link>
                    </>
                  }
                />

                {errors.submit && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-body-sm text-red-600">{errors.submit}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  onClick={handleCTAClick}
                >
                  {isSubmitting ? "Šaljem..." : "Zakažite besplatni uvodni online poziv"}
                </Button>
              </form>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="grid md:grid-cols-2 gap-4 text-body-sm text-neutral-600">
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
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-strong p-8 md:p-12 max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Hvala! Vaš zahtjev je uspješno poslan.
              </h3>
              <p className="text-body-lg text-neutral-600 mb-8">
                Javit ćemo vam se u roku 24 sata. U međuvremenu, odaberite termin za poziv:
              </p>
              
              {/* Google Calendar Embed */}
              <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                <p className="text-body-sm text-neutral-600 mb-4">
                  Dostupni termini: pon–pet, 09:00–16:00 (CET), samo jednosatni slotovi
                </p>
                <div className="aspect-video bg-white rounded-lg border border-neutral-200 flex items-center justify-center">
                  <p className="text-body-sm text-neutral-500">
                    [Google Calendar embed će biti ovdje - konfigurirajte GCAL_CALENDAR_ID]
                  </p>
                </div>
              </div>
              
              <Button
                variant="outline"
                onClick={() => setIsSuccess(false)}
              >
                Zatvori
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
