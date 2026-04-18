"use client";

import { useState, useMemo } from "react";

export default function EvChargingDemandSim() {
  const [chargerCount, setChargerCount] = useState(2);
  const [chargerKw, setChargerKw] = useState(50);
  const [simultaneousPct, setSimultaneousPct] = useState(80);
  const [currentContractKw, setCurrentContractKw] = useState(100);
  const [basicChargeUnit, setBasicChargeUnit] = useState(1700);
  const [dailyChargeKwh, setDailyChargeKwh] = useState(150);
  const [unitRate, setUnitRate] = useState(22);

  const result = useMemo(() => {
    const totalChargerKw = chargerCount * chargerKw;
    const simultaneousKw = totalChargerKw * (simultaneousPct / 100);
    const newContractKw = Math.max(currentContractKw, currentContractKw + simultaneousKw);
    const additionalContractKw = newContractKw - currentContractKw;
    const additionalBasicCost = additionalContractKw * basicChargeUnit * 12;
    const annualEnergyCost = dailyChargeKwh * 365 * unitRate;
    const totalAdditionalCost = additionalBasicCost + annualEnergyCost;
    return {
      totalChargerKw,
      simultaneousKw: Math.round(simultaneousKw),
      newContractKw: Math.round(newContractKw),
      additionalContractKw: Math.round(additionalContractKw),
      additionalBasicCost: Math.round(additionalBasicCost),
      annualEnergyCost: Math.round(annualEnergyCost),
      totalAdditionalCost: Math.round(totalAdditionalCost),
    };
  }, [chargerCount, chargerKw, simultaneousPct, currentContractKw, basicChargeUnit, dailyChargeKwh, unitRate]);

  return (
    <section className="mt-6 rounded-xl border-2 border-cyan-300 bg-cyan-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🔌 EV充電 需要・基本料金影響シミュレーター</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        充電器の台数・出力・同時稼働率を入力し、契約電力増加と基本料金・電気代インパクトを試算します。EV導入計画段階の電力影響評価にご活用ください。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">充電器台数</label>
          <input type="number" value={chargerCount} onChange={(e) => setChargerCount(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">充電器出力（kW）</label>
          <input type="number" value={chargerKw} onChange={(e) => setChargerKw(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={5} />
          <p className="mt-1 text-xs text-slate-500">普通6kW/急速50kW/超急速150kW</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">同時稼働率（%）</label>
          <input type="number" value={simultaneousPct} onChange={(e) => setSimultaneousPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={100} step={5} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">現契約電力（kW）</label>
          <input type="number" value={currentContractKw} onChange={(e) => setCurrentContractKw(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">基本料金単価（円/kW・月）</label>
          <input type="number" value={basicChargeUnit} onChange={(e) => setBasicChargeUnit(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={50} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">1日充電量目安（kWh）</label>
          <input type="number" value={dailyChargeKwh} onChange={(e) => setDailyChargeKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={10} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">電力量単価（円/kWh）</label>
          <input type="number" value={unitRate} onChange={(e) => setUnitRate(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-cyan-200 bg-white p-4">
          <p className="text-xs text-slate-500">充電器合計出力</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.totalChargerKw} kW</p>
          <p className="text-xs text-slate-500">同時稼働{result.simultaneousKw}kW</p>
        </div>
        <div className="rounded-lg border border-cyan-200 bg-white p-4">
          <p className="text-xs text-slate-500">新契約電力</p>
          <p className="mt-1 text-xl font-bold text-cyan-700">{result.newContractKw} kW</p>
          <p className="text-xs text-slate-500">+{result.additionalContractKw}kW増</p>
        </div>
        <div className="rounded-lg border border-cyan-200 bg-white p-4">
          <p className="text-xs text-slate-500">基本料金 年間増加</p>
          <p className="mt-1 text-xl font-bold text-amber-700">{result.additionalBasicCost.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-cyan-200 bg-white p-4">
          <p className="text-xs text-slate-500">充電電力料 年間</p>
          <p className="mt-1 text-xl font-bold text-red-700">{result.annualEnergyCost.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">合計+{result.totalAdditionalCost.toLocaleString()}円/年</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 同時稼働率を下げる時間ずらし運用、深夜時間帯活用、出力制限等で基本料金影響を圧縮できます。詳細設計は電気主任技術者と協議推奨。
      </p>
    </section>
  );
}
