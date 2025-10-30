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
  return (
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
  );
}
