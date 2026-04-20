import HeroContent from "./HeroContent";

type HeroProps = {
  size?: "large" | "small";
  variant?: "right-button" | "right-text" | "center-stack";
  title: string;
  subtitle?: string;

  type?: "image" | "video";
  src: string;
};

export default function Hero({
  size = "large",
  variant = "right-text",
  title,
  subtitle,
  type = "image",
  src,
}: HeroProps) {
  const height =
    size === "small"
      ? "h-[335px]"
      : variant === "center-stack"
      ? "h-[685px]"
      : "h-[657px]";

  return (
    <section
      className={`
        relative w-full ${height}
        flex items-center
        overflow-hidden
        rounded-tl-[30px] rounded-br-[30px]
      `}
    >
      {/* 🎥 VIDEO */}
      {type === "video" && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* 🖼️ IMAGE */}
      {type === "image" && (
        <div
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
        />
      )}

      {/* 🔳 overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* 📦 content */}
      <div className="relative z-10 w-full">
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