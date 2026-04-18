"use client";

import { useState, useMemo } from "react";

export default function FixedVsMarketCalculator() {
  const [annualKwh, setAnnualKwh] = useState(600000);
  const [fixedUnit, setFixedUnit] = useState(22);
  const [marketAvgUnit, setMarketAvgUnit] = useState(19);
  const [marketVolatility, setMarketVolatility] = useState(30);

  const result = useMemo(() => {
    const fixedAnnual = annualKwh * fixedUnit;
    const marketAvg = annualKwh * marketAvgUnit;
    // ボラティリティを考慮した上下レンジ
    const marketHigh = marketAvg * (1 + marketVolatility / 100);
    const marketLow = marketAvg * (1 - marketVolatility / 100);
    const savingVsHigh = fixedAnnual - marketHigh;
    const savingVsLow = fixedAnnual - marketLow;
    const savingVsAvg = fixedAnnual - marketAvg;
    return {
      fixedAnnual: Math.round(fixedAnnual),
      marketAvg: Math.round(marketAvg),
      marketHigh: Math.round(marketHigh),
      marketLow: Math.round(marketLow),
      savingVsAvg: Math.round(savingVsAvg),
      savingVsHigh: Math.round(savingVsHigh),
      savingVsLow: Math.round(savingVsLow),
    };
  }, [annualKwh, fixedUnit, marketAvgUnit, marketVolatility]);

  return (
    <section className="mt-6 rounded-xl border-2 border-indigo-300 bg-indigo-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">⚖ 固定 vs 市場連動 比較ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        年間使用量と両プランの想定単価を入力して、ベストケース・平均・ワーストケースの比較を行います。変動リスクの大きさと期待削減額のトレードオフを可視化。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間使用量（kWh）</label>
          <input
            type="number"
            value={annualKwh}
            onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={10000}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">固定価格の単価（円/kWh）</label>
          <input
            type="number"
            value={fixedUnit}
            onChange={(e) => setFixedUnit(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={0.5}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">市場連動の平均単価（円/kWh）</label>
          <input
            type="number"
            value={marketAvgUnit}
            onChange={(e) => setMarketAvgUnit(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={0.5}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">市場ボラティリティ（±%）</label>
          <input
            type="number"
            value={marketVolatility}
            onChange={(e) => setMarketVolatility(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            max={200}
            step={5}
          />
          <p className="mt-1 text-xs text-slate-500">過去実績：20〜60%</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-indigo-200 bg-white p-4">
          <p className="text-xs text-slate-500">固定価格の年間コスト</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.fixedAnnual.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-indigo-200 bg-white p-4">
          <p className="text-xs text-slate-500">市場連動（平均）</p>
          <p className="mt-1 text-xl font-bold text-indigo-700">{result.marketAvg.toLocaleString()}円</p>
          <p className="mt-1 text-xs font-semibold text-emerald-700">差: {result.savingVsAvg > 0 ? "▲" : "+"}{Math.abs(result.savingVsAvg).toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-indigo-200 bg-white p-4">
          <p className="text-xs text-slate-500">市場連動（高騰時）</p>
          <p className="mt-1 text-xl font-bold text-red-700">{result.marketHigh.toLocaleString()}円</p>
          <p className="mt-1 text-xs font-semibold text-red-700">差: +{(-result.savingVsHigh).toLocaleString()}円</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ シンプルな比較ツール。実際の市場連動プランは時間帯別の消費パターンで大きく変動し、契約条件（上下限・精算方式）でも変わります。
      </p>
    </section>
  );
}
