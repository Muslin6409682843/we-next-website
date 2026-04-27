export default function CarbonReductionExamples() {
  return (
    <section className="relative overflow-hidden overflow-x-hidden h-[800px]">
      {/* 🟩 BACKGROUND */}
      <div className="absolute w-[1107px] h-[800px] bg-[rgba(109,237,195,0.18)] left-0 top-0" />

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
          <div className="relative w-[420px] h-[800px] overflow-hidden">
            {/* รูป 1 (ล่างสุด) */}
            <img
              src="/images/servicesExample-1.jpg"
              className="absolute w-[284px] h-[290px] left-[80px] top-[150px] rounded-[30px_0_30px_0] object-cover z-0"
            />

            {/* รูป 2 (กลาง) 👉 แก้ตรงนี้ */}
            <img
              src="/images/servicesExample-2.jpg"
              className="absolute w-[293px] h-[312px] right-0 top-[230px] rounded-[30px_0_30px_0] object-cover z-10"
            />

            {/* รูป 3 (บนสุด) */}
            <img
              src="/images/servicesExample-3.jpg"
              className="absolute w-[392px] h-[243px] left-[25px] top-[480px] rounded-[30px_0_30px_0] object-cover z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
