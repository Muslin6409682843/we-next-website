// /components/sections/services/details/CTASection.tsx

import Image from "next/image";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">

        {/* MAIN GRID */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">

          {/* LEFT PANEL */}
          <div className="flex flex-col justify-center">

            {/* title */}
            <h2 className="mt-6 text-[30px] sm:text-[38px] lg:text-[46px] font-bold leading-tight text-[#036556]">
              ติดต่อเรา <br />
              เพื่อสอบถามเพิ่มเติม
            </h2>

            {/* description */}
            <p className="mt-5 text-[#666] text-[15px] sm:text-[17px] leading-relaxed max-w-[520px]">
              ทีมงานของเราพร้อมช่วยเหลือคุณในทุกคำถาม
              ไม่ว่าจะเป็นรายละเอียดบริการ การใช้งาน หรือคำปรึกษาเชิงธุรกิจ
            </p>

            {/* CONTACT LIST (NON-CLICKABLE) */}
            <div className="mt-10 space-y-4">

              {/* PHONE (static) */}
              <div className="flex items-center gap-4 rounded-2xl border border-[#E8EEEC] bg-white px-5 py-4 cursor-default">
                <div className="w-11 h-11 rounded-xl bg-[#EAF7F3] flex items-center justify-center">
                  <Phone className="text-[#036556]" size={20} />
                </div>

                <div className="flex-1">
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-[#036556] font-semibold text-lg">
                    065-419-9000, 065-415-5000
                  </p>
                </div>
              </div>

              {/* EMAIL (static) */}
              <div className="flex items-center gap-4 rounded-2xl border border-[#E8EEEC] bg-white px-5 py-4 cursor-default">
                <div className="w-11 h-11 rounded-xl bg-[#EAF7F3] flex items-center justify-center">
                  <Mail className="text-[#036556]" size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-[#036556] font-semibold text-base sm:text-lg truncate">
                    info@wenextthailand.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT PANEL (LINE BOX) */}
          <div className="flex items-center justify-center lg:justify-end">

            <div className="w-full max-w-[420px] rounded-[28px] bg-white border border-[#E8EEEC] p-6 sm:p-8">

              {/* header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#06C755] flex items-center justify-center">
                  <Image
                    src="/icons/line.png"
                    alt="LINE"
                    width={28}
                    height={28}
                  />
                </div>

                <div>
                  <p className="font-semibold text-[#036556]">
                    LINE Official
                  </p>
                  <p className="text-xs text-gray-500">
                    แอดเพื่อพูดคุยกับทีมงาน
                  </p>
                </div>
              </div>

              {/* QR */}
              <div className="mt-6 rounded-2xl bg-[#F6F8F7] p-4">
                <Image
                  src="/images/line-qr.jpg"
                  alt="LINE QR"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>

              {/* note */}
              <p className="mt-4 text-center text-xs text-gray-400">
                สแกน QR Code เพื่อเริ่มแชท
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}