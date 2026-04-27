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
    <Link href={href} className="block w-full max-w-[1500px]">
      <div className="w-full box-border bg-[rgba(109,237,195,0.18)] rounded-tl-[30px] rounded-br-[30px] p-[60px] hover:-translate-y-2 transition">
        <div className="px-[60px]">
          {/* HEADER */}
          <div className="flex items-center gap-5 mb-6">
            <div className="w-[90px] h-[90px] border-2 border-[#73F68D] rounded-full flex items-center justify-center">
              <Icon size={50} className="text-[#73F68D]" />
            </div>

            <h3 className="text-[#036556] text-[34px] font-semibold">
              {title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <p className="text-[#036556] text-[24px] leading-[34px] mb-6">
            {description}
          </p>

          {/* SUITABLE */}
          {suitableFor && (
            <div className="flex gap-3 mb-6">
              <CircleCheckBig className="text-[#F04F23] mt-[6px]" size={38} />
              <p className="text-[#036556] text-[23px] whitespace-pre-line">
                <span className="text-[#F04F23]">เหมาะสำหรับ </span>
                {suitableFor}
              </p>
            </div>
          )}

          {/* OUTCOME */}
          {outcome && (
            <div className="flex gap-3">
              {(() => {
                const OutcomeIcon = iconMap[outcomeIcon || "document"];
                return (
                  <OutcomeIcon className="text-[#F04F23] mt-[6px]" size={38} />
                );
              })()}

              <p className="text-[#036556] text-[23px] whitespace-pre-line">
                <span className="text-[#F04F23]">
                  {outcomeLabel || "สิ่งที่จะได้รับ "}
                </span>
                {outcome}
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-end mt-6">
          <div className="w-[100px] h-[50px] bg-[#73F68D] rounded-tl-[30px] rounded-br-[30px] flex items-center justify-center">
            →
          </div>
        </div>
      </div>
    </Link>
  );
}
