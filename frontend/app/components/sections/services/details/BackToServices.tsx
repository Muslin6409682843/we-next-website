// /components/sections/services/details/BackToServices.tsx

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToServices() {
  return (
    <section
      className="
      relative
      w-full
      bg-white

      pt-4
      sm:pt-8
      lg:pt-10

      px-4
      sm:px-8
      lg:px-12
    "
    >
      <div
        className="
        max-w-[1400px]
        mx-auto
      "
      >
        <Link
          href="/services"
          className="
          group

          inline-flex
          items-center
          justify-center

          gap-2
          sm:gap-4

          rounded-full

          border border-[#73F68D]/20
          bg-[#F7FFFB]

          w-11 h-11
          sm:w-auto sm:h-auto

          sm:px-6
          lg:px-7

          sm:py-3.5
          lg:py-4

          transition-all duration-300

          hover:border-[#73F68D]/40
          hover:bg-[#F3FFF9]
        "
        >
          {/* ICON */}
          <div
            className="
            flex items-center justify-center

            w-7 h-7
            sm:w-10 sm:h-10

            rounded-full

            bg-[#73F68D]/15
            border border-[#73F68D]/20

            transition-transform duration-300
            group-hover:-translate-x-1
          "
          >
            <ArrowLeft
              className="
              text-[#036556]

              w-3.5 h-3.5
              sm:w-5 sm:h-5
            "
            />
          </div>

          {/* TEXT */}
          <span
            className="
            hidden sm:block

            text-[#036556]

            font-semibold
            leading-none

            sm:text-[17px]
            lg:text-[19px]
          "
          >
            ย้อนกลับเพื่อดูบริการอื่น
          </span>
        </Link>
      </div>
    </section>
  );
}
