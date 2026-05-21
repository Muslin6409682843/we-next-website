export default function ServicesIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div
          className="
          grid grid-cols-1 lg:grid-cols-2
          items-center
          gap-12 lg:gap-20
        "
        >
          {/* VISUAL */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px]">


              {/* image */}
              <img
                src="/images/servicesIntro.png"
                alt="services illustration"
                className="
                  relative
                  w-full h-full
                  object-cover
                  rounded-full
                "
              />
            </div>
          </div>

          {/* TEXT SYSTEM */}
          <div className="flex flex-col gap-6 text-left">
            {/* SMALL LABEL */}
            <p
              className="
              text-[#73F68D]
              font-medium
              tracking-[0.2em]

              text-[12px] sm:text-[14px]
            "
            >
              เริ่มต้นการเดินทางสู่การลดคาร์บอนร่วมกัน
            </p>

            {/* MAIN HEADLINE */}
            <h2
              className="
              text-[#036556]
              font-semibold

              text-[24px] sm:text-[30px] lg:text-[38px]
              leading-snug
            "
            >
              เราพร้อมเป็นพันธมิตรให้กับองค์กรของท่าน
              ในทุกขั้นตอนของการลดการปล่อยก๊าซเรือนกระจก
            </h2>

            {/* SUPPORT TEXT */}
            <p
              className="
              text-[#036556]/80

              text-[16px] sm:text-[18px] lg:text-[20px]
              leading-relaxed

              max-w-[600px]
            "
            >
              เพียงแค่บอกเราว่าองค์กรของท่านดำเนินธุรกิจประเภทใด และอยู่ที่ไหน —
              เราจะช่วยวิเคราะห์และวางแผนให้เหมาะสมกับบริบทของคุณ
            </p>

            {/* ACCENT STATEMENT */}
            <div
              className="
              border-l-4 border-[#73F68D]
              pl-4
            "
            >
              <p
                className="
                text-[#F04F23]
                font-semibold

                text-[16px] sm:text-[18px] lg:text-[20px]
              "
              >
                ที่เหลือเราจะช่วยวิเคราะห์และวางแผนให้
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
