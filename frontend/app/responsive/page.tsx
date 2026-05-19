// /app/responsive/page.tsx

import { notFound } from "next/navigation";

export default function ResponsivePage() {
  // 🔒 ปิดหน้าใน production
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F7F6]">
      {/* Desktop 2XL */}
      <section className="hidden 2xl:flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-[72px] font-bold text-[#036556]">2XL Desktop</p>
          <p className="text-[28px] text-[#20443B] mt-4">1536px ขึ้นไป</p>
        </div>
      </section>

      {/* XL */}
      <section className="hidden xl:flex 2xl:hidden items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-[64px] font-bold text-[#036556]">XL Desktop</p>
          <p className="text-[24px] text-[#20443B] mt-4">1280px - 1535px</p>
        </div>
      </section>

      {/* Laptop */}
      <section className="hidden lg:flex xl:hidden items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-[56px] font-bold text-[#036556]">Laptop</p>
          <p className="text-[22px] text-[#20443B] mt-4">1024px - 1279px</p>
        </div>
      </section>

      {/* Tablet */}
      <section className="hidden md:flex lg:hidden items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-[48px] font-bold text-[#036556]">Tablet</p>
          <p className="text-[20px] text-[#20443B] mt-4">768px - 1023px</p>
        </div>
      </section>

      {/* Mobile */}
      <section className="flex md:hidden items-center justify-center h-screen">
        <div className="text-center px-6">
          <p className="text-[40px] font-bold text-[#036556]">Mobile</p>
          <p className="text-[18px] text-[#20443B] mt-4">ต่ำกว่า 768px</p>
        </div>
      </section>
    </main>
  );
}
