"use client";

import { useState, useMemo } from "react";

const INDUSTRIES = [
  { key: "factory", label: "工場・製造業", avgUnit: 19, kwhPer1mYen: 8500, note: "電力多消費、デマンド管理が鍵" },
  { key: "office", label: "オフィスビル", avgUnit: 22, kwhPer1mYen: 6200, note: "空調比率高、TOU料金活用余地" },
  { key: "retail", label: "小売店", avgUnit: 23, kwhPer1mYen: 5500, note: "夕方ピーク、冷凍需要" },
  { key: "restaurant", label: "飲食店", avgUnit: 24, kwhPer1mYen: 4800, note: "厨房・冷蔵設備が主役" },
  { key: "warehouse", label: "倉庫・物流", avgUnit: 20, kwhPer1mYen: 7800, note: "冷凍倉庫は別格、24時間稼働" },
  { key: "hotel", label: "ホテル・宿泊", avgUnit: 23, kwhPer1mYen: 5800, note: "客室稼働率と季節変動" },
  { key: "hospital", label: "病院・介護", avgUnit: 22, kwhPer1mYen: 6500, note: "24時間稼働、BCP重視" },
  { key: "school", label: "学校・教育", avgUnit: 23, kwhPer1mYen: 6000, note: "夏冬ピーク、長期休暇減" },
  { key: "datacenter", label: "データセンター", avgUnit: 18, kwhPer1mYen: 12000, note: "電力比率突出、PUE改善余地" },
];

export default function IndustryBenchmarkCalculator() {
  const [industry, setIndustry] = useState("office");
  const [annualBill, setAnnualBill] = useState(5000000);
  const [annualKwh, setAnnualKwh] = useState(220000);

  const benchmark = INDUSTRIES.find((i) => i.key === industry)!;

  const result = useMemo(() => {
    const yourUnit = annualKwh > 0 ? annualBill / annualKwh : 0;
    const expectedKwh = (annualBill / 1000000) * benchmark.kwhPer1mYen;
    const unitDiff = yourUnit - benchmark.avgUnit;
    const unitDiffPct = ((unitDiff / benchmark.avgUnit) * 100).toFixed(1);
    const potentialSaving = unitDiff > 0 ? Math.round(annualKwh * unitDiff) : 0;
    return {
      yourUnit: yourUnit.toFixed(2),
      expectedKwh: Math.round(expectedKwh),
      unitDiff: unitDiff.toFixed(2),
      unitDiffPct,
      potentialSaving,
    };
  }, [annualBill, annualKwh, benchmark]);

  return (
    <section className="mt-6 rounded-xl border-2 border-blue-300 bg-blue-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📊 業種別ベンチマーク比較ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        業種・年間電気代・年間kWhを入力すると、業種平均と比較した自社の単価・改善余地を試算します。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">業種</label>
          <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            {INDUSTRIES.map((i) => (
              <option key={i.key} value={i.key}>{i.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間電気代（円）</label>
          <input type="number" value={annualBill} onChange={(e) => setAnnualBill(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間使用量（kWh）</label>
          <input type="number" value={annualKwh} onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={10000} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs text-slate-500">自社単価</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.yourUnit}円/kWh</p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs text-slate-500">{benchmark.label}平均</p>
          <p className="mt-1 text-xl font-bold text-blue-700">{benchmark.avgUnit}円/kWh</p>
          <p className="mt-1 text-xs text-slate-500">{benchmark.note}</p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs text-slate-500">単価差（業種平均比）</p>
          <p className={`mt-1 text-xl font-bold ${Number(result.unitDiff) > 0 ? "text-red-700" : "text-emerald-700"}`}>
            {Number(result.unitDiff) > 0 ? "+" : ""}{result.unitDiff}円（{result.unitDiffPct}%）
          </p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs text-slate-500">改善余地（業種平均到達時）</p>
          <p className="mt-1 text-2xl font-bold text-emerald-800">{result.potentialSaving > 0 ? `▲${result.potentialSaving.toLocaleString()}円` : "—"}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 業種平均は2026年時点の本サイト集計値。実際の最適単価は契約規模・地域・時間帯パターンで変動します。複数社見積で実勢価格を確認してください。
      </p>
    </section>
  );
}
