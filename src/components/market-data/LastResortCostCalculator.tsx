"use client";

import { useState, useMemo } from "react";

export default function LastResortCostCalculator() {
  const [contractKw, setContractKw] = useState(500);
  const [monthlyKwh, setMonthlyKwh] = useState(150000);
  const [retailUnit, setRetailUnit] = useState(20);
  const [retailBasic, setRetailBasic] = useState(1716);
  const [months, setMonths] = useState(6);

  const result = useMemo(() => {
    const lastResortBasic = retailBasic * 1.2;
    const lastResortUnit = retailUnit * 1.2;
    const retailMonthly = retailBasic * contractKw + retailUnit * monthlyKwh;
    const lastResortMonthly = lastResortBasic * contractKw + lastResortUnit * monthlyKwh;
    const monthlyDiff = lastResortMonthly - retailMonthly;
    const periodDiff = monthlyDiff * months;
    return {
      retailMonthly: Math.round(retailMonthly),
      lastResortMonthly: Math.round(lastResortMonthly),
      monthlyDiff: Math.round(monthlyDiff),
      periodDiff: Math.round(periodDiff),
      diffPct: ((monthlyDiff / retailMonthly) * 100).toFixed(1),
    };
  }, [contractKw, monthlyKwh, retailUnit, retailBasic, months]);

  return (
    <section className="mt-6 rounded-xl border-2 border-orange-300 bg-orange-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🆘 最終保障供給コスト試算ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        最終保障供給は標準料金の1.2倍。自社の契約条件を入力して、通常小売契約と比べた追加コストを試算します。早期切替の経済合理性が確認できます。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">契約電力（kW）</label>
          <input type="number" value={contractKw} onChange={(e) => setContractKw(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={50} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">月間使用量（kWh）</label>
          <input type="number" value={monthlyKwh} onChange={(e) => setMonthlyKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">通常契約の電力量単価（円/kWh）</label>
          <input type="number" value={retailUnit} onChange={(e) => setRetailUnit(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">通常契約の基本料金単価（円/kW）</label>
          <input type="number" value={retailBasic} onChange={(e) => setRetailBasic(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={50} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">最終保障供給の利用月数</label>
          <input type="number" value={months} onChange={(e) => setMonths(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={1} max={24} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-orange-200 bg-white p-4">
          <p className="text-xs text-slate-500">通常契約の月額</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.retailMonthly.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-white p-4">
          <p className="text-xs text-slate-500">最終保障供給の月額</p>
          <p className="mt-1 text-xl font-bold text-orange-700">{result.lastResortMonthly.toLocaleString()}円</p>
          <p className="mt-1 text-xs text-orange-700">月差: +{result.monthlyDiff.toLocaleString()}円（+{result.diffPct}%）</p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-white p-4">
          <p className="text-xs text-slate-500">{months}ヶ月累計の追加コスト</p>
          <p className="mt-1 text-2xl font-bold text-red-700">+{result.periodDiff.toLocaleString()}円</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 最終保障供給は標準料金の1.2倍を基本とした概算試算。実際にはJEPXスポット価格に連動し、需給逼迫時はさらに上昇する可能性があります。早期切替推奨。
      </p>
    </section>
  );
}
