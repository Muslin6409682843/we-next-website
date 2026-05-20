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
      {/* =========================
          BANNER
      ========================== */}
      <div
        className="
          fixed
          left-1/2
          -translate-x-1/2

          bottom-2
          sm:bottom-4
          lg:bottom-6

          z-[999]

          w-[calc(100%-12px)]
          sm:w-[calc(100%-24px)]
          lg:w-[calc(100%-56px)]

          max-w-[1380px]

          backdrop-blur-xl
          bg-white/20
          border border-white/30
          shadow-[0_8px_40px_rgba(0,0,0,0.18)]

          px-3
          py-3

          sm:px-5
          sm:py-5

          lg:px-8
          lg:py-7
        "
        style={{
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "24px",
          borderBottomLeftRadius: "0px",
        }}
      >
        <div
          className="
            flex flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between

            gap-4
            lg:gap-8
          "
        >
          {/* LEFT */}
          <div className="flex flex-col gap-2 lg:max-w-[880px]">
            <h3
              className="
                font-semibold
                text-[#036556]

                text-[17px]
                leading-tight

                sm:text-[22px]

                lg:text-[28px]
              "
            >
              การใช้งานคุกกี้
            </h3>

            <p
              className="
                text-[#20443B]

                text-[12px]
                leading-[21px]

                sm:text-[14px]
                sm:leading-[26px]

                lg:text-[17px]
                lg:leading-[30px]
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

              gap-2.5

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

                px-4
                sm:px-6

                py-3

                rounded-[14px]

                text-[13px]
                sm:text-[15px]

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

                px-4
                sm:px-6

                py-3

                rounded-[14px]

                text-[13px]
                sm:text-[15px]

                font-medium
              "
            >
              ยอมรับทั้งหมด
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          MODAL
      ========================== */}
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
              top-[48%]

              -translate-x-1/2
              -translate-y-1/2

              w-[86%]
              xs:w-[82%]
              sm:w-[78%]

              max-w-[620px]

              bg-white

              shadow-2xl

              px-3
              py-3

              sm:px-5
              sm:py-5
            "
            style={{
              borderTopLeftRadius: "22px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "22px",
              borderBottomLeftRadius: "0px",
            }}
          >
            <div className="flex flex-col gap-3">
              {/* HEADER */}
              <div className="flex flex-col gap-2">
                <h2
                  className="
                    text-[#036556]
                    font-semibold

                    text-[16px]
                    sm:text-[22px]
                  "
                >
                  การตั้งค่าคุกกี้
                </h2>

                <p
                  className="
                    text-[#20443B]

                    text-[10px]
                    leading-[17px]

                    sm:text-[13px]
                    sm:leading-[23px]
                  "
                >
                  เว็บไซต์ของเราใช้คุกกี้และเทคโนโลยีที่เกี่ยวข้องเพื่อยกระดับประสบการณ์การใช้งาน
                  วิเคราะห์พฤติกรรมการใช้งาน และพัฒนาคุณภาพการให้บริการ
                  ทั้งนี้ท่านสามารถเลือกอนุญาตการใช้งานคุกกี้ในแต่ละประเภทได้ตามความต้องการ
                  โดยคุกกี้ที่มีความจำเป็นต่อการทำงานของเว็บไซต์จะถูกเปิดใช้งานอยู่เสมอ
                </p>
              </div>

              {/* COOKIE LIST */}
              <div className="flex flex-col gap-2">
                {/* NECESSARY */}
                <div
                  className="
                    flex items-center justify-between gap-2

                    border border-[#036556]/10
                    bg-[#F8FBFA]

                    rounded-[14px]

                    px-2.5
                    py-2.5

                    sm:px-4
                    sm:py-4
                  "
                >
                  <div className="flex flex-col gap-0.5">
                    <h3
                      className="
                        font-semibold
                        text-[#036556]

                        text-[11px]
                        leading-tight

                        sm:text-[16px]
                      "
                    >
                      คุกกี้ที่จำเป็น
                    </h3>

                    <p
                      className="
                        text-[#20443B]/80

                        text-[9px]
                        leading-[14px]

                        sm:text-[12px]
                        sm:leading-[20px]
                      "
                    >
                      จำเป็นต่อการทำงานพื้นฐานและความปลอดภัยของเว็บไซต์
                    </p>
                  </div>

                  <div
                    className="
                      relative

                      w-[42px]
                      h-[24px]

                      sm:w-[56px]
                      sm:h-[30px]

                      rounded-full
                      bg-[#036556]

                      shrink-0
                    "
                  >
                    <div
                      className="
                        absolute
                        top-1
                        right-1

                        w-[16px]
                        h-[16px]

                        sm:w-[22px]
                        sm:h-[22px]

                        rounded-full
                        bg-white
                      "
                    />
                  </div>
                </div>

                {/* ANALYTICS */}
                <div
                  className="
                    flex items-center justify-between gap-2

                    border border-[#036556]/10
                    bg-[#F8FBFA]

                    rounded-[14px]

                    px-2.5
                    py-2.5

                    sm:px-4
                    sm:py-4
                  "
                >
                  <div className="flex flex-col gap-0.5">
                    <h3
                      className="
                        font-semibold
                        text-[#036556]

                        text-[11px]
                        leading-tight

                        sm:text-[16px]
                      "
                    >
                      คุกกี้เพื่อการวิเคราะห์
                    </h3>

                    <p
                      className="
                        text-[#20443B]/80

                        text-[9px]
                        leading-[14px]

                        sm:text-[12px]
                        sm:leading-[20px]
                      "
                    >
                      เพื่อวิเคราะห์และปรับปรุงประสบการณ์การใช้งานเว็บไซต์
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

                      w-[42px]
                      h-[24px]

                      sm:w-[56px]
                      sm:h-[30px]

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

                        w-[16px]
                        h-[16px]

                        sm:w-[22px]
                        sm:h-[22px]

                        rounded-full
                        bg-white

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
                    flex items-center justify-between gap-2

                    border border-[#036556]/10
                    bg-[#F8FBFA]

                    rounded-[14px]

                    px-2.5
                    py-2.5

                    sm:px-4
                    sm:py-4
                  "
                >
                  <div className="flex flex-col gap-0.5">
                    <h3
                      className="
                        font-semibold
                        text-[#036556]

                        text-[11px]
                        leading-tight

                        sm:text-[16px]
                      "
                    >
                      คุกกี้เพื่อการตลาด
                    </h3>

                    <p
                      className="
                        text-[#20443B]/80

                        text-[9px]
                        leading-[14px]

                        sm:text-[12px]
                        sm:leading-[20px]
                      "
                    >
                      เพื่อแสดงเนื้อหา โฆษณา และการตลาดที่เหมาะสมกับผู้ใช้งาน
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

                      w-[42px]
                      h-[24px]

                      sm:w-[56px]
                      sm:h-[30px]

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

                        w-[16px]
                        h-[16px]

                        sm:w-[22px]
                        sm:h-[22px]

                        rounded-full
                        bg-white

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
                  flex flex-col-reverse
                  sm:flex-row

                  gap-2

                  sm:justify-end

                  pt-1
                "
              >
                <button
                  onClick={saveCustomPreferences}
                  className="
                    border border-[#036556]
                    text-[#036556]

                    w-full
                    sm:w-auto

                    px-4
                    py-2.5

                    rounded-[12px]

                    text-[11px]
                    sm:text-[14px]

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

                    w-full
                    sm:w-auto

                    px-4
                    py-2.5

                    rounded-[12px]

                    text-[11px]
                    sm:text-[14px]

                    font-medium
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
