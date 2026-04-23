export default function ServicesIntro() {
  return (
    <section className="py-[100px] bg-white flex justify-center">
      <div className="w-[1223px] flex items-center justify-between gap-[80px]">
        {/* 🟡 IMAGE LEFT */}
        <div className="w-[426px] h-[426px] flex-shrink-0">
          <img
            src="/images/servicesIntro.png"
            alt="services illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🟢 TEXT RIGHT */}
        <div className="w-[542px] flex flex-col gap-6">
          <p className="text-[#036556] font-medium text-[24px] leading-[33px] whitespace-pre-line">
            เราพร้อมเป็นพันธมิตรให้กับองค์กรของท่านในทุกขั้นตอน{"\n"}
            ของการลดการปล่อยก๊าซเรือนกระจก
          </p>

          <p className="text-[#036556] font-semibold text-[32px] leading-[44px] whitespace-pre-line">
            เพียงแค่บอกเราว่าองค์กรของท่าน{"\n"}
            ดำเนินธุรกิจประเภทใด และอยู่ที่ไหน{"\n"}
            <span className="text-[#F04F23]">
              ที่เหลือเราจะช่วยวิเคราะห์และวางแผนให้
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
