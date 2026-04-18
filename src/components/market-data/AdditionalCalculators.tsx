"use client";

import { useState, useMemo } from "react";

// ===================== 1. 需給ひっ迫アラート判定 =====================
export function TightSupplyAlertCalculator() {
  const [reserveRate, setReserveRate] = useState(5);
  const [demandKw, setDemandKw] = useState(1000);
  const [drPct, setDrPct] = useState(15);

  const result = useMemo(() => {
    const alert = reserveRate <= 3 ? "警報" : reserveRate <= 5 ? "注意報" : reserveRate <= 7 ? "注視" : "通常";
    const drKw = Math.round((demandKw * drPct) / 100);
    const drRevenue = drKw * 500; // 概算：kWあたり年500円の対価（三次調整力②レンジ）
    return { alert, drKw, drRevenue };
  }, [reserveRate, demandKw, drPct]);

  return (
    <section className="mt-6 rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🚨 需給ひっ迫アラート＆DR収益試算</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        需給予備率と自社の調整可能kWを入力して、アラートレベルとDR（デマンドレスポンス）参加による年間対価を試算します。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">予備率（%）</label>
          <input type="number" value={reserveRate} onChange={(e) => setReserveRate(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={30} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">契約需要（kW）</label>
          <input type="number" value={demandKw} onChange={(e) => setDemandKw(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">調整可能比率（%）</label>
          <input type="number" value={drPct} onChange={(e) => setDrPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={50} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-xs text-slate-500">現在のアラートレベル</p>
          <p className={`mt-1 text-2xl font-bold ${result.alert === "警報" ? "text-red-700" : result.alert === "注意報" ? "text-orange-700" : "text-slate-700"}`}>{result.alert}</p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-xs text-slate-500">調整可能kW</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.drKw.toLocaleString()} kW</p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-xs text-slate-500">DR参加年間対価（概算）</p>
          <p className="mt-1 text-xl font-bold text-amber-800">{result.drRevenue.toLocaleString()}円</p>
        </div>
      </div>
    </section>
  );
}

// ===================== 2. ESG影響試算 =====================
export function EsgImpactCalculator() {
  const [annualKwh, setAnnualKwh] = useState(5000000);
  const [renewablePct, setRenewablePct] = useState(20);

  const result = useMemo(() => {
    const emissionFactor = 0.45 * (1 - renewablePct / 100) + 0 * (renewablePct / 100);
    const totalCo2 = annualKwh * emissionFactor / 1000; // t-CO2
    const carbonPrice = 10000; // 1トンあたり1万円（GX-ETS想定）
    const carbonCost = totalCo2 * carbonPrice;
    const cdpScore = renewablePct >= 50 ? "A〜A-" : renewablePct >= 20 ? "B〜B-" : renewablePct >= 5 ? "C〜C-" : "D〜D-";
    return { totalCo2: Math.round(totalCo2), carbonCost: Math.round(carbonCost), cdpScore };
  }, [annualKwh, renewablePct]);

  return (
    <section className="mt-6 rounded-xl border-2 border-green-300 bg-green-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🌱 ESG・カーボンコスト影響試算</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        年間使用量と再エネ比率を入力して、Scope2排出量・想定カーボンコスト・CDP想定スコアを試算します。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間電力使用量（kWh）</label>
          <input type="number" value={annualKwh} onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">再エネ比率（%）</label>
          <input type="number" value={renewablePct} onChange={(e) => setRenewablePct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={100} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-green-200 bg-white p-4">
          <p className="text-xs text-slate-500">年間Scope2排出量</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{result.totalCo2.toLocaleString()} t-CO2</p>
        </div>
        <div className="rounded-lg border border-green-200 bg-white p-4">
          <p className="text-xs text-slate-500">想定カーボンコスト（GX-ETS）</p>
          <p className="mt-1 text-xl font-bold text-green-800">{result.carbonCost.toLocaleString()}円/年</p>
        </div>
        <div className="rounded-lg border border-green-200 bg-white p-4">
          <p className="text-xs text-slate-500">想定CDPスコアレンジ</p>
          <p className="mt-1 text-xl font-bold text-green-700">{result.cdpScore}</p>
        </div>
      </div>
    </section>
  );
}

// ===================== 3. 拠点間単価比較 =====================
export function MultiSitePriceCompareCalculator() {
  const [sites, setSites] = useState([
    { name: "東京拠点", kwh: 1000000, yen: 22000000 },
    { name: "大阪拠点", kwh: 800000, yen: 16000000 },
    { name: "福岡拠点", kwh: 500000, yen: 9000000 },
  ]);

  const result = useMemo(() => {
    return sites.map((s) => ({
      ...s,
      unit: s.kwh > 0 ? (s.yen / s.kwh).toFixed(2) : "0",
    }));
  }, [sites]);

  return (
    <section className="mt-6 rounded-xl border-2 border-teal-300 bg-teal-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🌏 拠点間電力単価比較ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        複数拠点の年間使用量・電気代を入力して、拠点別単価を比較します。グループ全体の調達最適化検討の起点に。
      </p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-teal-200 bg-white">
        <table className="min-w-[600px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-teal-100">
              <th className="border border-teal-200 px-3 py-2 text-left font-semibold">拠点名</th>
              <th className="border border-teal-200 px-3 py-2 text-right font-semibold">年間kWh</th>
              <th className="border border-teal-200 px-3 py-2 text-right font-semibold">年間電気代</th>
              <th className="border border-teal-200 px-3 py-2 text-right font-semibold">単価</th>
            </tr>
          </thead>
          <tbody>
            {result.map((s, i) => (
              <tr key={i} className="odd:bg-white even:bg-teal-50/40">
                <td className="border border-teal-200 px-3 py-2">
                  <input value={s.name} onChange={(e) => { const v = [...sites]; v[i].name = e.target.value; setSites(v); }} className="w-full bg-transparent" />
                </td>
                <td className="border border-teal-200 px-3 py-2">
                  <input type="number" value={s.kwh} onChange={(e) => { const v = [...sites]; v[i].kwh = Number(e.target.value) || 0; setSites(v); }} className="w-full bg-transparent text-right" />
                </td>
                <td className="border border-teal-200 px-3 py-2">
                  <input type="number" value={s.yen} onChange={(e) => { const v = [...sites]; v[i].yen = Number(e.target.value) || 0; setSites(v); }} className="w-full bg-transparent text-right" />
                </td>
                <td className="border border-teal-200 px-3 py-2 text-right font-bold text-teal-800">{s.unit}円/kWh</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ===================== 4. 稟議書ドラフト生成 =====================
export function ProposalDraftGenerator() {
  const [currentBill, setCurrentBill] = useState(10000000);
  const [savingPct, setSavingPct] = useState(10);
  const [investment, setInvestment] = useState(2000000);

  const result = useMemo(() => {
    const annualSaving = Math.round((currentBill * savingPct) / 100);
    const payback = annualSaving > 0 ? (investment / annualSaving).toFixed(1) : "—";
    const fiveYearNet = annualSaving * 5 - investment;
    return { annualSaving, payback, fiveYearNet };
  }, [currentBill, savingPct, investment]);

  const draft = `【稟議書ドラフト：電力契約見直し】

1. 目的
  電気料金の削減と契約リスク低減を目的に、電力契約の見直しを提案します。

2. 現状
  ・年間電気代：${currentBill.toLocaleString()}円
  ・主な課題：単価の高止まり、契約条件の妥当性未検証

3. 提案内容
  ・複数社からの見積取得と条件比較
  ・最適プランへの切替実施
  ・想定投資：${investment.toLocaleString()}円（切替手数料・システム改修）

4. 期待効果
  ・年間削減額：約${result.annualSaving.toLocaleString()}円（${savingPct}%削減）
  ・投資回収期間：${result.payback}年
  ・5年累計純益：${result.fiveYearNet.toLocaleString()}円

5. リスクと対策
  ・市場価格変動：固定価格プラン選定でヘッジ
  ・新電力の信用リスク：財務体力評価で選定
  ・切替手続き遅延：専門部署での管理

6. スケジュール
  ・見積取得：X月
  ・社内比較検討：X月
  ・契約変更：X月
  ・効果測定：以降四半期ごと

以上、承認をお願いいたします。`;

  return (
    <section className="mt-6 rounded-xl border-2 border-indigo-300 bg-indigo-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📝 稟議書ドラフト自動生成ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        現状・想定投資・削減率を入力すると、稟議書の下書きを自動生成します。社内提案の起点に。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">現在の年間電気代（円）</label>
          <input type="number" value={currentBill} onChange={(e) => setCurrentBill(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={1000000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">想定削減率（%）</label>
          <input type="number" value={savingPct} onChange={(e) => setSavingPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} max={50} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">想定投資額（円）</label>
          <input type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100000} />
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-indigo-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-700">自動生成された稟議書ドラフト</p>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(draft)}
            className="rounded-md border border-indigo-300 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
          >
            📋 コピー
          </button>
        </div>
        <pre className="mt-2 whitespace-pre-wrap text-xs leading-6 text-slate-700">{draft}</pre>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ あくまで下書き例です。具体的な会社名・商品・価格・スケジュールは実情に合わせてカスタマイズしてください。
      </p>
    </section>
  );
}
