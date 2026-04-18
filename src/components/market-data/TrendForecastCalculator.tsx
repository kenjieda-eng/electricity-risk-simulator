"use client";

import { useState, useMemo } from "react";

const SCENARIOS = [
  { name: "保守シナリオ", annualRate: 1.5, note: "省エネ・需要減少が進む" },
  { name: "標準シナリオ", annualRate: 3.0, note: "GX推進法・容量拠出金の影響" },
  { name: "高騰シナリオ", annualRate: 6.0, note: "燃料価格高騰・需給逼迫" },
];

export default function TrendForecastCalculator() {
  const [annualKwh, setAnnualKwh] = useState(600000);
  const [currentUnit, setCurrentUnit] = useState(20);

  const result = useMemo(() => {
    const baseAnnual = annualKwh * currentUnit;
    return SCENARIOS.map((s) => {
      const projections = [3, 5, 10].map((y) => {
        const factor = Math.pow(1 + s.annualRate / 100, y);
        const future = Math.round(baseAnnual * factor);
        const diff = Math.round(future - baseAnnual);
        return { year: y, future, diff };
      });
      return { ...s, projections };
    });
  }, [annualKwh, currentUnit]);

  return (
    <section className="mt-6 rounded-xl border-2 border-purple-300 bg-purple-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📊 中長期コスト予測ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        現在の年間使用量と単価を入力して、3〜10年後の電気代を3シナリオで予測します。中期経営計画・設備投資判断・脱炭素戦略の根拠に。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間使用量（kWh）</label>
          <input
            type="number"
            value={annualKwh}
            onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={10000}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">現在の総単価（円/kWh）</label>
          <input
            type="number"
            value={currentUnit}
            onChange={(e) => setCurrentUnit(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={1}
          />
          <p className="mt-1 text-xs text-slate-500">高圧20〜25円、低圧25〜35円が目安</p>
        </div>
      </div>
      <div className="mt-4 overflow-x-auto rounded-lg border border-purple-200 bg-white">
        <table className="min-w-[600px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-purple-100">
              <th className="border border-purple-200 px-3 py-2 text-left font-semibold">シナリオ</th>
              <th className="border border-purple-200 px-3 py-2 text-right font-semibold">3年後</th>
              <th className="border border-purple-200 px-3 py-2 text-right font-semibold">5年後</th>
              <th className="border border-purple-200 px-3 py-2 text-right font-semibold">10年後</th>
              <th className="border border-purple-200 px-3 py-2 text-left font-semibold">背景</th>
            </tr>
          </thead>
          <tbody>
            {result.map((row) => (
              <tr key={row.name} className="odd:bg-white even:bg-purple-50/40">
                <td className="border border-purple-200 px-3 py-2 font-semibold">{row.name}</td>
                {row.projections.map((p) => (
                  <td key={p.year} className="border border-purple-200 px-3 py-2 text-right">
                    <span className="block font-bold">{p.future.toLocaleString()}円</span>
                    <span className="block text-xs text-purple-700">+{p.diff.toLocaleString()}</span>
                  </td>
                ))}
                <td className="border border-purple-200 px-3 py-2 text-xs text-slate-700">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 経産省エネルギー基本計画・IEA・民間予測の年率を参考にした概算。実際の単価変動は燃料価格・制度改正・地政学要因で大きく変わります。
      </p>
    </section>
  );
}
