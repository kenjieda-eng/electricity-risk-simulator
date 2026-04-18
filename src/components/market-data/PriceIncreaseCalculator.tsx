"use client";

import { useState, useMemo } from "react";

export default function PriceIncreaseCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(500000);
  const [increasePct, setIncreasePct] = useState(15);
  const [years, setYears] = useState(3);

  const result = useMemo(() => {
    const yearlyBill = monthlyBill * 12;
    const newYearly = yearlyBill * (1 + increasePct / 100);
    const yearlyDiff = newYearly - yearlyBill;
    const cumulative = yearlyDiff * years;
    return {
      yearlyBill,
      newYearly: Math.round(newYearly),
      yearlyDiff: Math.round(yearlyDiff),
      cumulative: Math.round(cumulative),
    };
  }, [monthlyBill, increasePct, years]);

  return (
    <section className="mt-6 rounded-xl border-2 border-red-300 bg-red-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📈 値上げインパクト試算ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        現在の月額電気代と想定値上げ率を入力して、年間追加コストと累積影響を試算します。経営層への説明資料・予算編成に活用できます。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">現在の月額電気代（円）</label>
          <input
            type="number"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={10000}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">想定値上げ率（%）</label>
          <input
            type="number"
            value={increasePct}
            onChange={(e) => setIncreasePct(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            max={100}
            step={1}
          />
          <p className="mt-1 text-xs text-slate-500">過去事例：5〜25%</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">累積期間（年）</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={1}
            max={10}
          />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-red-200 bg-white p-4">
          <p className="text-xs text-slate-500">現在の年間コスト</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.yearlyBill.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-white p-4">
          <p className="text-xs text-slate-500">値上げ後の年間コスト</p>
          <p className="mt-1 text-xl font-bold text-red-700">{result.newYearly.toLocaleString()}円</p>
          <p className="mt-1 text-xs text-slate-500">年差額: +{result.yearlyDiff.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-white p-4">
          <p className="text-xs text-slate-500">{years}年累計の追加コスト</p>
          <p className="mt-1 text-2xl font-bold text-red-800">{result.cumulative.toLocaleString()}円</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 値上げ率を一定と仮定した単純試算。実際は燃料費調整・市場価格・制度改正により変動します。社内予算編成・コスト圧縮検討の起点としてご活用ください。
      </p>
    </section>
  );
}
