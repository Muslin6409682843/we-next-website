import { Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#036556] text-white">
      <div className="px-[210px] py-[50px] flex justify-between items-center">
        {/* 🔹 LEFT */}
        <div className="flex flex-col -ml-[40px]">
          <img
            src="/logo-white.png"
            alt="WeNext Logo"
            className="w-[213px] h-[98px] object-contain mb-3"
          />

          <p className="text-[24px] font-semibold mb-2">
            บริษัท วี เน็กซ์ จำกัด
          </p>

          <p className="text-[24px] leading-snug">
            807-809 อาคารสีลมเซี่ยงไฮ้ ชั้นที่ 6 ห้องที่ 2 ซอยสีลม 17
          </p>
          <p className="text-[24px] leading-snug">
            ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500
          </p>
        </div>

        {/* 🔹 RIGHT */}
        <div className="flex items-start gap-[80px] pt-[110px]">
          {/* CONTACT */}
          <div className="mt-[10px]">
            <p className="text-[24px] font-semibold mb-3">ติดต่อเรา</p>

            <div className="flex items-center gap-3 text-[24px] mb-1">
              <Phone className="w-[24px] h-[24px] fill-white stroke-none" />
              <span>065-419-9000</span>
            </div>

            <div className="flex items-center gap-3 text-[24px]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="text-white"
              >
                {/* วงกลมทึบ */}
                <circle cx="12" cy="12" r="10" fill="white" />

                {/* เข็มนาฬิกา */}
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
              <span>จันทร์ – ศุกร์ (เวลา 09.00 – 17.00 น.)</span>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">
            <img
              src="/icons/facebook.png"
              alt="facebook"
              className="w-[28px] h-[28px] cursor-pointer hover:opacity-70 transition"
            />
            <img
              src="/icons/linkedin.png"
              alt="linkedin"
              className="w-[28px] h-[28px] cursor-pointer hover:opacity-70 transition"
            />
            <img
              src="/icons/line.png"
              alt="line"
              className="w-[28px] h-[28px] cursor-pointer hover:opacity-70 transition"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
