"use client";

import { useState, useMemo } from "react";

const COUNTRY_PRICES: Record<string, { unit: number; currency: string; jpyRate: number }> = {
  "日本": { unit: 22, currency: "JPY", jpyRate: 1 },
  "米国": { unit: 0.10, currency: "USD", jpyRate: 150 },
  "ドイツ": { unit: 0.25, currency: "EUR", jpyRate: 165 },
  "英国": { unit: 0.22, currency: "GBP", jpyRate: 190 },
  "フランス": { unit: 0.18, currency: "EUR", jpyRate: 165 },
  "中国": { unit: 0.08, currency: "USD", jpyRate: 150 },
  "韓国": { unit: 0.12, currency: "USD", jpyRate: 150 },
  "台湾": { unit: 0.11, currency: "USD", jpyRate: 150 },
  "ベトナム": { unit: 0.08, currency: "USD", jpyRate: 150 },
  "タイ": { unit: 0.11, currency: "USD", jpyRate: 150 },
  "インド": { unit: 0.09, currency: "USD", jpyRate: 150 },
  "オーストラリア": { unit: 0.20, currency: "USD", jpyRate: 150 },
  "メキシコ": { unit: 0.10, currency: "USD", jpyRate: 150 },
  "ブラジル": { unit: 0.13, currency: "USD", jpyRate: 150 },
};

export default function GlobalElectricityComparator() {
  const [annualKwh, setAnnualKwh] = useState(5000000);
  const [country1, setCountry1] = useState("日本");
  const [country2, setCountry2] = useState("米国");
  const [country3, setCountry3] = useState("ドイツ");

  const result = useMemo(() => {
    const calc = (country: string) => {
      const p = COUNTRY_PRICES[country];
      const localCost = annualKwh * p.unit;
      const jpyCost = localCost * p.jpyRate;
      return { country, localCost, jpyCost: Math.round(jpyCost), unit: p.unit, currency: p.currency };
    };
    return [calc(country1), calc(country2), calc(country3)];
  }, [annualKwh, country1, country2, country3]);

  const minJpy = Math.min(...result.map((r) => r.jpyCost));

  return (
    <section className="mt-6 rounded-xl border-2 border-indigo-300 bg-indigo-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🌍 海外3拠点 電力コスト比較</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        年間電力使用量を入力し、3カ国の年間電力コストを円換算で比較。海外拠点の立地検討・グローバル戦略立案にご活用ください。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間電力使用量（kWh）</label>
          <input type="number" value={annualKwh} onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">国1</label>
          <select value={country1} onChange={(e) => setCountry1(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            {Object.keys(COUNTRY_PRICES).map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">国2</label>
          <select value={country2} onChange={(e) => setCountry2(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            {Object.keys(COUNTRY_PRICES).map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">国3</label>
          <select value={country3} onChange={(e) => setCountry3(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            {Object.keys(COUNTRY_PRICES).map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {result.map((r) => (
          <div key={r.country} className={`rounded-lg border p-4 ${r.jpyCost === minJpy ? "border-emerald-400 bg-emerald-50" : "border-indigo-200 bg-white"}`}>
            <p className="text-sm font-semibold text-slate-900">{r.country}</p>
            <p className="mt-1 text-xs text-slate-500">{r.unit} {r.currency}/kWh</p>
            <p className="mt-1 text-xl font-bold text-slate-900">{r.jpyCost.toLocaleString()}円/年</p>
            {r.jpyCost === minJpy && (<p className="mt-1 text-xs font-semibold text-emerald-700">★ 最安</p>)}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 産業用標準単価の代表値・為替レートは2026年4月時点の概算。実際の現地電気代は契約条件・需要規模・補助制度で大きく変動します。
      </p>
    </section>
  );
}
