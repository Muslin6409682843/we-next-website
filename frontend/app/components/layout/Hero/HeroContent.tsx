// /Hero/HeroContent.tsx
type Props = {
  size?: "large" | "small";
  variant?: "right-button" | "right-text" | "center-stack";
  title: string;
  subtitle?: string;
};

export default function HeroContent({ size, variant, title, subtitle }: Props) {
  // 🎯 SMALL
  if (size === "small") {
    return (
      <div className="w-full text-center">
        <h1 className="text-white text-[48px] font-semibold text-shadow-hero">
          {title}
        </h1>
      </div>
    );
  }

  // 🎯 LARGE - CENTER STACK (แบบ 3)
  if (variant === "center-stack") {
    return (
      <div className="w-full text-center">
        <h1 className="text-white text-[64px] font-semibold drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-white text-[48px] font-semibold drop-shadow-lg mt-2">
            {subtitle}
          </h2>
        )}
      </div>
    );
  }

  // 🎯 LARGE - RIGHT ALIGN
  return (
    <div className="w-full flex justify-end pr-[190px] mt-[140px]">
      <div className="text-right max-w-none">
        <h1
          className="
            text-white
            text-[64px]
            font-semibold
            leading-[97px]
            text-shadow-hero
            whitespace-pre-line
          "
        >
          {title}
        </h1>

        {/* ปุ่ม (เฉพาะ variant 1) */}
        {variant === "right-button" && (
          <button
            className="
    group
    mt-[24px] w-[422px] h-[63px]
    bg-[#73F68D]
    rounded-tl-[30px] rounded-br-[30px]
    text-[24px] font-medium text-[#036556]

    flex items-center justify-center gap-2
    ml-auto

    transition-all duration-300 ease-out

    hover:shadow-xl
    hover:-translate-y-[2px]
    active:scale-95
  "
          >
            ขั้นตอนการเริ่มลดคาร์บอนกับเรา
            {/* 🔽 SVG Arrow */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="
      stroke-[#036556] stroke-[2.5]
      transition-all duration-300
      group-hover:translate-x-1
    "
            >
              <path d="M5 12H19" />
              <path d="M13 6L19 12L13 18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
