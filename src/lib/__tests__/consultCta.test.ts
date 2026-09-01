import { afterEach, describe, expect, it } from "vitest";
import { trackEvent } from "../analytics/ga";
import {
  CONSULT_FACTS,
  INLINE_CONSULT_SOURCES,
  buildInlineConsultEvent,
  buildInlineConsultHref,
} from "../consultCta";

/**
 * 記事内インライン相談導線（InlineConsultLink）の計測とリンク形式の検証。
 * 既存の `ga.ctaFrom.test.ts` と同じ fake window 方式で、コンポーネントを描画せずに
 * GA4 へ実際に渡るパラメータを確認する。
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

describe("CONSULT_FACTS（相談条件の文言）", () => {
  it("4項目が /contact の既出事実と一致する", () => {
    expect(CONSULT_FACTS).toEqual([
      "初回相談 無料",
      "中立・特定の電力会社への勧誘なし",
      "営業電話なし",
      "3営業日以内に返信",
    ]);
  });

  it("誇大表現になりうる語を含まない", () => {
    const banned = ["必ず", "最安", "絶対", "確実", "No.1", "日本一", "激安"];
    for (const fact of CONSULT_FACTS) {
      for (const word of banned) {
        expect(fact).not.toContain(word);
      }
    }
  });

  it("中立性の明示を含む", () => {
    expect(CONSULT_FACTS.join("")).toContain("勧誘なし");
  });
});

describe("buildInlineConsultHref", () => {
  it("カードと同じ /contact?from= の体系になる", () => {
    expect(buildInlineConsultHref("mid-article-toc")).toBe("/contact?from=mid-article-toc");
    expect(buildInlineConsultHref("mid-article-related")).toBe(
      "/contact?from=mid-article-related"
    );
  });

  it("from をURLエンコードする", () => {
    expect(buildInlineConsultHref("a b&c")).toBe("/contact?from=a%20b%26c");
  });
});

describe("INLINE_CONSULT_SOURCES", () => {
  it("ContactCtaCard の source='article' と衝突しない", () => {
    const values = Object.values(INLINE_CONSULT_SOURCES);
    expect(values).not.toContain("article");
    expect(new Set(values).size).toBe(values.length);
  });

  it("設置位置が2種類とも mid-article 接頭辞を持つ", () => {
    for (const v of Object.values(INLINE_CONSULT_SOURCES)) {
      expect(v.startsWith("mid-article")).toBe(true);
    }
  });
});

describe("インライン導線のクリックが GA4 へ届く", () => {
  it("contact_cta_click に cta_from と variant='inline' が渡る", () => {
    const fake = setWindow("/fuel-cost-adjustment");
    const calls: unknown[][] = [];
    fake.gtag = (...args: unknown[]) => calls.push(args);

    trackEvent("contact_cta_click", buildInlineConsultEvent(INLINE_CONSULT_SOURCES.toc));

    expect(calls).toHaveLength(1);
    expect(calls[0][0]).toBe("event");
    expect(calls[0][1]).toBe("contact_cta_click");
    expect(calls[0][2]).toMatchObject({
      cta_from: "mid-article-toc",
      variant: "inline",
    });
  });

  it("目次直下と関連ページ直上が cta_from で区別できる", () => {
    const fake = setWindow("/fuel-cost-adjustment");
    const calls: unknown[][] = [];
    fake.gtag = (...args: unknown[]) => calls.push(args);

    trackEvent("contact_cta_click", buildInlineConsultEvent(INLINE_CONSULT_SOURCES.toc));
    trackEvent("contact_cta_click", buildInlineConsultEvent(INLINE_CONSULT_SOURCES.related));

    expect(calls).toHaveLength(2);
    expect((calls[0][2] as { cta_from: string }).cta_from).toBe("mid-article-toc");
    expect((calls[1][2] as { cta_from: string }).cta_from).toBe("mid-article-related");
  });

  it("production 以外のホストでは送信されない（既存ガード維持）", () => {
    const fake = setWindow("/fuel-cost-adjustment", "localhost");
    const calls: unknown[][] = [];
    fake.gtag = (...args: unknown[]) => calls.push(args);

    trackEvent("contact_cta_click", buildInlineConsultEvent(INLINE_CONSULT_SOURCES.toc));

    expect(calls).toHaveLength(0);
  });
});
