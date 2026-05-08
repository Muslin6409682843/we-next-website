// /components/sections/services/details/BackToServices.tsx

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToServices() {
  return (
    <div
      className="
        w-full
        flex justify-start
        px-[210px]
        pt-8

        max-[1400px]:px-[120px]
        max-[1200px]:px-[80px]
        max-[992px]:px-[50px]
        max-[768px]:px-[30px]
        max-[640px]:px-5
      "
    >
      <Link
        href="/services"
        className="
          group
          flex items-center gap-3

          text-[#036556]
          text-[24px]
          font-medium

          transition-all duration-300
          hover:opacity-70

          max-[768px]:text-[20px]
          max-[640px]:text-[16px]
        "
      >
        <ArrowLeft
          className="
            w-6 h-6
            transition-transform duration-300
            group-hover:-translate-x-1

            max-[640px]:w-5
            max-[640px]:h-5
          "
        />

        <span>ย้อนกลับเพื่อดูบริการอื่น</span>
      </Link>
    </div>
  );
}
