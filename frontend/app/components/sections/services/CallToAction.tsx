import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1200px] w-full pl-[210px]">
        {/* 🔹 TITLE */}
        <h2 className="text-[#036556] text-[48px] font-bold leading-[65px] mb-4">
          ไม่แน่ใจว่าบริการไหนเหมาะกับองค์กรของท่าน?
        </h2>

        <Link href="/contact" className="inline-block group">
          <div className="flex items-center gap-2 mb-6">
            {/* TEXT */}
            <span className="text-[#73F68D] text-[64px] font-bold leading-[87px]">
              ติดต่อเราได้เลย
            </span>

            {/* ➡️ Arrow */}
            <div className="flex items-center justify-center translate-y-[0px] transition group-hover:translate-x-2">
              <svg
                width="100"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-[#036556] stroke-[2.5]"
              >
                <path d="M5 12H19" />
                <path d="M13 6L19 12L13 18" />
              </svg>
            </div>
          </div>
        </Link>

        {/* 🔹 DESCRIPTION */}
        <p className="text-[#036556] text-[32px] leading-[44px] font-medium max-w-[740px]">
          เราพร้อมพูดคุยและให้คำปรึกษาเบื้องต้นโดยไม่มีค่าใช้จ่าย
          เพียงบอกเราว่าองค์กรของท่านทำธุรกิจอะไร — แค่นั้นก็พอ
        </p>
      </div>
    </section>
  );
}
