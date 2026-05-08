"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");

    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie-consent", "accepted", { expires: 365 });
    setShow(false);
  };

  const rejectCookies = () => {
    Cookies.set("cookie-consent", "rejected", { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
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
            Cookie Settings
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

          <Link
            href="/privacy-policy"
            className="
              w-fit

              text-[#036556]
              underline
              underline-offset-4

              hover:opacity-70
              transition

              text-[15px]
              sm:text-[16px]
              lg:text-[18px]
            "
          >
            อ่านรายละเอียดเพิ่มเติม
          </Link>
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
            onClick={acceptCookies}
            className="
              bg-[#036556]
              text-white

              w-full
              sm:w-auto

              px-6
              lg:px-8

              py-3

              text-[16px]
              lg:text-[18px]

              rounded-[14px]

              hover:opacity-90
              transition
            "
          >
            ยอมรับ
          </button>

          <button
            onClick={rejectCookies}
            className="
              border border-[#036556]
              text-[#036556]

              w-full
              sm:w-auto

              px-6
              lg:px-8

              py-3

              text-[16px]
              lg:text-[18px]

              rounded-[14px]

              hover:bg-[#036556]/10
              transition
            "
          >
            ปฏิเสธ
          </button>
        </div>
      </div>
    </div>
  );
}
