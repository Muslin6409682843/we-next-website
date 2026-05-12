// /components/sections/services/details/FAQSection.tsx

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
};

export default function FAQSection({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        w-full
        overflow-hidden

        px-[210px]
        py-[120px]

        max-[1400px]:px-[120px]
        max-[1200px]:px-[80px]
        max-[992px]:px-[50px]
        max-[768px]:px-[30px]
        max-[640px]:px-5
      "
    >
      <div
        className="
          max-w-[1400px]
          mx-auto

          grid
          grid-cols-[320px_1fr]
          gap-[80px]

          max-[992px]:grid-cols-1
          max-[992px]:gap-12
        "
      >
        {/* LEFT TITLE */}
        <div>
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
            FAQ
            <br />
            คำถามที่พบบ่อย
          </h2>
        </div>

        {/* RIGHT FAQ */}
        <div>
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b-[2px] border-[#036556]"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleItem(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-10

                    py-8

                    text-left
                  "
                >
                  <span
                    className="
                      text-[#036556]
                      font-semibold
                      text-[24px]
                      leading-[36px]

                      max-[768px]:text-[20px]
                      max-[768px]:leading-[30px]

                      max-[640px]:text-[18px]
                      max-[640px]:leading-[28px]
                    "
                  >
                    {item.question}
                  </span>

                  <ChevronRight
                    className={`
                      shrink-0
                      text-[#036556]

                      w-[26px]
                      h-[26px]

                      transition-transform
                      duration-300

                      ${isOpen ? "rotate-90" : ""}
                    `}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-8"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        text-[#036556]
                        text-[20px]
                        leading-[34px]

                        max-[768px]:text-[18px]
                        max-[768px]:leading-[30px]

                        max-[640px]:text-[16px]
                        max-[640px]:leading-[28px]
                      "
                    >
                      {item.answer}
                    </p>
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