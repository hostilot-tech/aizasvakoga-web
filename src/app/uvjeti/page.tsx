import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uvjeti korištenja",
  description: "Uvjeti korištenja web stranice AI za svakoga - pravila i odgovornosti korištenja naših usluga.",
  alternates: {
    canonical: "/uvjeti",
  },
  openGraph: {
    title: "Uvjeti korištenja | AI za svakoga",
    description: "Uvjeti korištenja web stranice AI za svakoga.",
    url: "https://aizasvakoga.com/uvjeti",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UvjetiPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Povratak na početnu
          </Link>

          <h1 className="text-display-sm font-bold text-neutral-900 mb-6">
            Uvjeti korištenja
          </h1>
          
          <div className="prose prose-neutral max-w-none">
            <p className="text-body-lg text-neutral-600 mb-8">
              Posljednja izmjena: {new Date().toLocaleDateString("hr-HR")}
            </p>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                1. Prihvaćanje uvjeta
              </h2>
              <p className="text-body-md text-neutral-700">
                Korištenjem web stranice aizasvakoga.com prihvaćate ove uvjete korištenja. 
                Ako se ne slažete s ovim uvjetima, molimo ne koristite stranicu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                2. Usluge
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                ADRIATECH OÜ pruža edukaciju i consulting usluge za AI adopciju. 
                Ova web stranica služi isključivo u informativne svrhe i za zakazivanje uvodnih poziva.
              </p>
              <p className="text-body-md text-neutral-700">
                Detalji o uslugama, cijenama i uvjetima suradnje dogovaraju se individualno.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                3. Intelektualno vlasništvo
              </h2>
              <p className="text-body-md text-neutral-700">
                Sav sadržaj na ovoj stranici (tekst, grafika, logotipi) vlasništvo je ADRIATECH OÜ 
                i zaštićen je autorskim pravima. Zabranjeno je kopiranje bez izričitog odobrenja.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                4. Ograničenje odgovornosti
              </h2>
              <p className="text-body-md text-neutral-700">
                Informacije na ovoj stranici pružaju se "kakve jesu". Ne garantiramo točnost, 
                potpunost ili ažurnost informacija. ADRIATECH OÜ ne odgovara za bilo kakvu štetu 
                nastalu korištenjem ove stranice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                5. Vanjske poveznice
              </h2>
              <p className="text-body-md text-neutral-700">
                Ova stranica može sadržavati poveznice na vanjske web stranice. 
                Ne odgovaramo za sadržaj ili politiku privatnosti tih stranica.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                6. Izmjene uvjeta
              </h2>
              <p className="text-body-md text-neutral-700">
                Zadržavamo pravo izmjene ovih uvjeta u bilo kojem trenutku. 
                Izmjene stupaju na snagu objavom na ovoj stranici.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                7. Mjerodavno pravo
              </h2>
              <p className="text-body-md text-neutral-700">
                Ovi uvjeti podliježu zakonima Republike Estonije.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                8. Kontakt
              </h2>
              <p className="text-body-md text-neutral-700">
                Za pitanja o ovim uvjetima, koristite kontakt formu na našoj stranici.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
