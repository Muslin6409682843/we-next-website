import Image from "next/image";

export default function SocialMedia() {
  return (
    <section className="w-full bg-white py-[80px] flex justify-center transition-all duration-300 hover:bg-[#F7FBFA] group">
      
      <div className="mx-auto w-fit flex items-center gap-[140px] translate-x-[30px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[16px]">
        
        {/* 🔵 LEFT MOCKUP */}
        <div className="flex-shrink-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:rotate-[-2deg]">
          <Image
            src="/images/facebook-mock.png"
            alt="facebook mock"
            width={254}
            height={491}
            className="object-contain h-auto"
          />
        </div>

        {/* 🔵 RIGHT CONTENT */}
        <div className="flex flex-col gap-[28px] max-w-[720px]">
          
          {/* TITLE */}
          <h2 className="text-[40px] font-semibold text-[#036556] leading-[58px] transition-all duration-300 group-hover:text-[#024C43]">
            ติดตามข้อมูล ข่าวสาร และบทความ
            <br />
            ด้านการลดโลกร้อนได้ผ่านช่องทางของเรา
          </h2>

          {/* FACEBOOK BLOCK */}
          <a
            href="https://facebook.com/wenext.consult"
            target="_blank"
            className="flex items-center gap-[20px] group/item"
          >
            {/* ICON */}
            <img
              src="/images/facebook-blue-logo.png"
              alt="facebook icon"
              className="w-[60px] h-[60px] object-contain transition-all duration-200 group-hover/item:scale-125"
            />

            {/* TEXT */}
            <div className="flex flex-col">
              <p className="text-[22px] font-semibold text-[#036556] transition group-hover/item:text-[#126656]">
                WeNext – ที่ปรึกษาการบริหารจัดการก๊าซเรือนกระจก
              </p>

              <span className="text-[20px] text-[#62B3A4] transition underline group-hover/item:text-[#036556]">
                facebook.com/wenext.consult
              </span>
            </div>
          </a>

        </div>
      </div>

    </section>
  );
}