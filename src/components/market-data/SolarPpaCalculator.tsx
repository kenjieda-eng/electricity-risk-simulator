"use client";

import { useState, useMemo } from "react";

export default function SolarPpaCalculator() {
  const [roofM2, setRoofM2] = useState(1000);
  const [pvCapacityKwPerM2, setPvCapacityKwPerM2] = useState(0.15);
  const [annualGenPerKw, setAnnualGenPerKw] = useState(1100);
  const [selfConsumptionPct, setSelfConsumptionPct] = useState(80);
  const [retailUnit, setRetailUnit] = useState(22);
  const [ppaUnit, setPpaUnit] = useState(15);

  const result = useMemo(() => {
    const pvKw = roofM2 * pvCapacityKwPerM2;
    const annualKwh = pvKw * annualGenPerKw;
    const selfConsumedKwh = annualKwh * (selfConsumptionPct / 100);
    const surplusKwh = annualKwh - selfConsumedKwh;
    // PPA契約の場合（初期投資ゼロ・PPA単価で支払い）
    const ppaSaving = selfConsumedKwh * (retailUnit - ppaUnit);
    const surplusRevenue = surplusKwh * 8; // 余剰売電8円/kWh
    const annualBenefit = ppaSaving + surplusRevenue;
    // CO2削減（電力排出係数0.45kg-CO2/kWh）
    const co2Saved = annualKwh * 0.45;
    return {
      pvKw: pvKw.toFixed(0),
      annualKwh: Math.round(annualKwh),
      selfConsumedKwh: Math.round(selfConsumedKwh),
      surplusKwh: Math.round(surplusKwh),
      ppaSaving: Math.round(ppaSaving),
      surplusRevenue: Math.round(surplusRevenue),
      annualBenefit: Math.round(annualBenefit),
      twentyYear: Math.round(annualBenefit * 20),
      co2Saved: Math.round(co2Saved / 1000),
    };
  }, [roofM2, pvCapacityKwPerM2, annualGenPerKw, selfConsumptionPct, retailUnit, ppaUnit]);

  return (
    <section className="mt-6 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">☀ 太陽光PPA・自家消費試算ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        屋根面積・PPA単価・自家消費率を入力して、PPA契約の年間削減額・CO2削減量を試算します。初期投資ゼロのPPAスキームの経済性が確認できます。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">設置可能屋根面積（㎡）</label>
          <input type="number" value={roofM2} onChange={(e) => setRoofM2(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">㎡あたり設置kW</label>
          <input type="number" step="0.01" value={pvCapacityKwPerM2} onChange={(e) => setPvCapacityKwPerM2(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} />
          <p className="mt-1 text-xs text-slate-500">標準：0.15kW/㎡</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">kWあたり年間発電量</label>
          <input type="number" value={annualGenPerKw} onChange={(e) => setAnnualGenPerKw(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={50} />
          <p className="mt-1 text-xs text-slate-500">本州標準：1,100kWh/kW</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">自家消費率（%）</label>
          <input type="number" value={selfConsumptionPct} onChange={(e) => setSelfConsumptionPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={100} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">通常電力単価（円/kWh）</label>
          <input type="number" value={retailUnit} onChange={(e) => setRetailUnit(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">PPA単価（円/kWh）</label>
          <input type="number" value={ppaUnit} onChange={(e) => setPpaUnit(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">PV設置容量</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.pvKw} kW</p>
          <p className="text-xs text-slate-500">年間発電{result.annualKwh.toLocaleString()} kWh</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">PPA削減効果</p>
          <p className="mt-1 text-xl font-bold text-emerald-700">{result.annualBenefit.toLocaleString()}円/年</p>
          <p className="text-xs text-slate-500">削減{result.ppaSaving.toLocaleString()}+売電{result.surplusRevenue.toLocaleString()}</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">20年累計効果</p>
          <p className="mt-1 text-2xl font-bold text-emerald-800">{result.twentyYear.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">年間CO2削減量</p>
          <p className="mt-1 text-xl font-bold text-green-700">{result.co2Saved.toLocaleString()} t-CO2</p>
          <p className="text-xs text-slate-500">Scope2マーケット基準</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ PPA契約は通常15〜20年。前提条件・契約形態により実額は変動します。複数PPA事業者の見積比較を推奨。
      </p>
    </section>
  );
}
