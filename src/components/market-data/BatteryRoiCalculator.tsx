"use client";

import { useState, useMemo } from "react";

export default function BatteryRoiCalculator() {
  const [capacityKwh, setCapacityKwh] = useState(200);
  const [costPerKwh, setCostPerKwh] = useState(75000);
  const [subsidyPct, setSubsidyPct] = useState(33);
  const [peakCutKw, setPeakCutKw] = useState(100);
  const [arbitrageProfit, setArbitrageProfit] = useState(50);

  const result = useMemo(() => {
    const initialCost = capacityKwh * costPerKwh;
    const subsidyAmount = initialCost * (subsidyPct / 100);
    const netCost = initialCost - subsidyAmount;
    // 効果1: ピークカット（基本料金削減）
    const basicChargeSaving = peakCutKw * 1716 * 12;
    // 効果2: 価格差益（夜間充電・昼間放電）
    const arbitrageAnnual = capacityKwh * arbitrageProfit * 365 * 0.7; // 70% utilization
    // 効果3: BCP価値（年30万円相当）
    const bcpValue = 300000;
    const annualBenefit = basicChargeSaving + arbitrageAnnual + bcpValue;
    const paybackYears = annualBenefit > 0 ? (netCost / annualBenefit).toFixed(1) : "—";
    return {
      initialCost: Math.round(initialCost),
      subsidyAmount: Math.round(subsidyAmount),
      netCost: Math.round(netCost),
      basicChargeSaving: Math.round(basicChargeSaving),
      arbitrageAnnual: Math.round(arbitrageAnnual),
      bcpValue,
      annualBenefit: Math.round(annualBenefit),
      paybackYears,
      tenYearNet: Math.round(annualBenefit * 10 - netCost),
    };
  }, [capacityKwh, costPerKwh, subsidyPct, peakCutKw, arbitrageProfit]);

  return (
    <section className="mt-6 rounded-xl border-2 border-yellow-300 bg-yellow-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🔋 蓄電池ROI試算ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        産業用蓄電池の容量・コスト・補助金・ピークカット効果・アービトラージ収益を入力して、投資回収期間と10年純益を試算します。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">蓄電池容量（kWh）</label>
          <input type="number" value={capacityKwh} onChange={(e) => setCapacityKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={50} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">単価（円/kWh）</label>
          <input type="number" value={costPerKwh} onChange={(e) => setCostPerKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={5000} />
          <p className="mt-1 text-xs text-slate-500">2026年相場：5〜10万円</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">補助金率（%）</label>
          <input type="number" value={subsidyPct} onChange={(e) => setSubsidyPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={75} />
          <p className="mt-1 text-xs text-slate-500">レジリエンス補助金1/3〜2/3</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">ピークカット効果（kW）</label>
          <input type="number" value={peakCutKw} onChange={(e) => setPeakCutKw(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={10} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">アービトラージ価格差（円/kWh）</label>
          <input type="number" value={arbitrageProfit} onChange={(e) => setArbitrageProfit(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={5} />
          <p className="mt-1 text-xs text-slate-500">夜間-昼間の差益</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-yellow-200 bg-white p-4">
          <p className="text-xs text-slate-500">初期投資（補助金後）</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.netCost.toLocaleString()}円</p>
          <p className="mt-1 text-xs text-emerald-700">補助金: ▲{result.subsidyAmount.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-yellow-200 bg-white p-4">
          <p className="text-xs text-slate-500">年間効果合計</p>
          <p className="mt-1 text-xl font-bold text-yellow-800">{result.annualBenefit.toLocaleString()}円</p>
          <p className="mt-1 text-xs text-slate-500">基本料金{result.basicChargeSaving.toLocaleString()}+価格差{result.arbitrageAnnual.toLocaleString()}+BCP{result.bcpValue.toLocaleString()}</p>
        </div>
        <div className="rounded-lg border border-yellow-200 bg-white p-4">
          <p className="text-xs text-slate-500">投資回収期間</p>
          <p className="mt-1 text-2xl font-bold text-yellow-900">{result.paybackYears}年</p>
        </div>
        <div className="rounded-lg border border-yellow-200 bg-white p-4">
          <p className="text-xs text-slate-500">10年累計純益</p>
          <p className={`mt-1 text-2xl font-bold ${result.tenYearNet >= 0 ? "text-emerald-700" : "text-red-700"}`}>
            {result.tenYearNet >= 0 ? "+" : ""}{result.tenYearNet.toLocaleString()}円
          </p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 概算試算。実際は使用パターン・電力単価・サイクル劣化・電池保守費で変動します。詳細試算はメーカー・ベンダーにご依頼ください。
      </p>
    </section>
  );
}
