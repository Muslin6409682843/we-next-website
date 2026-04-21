import Hero from "../components/layout/Hero/Hero";

export default function AboutPage() {
  return (
    <main>
      {/* 🔷 HERO */}
      <Hero
        size="large"
        variant="right-button"
        type="image"
        src="/images/about-hero.jpg"
        title="เกี่ยวกับเรา"
      />

      {/* 🔽 SECTION: About Intro */}
      <section className="py-[80px] flex flex-col items-center text-center">
        <div className="max-w-[1200px] w-full">{/* ใส่ content ทีหลัง */}</div>
      </section>

      {/* 🔽 SECTION: Vision / Mission */}
      <section className="py-[80px] bg-[#F5F5F5] flex flex-col items-center text-center">
        <div className="max-w-[1200px] w-full">{/* ใส่ content ทีหลัง */}</div>
      </section>

      {/* 🔽 SECTION: Our Services Highlight */}
      <section className="py-[80px] flex flex-col items-center text-center">
        <div className="max-w-[1200px] w-full">
          {/* อาจ reuse ServiceCardHome ทีหลัง */}
        </div>
      </section>

      {/* 🔽 SECTION: Team */}
      <section className="py-[80px] bg-[#F5F5F5] flex flex-col items-center text-center">
        <div className="max-w-[1200px] w-full">{/* team cards ทีหลัง */}</div>
      </section>

      {/* 🔽 SECTION: CTA */}
      <section className="py-[80px] flex flex-col items-center text-center">
        <div className="max-w-[1200px] w-full">
          {/* ปุ่มติดต่อ / call to action */}
        </div>
      </section>
    </main>
  );
}
