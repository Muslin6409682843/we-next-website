export default function CoreBeliefs() {
  return (
    <section className="flex justify-center bg-white">
      <div className="max-w-[1200px] w-full px-6 flex flex-col items-center text-center">
        {/* 🔹 LOGO + TEXT OVERLAY */}
        <div className="mb-[1px] flex items-center justify-center gap-[13px]">
          {/* คำว่า "ที่" */}
          <span className="text-[36px] md:text-[48px] font-semibold text-[#036556] translate-y-[2px]">
            ที่
          </span>

          {/* logo */}
          <img
            src="/wenext-without-logo.png"
            alt="wenext"
            className="h-[180px] md:h-[140px] object-contain"
          />
        </div>

        {/* 🔹 MAIN TEXT */}
        <p className="text-[22px] md:text-[30px] font-medium leading-[36px] md:leading-[44px] text-[#036556] max-w-[1200px] -mt-[30px]">
          เราเชื่อมั่นว่าการลดการปล่อยก๊าซเรือนกระจก
          และการรับมือกับการเปลี่ยนแปลง
          <span className="whitespace-nowrap">สภาพภูมิอากาศ</span>
          <br />
          คือ ความรับผิดชอบร่วมกันของทุกภาคส่วน — ไม่ว่าจะเป็น
          <br />
          บุคคลทั่วไป SME หรือองค์กรขนาดใหญ่
        </p>
      </div>
    </section>
  );
}
