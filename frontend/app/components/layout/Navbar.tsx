// /app/components/Navbar.tsx
"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: "หน้าแรก", path: "/" },
    { name: "เกี่ยวกับเรา", path: "/about" },
    { name: "บริการของเรา", path: "/services" },
    { name: "ศูนย์ข้อมูล", path: "/knowledge" },
    { name: "ติดต่อเรา", path: "/contact" },
  ];

  const [lang, setLang] = useState<"TH" | "EN">("TH");

  return (
    <nav
      className="
        w-full h-[138px]
        flex items-center
        px-[210px]
        fixed top-0 left-0 z-50
        bg-white
      "
    >
      {/* 🔹 LEFT: LOGO */}
      <div className="flex-1">
        <Link href="/">
          <img
            src="/logo.png"
            alt="WeNext Logo"
            className="h-[110px] object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* 🔹 CENTER: MENU (absolute center จริง) */}
      <div
        className="
    absolute left-1/2 -translate-x-1/2
    flex items-center gap-[48px]
    text-[24px] font-medium
  "
      >
        {menu.map((item) => {
          const isActive = pathname === item.path;

          return (
            <a
              key={item.path}
              href={item.path}
              className={`
          relative group transition-all duration-300
          ${isActive ? "text-[#73F68D]" : "text-[#036556]"}
        `}
            >
              {item.name}

              {/* underline */}
              <span
                className={`
            absolute left-0 -bottom-2 h-[2px]
            bg-[#73F68D]
            transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
              />
            </a>
          );
        })}
      </div>

      {/* 🔹 RIGHT: LANGUAGE */}
      <div className="flex-1 flex justify-end items-center gap-2 text-[22px] font-medium">
        <Globe className="w-[28px] h-[28px] text-[#036556] -mt-[2px]" />

        {/* TH */}
        <span
          onClick={() => setLang("TH")}
          className={`
      cursor-pointer transition-all duration-300
      ${lang === "TH" ? "text-[#73F68D]" : "text-[#036556] hover:opacity-70"}
    `}
        >
          TH
        </span>

        {/* ซ่อน EN ชั่วคราว */}
        {/*
  <span className="text-[#036556]">/</span>

  <span
    onClick={() => setLang("EN")}
    className={`
      cursor-pointer transition-all duration-300
      ${lang === "EN" ? "text-[#73F68D]" : "text-[#036556] hover:opacity-70"}
    `}
  >
    EN
  </span>
  */}
      </div>
    </nav>
  );
}
