import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-white

      py-16
      md:py-24
      lg:py-28
    "
    >
      <div
        className="
        relative

        w-full
        max-w-[92vw]
        2xl:max-w-[1350px]

        mx-auto
      "
      >
        {/* LABEL */}
        <div className="flex items-center gap-3 mb-5 md:mb-6">
          <div className="w-8 md:w-12 h-[1px] bg-[#73F68D]" />

          <span
            className="
            text-[#73F68D]

            text-[10px]
            md:text-[12px]

            tracking-[0.28em]
            uppercase
          "
          >
            Contact Us
          </span>
        </div>

        {/* TITLE */}
        <h2
          className="
          text-[#036556]

          font-semibold
          tracking-[-0.04em]

          leading-[1.1]

          text-[28px]

          sm:text-[38px]

          md:text-[52px]

          lg:text-[68px]

          xl:text-[78px]

          max-w-[1050px]
        "
        >
          ไม่แน่ใจว่าบริการไหน
          <br />
          เหมาะกับองค์กรของท่าน?
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
          mt-6
          md:mt-7
          lg:mt-8

          max-w-[760px]

          text-[#0B3F34]/75

          font-medium

          text-[14px]

          sm:text-[16px]

          md:text-[20px]

          lg:text-[24px]

          leading-relaxed
        "
        >
          เราพร้อมพูดคุยและให้คำปรึกษาเบื้องต้นโดยไม่มีค่าใช้จ่าย
          เพียงบอกเราว่าองค์กรของท่านทำธุรกิจอะไร — แค่นั้นก็พอ
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="
          group

          inline-flex
          items-center

          mt-5
md:mt-7
lg:mt-8
        "
        >
          <div className="flex items-center gap-3 md:gap-4">
            <span
              className="
              text-[#73F68D]

              font-bold
              tracking-[-0.03em]

              text-[22px]

              sm:text-[30px]

              md:text-[42px]

              lg:text-[54px]

              transition-all duration-300
            "
            >
              ติดต่อเราได้เลย
            </span>

            <div
              className="
              flex items-center justify-center

              w-10 h-10
              sm:w-12 sm:h-12
              md:w-14 md:h-14
              lg:w-16 lg:h-16

              rounded-full

              border border-[#73F68D]/30

              transition-all duration-300

              group-hover:translate-x-1.5
              group-hover:-translate-y-1
            "
            >
              <ArrowUpRight
                className="
                text-[#036556]

                w-4 h-4
                sm:w-5 sm:h-5
                md:w-6 md:h-6
              "
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}