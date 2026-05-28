import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SocialMedia() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white

      py-20
      sm:py-24
      lg:py-32

      px-5
      sm:px-8
      lg:px-12
    "
    >
      <div
        className="
        relative

        max-w-[1450px]
        mx-auto
      "
      >
        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-[0.9fr_1.1fr]

          gap-12
          lg:gap-16
          xl:gap-24

          items-center
        "
        >
          {/* LEFT MOCKUP */}
          <div
            className="
            relative

            flex
            justify-center
            xl:justify-start
          "
          >
            {/* SOFT BG */}
            <div
              className="
              absolute
              inset-0

              flex
              items-center
              justify-center
            "
            >
              <div
                className="
                w-[260px]
                h-[260px]

                sm:w-[340px]
                sm:h-[340px]

                lg:w-[420px]
                lg:h-[420px]

                rounded-full

                bg-[#6DEDC3]/10

                blur-3xl
              "
              />
            </div>

            {/* PHONE */}
            <div
              className="
              relative

              transition-all duration-500

              hover:-translate-y-2
              hover:rotate-[-2deg]
            "
            >
              <Image
                src="/images/facebook-mock.png"
                alt="WeNext Facebook"

                width={420}
                height={780}

                className="
                w-[180px]

                sm:w-[240px]

                md:w-[280px]

                lg:w-[330px]

                xl:w-[370px]

                h-auto
                object-contain

                drop-shadow-[0_35px_60px_rgba(3,101,86,0.16)]
              "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
            flex
            flex-col

            items-start
          "
          >
            {/* LABEL */}
            <div className="flex items-center gap-3 mb-5">
            </div>

            {/* TITLE */}
            <h2
              className="
              text-[#036556]

              font-semibold
              tracking-[-0.04em]

              leading-[1.08]

              text-[30px]

              sm:text-[42px]

              lg:text-[58px]

              xl:text-[70px]

              max-w-[850px]
            "
            >
              ติดตามข่าวสาร
              <br />
              และบทความด้านสิ่งแวดล้อม
            </h2>

            {/* DESC */}
            <p
              className="
              mt-5
              sm:mt-6

              max-w-[700px]

              text-[#0B3F34]/75

              font-medium
              leading-relaxed

              text-[15px]

              sm:text-[17px]

              lg:text-[22px]
            "
            >
              อัปเดตความรู้ด้าน Carbon Footprint, Carbon Credit,
              ESG และเทรนด์ด้านความยั่งยืน
              จากทีม WeNext ได้ผ่านช่องทาง Facebook ของเรา
            </p>

            {/* FACEBOOK CARD */}
            <a
              href="https://facebook.com/wenext.consult"
              target="_blank"
              rel="noopener noreferrer"
              className="
              group

              relative
              overflow-hidden

              mt-8
              sm:mt-10

              w-full
              max-w-[760px]

              bg-[#F7FFFB]

              border border-[#6DEDC3]/20

              rounded-tl-[34px]
              rounded-br-[34px]

              rounded-tr-[10px]
              rounded-bl-[10px]

              p-5
              sm:p-6
              lg:p-7

              transition-all duration-300

              hover:border-[#73F68D]/40
              hover:shadow-[0_24px_50px_-30px_rgba(3,101,86,0.24)]
            "
            >
              <div
                className="
                flex
                items-center

                gap-4
                sm:gap-5
              "
              >
                {/* ICON */}
                <div
                  className="
                  shrink-0

                  w-14 h-14
                  sm:w-16 sm:h-16

                  rounded-2xl

                  bg-[#1877F2]/10

                  flex
                  items-center
                  justify-center
                "
                >
                  <Image
                    src="/images/facebook-blue-logo.png"
                    alt="Facebook"

                    width={42}
                    height={42}

                    className="
                    w-8
                    sm:w-10

                    h-auto
                    object-contain
                  "
                  />
                </div>

                {/* TEXT */}
                <div className="min-w-0 flex-1">
                  <p
                    className="
                    text-[#036556]

                    font-semibold

                    leading-snug

                    text-[16px]

                    sm:text-[20px]

                    lg:text-[24px]
                  "
                  >
                    WeNext – ที่ปรึกษาการบริหารจัดการก๊าซเรือนกระจก
                  </p>

                  <p
                    className="
                    mt-1

                    text-[#62B3A4]

                    text-[13px]

                    sm:text-[15px]

                    lg:text-[18px]

                    truncate
                  "
                  >
                    facebook.com/wenext.consult
                  </p>
                </div>

                {/* ARROW */}
                <div
                  className="
                  shrink-0

                  flex
                  items-center
                  justify-center

                  w-10 h-10
                  sm:w-12 sm:h-12

                  rounded-full

                  border border-[#73F68D]/25

                  transition-all duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                >
                  <ArrowUpRight
                    className="
                    text-[#036556]

                    w-4 h-4
                    sm:w-5 sm:h-5
                  "
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}