import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#036556] text-white">
      <div className="px-[210px] py-[50px] grid grid-cols-[600px_auto] gap-[50px]">
        {/* 🔹 LEFT */}
        <div className="grid grid-rows-[auto_auto_auto_auto]">
          <img
            src="/logo-white.png"
            alt="WeNext Logo"
            className="w-[213px] h-[98px] object-contain mb-3"
          />

          <p className="text-[24px] font-semibold mb-4">
            บริษัท วี เน็กซ์ จำกัด
          </p>

          <p className="text-[24px] leading-[36px]">
            807-809 อาคารสีลมเซี่ยงไฮ้ ชั้นที่ 6 ห้องที่ 2 ซอยสีลม 17
          </p>

          <p className="text-[24px] leading-[36px]">
            ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500
          </p>
        </div>

        {/* 🔹 RIGHT */}
        <div className="relative grid grid-rows-[auto_auto_auto_auto] pt-[110px]">
          {/* spacer ให้ตรงกับ logo */}
          <div></div>

          {/* title */}
          <p className="text-[24px] font-semibold mb-4">ติดต่อเรา</p>

          {/* phone */}
          <div className="flex items-start gap-3 text-[24px] leading-[36px]">
            <Phone className="w-[24px] h-[24px] fill-white stroke-none mt-[2px]" />
            <span>065-419-9000</span>
          </div>

          {/* time */}
          <div className="flex items-start gap-3 text-[24px] leading-[36px]">
            <svg className="w-[24px] h-[24px] mt-[4px]" viewBox="0 0 24 24">
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
            <span>จันทร์ – ศุกร์ (เวลา 09.00 – 17.00 น.)</span>
          </div>

          {/* 🔥 SOCIAL (ลอย ไม่กระทบ layout) */}
          <div className="absolute right-0 bottom-0 flex gap-5">
            <img
              src="/icons/facebook2.png"
              alt="facebook"
              className="w-[38px] h-[38px] cursor-pointer hover:opacity-70 transition"
            />
            <img
              src="/icons/linkedin2.png"
              alt="linkedin"
              className="w-[38px] h-[38px] cursor-pointer hover:opacity-70 transition"
            />
            <img
              src="/icons/line.png"
              alt="line"
              className="w-[38px] h-[38px] cursor-pointer hover:opacity-70 transition"
            />
            <img
              src="/icons/whatsapp.png"
              alt="whatsapp"
              className="w-[43px] h-[43px] cursor-pointer hover:opacity-70 transition translate-y-[-4px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
