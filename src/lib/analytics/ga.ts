export const GA_MEASUREMENT_ID = "G-VCCJXB8WGP";
export const SIMULATOR_GA_ID = process.env.NEXT_PUBLIC_GA_ID_SIMULATOR || "G-WGXXZN9G7Y";

// preview 専用 debug GA4 プロパティ。Vercel の【Preview スコープのみ】に設定する
// (例: G-7Y9ZCE6PQV)。production スコープには設定しない＝production ビルドでは
// undefined となり preview-debug 経路は無効化される(本番プロパティ非汚染)。
const GA_DEBUG_ID = process.env.NEXT_PUBLIC_GA_ID_DEBUG;

const PRODUCTION_HOSTNAME = "simulator.eic-jp.org";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type GaRuntimeConfig = {
  /** gtag('config', …) と page_view 送信先の測定 ID(順序保持)。 */
  measurementIds: string[];
  /** preview-debug のみ true。production では常に false(debug_mode 無し)。 */
  debugMode: boolean;
};

/**
 * 現在の実行環境に応じた GA 動作モードを 1 箇所で解決する。
 *
 *  (a) production    : hostname === "simulator.eic-jp.org" && https
 *                      && VERCEL_ENV ∈ {未設定, "production"}
 *      → [GA_MEASUREMENT_ID, SIMULATOR_GA_ID] / debug_mode なし(＝現行と完全同一挙動)
 *  (b) preview-debug : VERCEL_ENV === "preview" && https && NEXT_PUBLIC_GA_ID_DEBUG 有
 *      → [GA_DEBUG_ID] / debug_mode:true(本番プロパティへは一切送信しない)
 *  (c) それ以外(localhost 等) : null(無効)
 *
 * production と preview-debug は VERCEL_ENV により相互到達不能。production ビルドには
 * GA_DEBUG_ID が存在しないため、たとえ判定が漏れても (b) には決して入らない。
 */
export function getGaRuntimeConfig(): GaRuntimeConfig | null {
  if (typeof window === "undefined") {
    return null;
  }

  const { hostname, protocol } = window.location;
  if (protocol !== "https:") {
    return null;
  }

  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;

  // (a) production — 送信先 ID・順序・debug_mode 無しを現行のまま維持
  if (
    hostname === PRODUCTION_HOSTNAME &&
    (!vercelEnv || vercelEnv === "production")
  ) {
    return {
      measurementIds: [GA_MEASUREMENT_ID, SIMULATOR_GA_ID],
      debugMode: false,
    };
  }

  // (b) preview-debug — Vercel preview でのみ debug プロパティへ送信
  if (vercelEnv === "preview" && GA_DEBUG_ID) {
    return {
      measurementIds: [GA_DEBUG_ID],
      debugMode: true,
    };
  }

  // (c) localhost 等
  return null;
}

export function isGaEnabled() {
  return getGaRuntimeConfig() !== null;
}

export function ensureGtag() {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
  }
}

export function pageview(path: string) {
  if (!isGaEnabled()) {
    return;
  }

  ensureGtag();

  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (!isGaEnabled()) {
    return;
  }

  ensureGtag();
  window.gtag?.("event", eventName, params ?? {});
}
