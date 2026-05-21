import Image from "next/image";

export default function Location() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white

      pt-8
sm:pt-10
lg:pt-14

pb-20
sm:pb-24
lg:pb-28
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

        grid
        grid-cols-1
        xl:grid-cols-[1.05fr_0.95fr]

        gap-10
        lg:gap-14
        xl:gap-20

        items-center
      "
      >
        {/* IMAGES */}
        <div
          className="
          relative

          grid
          grid-cols-2

          gap-4
          sm:gap-5
          lg:gap-6
        "
        >
          {/* LEFT IMAGE */}
          <div
            className="
            relative

            mt-8
            sm:mt-12
            lg:mt-16
          "
          >
            <div
              className="
              relative
              overflow-hidden

              rounded-tl-[40px]
              rounded-br-[40px]

              rounded-tr-[10px]
              rounded-bl-[10px]

              aspect-[4/5]

              shadow-[0_30px_60px_-30px_rgba(3,101,86,0.22)]
            "
            >
              <Image
                src="/images/location-1.jpg"
                alt="สำนักงาน WeNext"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div
              className="
              relative
              overflow-hidden

              rounded-tl-[40px]
              rounded-br-[40px]

              rounded-tr-[10px]
              rounded-bl-[10px]

              aspect-[4/5]

              shadow-[0_30px_60px_-30px_rgba(3,101,86,0.22)]
            "
            >
              <Image
                src="/images/location-2.jpg"
                alt="ห้องสัมมนา WeNext"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="
          relative

          flex
          flex-col

          items-start
        "
        >
          {/* LABEL */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-[#73F68D]" />

            <span
              className="
              text-[#73F68D]

              uppercase
              tracking-[0.25em]

              text-[11px]
              sm:text-[12px]
            "
            >
              Location
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
            text-[#036556]

            font-semibold
            tracking-[-0.04em]

            leading-[1.08]

            text-[32px]

            sm:text-[44px]

            lg:text-[58px]

            xl:text-[72px]

            max-w-[720px]
          "
          >
            สำนักงานของเราตั้งอยู่ที่ ถนนสีลม ซอย 17
          </h2>

          {/* SUBTEXT */}
          <p
            className="
            mt-5
            sm:mt-6

            max-w-[640px]

            text-[#62B3A4]

            font-medium
            leading-relaxed

            text-[16px]

            sm:text-[18px]

            lg:text-[24px]

            xl:text-[28px]
          "
          >
            ใกล้วัดแขก พร้อมห้องสัมมนาขนาดเล็ก
            สำหรับการประชุมและปรึกษาหารือแบบตัวต่อตัว
          </p>
        </div>
      </div>
    </section>
  );
}
