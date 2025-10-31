import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="proces" className="section-padding bg-neutral-900">
      <div className="container-custom">
        <SectionHeading
          title="Proces — naglasak na brze rezultate tjedno"
          subtitle="Od prvog poziva do mjerljivih rezultata u tjednima, ne mjesecima."
          centered
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="flex gap-6">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.id}
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="w-0.5 h-16 bg-primary-200 mx-auto mt-4"></div>
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-heading-sm font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-neutral-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-body-md font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 inline-block">
              Nema 'konfekcije'. Sve prilagođavamo vašim ciljevima i zrelosti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
