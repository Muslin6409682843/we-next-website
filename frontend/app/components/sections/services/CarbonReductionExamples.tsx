export default function CarbonReductionExamples() {
  return (
    <section className="py-[100px] bg-[#F5F7F6] flex justify-center">
      <div className="max-w-[1200px] w-full px-6">
        <h2 className="text-[40px] font-semibold text-[#036556] text-center mb-12">
          แนวทางการลดการปล่อยก๊าซเรือนกระจก
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* card 1 */}
          <div className="p-6 bg-white rounded-[20px] shadow-sm">
            <h3 className="text-[22px] font-semibold mb-3">
              การเพิ่มประสิทธิภาพพลังงาน
            </h3>
            <p className="text-gray-600">
              ลดการใช้พลังงานในกระบวนการผลิตและอาคารสำนักงาน
            </p>
          </div>

          {/* card 2 */}
          <div className="p-6 bg-white rounded-[20px] shadow-sm">
            <h3 className="text-[22px] font-semibold mb-3">
              การใช้พลังงานหมุนเวียน
            </h3>
            <p className="text-gray-600">
              เปลี่ยนมาใช้พลังงานสะอาด เช่น Solar Energy
            </p>
          </div>

          {/* card 3 */}
          <div className="p-6 bg-white rounded-[20px] shadow-sm">
            <h3 className="text-[22px] font-semibold mb-3">
              การจัดการคาร์บอนเครดิต
            </h3>
            <p className="text-gray-600">
              บริหารจัดการและชดเชยการปล่อยคาร์บอนอย่างมีประสิทธิภาพ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}