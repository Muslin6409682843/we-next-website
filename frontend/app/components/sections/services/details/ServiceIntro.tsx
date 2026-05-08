// /components/sections/services/details/ServiceIntro.tsx

type Props = {
  title: string;
  description: string;
  image: string;

  // custom title size
  titleSize?: string;
};

export default function ServiceIntro({
  title,
  description,
  image,
  titleSize,
}: Props) {
  return (
    <section
      className="
        w-full
        px-[210px]
        py-[100px]

        max-[1400px]:px-[120px]
        max-[1200px]:px-[80px]
        max-[992px]:px-[50px]
        max-[768px]:px-[30px]
        max-[640px]:px-5

        overflow-hidden
      "
    >
      <div
        className="
          grid grid-cols-[383px_1fr]
          items-center
          gap-[80px]

          max-[1100px]:grid-cols-1
          max-[1100px]:gap-12
        "
      >
        {/* 🔹 IMAGE */}
        <div
          className="
            relative
            w-[383px]
            h-[383px]
            rounded-full
            overflow-hidden
            shrink-0

            max-[768px]:w-[300px]
            max-[768px]:h-[300px]

            max-[640px]:w-[240px]
            max-[640px]:h-[240px]

            max-[1100px]:mx-auto
          "
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />

          {/* overlay */}
          <div
            className="
              absolute inset-0
              bg-black/25
              flex items-center justify-center
              px-4
            "
          >
            <h2
              className={`
    text-white
    font-semibold
    text-center
    whitespace-pre-line

    ${
      titleSize ||
      `
      text-[96px]

      max-[768px]:text-[72px]
      max-[640px]:text-[56px]
    `
    }
  `}
            >
              {title}
            </h2>
          </div>
        </div>

        {/* 🔹 TEXT */}
        <div>
          <p
            className="
              text-[#036556]
              font-medium
              text-[24px]
              leading-[36px]

              max-[768px]:text-[20px]
              max-[768px]:leading-[32px]

              max-[640px]:text-[16px]
              max-[640px]:leading-[28px]
            "
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
