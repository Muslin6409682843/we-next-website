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
      <div className="max-w-[1400px] mx-auto">
        {/* header */}
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(!open)}
            className={`
              inline-flex
              items-center
              justify-center
              gap-5
              transition-all
              duration-300
              ${open ? "mb-14" : "mb-0"}
            `}
          >
            <h2
              className="
                text-[#036556]
                font-semibold
                text-[48px]
                leading-none

                max-[768px]:text-[38px]
                max-[640px]:text-[30px]
              "
            >
              ขั้นตอนการทำงาน
            </h2>

            <div
              className="
                w-[64px]
                h-[64px]
                rounded-full
                bg-[#E8F7F3]
                flex items-center justify-center
                shrink-0
              "
            >
              <ChevronDown
                size={34}
                className={`
                  text-[#036556]
                  transition-transform
                  duration-300
                  ${open ? "rotate-180" : ""}
                `}
              />
            </div>
          </button>
        </div>

        {/* content */}
        <div
          className={`
            grid
            transition-all
            duration-500
            ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden">
            <div className="relative flex flex-col gap-8">
              {/* timeline line */}
              <div
                className="
                  absolute
                  left-[58px]
                  top-[40px]
                  bottom-[40px]
                  w-[4px]
                  bg-[#DDF3EC]
                  rounded-full
                  max-[992px]:hidden
                "
              />

              {steps.map((step, index) => {
                const color = colors[index % colors.length];

                return (
                  <div
                    key={index}
                    className="
                      relative
                      flex
                      items-start
                      gap-8
                      max-[992px]:block
                    "
                  >
                    {/* desktop step */}
                    <div
                      className="
                        relative
                        z-10
                        w-[120px]
                        h-[120px]
                        rounded-full
                        flex flex-col items-center justify-center
                        shrink-0
                        max-[992px]:hidden
                      "
                      style={{ backgroundColor: color }}
                    >
                      <span className="text-white/80 text-[14px] font-medium leading-none">
                        STEP
                      </span>
                      <span className="text-white font-bold text-[40px] leading-none mt-1">
                        {index + 1}
                      </span>
                    </div>

                    {/* card */}
                    <div
                      className="
                        relative
                        flex-1
                        rounded-[36px]
                        bg-white
                        overflow-hidden

                        border border-[#E7F2EE]

                        shadow-[0_6px_20px_rgba(0,0,0,0.06)]
                        backdrop-blur-sm
                      "
                    >
                      {/* top accent */}
                      <div
                        className="w-full h-[12px]"
                        style={{ backgroundColor: color }}
                      />

                      {/* inner */}
                      <div
                        className="
                          px-[60px]
                          py-[46px]

                          max-[1200px]:px-[50px]
                          max-[992px]:px-8
                          max-[992px]:py-8
                          max-[768px]:px-6
                          max-[768px]:py-6
                        "
                      >
                        {/* mobile badge */}
                        <div
                          className="
                            hidden
                            max-[992px]:inline-flex
                            px-5 py-2
                            rounded-[16px]
                            text-white text-[15px] font-semibold
                            mb-6
                          "
                          style={{ backgroundColor: color }}
                        >
                          ขั้นตอนที่ {index + 1}
                        </div>

                        {/* title */}
                        <h3
                          className="
                            text-[#036556]
                            font-semibold
                            text-[38px]
                            leading-[54px]
                            mb-6

                            max-[1200px]:text-[34px]
                            max-[992px]:text-[28px]
                            max-[768px]:text-[22px]
                            max-[768px]:leading-[34px]
                          "
                        >
                          {step.title}
                        </h3>

                        {/* description */}
                        <p
                          className="
                            text-[#3F5550]
                            font-medium
                            text-[22px]
                            leading-[40px]

                            max-[1200px]:text-[20px]
                            max-[992px]:text-[18px]
                            max-[768px]:text-[16px]
                            max-[768px]:leading-[29px]
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
