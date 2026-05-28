// /components/sections/services/details/PricingSection.tsx

type PricingItem = {
  content: string;
  price: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  items: PricingItem[];
  note?: string;
};

export default function PricingSection({
  title = "ราคาเริ่มต้นบริการ",
  subtitle = "ค่าบริการขึ้นอยู่กับขอบเขตงานและความซับซ้อนของข้อมูล",
  items,
  note,
}: Props) {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white

      py-20
      sm:py-24
      lg:py-28

      px-5
      sm:px-8
      lg:px-12
    "
    >
      <div
        className="
        max-w-[1380px]
        mx-auto
      "
      >
        {/* HEADING */}
        <div
          className="
          text-center

          max-w-[980px]
          mx-auto

          mb-10
          sm:mb-14
          lg:mb-16
        "
        >

          {/* TITLE */}
          <h2
            className="
            text-[#036556]

            font-semibold
            tracking-[-0.04em]

            leading-[1.08]

            text-[30px]

            sm:text-[42px]

            md:text-[52px]

            lg:text-[64px]
          "
          >
            {title}
          </h2>

          {/* SUBTITLE */}
          <p
            className="
            mt-5
            sm:mt-6

            text-[#0B3F34]/75

            font-medium
            leading-relaxed

            text-[15px]

            sm:text-[17px]

            md:text-[20px]

            lg:text-[22px]
          "
          >
            {subtitle}
          </p>
        </div>

        {/* DESKTOP / TABLET */}
        <div
          className="
          hidden
          md:block

          overflow-hidden

          rounded-[34px]

          border border-[#DCEEE8]

          bg-white

          shadow-[0_24px_60px_-35px_rgba(3,101,86,0.16)]
        "
        >
          {/* HEADER */}
          <div
            className="
  grid
  grid-cols-[1.2fr_340px]
  lg:grid-cols-[1fr_440px]

  bg-[#036556]
"
          >
            <div className="px-8 lg:px-10 py-6 border-r border-white/10">
              <p
                className="
                text-white

                font-semibold

                text-[18px]
                lg:text-[22px]
              "
              >
                รายละเอียดบริการ
              </p>
            </div>

            <div className="px-8 lg:px-10 py-6">
              <p
                className="
                text-white

                font-semibold

                text-[18px]
                lg:text-[22px]
              "
              >
                ราคาเริ่มต้น
              </p>
            </div>
          </div>

          {/* ROWS */}
          <div>
            {items.map((item, index) => (
              <div
                key={index}
                className={`
    grid
    grid-cols-[1.2fr_340px] lg:grid-cols-[1fr_440px]

    ${index !== items.length - 1 ? "border-b border-[#E6F1EE]" : ""}
  `}
              >
                {/* CONTENT */}
                <div
                  className="
                  px-8
                  lg:px-10

                  py-7
                  lg:py-8

                  border-r border-[#E6F1EE]
                "
                >
                  <p
                    className="
                    text-[#036556]

                    font-medium
                    leading-relaxed

                    text-[17px]

                    lg:text-[20px]
                  "
                  >
                    {item.content}
                  </p>
                </div>

                {/* PRICE */}
                <div
                  className="
                  flex
                  items-center

                  bg-[#F7FFFB]

                  px-8
                  lg:px-10

                  py-7
                  lg:py-8
                "
                >
                  <h3
                    className="
                    text-[#036556]

                    font-bold

                    leading-tight

                    text-[24px]

                    lg:text-[30px]
                  "
                  >
                    {item.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div
          className="
  md:hidden

  flex
  flex-col

  gap-3
"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
      rounded-[24px]

      border border-[#E4F0EC]

      bg-white

      p-5

      shadow-[0_14px_34px_-28px_rgba(3,101,86,0.18)]
    "
            >
              {/* CONTENT */}
              <div>
                <p
                  className="
          text-[#036556]

          font-semibold
          leading-[1.7]

          text-[15px]
        "
                >
                  {item.content}
                </p>
              </div>

              {/* DIVIDER */}
              <div className="my-4 h-[1px] bg-[#E6F1EE]" />

              {/* PRICE */}
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p
                    className="
            text-[#62B3A4]

            uppercase
            tracking-[0.14em]

            text-[10px]
          "
                  >
                    ราคาเริ่มต้น
                  </p>

                  <h3
                    className="
            mt-1

            text-[#036556]

            font-bold
            leading-none

            text-[20px]
          "
                  >
                    {item.price}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NOTE */}
        {note && (
          <div
            className="
            mt-6
            sm:mt-8

            rounded-[24px]

            border border-[#73F68D]/15

            bg-[#F7FFFB]

            px-5
            sm:px-7

            py-5
            sm:py-6
          "
          >
            <p
              className="
              text-[#036556]

              font-medium
              leading-relaxed

              text-[14px]

              sm:text-[16px]

              lg:text-[18px]
            "
            >
              {note}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
