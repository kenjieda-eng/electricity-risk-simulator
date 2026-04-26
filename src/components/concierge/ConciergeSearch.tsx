"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SearchEntry } from "../../lib/searchIndex";

type Props = {
  entries: SearchEntry[];
};

/** シナリオ別のクイックプロンプト */
const QUICK_PROMPTS = [
  "法人電気代なぜ高い",
  "契約見直し何から",
  "市場連動プランは怖い",
  "最終保障供給 脱出",
  "補助金 2026年度",
  "稟議書 テンプレート",
  "Scope2 算定",
  "コーポレートPPA 選び方",
  "データセンター AI 電力",
  "用語集",
];

type Intent = "explain" | "howto" | "compare" | "diagnose" | "action" | "general";

function classifyIntent(q: string): { intent: Intent; label: string; color: string } {
  const s = q.toLowerCase();
  if (/なぜ|なんで|原因|理由|背景/.test(q)) return { intent: "explain", label: "理由・背景を知りたい", color: "bg-amber-100 text-amber-800" };
  if (/何から|始め方|進め方|手順|方法|やり方|どう|ステップ/.test(q)) return { intent: "howto", label: "手順・進め方を知りたい", color: "bg-emerald-100 text-emerald-800" };
  if (/比較|違い|どちら|選び方|向き不向き|向く|おすすめ/.test(q)) return { intent: "compare", label: "比較・選び方を知りたい", color: "bg-sky-100 text-sky-800" };
  if (/診断|チェック|セルフ|確認|該当/.test(q) || /[?？]$/.test(q)) return { intent: "diagnose", label: "自社状況をチェックしたい", color: "bg-violet-100 text-violet-800" };
  if (/対応|対策|準備|備え|テンプレ|雛形|サンプル|書き方/.test(q)) return { intent: "action", label: "具体的な対応をしたい", color: "bg-rose-100 text-rose-800" };
  if (s.length === 0) return { intent: "general", label: "", color: "" };
  return { intent: "general", label: "一般検索", color: "bg-slate-100 text-slate-700" };
}

function scoreEntry(entry: SearchEntry, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  const title = entry.title.toLowerCase();
  const desc = entry.description.toLowerCase();
  const cat = entry.category.toLowerCase();
  let score = 0;
  // タイトル完全マッチ/部分マッチ
  if (title === q) score += 100;
  if (title.includes(q)) score += 30;
  // 各単語マッチ
  const tokens = q.split(/\s+/).filter((t) => t.length > 0);
  for (const t of tokens) {
    if (title.includes(t)) score += 10;
    if (desc.includes(t)) score += 5;
    if (cat.includes(t)) score += 3;
  }
  return score;
}

/** Intent × カテゴリ別の推奨CTA */
function getIntentSuggestion(intent: Intent): { label: string; href: string }[] {
  switch (intent) {
    case "explain":
      return [
        { label: "料金が上がる理由を知る", href: "/articles/price-increase" },
        { label: "電気料金の推移と高止まり", href: "/articles/price-trends" },
      ];
    case "howto":
      return [
        { label: "見直し4ステップ（状況確認→比較→切替）", href: "/articles/review-points" },
        { label: "初動対応（緊急）", href: "/articles/emergency-response" },
      ];
    case "compare":
      return [
        { label: "契約メニュー比較マトリクス", href: "/articles/plan-types" },
        { label: "料金メニュー比較診断（/compare）", href: "/compare" },
      ];
    case "diagnose":
      return [
        { label: "料金リスクシミュレーター", href: "/simulate" },
        { label: "セルフチェックツール", href: "/articles/diagnostic-tools" },
      ];
    case "action":
      return [
        { label: "ダウンロード素材（稟議書・チェックリスト）", href: "/downloads" },
        { label: "社内説明・稟議", href: "/articles/internal-explanation" },
      ];
    default:
      return [];
  }
}

export function ConciergeSearch({ entries }: Props) {
  const [query, setQuery] = useState("");
  const intentInfo = useMemo(() => classifyIntent(query), [query]);
  const results = useMemo(() => {
    if (!query.trim()) return [] as { entry: SearchEntry; score: number }[];
    return entries
      .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 15);
  }, [query, entries]);

  const suggestions = useMemo(() => getIntentSuggestion(intentInfo.intent), [intentInfo.intent]);

  const conciergeUsedFiredRef = useRef(false);

  useEffect(() => {
    if (conciergeUsedFiredRef.current) return;
    if (query.trim().length < 2) return;
    conciergeUsedFiredRef.current = true;
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "concierge_used", {
        event_category: "engagement",
        event_label: intentInfo.intent,
      });
    }
  }, [query, intentInfo.intent]);

  return (
    <div>
      <div className="rounded-xl border border-sky-300 bg-white p-5">
        <label htmlFor="concierge-input" className="block text-sm font-semibold text-slate-900">
          質問・キーワード入力
        </label>
        <input
          id="concierge-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="例：法人電気代なぜ高い / 市場連動 向き不向き / 2026年度 補助金"
          className="mt-2 w-full rounded-md border-2 border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {QUICK_PROMPTS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setQuery(p)}
              className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-800"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {query.trim() ? (
        <div className="mt-4">
          {intentInfo.label ? (
            <p className="text-xs">
              <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${intentInfo.color}`}>
                推定意図: {intentInfo.label}
              </span>
            </p>
          ) : null}

          {suggestions.length > 0 ? (
            <section className="mt-3 rounded-lg border border-sky-200 bg-sky-50/60 p-4">
              <h3 className="text-sm font-semibold text-slate-900">意図に沿った推奨アクション</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {suggestions.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sky-700 underline-offset-2 hover:underline">
                      → {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="mt-5">
            <h3 className="text-base font-semibold text-slate-900">
              該当コンテンツ（{results.length}件 / 上位15件表示）
            </h3>
            {results.length === 0 ? (
              <p className="mt-2 text-sm text-slate-600">該当するページが見つかりませんでした。別のキーワードでお試しください。</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {results.map(({ entry }) => (
                  <li key={entry.href} className="rounded-lg border border-slate-200 bg-white p-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">{entry.category}</span>
                    </div>
                    <h4 className="mt-1 text-sm font-semibold text-slate-900">
                      <Link href={entry.href} className="text-sky-700 underline-offset-2 hover:underline">
                        {entry.title}
                      </Link>
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-700">{entry.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          キーワードやクイックプロンプトを選択すると、35カテゴリ・300超記事の中から該当するページを即座に提示します。
          さらに、質問の意図（理由/手順/比較/診断/行動）を自動判定し、シミュレーターや比較診断への最短動線を提案します。
        </div>
      )}
    </div>
  );
}
