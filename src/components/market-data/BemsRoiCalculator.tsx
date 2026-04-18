"use client";

import { useState, useMemo } from "react";

export default function BemsRoiCalculator() {
  const [annualElectricityCost, setAnnualElectricityCost] = useState(60000000);
  const [reductionPct, setReductionPct] = useState(15);
  const [initialInvestment, setInitialInvestment] = useState(20000000);
  const [annualOpex, setAnnualOpex] = useState(1500000);
  const [subsidyPct, setSubsidyPct] = useState(33);

  const result = useMemo(() => {
    const grossSaving = annualElectricityCost * (reductionPct / 100);
    const netSaving = grossSaving - annualOpex;
    const effectiveInvestment = initialInvestment * (1 - subsidyPct / 100);
    const paybackYears = netSaving > 0 ? effectiveInvestment / netSaving : 0;
    const tenYearNet = netSaving * 10 - effectiveInvestment;
    const subsidyAmount = initialInvestment * (subsidyPct / 100);
    return {
      grossSaving: Math.round(grossSaving),
      netSaving: Math.round(netSaving),
      effectiveInvestment: Math.round(effectiveInvestment),
      paybackYears: paybackYears > 0 ? paybackYears.toFixed(1) : "—",
      tenYearNet: Math.round(tenYearNet),
      subsidyAmount: Math.round(subsidyAmount),
    };
  }, [annualElectricityCost, reductionPct, initialInvestment, annualOpex, subsidyPct]);

  return (
    <section className="mt-6 rounded-xl border-2 border-blue-300 bg-blue-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📊 BEMS導入ROI計算機</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        BEMS（ビルエネルギーマネジメントシステム）導入時の投資回収期間と10年累計効果を試算します。補助金活用も加味した実質投資額で計算可能です。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">現状の年間電気代（円）</label>
          <input type="number" value={annualElectricityCost} onChange={(e) => setAnnualElectricityCost(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">削減見込み率（%）</label>
          <input type="number" value={reductionPct} onChange={(e) => setReductionPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={50} />
          <p className="mt-1 text-xs text-slate-500">標準10-20%</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">初期投資額（円）</label>
          <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間運用コスト（円）</label>
          <input type="number" value={annualOpex} onChange={(e) => setAnnualOpex(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={50000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">補助金カバー率（%）</label>
          <input type="number" value={subsidyPct} onChange={(e) => setSubsidyPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={75} />
          <p className="mt-1 text-xs text-slate-500">標準1/3〜1/2</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs text-slate-500">年間削減額（粗）</p>
          <p className="mt-1 text-xl font-bold text-blue-700">{result.grossSaving.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">運用控除後{result.netSaving.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs text-slate-500">補助金活用</p>
          <p className="mt-1 text-xl font-bold text-emerald-700">{result.subsidyAmount.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">実質投資{result.effectiveInvestment.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs text-slate-500">投資回収期間</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{result.paybackYears} 年</p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs text-slate-500">10年累計純効果</p>
          <p className="mt-1 text-xl font-bold text-emerald-800">{result.tenYearNet.toLocaleString()}円</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 試算はあくまで概算。実際のROIは事業者環境・運用品質・電力単価変動で変動します。複数ベンダー見積取得を推奨。
      </p>
    </section>
  );
}
