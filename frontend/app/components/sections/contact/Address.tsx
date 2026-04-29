export default function Address() {
  return (
    <section className="relative w-full bg-[rgba(109,237,195,0.18)] flex justify-center mt-[-150px] py-[60px]">
      {/* 🔳 White Card */}
      <div className="relative w-full max-w-[1200px] bg-white rounded-tl-[24px] rounded-br-[24px] shadow-sm overflow-hidden">
        {/* 🔵 Header */}
        <div className="flex items-center justify-between px-[40px] pt-[30px]">
          {/* ซ้าย */}
          <div className="flex items-center gap-[20px]">
            <div className="w-[80px] h-[80px] bg-[#73F68D] rounded-full flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill="white"
                />
                <circle cx="12" cy="9" r="2.5" fill="#73F68D" />
              </svg>
            </div>

            <h2 className="text-[36px] font-semibold text-[#036556]">
              ที่อยู่บริษัท
            </h2>
          </div>

          {/* ขวา */}
          <p className="max-w-[420px] text-right text-[20px] leading-[28px] text-[#036556] font-semibold">
            807-809 อาคารสีลมเซี่ยงไฮ้ ชั้นที่ 6 ห้องที่ 2 ซอยสีลม 17 ถนนสีลม
            แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500
          </p>
        </div>

        {/* 🗺️ Google Map */}
        <div className="mt-[30px] w-full h-[700px]">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=We+Next+Co.,Ltd&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
