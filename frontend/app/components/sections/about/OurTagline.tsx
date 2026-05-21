export default function OurTagline() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 lg:gap-20">
          {/* LEFT */}
          <div className="lg:pr-10">
            <div className="px-2 sm:px-4 lg:px-6">
              <h2 className="text-[#036556] font-semibold leading-snug text-[28px] sm:text-[36px] lg:text-[46px] xl:text-[52px] max-w-[900px]">
                <span className="text-[#73F68D]">เรื่องใกล้ตัว</span> เล็กๆ
                น้อยๆ หากเราใส่ใจ ก็ช่วย{" "}
                <span className="text-[#73F68D] whitespace-nowrap">
                  ลดโลกร้อน
                </span>{" "}
                ได้เหมือนกัน
              </h2>

              <div className="mt-8 w-20 lg:w-24 h-[2px] bg-[#73F68D]" />

              <p className="mt-6 text-[#036556]/80 text-[16px] lg:text-[18px] font-medium">
                — คุณอาร์ม
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE (FIXED HEIGHT FLOW) */}
          <div className="flex items-center">
            <div
              className="
              w-full
              shadow-md
              rounded-tl-[30px]
              rounded-br-[30px]
              overflow-hidden

              max-h-[260px] sm:max-h-[320px] md:max-h-[340px] lg:max-h-none
            "
            >
              <div
                className="
                relative w-full

                aspect-[4/3]
                md:aspect-[3/2]
                lg:aspect-[16/10]
              "
              >
                <img
                  src="/images/tagline.jpg"
                  alt="tagline"
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    block
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
