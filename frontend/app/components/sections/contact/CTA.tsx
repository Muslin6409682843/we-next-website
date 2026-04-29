export default function CTA() {
  return (
    <section className="w-full h-[674px] flex items-center justify-center bg-gradient-to-br from-[#E6FFF6] via-[#F7FFFC] to-[#E9FFF8] relative overflow-hidden">
      {/* 🌟 subtle glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#6DEDC3] opacity-20 blur-[120px] top-[-100px] left-[10%]" />

      <div className="w-full max-w-[1200px] flex items-center justify-between px-[40px] relative z-10">
        {/* 💬 LEFT TEXT */}
        <div className="max-w-[750px] text-center">
          <h2 className="text-[48px] font-semibold leading-[72px] text-[#036556] tracking-[-0.5px]">
            “แวะมาพูดคุยกับเราได้เสมอ —
            <br />
            เราพร้อมช่วยให้องค์กรของท่านเริ่มต้น
            <br />
            การเดินทางสู่ความยั่งยืนอย่างมั่นใจ”
          </h2>
        </div>

        {/* 📱 RIGHT QR (no hover / no animation) */}
        <div className="flex-shrink-0">
          <div className="bg-white p-[16px] rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img
              src="/images/line-qr.jpg"
              alt="line qr"
              className="w-[227px] h-[227px] object-cover rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
