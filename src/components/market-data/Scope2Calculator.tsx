"use client";

import { useState, useMemo } from "react";

const AREA_FACTORS: Record<string, number> = {
  "北海道": 0.000596,
  "東北": 0.000457,
  "東京": 0.000441,
  "中部": 0.000425,
  "北陸": 0.000484,
  "関西": 0.000358,
  "中国": 0.000585,
  "四国": 0.000497,
  "九州": 0.000370,
  "沖縄": 0.000691,
};

export default function Scope2Calculator() {
  const [annualKwh, setAnnualKwh] = useState(1000000);
  const [area, setArea] = useState<keyof typeof AREA_FACTORS>("東京");
  const [renewablePct, setRenewablePct] = useState(0);
  const [certificatePrice, setCertificatePrice] = useState(0.6);

  const result = useMemo(() => {
    const factor = AREA_FACTORS[area];
    const locationBased = annualKwh * factor;
    const renewableKwh = annualKwh * (renewablePct / 100);
    const gridKwh = annualKwh - renewableKwh;
    const marketBased = gridKwh * factor;
    const certificateCost = renewableKwh * certificatePrice;
    return {
      locationBased: Math.round(locationBased),
      marketBased: Math.round(marketBased),
      diff: Math.round(locationBased - marketBased),
      certificateCost: Math.round(certificateCost),
      reductionPct: locationBased > 0 ? Math.round(((locationBased - marketBased) / locationBased) * 100) : 0,
    };
  }, [annualKwh, area, renewablePct, certificatePrice]);

  return (
    <section className="mt-6 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🌱 Scope2排出量計算機（Location/Market両対応）</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        年間電力使用量とエリアを入力し、Location-based・Market-basedの両方式でScope2排出量を試算。非化石証書活用時の削減効果も比較できます。CDP・TCFD報告に活用可能です。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間電力使用量（kWh）</label>
          <input type="number" value={annualKwh} onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={10000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">エリア</label>
          <select value={area} onChange={(e) => setArea(e.target.value as keyof typeof AREA_FACTORS)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            {Object.keys(AREA_FACTORS).map((a) => (<option key={a} value={a}>{a}</option>))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">再エネ・非化石比率（%）</label>
          <input type="number" value={renewablePct} onChange={(e) => setRenewablePct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={100} step={5} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">証書単価（円/kWh）</label>
          <input type="number" step="0.1" value={certificatePrice} onChange={(e) => setCertificatePrice(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">Location-based排出量</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.locationBased.toLocaleString()}</p>
          <p className="text-xs text-slate-500">t-CO2/年</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">Market-based排出量</p>
          <p className="mt-1 text-xl font-bold text-emerald-700">{result.marketBased.toLocaleString()}</p>
          <p className="text-xs text-slate-500">t-CO2/年（再エネ控除後）</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">削減効果</p>
          <p className="mt-1 text-xl font-bold text-green-700">{result.diff.toLocaleString()} t</p>
          <p className="text-xs text-slate-500">{result.reductionPct}% 削減</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">証書購入コスト</p>
          <p className="mt-1 text-xl font-bold text-amber-700">{result.certificateCost.toLocaleString()}円/年</p>
          <p className="text-xs text-slate-500">非化石証書概算</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 排出係数は環境省2024年度公表値を参照（kg-CO2/kWh）。実際の報告では電力会社ごとの係数または基礎排出係数の使用が推奨されます。
      </p>
    </section>
  );
}
