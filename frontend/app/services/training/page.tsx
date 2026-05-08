import Hero from "../../components/layout/Hero/Hero";
import BackToServices from "../../components/sections/services/details/BackToServices";
import ServiceIntro from "../../components/sections/services/details/ServiceIntro";
import SectionDivider from "../../components/ui/SectionDivider";
import SideAccentSection from "../../components/layout/SideAccentSection";
import TextSection from "../../components/sections/services/details/TextSection";

export default function TrainingPage() {
  return (
    <main>
      <Hero
        size="large"
        variant="center-stack"
        src="/images/training-hero.jpg"
        title="อบรมและสัมมนาภายในองค์กร"
        subtitle='"เรื่องซับซ้อน เราทำให้เข้าใจง่าย"'
      />

      <BackToServices />

      <ServiceIntro
        title="Training"
        titleSize="
    text-[72px]
    max-[768px]:text-[56px]
    max-[640px]:text-[42px]
  "
        image="/images/training-hero.jpg"
        description="การขับเคลื่อนเรื่องความยั่งยืนในองค์กรจะเกิดขึ้นได้ยาก หากมีเพียงบางคนที่เข้าใจเรื่องคาร์บอน ขณะที่คนทำงานอีกจำนวนมากยังมองว่าเป็นเรื่องไกลตัวหรือเป็นภาระทางเอกสาร We Next จึงออกแบบบริการอบรมและสัมมนาที่ช่วยเปลี่ยนเรื่องซับซ้อนให้กลายเป็นเรื่องที่เข้าใจง่าย เชื่อมโยงกับบริบทธุรกิจจริง และทำให้ทีมงานขององค์กรสามารถนำความรู้ไปใช้ต่อได้"
      />
      <SectionDivider />

      <SideAccentSection side="left">
        <TextSection
          title="ทำไมองค์กรควรเริ่มจากการอบรม"
          content="หลายองค์กรเริ่มต้นเรื่องคาร์บอนด้วยความตั้งใจที่ดี แต่ติดปัญหาว่าทีมงานไม่แน่ใจว่าคำศัพท์ต่างๆ หมายถึงอะไร ต้องเก็บข้อมูลจากที่ไหน หรือแต่ละฝ่ายเกี่ยวข้องกันอย่างไร การอบรมจึงเป็นเครื่องมือสำคัญในการสร้างความเข้าใจร่วมกัน ลดความสับสน และทำให้การดำเนินโครงการจริงในภายหลังมีประสิทธิภาพมากขึ้น ยิ่งหากองค์กรกำลังเตรียมทำ CFO, CFP หรือโครงการคาร์บอนเครดิต การมีทีมที่เข้าใจพื้นฐานตรงกันตั้งแต่ต้นจะช่วยลดเวลาและข้อผิดพลาดได้มาก
                            "
        />
      </SideAccentSection>
      <SectionDivider />

      <SideAccentSection side="right">
        <TextSection
          title="เหมาะกับใคร"
          content="บริการนี้เหมาะกับองค์กรที่ต้องการสร้างความเข้าใจเรื่องคาร์บอนและความยั่งยืนให้กับพนักงาน ผู้บริหาร หรือทีมงานเฉพาะด้าน เหมาะสำหรับองค์กรที่กำลังเริ่มต้นทำ CFO, CFP หรือโครงการคาร์บอนเครดิต และต้องการให้ทีมภายในมีความเข้าใจพื้นฐานตรงกันก่อนลงมือจริง นอกจากนี้ยังเหมาะกับองค์กรที่ต้องการยกระดับความรู้ของทีมงานในรูปแบบ workshop หรือหลักสูตรเฉพาะทาง เพื่อให้สามารถนำแนวคิดด้านคาร์บอนไปประยุกต์ใช้กับงานประจำได้อย่างเป็นรูปธรรม"
        />
      </SideAccentSection>
      <SectionDivider />

      <SideAccentSection side="left">
        <TextSection
          title="รูปแบบบริการ"
          content="We Next สามารถออกแบบหลักสูตรตามเป้าหมายขององค์กรได้ทั้งในรูปแบบสร้างความตระหนักรู้สำหรับพนักงานทั่วไป หลักสูตรเชิงปฏิบัติสำหรับทีมที่ต้องทำงานด้านคาร์บอนจริง หรือหลักสูตรสำหรับผู้บริหารที่ต้องการเห็นภาพรวมเชิงกลยุทธ์และการตัดสินใจ ทั้งนี้รูปแบบการอบรมเดิมใน draft ครอบคลุม in-house, online และหลักสูตรพิเศษสำหรับผู้บริหารอยู่แล้ว
                            "
        />
      </SideAccentSection>
      <SectionDivider />

      <SideAccentSection side="right">
        <TextSection
          title="ตัวอย่างหัวข้ออบรม"
          content="หัวข้ออบรมสามารถออกแบบได้ตามความต้องการ เช่น พื้นฐานการเปลี่ยนแปลงสภาพภูมิอากาศและผลกระทบต่อธุรกิจ พื้นฐานคาร์บอนฟุตพริ้นท์องค์กร การเตรียมข้อมูลสำหรับ CFO/CFP แนวทางลดการปล่อยก๊าซเรือนกระจกในองค์กร การสื่อสารเรื่องความยั่งยืนภายในองค์กร และการปูพื้นฐานเรื่องคาร์บอนเครดิตและ T-VER"
        />
      </SideAccentSection>
      <SectionDivider />

      <SideAccentSection side="left">
        <TextSection
          title="สิ่งที่ท่านจะได้รับ"
          content="องค์กรของท่านจะได้รับหลักสูตรที่ออกแบบเฉพาะตามบริบทธุรกิจ สไลด์และเอกสารประกอบการอบรม แบบฝึกหรือ workshop ตามความเหมาะสม สรุปประเด็นสำคัญหลังจบ session และแนวทางต่อยอดสำหรับการดำเนินงานจริง เช่น การเริ่มทำ CFO หรือการเตรียมข้อมูลภายในองค์กร
                            "
        />
      </SideAccentSection>
      <SectionDivider />
    </main>
  );
}
