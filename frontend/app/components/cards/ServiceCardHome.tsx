import Link from "next/link";
import {
  Milk,
  Building2,
  TreeDeciduous,
  Zap,
  Presentation,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  milk: Milk,
  building: Building2,
  tree: TreeDeciduous,
  energy: Zap,
  presentation: Presentation,
};

type Props = {
  title: string;
  description: string;
  highlight: string;
  href: string;
  icon: keyof typeof iconMap;
};

export default function ServiceCardHome({
  title,
  description,
  highlight,
  href,
  icon,
}: Props) {
  const Icon = iconMap[icon];

  return (
    <Link href={href} className="group block h-full">
      <article
        className="
          relative
          h-full

          bg-[#6DEDC3]/[0.18]
          border border-[#6DEDC3]/25

          rounded-tl-[28px]
          rounded-br-[28px]
          rounded-tr-[6px]
          rounded-bl-[6px]

          overflow-hidden

          p-6
          sm:p-7
          lg:p-9

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_18px_60px_rgba(0,0,0,0.08)]
        "
      >
        {/* TOP */}
        <div
          className="
            flex
            items-center

            gap-4

            mb-5
            sm:mb-6
          "
        >
          {/* ICON */}
          <div
            className="
              shrink-0

              flex
              items-center
              justify-center

              w-[44px]
              h-[44px]

              sm:w-[52px]
              sm:h-[52px]

              rounded-full

              bg-white/60
              border border-[#73F68D]/30
            "
          >
            <Icon
              className="
                text-[#36C96B]

                w-5
                h-5

                sm:w-6
                sm:h-6
              "
              strokeWidth={2.2}
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              text-[#036556]
              font-semibold

              leading-[1.25]
              tracking-[-0.02em]

              text-[22px]
              sm:text-[26px]
              lg:text-[32px]
            "
          >
            {title}
          </h3>
        </div>

        {/* HIGHLIGHT */}
        <p
          className="
            text-[#F04F23]

            leading-[1.5]

            text-[15px]
            sm:text-[17px]
            lg:text-[20px]

            mb-5
          "
        >
          {highlight}
        </p>

        {/* DESCRIPTION */}
        <p
          className="
            text-[#4E6470]

            leading-[1.8]

            text-[15px]
            sm:text-[17px]
            lg:text-[20px]
          "
        >
          {description}
        </p>

        {/* CTA */}
        <div
          className="
            mt-7
            sm:mt-8

            flex
            items-center
            gap-2

            text-[#36C96B]
            font-medium

            text-[15px]
            sm:text-[16px]
            lg:text-[18px]
          "
        >
          <span>ดูรายละเอียดเพิ่มเติม</span>

          <ArrowRight
            className="
              w-4
              h-4

              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />
        </div>
      </article>
    </Link>
  );
}
