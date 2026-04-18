"use client";

import { useState, useMemo } from "react";

export default function SmeQuickDiagnosis() {
  const [monthlyBill, setMonthlyBill] = useState(50000);
  const [contractType, setContractType] = useState<"low-light" | "low-power" | "high">("low-power");
  const [businessHours, setBusinessHours] = useState<"day" | "night" | "24h">("day");
  const [contractAge, setContractAge] = useState<"under1" | "1-3" | "over3">("over3");

  const result = useMemo(() => {
    const annualBill = monthlyBill * 12;
    let savingPctMin = 5;
    let savingPctMax = 10;
    const advice: string[] = [];
    if (contractType === "low-light") { savingPctMin = 5; savingPctMax = 12; advice.push("低圧電灯は電力会社・プラン選びで5-12%削減余地あり"); }
    if (contractType === "low-power") { savingPctMin = 8; savingPctMax = 18; advice.push("低圧電力（動力）は契約電力見直しで8-18%削減事例あり"); }
    if (contractType === "high") { savingPctMin = 10; savingPctMax = 25; advice.push("高圧契約は競争入札・市場連動検討で10-25%削減余地"); }
    if (businessHours === "night") advice.push("夜間営業は深夜電力プラン適用で追加5-10%削減可能性");
    if (businessHours === "24h") advice.push("24時間営業は時間帯別単価最適化が有効");
    if (contractAge === "over3") { savingPctMax += 5; advice.push("3年超の契約は市場価格と乖離している可能性大、要見直し"); }
    if (contractAge === "under1") advice.push("1年未満の契約は違約金確認が必要");
    const minSaving = Math.round(annualBill * savingPctMin / 100);
    const maxSaving = Math.round(annualBill * savingPctMax / 100);
    return { annualBill, minSaving, maxSaving, savingPctMin, savingPctMax, advice };
  }, [monthlyBill, contractType, businessHours, contractAge]);

  return (
    <section className="mt-6 rounded-xl border-2 border-pink-300 bg-pink-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🏪 中小企業向け 3分電気代診断</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        4項目の入力で、年間電気代の削減可能額レンジと優先対応事項を診断します。低圧契約・小規模事業者向けの簡易診断です。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">月額電気代（円）</label>
          <input type="number" value={monthlyBill} onChange={(e) => setMonthlyBill(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">契約区分</label>
          <select value={contractType} onChange={(e) => setContractType(e.target.value as "low-light" | "low-power" | "high")} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            <option value="low-light">低圧電灯（事務所・店舗）</option>
            <option value="low-power">低圧電力（動力）</option>
            <option value="high">高圧契約</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">営業時間帯</label>
          <select value={businessHours} onChange={(e) => setBusinessHours(e.target.value as "day" | "night" | "24h")} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            <option value="day">主に昼間</option>
            <option value="night">夜間中心</option>
            <option value="24h">24時間営業</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">現契約継続年数</label>
          <select value={contractAge} onChange={(e) => setContractAge(e.target.value as "under1" | "1-3" | "over3")} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            <option value="under1">1年未満</option>
            <option value="1-3">1-3年</option>
            <option value="over3">3年超</option>
          </select>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-pink-200 bg-white p-4">
          <p className="text-xs text-slate-500">現状年間電気代</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.annualBill.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-pink-200 bg-white p-4">
          <p className="text-xs text-slate-500">推定削減レンジ</p>
          <p className="mt-1 text-xl font-bold text-pink-700">{result.minSaving.toLocaleString()}〜{result.maxSaving.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">{result.savingPctMin}-{result.savingPctMax}%削減</p>
        </div>
        <div className="rounded-lg border border-pink-200 bg-white p-4">
          <p className="text-xs text-slate-500">5年累計効果</p>
          <p className="mt-1 text-xl font-bold text-emerald-700">{(result.minSaving * 5).toLocaleString()}〜{(result.maxSaving * 5).toLocaleString()}円</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-pink-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">推奨アクション</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          {result.advice.map((a, i) => (<li key={i}>{a}</li>))}
        </ul>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ あくまで簡易診断。3社以上の相見積取得・契約条件詳細確認後の意思決定を推奨します。
      </p>
    </section>
  );
}
