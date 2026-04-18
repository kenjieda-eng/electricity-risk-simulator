"use client";

import { useState, useMemo } from "react";

const RECOMMENDATIONS: Record<string, { score: number; articles: { href: string; title: string; reason: string }[] }> = {
  "low": {
    score: 30,
    articles: [
      { href: "/business-electricity-bill-breakdown", title: "電気料金の内訳を理解する", reason: "現状把握から始めるのが基本" },
      { href: "/electricity-cost-seasonal-pattern", title: "年間変動パターン", reason: "季節変動の把握" },
      { href: "/articles/review-points", title: "見直しポイントカテゴリ", reason: "備えとしての知識習得" },
    ],
  },
  "medium": {
    score: 60,
    articles: [
      { href: "/articles/risk-scenarios", title: "リスクシナリオ別解説", reason: "中リスクの主要要因確認" },
      { href: "/compare", title: "料金メニュー比較診断", reason: "プラン見直しの検討" },
      { href: "/quotation-comparison-pre-check", title: "相見積前チェック", reason: "比較精度を上げる" },
      { href: "/articles/last-resort-supply", title: "最終保障供給", reason: "新電力撤退時の備え" },
    ],
  },
  "high": {
    score: 80,
    articles: [
      { href: "/why-business-electricity-bills-rise-suddenly", title: "急騰の理由", reason: "現状の急騰原因把握" },
      { href: "/response-flow-when-electricity-cost-surges", title: "急増時対応フロー", reason: "アクション手順" },
      { href: "/budget-planning-in-high-price-era", title: "高止まり時代の予算策定", reason: "中期計画の見直し" },
      { href: "/articles/energy-equipment", title: "エネルギー設備カテゴリ", reason: "蓄電池・自家発検討" },
      { href: "/articles/internal-explanation", title: "社内説明の準備", reason: "経営層への報告" },
    ],
  },
  "critical": {
    score: 95,
    articles: [
      { href: "/worst-case-electricity-cost-risk", title: "最悪シナリオ試算", reason: "最悪ケースの定量把握" },
      { href: "/articles/last-resort-supply", title: "最終保障供給", reason: "撤退・断絶時の備え" },
      { href: "/articles/energy-bcp", title: "電力BCP", reason: "事業継続体制構築" },
      { href: "/articles/for-executives", title: "経営層向け解説", reason: "緊急の経営判断材料" },
      { href: "/", title: "シミュレーター再診断", reason: "シナリオ別感度分析" },
    ],
  },
};

export default function RiskScoreArticleRecommender() {
  const [score, setScore] = useState(50);
  const level = useMemo(() => {
    if (score < 40) return "low";
    if (score < 70) return "medium";
    if (score < 90) return "high";
    return "critical";
  }, [score]);
  const labels: Record<string, { name: string; color: string }> = {
    low: { name: "🟢 リスク低", color: "border-emerald-300 bg-emerald-50" },
    medium: { name: "🟡 リスク中", color: "border-amber-300 bg-amber-50" },
    high: { name: "🟠 リスク高", color: "border-orange-300 bg-orange-50" },
    critical: { name: "🔴 リスク極高", color: "border-red-300 bg-red-50" },
  };
  const rec = RECOMMENDATIONS[level];
  const lab = labels[level];
  return (
    <section className={`mt-6 rounded-xl border-2 ${lab.color} p-5`}>
      <h2 className="text-xl font-semibold text-slate-900">📚 リスクスコア連動 おすすめ記事</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        シミュレーターで算出されたリスクスコアを入力すると、優先的に読むべき記事を表示します。
      </p>
      <div className="mt-4">
        <label className="block text-xs font-semibold text-slate-700">リスクスコア (0-100)</label>
        <input
          type="range" min={0} max={100} value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="mt-2 w-full"
        />
        <p className="mt-1 text-center text-2xl font-bold text-slate-900">{score} / 100 — {lab.name}</p>
      </div>
      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">推奨記事 {rec.articles.length}本</p>
        <ul className="mt-2 space-y-2 text-sm">
          {rec.articles.map((a) => (
            <li key={a.href} className="rounded border border-slate-200 bg-slate-50 p-3">
              <a href={a.href} className="font-semibold text-sky-700 hover:underline">→ {a.title}</a>
              <p className="mt-1 text-xs text-slate-600">{a.reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
