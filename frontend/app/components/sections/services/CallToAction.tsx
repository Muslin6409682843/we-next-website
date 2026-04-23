export default function CallToAction() {
  return (
    <section className="py-[120px] bg-[#036556] flex justify-center text-center">
      <div className="max-w-[900px] w-full px-6">
        <h2 className="text-white text-[40px] font-semibold mb-6">
          เริ่มต้นลดคาร์บอนกับเรา
        </h2>

        <p className="text-white/80 mb-10 text-[18px]">
          ให้ทีมผู้เชี่ยวชาญของเราช่วยวางแผนและขับเคลื่อนองค์กรของคุณสู่ความยั่งยืน
        </p>

        <button
          className="
            bg-[#73F68D]
            text-[#036556]
            px-10 py-4
            text-[20px]
            rounded-tl-[30px] rounded-br-[30px]
            font-medium
            hover:shadow-xl
            transition
          "
        >
          ติดต่อเรา
        </button>
      </div>
    </section>
  );
}