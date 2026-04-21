import Link from "next/link";
import {
  Milk,
  Building2,
  TreeDeciduous,
  Zap,
  Presentation,
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
    <Link href={href} className="block w-full max-w-[800px]">
      <div
        className="
          bg-white
          rounded-tl-[30px] rounded-br-[30px]
          shadow-md
          p-[40px]
          cursor-pointer
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* 🔹 TOP */}
        <div className="flex items-start gap-4 mb-4">
          {/* ICON */}
          <div className="w-[58px] h-[58px] border-2 border-[#73F68D] rounded-full flex items-center justify-center shrink-0">
            <Icon size={28} className="text-[#73F68D]" />
          </div>

          {/* TITLE + HIGHLIGHT */}
          <div className="flex flex-col">
            <h3 className="text-[32px] font-medium text-[#036556] leading-tight text-left m-0">
              {title}
            </h3>

            <span className="block text-[24px] text-[#F04F23] leading-[30px] text-left">
              {highlight}
            </span>
          </div>
        </div>

        {/* 🔹 DESCRIPTION */}
        <p className="text-[24px] text-[#036556] leading-relaxed text-left mb-4">
          {description}
        </p>

        {/* 🔹 CTA */}
        <div className="flex items-center gap-2 text-[#73F68D] text-[24px]">
          <span>ดูรายละเอียดเพิ่มเติม</span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-[#73F68D]"
          >
            <path d="M8 5l8 7-8 7V5z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
