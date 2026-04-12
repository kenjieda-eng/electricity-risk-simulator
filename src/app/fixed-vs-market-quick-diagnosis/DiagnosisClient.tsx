"use client";
import { useState } from "react";

const fixedPlanTraits = [
  {
    label: "料金の予見性が高い",
    detail:
      "基本料金・電力量料金が原則固定されるため、月々の電気料金をある程度見通すことができます。予算管理・財務計画を立てやすい組織に向いています。",
  },
  {
    label: "相場が上がっても単価は上がりにくい",
    detail:
      "電力市場価格が高騰しても、契約時の単価が変わらないため、外部ショックを受けにくい構造です。",
  },
  {
    label: "燃料費調整額に上限設定があるプランが多い",
    detail:
      "固定型プランは燃料費調整額に上限を設けているケースが多く、極端な上振れを防げます。ただし上限の有無と算定方法はプランごとに異なります。",
  },
  {
    label: "中途解約違約金が発生しやすい",
    detail:
      "固定単価の裏返しとして、契約期間内の解約に違約金が設定されているプランが多くあります。契約期間と中途解約条件を事前に確認してください。",
  },
];

const marketPlanTraits = [
  {
    label: "市場価格が下がると料金も安くなる可能性がある",
    detail:
      "JEPXなどの電力市場価格に連動するため、相場が安定・下落した局面では固定型より低コストになる可能性があります。",
  },
  {
    label: "市場価格が上がると料金も上昇する",
    detail:
      "燃料高・需給逼迫・季節変動の影響を直接受けます。2021〜2022年の電力価格高騰局面では、市場連動プランの料金が大幅に上昇しました。",
  },
  {
    label: "上限なしの調整額には注意が必要",
    detail:
      "市場連動型で燃料費調整額に上限がないプランは、極端な相場上昇時に請求額が大きく膨らむリスクがあります。",
  },
  {
    label: "使用量が多い・安定している組織には一定のメリットがある",
    detail:
      "使用量が大きく安定していて、市場動向を自社でモニタリングできる組織であれば、コストメリットを享受しやすい構造です。",
  },
];

const fixedCheckItems = [
  "毎月の電気料金を予算に組み込んで管理している",
  "電気料金の変動を財務・経営上の大きなリスクと捉えている",
  "料金高騰時に対応できる余力（コスト吸収・価格転嫁）が乏しい",
  "長期的に安定した契約関係を重視する",
  "エネルギー担当者がおらず、料金動向のモニタリングが難しい",
];

const marketCheckItems = [
  "市場価格が安い局面でのコスト削減を優先したい",
  "電力使用量が大きく、コスト変動を吸収できる体力がある",
  "電気料金動向を定期的にモニタリングできる体制がある",
  "短期的な価格変動よりも長期的なトータルコストを重視する",
  "太陽光・蓄電池など自家消費設備があり、市場連動を活用できる",
];

