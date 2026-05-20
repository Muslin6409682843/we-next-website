import Hero from "../components/layout/Hero/Hero";

// 🔽 import sections
import CoreBeliefs from "../components/sections/about/CoreBeliefs";
import VisionMission from "../components/sections/about/VisionMission";
import LeadershipVision from "../components/sections/about/LeadershipVision";
import OurTeam from "../components/sections/about/OurTeam";
import OurTagline from "../components/sections/about/OurTagline";

import FadeInSection from "../components/ui/FadeInSection";

export default function AboutPage() {
  return (
    <main className="space-y-[140px] md:space-y-[180px]">
      {/* 🔷 HERO */}
      <Hero
        size="large"
        variant="right-text"
        type="image"
        src="/images/about-hero.jpg"
        title={`ช่วยให้ประเทศไทยและประชาคมโลกเข้าสู่สังคมคาร์บอนต่ำ`}
      />

      <FadeInSection>
        <CoreBeliefs />
      </FadeInSection>

      <VisionMission />

      <FadeInSection delay={0.2}>
        <LeadershipVision />
      </FadeInSection>

      <OurTeam />

      <div className="-mt-[140px]">
        <FadeInSection delay={0.4}>
          <OurTagline />
        </FadeInSection>
      </div>
    </main>
  );
}
