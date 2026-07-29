import { beforeEach, afterEach, describe, expect, it } from "vitest";
import { currentPageCtaFrom, resolveCtaFrom, trackEvent } from "../ga";

/**
 * `cta_from`（CTA流入元パラメータ）の解決ロジックと、GA4 へ実際に渡る
 * パラメータの検証。値の体系は `/contact?from=<value>` のクエリ値と統一する。
 */

type FakeWindow = {
  location: { pathname: string; hostname: string; protocol: string; origin: string };
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
};

const PRODUCTION_HOSTNAME = "simulator.eic-jp.org";

function setWindow(pathname: string, hostname = PRODUCTION_HOSTNAME) {
  const fake: FakeWindow = {
    location: {
      pathname,
      hostname,
      protocol: "https:",
      origin: `https://${hostname}`,
    },
    dataLayer: [],
  };
  (globalThis as unknown as { window: FakeWindow }).window = fake;
  return fake;
}

function clearWindow() {
  delete (globalThis as unknown as { window?: FakeWindow }).window;
}

afterEach(() => {
  clearWindow();
});

describe("currentPageCtaFrom", () => {
  it("トップページは 'home' を返す", () => {
    setWindow("/");
    expect(currentPageCtaFrom()).toBe("home");
  });

  it("記事ページはスラッグを返す", () => {
    setWindow("/v2h-ocpp-guide");
    expect(currentPageCtaFrom()).toBe("v2h-ocpp-guide");
  });

  it("末尾スラッシュを除去する", () => {
    setWindow("/special/emergency-scenario-analysis/");
    expect(currentPageCtaFrom()).toBe("special/emergency-scenario-analysis");
  });

  it("window が無い（SSR）場合は null を返す", () => {
    clearWindow();
    expect(currentPageCtaFrom()).toBeNull();
  });
});

describe("resolveCtaFrom", () => {
  beforeEach(() => {
    setWindow("/v2h-ocpp-guide");
  });

  it("from= を持つ /contact リンクはその値を返す", () => {
    expect(resolveCtaFrom("/contact?from=sticky")).toBe("sticky");
    expect(resolveCtaFrom("/contact?from=compare")).toBe("compare");
  });

  it("from= 以外のクエリが続いても from の値だけを取る", () => {
    expect(
      resolveCtaFrom("/contact?from=industry-calculator&region=tokyo&contract_type=high")
    ).toBe("industry-calculator");
  });

  it("from= を持たない /contact リンクは設置ページのスラッグを返す", () => {
    expect(resolveCtaFrom("/contact")).toBe("v2h-ocpp-guide");
    expect(resolveCtaFrom("/contact?risk_score=72")).toBe("v2h-ocpp-guide");
  });

  it("/contact 以外のリンクは null を返す（cta_from を送らない）", () => {
    expect(resolveCtaFrom("/")).toBeNull();
    expect(resolveCtaFrom("/articles")).toBeNull();
    expect(resolveCtaFrom("/compare")).toBeNull();
  });

  it("/contact で始まる別ルートを誤検出しない", () => {
    expect(resolveCtaFrom("/contact-form-guide")).toBeNull();
  });
});

describe("trackEvent が cta_from を GA4 へ渡す", () => {
  it("production ホストでは cta_from を含むパラメータが gtag に渡る", () => {
    const fake = setWindow("/v2h-ocpp-guide");
    const calls: unknown[][] = [];
    fake.gtag = (...args: unknown[]) => calls.push(args);

    trackEvent("cta_click", {
      label: "consult",
      href: "/contact?from=v2h-ocpp-guide",
      from: "v2h-ocpp-guide",
      cta_from: "v2h-ocpp-guide",
    });

    expect(calls).toHaveLength(1);
    expect(calls[0][0]).toBe("event");
    expect(calls[0][1]).toBe("cta_click");
    expect(calls[0][2]).toMatchObject({
      label: "consult",
      from: "v2h-ocpp-guide",
      cta_from: "v2h-ocpp-guide",
    });
  });

  it("production 以外のホストでは送信されない（既存ガード維持）", () => {
    const fake = setWindow("/v2h-ocpp-guide", "localhost");
    const calls: unknown[][] = [];
    fake.gtag = (...args: unknown[]) => calls.push(args);

    trackEvent("cta_click", { label: "consult", cta_from: "v2h-ocpp-guide" });

    expect(calls).toHaveLength(0);
  });
});
