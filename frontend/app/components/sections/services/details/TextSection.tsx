import { ReactNode } from "react";

type Props = {
  title: string;
  content: ReactNode;
};

export default function TextSection({
  title,
  content,
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
      "
    >
      <div className="max-w-[1200px]">
        {/* title */}
        <h2
          className="
            text-[#036556]
            font-semibold
            text-[32px]
            leading-[48px]
            mb-8

            max-[768px]:text-[28px]
            max-[768px]:leading-[42px]

            max-[640px]:text-[24px]
            max-[640px]:leading-[36px]
          "
        >
          {title}
        </h2>

        {/* content */}
        <div
          className="
            text-[#036556]
            font-medium
            text-[24px]
            leading-[42px]

            max-[768px]:text-[20px]
            max-[768px]:leading-[36px]

            max-[640px]:text-[16px]
            max-[640px]:leading-[30px]
          "
        >
          {content}
        </div>
      </div>
    </section>
  );
}