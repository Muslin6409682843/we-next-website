// /app/components/Navbar.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const menu = [
    { name: "หน้าแรก", path: "/" },
    { name: "เกี่ยวกับเรา", path: "/about" },
    { name: "บริการของเรา", path: "/services" },
    { name: "ศูนย์ข้อมูล", path: "/knowledge" },
    { name: "ติดต่อเรา", path: "/contact" },
  ];

  const [lang, setLang] = useState<"TH" | "EN">("TH");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50
        w-full

        transition-all duration-300

        ${
          isHome
            ? scrolled
              ? "bg-[#036556]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.18)]"
              : "bg-gradient-to-b from-black/60 via-black/25 to-transparent"
            : "bg-[#036556]"
        }
      `}
    >
      {/* MAIN NAVBAR */}
      <div
        className="
          relative
          mx-auto
          flex items-center justify-between
          
          h-[88px]
          px-5

          sm:h-[96px]
          sm:px-6

          md:h-[105px]
          md:px-10

          lg:h-[120px]
          lg:px-16

          xl:h-[138px]
          xl:px-[120px]

          2xl:px-[210px]
        "
      >
        {/* 🔹 LOGO */}
        <div className="flex items-center z-20">
          <Link href="/">
            <img
              src="/logo-white.png"
              alt="WeNext Logo"
              className="
                object-contain cursor-pointer
                
                h-[56px]

                sm:h-[64px]

                md:h-[76px]

                lg:h-[88px]

                xl:h-[100px]

                2xl:h-[110px]
              "
            />
          </Link>
        </div>

        {/* 🔹 DESKTOP MENU */}
        <div
          className="
            hidden lg:flex

            absolute left-1/2 -translate-x-1/2

            items-center

            gap-6
            xl:gap-10
            2xl:gap-[48px]

            font-medium

            text-[16px]
            xl:text-[20px]
            2xl:text-[24px]
          "
        >
          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative group transition-all duration-300 whitespace-nowrap
                  ${isActive ? "text-[#73F68D]" : "text-white"}
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
              </Link>
            );
          })}
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="flex items-center gap-4 z-20">
          {/* LANGUAGE */}
          <div
            className="
              hidden sm:flex
              items-baseline
              gap-[6px]

              font-medium

              text-[16px]

              md:text-[18px]

              xl:text-[22px]
            "
          >
            <Globe
              className="
                text-[#FFFFFF]
                shrink-0
                relative top-[1px]

                w-[16px] h-[16px]

                md:w-[18px] md:h-[18px]

                xl:w-[22px] xl:h-[22px]
              "
              strokeWidth={2}
            />

            {/* TH */}
            <span
              onClick={() => setLang("TH")}
              className={`
                cursor-pointer
                transition-all duration-300

                ${
                  lang === "TH"
                    ? "text-[#73F68D]"
                    : "text-[#FFFFFF] hover:opacity-70"
                }
              `}
            >
              TH
            </span>
          </div>

          {/* 🔹 MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              lg:hidden
              text-[#73F68D]
            "
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* 🔹 MOBILE MENU */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out

          ${
            isHome
              ? scrolled
                ? "bg-[#036556]/95 backdrop-blur-md"
                : "bg-[#036556]/90 backdrop-blur-md"
              : "bg-[#036556]"
          }

          ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col px-6 py-5">
          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  py-4
                  border-b border-[#EFEFEF]
                  text-[18px]
                  font-medium
                  transition-all duration-300

                  ${isActive ? "text-[#73F68D]" : "text-[#FFFFFF]"}
                `}
              >
                {item.name}
              </Link>
            );
          })}

          {/* MOBILE LANGUAGE */}
          <div className="flex items-center gap-2 pt-5">
            <Globe className="w-5 h-5 text-[#FFFFFF]" />

            <span
              onClick={() => setLang("TH")}
              className={`
                cursor-pointer font-medium transition-all duration-300
                ${lang === "TH" ? "text-[#73F68D]" : "text-[#FFFFFF]"}
              `}
            >
              TH
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}