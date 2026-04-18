"use client";

import { useState, useMemo } from "react";

// 気温帯別需要・価格（30℃+の値）
const HOT_DEMAND_INDEX = 116056 / 95795; // 30℃+の需要 / 10-15℃基準需要
const HOT_PRICE_PREMIUM = 14.3 - 9.5; // 30℃+価格 - 通常価格

export default function HeatRiskCalculator() {
  const [annualHotDays, setAnnualHotDays] = useState(25);
  const [hourlyKwh, setHourlyKwh] = useState(100);
  const [hotHoursPerDay, setHotHoursPerDay] = useState(8);
  const [coolingShare, setCoolingShare] = useState(40);

  const result = useMemo(() => {
    // 通常時消費 vs 猛暑日加算
    const baseDailyKwh = hourlyKwh * 24;
    const hotDayExtraKwh = baseDailyKwh * (HOT_DEMAND_INDEX - 1) * (coolingShare / 100);
    const hotDayExtraCost = hotDayExtraKwh * (HOT_PRICE_PREMIUM + 12); // 価格プレミアム + ベース単価
    const annualExtraKwh = hotDayExtraKwh * annualHotDays;
    const annualExtraCost = hotDayExtraCost * annualHotDays;
    return {
      annualExtraKwh: Math.round(annualExtraKwh),
      annualExtraCost: Math.round(annualExtraCost),
    };
  }, [annualHotDays, hourlyKwh, hotHoursPerDay, coolingShare]);

  return (
    <section className="mt-6 rounded-xl border-2 border-orange-300 bg-orange-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🌡 猛暑日コスト試算ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        猛暑日（最高気温35℃以上）には、冷房負荷で電力需要が通常の約1.2〜1.3倍に増加し、市場価格も平均より高くなります。自社の使用パターンを入力して、猛暑日が増えた場合の年間追加コストを試算します。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間猛暑日数</label>
          <input
            type="number"
            value={annualHotDays}
            onChange={(e) => setAnnualHotDays(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            max={100}
          />
          <p className="mt-1 text-xs text-slate-500">東京2025年実績：29日</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">通常時の時間あたり消費（kWh）</label>
          <input
            type="number"
            value={hourlyKwh}
            onChange={(e) => setHourlyKwh(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            step={10}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">猛暑日の高負荷時間（時間/日）</label>
          <input
            type="number"
            value={hotHoursPerDay}
            onChange={(e) => setHotHoursPerDay(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            max={24}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">冷房需要シェア（%）</label>
          <input
            type="number"
            value={coolingShare}
            onChange={(e) => setCoolingShare(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            min={0}
            max={100}
          />
          <p className="mt-1 text-xs text-slate-500">オフィス40%、商業30%、工場20%目安</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-orange-200 bg-white p-4">
        <p className="text-sm text-slate-700">猛暑日由来の年間追加消費：<span className="font-bold">{result.annualExtraKwh.toLocaleString()} kWh</span></p>
        <p className="mt-2 text-sm text-slate-700">年間追加コスト：</p>
        <p className="mt-1 text-3xl font-bold text-red-600">
          {result.annualExtraCost >= 0 ? "+" : ""}{result.annualExtraCost.toLocaleString()}円
        </p>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 気温帯別需要指数（30℃+で1.21倍）と価格プレミアム（+4.8円/kWh）を前提とした概算試算。気温・地域・冷房効率で実際の値は変動します。
      </p>
    </section>
  );
}
