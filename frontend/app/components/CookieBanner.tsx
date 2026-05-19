"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");

    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(consent);

        setPreferences(parsed);
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const savePreferences = (newPreferences: CookiePreferences) => {
    Cookies.set("cookie-consent", JSON.stringify(newPreferences), {
      expires: 365,
    });

    setPreferences(newPreferences);

    setShowBanner(false);

    setOpenModal(false);

    /*
      OPTIONAL:

      if (newPreferences.analytics) {
        load analytics
      }

      if (newPreferences.marketing) {
        load marketing scripts
      }
    */
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* BANNER */}
      <div
        className="
          fixed
          left-1/2
          -translate-x-1/2
          bottom-4
          sm:bottom-6
          lg:bottom-10

          z-[999]

          w-[calc(100%-24px)]
          sm:w-[calc(100%-40px)]
          lg:w-[calc(100%-80px)]

          max-w-[1400px]

          backdrop-blur-xl
          bg-white/20
          border border-white/30
          shadow-[0_8px_40px_rgba(0,0,0,0.18)]

          px-5 py-5
          sm:px-7 sm:py-6
          lg:px-[40px] lg:py-[32px]
        "
        style={{
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "0px",
        }}
      >
        <div
          className="
            flex flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between

            gap-6
            lg:gap-10
          "
        >
          {/* LEFT */}
          <div
            className="
              w-full
              lg:max-w-[900px]

              flex flex-col gap-3
              lg:gap-4
            "
          >
            <h3
              className="
                font-semibold text-[#036556]

                text-[22px]
                sm:text-[24px]
                lg:text-[28px]
              "
            >
              การใช้งานคุกกี้
            </h3>

            <p
              className="
                text-[#20443B]

                text-[15px]
                leading-[28px]

                sm:text-[16px]

                lg:text-[18px]
                lg:leading-[32px]
              "
            >
              เว็บไซต์นี้ใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งาน
              วิเคราะห์การใช้งานเว็บไซต์
              และช่วยให้บริการของเรามีประสิทธิภาพมากยิ่งขึ้น
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex flex-col
              sm:flex-row

              gap-3
              sm:gap-4

              w-full
              lg:w-auto

              shrink-0
            "
          >
            <button
              onClick={() => setOpenModal(true)}
              className="
                border border-[#036556]
                text-[#036556]

                w-full
                sm:w-auto

                px-7
                py-4

                rounded-[16px]

                text-[17px]
                font-medium

                hover:bg-[#036556]/10

                transition
              "
            >
              จัดการคุกกี้
            </button>

            <button
              onClick={acceptAll}
              className="
                bg-[#036556]
                text-white

                w-full
                sm:w-auto

                px-7
                py-4

                rounded-[16px]

                text-[17px]
                font-medium

                hover:opacity-90

                transition
              "
            >
              ยอมรับทั้งหมด
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-[1000]">
          {/* BACKDROP */}
          <div
            className="
              absolute inset-0
              bg-black/40
              backdrop-blur-sm
            "
            onClick={() => setOpenModal(false)}
          />

          {/* MODAL BOX */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2

              w-[95%]
              max-w-[760px]

              bg-white

              p-6
              sm:p-8
              lg:p-10

              shadow-2xl
            "
            style={{
              borderTopLeftRadius: "32px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "32px",
              borderBottomLeftRadius: "0px",
            }}
          >
            <div className="flex flex-col gap-8">
              {/* HEADER */}
              <div className="flex flex-col gap-4">
                <h2
                  className="
                    text-[#036556]
                    font-semibold

                    text-[28px]
                    sm:text-[34px]
                  "
                >
                  การตั้งค่าคุกกี้
                </h2>

                <p
                  className="
                    text-[#20443B]

                    text-[15px]
                    leading-[30px]

                    sm:text-[16px]
                    sm:leading-[32px]
                  "
                >
                  เว็บไซต์ของเราใช้คุกกี้และเทคโนโลยีที่เกี่ยวข้องเพื่อยกระดับประสบการณ์การใช้งานของผู้เข้าชม
                  ช่วยให้เว็บไซต์สามารถทำงานได้อย่างถูกต้อง
                  วิเคราะห์พฤติกรรมการใช้งาน
                  รวมถึงพัฒนาคุณภาพการให้บริการให้มีประสิทธิภาพมากยิ่งขึ้น
                  ทั้งนี้
                  ท่านสามารถเลือกอนุญาตการใช้งานคุกกี้ในแต่ละประเภทได้ตามความต้องการ
                  โดยคุกกี้ที่มีความจำเป็นต่อการทำงานของเว็บไซต์จะถูกเปิดใช้งานอยู่เสมอ
                </p>
              </div>

              {/* COOKIE LIST */}
              <div className="flex flex-col gap-5">
                {/* NECESSARY */}
                <div
                  className="
                    flex items-start justify-between gap-5

                    border border-[#036556]/10
                    bg-[#F8FBFA]

                    rounded-[22px]

                    p-6
                  "
                >
                  <div className="flex flex-col gap-3">
                    <h3
                      className="
                        font-semibold
                        text-[#036556]

                        text-[22px]
                        sm:text-[24px]
                      "
                    >
                      คุกกี้ที่จำเป็น
                    </h3>

                    <p
                      className="
                        text-[15px]
                        leading-[28px]
                        text-[#20443B]/80
                      "
                    >
                      คุกกี้ประเภทนี้มีความจำเป็นต่อการทำงานของเว็บไซต์
                      เพื่อให้ระบบสามารถทำงานได้อย่างถูกต้อง
                      รองรับความปลอดภัยของข้อมูล
                      และช่วยให้ผู้ใช้งานสามารถเข้าถึงฟังก์ชันพื้นฐานของเว็บไซต์ได้อย่างสมบูรณ์
                    </p>
                  </div>

                  <div
                    className="
                      relative
                      w-[72px]
                      h-[40px]

                      rounded-full

                      bg-[#036556]

                      shadow-inner

                      cursor-not-allowed

                      shrink-0
                    "
                  >
                    <div
                      className="
                        absolute
                        top-1
                        right-1

                        w-[32px]
                        h-[32px]

                        rounded-full
                        bg-white

                        shadow-md
                      "
                    />
                  </div>
                </div>

                {/* ANALYTICS */}
                <div
                  className="
                    flex items-start justify-between gap-5

                    border border-[#036556]/10
                    bg-[#F8FBFA]

                    rounded-[22px]

                    p-6
                  "
                >
                  <div className="flex flex-col gap-3">
                    <h3
                      className="
                        font-semibold
                        text-[#036556]

                        text-[22px]
                        sm:text-[24px]
                      "
                    >
                      คุกกี้เพื่อการวิเคราะห์
                    </h3>

                    <p
                      className="
                        text-[15px]
                        leading-[28px]
                        text-[#20443B]/80
                      "
                    >
                      คุกกี้ประเภทนี้ช่วยให้เราสามารถวิเคราะห์พฤติกรรมการใช้งานเว็บไซต์
                      เพื่อนำข้อมูลมาปรับปรุงประสิทธิภาพการทำงาน เนื้อหา
                      และประสบการณ์การใช้งานให้ดียิ่งขึ้น
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setPreferences({
                        ...preferences,
                        analytics: !preferences.analytics,
                      })
                    }
                    className={`
                      relative
                      w-[72px]
                      h-[40px]

                      rounded-full

                      transition-all
                      duration-300

                      shrink-0

                      ${preferences.analytics ? "bg-[#036556]" : "bg-gray-300"}
                    `}
                  >
                    <div
                      className={`
                        absolute
                        top-1

                        w-[32px]
                        h-[32px]

                        rounded-full
                        bg-white

                        shadow-lg

                        transition-all
                        duration-300

                        ${preferences.analytics ? "right-1" : "left-1"}
                      `}
                    />
                  </button>
                </div>

                {/* MARKETING */}
                <div
                  className="
                    flex items-start justify-between gap-5

                    border border-[#036556]/10
                    bg-[#F8FBFA]

                    rounded-[22px]

                    p-6
                  "
                >
                  <div className="flex flex-col gap-3">
                    <h3
                      className="
                        font-semibold
                        text-[#036556]

                        text-[22px]
                        sm:text-[24px]
                      "
                    >
                      คุกกี้เพื่อการตลาด
                    </h3>

                    <p
                      className="
                        text-[15px]
                        leading-[28px]
                        text-[#20443B]/80
                      "
                    >
                      คุกกี้ประเภทนี้ใช้เพื่อสนับสนุนกิจกรรมทางการตลาด
                      การนำเสนอเนื้อหา โปรโมชั่น
                      และโฆษณาที่สอดคล้องกับความสนใจของผู้ใช้งาน
                      เพื่อมอบประสบการณ์ที่เหมาะสมมากยิ่งขึ้น
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setPreferences({
                        ...preferences,
                        marketing: !preferences.marketing,
                      })
                    }
                    className={`
                      relative
                      w-[72px]
                      h-[40px]

                      rounded-full

                      transition-all
                      duration-300

                      shrink-0

                      ${preferences.marketing ? "bg-[#036556]" : "bg-gray-300"}
                    `}
                  >
                    <div
                      className={`
                        absolute
                        top-1

                        w-[32px]
                        h-[32px]

                        rounded-full
                        bg-white

                        shadow-lg

                        transition-all
                        duration-300

                        ${preferences.marketing ? "right-1" : "left-1"}
                      `}
                    />
                  </button>
                </div>
              </div>

              {/* BUTTONS */}
              <div
                className="
                  flex flex-col
                  sm:flex-row

                  gap-4
                  sm:justify-end
                "
              >
                <button
                  onClick={saveCustomPreferences}
                  className="
                    border border-[#036556]
                    text-[#036556]

                    px-8
                    py-4

                    rounded-[18px]

                    text-[17px]
                    font-medium

                    hover:bg-[#036556]/10

                    transition
                  "
                >
                  บันทึกการตั้งค่า
                </button>

                <button
                  onClick={acceptAll}
                  className="
                    bg-[#036556]
                    text-white

                    px-8
                    py-4

                    rounded-[18px]

                    text-[17px]
                    font-medium

                    hover:opacity-90

                    transition
                  "
                >
                  ยอมรับทั้งหมด
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
