export default function CarbonReductionExamples() {
  return (
    <section className="relative overflow-hidden overflow-x-hidden h-[800px]">
      {/* 🟩 BACKGROUND */}
      <div className="absolute w-[1107px] h-[650px] bg-[rgba(109,237,195,0.18)] left-0 top-1/2 -translate-y-1/2" />

      {/* 🟦 ROOT */}
      <div className="relative w-full h-full px-[100px] flex items-center justify-start">
        {/* 🟨 MAIN ROW */}
        <div className="flex justify-start items-center gap-[120px] w-full">
          {/* 🔵 TEXT */}
          <div className="w-[957px] flex flex-col gap-6">
            <p className="text-[#F04F23] font-medium text-[24px] leading-[33px] whitespace-pre-line">
              หลายองค์กรมองว่าการลดโลกร้อนเป็นต้นทุนที่เพิ่มขึ้น{"\n"}
              แต่ความเป็นจริงแล้วมีหลายมาตรการ
            </p>

            <h2 className="text-[#036556] font-semibold text-[48px] leading-[65px] whitespace-pre-line">
              ช่วยลดการปล่อย CO<sub>2</sub>
              {"\n"}
              พร้อมกับลดค่าใช้จ่ายไปในตัว
            </h2>

            <p className="text-[#036556] font-semibold text-[32px] leading-[44px] whitespace-pre-line">
              ตัวอย่างเช่น การเปลี่ยนหลอดไฟเป็น LED หรือการติดตั้ง Solar Cell
              {"\n"}
              ที่{" "}
              <span className="text-[#73F68D]">
                แม้จะมีต้นทุนในวันแรกแต่สามารถคืนทุนได้
              </span>{" "}
              ภายในไม่ถึง 2 ปี{"\n"}
              และสร้างผลประหยัดต่อเนื่องหลังจากนั้น
            </p>

            <p className="text-[#036556] font-medium text-[24px] leading-[33px] whitespace-pre-line">
              ทั้งนี้ การลดการใช้ไฟฟ้าหรือการผลิตไฟฟ้าจาก Solar Cell{"\n"}
              ยังมีส่วนช่วยลดการเผาเชื้อเพลิงฟอสซิลในโรงไฟฟ้าโดยตรง
              เนื่องจากปัจจุบันกว่าร้อยละ 90{"\n"}
              ของการผลิตไฟฟ้าในไทยยังคงพึ่งพาถ่านหิน น้ำมัน และก๊าซธรรมชาติ
              {"\n"}
              ซึ่งล้วนปล่อย CO<sub>2</sub> ออกสู่ชั้นบรรยากาศ
            </p>
          </div>

          {/* 🟡 IMAGE */}
          {/* 🟡 IMAGE */}
<div className="relative w-[420px] h-[650px]">
  {/* รูป 1 */}
  <img
    src="/images/servicesExample-1.jpg"
    className="absolute top-0 left-[90px] w-[260px] h-[280px] rounded-[30px_0_30px_0] object-cover translate-y-[51px] z-10"
  />

  {/* รูป 2 */}
  <img
    src="/images/servicesExample-2.jpg"
    className="absolute top-0 left-[360px] w-[280px] h-[300px] rounded-[30px_0_30px_0] object-cover translate-y-[100px] z-30"
  />

  {/* รูป 3 */}
  <img
    src="/images/servicesExample-3.jpg"
    className="absolute top-0 left-[40px] w-[350px] h-[240px] rounded-[30px_0_30px_0] object-cover translate-y-[340px] z-20"
  />
</div>
        </div>
      </div>
    </section>
  );
}
