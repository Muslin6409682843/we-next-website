import Image from "next/image";

export default function CTA() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white

      px-5
      sm:px-8
      lg:px-12

      pb-20
      sm:pb-24
      lg:pb-32
    "
    >
      <div
        className="
        relative

        max-w-[1450px]
        mx-auto
      "
      >
        {/* MAIN BLOCK */}
        <div
          className="
          relative
          overflow-hidden

          bg-[#F7FFFB]

          border border-[#6DEDC3]/20

          rounded-tl-[42px]
          rounded-br-[42px]

          rounded-tr-[12px]
          rounded-bl-[12px]

          px-6
          sm:px-8
          lg:px-14

          py-10
          sm:py-14
          lg:py-16
        "
        >
          {/* SOFT DECOR */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="
              absolute
              top-[-120px]
              right-[-120px]

              w-[320px]
              h-[320px]

              rounded-full

              bg-[#6DEDC3]/10

              blur-3xl
            "
            />

            <div
              className="
              absolute
              bottom-[-120px]
              left-[-120px]

              w-[260px]
              h-[260px]

              rounded-full

              bg-[#73F68D]/10

              blur-3xl
            "
            />
          </div>

          <div
            className="
            relative

            grid
            grid-cols-1
            xl:grid-cols-[1fr_auto]

            gap-10
            lg:gap-14

            items-center
          "
          >
            {/* LEFT */}
            <div>
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

                xl:text-[68px]

                max-w-[950px]
              "
              >
                แวะมาพูดคุยกับเราได้เสมอ
              </h2>

              {/* SUBTEXT */}
              <p
                className="
                mt-5
                sm:mt-6

                max-w-[860px]

                text-[#0B3F34]/75

                font-medium
                leading-relaxed

                text-[16px]

                sm:text-[18px]

                lg:text-[24px]

                xl:text-[28px]
              "
              >
                เราพร้อมช่วยให้องค์กรของท่านเริ่มต้น
                การเดินทางสู่ความยั่งยืนอย่างมั่นใจ
                พร้อมให้คำปรึกษาในแบบที่เข้าใจง่ายและนำไปใช้ได้จริง
              </p>

            </div>

            {/* RIGHT QR */}
            <div
              className="
              relative

              flex
              justify-center
            "
            >
              {/* GLOW */}
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
                  w-[220px]
                  h-[220px]

                  sm:w-[260px]
                  sm:h-[260px]

                  rounded-full

                  bg-[#6DEDC3]/15

                  blur-3xl
                "
                />
              </div>

              {/* QR CARD */}
              <div
                className="
                relative

                bg-white

                p-4
                sm:p-5
                lg:p-6

                rounded-[28px]

                border border-[#6DEDC3]/20

                shadow-[0_25px_60px_-30px_rgba(3,101,86,0.18)]
              "
              >
                <Image
                  src="/images/line-qr.jpg"
                  alt="LINE QR"

                  width={280}
                  height={280}

                  className="
                  w-[180px]

                  sm:w-[220px]

                  lg:w-[260px]

                  h-auto

                  rounded-[16px]
                  object-cover
                "
                />

                {/* SMALL TEXT */}
                <p
                  className="
                  mt-4

                  text-center

                  text-[#036556]

                  font-medium

                  text-[13px]
                  sm:text-[14px]
                "
                >
                  สแกนเพื่อพูดคุยกับทีม WeNext
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}