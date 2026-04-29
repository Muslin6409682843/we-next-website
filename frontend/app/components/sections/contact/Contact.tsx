export default function Contact() {
  return (
    <section className="relative h-[1200px] bg-white">
      {/* 🔥 รวมทั้งหมดเป็น block เดียว */}
      <div className="absolute left-[698px] top-[150px] flex flex-col gap-[120px]">
        {/* 🔸 โทรศัพท์ */}
        <div className="flex items-center gap-12">
          <div className="w-[105px] h-[105px] bg-[#73F68D] rounded-full flex items-center justify-center">
            <img
              src="/icons/phone.png"
              alt="phone icon"
              className="w-[52px] h-[52px] object-contain"
            />
          </div>

          <div>
            <h3 className="text-[48px] font-semibold text-[#036556] leading-[60px]">
              โทรศัพท์
            </h3>
            <p className="text-[32px] font-medium text-[#036556] leading-[60px]">
              065-419-9000
            </p>
          </div>
        </div>

        {/* 🔸 Email */}
        <div className="flex items-center gap-12">
          <div className="w-[105px] h-[105px] bg-[#73F68D] rounded-full flex items-center justify-center">
            <img
              src="/icons/mail.png"
              alt="mail icon"
              className="w-[52px] h-[52px] object-contain"
            />
          </div>

          <div>
            <h3 className="text-[48px] font-semibold text-[#036556] leading-[60px]">
              Email
            </h3>
            <p className="text-[32px] font-medium text-[#036556] leading-[60px]">
              info@wenextthailand.com
            </p>
          </div>
        </div>

        {/* 🔸 เวลาทำการ */}
        <div className="flex items-center gap-12">
          <div className="w-[105px] h-[105px] bg-[#73F68D] rounded-full flex items-center justify-center">
            <img
              src="/icons/clock.png"
              alt="clock icon"
              className="w-[52px] h-[52px] object-contain"
            />
          </div>

          <div>
            <h3 className="text-[48px] font-semibold text-[#036556] leading-[60px]">
              เวลาทำการ
            </h3>
            <p className="text-[32px] font-medium text-[#036556] leading-[40px]">
              วันจันทร์ – ศุกร์ <br />
              เวลา 09.00 – 17.00 น.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
