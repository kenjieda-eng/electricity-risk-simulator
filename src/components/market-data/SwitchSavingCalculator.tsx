"use client";

import { useState, useMemo } from "react";

export default function SwitchSavingCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(500000);
  const [reductionPct, setReductionPct] = useState(8);
  const [switchCost, setSwitchCost] = useState(50000);
  const [cancellationFee, setCancellationFee] = useState(0);

  const result = useMemo(() => {
    const yearlyBill = monthlyBill * 12;
    const annualSaving = yearlyBill * (reductionPct / 100);
    const firstYearNet = annualSaving - switchCost - cancellationFee;
    const threeYearNet = annualSaving * 3 - switchCost - cancellationFee;
    const fiveYearNet = annualSaving * 5 - switchCost - cancellationFee;
    const paybackMonths = annualSaving > 0
      ? Math.ceil(((switchCost + cancellationFee) / annualSaving) * 12)
      : null;
    return {
      yearlyBill,
      annualSaving: Math.round(annualSaving),
      firstYearNet: Math.round(firstYearNet),
      threeYearNet: Math.round(threeYearNet),
      fiveYearNet: Math.round(fiveYearNet),
      paybackMonths,
    };
  }, [monthlyBill, reductionPct, switchCost, cancellationFee]);

  return (
    <section className="mt-6 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">💰 電力会社切替の削減額試算ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        現在の料金と切替後の削減率、手続き費用を入力して、切替による1年・3年・5年の純益を試算します。切替判断の損益分岐計算にご活用ください。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">現在の月額電気代（円）</label>
          <input
            type="number"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={10000}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">想定削減率（%）</label>
          <input
            type="number"
            value={reductionPct}
            onChange={(e) => setReductionPct(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            max={50}
          />
          <p className="mt-1 text-xs text-slate-500">高圧で5〜15%が目安</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">切替手続き・内部コスト（円）</label>
          <input
            type="number"
            value={switchCost}
            onChange={(e) => setSwitchCost(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={10000}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">現契約の違約金（円）</label>
          <input
            type="number"
            value={cancellationFee}
            onChange={(e) => setCancellationFee(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={10000}
          />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">年間削減額</p>
          <p className="mt-1 text-xl font-bold text-emerald-700">{result.annualSaving.toLocaleString()}円</p>
          <p className="mt-1 text-xs text-slate-500">
            回収期間: {result.paybackMonths ? `${result.paybackMonths}ヶ月` : "—"}
          </p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">1年後の純益</p>
          <p className={`mt-1 text-xl font-bold ${result.firstYearNet >= 0 ? "text-emerald-700" : "text-red-700"}`}>
            {result.firstYearNet >= 0 ? "+" : ""}{result.firstYearNet.toLocaleString()}円
          </p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">3年後の純益</p>
          <p className={`mt-1 text-xl font-bold ${result.threeYearNet >= 0 ? "text-emerald-700" : "text-red-700"}`}>
            {result.threeYearNet >= 0 ? "+" : ""}{result.threeYearNet.toLocaleString()}円
          </p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">5年後の純益</p>
          <p className={`mt-1 text-xl font-bold ${result.fiveYearNet >= 0 ? "text-emerald-700" : "text-red-700"}`}>
            {result.fiveYearNet >= 0 ? "+" : ""}{result.fiveYearNet.toLocaleString()}円
          </p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 削減率は切替先の見積比較で決まります。複数社の見積取得を推奨。違約金・新規契約条件（期間・違約金条項）も事前確認が重要です。
      </p>
    </section>
  );
}
