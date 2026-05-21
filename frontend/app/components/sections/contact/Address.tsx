import {
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Address() {
  return (
    <section
  className="
  relative
  overflow-hidden
  bg-white

  mt-10
  md:mt-16
  lg:mt-20
  xl:mt-0

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
        {/* CARD */}
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

          shadow-[0_35px_70px_-40px_rgba(3,101,86,0.18)]
        "
        >
          {/* TOP */}
          <div
            className="
            flex
            flex-col
            xl:flex-row

            xl:items-center
            xl:justify-between

            gap-10

            p-6
            sm:p-8
            lg:p-12
          "
          >
            {/* LEFT */}
            <div className="flex items-start gap-5">
              {/* ICON */}
              <div
                className="
                shrink-0

                w-14 h-14
                sm:w-16 sm:h-16
                lg:w-20 lg:h-20

                rounded-2xl

                bg-[#73F68D]/15
                border border-[#73F68D]/20

                flex items-center justify-center
              "
              >
                <MapPin
                  className="
                  text-[#036556]

                  w-7 h-7
                  sm:w-8 sm:h-8
                  lg:w-9 lg:h-9
                "
                />
              </div>

              {/* TEXT */}
              <div>
                {/* LABEL */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-[#73F68D]" />

                  <span
                    className="
                    text-[#73F68D]

                    uppercase
                    tracking-[0.22em]

                    text-[10px]
                    sm:text-[11px]
                  "
                  >
                    Address
                  </span>
                </div>

                {/* TITLE */}
                <h2
                  className="
                  text-[#036556]

                  font-semibold
                  tracking-[-0.04em]

                  leading-[1.08]

                  text-[28px]

                  sm:text-[40px]

                  lg:text-[56px]
                "
                >
                  ที่อยู่บริษัท
                </h2>

                {/* SUBTEXT */}
                <p
                  className="
                  mt-4

                  max-w-[760px]

                  text-[#0B3F34]/75

                  font-medium
                  leading-relaxed

                  text-[15px]

                  sm:text-[17px]

                  lg:text-[22px]
                "
                >
                  807-809 อาคารสีลมเซี่ยงไฮ้ ชั้นที่ 6 ห้องที่ 2
                  <br className="hidden sm:block" />
                  ซอยสีลม 17 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <a
              href="https://maps.google.com/?q=We+Next+Co.,Ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="
              group

              inline-flex
              items-center
              justify-center

              gap-3

              shrink-0

              px-5
              sm:px-6

              h-12
              sm:h-14

              rounded-full

              bg-[#036556]
              text-white

              text-[14px]
              sm:text-[15px]

              font-medium

              transition-all duration-300

              hover:translate-x-1
            "
            >
              เปิดใน Google Maps

              <ArrowUpRight
                className="
                w-4 h-4
                sm:w-5 sm:h-5

                transition-transform duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
              />
            </a>
          </div>

          {/* MAP */}
          <div
            className="
            relative

            w-full

            h-[320px]
            sm:h-[420px]
            lg:h-[560px]

            border-t border-[#6DEDC3]/20
          "
          >
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=We+Next+Co.,Ltd&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}