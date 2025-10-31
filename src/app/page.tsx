import Hero from "@/components/sections/Hero";
import WhyNow from "@/components/sections/WhyNow";
import Offering from "@/components/sections/Offering";
import Process from "@/components/sections/Process";
import UseCases from "@/components/sections/UseCases";
import Compliance from "@/components/sections/Compliance";
import SecondaryCTA from "@/components/sections/SecondaryCTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI za svakoga | Edukacija i consulting za uspješnu AI adopciju",
    "description": "Ne nudimo samo jednokratnu edukaciju. Postajemo vaš AI partner — od strategije do implementacije i rasta.",
    "url": "https://aizasvakoga.com",
    "inLanguage": "hr",
    "isPartOf": {
      "@type": "WebSite",
      "name": "AI za svakoga",
      "url": "https://aizasvakoga.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Početna",
          "item": "https://aizasvakoga.com"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <main>
        <Hero />
        <WhyNow />
        <Offering />
        <Process />
        <UseCases />
        <Compliance />
        <SecondaryCTA />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
