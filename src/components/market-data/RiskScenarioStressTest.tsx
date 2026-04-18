"use client";

import { useState, useMemo } from "react";

const SCENARIOS = [
  { key: "heatwave", label: "猛暑", impact: 1.15, note: "夏の冷房需要急増、JEPX価格1.3倍" },
  { key: "coldwave", label: "寒波", impact: 1.25, note: "暖房需要増＋太陽光低下、価格2.6倍も" },
  { key: "fuelSurge", label: "燃料費高騰", impact: 1.40, note: "LNG・石炭の国際価格急騰" },
  { key: "yenWeak", label: "円安", impact: 1.20, note: "輸入燃料コスト直撃" },
  { key: "geopolitical", label: "地政学リスク", impact: 1.50, note: "戦争・紛争による供給途絶" },
  { key: "disaster", label: "災害", impact: 1.30, note: "発電所被災・連系線途絶" },
  { key: "tightSupply", label: "需給逼迫", impact: 1.35, note: "予備率3%以下、警報級" },
];

export default function RiskScenarioStressTest() {
  const [annualBill, setAnnualBill] = useState(60000000);
  const [exposureMonths, setExposureMonths] = useState(3);

  const result = useMemo(() => {
    const monthlyBill = annualBill / 12;
    return SCENARIOS.map((s) => {
      const monthlyImpact = monthlyBill * (s.impact - 1);
      const periodImpact = monthlyImpact * exposureMonths;
      return { ...s, monthlyImpact: Math.round(monthlyImpact), periodImpact: Math.round(periodImpact) };
    });
  }, [annualBill, exposureMonths]);

  const totalIfAllHit = result.reduce((s, r) => s + r.periodImpact, 0);

  return (
    <section className="mt-6 rounded-xl border-2 border-red-300 bg-red-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">⚠ 7シナリオ・ストレステストツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        年間電気代と各リスクシナリオの被曝月数を入力して、シナリオ別の追加コストを試算します。経営層向けのリスク評価・予算編成・BCP立案に活用してください。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間電気代（円）</label>
          <input type="number" value={annualBill} onChange={(e) => setAnnualBill(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1000000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">想定被曝月数（リスク発生期間）</label>
          <input type="number" value={exposureMonths} onChange={(e) => setExposureMonths(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={1} max={12} />
          <p className="mt-1 text-xs text-slate-500">過去事例：1〜6ヶ月</p>
        </div>
      </div>
      <div className="mt-4 overflow-x-auto rounded-lg border border-red-200 bg-white">
        <table className="min-w-[600px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-red-100">
              <th className="border border-red-200 px-3 py-2 text-left font-semibold">シナリオ</th>
              <th className="border border-red-200 px-3 py-2 text-right font-semibold">月額影響</th>
              <th className="border border-red-200 px-3 py-2 text-right font-semibold">{exposureMonths}ヶ月累計</th>
              <th className="border border-red-200 px-3 py-2 text-left font-semibold">背景</th>
            </tr>
          </thead>
          <tbody>
            {result.map((row) => (
              <tr key={row.key} className="odd:bg-white even:bg-red-50/40">
                <td className="border border-red-200 px-3 py-2 font-semibold">{row.label}</td>
                <td className="border border-red-200 px-3 py-2 text-right text-red-700">+{row.monthlyImpact.toLocaleString()}円</td>
                <td className="border border-red-200 px-3 py-2 text-right font-bold text-red-800">+{row.periodImpact.toLocaleString()}円</td>
                <td className="border border-red-200 px-3 py-2 text-xs text-slate-700">{row.note}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-red-200 font-bold">
              <td colSpan={2} className="border border-red-200 px-3 py-2">全シナリオ同時発生時の総追加コスト</td>
              <td className="border border-red-200 px-3 py-2 text-right text-red-900">+{totalIfAllHit.toLocaleString()}円</td>
              <td className="border border-red-200 px-3 py-2 text-xs">最悪ケース</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 各シナリオ単独で発生した場合の影響額。複数シナリオ同時発生時は累積効果でさらに上振れする可能性があります。
      </p>
    </section>
  );
}