export default function DiagnosisClient() {
  const [fixedChecked, setFixedChecked] = useState<Record<string, boolean>>({});
  const [marketChecked, setMarketChecked] = useState<Record<string, boolean>>({});

  const toggleFixed = (label: string) => {
    setFixedChecked((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const toggleMarket = (label: string) => {
    setMarketChecked((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const fixedCount = fixedCheckItems.filter((i) => fixedChecked[i]).length;
  const marketCount = marketCheckItems.filter((i) => marketChecked[i]).length;
  const totalCount = fixedCount + marketCount;
  const totalItems = fixedCheckItems.length + marketCheckItems.length;

  const getRecommendation = () => {
    if (fixedCount === 0 && marketCount === 0) return null;
    if (fixedCount > marketCount)
      return {
        label: "固定型プランが向いている可能性が高い",
        description: `固定型に該当する項目が${fixedCount}個、市場連動型が${marketCount}個です。料金の安定性・予見性を重視する傾向が見られます。見積取得時は固定単価プランを優先的に検討し、燃料費調整額の上限設定と契約期間・中途解約条件を必ず確認してください。`,
        borderColor: "border-blue-300",
        bgColor: "bg-blue-50",
        badgeColor: "bg-blue-100 text-blue-700",
        fixedBar: Math.round((fixedCount / fixedCheckItems.length) * 100),
        marketBar: Math.round((marketCount / marketCheckItems.length) * 100),
      };
    if (marketCount > fixedCount)
      return {
        label: "市場連動型プランが向いている可能性がある",
        description: `市場連動型に該当する項目が${marketCount}個、固定型が${fixedCount}個です。コスト変動を吸収できる体制・体力がある傾向が見られます。ただし、市場価格高騰時のリスクを十分に把握したうえで、固定型との比較見積も取ることをおすすめします。`,
        borderColor: "border-green-300",
        bgColor: "bg-green-50",
        badgeColor: "bg-green-100 text-green-700",
        fixedBar: Math.round((fixedCount / fixedCheckItems.length) * 100),
        marketBar: Math.round((marketCount / marketCheckItems.length) * 100),
      };
    return {
      label: "両プランへの適性が拮抗しています",
      description: `固定型・市場連動型ともに${fixedCount}個ずつ該当しています。どちらが有利かは個別の見積条件次第です。両タイプのプランの見積を取り、年間総額・変動リスク・契約条件の3軸で比較することをおすすめします。`,
      borderColor: "border-slate-300",
      bgColor: "bg-slate-50",
      badgeColor: "bg-slate-100 text-slate-700",
      fixedBar: Math.round((fixedCount / fixedCheckItems.length) * 100),
      marketBar: Math.round((marketCount / marketCheckItems.length) * 100),
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="space-y-6">
      {/* Sticky score bar */}
      <div className="sticky top-0 z-10 rounded-xl border border-sky-200 bg-white p-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-4 text-sm">
            <span className="font-semibold text-blue-600">
              固定型: {fixedCount}/{fixedCheckItems.length}
            </span>
            <span className="font-semibold text-green-600">
              市場連動型: {marketCount}/{marketCheckItems.length}
            </span>
          </div>
          <span className="text-sm font-bold text-sky-700">
            {totalCount}/{totalItems} 項目チェック済み
          </span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div>
            <p className="mb-1 text-xs text-slate-500">固定型</p>
            <div className="h-2 w-full rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                style={{ width: `${(fixedCount / fixedCheckItems.length) * 100}%` }}
              />
            </div>
          </div>
          <div>
            <p className="mb-1 text-xs text-slate-500">市場連動型</p>
            <div className="h-2 w-full rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-green-500 transition-all duration-300"
                style={{ width: `${(marketCount / marketCheckItems.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed plan traits */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">固定型プランの特徴と注意点</h2>
        <div className="mt-4 space-y-3">
          {fixedPlanTraits.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-500">
                ✓
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market plan traits */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">市場連動型プランの特徴と注意点</h2>
        <div className="mt-4 space-y-3">
          {marketPlanTraits.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-500">
                ✓
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive checklist */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          自社が向くプランを確認するチェックリスト
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          当てはまる項目にチェックを入れてください。チェックが多い方のプランが、自社の傾向に合っている可能性が高いといえます。ただし、最終判断は見積条件の比較で行ってください。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {/* Fixed plan checklist */}
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">
              固定プランが向く傾向
              <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs">
                {fixedCount}/{fixedCheckItems.length}
              </span>
            </p>
            <ul className="mt-3 space-y-2">
              {fixedCheckItems.map((item) => (
                <li
                  key={item}
                  onClick={() => toggleFixed(item)}
                  className={`flex cursor-pointer items-start gap-2 rounded-md p-2 transition-all duration-200 ${
                    fixedChecked[item] ? "bg-blue-100" : "hover:bg-blue-100"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                      fixedChecked[item]
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-blue-300 bg-white text-blue-400"
                    }`}
                  >
                    {fixedChecked[item] ? "✓" : ""}
                  </span>
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Market plan checklist */}
          <div className="rounded-xl border border-green-100 bg-green-50 p-4">
            <p className="text-sm font-semibold text-green-800">
              市場連動プランが向く傾向
              <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs">
                {marketCount}/{marketCheckItems.length}
              </span>
            </p>
            <ul className="mt-3 space-y-2">
              {marketCheckItems.map((item) => (
                <li
                  key={item}
                  onClick={() => toggleMarket(item)}
                  className={`flex cursor-pointer items-start gap-2 rounded-md p-2 transition-all duration-200 ${
                    marketChecked[item] ? "bg-green-100" : "hover:bg-green-100"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                      marketChecked[item]
                        ? "border-green-500 bg-green-500 text-white"
                        : "border-green-300 bg-white text-green-400"
                    }`}
                  >
                    {marketChecked[item] ? "✓" : ""}
                  </span>
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dynamic results */}
      {recommendation && (
        <section
          className={`rounded-xl border-2 p-5 transition-all duration-300 ${recommendation.borderColor} ${recommendation.bgColor}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-900">あなたの診断結果</h2>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${recommendation.badgeColor}`}
            >
              {recommendation.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">{recommendation.description}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-blue-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-blue-700">固定型スコア</p>
                <p className="text-lg font-bold text-blue-600">
                  {fixedCount}/{fixedCheckItems.length}
                </p>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-blue-100">
                <div
                  className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${recommendation.fixedBar}%` }}
                />
              </div>
            </div>
            <div className="rounded-lg border border-green-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-green-700">市場連動型スコア</p>
                <p className="text-lg font-bold text-green-600">
                  {marketCount}/{marketCheckItems.length}
                </p>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-green-100">
                <div
                  className="h-2 rounded-full bg-green-500 transition-all duration-300"
                  style={{ width: `${recommendation.marketBar}%` }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
