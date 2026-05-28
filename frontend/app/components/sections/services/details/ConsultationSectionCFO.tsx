// /components/sections/services/details/ConsultationSectionCFO.tsx

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ConsultationSectionCFO() {
  const highlights = [
    "ช่วยประเมินจุดเริ่มต้นที่เหมาะกับองค์กร",
    "วางแนวทางดำเนินงานด้านคาร์บอนอย่างเป็นระบบ",
    "ให้คำปรึกษาเบื้องต้นโดยไม่มีค่าใช้จ่าย",
  ];

  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white

      py-20
      sm:py-24
      lg:py-28

      px-5
      sm:px-8
      lg:px-12
    "
    >

      <div
        className="
        relative

        max-w-[1380px]
        mx-auto
      "
      >
        <div
          className="
          relative
          overflow-hidden

          rounded-[34px]
          sm:rounded-[42px]

          border border-[#DCEEE8]

          bg-[#F7FFFB]

          px-6
          sm:px-10
          lg:px-14

          py-10
          sm:py-12
          lg:py-14
        "
        >


          {/* MAIN CONTENT */}
          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-[1fr_340px]

            gap-10
            lg:gap-12

            items-center
          "
          >
            {/* LEFT */}
            <div>
              {/* TITLE */}
              <h2
                className="
                text-[#036556]

                font-semibold
                tracking-[-0.04em]

                leading-[1.12]

                text-[30px]

                sm:text-[42px]

                md:text-[52px]

                lg:text-[62px]
              "
              >
                เริ่มต้นงานด้านคาร์บอน
                <br />
                ได้อย่างมั่นใจด้วยบริการ{" "}
                <span className="text-[#73F68D]">
                  CFO
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                mt-5
                sm:mt-6

                max-w-[860px]

                text-[#0B3F34]/80

                font-medium
                leading-relaxed

                text-[15px]

                sm:text-[18px]

                lg:text-[22px]
              "
              >
                หากองค์กรของท่านกำลังเริ่มต้นด้านคาร์บอน
                และยังไม่แน่ใจว่าควรเริ่มจากจุดใด
                ทีมงานของเราพร้อมช่วยวิเคราะห์ขอบเขตงาน
                พร้อมเสนอแนวทางที่เหมาะสมกับองค์กรของท่าน
              </p>

              {/* HIGHLIGHTS */}
              <div
                className="
                mt-7
                sm:mt-8

                flex
                flex-col

                gap-3
              "
              >
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="
                    flex
                    items-start

                    gap-3
                  "
                  >
                    <CheckCircle2
                      className="
                      shrink-0

                      w-5
                      h-5

                      mt-[2px]

                      text-[#73F68D]
                    "
                    />

                    <p
                      className="
                      text-[#036556]

                      font-medium
                      leading-relaxed

                      text-[14px]

                      sm:text-[16px]

                      lg:text-[18px]
                    "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div
              className="
              relative

              rounded-[30px]

              border border-[#73F68D]/20

              bg-white

              p-6
              sm:p-7

              shadow-[0_24px_60px_-35px_rgba(3,101,86,0.18)]
            "
            >

              <h3
                className="
                mt-5

                text-[#036556]

                font-semibold

                leading-tight

                text-[24px]

                sm:text-[28px]
              "
              >
                ปรึกษาเบื้องต้น
                <br />
                ไม่มีค่าใช้จ่าย
              </h3>

              <p
                className="
                mt-4

                text-[#0B3F34]/75

                font-medium
                leading-relaxed

                text-[14px]

                sm:text-[16px]
              "
              >
                เราพร้อมช่วยประเมินความต้องการขององค์กร
                และแนะนำแนวทางดำเนินงานที่เหมาะสม
                ก่อนเริ่มโครงการจริง
              </p>

              <div
                className="
                mt-6

                rounded-2xl

                bg-[#F7FFFB]

                border border-[#DCEEE8]

                px-4
                py-4
              "
              >

                <p
                  className="
                  text-[#036556]

                  font-semibold

                  leading-relaxed

                  text-[16px]
                  sm:text-[18px]
                "
                >
                  เริ่มต้นวางแผนด้านความยั่งยืน
                  และการบริหารจัดการคาร์บอน
                  ได้อย่างมีทิศทาง
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}