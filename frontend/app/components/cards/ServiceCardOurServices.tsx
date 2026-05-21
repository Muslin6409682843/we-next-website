import {
  Building2,
  TreeDeciduous,
  Milk,
  Zap,
  Presentation,
  CheckCircle2,
  FileText,
  ArrowRight,
  Users,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  building: Building2,
  tree: TreeDeciduous,
  milk: Milk,
  energy: Zap,
  presentation: Presentation,
};

type Props = {
  title: string;
  description: string;
  suitableFor?: string;

  outcome?: string | string[];
  outcomeLabel?: string;

  icon: keyof typeof iconMap;
  href: string;

  outcomeIcon?: "file" | "training";
};

export default function ServiceCardOurServices({
  title,
  description,
  suitableFor,
  outcome,
  outcomeLabel = "สิ่งที่จะได้รับ",
  outcomeIcon = "file",
  icon,
  href,
}: Props) {
  const OutcomeIcon = outcomeIcon === "training" ? Users : FileText;

  const Icon = iconMap[icon] || Building2;

  return (
    <Link href={href} className="block group">
      <div
        className="
        relative overflow-hidden

        rounded-tl-[30px]
        rounded-br-[30px]
        rounded-tr-none
        rounded-bl-none

        bg-[#6DEDC3]/[0.18]
        border border-[#6DEDC3]/25

        p-5
        md:p-8
        lg:p-10

        shadow-[0_6px_25px_-18px_rgba(3,101,86,0.25)]

        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:border-[#6DEDC3]/50
        hover:shadow-[0_18px_45px_-25px_rgba(3,101,86,0.28)]
      "
      >
        {/* TOP */}
        <div
          className="
          relative
          flex items-center

          gap-3
          md:gap-4

          mb-5
          md:mb-6
        "
        >
          <div
            className="
            w-10 h-10
            md:w-14 md:h-14
            lg:w-16 lg:h-16

            rounded-2xl

            bg-white/60
            border border-[#73F68D]/30

            flex items-center justify-center

            shadow-inner
          "
          >
            <Icon
              className="
              text-[#73F68D]

              w-5 h-5
              md:w-6 md:h-6
              lg:w-7 lg:h-7
            "
            />
          </div>

          <h3
            className="
            relative
            text-[#036556]
            font-semibold

            text-[20px]
            md:text-[28px]
            lg:text-[32px]

            leading-snug
            tracking-tight

            inline-block

            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-[#73F68D]
            after:transition-all
            after:duration-300

            group-hover:after:w-full
          "
          >
            {title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
          relative
          text-[#0B3F34]/80

          font-medium

          text-[15px]
          md:text-[20px]
          lg:text-[24px]

          leading-relaxed

          mb-8
        "
        >
          {description}
        </p>

        {/* META */}
        <div className="relative space-y-4 md:space-y-6">
          {suitableFor && (
            <div className="flex items-start gap-4">
              <CheckCircle2
                className="
                text-[#F04F23]
                shrink-0
                mt-1

                w-5 h-5
                md:w-6 md:h-6
                lg:w-7 lg:h-7
              "
              />

              <p
                className="
                text-[#0B3F34]/80
                font-medium

                text-[15px]
                md:text-[20px]
                lg:text-[24px]

                leading-relaxed
              "
              >
                <span className="text-[#F04F23] font-semibold">
                  เหมาะสำหรับ:
                </span>{" "}
                {suitableFor}
              </p>
            </div>
          )}

          {outcome && (
            <div className="flex items-start gap-4">
              <OutcomeIcon
                className="
                text-[#F04F23]
                shrink-0
                mt-1

                w-5 h-5
                md:w-6 md:h-6
                lg:w-7 lg:h-7
              "
              />

              <div
                className="
                text-[#0B3F34]/80
                font-medium

                text-[15px]
                md:text-[20px]
                lg:text-[24px]

                leading-relaxed
              "
              >
                <span className="text-[#F04F23] font-semibold">
                  {outcomeLabel}:
                </span>

                {Array.isArray(outcome) ? (
                  <ul className="mt-3 space-y-3">
                    {outcome.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span
                          className="
                          mt-[10px]

                          w-2 h-2
                          rounded-full

                          bg-[#F04F23]
                          shrink-0
                        "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span> {outcome}</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="relative mt-10 flex justify-end">
          <div
            className="
            flex items-center justify-center

            w-10 h-10
            sm:w-12 sm:h-12

            rounded-full

            bg-[#6DEDC3]/20
            border border-[#6DEDC3]/30

            shadow-sm

            group-hover:scale-105

            transition
          "
          >
            <ArrowRight className="text-[#036556]" size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}