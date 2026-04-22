export default function OurTeam() {
  return (
    <section className="py-[100px] flex justify-center bg-[#F5F5F5]">
      <div className="max-w-[1200px] w-full px-6 text-center">
        <h2 className="text-[48px] font-semibold text-[#036556] mb-[40px]">
          ทีมงานของเรา
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-full h-[150px] bg-gray-200 mb-4 rounded-md" />
              <p className="text-[#036556] font-medium">ชื่อพนักงาน</p>
              <p className="text-[#6A6388] text-sm">ตำแหน่ง</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}