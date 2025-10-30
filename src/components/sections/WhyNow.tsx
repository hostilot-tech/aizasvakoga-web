"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { RESEARCH_REFERENCES, BENEFITS } from "@/lib/constants";

export default function WhyNow() {
  return (
    <section className="section-padding bg-neutral-950">
      <div className="container-custom">
        <SectionHeading
          title="Zašto sada?"
          subtitle="AI napreduje iz tjedna u tjedan, ali primjena u praksi često zaostaje. Mi zatvaramo taj jaz — strukturirano, sigurno i s tjednim rezultatima."
          centered
          className="mb-16"
        />

        {/* Research References */}
        <div className="mb-20">
          <h3 className="text-heading-md font-semibold text-white text-center mb-8">
            Što kažu istraživanja
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {RESEARCH_REFERENCES.map((ref) => (
              <Card key={ref.id} className="hover:border-primary-300 transition-colors">
                <h4 className="text-heading-sm font-semibold text-white mb-3">
                  {ref.title}
                </h4>
                <p className="text-body-md text-neutral-300 mb-4">
                  {ref.description}
                </p>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-body-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "outbound_link_click", {
                        link_url: ref.url,
                        link_text: ref.linkText,
                      });
                    }
                  }}
                >
                  {ref.linkText}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-heading-md font-semibold text-white text-center mb-8">
            Tri ključne koristi
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {benefit.icon === "lightning" && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {benefit.icon === "rocket" && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {benefit.icon === "target" && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h4 className="text-heading-sm font-semibold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-body-md text-neutral-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
