"use client";

import { useState, useMemo } from "react";

// 月別スパイク（50円超）発生コマ数（FY2010〜2025の月別合計）
const SPIKE_MONTH_RATE = [777, 17, 87, 0, 0, 49, 41, 121, 92, 6, 8, 52];
const TOTAL_HALF_HOUR_PER_MONTH = 30 * 48;
// スパイク時の平均価格（保守的推定。50円〜250円の幅を反映）
const SPIKE_AVG_PRICE = 80;

export default function SpikeRiskCalculator() {
  const [monthlyKwh, setMonthlyKwh] = useState(50000);
  const [normalUnit, setNormalUnit] = useState(15);
  const [spikeShare, setSpikeShare] = useState(20);

  const result = useMemo(() => {
    const annualKwh = monthlyKwh * 12;
    const totalSpikeRatio =
      SPIKE_MONTH_RATE.reduce((s, n) => s + n, 0) / (TOTAL_HALF_HOUR_PER_MONTH * 12);
    // ユーザー消費のうち「スパイク時間帯と重なる割合」想定
    const exposureRatio = totalSpikeRatio * (spikeShare / 100) * 100;
    const exposedKwh = annualKwh * exposureRatio;
    const normalCost = annualKwh * normalUnit;
    const exposedCost =
      (annualKwh - exposedKwh) * normalUnit + exposedKwh * SPIKE_AVG_PRICE;
    const additional = exposedCost - normalCost;
    return {
      annualKwh,
      additional: Math.round(additional),
      ratio: ((additional / normalCost) * 100).toFixed(1),
    };
  }, [monthlyKwh, normalUnit, spikeShare]);

  return (
    <section className="mt-6 rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🧮 スパイク被曝リスク試算ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        市場連動プランを契約している場合、価格スパイク時間帯にどれだけ消費が重なるかで年間コストが大きく変わります。月間使用量・通常単価・スパイク時間との重なり度を入力して、年間追加コストを試算します。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">月間使用量（kWh）</label>
          <input
            type="number"
            value={monthlyKwh}
            onChange={(e) => setMonthlyKwh(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={1000}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">通常時の単価（円/kWh）</label>
          <input
            type="number"
            value={normalUnit}
            onChange={(e) => setNormalUnit(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={1}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">スパイク時間との重なり度（%）</label>
          <input
            type="number"
            value={spikeShare}
            onChange={(e) => setSpikeShare(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            max={100}
            step={5}
          />
          <p className="mt-1 text-xs text-slate-500">10%＝低重なり、30%＝典型的、50%＝夕方ピーク集中</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-amber-200 bg-white p-4">
        <p className="text-sm text-slate-700">想定年間使用量：<span className="font-bold">{result.annualKwh.toLocaleString()} kWh</span></p>
        <p className="mt-2 text-sm text-slate-700">スパイクによる年間追加コスト：</p>
        <p className="mt-1 text-3xl font-bold text-red-600">
          {result.additional >= 0 ? "+" : ""}{result.additional.toLocaleString()}円
          <span className="ml-2 text-base font-medium text-slate-600">（通常コスト比 +{result.ratio}%）</span>
        </p>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 過去16年のJEPXスパイク発生実績（50円超コマ）と平均スパイク価格80円/kWhを前提とした概算試算。実際のコストは契約条件・年度・地域・使用パターンで変動します。
      </p>
    </section>
  );
}
