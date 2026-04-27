export default function CTA() {
  return (
    <section className="relative w-full h-[674px] bg-[rgba(109,237,195,0.18)]">
      {/* 🟩 Background block (Rectangle 327) */}
      <div className="absolute w-full h-full" />

      {/* 💬 Main text */}
      <div className="absolute left-1/2 top-[220px] -translate-x-[60%] w-[1316px] text-left">
        <h2 className="text-[48px] font-semibold leading-[73px] text-[#20443B]">
          “แวะมาพูดคุยกับเราได้เสมอ —<br />
          เราพร้อมช่วยให้องค์กรของท่านเริ่มต้น
          <br />
          การเดินทางสู่ความยั่งยืนอย่างมั่นใจ”
        </h2>
      </div>

      {/* 📱 QR Group */}
      <div className="absolute right-[120px] top-[140px] flex flex-col items-center gap-[20px]">
        {/* QR Images */}
        <div className="flex gap-[30px]">
          <img
            src="/images/image52.png"
            alt="line qr"
            className="w-[227px] h-[227px] object-cover"
          />

          <img
            src="/images/image53.png"
            alt="facebook qr"
            className="w-[224px] h-[224px] object-cover"
          />
        </div>

        {/* Text */}
        <p className="w-[468px] text-[24px] font-medium text-[#20443B] text-center leading-[36px]">
          Scan Qr Code Line และ Facebook ได้ที่นี่ !
        </p>
      </div>
    </section>
  );
}
