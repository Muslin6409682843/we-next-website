export default function LeadershipVision() {
  return (
    <section
      className="
        bg-white

        px-5
        sm:px-6
        md:px-8
        lg:px-12
        xl:px-16

        py-[16px]
        sm:py-[28px]
        md:py-[40px]
        lg:py-[56px]
        xl:py-[64px]

        flex
        justify-center
      "
    >
      <div
        className="
          w-full
          mx-auto
          max-w-[1280px]

          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* TITLE */}
        <h2
          className="
            text-[#036556]
            font-medium

            leading-[1.5]

            text-[18px]
            sm:text-[20px]
            md:text-[24px]
            lg:text-[28px]
            xl:text-[30px]

            max-w-[92%]
            sm:max-w-[85%]
            lg:max-w-[900px]
          "
        >
          บริษัท วี เน็กซ์ ก่อตั้งขึ้นจากกลุ่มผู้เชี่ยวชาญที่มีเป้าหมายเดียวกัน
          คือ
        </h2>

        {/* spacing (ลด mobile มากขึ้น) */}
        <div className="h-[8px] sm:h-[12px] md:h-[16px]" />

        {/* QUOTE */}
        <p
          className="
            text-[#036556]
            font-semibold

            leading-[1.6]

            text-[20px]
            sm:text-[24px]
            md:text-[30px]
            lg:text-[36px]
            xl:text-[40px]

            max-w-[94%]
            sm:max-w-[88%]
            lg:max-w-[1050px]
          "
        >
          “ทำให้การลดโลกร้อนเป็นเรื่องที่ทุกองค์กรเข้าถึงได้ เราเชื่อว่า{" "}
          <span className="text-[#73F68D]">
            ข้อมูลที่ถูกต้อง ชัดเจน และเข้าใจง่าย
          </span>
          คือก้าวแรกที่สำคัญที่สุด”
        </p>
      </div>
    </section>
  );
}
