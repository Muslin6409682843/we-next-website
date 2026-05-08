import Hero from "../../components/layout/Hero/Hero";
import BackToServices from "../../components/sections/services/details/BackToServices";
import ServiceIntro from "../../components/sections/services/details/ServiceIntro";
import SectionDivider from "../../components/ui/SectionDivider";
import SideAccentSection from "../../components/layout/SideAccentSection";
import TextSection from "../../components/sections/services/details/TextSection";

export default function TverEnergyTransportPage() {
  return (
    <main>
      <Hero
        size="large"
        variant="center-stack"
        src="/images/tver-energy-transport.jpg"
        title="Carbon Credit T-VER พลังงานและขนส่ง"
        subtitle='"ลงทุน Solar หรือเปลี่ยน EV แล้ว — ทำไมไม่ได้เครดิตด้วย?"'
      />

      <BackToServices />

      <ServiceIntro
        title={`T-VER Energy
and Transport`}
        titleSize="
    text-[42px]
    leading-[1.15]

    max-[768px]:text-[34px]
    max-[640px]:text-[26px]
  "
        image="/images/tver-energy-transport.jpg"
        description="หลายองค์กรลงทุนในโครงการที่ช่วยลดการใช้พลังงานหรือเปลี่ยนไปใช้พลังงานสะอาดอยู่แล้ว ไม่ว่าจะเป็นการติดตั้ง Solar Cell การเปลี่ยนรถเป็น EV การปรับปรุงระบบเครื่องจักร หรือการเพิ่มประสิทธิภาพในอาคาร แต่บ่อยครั้งองค์กรยังไม่ได้ประเมินว่าโครงการเหล่านี้อาจต่อยอดเป็นคาร์บอนเครดิตได้หรือไม่ บริการ T-VER พลังงานและขนส่งของ We Next จึงถูกออกแบบมาเพื่อช่วยวิเคราะห์ความเป็นไปได้และแปลงการลงทุนด้านพลังงานของท่านให้เกิดมูลค่าเพิ่มอีกชั้นหนึ่ง"
      />
      <SectionDivider />

      <SideAccentSection side="left">
        <TextSection
          title="ทำไมองค์กรจึงควรพิจารณาบริการนี้"
          content="องค์กรจำนวนมากได้ลงทุนในระบบประหยัดพลังงานหรือพลังงานสะอาดไปแล้ว แต่ยังไม่ได้ใช้ประโยชน์จากข้อมูลและผลลัพธ์ของโครงการอย่างเต็มที่ หากโครงการของท่านเข้าเงื่อนไขที่เหมาะสม การพัฒนาเป็นคาร์บอนเครดิตอาจช่วยเสริมความคุ้มค่าในการลงทุน ช่วยสื่อสารผลลัพธ์เชิงสิ่งแวดล้อมอย่างเป็นรูปธรรม และช่วยสนับสนุนภาพลักษณ์ด้าน ESG ขององค์กรได้อย่างชัดเจน
                      "
        />
      </SideAccentSection>
      <SectionDivider />

      <SideAccentSection side="right">
        <TextSection
          title="เหมาะกับใคร"
          content="บริการนี้เหมาะกับองค์กรที่มีโครงการด้านพลังงานสะอาด การอนุรักษ์พลังงาน หรือการขนส่งคาร์บอนต่ำ และต้องการประเมินว่าโครงการดังกล่าวสามารถต่อยอดเป็นคาร์บอนเครดิตได้หรือไม่ เหมาะกับโรงงาน อาคารธุรกิจ ผู้ประกอบการด้านโลจิสติกส์ หรือองค์กรที่ได้ลงทุนในระบบ Solar Cell, EV, ระบบปรับปรุงประสิทธิภาพพลังงาน หรือมาตรการลดการใช้เชื้อเพลิง และต้องการให้ผลลัพธ์ด้านสิ่งแวดล้อมของโครงการถูกแปลงเป็นมูลค่าเชิงธุรกิจอย่างเป็นรูปธรรม"
        />
      </SideAccentSection>
      <SectionDivider />

      <SideAccentSection side="left">
        <TextSection
          title="ขอบเขตการให้บริการ"
          content="We Next ช่วยประเมินว่าโครงการของท่านมีแนวโน้มเข้าหลักเกณฑ์หรือไม่ วิเคราะห์ข้อมูลพลังงานหรือการขนส่งที่เกี่ยวข้อง ช่วยจัดระบบข้อมูลย้อนหลัง จัดเตรียมเอกสารประกอบ และดูแลกระบวนการเตรียมความพร้อมจนถึงขั้นตอนยื่นที่เกี่ยวข้อง โดยบริการนี้ต่อยอดจากข้อความใน draft ที่ระบุว่า We Next ช่วยตรวจสอบว่าโครงการเข้าเงื่อนไขหรือไม่ และดำเนินการขึ้นทะเบียนให้ครบถ้วน
                      "
        />
      </SideAccentSection>
      <SectionDivider />

      <SideAccentSection side="right">
        <TextSection
          title="สิ่งที่ท่านจะได้รับ"
          content="ท่านจะได้รับรายงานวิเคราะห์ความเป็นไปได้ของโครงการ ชุดข้อมูลและเอกสารประกอบสำหรับการพัฒนาโครงการคาร์บอนเครดิต สรุปผลการลดการปล่อยโดยประมาณ และคำแนะนำในการบริหารข้อมูลอย่างต่อเนื่อง ซึ่งสอดคล้องกับสิ่งที่ draft เดิมระบุว่าจะได้รับ คือรายงานการตรวจสอบความเป็นไปได้ เอกสารประกอบการขึ้นทะเบียน และการสนับสนุนตลอดกระบวนการ"
        />
      </SideAccentSection>
      <SectionDivider />
    </main>
  );
}
