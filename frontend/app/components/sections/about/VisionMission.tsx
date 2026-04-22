export default function VisionMission() {
  return (
    <section className="w-full">
      {/* 🔹 TOP BG */}
      <div className="w-full bg-[rgba(109,237,195,0.18)] flex justify-center py-[60px]">
        <div className="max-w-[1200px] w-full px-6 flex flex-col lg:flex-row gap-[60px]">
          {/* 🔹 LEFT TEXT */}
          <div className="flex-1">
            {/* 🔹 TITLE + LOGO */}
            <div className="flex items-center gap-[12px] mb-[24px] flex-wrap">
              <h2 className="text-[36px] md:text-[48px] font-semibold text-[#036556] translate-y-[2px]">
                เป้าหมายของ
              </h2>

              <img
                src="/wenext-without-logo.png"
                alt="WeNext"
                className="h-[180px] md:h-[140px] object-contain"
              />
            </div>

            {/* 🔹 DESCRIPTION */}
            <p className="text-[24px] md:text-[32px] font-medium leading-[36px] md:leading-[44px] text-[#036556] mb-[24px]">
              คือ การช่วยให้ประเทศไทย และประชาคมโลกสามารถ
              ควบคุมอุณหภูมิเฉลี่ยของโลก
            </p>

            {/* 🔹 HIGHLIGHT */}
            <div className="flex items-start gap-[16px]">
              <div className="w-[6px] h-[80px] bg-[#73F68D] mt-[6px]" />

              <p className="text-[32px] md:text-[40px] font-semibold leading-[48px] text-[#036556]">
                ควบคุมอุณหภูมิเฉลี่ยของโลก <br />
                ไม่ให้สูงขึ้นเกิน 2 °C ภายในปี 2100
              </p>
            </div>
          </div>

          {/* 🔹 RIGHT IMAGES */}
          <div className="flex-1 flex flex-col gap-[20px] items-end">
            <img
              src="/images/vision-1.jpg"
              alt="vision"
              className="w-full max-w-[500px] h-[240px] object-cover rounded-tl-[30px]"
            />

            <img
              src="/images/vision-2.jpg"
              alt="vision"
              className="w-full max-w-[500px] h-[240px] object-cover rounded-tl-[30px]"
            />
          </div>
        </div>
      </div>

      {/* 🔹 BOTTOM BG */}
      <div className="w-full bg-[#E5FCF4] py-[80px] flex justify-center">
        <div className="max-w-[1200px] w-full px-6 flex flex-col lg:flex-row gap-[60px]">
          {/* 🔹 TEXT */}
          <div className="flex-1">
            <p className="text-[24px] md:text-[32px] font-medium leading-[36px] md:leading-[44px] text-[#036556]">
              เราจึงมุ่งให้ข้อมูลและคำปรึกษาที่เป็นประโยชน์จริง
              โดยรวบรวมและนำเสนอ สถานการณ์ปัจจุบัน กฎหมาย กฎเกณฑ์ที่เกี่ยวข้อง
              เพื่อให้องค์กรของท่านเข้าใจปัญหาอย่างรอบด้าน
              และสามารถมีส่วนร่วมในการลดการปล่อยก๊าซเรือนกระจก
              ทั้งในระดับประเทศและระดับนานาชาติ
            </p>
          </div>

          {/* 🔹 IMAGE */}
          <div className="flex-1 flex justify-end">
            <img
              src="/images/vision-3.jpg"
              alt="mission"
              className="w-full max-w-[500px] h-[300px] object-cover rounded-tl-[30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
