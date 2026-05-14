// /components/sections/services/details/CTASection.tsx

import Image from "next/image";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-[100px] bg-white overflow-hidden">
      <div
        className="
          mx-auto
          max-w-[1400px]

          px-5
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-[80px]
        "
      >
        <div
          className="
            relative
            rounded-[40px]
            bg-gradient-to-br from-[#036556] to-[#04846F]
            overflow-hidden

            px-[40px]
            py-[50px]

            md:px-[60px]
            md:py-[65px]

            shadow-[0_20px_60px_rgba(3,101,86,0.18)]
          "
        >
          {/* background glow */}
          <div className="absolute -top-[120px] -right-[120px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-[100px] -left-[100px] w-[250px] h-[250px] bg-[#8EF2D7]/10 rounded-full blur-3xl" />

          <div
            className="
              relative z-10
              grid
              gap-[50px]

              lg:grid-cols-[1.1fr_420px]
              lg:items-center
            "
          >
            {/* LEFT */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                <MessageCircle size={16} />
                ติดต่อเรา
              </div>

              <h2
                className="
                  mt-6
                  text-[34px]
                  leading-[1.2]
                  font-bold

                  sm:text-[42px]
                  lg:text-[50px]
                "
              >
                หากท่านต้องการ
                <br />
                สอบถามเพิ่มเติม
              </h2>

              <p
                className="
                  mt-5
                  text-white
                  text-[20px]
                  leading-[1.9]
                  font-medium
                  max-w-[680px]
                "
              >
                สามารถติดต่อทีมงานของเราได้ผ่านช่องทางด้านล่าง
                <br />
                พร้อมให้คำปรึกษาและตอบทุกคำถามของคุณ
              </p>

              {/* contact cards */}
              <div className="mt-10 flex flex-col gap-5 max-w-[520px]">
                {/* phone */}
                <div
                  className="
                    flex items-start gap-4
                    rounded-[24px]
                    bg-white
                    border border-white

                    px-5 py-5

                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  "
                >
                  <div className="w-[54px] h-[54px] rounded-full bg-[#8EF2D7] flex items-center justify-center shrink-0">
                    <Phone className="text-[#036556]" size={24} />
                  </div>

                  <div>
                    <p className="text-[#5F5F5F] text-sm font-medium">
                      โทรศัพท์
                    </p>

                    <p
                      className="
                        mt-1
                        text-[24px]
                        font-bold
                        tracking-wide
                        text-[#036556]
                    "
                    >
                      065-419-9000
                    </p>
                  </div>
                </div>

                {/* email */}
                <div
                  className="
                    flex items-start gap-4
                    rounded-[24px]
                    bg-white
                    border border-white

                    px-5 py-5

                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  "
                >
                  <div className="w-[54px] h-[54px] rounded-full bg-[#8EF2D7] flex items-center justify-center shrink-0">
                    <Mail className="text-[#036556]" size={24} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[#5F5F5F] text-sm font-medium">Email</p>

                    <p
                      className="
    mt-1
    text-[20px]
    font-semibold
    break-all
    text-[#036556]
  "
                    >
                      info@wenextthailand.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                relative
                flex flex-col items-center justify-center
                rounded-[32px]
                bg-white

                px-6 py-8

                shadow-[0_10px_40px_rgba(0,0,0,0.12)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F4FFFC] rounded-[32px]" />

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className="
    w-[90px]
    h-[90px]
    rounded-full
    bg-[#06C755]
    flex items-center justify-center

    shadow-[0_10px_30px_rgba(6,199,85,0.35)]
  "
                >
                  <Image
                    src="/icons/line.png"
                    alt="LINE"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-6 text-[26px] font-bold text-[#1A1A1A] text-center">
                  ติดต่อผ่าน LINE
                </h3>

                <p className="mt-2 text-[#666] text-center leading-[1.7]">
                  สแกน QR Code ได้เลย
                </p>

                <div
                  className="
                    mt-7
                    rounded-[28px]
                    bg-[#F8F8F8]
                    p-4

                    shadow-inner
                  "
                >
                  <Image
                    src="/images/line-qr.jpg"
                    alt="LINE QR Code"
                    width={260}
                    height={260}
                    className="
                      rounded-[18px]
                      object-cover
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
