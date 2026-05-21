import Hero from "../components/layout/Hero/Hero";
import Image from "next/image";

export default function KnowledgePage() {
  return (
    <div className="relative bg-white overflow-hidden">
      <Hero
        size="small"
        title="ศูนย์ความรู้"
        type="image"
        src="/images/knowledge-hero.jpg"
      />

      {/* SECTION */}
      <section
        className="
        relative
        w-full

        pt-20
        sm:pt-24
        md:pt-32
        lg:pt-28

        pb-24
        sm:pb-28
        md:pb-36
        lg:pb-32

        px-5
        sm:px-8
        lg:px-12
      "
      >
        {/* DECOR */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-[#6DEDC3]/10 blur-3xl" />

          <div className="absolute bottom-[-140px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[#FBB379]/10 blur-3xl" />
        </div>

        <div
          className="
          relative
          max-w-[1200px]
          mx-auto

          flex flex-col
          items-center
          text-center
        "
        >
          {/* COMING SOON */}
          <div
            className="
            inline-flex
            items-center
            justify-center

            px-7
            sm:px-9
            lg:px-12

            py-3
            sm:py-4
            lg:py-5

            rounded-full

            border border-[#FBB379]/30
            bg-[#FBB379]/10

            mb-4
            sm:mb-5
          "
          >
            <span
              className="
              text-[#FBB379]

              font-bold
              tracking-[0.12em]
              leading-none

              text-[18px]

              sm:text-[24px]

              md:text-[32px]

              lg:text-[42px]
            "
            >
              COMING SOON
            </span>
          </div>

          {/* SUBTEXT */}
          <p
            className="
            max-w-[980px]

            text-[#20443B]/80

            font-medium
            leading-[1.45]

            text-[16px]

            sm:text-[20px]

            md:text-[26px]

            lg:text-[34px]
          "
          >
            ติดตามข่าวสารและอัปเดตด้านมาตรฐานสิ่งแวดล้อมและพลังงาน
            <br className="hidden sm:block" />
            จากทีม{" "}
            <span className="inline-flex items-center align-middle mx-1">
              <Image
                src="/wenext-without-logo.png"
                alt="WeNext"
                width={120}
                height={92}
                className="
                  w-[78px]

                  sm:w-[96px]

                  md:w-[110px]

                  lg:w-[128px]

                  h-auto
                "
              />
            </span>
            เร็วๆ นี้
          </p>

          {/* LINE */}
          <div
            className="
            mt-7
            sm:mt-8

            w-20
            sm:w-28

            h-[2px]

            bg-[#73F68D]/60
          "
          />
        </div>
      </section>
    </div>
  );
}
