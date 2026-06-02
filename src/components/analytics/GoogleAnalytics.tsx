"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { ensureGtag, getGaRuntimeConfig, pageview, type GaRuntimeConfig } from "../../lib/analytics/ga";

// インライン init Script の本文を生成する。
// PR#186 はこの init を削除して GA 全停止したため【削除しない・維持】する。
// production と preview-debug の差分は「測定 ID」と「debug_mode」のみ。
function buildInitScript({ measurementIds, debugMode }: GaRuntimeConfig) {
  const options = debugMode
    ? "{ send_page_view: false, debug_mode: true }"
    : "{ send_page_view: false }";
  const configLines = measurementIds
    .map((id) => `          gtag('config', '${id}', ${options});`)
    .join("\n");

  return `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
${configLines}
        `;
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 動作モード(送信先 ID / debug_mode)を 1 度だけ解決。null＝GA 無効。
  const gaConfig = useMemo(() => getGaRuntimeConfig(), []);
  const enabled = gaConfig !== null;

  const pathWithQuery = useMemo(() => {
    if (!pathname) {
      return "/";
    }

    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  // 着地(初回)の page_view は gtag.js の onLoad が送信する。
  // useEffect は SPA 遷移(pathname / クエリ変更)時のみ送信し、
  // 初回 pathname での発火を抑止して onLoad との二重送信を防ぐ。
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (lastTrackedPath.current === null) {
      // 初回マウント: 着地 page_view は gtag.js の onLoad が担当。ここでは記録のみ。
      lastTrackedPath.current = pathWithQuery;
      return;
    }

    if (lastTrackedPath.current === pathWithQuery) {
      // 同一パスの再評価では二重送信しない。
      return;
    }

    lastTrackedPath.current = pathWithQuery;
    pageview(pathWithQuery);
  }, [enabled, pathWithQuery]);

  if (!enabled || !gaConfig) {
    return null;
  }

  const primaryId = gaConfig.measurementIds[0];

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
        onLoad={() => {
          // gtag.js ロード完了 = window.gtag 確定 & config 処理済み。
          // 着地パスをこのタイミングで確実に 1 回だけ送信(取りこぼしゼロ)。
          ensureGtag();
          pageview(pathWithQuery);
        }}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {buildInitScript(gaConfig)}
      </Script>
    </>
  );
}
