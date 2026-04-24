import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative h-[1200px] bg-white">
      
      {/* 🔥 รวมทั้งหมดเป็น block เดียว */}
      <div className="absolute left-[698px] top-[150px] flex flex-col gap-[120px]">
        
        {/* 🔸 โทรศัพท์ */}
        <div className="flex items-center gap-12">
          <div className="w-[105px] h-[105px] bg-[#73F68D] rounded-full flex items-center justify-center">
            <Phone
              className="w-[52px] h-[52px] text-white"
              strokeWidth={2}
              fill="white"
            />
          </div>

          <div>
            <h3 className="text-[48px] font-semibold text-[#036556] leading-[60px]">
              โทรศัพท์
            </h3>
            <p className="text-[32px] font-medium text-[#036556] leading-[60px]">
              065-419-9000
            </p>
          </div>
        </div>

        {/* 🔸 Email */}
        <div className="flex items-center gap-12">
          <div className="w-[105px] h-[105px] bg-[#73F68D] rounded-full flex items-center justify-center">
            <svg className="w-[60px] h-[60px]" viewBox="0 0 24 24">
              
              {/* 🔸 ซอง */}
              <rect x="4" y="4" width="16" height="16" rx="2" fill="white" />

              {/* 🔸 flap */}
              <polyline
                points="4,4 12,13 20,4"
                fill="none"
                stroke="#73F68D"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-[48px] font-semibold text-[#036556] leading-[60px]">
              Email
            </h3>
            <p className="text-[32px] font-medium text-[#036556] leading-[60px]">
              info@wenextthailand.com
            </p>
          </div>
        </div>

        {/* 🔸 เวลาทำการ */}
        <div className="flex items-center gap-12">
          <div className="w-[105px] h-[105px] bg-[#73F68D] rounded-full flex items-center justify-center">
            <svg className="w-[60px] h-[60px]" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="white" />
              <line
                x1="12"
                y1="12"
                x2="12"
                y2="7"
                stroke="#73F68D"
                strokeWidth="2"
              />
              <line
                x1="12"
                y1="12"
                x2="16"
                y2="12"
                stroke="#73F68D"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-[48px] font-semibold text-[#036556] leading-[60px]">
              เวลาทำการ
            </h3>
            <p className="text-[32px] font-medium text-[#036556] leading-[40px]">
              วันจันทร์ – ศุกร์ <br />
              เวลา 09.00 – 17.00 น.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}