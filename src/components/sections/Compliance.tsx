import SectionHeading from "@/components/ui/SectionHeading";

export default function Compliance() {
  return (
    <section className="section-padding bg-neutral-900">
      <div className="container-custom">
        <SectionHeading
          title="Sigurnost i usklađenost — jasno i načelno"
          subtitle="Edukacijom i consultingom pomažemo vam postaviti zdrave temelje sigurnosti i usklađenosti — kako biste izbjegli skupe pogreške."
          centered
          className="mb-12"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-white mb-2">
                    Najbolje prakse za zaštitu podataka
                  </h3>
                  <p className="text-body-md text-neutral-300">
                    Savjetujemo kako postaviti zdrave temelje sigurnosti, odgovorno koristiti modele i jasno definirati procese. Edukacija i smjernice prilagođene vašem kontekstu.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-white mb-2">
                    Jasno definirani procesi i governance
                  </h3>
                  <p className="text-body-md text-neutral-300">
                    Pomažemo vam uspostaviti minimalni, ali učinkoviti governance model — bez birokracije, ali s jasnim odgovornostima i procedurama.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-white mb-2">
                    NDA i povjerljivost
                  </h3>
                  <p className="text-body-md text-neutral-300">
                    Po potrebi radimo uz NDA. Ne koristimo vaše podatke za svoje potrebe, niti ih razmjenjujemo sa trećim stranama. Vaše povjerenje naš je prioritet.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
