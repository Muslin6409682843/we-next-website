// /components/sections/services/details/TextSection.tsx

import { ReactNode } from "react";

type Props = {
  title: string;
  content: ReactNode;
};

export default function TextSection({ title, content }: Props) {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white

      py-16
      sm:py-20
      lg:py-28

      px-5
      sm:px-8
      lg:px-12
    "
    >
      <div
        className="
        relative

        max-w-[1380px]
        mx-auto
      "
      >

        {/* CONTENT WRAPPER */}
        <div
          className="
          relative

          grid
          grid-cols-1
          xl:grid-cols-[420px_1fr]

          gap-8
          lg:gap-12
          xl:gap-20

          items-start
        "
        >
          {/* TITLE */}
          <div className="relative">
            <h2
              className="
              text-[#036556]

              font-semibold
              tracking-[-0.04em]

              leading-[1.05]

              text-[30px]

              sm:text-[42px]

              lg:text-[56px]

              xl:text-[64px]
            "
            >
              {title}
            </h2>

            {/* ACCENT */}
            <div
              className="
              hidden xl:block

              mt-8

              w-20
              h-[2px]

              bg-[#73F68D]/50
            "
            />
          </div>

          {/* BODY */}
          <div
            className="
            relative

            max-w-[920px]

            text-[#0B3F34]/80

            font-medium

            leading-relaxed

            text-[16px]

            sm:text-[18px]

            md:text-[20px]

            lg:text-[24px]

            [&>p]:mb-6
            [&>p:last-child]:mb-0

            [&>ul]:space-y-4
            [&>ul]:pl-0

            [&>ul>li]:flex
            [&>ul>li]:gap-3

            [&>ul>li]:list-none

            [&>ul>li::before]:content-['']
            [&>ul>li::before]:w-2
            [&>ul>li::before]:h-2
            [&>ul>li::before]:rounded-full
            [&>ul>li::before]:bg-[#73F68D]
            [&>ul>li::before]:mt-[0.7em]
            [&>ul>li::before]:shrink-0
          "
          >
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
