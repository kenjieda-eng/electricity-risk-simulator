import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { trackEvent } from "../analytics/ga";
import {
  CONSULT_BAR_DISMISSED_KEY,
  CONSULT_CARD_HIDDEN_EVENT,
  CONSULT_CARD_VISIBLE_EVENT,
  CONSULT_FACTS,
  INLINE_CONSULT_SOURCES,
  buildInlineConsultEvent,
  buildInlineConsultHref,
  readConsultBarDismissed,
  writeConsultBarDismissed,
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

/** #335 の不変条件は node 環境で描画できないため、実ソースを読んで固定する。 */
function read(rel: string): string {
  return readFileSync(resolve(__dirname, rel), "utf8");
}

function count(haystack: string, needle: string): number {
  return haystack.split(needle).length - 1;
}

const barSource = read("../../components/StickyConsultBar.tsx");
const cardSource = read("../../components/contact/ContactCtaCard.tsx");
const consultCtaSource = read("../consultCta.ts");

/**
 * StickyConsultBar の「✕」永続化（#335）。
 *
 * node 環境（jsdom なし）では `sessionStorage` が未定義なので、SSR 相当の経路は
 * そのまま検証でき、保存できる場合／例外を投げる場合はスタブを差し込んで検証する。
 * 失敗時に例外を漏らすとバー自体が描画されなくなるため、握り潰しまで固定する。
 */
type FakeStorage = {
  getItem: (k: string) => string | null;
  setItem: (k: string, v: string) => void;
};

function setStorage(impl: FakeStorage) {
  (globalThis as unknown as { sessionStorage: FakeStorage }).sessionStorage = impl;
}

function clearStorage() {
  delete (globalThis as unknown as { sessionStorage?: FakeStorage }).sessionStorage;
}

function memoryStorage(initial: Record<string, string> = {}) {
  const store = { ...initial };
  return {
    store,
    impl: {
      getItem: (k: string) => (k in store ? store[k] : null),
      setItem: (k: string, v: string) => {
        store[k] = v;
      },
    } satisfies FakeStorage,
  };
}

describe("StickyConsultBar の「✕」永続化（#335）", () => {
  afterEach(() => {
    clearStorage();
  });

  it("保存が無いときは false（初回は表示する）", () => {
    setStorage(memoryStorage().impl);
    expect(readConsultBarDismissed()).toBe(false);
  });

  it("write→read で true になる（同一セッション中は再表示しない）", () => {
    const { store, impl } = memoryStorage();
    setStorage(impl);

    writeConsultBarDismissed();

    expect(store[CONSULT_BAR_DISMISSED_KEY]).toBe("1");
    expect(readConsultBarDismissed()).toBe(true);
  });

  it("'1' 以外の値は閉じた扱いにしない", () => {
    setStorage(memoryStorage({ [CONSULT_BAR_DISMISSED_KEY]: "0" }).impl);
    expect(readConsultBarDismissed()).toBe(false);
  });

  it("sessionStorage が無い環境（SSR）でも例外を投げず false を返す", () => {
    clearStorage();
    expect(typeof sessionStorage).toBe("undefined");
    expect(readConsultBarDismissed()).toBe(false);
    expect(() => writeConsultBarDismissed()).not.toThrow();
  });

  it("ストレージが例外を投げる環境（プライベートモード等）でも落ちない", () => {
    setStorage({
      getItem: () => {
        throw new Error("SecurityError");
      },
      setItem: () => {
        throw new Error("QuotaExceededError");
      },
    });

    expect(readConsultBarDismissed()).toBe(false);
    expect(() => writeConsultBarDismissed()).not.toThrow();
  });

  it("localStorage は使わない（永続しすぎるため既存方針を維持）", () => {
    // 方針を説明するコメント中の語は許容し、実アクセスだけを禁じる。
    expect(consultCtaSource).not.toMatch(/localStorage\s*[.[]/);
    expect(barSource).not.toMatch(/localStorage\s*[.[]/);
  });
});

describe("カード可視通知のイベント名（#335）", () => {
  it("カード側とバー側で同じ定数を参照する（文字列の直書きが無い）", () => {
    expect(CONSULT_CARD_VISIBLE_EVENT).toBe("consult-card-visible");
    expect(CONSULT_CARD_HIDDEN_EVENT).toBe("consult-card-hidden");
    expect(CONSULT_CARD_VISIBLE_EVENT).not.toBe(CONSULT_CARD_HIDDEN_EVENT);

    for (const src of [cardSource, barSource]) {
      expect(src).not.toContain(`"${CONSULT_CARD_VISIBLE_EVENT}"`);
      expect(src).not.toContain(`"${CONSULT_CARD_HIDDEN_EVENT}"`);
    }
    expect(cardSource).toContain("CONSULT_CARD_VISIBLE_EVENT");
    expect(barSource).toContain("CONSULT_CARD_VISIBLE_EVENT");
  });

  it("バーは可視／不可視の両方を購読し、解除もする（購読の張りっぱなしを防ぐ）", () => {
    expect(barSource).toContain(`addEventListener(CONSULT_CARD_VISIBLE_EVENT`);
    expect(barSource).toContain(`addEventListener(CONSULT_CARD_HIDDEN_EVENT`);
    expect(barSource).toContain(`removeEventListener(CONSULT_CARD_VISIBLE_EVENT`);
    expect(barSource).toContain(`removeEventListener(CONSULT_CARD_HIDDEN_EVENT`);
  });

  it("カードは可視／不可視の両方を通知する（アンマウント時の取りこぼしでバーが消えたままになる）", () => {
    expect(cardSource).toContain("CONSULT_CARD_HIDDEN_EVENT");
    // アンマウント時に hidden を送る経路（cleanup 内の notify(false)）
    expect(cardSource).toMatch(/observer\.disconnect\(\);[\s\S]{0,200}notify\(false\);/);
  });
});

describe("contact_cta_view の発火条件は #335 で変えない", () => {
  it("view は threshold 0.5・1回限り・発火後 disconnect のまま", () => {
    expect(count(cardSource, 'trackEvent("contact_cta_view"')).toBe(1);
    expect(count(cardSource, "{ threshold: 0.5 }")).toBe(1);
    expect(cardSource).toContain("viewFiredRef.current = true;");
  });

  it("可視通知は view とは別の observer（threshold 0）で行う", () => {
    expect(count(cardSource, "new IntersectionObserver(")).toBe(2);
    expect(count(cardSource, "{ threshold: 0 }")).toBe(1);
  });

  it("可視通知の observer は GA を送らない（イベント総量を増やさない）", () => {
    const notifyBlock = cardSource.slice(
      cardSource.indexOf("#335"),
      cardSource.indexOf("const handleClick")
    );
    expect(notifyBlock).toContain("{ threshold: 0 }");
    expect(notifyBlock).not.toContain("trackEvent(");
  });
});

describe("バーの GA イベントは #335 で変えない", () => {
  it("cta_dismiss は「✕」のクリック時のみ（復元時には送らない）", () => {
    expect(count(barSource, 'trackEvent("cta_dismiss"')).toBe(1);
    // 保存の読み出し（復元）側に trackEvent が無いこと
    const restore = barSource.slice(
      barSource.indexOf("readConsultBarDismissed()"),
      barSource.indexOf("const onContact")
    );
    expect(restore).not.toContain("trackEvent(");
  });

  it("「✕」の onClick が GA 送信と sessionStorage 保存の両方を行う", () => {
    expect(count(barSource, "writeConsultBarDismissed();")).toBe(1);
    expect(barSource).toMatch(
      /trackEvent\("cta_dismiss"[\s\S]{0,160}writeConsultBarDismissed\(\);[\s\S]{0,80}setDismissed\(true\);/
    );
    expect(count(barSource, "readConsultBarDismissed()")).toBe(1);
  });

  it("cta_click / cta_dismiss のパラメータは従来どおり", () => {
    expect(barSource).toContain(
      'trackEvent("cta_dismiss", { label: "sticky", from: "sticky", cta_from: "sticky" });'
    );
    expect(barSource).toContain('label: "sticky",');
    expect(barSource).toContain('href: HREF,');
    expect(barSource).toContain('const HREF = "/contact?from=sticky";');
  });

  it("スペーサ（h-14）はバー本体と同じ早期 return の内側にある", () => {
    const guard = barSource.indexOf("if (dismissed || onContact || visibleCards > 0) return null;");
    expect(guard).toBeGreaterThan(-1);
    expect(barSource.indexOf('className="h-14"')).toBeGreaterThan(guard);
  });
});
