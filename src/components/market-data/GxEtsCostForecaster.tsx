"use client";

import { useState, useMemo } from "react";

export default function GxEtsCostForecaster() {
  const [annualEmission, setAnnualEmission] = useState(50000);
  const [freeAllocationPct, setFreeAllocationPct] = useState(70);
  const [carbonPrice, setCarbonPrice] = useState(3000);
  const [reductionTargetPct, setReductionTargetPct] = useState(20);

  const result = useMemo(() => {
    const freeAllocation = annualEmission * (freeAllocationPct / 100);
    const purchaseRequirement = Math.max(0, annualEmission - freeAllocation);
    const annualCost = purchaseRequirement * carbonPrice;
    const targetEmission = annualEmission * (1 - reductionTargetPct / 100);
    const targetPurchase = Math.max(0, targetEmission - freeAllocation);
    const targetCost = targetPurchase * carbonPrice;
    const savedCost = annualCost - targetCost;
    return {
      freeAllocation: Math.round(freeAllocation),
      purchaseRequirement: Math.round(purchaseRequirement),
      annualCost: Math.round(annualCost),
      targetCost: Math.round(targetCost),
      savedCost: Math.round(savedCost),
      fiveYearCost: Math.round(annualCost * 5),
    };
  }, [annualEmission, freeAllocationPct, carbonPrice, reductionTargetPct]);

  return (
    <section className="mt-6 rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">⚖ GX-ETSコスト予測ツール（2026年度本格稼働）</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        年間CO2排出量と無償割当比率、炭素価格を入力し、GX-ETS（排出量取引制度）の追加コスト負担を予測します。削減目標達成時のコスト削減効果も比較可能です。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間CO2排出量（t-CO2）</label>
          <input type="number" value={annualEmission} onChange={(e) => setAnnualEmission(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">無償割当比率（%）</label>
          <input type="number" value={freeAllocationPct} onChange={(e) => setFreeAllocationPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={100} />
          <p className="mt-1 text-xs text-slate-500">2026年度初期：60-80%目安</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">炭素価格（円/t-CO2）</label>
          <input type="number" value={carbonPrice} onChange={(e) => setCarbonPrice(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={500} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">削減目標（%）</label>
          <input type="number" value={reductionTargetPct} onChange={(e) => setReductionTargetPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={100} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-xs text-slate-500">無償割当量</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.freeAllocation.toLocaleString()} t</p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-xs text-slate-500">市場購入必要量</p>
          <p className="mt-1 text-xl font-bold text-amber-700">{result.purchaseRequirement.toLocaleString()} t</p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-xs text-slate-500">年間追加コスト</p>
          <p className="mt-1 text-xl font-bold text-red-700">{result.annualCost.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">5年累計：{result.fiveYearCost.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-xs text-slate-500">削減目標達成時の節約</p>
          <p className="mt-1 text-xl font-bold text-green-700">{result.savedCost.toLocaleString()}円/年</p>
          <p className="text-xs text-slate-500">vs 削減なし</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 制度詳細は2026年度開始時点の想定。炭素価格は政府検討中の水準（3,000-10,000円/t-CO2レンジ）を参考に試算。
      </p>
    </section>
  );
}
