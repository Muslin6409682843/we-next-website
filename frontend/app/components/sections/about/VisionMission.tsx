import { ThermometerSun } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="w-full overflow-x-hidden">
      {/* 🔹 TOP BG */}
      <div className="w-full bg-[rgba(109,237,195,0.18)] relative overflow-hidden">
        
        {/* CONTENT WRAPPER (FIX HEIGHT = IMAGE HEIGHT) */}
        <div className="ml-[158px] mr-[541px] h-[483px] flex items-center">
          
          {/* 🔹 LEFT TEXT */}
          <div className="flex-1 min-w-0">

            {/* 🔹 TITLE + LOGO */}
            <div className="flex items-center gap-[12px] mb-[12px] flex-wrap">
              <h2 className="text-[36px] md:text-[48px] font-semibold text-[#036556]">
                เป้าหมายของ
              </h2>

              <img
                src="/wenext-without-logo.png"
                alt="WeNext"
                className="h-[160px] md:h-[140px] object-contain"
              />
            </div>

            {/* 🔹 DESCRIPTION */}
            <p className="text-[24px] md:text-[32px] font-medium leading-[36px] md:leading-[44px] text-[#036556] mb-[100px] whitespace-nowrap">
              คือ การช่วยให้ประเทศไทย และประชาคมโลกสามารถ
              ควบคุมอุณหภูมิเฉลี่ยของโลก
            </p>

            {/* 🔹 HIGHLIGHT */}
            <div className="flex items-start gap-[16px] -translate-y-[50px]">
              <ThermometerSun
                size={96}
                strokeWidth={2}
                className="text-[#73F68D] shrink-0 mt-[4px]"
              />

              <p className="text-[32px] md:text-[40px] font-semibold leading-[48px] text-[#036556]">
    ควบคุมอุณหภูมิเฉลี่ยของโลก <br />
    ไม่ให้สูงขึ้นเกิน{" "}
    <span className="text-[#73F68D]">2 °C</span>{" "}
    ภายในปี{" "}
    <span className="text-[#73F68D]">2100</span>
  </p>
            </div>

          </div>
        </div>

        {/* 🔥 RIGHT IMAGE (FIXED TO VIEWPORT RIGHT EDGE) */}
        <div className="absolute right-0 top-0 h-[483px] flex items-center">
          <img
            src="/images/vision-1.jpg"
            alt="vision"
            className="w-[541px] h-[483px] object-cover rounded-tl-[30px] rounded-br-[30px]"
          />
        </div>
      </div>

      {/* spacer */}
      <div className="h-[40px] bg-white" />

      {/* 🔹 BOTTOM BG */}
      <div className="w-full bg-[#E5FCF4] relative overflow-hidden">
        
        {/* CONTENT WRAPPER */}
        <div className="ml-[158px] mr-[541px] h-[483px] flex items-center">
          
          {/* 🔹 TEXT */}
          <div className="w-full max-w-[970px]">
            <p className="text-[24px] md:text-[32px] font-medium leading-[36px] md:leading-[44px] text-[#036556]">
              เราจึงมุ่งให้ข้อมูลและคำปรึกษาที่เป็นประโยชน์จริง
              โดยรวบรวมและนำเสนอ สถานการณ์ปัจจุบัน กฎหมาย กฎเกณฑ์ที่เกี่ยวข้อง
              เพื่อให้องค์กรของท่านเข้าใจปัญหาอย่างรอบด้าน
              และสามารถมีส่วนร่วมในการลดการปล่อยก๊าซเรือนกระจก
              ทั้งในระดับประเทศและระดับนานาชาติ
            </p>
          </div>
        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div className="absolute right-0 top-0 h-[483px] flex items-center">
          <img
            src="/images/vision-2.jpg"
            alt="mission"
            className="w-[541px] h-[483px] object-cover rounded-tl-[30px] rounded-br-[30px]"
          />
        </div>
      </div>
    </section>
  );
}