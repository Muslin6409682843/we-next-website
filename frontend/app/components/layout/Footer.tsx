import { Phone } from "lucide-react";


export default function Footer() {
  return (
    <footer className="w-full bg-[#036556] text-white overflow-hidden">
      <div
        className="
          px-[210px] py-[50px]

          max-[1400px]:px-[120px]
          max-[1200px]:px-[80px]
          max-[992px]:px-[50px]
          max-[768px]:px-[30px]
          max-[640px]:px-5

          grid grid-cols-[600px_auto]
          max-[1100px]:grid-cols-1

          gap-[50px]
          max-[1100px]:gap-10
        "
      >
        {/* 🔹 LEFT */}
        <div className="grid grid-rows-[auto_auto_auto_auto]">
          <img
            src="/logo-white.png"
            alt="WeNext Logo"
            className="
              w-[213px] h-[98px] object-contain mb-3

              max-[768px]:w-[180px]
              max-[768px]:h-auto
            "
          />

          <p
            className="
              text-[24px] font-semibold mb-4

              max-[768px]:text-[20px]
              max-[640px]:text-[18px]
            "
          >
            บริษัท วี เน็กซ์ จำกัด
          </p>

          <p
            className="
              text-[24px] leading-[36px]

              max-[768px]:text-[20px]
              max-[768px]:leading-[32px]

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
            relative
            grid grid-rows-[auto_auto_auto_auto]

            pt-[110px]

            max-[1100px]:pt-0
          "
        >
          {/* spacer */}
          <div className="max-[1100px]:hidden"></div>

          {/* title */}
          <p
            className="
              text-[24px] font-semibold mb-4

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
              text-[24px] leading-[36px]

              max-[768px]:text-[20px]
              max-[768px]:leading-[32px]

              max-[640px]:text-[16px]
              max-[640px]:leading-[28px]
            "
          >
            <Phone
              className="
                w-[24px] h-[24px]
                fill-white stroke-none mt-[2px]

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
              text-[24px] leading-[36px]

              max-[768px]:text-[20px]
              max-[768px]:leading-[32px]

              max-[640px]:text-[16px]
              max-[640px]:leading-[28px]
            "
          >
            <svg
              className="
                w-[24px] h-[24px] mt-[4px]

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
              absolute
              right-0
              bottom-0

              flex gap-5

              /* 🔥 Nest Hub fix */
              max-[1024px]:relative
              max-[1024px]:right-auto
              max-[1024px]:bottom-auto
              max-[1024px]:mt-8

              /* 🔥 จอเตี้ยแบบ Nest Hub */
              max-h-[700px]:relative
              max-h-[700px]:right-auto
              max-h-[700px]:bottom-auto
              max-h-[700px]:mt-8

              max-[640px]:gap-4
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
                  w-[38px] h-[38px]
                  cursor-pointer hover:opacity-70 transition

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
                  w-[38px] h-[38px]
                  cursor-pointer hover:opacity-70 transition

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
                  w-[38px] h-[38px]
                  cursor-pointer hover:opacity-70 transition

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
