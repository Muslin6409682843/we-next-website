import ServiceCardOurServices from "../../cards/ServiceCardOurServices";

export default function OurServices() {
  return (
    <section className="relative overflow-x-hidden -mt-[30px]">
      <div className="w-full py-[120px] flex flex-col items-center text-center">
  
  {/* small label */}
  <p className="text-[#F04F23] text-[16px] tracking-[0.2em] mb-4">
    OUR SERVICES
  </p>

  {/* main title */}
  <h2 className="text-[#126656] font-semibold text-[48px] leading-[70px]">
    บริการทั้งหมดของเรา
  </h2>

  {/* subtle divider */}
  <div className="w-[60px] h-[2px] bg-[#126656]/20 mt-6" />
</div>

      {/* 🔥 Container */}
      <div className="w-full max-w-[1800px] mx-auto px-[20px]">
        

        {/* CFO */}
        <div className="flex justify-start">
          <ServiceCardOurServices
            href="/services/cfo"
            icon="building"
            title="คาร์บอนฟุตพริ้นท์องค์กร (CFO)"
            description="หลายองค์กรอยากรู้ว่าตัวเองปล่อย CO₂ ออกมาเท่าไร แต่ไม่รู้จะเริ่มจากตรงไหน เราช่วยจัดทำ Carbon Footprint ขององค์กรท่านตั้งแต่ต้นจนจบ ทั้งการเก็บข้อมูล วิเคราะห์ และจัดทำรายงานตามมาตรฐานที่ อบก. รับรอง"
            suitableFor={`องค์กรที่ต้องการทราบปริมาณการปล่อยก๊าซเรือนกระจกของตัวเอง และต้องการนำข้อมูลนี้ไปใช้ในการวางแผน รายงาน 
หรือเพื่อให้สอดคล้องกับข้อกำหนดของคู่ค้าและนักลงทุน`}
            outcome={`รายงาน CFO ฉบับสมบูรณ์
พร้อมคำแนะนำในการลดการปล่อยก๊าซเรือนกระจกที่ทำได้จริงในองค์กรของท่าน`}
          />
        </div>

        <div className="h-[50px]" />

        {/* CFP */}
        <div className="flex justify-start">
          <ServiceCardOurServices
            href="/services/cfp"
            icon="milk"
            title="คาร์บอนฟุตพริ้นท์ผลิตภัณฑ์ (CFP)"
            description="หากองค์กรของท่านมีผลิตภัณฑ์ที่ต้องการแสดงฉลากคาร์บอน หรือต้องการยืนยันกับลูกค้าและคู่ค้าว่าผลิตภัณฑ์ของท่านใส่ใจสิ่งแวดล้อม เราช่วยจัดทำคาร์บอนฟุตพริ้นท์ระดับผลิตภัณฑ์ตามมาตรฐานสากล"
            suitableFor={`ผู้ผลิตสินค้าที่ต้องการแสดงค่าคาร์บอนบนผลิตภัณฑ์ หรืออุตสาหกรรมที่มีข้อกำหนดด้านสิ่งแวดล้อม จากคู่ค้าต่างประเทศ เช่น สิ่งทอ เครื่องประดับ อาหาร และอิเล็กทรอนิกส์`}
            outcome={`รายงาน CFP ระดับผลิตภัณฑ์ที่สามารถนำไปใช้สื่อสารกับลูกค้า 
              หรือยื่นขอฉลากคาร์บอนกับหน่วยงานที่เกี่ยวข้องได้ทันที`}
          />
        </div>

        <div className="h-[50px]" />

        {/* T-VER Forestry */}
        <div className="flex justify-end">
          <ServiceCardOurServices
            href="/services/tver-forestry"
            icon="tree"
            title="Carbon Credit ประเภท T-VER ป่าไม้"
            description="หากองค์กรหรือบุคคลของท่านมีพื้นที่สีเขียว 
            ไม่ว่าจะเป็นป่าชุมชน 
            ป่าปลูกใหม่ หรือพื้นที่เกษตรกรรม สิ่งเหล่านี้สามารถแปลงเป็น Carbon Credit ได้ เราช่วยดูแลตั้งแต่การตรวจสอบความเป็นไปได้ จัดเตรียมเอกสาร ไปจนถึงการขึ้นทะเบียนกับ อบก."
            suitableFor={`เจ้าของที่ดินหรือองค์กรที่มีพื้นที่ป่าหรือต้องการฟื้นฟูพื้นที่สีเขียว 
              และต้องการสร้างรายได้จากคาร์บอนเครดิตในระยะยาว`}
            outcome={`ไฟล์เอกสารครบถ้วนพร้อมยื่น อบก.
พร้อมคำแนะนำขั้นตอนหลังขึ้นทะเบียนเพื่อให้โครงการดำเนินต่อเนื่องได้`}
          />
        </div>

        <div className="h-[50px]" />

        {/* T-VER Energy */}
        <div className="flex justify-end">
          <ServiceCardOurServices
            href="/services/tver-energy-transport"
            icon="energy"
            title="Carbon Credit ประเภท T-VER พลังงานและขนส่ง"
            description="โครงการพลังงานสะอาดและการขนส่งที่มีประสิทธิภาพ เช่น Solar Cell, การเปลี่ยนรถ EV, หรือระบบประหยัดพลังงานในอาคาร ล้วนมีสิทธิ์นำมาคำนวณเป็น Carbon Credit ได้ เราช่วยวิเคราะห์ว่าโครงการของท่านเข้าเงื่อนไขหรือไม่ และดำเนินการขึ้นทะเบียนให้ครบถ้วน"
            suitableFor={`ธุรกิจที่มีโครงการพลังงานทดแทนหรือลดการใช้พลังงาน และต้องการนำมูลค่าส่วนนั้นมาใช้ประโยชน์เพิ่มเติมในรูปแบบคาร์บอนเครดิต`}
            outcome={`รายงานการตรวจสอบความเป็นไปได้ เอกสารประกอบการขึ้นทะเบียน T-VER 
              และการสนับสนุนตลอดกระบวนการ`}
          />
        </div>

        <div className="h-[50px]" />

        {/* Training */}
        <div className="flex justify-start">
          <ServiceCardOurServices
            href="/services/training"
            icon="presentation"
            title="อบรมและสัมมนาภายในองค์กร"
            description="การลดโลกร้อนเริ่มต้นที่ความเข้าใจ เราออกแบบหลักสูตรอบรมให้ตรงกับบริบทขององค์กรท่าน ไม่ว่าจะเป็นการปูพื้นฐานให้ทีมงาน การสร้างความตระหนักรู้ หรือการฝึกทักษะเฉพาะเรื่อง CFO/CFP ทุกหลักสูตรถ่ายทอดในภาษาที่เข้าใจง่าย ไม่ต้องมีพื้นฐานมาก่อน"
            suitableFor={`องค์กรที่ต้องการสร้าง Green Awareness ให้กับพนักงาน ฝ่าย CSR ที่ต้องการยกระดับความรู้ หรือทีมงานที่จะรับผิดชอบด้านคาร์บอนขององค์กร`}
            outcome={`
              1. อบรมในองค์กร (In-house) — จัดที่สถานที่ของท่าน หรือที่สำนักงานเราย่านสีลม
2. อบรมออนไลน์ — ทั้งแบบ Live และ On-demand
3. หลักสูตรพิเศษสำหรับผู้บริหาร — เน้นภาพรวมกลยุทธ์และนโยบาย`}
            outcomeLabel="รูปแบบการอบรม "
            outcomeIcon="book"
          />
        </div>
      </div>
    </section>
  );
}
