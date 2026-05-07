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
        bottom-[40px]
        z-[999]
        w-[calc(100%-80px)]
        max-w-[1400px]

        backdrop-blur-xl
        bg-white/20
        border border-white/30
        shadow-[0_8px_40px_rgba(0,0,0,0.18)]

        px-[40px]
        py-[32px]
      "
      style={{
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "30px",
        borderBottomLeftRadius: "0px",
      }}
    >
      <div className="flex items-end justify-between gap-10">
        {/* LEFT */}
        <div className="max-w-[900px] flex flex-col gap-4">
          <h3 className="text-[28px] font-semibold text-[#036556]">
            Cookie Settings
          </h3>

          <p className="text-[18px] leading-[32px] text-[#20443B]">
            เว็บไซต์นี้ใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งาน
            วิเคราะห์การใช้งานเว็บไซต์
            และช่วยให้บริการของเรามีประสิทธิภาพมากยิ่งขึ้น
          </p>

          <Link
            href="/privacy-policy"
            className="
            w-fit
            text-[18px]
            text-[#036556]
            underline
            underline-offset-4
            hover:opacity-70
            transition
            "
          >
            อ่านรายละเอียดเพิ่มเติม
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex gap-4 shrink-0">
          <button
            onClick={acceptCookies}
            className="
              bg-[#036556]
              text-white
              px-8
              py-3
              text-[18px]
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
              px-8
              py-3
              text-[18px]
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
