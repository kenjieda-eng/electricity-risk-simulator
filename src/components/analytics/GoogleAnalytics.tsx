"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { GA_MEASUREMENT_ID, initGa, isGaEnabled, pageview } from "../../lib/analytics/ga";

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

    initGa();
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
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  );
}
