import HeroContent from "./HeroContent";
import { heroConfig } from "./heroStyles";

type Props = {
  size?: "large" | "small";
  variant?: "right-button" | "right-text" | "center-stack";

  title: string;
  subtitle?: string;

  type?: "image" | "video";
  src: string;
};

export default function Hero({
  size = "large",
  variant = "right-button",

  title,
  subtitle,

  type = "image",
  src,
}: Props) {
  const isLarge = size === "large";

  const largeConfig = heroConfig.large;
  const smallConfig = heroConfig.small;

  return (
    <section
      className={`
    relative
    w-full

    ${
      isLarge
        ? largeConfig.height
        : `
          ${smallConfig.ratio}
          ${smallConfig.minHeight}
          ${smallConfig.maxHeight}
        `
    }

    overflow-hidden
  `}
    >
      {/* VIDEO BACKGROUND */}
      {type === "video" && (
        <div
          className="
            absolute
            inset-0

            overflow-hidden
          "
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="
              absolute
              top-1/2
              left-1/2

              min-w-full
              min-h-full

              w-auto
              h-auto

              -translate-x-1/2
              -translate-y-1/2

              object-cover
            "
          >
            <source src={src} />
          </video>
        </div>
      )}

      {/* IMAGE BACKGROUND */}
      {type === "image" && (
        <div
          className="
            absolute
            inset-0

            bg-cover
            bg-center
          "
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* CONTENT */}
      <div
        className={`
          absolute
          inset-0
          z-10

          ${
            size === "small"
              ? `
                flex
                items-center
                justify-center

                text-center

                px-6
              `
              : variant === "center-stack"
                ? `
                flex
                items-center
                justify-center

                text-center

                px-6
              `
                : `
                flex
                items-center
                justify-end

                px-4
                sm:px-8
                md:px-12
                lg:px-20
                xl:px-32
              `
          }
        `}
      >
        <HeroContent
          size={size}
          variant={variant}
          title={title}
          subtitle={subtitle}
        />
      </div>
    </section>
  );
}
