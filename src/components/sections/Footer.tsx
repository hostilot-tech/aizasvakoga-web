import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Podnožje stranice s informacijama o tvrtki" className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold text-heading-sm mb-4">
              AI za svakoga
            </h3>
            <p className="text-body-sm mb-4">
              Edukacija i consulting za uspješnu AI adopciju.
            </p>
            <div className="text-body-sm space-y-1">
              <p>{COMPANY_INFO.legalName}</p>
              <p>Reg. br: {COMPANY_INFO.registrationNumber}</p>
              <p>{COMPANY_INFO.country}</p>
              <a
                href={COMPANY_INFO.inforegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-1 mt-2"
              >
                Inforegister profil
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-heading-sm mb-4">
              Pravno
            </h3>
            <ul className="space-y-2 text-body-sm">
              <li>
                <Link href="/privatnost" className="hover:text-white transition-colors">
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link href="/uvjeti" className="hover:text-white transition-colors">
                  Uvjeti korištenja
                </Link>
              </li>
              <li>
                <a href="#kontakt-forma" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form Note */}
          <div>
            <h3 className="text-white font-semibold text-heading-sm mb-4">
              Kontakt
            </h3>
            <p className="text-body-sm">
              Koristite kontakt formu na stranici ili zakažite besplatni uvodni online poziv.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 text-center text-body-sm">
          <p>
            © {currentYear} {COMPANY_INFO.legalName}. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
