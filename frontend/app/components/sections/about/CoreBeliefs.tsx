export default function CoreBeliefs() {
  return (
    <section
      className="
        bg-white

        px-5
        sm:px-6
        md:px-8
        lg:px-12
        xl:px-16

        py-[24px]
        sm:py-[32px]
        lg:py-[40px]
      "
    >
      <div
        className="
          mx-auto
          w-full

          max-w-[1500px]

          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* TOP BRAND */}
        <div
          className="
            flex
            items-center
            justify-center

            gap-1.5
            sm:gap-2
            lg:gap-3

            mb-0
          "
        >
          {/* TEXT */}
          <span
            className="
    text-[#036556]
    font-semibold

    leading-none

    text-[18px]
    sm:text-[22px]
    md:text-[28px]
    lg:text-[34px]
    xl:text-[40px]
    2xl:text-[44px]
  "
          >
            ที่
          </span>

          {/* LOGO */}
          <img
            src="/wenext-without-logo.png"
            alt="wenext"
            className="
              object-contain

              h-[52px]
              sm:h-[62px]
              md:h-[74px]
              lg:h-[88px]
              xl:h-[102px]
              2xl:h-[116px]
            "
          />
        </div>

        {/* MAIN TEXT */}
        <p
          className="
            text-[#036556]
            font-medium

            leading-[1.65]

            max-w-[95%]
            sm:max-w-[92%]
            lg:max-w-[1180px]
            2xl:max-w-[1320px]

            text-[16px]
            sm:text-[19px]
            md:text-[23px]
            lg:text-[28px]
            xl:text-[32px]
            2xl:text-[36px]

            -mt-2
            sm:-mt-3
            lg:-mt-4
          "
        >
          เราเชื่อมั่นว่าการลดการปล่อยก๊าซเรือนกระจก
          และการรับมือกับการเปลี่ยนแปลง
          <span className="whitespace-nowrap">สภาพภูมิอากาศ</span>
          คือ ความรับผิดชอบร่วมกันของทุกภาคส่วน — ไม่ว่าจะเป็นบุคคลทั่วไป SME
          หรือองค์กรขนาดใหญ่
        </p>
      </div>
    </section>
  );
}
