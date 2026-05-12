import Hero from "../../components/layout/Hero/Hero";
import BackToServices from "../../components/sections/services/details/BackToServices";
import ServiceIntro from "../../components/sections/services/details/ServiceIntro";
import SectionDivider from "../../components/ui/SectionDivider";
import SideAccentSection from "../../components/layout/SideAccentSection";
import TextSection from "../../components/sections/services/details/TextSection";
import WorkflowSection from "../../components/sections/services/details/WorkflowSection";
import ConsultationSection from "../../components/sections/services/details/ConsultationSection";
import FAQSection from "../../components/sections/services/details/FAQSection";

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

      <SideAccentSection side="right">
        <TextSection
          title="เหมาะกับใคร เริ่มต้นกับทำ CFO กับเราหากองค์การของท่านต้องการสิ่งเหล้านี้"
          content={
            <div className="space-y-10">
              {/* intro */}
              <p>บริการนี้เหมาะกับ</p>

              {/* numbered list */}
              <ol className="list-decimal pl-8 space-y-5">
                <li>
                  องค์กรที่ต้องการเริ่มต้นจัดการเรื่องคาร์บอนอย่างเป็นระบบ
                  แต่ยังไม่ทราบว่าควรเริ่มจากจุดใด
                </li>

                <li>
                  บริษัทที่ต้องการทราบปริมาณการปล่อยก๊าซเรือนกระจกขององค์กร
                  เพื่อใช้ในการวางแผนลดการปล่อย จัดทำรายงานด้านความยั่งยืน
                  ตอบคำถามจากลูกค้า นักลงทุน หรือคู่ค้าทางธุรกิจ
                </li>

                <li>
                  องค์กรที่กำลังเตรียมความพร้อมสู่เป้าหมาย Net Zero หรือ ESG
                  Reporting ในอนาคต
                </li>

                <li>
                  องค์กรที่มีหลายแผนก หลายกิจกรรม หรือหลายแหล่งใช้พลังงาน
                  และต้องการให้มีผู้เชี่ยวชาญช่วยจัดระบบข้อมูลให้ชัดเจนตั้งแต่ต้น
                </li>
              </ol>
            </div>
          }
        />
      </SideAccentSection>
      <SectionDivider />

      <SideAccentSection side="left">
        <TextSection
          title="ขอบเขตการให้บริการ"
          content={
            <div className="space-y-10">
              {/* intro */}
              <p>WeNext ให้บริการตั้งแต่ต้นจนจบ ตั้งแต่</p>

              {/* bullet */}
              <ul className="list-disc pl-8 space-y-5">
                <li>การกำหนดขอบเขตองค์กร</li>

                <li>การออกแบบรายการข้อมูลที่ต้องใช้</li>

                <li>การเก็บรวบรวมข้อมูลจากหน่วยงานที่เกี่ยวข้อง</li>

                <li>การคำนวณปริมาณการปล่อยก๊าซเรือนกระจก</li>

                <li>การจัดทำรายงานสรุปผล ไปจนถึงการให้</li>

                <li>คำแนะนำแนวทางลดการปล่อยที่เหมาะกับบริบทของแต่ละองค์กร</li>
              </ul>

              {/* outro */}
              <p>
                โดยยึดหลักการทำงานที่เข้าใจง่าย ใช้งานได้จริง
                และสื่อสารกับทีมของลูกค้าได้ชัดเจน
                ซึ่งสอดคล้องกับแนวทางของทีมที่เน้นการอธิบายเรื่องซับซ้อนให้เข้าใจง่าย
              </p>
            </div>
          }
        />
      </SideAccentSection>
      <SectionDivider />

      <WorkflowSection
        steps={[
          {
            title: "การประชุมเริ่มต้นโครงการ",
            description:
              "เราพูดคุยเพื่อทำความเข้าใจลักษณะธุรกิจ โครงสร้างองค์กร สาขา กิจกรรมหลัก และวัตถุประสงค์ของการจัดทำ CFO",
          },
          {
            title: "กำหนดขอบเขตและรายการข้อมูล",
            description:
              "เราจัดทำ checklist ข้อมูลที่ต้องใช้ เช่น ค่าไฟฟ้า เชื้อเพลิง การเดินทาง การใช้สารทำความเย็น ของเสีย และข้อมูลอื่นที่เกี่ยวข้อง",
          },
          {
            title: "รวบรวมและตรวจสอบข้อมูล",
            description:
              "ทีมงานช่วยประสานและตรวจสอบความครบถ้วนของข้อมูล เพื่อให้การคำนวณมีความถูกต้องและลดภาระของลูกค้า",
          },
          {
            title: "คำนวณและวิเคราะห์ผล",
            description:
              "เราคำนวณปริมาณการปล่อยก๊าซเรือนกระจก แยกตามแหล่งกำเนิด และวิเคราะห์ว่าแหล่งใดเป็น hotspot ที่ควรให้ความสำคัญ",
          },
          {
            title: "จัดทำรายงานและนำเสนอผล",
            description:
              "ท่านจะได้รับรายงาน CFO ฉบับสมบูรณ์ พร้อมสรุปผู้บริหารและข้อเสนอแนะในการลดการปล่อยที่ทำได้จริง",
          },
          {
            title: "ให้คำแนะนำต่อยอด",
            description:
              "หากองค์กรต้องการดำเนินการต่อ เช่น วางเป้าหมายลดคาร์บอน จัดทำแผนลดการปล่อย หรือเตรียมยื่นรับรองกับหน่วยงานที่เกี่ยวข้อง เราสามารถวางแผนต่อยอดร่วมกันได้",
          },
        ]}
      />
      <SectionDivider />

      <SideAccentSection side="right">
        <TextSection
          title="สิ่งที่ท่านจะได้รับ"
          content={
            <div className="space-y-10">
              {/* intro */}
              <p>ท่านจะได้รับรายงาน</p>

              {/* bullet */}
              <ul className="list-disc pl-8 space-y-5">
                <li>
                  คาร์บอนฟุตพริ้นท์องค์กรฉบับสมบูรณ์
                  สรุปผลการปล่อยก๊าซเรือนกระจกตามหมวดกิจกรรม{" "}
                </li>

                <li>
                  รายการข้อมูลและสมมติฐานที่ใช้ในการคำนวณ executive summary
                  สำหรับผู้บริหาร
                </li>

                <li>ข้อเสนอแนะแนวทางลดการปล่อยระยะสั้น ระยะกลาง และระยะยาว</li>
              </ul>
            </div>
          }
        />
      </SideAccentSection>
      <SectionDivider />

      <ConsultationSection />
      <SectionDivider />

      <FAQSection
        items={[
          {
            question: "CFO คืออะไร",
            answer:
              "CFO หรือ Carbon Footprint for Organization คือการประเมินปริมาณการปล่อยก๊าซเรือนกระจกจากกิจกรรมทั้งหมดขององค์กร เพื่อให้ทราบแหล่งกำเนิดและวางแผนลดการปล่อยได้อย่างเหมาะสม",
          },
          {
            question:
              "ถ้ายังไม่เคยเก็บข้อมูลด้านคาร์บอนมาก่อน สามารถเริ่มได้หรือไม่",
            answer:
              "สามารถเริ่มได้ ทีมงานจะช่วยแนะนำรายการข้อมูลที่จำเป็น วิธีรวบรวมข้อมูล และช่วยจัดระบบให้เข้าใจง่ายตั้งแต่ต้น",
          },
          {
            question: "ใช้เวลาทำนานแค่ไหน",
            answer:
              "ระยะเวลาขึ้นอยู่กับขนาดองค์กรและความพร้อมของข้อมูล โดยทั่วไปใช้เวลาประมาณ 4–12 สัปดาห์",
          },
        ]}
      />
    </main>
  );
}
