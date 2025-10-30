import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { OFFERING_ELEMENTS } from "@/lib/constants";

export default function Offering() {
  return (
    <section id="usluge" className="section-padding bg-neutral-900">
      <div className="container-custom">
        <SectionHeading
          title="Što dobivate — cijeli paket, ne samo radionica"
          subtitle="Nismo tehnička platforma. Nudimo edukaciju i consulting za AI adopciju. Pomažemo razumjeti sigurnost i usklađenost na načelnoj i praktičnoj razini, kako biste izbjegli skupe pogreške."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {OFFERING_ELEMENTS.map((element) => (
            <Card key={element.id} hover>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{element.id}</span>
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-white mb-2">
                    {element.title}
                  </h3>
                  <p className="text-body-md text-neutral-300">
                    {element.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-body-lg font-medium text-primary-300 bg-primary-900/20 border border-primary-800/50 rounded-xl px-6 py-4 inline-block">
            Nema 'konfekcije'. Sve je prilagođeno vašoj organizaciji.
          </p>
        </div>
      </div>
    </section>
  );
}
