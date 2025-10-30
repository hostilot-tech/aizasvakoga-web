"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";

export default function SecondaryCTA() {
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
    
    trackEvent("view_form", { form_location: "secondary_cta" });
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Unesite valjanu email adresu";
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
          source: "secondary_cta"
        }),
      });
      
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      
      trackEvent("submit_form", { 
        form_location: "secondary_cta",
        form_type: "secondary"
      });
      
      trackEvent("submit_success", { form_location: "secondary_cta" });
      
      setIsSuccess(true);
      setFormData({
        email: "",
        message: "",
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setErrors({ submit: "Došlo je do greške. Molimo pokušajte ponovno." });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 text-left">
              <div className="space-y-5">
                <Input
                  id="secondary-email"
                  label="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                  placeholder="vas@email.com"
                />

                <Textarea
                  id="secondary-message"
                  label="Poruka (opcionalno)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Kratko opišite što vas zanima..."
                  rows={3}
                />

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
                  {isSubmitting ? "Šaljem..." : "Zatražite besplatni uvodni online poziv"}
                </Button>
              </div>

              <p className="text-body-sm text-neutral-400 mt-4 text-center">
                Poziv je online. Ne primamo direktne telefonske pozive.
              </p>
            </form>
          ) : (
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-heading-md font-semibold text-white mb-2">
                Hvala!
              </h3>
              <p className="text-body-md text-neutral-300">
                Javit ćemo vam se uskoro.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
