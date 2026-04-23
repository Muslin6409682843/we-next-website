import Hero from "../components/layout/Hero/Hero";

export default function KnowledgePage() {
  return (
    <div className="relative">
      <Hero
        size="small"
        title="ศูนย์ความรู้"
        type="image"
        src="/images/knowledge-hero.jpg"
      />

      <div className="h-[80px]" />

      <div className="flex flex-col items-center justify-center text-center gap-6 py-[120px]">
        <h2 className="text-[64px] font-semibold text-[#FBB379]">
          Coming Soon
        </h2>

        <div className="flex items-center gap-3 max-w-[1204px]">
          <p className="text-[32px] font-medium text-[#20443B] leading-[50px] text-center">
            ติดตามข่าวสารและอัปเดตด้านมาตรฐานสิ่งแวดล้อมและพลังงาน
            <br />
            จากทีม{" "}
            <img
              src="/wenext-without-logo.png"
              alt="logo"
              className="inline-block w-[137px] h-[107px] align-middle"
            />{" "}
            ได้เร็วๆ นี้
          </p>
        </div>
        <div className="h-[80px]" />
      </div>
    </div>
  );
}
