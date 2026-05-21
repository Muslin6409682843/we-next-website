import Hero from "../components/layout/Hero/Hero";
import ServiceCardHome from "../components/cards/ServiceCardHome";

export default function ResponsivePage() {
  return (
    <main>
      {/* HERO */}
      <Hero
        size="large"
        variant="right-button"
        type="video"
        src="/videos/heroTrim.mp4"
        title={`ให้คำปรึกษาการลดการปล่อยก๊าซเรือนกระจกสำหรับ SME`}
      />

      {/* 🔽 SECTION: SERVICES */}
      <section
        className="
    relative
    py-[64px] sm:py-[84px] lg:py-[110px]
    px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28
    bg-white
  "
      >
        {/* CONTAINER */}
        <div className="mx-auto w-full max-w-[1400px]">
          {/* HEADER BLOCK */}
          <div className="text-center flex flex-col items-center">
            {/* TITLE */}
            <h1
              className="
          text-[#036556]
          font-semibold
          leading-tight

          text-[clamp(30px,4vw,52px)]
        "
            >
              บริการของเรา
            </h1>

            {/* decorative line */}
            <div className="mt-5 w-16 h-[2px] bg-[#73F68D]" />

            {/* SUBTITLE (FIXED READABILITY COLUMN) */}
            <p
              className="
          mt-6

          text-[#6A6388]
          leading-[1.75]

          text-[clamp(15px,1.4vw,20px)]

          max-w-[720px] sm:max-w-[780px] lg:max-w-[900px]

          text-center
        "
            >
              เราพร้อมช่วยเหลือองค์กรของท่านในทุกขั้นตอนของการลดการปล่อยก๊าซเรือนกระจก
              เพียงแค่บอกเราว่าองค์กรของท่านดำเนินธุรกิจประเภทใด และอยู่ที่ไหน —
              ที่เหลือเราจะช่วยวิเคราะห์และวางแผนให้
            </p>
          </div>

          {/* 🔹 CARDS SECTION */}
          <div
            className="
              mt-12
              sm:mt-14
              lg:mt-16

              grid
              grid-cols-1
              xl:grid-cols-2

              gap-5
              sm:gap-6
              lg:gap-8
            "
          >
            <ServiceCardHome
              title="คาร์บอนฟุตพริ้นท์องค์กร (CFO)"
              description="ก้าวแรกของการลดโลกร้อนคือการรู้ว่าองค์กรของท่านปล่อย CO₂ เท่าไร — เราช่วยจัดทำทุกอย่างให้ครบ ตั้งแต่เก็บข้อมูลไปจนถึงรายงานฉบับสมบูรณ์"
              highlight="รู้ก่อน ลดได้ก่อน"
              href="/services/cfo"
              icon="building"
            />

            <ServiceCardHome
              title="คาร์บอนฟุตพริ้นท์ผลิตภัณฑ์ (CFP)"
              description="เพิ่มความน่าเชื่อถือให้ผลิตภัณฑ์ด้วยตัวเลขคาร์บอนที่ตรวจสอบได้ ตอบโจทย์ทั้งลูกค้าและคู่ค้าต่างประเทศที่ให้ความสำคัญกับสิ่งแวดล้อม"
              highlight="สินค้าของท่าน บอกได้ว่าใส่ใจโลก"
              href="/services/2"
              icon="milk"
            />

            <ServiceCardHome
              title="Carbon Credit T-VER ป่าไม้"
              description="ป่าที่ท่านดูแลอยู่สามารถแปลงเป็นรายได้ได้จริง เราช่วยดูแลเอกสารและขึ้นทะเบียนกับ อบก. ให้ครบถ้วน"
              highlight="พื้นที่สีเขียวของท่าน มีมูลค่ามากกว่าที่คิด"
              href="/services/tver-forestry"
              icon="tree"
            />

            <ServiceCardHome
              title="Carbon Credit T-VER พลังงานและขนส่ง"
              description="โครงการพลังงานสะอาดของท่านอาจสร้างมูลค่าได้มากกว่าแค่ค่าไฟที่ประหยัดได้ เราช่วยตรวจสอบและยื่นขอ Carbon Credit ให้คุ้มค่าทุกบาทที่ลงทุนไป"
              highlight="ลงทุน Solar หรือเปลี่ยน EV แล้ว — ทำไมไม่ได้เครดิตด้วย?"
              href="/services/tver-energy-transport"
              icon="energy"
            />

            {/* LAST CARD */}
            <div
              className="
                xl:col-span-2

                w-full

                xl:max-w-[850px]
                xl:mx-auto
              "
            >
              <ServiceCardHome
                title="อบรมและสัมมนาภายในองค์กร"
                description="ออกแบบหลักสูตรให้ตรงกับองค์กรของท่าน ไม่ต้องมีพื้นฐานมาก่อน — ทีมงานของท่านจะเข้าใจเรื่องคาร์บอนและลงมือทำได้จริงหลังจบการอบรม"
                highlight="เรื่องซับซ้อน เราทำให้เข้าใจง่าย"
                href="/services/training"
                icon="presentation"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
