"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type IndustryKey =
  | "office"
  | "retail"
  | "hotel"
  | "hospital"
  | "food-factory"
  | "logistics"
  | "datacenter"
  | "school"
  | "restaurant"
  | "small-office";

type IndustryRef = {
  key: IndustryKey;
  label: string;
  /** 業種平均の単価目安（円/kWh） */
  avgUnitPrice: number;
  /** 業種平均の月額電気代目安（円） */
  avgMonthlyCost: number;
  /** ピーク負荷の主要要因 */
  peakDrivers: string;
  /** 推奨施策 */
  recommendation: string;
};

const INDUSTRY_REFS: IndustryRef[] = [
  { key: "office", label: "オフィスビル（中規模）", avgUnitPrice: 22, avgMonthlyCost: 800_000, peakDrivers: "空調・照明・サーバ", recommendation: "LED化・空調最適化・デマンド制御" },
  { key: "retail", label: "小売（中規模店舗）", avgUnitPrice: 23, avgMonthlyCost: 1_200_000, peakDrivers: "冷凍冷蔵・照明", recommendation: "冷設備更新・LED・蓄電池" },
  { key: "hotel", label: "ホテル（中規模）", avgUnitPrice: 22, avgMonthlyCost: 2_500_000, peakDrivers: "空調・給湯・厨房", recommendation: "コジェネ・空調最適化" },
  { key: "hospital", label: "病院（中規模）", avgUnitPrice: 21, avgMonthlyCost: 4_500_000, peakDrivers: "医療機器・24時間空調", recommendation: "BCP蓄電池・固定プラン推奨" },
  { key: "food-factory", label: "食品工場（中規模）", avgUnitPrice: 19, avgMonthlyCost: 6_000_000, peakDrivers: "冷凍冷蔵・生産設備", recommendation: "FEMS・デマンド制御・自家消費太陽光" },
  { key: "logistics", label: "物流倉庫（中規模）", avgUnitPrice: 20, avgMonthlyCost: 3_000_000, peakDrivers: "冷凍冷蔵・マテハン", recommendation: "LED・デマンド制御・蓄電池" },
  { key: "datacenter", label: "データセンター（中規模）", avgUnitPrice: 18, avgMonthlyCost: 20_000_000, peakDrivers: "サーバ・冷却", recommendation: "PUE改善・液冷・PPA" },
  { key: "school", label: "学校・自治体施設", avgUnitPrice: 23, avgMonthlyCost: 700_000, peakDrivers: "空調・照明", recommendation: "LED・空調更新・自治体補助金活用" },
  { key: "restaurant", label: "外食（中規模チェーン店舗）", avgUnitPrice: 24, avgMonthlyCost: 400_000, peakDrivers: "厨房・冷設備", recommendation: "厨房機器更新・空調最適化" },
  { key: "small-office", label: "小規模オフィス・SOHO", avgUnitPrice: 26, avgMonthlyCost: 60_000, peakDrivers: "空調・照明・PC", recommendation: "契約アンペア最適化・LED" },
];

type DeviationBand = {
  min: number;
  label: string;
  color: string;
  advice: string;
};

const DEVIATION_BANDS: DeviationBand[] = [
  {
    min: -100,
    label: "相場以下（良好）",
    color: "bg-emerald-100 text-emerald-800",
    advice: "相場以下の水準です。現契約を維持しつつ、更新期限管理を継続してください。",
  },
  {
    min: -10,
    label: "ほぼ相場並み",
    color: "bg-sky-100 text-sky-800",
    advice: "相場と同程度です。見積比較を取ると 5〜10% 程度の削減機会を見つけやすい水準です。",
  },
  {
    min: 10,
    label: "相場より高め",
    color: "bg-amber-100 text-amber-800",
    advice: "相場より高めです。他社見積を取得し、契約プラン・契約電力・設備対策の見直しを推奨します。",
  },
  {
    min: 25,
    label: "相場より大幅に高い",
    color: "bg-rose-100 text-rose-800",
    advice: "相場を大きく上回っています。契約プラン改定・デマンド見直し・設備対策を組み合わせた包括見直しを強く推奨します。",
  },
];

function classifyDeviation(percent: number): DeviationBand {
  let current = DEVIATION_BANDS[0];
  for (const band of DEVIATION_BANDS) {
    if (percent >= band.min) current = band;
  }
  return current;
}

