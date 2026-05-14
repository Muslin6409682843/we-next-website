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
        w-full
        bg-white

        px-[210px]
        py-[120px]

        max-[1400px]:px-[120px]
        max-[1200px]:px-[80px]
        max-[992px]:px-[50px]
        max-[768px]:px-[30px]
        max-[640px]:px-5
      "
    >
      <div className="max-w-[1400px] mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <h2
            className="
              text-[#036556]
              font-semibold
              text-[48px]
              leading-[68px]

              max-[768px]:text-[38px]
              max-[768px]:leading-[54px]

              max-[640px]:text-[30px]
              max-[640px]:leading-[44px]
            "
          >
            {title}
          </h2>

          <p
            className="
              mt-6
              mx-auto
              max-w-[900px]

              text-[#4D4D4D]
              font-medium
              text-[22px]
              leading-[40px]

              max-[768px]:text-[18px]
              max-[768px]:leading-[32px]
            "
          >
            {subtitle}
          </p>
        </div>

        {/* table */}
        <div
          className="
            overflow-hidden
            rounded-[36px]

            border border-[#DDEEE8]

            shadow-[0px_15px_50px_rgba(0,0,0,0.06)]
          "
        >
          {/* header */}
          <div
            className="
              grid
              grid-cols-[1.5fr_380px]

              bg-[#036556]

              max-[992px]:hidden
            "
          >
            <div className="px-10 py-7 border-r border-white/10">
              <p className="text-white font-semibold text-[24px]">เนื้อหา</p>
            </div>

            <div className="px-10 py-7">
              <p className="text-white font-semibold text-[24px]">ราคา</p>
            </div>
          </div>

          {/* rows */}
          <div className="bg-white">
            {items.map((item, index) => (
              <div
                key={index}
                className={`
                  grid
                  grid-cols-[1.5fr_380px]

                  max-[992px]:grid-cols-1

                  ${
                    index !== items.length - 1
                      ? "border-b border-[#E6F1EE]"
                      : ""
                  }
                `}
              >
                {/* content */}
                <div
                  className="
                    px-10
                    py-10

                    border-r
                    border-[#E6F1EE]

                    max-[992px]:border-r-0
                    max-[992px]:border-b
                  "
                >
                  <p
                    className="
                      text-[#036556]
                      font-medium
                      text-[22px]
                      leading-[40px]

                      max-[768px]:text-[18px]
                      max-[768px]:leading-[32px]
                    "
                  >
                    {item.content}
                  </p>
                </div>

                {/* price */}
                <div
                  className="
                    flex
                    items-center

                    px-10
                    py-10

                    bg-[#F8FCFB]
                  "
                >
                  <h3
                    className="
  text-[#036556]
  font-bold
  text-[28px]
  leading-[42px]

  max-[768px]:text-[24px]
  max-[768px]:leading-[36px]
"
                  >
                    {item.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* note */}
        {note && (
          <div
            className="
              mt-8

              rounded-[24px]

              bg-[#F5FAF8]

              px-8
              py-6
            "
          >
            <p
              className="
                text-[#036556]
                font-medium
                text-[18px]
                leading-[32px]

                max-[768px]:text-[16px]
                max-[768px]:leading-[28px]
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
