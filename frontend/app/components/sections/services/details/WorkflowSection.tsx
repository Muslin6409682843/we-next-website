// /components/sections/services/details/WorkflowSection.tsx

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Step = {
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
};

const colors = [
  "#2A3235",
  "#126656",
  "#62B3A4",
  "#BBDDAB",
  "#FBB379",
  "#F7904E",
];

export default function WorkflowSection({ steps }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="
        w-full
        px-[210px]
        py-[120px]

        max-[1400px]:px-[120px]
        max-[1200px]:px-[80px]
        max-[992px]:px-[50px]
        max-[768px]:px-[30px]
        max-[640px]:px-5
      "
    >
      <div className="max-w-[1200px] mx-auto">
        {/* dropdown title */}
        <button
          onClick={() => setOpen(!open)}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-5
            mb-10
          "
        >
          <h2
            className="
              text-[#036556]
              font-semibold
              text-[40px]
              leading-[60px]

              max-[768px]:text-[32px]
              max-[768px]:leading-[48px]

              max-[640px]:text-[26px]
              max-[640px]:leading-[40px]
            "
          >
            ขั้นตอนการทำงาน
          </h2>

          <ChevronDown
            size={42}
            className={`
              text-[#036556]
              transition-transform
              duration-300
              ${open ? "rotate-180" : ""}
            `}
          />
        </button>

        {/* hidden content */}
        <div
          className={`
    grid
    transition-all
    duration-500

    ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
  `}
        >
          <div className="overflow-hidden">
            {/* timeline */}
            <div className="relative flex flex-col gap-10 pt-10 pb-10">
              {/* line */}
              <div
                className="
      absolute
      left-[130px]

      top-[190px]
      bottom-[190px]

      w-[6px]

      bg-[#CCFFD6]
      rounded-full

      max-[992px]:hidden
    "
              />

              {steps.map((step, index) => {
                const color = colors[index % colors.length];
                const isLastStep = index === steps.length - 1;

                return (
                  <div
                    key={index}
                    className="
                    relative
                    flex
                    justify-center
                  "
                  >
                    {/* arrow */}
                    {!isLastStep && (
                      <div
                        className="
                        absolute
                        top-full
                        left-[109px]
                        -translate-y-[1px]

                        z-10

                        max-[992px]:hidden
                      "
                      >
                        <div
                          className="w-0 h-0 border-l-[24px] border-r-[24px] border-t-[40px] border-l-transparent border-r-transparent"
                          style={{
                            borderTopColor: color,
                          }}
                        />
                      </div>
                    )}

                    {/* card */}
                    <div
                      className="
                      relative
                      w-[860px]
                      bg-white
                      shadow-[0px_4px_12px_rgba(0,0,0,0.15)]
                      rounded-[30px_0px]
                      overflow-visible

                      max-[992px]:w-full
                    "
                    >
                      {/* top line */}
                      <div
                        className="w-full h-[25px]"
                        style={{ backgroundColor: color }}
                      />

                      <div className="relative p-10 pl-[170px] max-[640px]:pl-[120px]">
                        {/* step badge */}
                        <div
                          className="
                          absolute
                          top-1/2
                          -translate-y-1/2
                          -left-[90px]

                          w-[212px]
                          h-[68px]

                          rounded-[30px_0px]

                          flex
                          items-center
                          justify-center

                          z-20

                          max-[640px]:w-[170px]
                          max-[640px]:h-[56px]
                          max-[640px]:-left-[50px]
                        "
                          style={{ backgroundColor: color }}
                        >
                          <span
                            className="
                            text-white
                            font-semibold
                            text-[32px]
                            leading-[48px]

                            max-[640px]:text-[24px]
                          "
                          >
                            ขั้นตอนที่ {index + 1}
                          </span>
                        </div>

                        {/* title */}
                        <h3
                          className="
                          text-[#036556]
                          font-semibold
                          text-[24px]
                          leading-[36px]
                          mb-6

                          max-[640px]:text-[20px]
                          max-[640px]:leading-[30px]
                        "
                        >
                          {step.title}
                        </h3>

                        {/* description */}
                        <p
                          className="
                          text-[#036556]
                          font-medium
                          text-[24px]
                          leading-[36px]

                          max-[640px]:text-[16px]
                          max-[640px]:leading-[28px]
                        "
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
