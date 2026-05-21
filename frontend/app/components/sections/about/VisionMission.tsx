import { ThermometerSun, Globe2, Leaf, AlertTriangle } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FFFB] via-white to-[#ECFFF5]">
      {/* floating background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#73F68D]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-[#036556]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        {/* HEADER */}
        <div className="text-center max-w-[900px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D8F5E6] shadow-sm text-[#036556] text-sm font-medium">
            <Leaf className="w-4 h-4 text-[#73F68D]" />
            CLIMATE ACTION DASHBOARD
          </div>

          <h1 className="mt-6 text-[#036556] font-semibold text-[32px] sm:text-[44px] lg:text-[56px] leading-tight">
            เป้าหมายด้านสภาพภูมิอากาศของเรา
          </h1>

          <p className="mt-4 text-[#036556]/70 text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed">
            เรามุ่งสร้างความเข้าใจและผลักดันการเปลี่ยนแปลงเพื่อควบคุมอุณหภูมิโลกอย่างยั่งยืน
          </p>
        </div>

        {/* INFOGRAPHIC GRID */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT MAIN CARD */}
          <div className="lg:col-span-7 rounded-[28px] bg-[#036556] text-white p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-[-100px] right-[-80px] w-[300px] h-[300px] bg-[#73F68D]/30 blur-[80px] rounded-full" />

            <div className="relative z-10 h-full flex flex-col justify-between gap-10">
              {/* top label */}
              <div className="flex items-center gap-3 text-white/80 text-sm tracking-[0.2em]">
                <Globe2 className="w-5 h-5 text-[#73F68D]" />
                GLOBAL TARGET
              </div>

              {/* center number */}
              <div className="text-center">
                <div className="text-[64px] sm:text-[80px] lg:text-[110px] font-semibold leading-none">
                  2°C
                </div>

                <div className="mt-3 w-16 h-[3px] bg-[#73F68D] mx-auto rounded-full" />

                <p className="mt-5 text-white/90 text-[16px] sm:text-[18px] lg:text-[22px] leading-relaxed max-w-[520px] mx-auto">
                  ควบคุมอุณหภูมิเฉลี่ยของโลกไม่ให้สูงขึ้นเกิน 2°C ภายในปี 2100
                </p>
              </div>

              {/* bottom stats */}
              <div className="grid grid-cols-3 gap-4 text-center pt-6 border-t border-white/10">
                <div>
                  <div className="text-[#73F68D] text-xl font-semibold">
                    2030
                  </div>
                  <div className="text-white/60 text-xs mt-1">
                    Target Checkpoint
                  </div>
                </div>

                <div>
                  <div className="text-[#73F68D] text-xl font-semibold">
                    Net Zero
                  </div>
                  <div className="text-white/60 text-xs mt-1">
                    Long Term Goal
                  </div>
                </div>

                <div>
                  <div className="text-[#73F68D] text-xl font-semibold">
                    1.5°
                  </div>
                  <div className="text-white/60 text-xs mt-1">Ideal Limit</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* IMAGE CARD */}
            <div className="rounded-[28px] overflow-hidden relative group h-[260px] lg:h-[320px]">
              <img
                src="/images/vision-1.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold leading-snug">
                  Climate Change ต้องเริ่มแก้ตั้งแต่วันนี้
                </p>
              </div>
            </div>

            {/* INFO CARD */}
            <div className="rounded-[28px] bg-white border border-[#E6F6ED] p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-3 text-[#036556] font-semibold">
                <AlertTriangle className="w-5 h-5 text-[#73F68D]" />
                WHY IT MATTERS
              </div>

              <p className="mt-4 text-[#036556]/70 leading-relaxed text-sm lg:text-base">
                การเปลี่ยนแปลงสภาพภูมิอากาศส่งผลต่อเศรษฐกิจ สุขภาพ
                และความมั่นคงของโลก การเริ่มลงมือวันนี้คือสิ่งสำคัญที่สุด
              </p>
            </div>
          </div>
        </div>

        {/* FULL WIDTH MISSION (EXPANDED) */}
        <div className="mt-12">
          <div className="rounded-[28px] bg-white border border-[#E6F6ED] p-8 lg:p-12">
            <h3 className="text-[#036556] text-2xl sm:text-3xl lg:text-4xl font-semibold">
              ขับเคลื่อนองค์กรสู่อนาคตที่ยั่งยืน
            </h3>

            <p className="mt-5 text-[#036556]/70 leading-relaxed text-[15px] sm:text-[16px] lg:text-[18px] max-w-[1100px]">
              เรามุ่งให้ข้อมูลและคำปรึกษาที่เป็นประโยชน์จริง โดยรวบรวมและนำเสนอ
              สถานการณ์ปัจจุบัน กฎหมาย กฎเกณฑ์ที่เกี่ยวข้อง
              เพื่อให้องค์กรของท่าน เข้าใจปัญหาอย่างรอบด้าน
              และสามารถมีส่วนร่วมในการลดการปล่อยก๊าซเรือนกระจก
              ทั้งในระดับประเทศและระดับนานาชาติ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
