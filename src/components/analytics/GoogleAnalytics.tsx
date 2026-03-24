"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { GA_MEASUREMENT_ID, ensureGtag, isGaEnabled, pageview } from "../../lib/analytics/ga";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const enabled = useMemo(() => isGaEnabled(), []);
  const pathWithQuery = useMemo(() => {
    if (!pathname) {
      return "/";
    }

    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    ensureGtag();
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    pageview(pathWithQuery);
  }, [enabled, pathWithQuery]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
