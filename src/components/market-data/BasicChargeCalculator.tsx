"use client";

import { useState, useMemo } from "react";

// 契約区分別の基本料金単価（円/kW、税込概算）
const RATE_OPTIONS = [
  { label: "高圧（業務用）", rate: 1716 },
  { label: "高圧（産業用）", rate: 1485 },
  { label: "特別高圧（業務用）", rate: 1573 },
  { label: "特別高圧（産業用）", rate: 1342 },
];

export default function BasicChargeCalculator() {
  const [rateIdx, setRateIdx] = useState(0);
  const [contractKw, setContractKw] = useState(500);
  const [powerFactor, setPowerFactor] = useState(95);

  const result = useMemo(() => {
    const baseRate = RATE_OPTIONS[rateIdx].rate;
    // 力率割引：85%基準、±1%ごとに ±0.85% 変動
    const pfDiscount = (powerFactor - 85) * 0.0085;
    const adjustedRate = baseRate * (1 - pfDiscount);
    const monthly = adjustedRate * contractKw;
    const yearly = monthly * 12;
    return {
      adjustedRate: Math.round(adjustedRate),
      monthly: Math.round(monthly),
      yearly: Math.round(yearly),
      pfDiscountPct: (pfDiscount * 100).toFixed(2),
    };
  }, [rateIdx, contractKw, powerFactor]);

  return (
    <section className="mt-6 rounded-xl border-2 border-sky-300 bg-sky-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🧮 基本料金シミュレーター</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        契約電力（kW）と力率を入力すると、月額・年額の基本料金を試算します。力率割引・割増の効果も反映します。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">契約区分</label>
          <select
            value={rateIdx}
            onChange={(e) => setRateIdx(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {RATE_OPTIONS.map((o, i) => (
              <option key={i} value={i}>{o.label}（{o.rate}円/kW）</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">契約電力（kW）</label>
          <input
            type="number"
            value={contractKw}
            onChange={(e) => setContractKw(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={50}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">力率（%）</label>
          <input
            type="number"
            value={powerFactor}
            onChange={(e) => setPowerFactor(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={50}
            max={100}
          />
          <p className="mt-1 text-xs text-slate-500">85%基準、±1%で±0.85%変動</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-sky-200 bg-white p-4">
          <p className="text-xs text-slate-500">調整後単価</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.adjustedRate.toLocaleString()}円/kW</p>
          <p className="mt-1 text-xs text-slate-500">力率割引/割増 {result.pfDiscountPct}%</p>
        </div>
        <div className="rounded-lg border border-sky-200 bg-white p-4">
          <p className="text-xs text-slate-500">月額基本料金</p>
          <p className="mt-1 text-xl font-bold text-sky-700">{result.monthly.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-sky-200 bg-white p-4">
          <p className="text-xs text-slate-500">年額基本料金</p>
          <p className="mt-1 text-2xl font-bold text-sky-800">{result.yearly.toLocaleString()}円</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 単価は2026年時点の概算（税込）。実際の単価は電力会社・契約条件で変動します。詳細は契約書・請求書をご確認ください。
      </p>
    </section>
  );
}
