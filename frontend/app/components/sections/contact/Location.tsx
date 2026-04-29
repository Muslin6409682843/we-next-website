export default function Location() {
  return (
    <section className="relative pb-[600px] bg-white">
      {/* 🔥 centered wrapper */}
      <div className="absolute left-1/2 top-[-300px] -translate-x-[46%] w-[1531px]">
        {/* 🔸 รูปซ้าย */}
        <img
          src="/images/location-1.jpg"
          alt="location 1"
          className="absolute left-[0px] top-[83px] 
                     w-[428px] h-[536px] 
                     object-cover rounded-tl-[30px]"
        />

        {/* 🔸 รูปขวา */}
        <img
          src="/images/location-2.jpg"
          alt="location 2"
          className="absolute left-[442px] top-[0px] 
                     w-[415px] h-[586px] 
                     object-cover rounded-tl-[30px]"
        />

        {/* 🔸 Text */}
        <div className="absolute left-[931px] top-[189px] w-[600px]">
          <h2 className="text-[48px] font-semibold leading-[73px] text-[#036556]">
            สำนักงานของเราตั้งอยู่ที่ <br />
            ถนนสีลม ซอย 17 ใกล้วัดแขก
          </h2>

          <p className="mt-6 text-[32px] font-medium leading-[48px] text-[#62B3A4]">
            พร้อมห้องสัมมนาขนาดเล็ก สำหรับการประชุมและปรึกษาหารือแบบตัวต่อตัว
          </p>
        </div>
      </div>
    </section>
  );
}
