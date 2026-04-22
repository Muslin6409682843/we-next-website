import Hero from "../components/layout/Hero/Hero";

// 🔽 import sections
import CoreBeliefs from "../components/sections/about/CoreBeliefs";
import VisionMission from "../components/sections/about/VisionMission";
import LeadershipVision from "../components/sections/about/LeadershipVision";
import OurTeam from "../components/sections/about/OurTeam";
import OurTagline from "../components/sections/about/OurTagline";

export default function AboutPage() {
  return (
    <main className="space-y-[140px] md:space-y-[180px]">
      {/* 🔷 HERO */}
      <Hero
        size="large"
        variant="right-text"
        type="image"
        src="/images/about-hero.jpg"
        title={`ช่วยให้ประเทศไทยและประชาคมโลก
เข้าสู่สังคมคาร์บอนต่ำ`}
      />

      {/* 🔽 SECTIONS */}
      <CoreBeliefs />
      <VisionMission />
      <LeadershipVision />
      <OurTeam />
      <div className="-mt-[140px]">
        <OurTagline />
      </div>
    </main>
  );
}
