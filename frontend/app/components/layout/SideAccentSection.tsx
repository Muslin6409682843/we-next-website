// /components/layout/SideAccentSection.tsx

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  side?: "left" | "right";
};

export default function SideAccentSection({ children, side = "left" }: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* accent bar */}
      <div
        className={`
          absolute top-0 bottom-0
          w-[64px]
          bg-[#036556]

          max-[768px]:w-[40px]

          ${side === "left" ? "left-0" : "right-0"}
        `}
      />

      {/* content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
