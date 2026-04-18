"use client";

import { useState, useMemo } from "react";

// D1〜D10の価格（円/kWh）
const DECILE_PRICE = [8.06, 8.43, 9.18, 9.61, 9.98, 10.69, 11.61, 12.39, 14.04, 20.59];
const D10_PRICE = DECILE_PRICE[9];
const AVG_PRICE = DECILE_PRICE.reduce((s, v) => s + v, 0) / DECILE_PRICE.length;
// D10は年間時間の上位10%なので約876時間
const D10_HOURS_PER_YEAR = 8760 * 0.1;

export default function DecileSavingCalculator() {
  const [annualKwh, setAnnualKwh] = useState(600000);
  const [d10Share, setD10Share] = useState(15);
  const [reductionPct, setReductionPct] = useState(5);

  const result = useMemo(() => {
    // D10時間帯に消費する量
    const d10Kwh = annualKwh * (d10Share / 100);
    // 削減量
    const reducedKwh = d10Kwh * (reductionPct / 100);
    // 削減効果（D10価格で評価）
    const annualSaving = reducedKwh * D10_PRICE;
    // ピークカット効果（基本料金へのインパクト概算：1kW削減=年間1,500円*12=18,000円目安）
    const peakKwReduction = (reducedKwh / D10_HOURS_PER_YEAR);
    const basicChargeSaving = peakKwReduction * 1500 * 12;
    return {
      d10Kwh: Math.round(d10Kwh),
      reducedKwh: Math.round(reducedKwh),
      annualSaving: Math.round(annualSaving),
      basicChargeSaving: Math.round(basicChargeSaving),
      total: Math.round(annualSaving + basicChargeSaving),
    };
  }, [annualKwh, d10Share, reductionPct]);

  return (
    <section className="mt-6 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">💡 デシル削減効果シミュレータ</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        D10（需要上位10%）時間帯の消費を抑えると、市場価格プレミアムと契約電力（デマンド）の両方を圧縮でき、削減効果は二重に発生します。自社の状況を入力して年間削減ポテンシャルを試算します。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
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
          <label className="block text-xs font-semibold text-slate-700">D10時間帯のシェア（%）</label>
          <input
            type="number"
            value={d10Share}
            onChange={(e) => setD10Share(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={5}
            max={50}
          />
          <p className="mt-1 text-xs text-slate-500">典型値：10〜20%</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">D10時の削減率（%）</label>
          <input
            type="number"
            value={reductionPct}
            onChange={(e) => setReductionPct(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            max={50}
            step={1}
          />
          <p className="mt-1 text-xs text-slate-500">空調制御で5%、設備停止で10%、生産シフトで20%</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">D10時間帯消費量</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.d10Kwh.toLocaleString()} kWh</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">削減kWh</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.reducedKwh.toLocaleString()} kWh</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">年間総削減額（電力量+基本料金）</p>
          <p className="mt-1 text-2xl font-bold text-emerald-700">{result.total.toLocaleString()}円</p>
          <p className="mt-1 text-xs text-slate-500">電力量{result.annualSaving.toLocaleString()}円 + 基本料金{result.basicChargeSaving.toLocaleString()}円</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ D10平均価格20.59円/kWhと、契約電力削減（年間18,000円/kW）を前提とした概算試算。実際の効果は契約形態・電力会社・設備で変動します。
      </p>
    </section>
  );
}
