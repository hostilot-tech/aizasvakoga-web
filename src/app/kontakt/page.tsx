import Link from "next/link";
import { Metadata } from "next";
import SecondaryCTA from "@/components/sections/SecondaryCTA";

export const metadata: Metadata = {
  title: "Kontakt | AI za svakoga",
  description: "Kontaktirajte nas za besplatni uvodni online poziv.",
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-12">
        <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Povratak na početnu
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-display-sm font-bold text-neutral-900 mb-4">
            Kontakt
          </h1>
          <p className="text-body-lg text-neutral-600">
            Ispunite formu ispod ili se vratite na početnu stranicu i zakažite besplatni uvodni online poziv.
          </p>
        </div>
      </div>

      <SecondaryCTA />
    </main>
  );
}
