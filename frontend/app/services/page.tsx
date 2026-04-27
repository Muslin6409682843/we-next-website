import Hero from "../components/layout/Hero/Hero";

// 🔽 import sections
import ServicesIntro from "../components/sections/services/ServicesIntro";
import CarbonReductionExamples from "../components/sections/services/CarbonReductionExamples";
import OurServices from "../components/sections/services/OurServices";
import CallToAction from "../components/sections/services/CallToAction";

export default function ServicesPage() {
  return (
    <>
      <Hero
        size="small"
        title="บริการของเรา"
        type="image"
        src="/images/services-hero.jpg"
      />

      <ServicesIntro />
      <CarbonReductionExamples />
      <OurServices />
      <CallToAction />
     

    </>
  );
}