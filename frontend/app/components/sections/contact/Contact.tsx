import {
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      icon: Phone,
      title: "โทรศัพท์",
      content: "065-419-9000",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@wenextthailand.com",
    },
    {
      icon: Clock3,
      title: "เวลาทำการ",
      content: (
        <>
          วันจันทร์ – ศุกร์
          <br />
          เวลา 09.00 – 17.00 น.
        </>
      ),
    },
  ];

  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white

      py-16
sm:py-20
lg:py-24

      px-5
      sm:px-8
      lg:px-12
    "
    >
      

      <div
        className="
        relative

        max-w-[1400px]
        mx-auto

        grid
        grid-cols-1
        lg:grid-cols-[0.9fr_1.1fr]

        gap-14
        xl:gap-20

        items-start
      "
      >
        {/* LEFT */}
        <div>
          {/* LABEL */}
          <div className="flex items-center gap-3 mb-6">
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
              Contact
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
            text-[#036556]

            font-semibold
            tracking-[-0.04em]
            leading-[1.05]

            text-[36px]

            sm:text-[52px]

            lg:text-[72px]

            xl:text-[86px]
          "
          >
            ติดต่อเรา
          </h2>

          {/* DESC */}
          <p
            className="
            mt-6

            max-w-[560px]

            text-[#0B3F34]/75

            font-medium
            leading-relaxed

            text-[16px]

            sm:text-[18px]

            lg:text-[22px]
          "
          >
            หากองค์กรของท่านต้องการคำปรึกษาด้านคาร์บอน
            สิ่งแวดล้อม หรือโซลูชันด้านความยั่งยืน
            ทีมงานของเราพร้อมช่วยเหลือและให้คำแนะนำอย่างใกล้ชิด
          </p>

          
        </div>

        {/* RIGHT */}
        <div
          className="
          flex flex-col

          gap-5
          sm:gap-6
        "
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                group

                relative
                overflow-hidden

                bg-[#F7FFFB]

                border border-[#6DEDC3]/20

                rounded-tl-[34px]
                rounded-br-[34px]

                rounded-tr-[8px]
                rounded-bl-[8px]

                p-5
                sm:p-7
                lg:p-8

                transition-all duration-300
              "
              >
                <div
                  className="
                  flex items-start

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
                    lg:w-20 lg:h-20

                    rounded-2xl

                    bg-[#73F68D]/15

                    border border-[#73F68D]/20

                    flex items-center justify-center
                  "
                  >
                    <Icon
                      className="
                      text-[#036556]

                      w-6 h-6
                      sm:w-7 sm:h-7
                      lg:w-8 lg:h-8
                    "
                    />
                  </div>

                  {/* TEXT */}
                  <div className="pt-1">
                    <h3
                      className="
                      text-[#036556]

                      font-semibold

                      text-[22px]

                      sm:text-[28px]

                      lg:text-[34px]

                      leading-tight
                    "
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                      mt-2

                      text-[#0B3F34]/80

                      font-medium
                      leading-relaxed

                      text-[15px]

                      sm:text-[18px]

                      lg:text-[24px]
                    "
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}