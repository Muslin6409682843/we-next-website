// /components/sections/services/details/ConsultationSectionCFP.tsx

import { CheckCircle2, Sparkles } from "lucide-react";

export default function ConsultationSectionCFP() {
  return (
    <section className="relative bg-white py-24 sm:py-28 lg:py-32 overflow-hidden">

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">

        {/* WRAPPER */}
        <div className="relative overflow-hidden rounded-[36px] border border-[#DCEEE8] bg-[#F7FFFB] px-6 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16">

          {/* background glow */}
          <div className="absolute -top-24 -right-24 w-[240px] h-[240px] bg-[#73F68D]/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-[220px] h-[220px] bg-[#036556]/5 blur-3xl rounded-full" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_420px] gap-12 lg:gap-16 items-start">

            {/* LEFT */}
            <div className="space-y-8">

              {/* CONTENT (STRICT TEXT ONLY) */}
              <div className="space-y-6">

                <p className="text-[#036556] font-medium text-[18px] sm:text-[22px] lg:text-[26px] leading-relaxed">
                  หากสินค้าของท่านต้องการความน่าเชื่อถือด้านสิ่งแวดล้อมมากขึ้น หรือกำลังเตรียมตอบคำถามจากลูกค้าและคู่ค้าต่างประเทศ CFP จะช่วยให้ท่านมีคำตอบที่เป็นตัวเลขและตรวจสอบได้
                </p>

                <p className="text-[#036556] font-medium text-[18px] sm:text-[22px] lg:text-[26px] leading-relaxed">
                  พูดคุยกับ We Next วันนี้ เพื่อประเมินว่าผลิตภัณฑ์ใดควรเริ่มทำก่อน และควรวางขอบเขตอย่างไรให้คุ้มค่าที่สุด
                </p>

              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="lg:sticky lg:top-24">

              <div className="rounded-[32px] border border-[#73F68D]/20 bg-white p-6 sm:p-8 shadow-[0_30px_80px_-50px_rgba(3,101,86,0.25)]">

                <div className="flex items-start gap-3">

                  <CheckCircle2 className="w-5 h-5 text-[#73F68D] mt-[4px] shrink-0" />

                  <p className="text-[#036556] font-medium text-[15px] sm:text-[17px] leading-relaxed">
                    หากสินค้าของท่านต้องการความน่าเชื่อถือด้านสิ่งแวดล้อมมากขึ้น หรือกำลังเตรียมตอบคำถามจากลูกค้าและคู่ค้าต่างประเทศ CFP จะช่วยให้ท่านมีคำตอบที่เป็นตัวเลขและตรวจสอบได้
                  </p>

                </div>

                <div className="mt-6 flex items-start gap-3">

                  <CheckCircle2 className="w-5 h-5 text-[#73F68D] mt-[4px] shrink-0" />

                  <p className="text-[#036556] font-medium text-[15px] sm:text-[17px] leading-relaxed">
                    พูดคุยกับ We Next วันนี้ เพื่อประเมินว่าผลิตภัณฑ์ใดควรเริ่มทำก่อน และควรวางขอบเขตอย่างไรให้คุ้มค่าที่สุด
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}