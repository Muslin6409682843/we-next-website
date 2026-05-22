"use client";

import Script from "next/script";
import Cookies from "js-cookie";

export default function GoogleAnalytics() {
  const consent = Cookies.get("cookie-consent");

  if (!consent) return null;

  try {
    const parsed = JSON.parse(consent);

    if (!parsed.analytics) {
      return null;
    }
  } catch {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VRK8NMTC4S"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){dataLayer.push(arguments);}

          gtag('js', new Date());

          gtag('config', 'G-VRK8NMTC4S');
        `}
      </Script>
    </>
  );
}
