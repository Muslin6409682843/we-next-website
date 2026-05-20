import Link from "next/link";

type Props = {
  size?: "large" | "small";
  variant?: "right-button" | "right-text" | "center-stack";
  title: string;
  subtitle?: string;
};

export default function HeroContent({
  size = "large",
  variant = "right-button",
  title,
  subtitle,
}: Props) {
  // SMALL HERO
  if (size === "small") {
    return (
      <div
        className="
          flex
          flex-col
          items-center
          justify-center

          text-center
        "
      >
        <h1
          className="
            text-white
            font-semibold
            whitespace-pre-line
            text-shadow-hero

            text-[clamp(24px,5vw,42px)]
            leading-[1.15]

            max-w-[18ch]
          "
        >
          {title}
        </h1>
      </div>
    );
  }

  // CENTER STACK
  if (variant === "center-stack") {
    return (
      <div className="text-center space-y-4">
        <h1
          className="
            text-white
            font-semibold
            whitespace-pre-line
            text-shadow-hero

            text-[clamp(28px,5vw,64px)]
            leading-[1.1]
          "
        >
          {title}
        </h1>

        {subtitle && (
          <h2
            className="
              text-white/90
              font-medium

              text-[clamp(16px,2vw,28px)]
            "
          >
            {subtitle}
          </h2>
        )}
      </div>
    );
  }

  // LARGE RIGHT CONTENT
  return (
    <div
      className="
      relative

      flex
      flex-col
      items-end

      text-right
    "
    >
      {/* TITLE */}
      <h1
        className="
        text-white
        font-semibold
        whitespace-pre-line
        text-shadow-hero

        text-[clamp(24px,4vw,56px)]
        leading-[1.15]

        max-w-[22ch]
      "
      >
        {title}
      </h1>

      {/* BUTTON */}
      {variant === "right-button" && (
        <div
          className="
          absolute

          top-full
          right-0

          mt-5
          sm:mt-6
          lg:mt-8
        "
        >
          <Link
            href="/services"
            className="
    inline-flex
    items-center
    justify-center

    px-5
sm:px-6
lg:px-8
2xl:px-10

h-11
sm:h-12
lg:h-14
2xl:h-16

text-sm
sm:text-base
lg:text-lg
2xl:text-[22px]

    bg-[#73F68D]
    text-[#036556]

    font-medium

    text-sm
    sm:text-base
    lg:text-lg

    rounded-tl-[30px]
    rounded-br-[30px]

    whitespace-nowrap

    transition-all
    duration-300

    hover:-translate-y-[2px]
    active:scale-95
  "
          >
            เริ่มต้นลดคาร์บอนกับเรา
          </Link>
        </div>
      )}
    </div>
  );
}
