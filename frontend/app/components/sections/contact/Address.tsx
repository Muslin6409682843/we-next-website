export default function Address() {
  return (
    <section className="relative w-full bg-[rgba(109,237,195,0.18)] flex justify-center mt-[-100px] py-[40px]">
      {/* 🔳 White Card */}
      <div className="relative w-[1512px] h-[818px] bg-white rounded-tl-[30px] rounded-br-[30px] shadow-sm">
        {/* 🔵 Icon + Title */}
        <div className="absolute left-[70px] top-[34px] flex items-center gap-[30px]">
          {/* Circle */}
          <div className="w-[108px] h-[108px] bg-[#73F68D] rounded-full flex items-center justify-center">
            {/* location icon */}
            <svg
              width="74"
              height="74"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                fill="white"
              />
              <circle cx="12" cy="9" r="2.5" fill="#73F68D" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-[48px] font-semibold text-[#036556] translate-y-[7px]">
            ที่อยู่บริษัท
          </h2>
        </div>

        {/* 📍 Address text (right side) */}
        <div className="absolute right-[70px] top-[70px] w-[578px] text-right">
          <p className="text-[24px] font-medium leading-[36px] text-[#036556]">
            807-809 อาคารสีลมเซี่ยงไฮ้ ชั้นที่ 6 ห้องที่ 2 ซอย สีลม 17 ถนนสีลม
            แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500
          </p>
        </div>

        {/* 🗺️ Google Map */}
        <div className="absolute left-0 bottom-0 w-full h-[634px] rounded-br-[30px] overflow-hidden">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=Silom%20Shanghai%20Building&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
