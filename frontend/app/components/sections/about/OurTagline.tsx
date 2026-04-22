import { Icon } from "@iconify/react";

export default function OurTagline() {
  return (
    <section className="w-full bg-white py-[120px] flex justify-center">
      {/* 🔥 container กลางจริง + ปรับ balance */}
      <div className="flex items-center gap-[80px] translate-x-[45px]">
        {/* 🔹 LEFT: TEXT */}
        <div className="relative w-[705px] flex-shrink-0">
          {/* 🔸 QUOTE ICON (ซ้ายบน) */}
          <Icon
            icon="si:quote-fill"
            className="absolute top-[-15px] -left-[50px] w-[46px] h-[46px] text-[#036556] rotate-180 z-10"
          />

          {/* 🔸 TEXT */}
          <h2 className="text-[48px] leading-[72px] font-semibold text-[#036556]">
            <span className="text-[#73F68D]">เรื่องใกล้ตัว</span>
            เล็กๆ น้อยๆ หากเราใส่ใจ
            <br />
            ก็ช่วย
            <span className="text-[#73F68D]">ลดโลกร้อน</span>
            ได้เหมือนกัน
          </h2>

          {/* 🔸 AUTHOR */}
          <p className="text-[24px] text-[#036556] mt-[24px]">— คุณอาร์ม</p>

          {/* 🔸 QUOTE ICON (ขวาล่าง) */}
          <Icon
            icon="si:quote-fill"
            className="absolute bottom-[95px] right-[85px] w-[46px] h-[46px] text-[#036556]"
          />
        </div>

        {/* 🔹 RIGHT: IMAGE */}
        <div className="w-[640px] h-[360px] flex-shrink-0">
          <img
            src="/images/tagline.jpg"
            alt="tagline"
            className="w-full h-full object-cover rounded-[30px_0px]"
          />
        </div>
      </div>
    </section>
  );
}
