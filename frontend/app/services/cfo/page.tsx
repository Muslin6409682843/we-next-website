import Hero from "../../components/layout/Hero/Hero";
import BackToServices from "../../components/sections/services/details/BackToServices";
import ServiceIntro from "../../components/sections/services/details/ServiceIntro";
import SectionDivider from "../../components/ui/SectionDivider";
import SideAccentSection from "../../components/layout/SideAccentSection";
import TextSection from "../../components/sections/services/details/TextSection";

export default function CFOPage() {
  return (
    <main>
      <Hero
        size="large"
        variant="center-stack"
        src="/images/cfo-hero.jpg"
        title="คาร์บอนฟุตพริ้นท์องค์กร (CFO)"
        subtitle='"รู้ก่อน ลดได้ก่อน"'
      />

      <BackToServices />
      <ServiceIntro
        title="CFO"
        image="/images/cfo-hero.jpg"
        description="การลดการปล่อยก๊าซเรือนกระจกที่มีประสิทธิภาพ ต้องเริ่มจากการรู้ ก่อนว่าองค์กรของท่านปล่อยก๊าซเรือนกระจกจากจุดใด ปริมาณเท่าไร และส่วนไหนคือจุดที่ควรจัดการก่อนที่สุด บริการคาร์บอนฟุตพริ้นท์องค์กร หรือ CFO คือก้าวแรกที่สำคัญสำหรับองค์กรที่ต้องการวางระบบด้านการ ลดการปล่อยก๊าซเรือนกระจกอย่าง จริงจัง ทั้งเพื่อการบริหารภายใน การสื่อสารกับผู้มีส่วนได้ส่วนเสีย และการเตรียมความพร้อมต่อข้อกำหนด และกฎหมายที่เกี่ยวข้อง"
      />
      <SectionDivider />

      <SideAccentSection side="left">
        <TextSection
          title="ทำไมองค์กรจึงควรทำ CFO"
          content="ในปัจจุบัน หลายองค์กรเริ่มถูกตั้งคำถามไม่เพียงเรื่องผลประกอบการ แต่รวมถึงแนวทางบริหารจัดการก๊าซเรือนกระจกด้วย หากองค์กรยังไม่มีข้อมูลฐานการปล่อยของตนเอง การกำหนดเป้าหมายลดก๊าซเรือนกระจก วางแผนลงทุนอย่างคุ้มค่า จึงเป็นไปได้ยาก ซึ่งรวมถึงสื่อสารเรื่องความยั่งยืนได้อย่างน่าเชื่อถือด้วย  CFO จึงไม่ใช่เพียงรายงานเชิงเทคนิค แต่เป็นเครื่องมือบริหารที่ช่วยให้องค์กรเห็นภาพรวมการใช้พลังงาน การเดินทาง การใช้วัตถุดิบ และกิจกรรมอื่นๆ ที่เกี่ยวข้องกับการปล่อยก๊าซเรือนกระจกในองค์กรอย่างเป็นระบบ"
        />
      </SideAccentSection>
      <SectionDivider />

    </main>
  );
}
