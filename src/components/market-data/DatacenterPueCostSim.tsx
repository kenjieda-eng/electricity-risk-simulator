"use client";

import { useState, useMemo } from "react";

export default function DatacenterPueCostSim() {
  const [itLoadKw, setItLoadKw] = useState(1000);
  const [pueCurrent, setPueCurrent] = useState(1.6);
  const [pueTarget, setPueTarget] = useState(1.3);
  const [unitRate, setUnitRate] = useState(20);

  const result = useMemo(() => {
    const annualHours = 8760;
    const itAnnualKwh = itLoadKw * annualHours;
    const totalCurrentKwh = itAnnualKwh * pueCurrent;
    const totalTargetKwh = itAnnualKwh * pueTarget;
    const savedKwh = totalCurrentKwh - totalTargetKwh;
    const currentCost = totalCurrentKwh * unitRate;
    const targetCost = totalTargetKwh * unitRate;
    const annualSaving = currentCost - targetCost;
    const co2Saved = savedKwh * 0.45 / 1000;
    return {
      itAnnualKwh: Math.round(itAnnualKwh),
      totalCurrentKwh: Math.round(totalCurrentKwh),
      totalTargetKwh: Math.round(totalTargetKwh),
      savedKwh: Math.round(savedKwh),
      currentCost: Math.round(currentCost),
      targetCost: Math.round(targetCost),
      annualSaving: Math.round(annualSaving),
      tenYearSaving: Math.round(annualSaving * 10),
      co2Saved: Math.round(co2Saved),
    };
  }, [itLoadKw, pueCurrent, pueTarget, unitRate]);

  return (
    <section className="mt-6 rounded-xl border-2 border-violet-300 bg-violet-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🖥 データセンターPUE改善コスト試算</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        IT負荷とPUE現状値・目標値を入力し、PUE改善による年間電気代削減・CO2削減効果を試算します。冷却最適化投資のビジネスケース構築にご活用ください。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">IT負荷（kW）</label>
          <input type="number" value={itLoadKw} onChange={(e) => setItLoadKw(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">現状PUE</label>
          <input type="number" step="0.05" value={pueCurrent} onChange={(e) => setPueCurrent(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={1} max={3} />
          <p className="mt-1 text-xs text-slate-500">業界平均1.5-1.8</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">目標PUE</label>
          <input type="number" step="0.05" value={pueTarget} onChange={(e) => setPueTarget(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={1} max={3} />
          <p className="mt-1 text-xs text-slate-500">最先端1.1-1.3</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">電力単価（円/kWh）</label>
          <input type="number" value={unitRate} onChange={(e) => setUnitRate(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-violet-200 bg-white p-4">
          <p className="text-xs text-slate-500">現状年間電力</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{(result.totalCurrentKwh / 1000).toLocaleString()} MWh</p>
          <p className="text-xs text-slate-500">{result.currentCost.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-violet-200 bg-white p-4">
          <p className="text-xs text-slate-500">目標年間電力</p>
          <p className="mt-1 text-xl font-bold text-violet-700">{(result.totalTargetKwh / 1000).toLocaleString()} MWh</p>
          <p className="text-xs text-slate-500">{result.targetCost.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-violet-200 bg-white p-4">
          <p className="text-xs text-slate-500">年間削減効果</p>
          <p className="mt-1 text-xl font-bold text-emerald-700">{result.annualSaving.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">10年累計{result.tenYearSaving.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-violet-200 bg-white p-4">
          <p className="text-xs text-slate-500">CO2削減量</p>
          <p className="mt-1 text-xl font-bold text-green-700">{result.co2Saved.toLocaleString()} t-CO2/年</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ PUE改善には外気冷却・液冷・温度監視最適化が有効。投資額は規模により1億円〜10億円規模。詳細は専門設計事務所と協議推奨。
      </p>
    </section>
  );
}
