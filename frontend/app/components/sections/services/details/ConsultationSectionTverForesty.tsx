// /components/sections/services/details/ConsultationSectionTverForesty.tsx

import Image from "next/image";

export default function ConsultationSectionTverForesty() {
  return (
    <section
      className="
        w-full
        overflow-x-hidden

        px-[210px]
        py-[120px]

        max-[1400px]:px-[120px]
        max-[1200px]:px-[80px]
        max-[992px]:px-[50px]
        max-[768px]:px-[30px]
        max-[640px]:px-5
      "
    >
      <div
        className="
          max-w-[1500px]
          mx-auto

          flex
          items-center
          justify-between
          gap-[30px]

          max-[992px]:flex-col
          max-[992px]:items-start
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 min-w-0">
          {/* LINE 1 */}
          <p
            className="
              text-[#036556]
              font-semibold
              text-[32px]
              leading-42px]
              mb-1
              max-[768px]:text-[24px]
              max-[768px]:leading-[38px]
            "
          >
            หากท่านมีพื้นที่สีเขียวและต้องการทราบว่าพัฒนาเป็นโครงการคาร์บอนเครดิตได้หรือไม่
          </p>

          {/* LINE 2 */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              mb-[-50px]
            "
          >
            <span
              className="
                text-[#036556]
                font-semibold
                text-[42px]
                leading-[72px]
                mb-[-20px]

                max-[768px]:text-[34px]
                max-[768px]:leading-[50px]
              "
            >
              เริ่มต้นจากการประเมินศักยภาพเบื้องต้นก่อน
            </span>

            <span
              className="
                text-[#73F68D]
                font-semibold
                text-[42px]
                leading-[72px]

                max-[768px]:text-[34px]
                max-[768px]:leading-[50px]
              "
            >
              จะช่วยประหยัดเวลาและลดความเสี่ยงได้มากที่สุด
            </span>
          </div>

          {/* LINE 3 */}
          <div
            className="
              flex
              flex-nowrap
              items-center
              gap-x-3
              mb-[-40px]

              max-[1200px]:flex-wrap
            "
          >
            <span
              className="
                shrink-0

                text-[#036556]
                font-semibold
                text-[42px]
                leading-[72px]

                max-[768px]:text-[34px]
                max-[768px]:leading-[50px]
              "
            >
              ติดต่อ
            </span>

            <Image
              src="/wenext-without-logo.png"
              alt="WeNext Logo"
              width={204}
              height={68}
              className="
                shrink-0

                w-[204px]
                h-auto

                max-[768px]:w-[160px]
              "
            />

            <span
              className="
                shrink

                text-[#73F68D]
                font-semibold
                text-[42px]
                leading-[62px]
                whitespace-nowrap

                max-[768px]:text-[34px]
                max-[768px]:leading-[50px]
              "
            >
              เราจะช่วยประเมิน
            </span>
          </div>

          {/* LINE 4 */}
          <p
            className="
              text-[#036556]
              font-semibold
              text-[32px]
              leading-[42px]

              max-[768px]:text-[24px]
              max-[768px]:leading-[38px]
            "
          >
            โอกาสของพื้นที่ของท่าน และวาง roadmap ที่เหมาะสมตั้งแต่ต้น
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
    shrink-0
    mr-[-120px]

    max-[1400px]:mr-[-90px]
    max-[1200px]:mr-[-40px]

    max-[992px]:mx-auto
    max-[992px]:mr-0
  "
        >
          <Image
            src="/images/wenext-welcome.png"
            alt="WeNext Welcome"
            width={480}
            height={320}
            className="
      w-[480px]
      h-auto
      object-contain

      max-[1400px]:w-[420px]
      max-[1200px]:w-[340px]
      max-[768px]:w-[280px]
      max-[640px]:w-full
    "
          />
        </div>
      </div>
    </section>
  );
}
