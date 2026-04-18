"use client";

import { useState, useMemo } from "react";

const CHANNELS = [
  { key: "jepx", label: "JEPX市場", price: 14, volatility: 35 },
  { key: "bilateral", label: "相対契約", price: 18, volatility: 5 },
  { key: "futures", label: "先物・先渡し", price: 16, volatility: 10 },
  { key: "ppa", label: "PPA（再エネ）", price: 17, volatility: 0 },
  { key: "selfgen", label: "自家発電・自己託送", price: 12, volatility: 15 },
];

export default function ProcurementMixCalculator() {
  const [annualKwh, setAnnualKwh] = useState(10000000);
  const [shares, setShares] = useState({ jepx: 30, bilateral: 40, futures: 10, ppa: 10, selfgen: 10 });

  const total = Object.values(shares).reduce((s, v) => s + v, 0);

  const result = useMemo(() => {
    let avgPrice = 0;
    let avgVol = 0;
    CHANNELS.forEach((c) => {
      const share = shares[c.key as keyof typeof shares];
      avgPrice += (c.price * share) / 100;
      avgVol += (c.volatility * share) / 100;
    });
    return {
      avgPrice: avgPrice.toFixed(2),
      avgVol: avgVol.toFixed(1),
      annualCost: Math.round(annualKwh * avgPrice),
      worstCase: Math.round(annualKwh * avgPrice * (1 + avgVol / 100)),
      bestCase: Math.round(annualKwh * avgPrice * (1 - avgVol / 100)),
    };
  }, [annualKwh, shares]);

  const update = (key: string, value: number) => {
    setShares((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="mt-6 rounded-xl border-2 border-purple-300 bg-purple-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">⚙ 調達ポートフォリオ最適化ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        5種類の調達手段の配分を調整して、年間コストとボラティリティを試算します。リスク許容度に応じた最適なポートフォリオを設計できます。
      </p>
      <div className="mt-4">
        <label className="block text-xs font-semibold text-slate-700">年間使用量（kWh）</label>
        <input type="number" value={annualKwh} onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)} className="mt-1 w-full md:w-1/3 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100000} />
      </div>
      <div className="mt-4 space-y-3">
        {CHANNELS.map((c) => (
          <div key={c.key} className="flex flex-wrap items-center gap-3 rounded-md border border-purple-200 bg-white p-3">
            <span className="w-32 text-sm font-semibold text-slate-900">{c.label}</span>
            <input
              type="range"
              min={0}
              max={100}
              value={shares[c.key as keyof typeof shares]}
              onChange={(e) => update(c.key, Number(e.target.value))}
              className="flex-1"
            />
            <span className="w-12 text-right text-sm font-bold">{shares[c.key as keyof typeof shares]}%</span>
            <span className="text-xs text-slate-500">単価{c.price}円・ボラ±{c.volatility}%</span>
          </div>
        ))}
        <p className={`text-sm ${total === 100 ? "text-emerald-700" : "text-red-700"}`}>合計: {total}%（100%にしてください）</p>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-purple-200 bg-white p-4">
          <p className="text-xs text-slate-500">加重平均単価</p>
          <p className="mt-1 text-xl font-bold text-purple-800">{result.avgPrice}円/kWh</p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-white p-4">
          <p className="text-xs text-slate-500">ポートフォリオボラ</p>
          <p className="mt-1 text-xl font-bold text-purple-800">±{result.avgVol}%</p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-white p-4">
          <p className="text-xs text-slate-500">想定年間コスト</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.annualCost.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-white p-4">
          <p className="text-xs text-slate-500">最悪/最良ケース</p>
          <p className="mt-1 text-sm font-bold text-red-700">最悪: {result.worstCase.toLocaleString()}円</p>
          <p className="text-sm font-bold text-emerald-700">最良: {result.bestCase.toLocaleString()}円</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 単価・ボラティリティは2026年時点の概算。実際の最適配分は会社の財務体力・予算予見性ニーズで異なります。
      </p>
    </section>
  );
}
