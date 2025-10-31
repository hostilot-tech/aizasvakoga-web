"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Checkbox from "@/components/ui/Checkbox";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";
import Link from "next/link";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [initialData, setInitialData] = useState({ name: "", email: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
    preferredTimes: "",
    consent: false,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!initialData.name.trim()) {
      newErrors.name = "Ime i prezime su obavezni";
    }
    
    if (!initialData.email.trim()) {
      newErrors.email = "Email je obavezan";
    } else if (!validateEmail(initialData.email)) {
      newErrors.email = "Unesite valjanu email adresu";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setFormData({ ...formData, name: initialData.name, email: initialData.email });
    setShowModal(true);
    setErrors({});
    trackEvent("view_form", { form_location: "hero_modal" });
  };

  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
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
        preferredTimes: "",
        consent: false,
      });
      setInitialData({ name: "", email: "" });
      setShowModal(false);
    } catch (error) {
      setErrors({ submit: "Došlo je do greške. Molimo pokušajte ponovno." });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Simple Form */}
          <div id="kontakt-forma"></div>
          {!isSuccess ? (
            <div className="bg-neutral-900 rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl mx-auto border border-neutral-800">
              <div className="mb-6 text-center">
                <h2 className="text-heading-md font-semibold text-white mb-2">
                  Zakažite besplatni uvodni online poziv
                </h2>
                <p className="text-body-sm text-neutral-400">
                  Unesite osnovne podatke i nastavite s detaljima
                </p>
              </div>

              <form onSubmit={handleInitialSubmit} className="space-y-5">
                <Input
                  id="initial-name"
                  label="Ime i prezime"
                  type="text"
                  required
                  value={initialData.name}
                  onChange={(e) => setInitialData({ ...initialData, name: e.target.value })}
                  error={errors.name}
                  placeholder="Ana Horvat"
                />
                
                <Input
                  id="initial-email"
                  label="Poslovni email"
                  type="email"
                  required
                  value={initialData.email}
                  onChange={(e) => setInitialData({ ...initialData, email: e.target.value })}
                  error={errors.email}
                  placeholder="ana@tvrtka.hr"
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleCTAClick}
                >
                  Nastavi →
                </Button>
              </form>

              {/* Trust indicators */}
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
            </div>
          ) : (
            <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-neutral-800 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-heading-lg font-semibold text-white mb-4">
                Hvala! Vaš zahtjev je uspješno poslan.
              </h3>
              <p className="text-body-lg text-neutral-300 mb-8">
                Javit ćemo vam se u roku 24 sata.
              </p>
              
              <Button
                variant="outline"
                onClick={() => setIsSuccess(false)}
              >
                Zatvori
              </Button>
            </div>
          )}
        </div>

        {/* Modal for full form */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowModal(false)}>
            <div className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-neutral-800" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-neutral-900 border-b border-neutral-800 p-6 flex items-center justify-between">
                <h2 className="text-heading-md font-semibold text-white">
                  Dodatne informacije
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleFullSubmit} className="p-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    id="name"
                    label="Ime i prezime"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ana Horvat"
                    disabled
                  />
                  
                  <Input
                    id="email"
                    label="Poslovni email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ana@tvrtka.hr"
                    disabled
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

                <Textarea
                  id="preferredTimes"
                  label="Termin(i) koji mi odgovaraju"
                  value={formData.preferredTimes}
                  onChange={(e) => setFormData({ ...formData, preferredTimes: e.target.value })}
                  placeholder="Npr: Ponedjeljak 10:00, Srijeda 14:00, Petak 11:00"
                  helperText="Predlažemo: Pon-Pet, 9:00-16:00, trajanje 1h"
                  rows={3}
                />

                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  error={errors.consent}
                  label={
                    <>
                      Prihvaćam{" "}
                      <Link href="/privatnost" className="text-primary-400 hover:text-primary-300 underline">
                        Politiku privatnosti
                      </Link>
                    </>
                  }
                />

                {errors.submit && (
                  <div className="p-4 bg-red-900/20 border border-red-800/50 rounded-lg">
                    <p className="text-body-sm text-red-400">{errors.submit}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    fullWidth
                    onClick={() => setShowModal(false)}
                  >
                    Natrag
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Šaljem..." : "Pošalji zahtjev"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
