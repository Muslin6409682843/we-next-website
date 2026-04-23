import {
  Building2,
  TreeDeciduous,
  Leaf,
  FileText,
  CircleCheckBig,
  Milk,
  Zap,
  BookOpen,
  Presentation,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  building: Building2,
  tree: TreeDeciduous,
  leaf: Leaf,
  document: FileText,
  milk: Milk,
  energy: Zap,
  book: BookOpen,
  presentation: Presentation,
};

type Props = {
  title: string;
  description: string;
  suitableFor?: string;

  outcome?: string;
  outcomeLabel?: string;
  outcomeIcon?: keyof typeof iconMap;

  icon: keyof typeof iconMap;
  href: string;
};

export default function ServiceCardOurServices({
  title,
  description,
  suitableFor,
  outcome,
  outcomeLabel, 
  outcomeIcon,    
  icon,
  href,
}: Props) {
  const Icon = iconMap[icon];

  return (
    <Link href={href} className="block">
      <div
        className="
    relative w-full max-w-[1668px]
    bg-[rgba(109,237,195,0.18)]
    rounded-tl-[30px] rounded-br-[30px]
    p-[60px]

    cursor-pointer
    transition-all duration-300 ease-out

    hover:-translate-y-2
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
  "
      >
        {/* 🔹 SHIFTED CONTENT */}
        <div className="ml-[145px]">
          {/* 🔹 HEADER */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[82px] h-[82px] border-2 border-[#73F68D] rounded-full flex items-center justify-center shrink-0">
              <Icon size={47} className="text-[#73F68D]" />
            </div>

            <h3 className="text-[#036556] font-semibold text-[32px] leading-[48px]">
              {title}
            </h3>
          </div>

          {/* 🔵 DESCRIPTION */}
          <p className="text-[#036556] font-medium text-[24px] leading-[33px] mb-6">
            {description}
          </p>

          {/* 🟠 SUITABLE FOR */}
          {suitableFor && (
            <div className="flex items-start gap-3 mb-6">
              <div className="mt-[10px] shrink-0">
                <CircleCheckBig className="text-[#F04F23]" size={40} />
              </div>

              <p className="text-[#036556] font-normal text-[24px] leading-[33px] whitespace-pre-line">
                <span className="text-[#F04F23]">เหมาะสำหรับ </span>
                {suitableFor}
              </p>
            </div>
          )}

          {/* 🟢 OUTCOME */}
          {outcome && (
  <div className="flex items-start gap-3 mb-6">
    <div className="mt-[10px] shrink-0">
      {(() => {
        const OutcomeIcon = iconMap[outcomeIcon || "document"];
        return <OutcomeIcon className="text-[#F04F23]" size={40} />;
      })()}
    </div>

    <p className="text-[#036556] font-normal text-[24px] leading-[33px] whitespace-pre-line">
      <span className="text-[#F04F23]">
        {outcomeLabel || "สิ่งที่จะได้รับ "}
      </span>
      {outcome}
    </p>
  </div>
)}
        </div>

        {/* 🟢 CTA */}
        <div className="flex justify-end">
          <button className="w-[80px] h-[42px] bg-[#73F68D] rounded-tl-[30px] rounded-br-[30px] flex items-center justify-center hover:scale-105 transition">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-[#036556] stroke-[2.5]"
            >
              <path d="M5 12H19" />
              <path d="M13 6L19 12L13 18" />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}
