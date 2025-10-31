"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" aria-label="Često postavljana pitanja o AI edukaciji i consultingu" className="section-padding bg-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-custom">
        <SectionHeading
          title="Često postavljana pitanja"
          centered
          className="mb-16"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className="border border-neutral-800 rounded-xl overflow-hidden transition-all duration-200 hover:border-neutral-700"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 bg-neutral-900 hover:bg-neutral-800 transition-colors"
              >
                <span className="text-heading-sm font-semibold text-white">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openId === item.id && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-body-md text-neutral-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
