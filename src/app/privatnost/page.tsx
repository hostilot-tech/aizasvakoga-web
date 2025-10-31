import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Politika privatnosti za AI za svakoga - kako prikupljamo, koristimo i štitimo vaše podatke u skladu s GDPR propisima.",
  alternates: {
    canonical: "/privatnost",
  },
  openGraph: {
    title: "Politika privatnosti | AI za svakoga",
    description: "Politika privatnosti - kako prikupljamo, koristimo i štitimo vaše podatke.",
    url: "https://aizasvakoga.com/privatnost",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivatnostPage() {
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
            Politika privatnosti
          </h1>
          
          <div className="prose prose-neutral max-w-none">
            <p className="text-body-lg text-neutral-600 mb-8">
              Posljednja izmjena: {new Date().toLocaleDateString("hr-HR")}
            </p>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                1. Uvod
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                ADRIATECH OÜ (reg. br. 16187420, Estonija) upravlja web stranicom aizasvakoga.com. 
                Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše osobne podatke.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                2. Podaci koje prikupljamo
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Prikupljamo sljedeće podatke kada ispunite kontakt formu:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md text-neutral-700 mb-4">
                <li>Ime i prezime</li>
                <li>Email adresa</li>
                <li>Naziv tvrtke</li>
                <li>Web stranica tvrtke (opcionalno)</li>
                <li>Poruka koju nam pošaljete</li>
              </ul>
              <p className="text-body-md text-neutral-700">
                Također automatski prikupljamo osnovne tehničke podatke putem Google Analytics 
                (IP adresa, tip preglednika, vrijeme posjete) radi poboljšanja korisničkog iskustva.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                3. Kako koristimo vaše podatke
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Vaše podatke koristimo isključivo za:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md text-neutral-700">
                <li>Odgovaranje na vaše upite</li>
                <li>Zakazivanje besplatnih uvodnih poziva</li>
                <li>Pružanje informacija o našim uslugama</li>
                <li>Poboljšanje funkcionalnosti web stranice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                4. Dijeljenje podataka
              </h2>
              <p className="text-body-md text-neutral-700">
                Ne prodajemo, ne iznajmljujemo niti dijelimo vaše osobne podatke s trećim stranama, 
                osim u slučajevima kada je to zakonski obvezno ili uz vaš izričiti pristanak.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                5. Sigurnost podataka
              </h2>
              <p className="text-body-md text-neutral-700">
                Koristimo industrijske standarde sigurnosti za zaštitu vaših podataka. 
                Svi podaci se prenose putem sigurne HTTPS veze.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                6. Vaša prava (GDPR)
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Imate pravo na:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md text-neutral-700">
                <li>Pristup svojim osobnim podacima</li>
                <li>Ispravak netočnih podataka</li>
                <li>Brisanje podataka ("pravo na zaborav")</li>
                <li>Ograničenje obrade</li>
                <li>Prenosivost podataka</li>
                <li>Prigovor na obradu</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                7. Kolačići (Cookies)
              </h2>
              <p className="text-body-md text-neutral-700">
                Koristimo Google Analytics kolačiće za analizu prometa na stranici. 
                Možete onemogućiti kolačiće u postavkama svog preglednika.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                8. Kontakt
              </h2>
              <p className="text-body-md text-neutral-700">
                Za sva pitanja vezana uz privatnost, koristite kontakt formu na našoj stranici.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
