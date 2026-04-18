"use client";

import { useState, useMemo } from "react";

type LoadItem = { name: string; kw: number; hours: number; critical: boolean };

const DEFAULT_ITEMS: LoadItem[] = [
  { name: "サーバー・ネットワーク", kw: 20, hours: 72, critical: true },
  { name: "照明（最低限）", kw: 5, hours: 24, critical: true },
  { name: "冷蔵冷凍庫", kw: 15, hours: 72, critical: true },
  { name: "事務機器（PC等）", kw: 8, hours: 8, critical: false },
  { name: "空調（部分稼働）", kw: 30, hours: 12, critical: false },
];

export default function BcpLoadSizer() {
  const [items, setItems] = useState<LoadItem[]>(DEFAULT_ITEMS);
  const [scenario, setScenario] = useState<"critical" | "all">("critical");

  const result = useMemo(() => {
    const target = scenario === "critical" ? items.filter((i) => i.critical) : items;
    const totalKw = target.reduce((sum, i) => sum + i.kw, 0);
    const totalKwh = target.reduce((sum, i) => sum + i.kw * i.hours, 0);
    const batteryRecommendation = Math.ceil(totalKwh * 1.2);
    const generatorFuel = Math.round(totalKwh * 0.3);
    return { totalKw, totalKwh, batteryRecommendation, generatorFuel };
  }, [items, scenario]);

  const updateItem = (idx: number, field: keyof LoadItem, value: string | boolean | number) => {
    const next = [...items];
    if (field === "name") next[idx].name = value as string;
    else if (field === "critical") next[idx].critical = value as boolean;
    else next[idx][field] = Number(value) || 0;
    setItems(next);
  };

  return (
    <section className="mt-6 rounded-xl border-2 border-red-300 bg-red-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">⚡ BCP電力負荷サイザー</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        事業継続に必要な負荷を一覧化し、停電時の必要電力量・推奨蓄電池容量・非常用発電機の燃料量を試算します。BCP計画の電力要件定義にご活用ください。
      </p>
      <div className="mt-4">
        <label className="block text-xs font-semibold text-slate-700">想定シナリオ</label>
        <div className="mt-1 flex gap-3">
          <label className="text-sm"><input type="radio" checked={scenario === "critical"} onChange={() => setScenario("critical")} /> クリティカル負荷のみ</label>
          <label className="text-sm"><input type="radio" checked={scenario === "all"} onChange={() => setScenario("all")} /> 全負荷</label>
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-xs">
          <thead className="bg-red-100">
            <tr><th className="px-2 py-1 text-left">負荷名</th><th className="px-2 py-1">電力(kW)</th><th className="px-2 py-1">必要時間(h)</th><th className="px-2 py-1">必須</th></tr>
          </thead>
          <tbody>
            {items.map((it, idx) => (
              <tr key={idx} className="border-b border-red-100">
                <td className="px-2 py-1"><input value={it.name} onChange={(e) => updateItem(idx, "name", e.target.value)} className="w-full rounded border border-slate-300 px-2 py-1" /></td>
                <td className="px-2 py-1"><input type="number" value={it.kw} onChange={(e) => updateItem(idx, "kw", e.target.value)} className="w-20 rounded border border-slate-300 px-2 py-1" /></td>
                <td className="px-2 py-1"><input type="number" value={it.hours} onChange={(e) => updateItem(idx, "hours", e.target.value)} className="w-20 rounded border border-slate-300 px-2 py-1" /></td>
                <td className="px-2 py-1 text-center"><input type="checkbox" checked={it.critical} onChange={(e) => updateItem(idx, "critical", e.target.checked)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-red-200 bg-white p-4">
          <p className="text-xs text-slate-500">必要瞬時電力</p>
          <p className="mt-1 text-xl font-bold text-red-700">{result.totalKw} kW</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-white p-4">
          <p className="text-xs text-slate-500">必要総電力量</p>
          <p className="mt-1 text-xl font-bold text-red-700">{result.totalKwh.toLocaleString()} kWh</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-white p-4">
          <p className="text-xs text-slate-500">推奨蓄電池容量</p>
          <p className="mt-1 text-xl font-bold text-amber-700">{result.batteryRecommendation.toLocaleString()} kWh</p>
          <p className="text-xs text-slate-500">余裕度1.2倍</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-white p-4">
          <p className="text-xs text-slate-500">発電機燃料量目安</p>
          <p className="mt-1 text-xl font-bold text-slate-700">{result.generatorFuel.toLocaleString()} L</p>
          <p className="text-xs text-slate-500">A重油換算</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ A重油発電量は0.3kWh/L換算。蓄電池放電深度・PCS出力で実用容量は変動します。詳細設計は専門業者と協議してください。
      </p>
    </section>
  );
}
