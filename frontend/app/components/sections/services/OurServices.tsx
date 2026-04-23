export default function OurServices() {
  return (
    <section className="py-[100px] bg-white flex justify-center">
      <div className="max-w-[1200px] w-full px-6">
        <h2 className="text-[40px] font-semibold text-[#036556] text-center mb-12">
          โซลูชันของเรา
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* card */}
          <div className="p-6 border rounded-[20px] hover:shadow-lg transition">
            <h3 className="text-[22px] font-semibold mb-3">
              Carbon Footprint Assessment
            </h3>
            <p className="text-gray-600">
              ประเมินการปล่อยก๊าซเรือนกระจกขององค์กร
            </p>
          </div>

          <div className="p-6 border rounded-[20px] hover:shadow-lg transition">
            <h3 className="text-[22px] font-semibold mb-3">
              Net Zero Strategy
            </h3>
            <p className="text-gray-600">
              วางแผนกลยุทธ์สู่ Net Zero อย่างเป็นระบบ
            </p>
          </div>

          <div className="p-6 border rounded-[20px] hover:shadow-lg transition">
            <h3 className="text-[22px] font-semibold mb-3">
              Carbon Credit Consulting
            </h3>
            <p className="text-gray-600">
              ให้คำปรึกษาด้านคาร์บอนเครดิตและมาตรฐานสากล
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}