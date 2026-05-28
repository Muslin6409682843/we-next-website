// /components/sections/services/details/ServiceIntro.tsx

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
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
      relative
      overflow-hidden
      bg-white

      pt-10
      sm:pt-14
      lg:pt-20

      pb-20
      sm:pb-24
      lg:pb-32

      px-5
      sm:px-8
      lg:px-12
    "
    >
      <div
        className="
        relative

        max-w-[1450px]
        mx-auto

        grid
        grid-cols-1
        xl:grid-cols-[0.95fr_1.05fr]

        gap-12
        lg:gap-16
        xl:gap-24

        items-center
      "
      >
        {/* IMAGE SIDE */}
        <div
          className="
          relative

          flex
          justify-center
          xl:justify-start
        "
        >
          {/* DECOR RING */}
          <div
            className="
            absolute

            w-[260px]
            h-[260px]

            sm:w-[340px]
            sm:h-[340px]

            lg:w-[420px]
            lg:h-[420px]

            rounded-full
            border border-[#73F68D]/15
          "
          />

          {/* IMAGE */}
          <div
            className="
            relative
            overflow-hidden

            rounded-full

            w-[230px]
            h-[230px]

            sm:w-[320px]
            sm:h-[320px]

            lg:w-[420px]
            lg:h-[420px]

            shadow-[0_35px_70px_-35px_rgba(3,101,86,0.28)]
          "
          >
            <Image src={image} alt={title} fill className="object-cover" />

            {/* OVERLAY */}
            <div
              className="
              absolute inset-0

              bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.42))]

              flex items-center justify-center

              px-6
            "
            >
              <h2
                className={`
                text-white
                font-semibold
                text-center
                whitespace-pre-line
                tracking-[-0.04em]
                leading-[0.95]

                ${
                  titleSize ||
                  `
                  text-[42px]

                  sm:text-[58px]

                  lg:text-[82px]
                `
                }
              `}
              >
                {title}
              </h2>
            </div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div
          className="
  relative

  flex
  flex-col

  items-start

  max-xl:max-w-[820px]
  max-xl:mx-auto
"
        >


          {/* TITLE MOBILE/TABLET */}
          <h1
            className="
            xl:hidden

            text-[#036556]

            font-semibold
            tracking-[-0.05em]
            leading-[1.02]

            text-[34px]

            sm:text-[48px]

            mb-6
          "
          >
            {title}
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
            w-full
            max-w-[760px]

            text-[#0B3F34]/78

            font-medium
            leading-relaxed

            text-[16px]

            sm:text-[18px]

            md:text-[20px]

            lg:text-[24px]
          "
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
