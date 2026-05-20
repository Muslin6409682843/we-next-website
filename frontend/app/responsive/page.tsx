import Hero from "../components/layout/Hero/Hero";

export default function ResponsivePage() {
  return (
    <main>
      
      <Hero
        size="small"
        title="ศูนย์ความรู้"
        type="image"
        src="/images/knowledge-hero.jpg"
      />
      <Hero
        size="large"
        variant="right-button"
        type="video"
        src="/videos/heroTrim.mp4"
        title={`ให้คำปรึกษาการลดการปล่อยก๊าซเรือนกระจกสำหรับ SME`}
      />
      <Hero
        size="large"
        variant="right-text"
        type="image"
        src="/images/about-hero.jpg"
        title={`ช่วยให้ประเทศไทยและประชาคมโลกเข้าสู่สังคมคาร์บอนต่ำ`}
      />
      <Hero
        size="large"
        variant="center-stack"
        src="/images/cfo-hero.jpg"
        title="คาร์บอนฟุตพริ้นท์องค์กร (CFO)"
        subtitle='"รู้ก่อน ลดได้ก่อน"'
      />
    </main>
  );
}
