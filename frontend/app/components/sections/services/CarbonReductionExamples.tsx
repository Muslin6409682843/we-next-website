export default function CarbonReductionExamples() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16">

      {/* green background */}
      <div className="absolute inset-0 bg-[#73F68D]/10" />

      <div className="relative mx-auto max-w-[1200px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* TEXT */}
          <div className="flex flex-col gap-6">

            <p className="text-[#F04F23] font-medium text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed">
              หลายองค์กรมองว่าการลดโลกร้อนเป็นต้นทุนที่เพิ่มขึ้น
              แต่ความเป็นจริงมีหลายมาตราการที่
            </p>

            <h2 className="text-[#036556] font-semibold text-[26px] sm:text-[34px] lg:text-[44px] leading-snug">
              ช่วยลดการปล่อย CO<span className="relative text-[0.7em] -bottom-[0.25em] font-inherit">
                2
              </span>
              <br />
              พร้อมลดค่าใช้จ่ายไปในตัว
            </h2>

            <p className="text-[#036556] font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed max-w-[600px]">
              ตัวอย่างเช่น การเปลี่ยนหลอดไฟเป็น LED หรือการติดตั้ง Solar Cell
              แม้จะมีต้นทุนเริ่มต้น แต่สามารถคืนทุนได้ภายในไม่ถึง 2 ปี และสร้างผลประหยัดต่อเนื่องหลังจากนั้น
            </p>

            <div className="border-l-4 border-[#73F68D] pl-4">
              <p className="text-[#036556] font-medium text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed">
                การลดการใช้ไฟฟ้าหรือการผลิตไฟฟ้าจาก Solar Cell ยังมีส่วนช่วยลดการเผาเชื้อเพลิงฟอสซิลใน โรงไฟฟ้าโดยตรง เนื่องจากปัจจุบันกว่าร้อยละ 90 ของการผลิตไฟฟ้าในไทยยังคงพึ่งพาถ่านหิน น้ำมัน และก๊าซธรรมชาติ ซึ่งล้วนปล่อย CO<span className="relative text-[0.7em] -bottom-[0.25em] font-inherit">2</span>
                ออกสู่ชั้นบรรยากาศ
              </p>
            </div>

          </div>

          {/* IMAGE */}
          <div className="grid grid-cols-2 gap-4">

            <div className="col-span-2">
              <div className="aspect-[16/10] overflow-hidden rounded-[24px]">
                <img src="/images/servicesExample-1.jpg" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="aspect-square overflow-hidden rounded-[24px]">
              <img src="/images/servicesExample-2.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="aspect-square overflow-hidden rounded-[24px]">
              <img src="/images/servicesExample-3.jpg" className="w-full h-full object-cover" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}