import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#036556] text-white overflow-hidden">
      <div
        className="
          max-w-[1600px]
          mx-auto

          px-[120px]
          pt-[26px]
          pb-[34px]

          max-[1440px]:px-[72px]
          max-[1280px]:px-[56px]
          max-[1100px]:px-[40px]
          max-[768px]:px-[30px]
          max-[640px]:px-5

          max-[768px]:pt-[22px]
          max-[768px]:pb-[28px]

          max-[640px]:pt-[18px]
          max-[640px]:pb-[24px]

          grid grid-cols-[minmax(0,1fr)_420px]
          max-[1100px]:grid-cols-1

          gap-[80px]
          max-[1440px]:gap-[56px]
          max-[1100px]:gap-10
          max-[640px]:gap-8

          items-start
        "
      >
        {/* 🔹 LEFT */}
        <div className="min-w-0">
          <img
            src="/logo-white.png"
            alt="WeNext Logo"
            className="
              w-[213px]
              h-[98px]
              object-contain
              mb-1

              max-[768px]:w-[180px]
              max-[768px]:h-auto
            "
          />

          <p
            className="
              text-[24px]
              font-semibold
              mb-2

              max-[1440px]:text-[22px]

              max-[768px]:text-[20px]
              max-[640px]:text-[18px]
            "
          >
            บริษัท วี เน็กซ์ จำกัด
          </p>

          <p
            className="
              max-w-[760px]

              text-[24px]
              leading-[36px]

              max-[1440px]:text-[20px]
              max-[1440px]:leading-[32px]

              max-[768px]:text-[18px]
              max-[768px]:leading-[30px]

              max-[640px]:text-[16px]
              max-[640px]:leading-[28px]
            "
          >
            807-809 อาคารสีลมเซี่ยงไฮ้ ชั้นที่ 6 ห้องที่ 2 ซอยสีลม 17 ถนนสีลม
            แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500
          </p>
        </div>

        {/* 🔹 RIGHT */}
        <div
          className="
            w-full
            max-w-[420px]

            pt-[92px]

            max-[1100px]:pt-0
          "
        >
          {/* title */}
          <p
            className="
              text-[24px]
              font-semibold
              mb-2

              max-[1440px]:text-[22px]

              max-[768px]:text-[20px]
              max-[640px]:text-[18px]
            "
          >
            ติดต่อเรา
          </p>

          {/* phone */}
          <div
            className="
              flex items-start gap-3

              text-[24px]
              leading-[36px]

              mb-3

              max-[1440px]:text-[20px]
              max-[1440px]:leading-[32px]

              max-[768px]:text-[18px]
              max-[768px]:leading-[30px]

              max-[640px]:text-[16px]
              max-[640px]:leading-[28px]
            "
          >
            <Phone
              className="
                w-[24px]
                h-[24px]
                fill-white
                stroke-none
                mt-[3px]
                shrink-0

                max-[1440px]:w-[22px]
                max-[1440px]:h-[22px]

                max-[640px]:w-5
                max-[640px]:h-5
              "
            />

            <span>065-419-9000</span>
          </div>

          {/* time */}
          <div
            className="
              flex items-start gap-3

              text-[24px]
              leading-[36px]

              max-[1440px]:text-[20px]
              max-[1440px]:leading-[32px]

              max-[768px]:text-[18px]
              max-[768px]:leading-[30px]

              max-[640px]:text-[16px]
              max-[640px]:leading-[28px]
            "
          >
            <svg
              className="
                w-[24px]
                h-[24px]
                mt-[4px]
                shrink-0

                max-[1440px]:w-[22px]
                max-[1440px]:h-[22px]

                max-[640px]:w-5
                max-[640px]:h-5
              "
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="white" />

              <line
                x1="12"
                y1="12"
                x2="12"
                y2="7"
                stroke="#036556"
                strokeWidth="2"
              />

              <line
                x1="12"
                y1="12"
                x2="16"
                y2="12"
                stroke="#036556"
                strokeWidth="2"
              />
            </svg>

            <span>จันทร์ – ศุกร์ (เวลา 09.00 – 17.00)</span>
          </div>

          {/* 🔥 SOCIAL */}
          <div
            className="
              flex flex-wrap items-center gap-4

              mt-6

              max-[640px]:gap-3
              max-[640px]:mt-5
            "
          >
            <a
              href="https://web.facebook.com/WeNext.consult"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/facebook2.png"
                alt="facebook"
                className="
                  w-[36px]
                  h-[36px]

                  cursor-pointer
                  hover:opacity-70
                  transition

                  max-[1440px]:w-[32px]
                  max-[1440px]:h-[32px]

                  max-[640px]:w-8
                  max-[640px]:h-8
                "
              />
            </a>

            <a
              href="https://www.linkedin.com/company/wenextthailand/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/linkedin2.png"
                alt="linkedin"
                className="
                  w-[36px]
                  h-[36px]

                  cursor-pointer
                  hover:opacity-70
                  transition

                  max-[1440px]:w-[32px]
                  max-[1440px]:h-[32px]

                  max-[640px]:w-8
                  max-[640px]:h-8
                "
              />
            </a>

            <a
              href="https://lin.ee/tjdYGHF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/line.png"
                alt="line"
                className="
                  w-[36px]
                  h-[36px]

                  cursor-pointer
                  hover:opacity-70
                  transition

                  max-[1440px]:w-[32px]
                  max-[1440px]:h-[32px]

                  max-[640px]:w-8
                  max-[640px]:h-8
                "
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}