export function BenchmarkTool() {
  const [industry, setIndustry] = useState<IndustryKey>("office");
  const [monthlyCost, setMonthlyCost] = useState<string>("");
  const [monthlyKwh, setMonthlyKwh] = useState<string>("");

  const ref = INDUSTRY_REFS.find((i) => i.key === industry)!;

  const result = useMemo(() => {
    const costNum = parseFloat(monthlyCost.replace(/,/g, ""));
    const kwhNum = parseFloat(monthlyKwh.replace(/,/g, ""));
    if (!isFinite(costNum) || costNum <= 0) return null;

    const unitPrice = isFinite(kwhNum) && kwhNum > 0 ? costNum / kwhNum : null;
    const costDeviationPercent = ((costNum - ref.avgMonthlyCost) / ref.avgMonthlyCost) * 100;
    const unitDeviationPercent = unitPrice !== null ? ((unitPrice - ref.avgUnitPrice) / ref.avgUnitPrice) * 100 : null;

    return {
      unitPrice,
      costDeviationPercent,
      unitDeviationPercent,
      annualCost: costNum * 12,
      annualAvg: ref.avgMonthlyCost * 12,
    };
  }, [monthlyCost, monthlyKwh, ref]);

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-sky-300 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">自社情報を入力</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <label className="block">
            <span className="text-sm font-semibold text-slate-900">業種</span>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value as IndustryKey)}
              className="mt-1 w-full rounded-md border-2 border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
            >
              {INDUSTRY_REFS.map((i) => (
                <option key={i.key} value={i.key}>{i.label}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-900">月額電気代（円）</span>
            <input
              type="text"
              inputMode="numeric"
              value={monthlyCost}
              onChange={(e) => setMonthlyCost(e.target.value)}
              placeholder="例: 800000"
              className="mt-1 w-full rounded-md border-2 border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-900">月間使用量 kWh（任意）</span>
            <input
              type="text"
              inputMode="numeric"
              value={monthlyKwh}
              onChange={(e) => setMonthlyKwh(e.target.value)}
              placeholder="例: 36000"
              className="mt-1 w-full rounded-md border-2 border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
            />
          </label>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          ※ 入力内容はブラウザ内で計算するのみで、サーバには送信されません。業種平均は2026年時点の目安で、地域・規模・稼働時間により変動します。
        </p>
      </section>

      {result ? (
        <section className="rounded-xl border-2 border-sky-400 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較結果</h2>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">自社 月額</p>
              <p className="mt-1 text-xl font-bold text-slate-900">¥{Math.round(parseFloat(monthlyCost.replace(/,/g, ""))).toLocaleString()}</p>
              <p className="mt-2 text-xs text-slate-600">年換算 ¥{Math.round(result.annualCost).toLocaleString()}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">業種平均 月額</p>
              <p className="mt-1 text-xl font-bold text-slate-900">¥{ref.avgMonthlyCost.toLocaleString()}</p>
              <p className="mt-2 text-xs text-slate-600">年換算 ¥{result.annualAvg.toLocaleString()}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">乖離率（月額）</p>
              <p className={`mt-1 text-xl font-bold ${result.costDeviationPercent >= 10 ? "text-rose-700" : result.costDeviationPercent <= -10 ? "text-emerald-700" : "text-slate-900"}`}>
                {result.costDeviationPercent >= 0 ? "+" : ""}{result.costDeviationPercent.toFixed(1)}%
              </p>
              <p className="mt-2 text-xs text-slate-600">業種平均比</p>
            </div>
          </div>

          {result.unitPrice !== null ? (
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <p className="text-sm text-slate-600">自社 単価</p>
                <p className="text-lg font-bold text-slate-900">{result.unitPrice.toFixed(2)} 円/kWh</p>
                <span className="text-xs text-slate-500">vs 業種平均 {ref.avgUnitPrice} 円/kWh</span>
                {result.unitDeviationPercent !== null ? (
                  <span className={`text-xs font-semibold ${result.unitDeviationPercent >= 10 ? "text-rose-700" : result.unitDeviationPercent <= -10 ? "text-emerald-700" : "text-slate-700"}`}>
                    （{result.unitDeviationPercent >= 0 ? "+" : ""}{result.unitDeviationPercent.toFixed(1)}%）
                  </span>
                ) : null}
              </div>
            </div>
          ) : null}

          {(() => {
            const band = classifyDeviation(result.costDeviationPercent);
            return (
              <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${band.color}`}>
                  判定: {band.label}
                </span>
                <p className="mt-2 text-sm leading-6 text-slate-700">{band.advice}</p>
              </div>
            );
          })()}

          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">この業種の主な論点</h3>
            <dl className="mt-2 space-y-1 text-sm">
              <div className="flex gap-2">
                <dt className="w-28 shrink-0 text-slate-500">ピーク負荷</dt>
                <dd className="text-slate-700">{ref.peakDrivers}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-28 shrink-0 text-slate-500">推奨施策</dt>
                <dd className="text-slate-700">{ref.recommendation}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/simulate"
              className="inline-flex rounded-md border-2 border-sky-500 bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              詳細な上昇リスク診断へ
            </Link>
            <Link
              href="/articles/review-points"
              className="inline-flex rounded-md border border-sky-300 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              見直し4ステップへ
            </Link>
            <Link
              href="/downloads/quotation-comparison.csv"
              className="inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              見積比較表をDL
            </Link>
          </div>
        </section>
      ) : (
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          業種と月額電気代を入力すると、業種平均との乖離率・判定・推奨アクションが即座に表示されます。
          月間kWhも入力すると単価（円/kWh）でも比較できます。
        </section>
      )}
    </div>
  );
}
