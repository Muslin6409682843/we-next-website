import Hero from "../components/layout/Hero/Hero";

export default function ResponsivePage() {
  return (
    <main>

      <Hero
        size="large"
        variant="right-button"
        type="video"
        src="/videos/heroTrim.mp4"
        title={`ให้คำปรึกษาการลดการปล่อยก๊าซเรือนกระจกสำหรับ SME`}
      />

      {/* 🔽 SECTION: Services */}
      <section
  className="
    py-[56px]
    sm:py-[72px]
    lg:py-[80px]

    px-6
    sm:px-8
    lg:px-12

    flex
    flex-col
    items-center
    text-center
  "
>
  {/* TITLE */}
  <h1
    className="
      text-[#036556]
      font-semibold

      text-[clamp(32px,5vw,48px)]

      mb-5
      sm:mb-6
    "
  >
    บริการของเรา
  </h1>

  {/* SUBTITLE */}
  <p
    className="
      text-[#6A6388]

      text-[clamp(16px,2vw,24px)]

      leading-[1.7]

      max-w-[95%]
sm:max-w-[88%]
lg:max-w-[1000px]
xl:max-w-[1150px]
2xl:max-w-[1250px]
    "
  >
    เราพร้อมช่วยเหลือองค์กรของท่านในทุกขั้นตอนของการลดการปล่อยก๊าซเรือนกระจก
    เพียงแค่บอกเราว่าองค์กรของท่านดำเนินธุรกิจประเภทใด และอยู่ที่ไหน —
    ที่เหลือเราจะช่วยวิเคราะห์และวางแผนให้
  </p>
</section>

    </main>
  );
}
