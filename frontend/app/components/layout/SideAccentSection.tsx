// /components/layout/SideAccentSection.tsx

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  side?: "left" | "right";
};

export default function SideAccentSection({ children, side = "left" }: Props) {
  return (
    <section
      className="
      relative
      w-full
      overflow-hidden
      bg-white
    "
    >
      {/* ACCENT */}
      <div
        className={`
        absolute
        top-0
        bottom-0

        ${
          side === "left"
            ? `
              left-0
              rounded-r-[28px]
              sm:rounded-r-[40px]
            `
            : `
              right-0
              rounded-l-[28px]
              sm:rounded-l-[40px]
            `
        }

        w-[10px]
        sm:w-[14px]
        lg:w-[18px]

        bg-[#036556]
      `}
      />

      {/* SOFT GLOW */}
      <div
        className={`
        absolute
        top-1/2
        -translate-y-1/2

        ${side === "left" ? "left-[-120px]" : "right-[-120px]"}

        w-[220px]
        h-[220px]

        rounded-full

        bg-[#6DEDC3]/10
        blur-3xl

        pointer-events-none
      `}
      />

      {/* INNER BORDER */}
      <div
        className={`
        absolute
        top-0
        bottom-0

        ${
          side === "left"
            ? "left-[18px] sm:left-[24px] lg:left-[30px]"
            : "right-[18px] sm:right-[24px] lg:right-[30px]"
        }

        w-[1px]

        bg-[#73F68D]/20
      `}
      />

      {/* CONTENT */}
      <div
        className="
        relative
        z-10
      "
      >
        {children}
      </div>
    </section>
  );
}
