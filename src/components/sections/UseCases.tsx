import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { USE_CASES } from "@/lib/constants";

export default function UseCases() {
  return (
    <section className="section-padding bg-neutral-950">
      <div className="container-custom">
        <SectionHeading
          title="Primjeri Use-caseova po funkcijama"
          subtitle="Generički, ali konkretni primjeri kako AI može pomoći u različitim dijelovima organizacije."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {USE_CASES.map((useCase) => (
            <Card key={useCase.id} hover>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-body-sm font-medium rounded-full">
                  {useCase.function}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-body-sm font-semibold text-neutral-400 uppercase tracking-wide mb-1">
                    Problem
                  </h4>
                  <p className="text-body-md text-neutral-300">
                    {useCase.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-body-sm font-semibold text-neutral-400 uppercase tracking-wide mb-1">
                    Što radimo
                  </h4>
                  <p className="text-body-md text-neutral-300">
                    {useCase.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-body-sm font-semibold text-neutral-400 uppercase tracking-wide mb-1">
                    Kriterij uspjeha
                  </h4>
                  <p className="text-body-md text-primary-400 font-medium">
                    {useCase.success}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
