export const GA_MEASUREMENT_ID = "G-VCCJXB8WGP";
export const SIMULATOR_GA_ID = process.env.NEXT_PUBLIC_GA_ID_SIMULATOR || "G-WGXXZN9G7Y";

const PRODUCTION_HOSTNAME = "simulator.eic-jp.org";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function isAllowedVercelEnv() {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
  return !vercelEnv || vercelEnv === "production";
}

export function isGaEnabled() {
  if (typeof window === "undefined") {
    return false;
  }

  const { hostname, protocol } = window.location;
  const isProductionHost = hostname === PRODUCTION_HOSTNAME;
  const isHttps = protocol === "https:";

  return isProductionHost && isHttps && isAllowedVercelEnv();
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

let gaInitialized = false;

export function initGa() {
  if (typeof window === "undefined" || gaInitialized) {
    return;
  }

  ensureGtag();

  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_MEASUREMENT_ID, { send_page_view: false });
  window.gtag?.("config", SIMULATOR_GA_ID, { send_page_view: false });

  gaInitialized = true;
}

export function pageview(path: string) {
  if (!isGaEnabled()) {
    return;
  }

  initGa();

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
