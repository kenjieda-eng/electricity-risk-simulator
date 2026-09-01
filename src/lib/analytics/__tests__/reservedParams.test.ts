/**
 * GA4 のキャンペーン予約語を、イベントパラメータとして送っていないことを保証する回帰テスト。
 *
 * 背景（#333）:
 *   `contact_cta_view` / `contact_cta_click` が `source` を送っており、GA4 がこれを
 *   キャンペーン `source` として解釈した結果、28日で409セッション（全体の2.9%）が
 *   medium=(not set) / channel=Unassigned となり Organic Search の帰属を奪っていた。
 *   2026-04 から約5か月間、どのテストにも検知されなかった。
 *
 * 個別イベントの `toMatchObject` は「余分なキー」を失敗にしないため回帰を止められない。
 * ここでは src 全域を静的走査し、送信側にキーが復活したら落ちるようにする。
 *
 * 対象外:
 *   `page_path` / `page_location` / `page_title` は帰属を壊さず、`page_view` では正当な
 *   標準パラメータのため、本テストの対象に含めない。
 */
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { INLINE_CONSULT_SOURCES, buildInlineConsultEvent } from "../../consultCta";

/** GA4 がキャンペーン次元として解釈し、セッション帰属を上書きしうるパラメータ名。 */
const CAMPAIGN_RESERVED = [
  "source",
  "medium",
  "campaign",
  "term",
  "content",
  "campaign_id",
  "source_platform",
  "creative_format",
  "marketing_tactic",
];

const SRC = path.resolve(__dirname, "../../..");

function listSourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return entry.name === "__tests__" ? [] : listSourceFiles(p);
    }
    return /\.(ts|tsx)$/.test(p) ? [p] : [];
  });
}

/** `marker` で始まる呼び出しの引数リストを、括弧の対応を数えて切り出す。 */
function extractCallArgs(src: string, marker: string): { line: number; args: string }[] {
  const found: { line: number; args: string }[] = [];
  let from = 0;
  for (;;) {
    const at = src.indexOf(marker, from);
    if (at === -1) break;
    const open = src.indexOf("(", at + marker.length - 1);
    if (open === -1) break;
    let depth = 0;
    let quote: string | null = null;
    let end = open;
    for (; end < src.length; end++) {
      const ch = src[end];
      const prev = src[end - 1];
      if (quote) {
        if (ch === quote && prev !== "\\") quote = null;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === "`") {
        quote = ch;
        continue;
      }
      if (ch === "(") depth++;
      else if (ch === ")") {
        depth--;
        if (depth === 0) break;
      }
    }
    found.push({ line: src.slice(0, at).split("\n").length, args: src.slice(open + 1, end) });
    from = end > at ? end : at + marker.length;
  }
  return found;
}

/** オブジェクトリテラル本体のトップレベルのキー名（ショートハンド `{ source }` を含む）。 */
function topLevelKeys(body: string): string[] {
  const keys: string[] = [];
  let depth = 0;
  let quote: string | null = null;
  let buffer = "";

  const flushShorthand = () => {
    const name = buffer.trim().replace(/["'`]/g, "");
    if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) keys.push(name);
    buffer = "";
  };

  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    const prev = body[i - 1];
    if (quote) {
      if (ch === quote && prev !== "\\") quote = null;
      buffer += ch;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      quote = ch;
      buffer += ch;
      continue;
    }
    if ("{[(".includes(ch)) {
      depth++;
      buffer += ch;
      continue;
    }
    if ("}])".includes(ch)) {
      depth--;
      buffer += ch;
      continue;
    }
    if (depth === 0 && ch === ":") {
      const name = buffer.trim().replace(/["'`]/g, "");
      if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) keys.push(name);
      buffer = "";
      // 値側はトップレベルの `,` まで読み飛ばす
      let valueDepth = 0;
      let valueQuote: string | null = null;
      for (i++; i < body.length; i++) {
        const c = body[i];
        const p = body[i - 1];
        if (valueQuote) {
          if (c === valueQuote && p !== "\\") valueQuote = null;
          continue;
        }
        if (c === '"' || c === "'" || c === "`") {
          valueQuote = c;
          continue;
        }
        if ("{[(".includes(c)) valueDepth++;
        else if ("}])".includes(c)) {
          if (valueDepth === 0) {
            i--;
            break;
          }
          valueDepth--;
        } else if (c === "," && valueDepth === 0) break;
      }
      continue;
    }
    if (depth === 0 && ch === ",") {
      flushShorthand();
      continue;
    }
    buffer += ch;
  }
  flushShorthand();
  return keys;
}

type Offender = { file: string; line: number; event: string; key: string };

function scanForReservedParams(): Offender[] {
  const offenders: Offender[] = [];
  for (const file of listSourceFiles(SRC)) {
    const src = fs.readFileSync(file, "utf8");
    if (!src.includes("trackEvent(") && !src.includes("gtag")) continue;

    const calls = [
      ...extractCallArgs(src, "trackEvent(").map((c) => ({ ...c, offset: 0 })),
      ...extractCallArgs(src, 'gtag("event"').map((c) => ({ ...c, offset: 1 })),
      ...extractCallArgs(src, 'gtag?.("event"').map((c) => ({ ...c, offset: 1 })),
    ];

    for (const call of calls) {
      const brace = call.args.indexOf("{");
      if (brace === -1) continue;
      const params = call.args.slice(brace + 1, call.args.lastIndexOf("}"));
      const eventName =
        call.args
          .slice(0, brace)
          .split(",")
          [call.offset]?.replace(/["'`]/g, "")
          .trim() ?? "(unknown)";
      for (const key of topLevelKeys(params)) {
        if (CAMPAIGN_RESERVED.includes(key)) {
          offenders.push({
            file: path.relative(SRC, file).split(path.sep).join("/"),
            line: call.line,
            event: eventName,
            key,
          });
        }
      }
    }
  }
  return offenders;
}

describe("GA4 キャンペーン予約語をイベントパラメータに載せない（#333 の回帰ガード）", () => {
  it("src 全域の trackEvent / gtag 送信に source などの予約語が無い", () => {
    const offenders = scanForReservedParams();
    const readable = offenders.map((o) => `${o.file}:${o.line} ${o.event} → ${o.key}`);
    expect(readable).toEqual([]);
  });

  it("走査器自身がショートハンド `{ source }` を検出できる（テストの有効性の担保）", () => {
    // #333 で実際に取りこぼした形。これを拾えないと上のテストは意味を持たない。
    expect(topLevelKeys(" source, cta_from: source, variant ")).toContain("source");
    expect(topLevelKeys(' cta_from: from, variant: "inline" ')).not.toContain("source");
  });

  // 上の静的走査は `trackEvent(...)` の引数リストしか見ないため、パラメータを組み立てて
  // 返すヘルパ関数（間接経路）は捕捉できない。そちらはキー集合を実行時に固定して守る。
  // ※ `toMatchObject` は余分なキーを失敗にしないので、キー集合の完全一致で検査すること。
  it("buildInlineConsultEvent が返すキーは cta_from / variant だけ（間接経路の回帰ガード）", () => {
    const params = buildInlineConsultEvent(INLINE_CONSULT_SOURCES.toc);
    expect(Object.keys(params).sort()).toEqual(["cta_from", "variant"]);
    for (const reserved of CAMPAIGN_RESERVED) {
      expect(Object.keys(params)).not.toContain(reserved);
    }
  });
});
