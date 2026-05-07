// /app/layout.tsx
import "./globals.css";
import { Noto_Sans_Thai } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CookieBanner from "./components/CookieBanner";

const noto = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="th">
       <body className={noto.className}>
        <Navbar />

        <main className="flex-1 pt-[138px]">
  {children}
</main>

        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}