"use client";
import { useState } from "react";

const basicItems = [
  {
    label: "基本料金の計算基準（契約電力kW）を確認している",
    note: "契約電力は基本料金の算定根拠です。実際の使用実績に対して過大に設定されていないかを確認しましょう。特に設備変更・移転後に見直されていないケースがあります。",
    category: "basic",
  },
  {
    label: "電力量料金の単価と時間帯区分を把握している",
    note: "時間帯別料金が設定されているプランでは、昼間・夜間・深夜の単価が異なります。稼働時間帯と料金帯が合っているかを確認することが最適化の基本です。",
    category: "basic",
  },
  {
    label: "再エネ賦課金の単価と月額負担を確認している",
    note: "再エネ賦課金は全需要家に一律適用されますが、年度ごとに単価が改定されます。使用量が多い事業者ほど負担が大きくなるため、金額推移を把握してください。",
    category: "basic",
  },
  {
    label: "電気料金の合計額を前月・前年同月と比較している",
    note: "変動要因を把握するために、月次・前年同月比での推移確認が基本です。使用量が変わっていないのに金額が上がっている場合は、単価要因（調整額等）が増えている可能性があります。",
    category: "basic",
  },
];

const adjustmentItems = [
  {
    label: "燃料費調整額の符号（プラス・マイナス）と金額を確認している",
    note: "燃料費調整額はLNG・石油などの燃料価格に連動して毎月変動します。プラス（追加負担）になっている月が多い場合、その累積額が年間コストに与える影響を確認しましょう。",
    category: "adjustment",
  },
  {
    label: "燃料費調整額に上限設定があるか確認している",
    note: "上限なしのプランでは燃料価格が高騰した際に調整額が青天井になります。上限の有無と上限単価を契約書で確認してください。固定型プランでは上限付きが多い傾向があります。",
    category: "adjustment",
  },
  {
    label: "市場価格調整額が加算されているかを確認している",
    note: "市場連動型プランでは、JEPX等の卸電力取引所の価格に連動した調整額が加算されます。請求書に「市場価格調整額」または同様の名称の項目がある場合、その算定方式を確認してください。",
    category: "adjustment",
  },
  {
    label: "容量拠出金が請求書に反映されているかを確認している",
    note: "容量拠出金は2024年度から導入された制度負担です。電力会社によって請求書への反映方法が異なります（単価に込みの場合・別建ての場合）。明細での表示方法を確認してください。",
    category: "adjustment",
  },
  {
    label: "託送料金の内訳（系統利用料）を確認したことがある",
    note: "新電力から電力を購入している場合、送配電網の利用料（託送料金）は電力小売価格に含まれています。プランによっては明細として開示されているケースもあります。",
    category: "adjustment",
  },
];

const usageItems = [
  {
    label: "月間電力使用量（kWh）の推移を直近12か月分把握している",
    note: "使用量の推移を把握することで、季節変動・設備変更の影響を把握できます。見積比較や契約電力の見直しにも必要な基礎情報です。",
    category: "usage",
  },
  {
    label: "デマンド値（最大需要電力）を確認したことがある",
    note: "高圧以上の契約では、30分単位の最大需要電力（デマンド）が基本料金に影響します。デマンドが高い月が契約電力の基準になる場合があるため、ピークカットの効果を検証できます。",
    category: "usage",
  },
  {
    label: "力率（パワーファクター）と割引・割増の適用を確認している",
    note: "力率が高い（進み力率）場合、基本料金の割引が適用されることがあります。力率が低い場合は逆に割増になるプランもあります。請求書に力率の記載があれば確認しましょう。",
    category: "usage",
  },
];

const contractConditionItems = [
  {
    label: "現在の契約電力（kW）が実態に即しているかを確認している",
    note: "契約電力が実使用量より大幅に大きい場合、基本料金を過剰に払っている可能性があります。特に設備縮小・移転・閉鎖後に契約変更をしていないケースに注意が必要です。",
    category: "contract",
  },
  {
    label: "複数拠点分の請求書を一元的に管理できている",
    note: "複数拠点がある場合、拠点ごとに電力会社・プランが異なることがあります。まとめて比較するには各拠点の供給地点特定番号と使用量データを一元管理することが有効です。",
    category: "contract",
  },
  {
    label: "前回の契約更新時から単価条件が変更されていないか確認している",
    note: "自動更新時に単価条件が変わっているケースがあります。更新のたびに契約書と請求書単価を照合するクセをつけると、見落としを防ぎやすくなります。",
    category: "contract",
  },
  {
    label: "補助金・価格激変緩和措置の終了が料金に反映されているか確認している",
    note: "政府の電気・ガス価格激変緩和対策は段階的に縮小・終了しています。補助金終了後の請求書で料金が上がっているかを確認し、その分を現行コストとして認識することが重要です。",
    category: "contract",
  },
];

const allItems = [...basicItems, ...adjustmentItems, ...usageItems, ...contractConditionItems];

export default function DiagnosisClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (label: string) => {
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const basicCount = basicItems.filter((i) => checked[i.label]).length;
  const adjustmentCount = adjustmentItems.filter((i) => checked[i.label]).length;
  const usageCount = usageItems.filter((i) => checked[i.label]).length;
  const contractCount = contractConditionItems.filter((i) => checked[i.label]).length;
  const totalCount = basicCount + adjustmentCount + usageCount + contractCount;
  const totalItems = allItems.length;

  const getReadiness = () => {
    const pct = totalCount / totalItems;
    if (pct >= 0.8)
      return {
        label: "請求書の確認状況は良好です",
        description:
          "ほとんどの項目を確認できています。見積比較やシミュレーターの活用に必要な情報が揃っている状態です。次のステップとして、現行プランのリスク試算や見積依頼の準備を進めましょう。",
        borderColor: "border-sky-300",
        bgColor: "bg-sky-50",
        badgeColor: "bg-sky-100 text-sky-700",
      };
    if (pct >= 0.5)
      return {
        label: "いくつか確認できていない項目があります",
        description:
          "確認できている項目もありますが、まだ把握しきれていない費用項目があります。特に変動費用項目（燃料費調整額・市場価格調整額・容量拠出金）の確認を優先してください。",
        borderColor: "border-amber-300",
        bgColor: "bg-amber-50",
        badgeColor: "bg-amber-100 text-amber-700",
      };
    if (totalCount > 0)
      return {
        label: "確認できていない項目が多い状態です",
        description:
          "まず直近3か月分の請求書を手元に用意することから始めてください。基本料金・電力量料金・調整額・賦課金を項目ごとに分けて整理することで、見落としを防ぎやすくなります。",
        borderColor: "border-red-300",
        bgColor: "bg-red-50",
        badgeColor: "bg-red-100 text-red-700",
      };
    return null;
  };

  const readiness = getReadiness();

  return (
    <div className="space-y-6">
      {/* Sticky score bar */}
      <div className="sticky top-0 z-10 rounded-xl border border-sky-200 bg-white p-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="font-semibold text-slate-600">
              基本料金: {basicCount}/{basicItems.length}
            </span>
            <span className="font-semibold text-amber-600">
              変動費用: {adjustmentCount}/{adjustmentItems.length}
            </span>
            <span className="font-semibold text-slate-600">
              使用量: {usageCount}/{usageItems.length}
            </span>
            <span className="font-semibold text-slate-600">
              契約条件: {contractCount}/{contractConditionItems.length}
            </span>
          </div>
          <span className="text-sm font-bold text-sky-700">
            {totalCount}/{totalItems} 項目チェック済み
          </span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-sky-500 transition-all duration-300"
            style={{ width: `${(totalCount / totalItems) * 100}%` }}
          />
        </div>
      </div>

      {/* Basic items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          基本料金・電力量料金の確認（{basicItems.length}項目）
        </h2>
        <div className="mt-4 space-y-3">
          {basicItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                checked[item.label]
                  ? "border-slate-400 bg-slate-100"
                  : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  checked[item.label]
                    ? "border-slate-500 bg-slate-500 text-white"
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {checked[item.label] ? "✓" : ""}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Adjustment items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          変動費用項目の確認（{adjustmentItems.length}項目）
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          近年の電気料金上昇の多くは、この変動費用項目の増加によるものです。各項目の有無と金額規模を必ず確認してください。
        </p>
        <div className="mt-4 space-y-3">
          {adjustmentItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                checked[item.label]
                  ? "border-amber-300 bg-amber-100"
                  : "border-amber-100 bg-amber-50 hover:border-amber-200 hover:bg-amber-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  checked[item.label]
                    ? "border-amber-500 bg-amber-500 text-white"
                    : "border-amber-300 bg-white text-amber-400"
                }`}
              >
                {checked[item.label] ? "✓" : ""}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          使用量データの把握（{usageItems.length}項目）
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          使用量データは、見積比較・シミュレーター入力・社内説明のいずれにも必要な基礎情報です。
        </p>
        <div className="mt-4 space-y-3">
          {usageItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                checked[item.label]
                  ? "border-slate-400 bg-slate-100"
                  : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  checked[item.label]
                    ? "border-slate-500 bg-slate-500 text-white"
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {checked[item.label] ? "✓" : ""}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contract condition items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          契約条件の実態確認（{contractConditionItems.length}項目）
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          請求書と契約書を照合することで、実態に即した契約条件になっているかを確認できます。
        </p>
        <div className="mt-4 space-y-3">
          {contractConditionItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                checked[item.label]
                  ? "border-slate-400 bg-slate-100"
                  : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  checked[item.label]
                    ? "border-slate-500 bg-slate-500 text-white"
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {checked[item.label] ? "✓" : ""}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic results */}
      {readiness && (
        <section
          className={`rounded-xl border-2 p-5 transition-all duration-300 ${readiness.borderColor} ${readiness.bgColor}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-900">あなたの確認状況</h2>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${readiness.badgeColor}`}
            >
              {readiness.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">{readiness.description}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-xl font-bold text-slate-600">{basicCount}/{basicItems.length}</p>
              <p className="text-xs text-slate-500">基本料金</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 text-center">
              <p className="text-xl font-bold text-amber-600">{adjustmentCount}/{adjustmentItems.length}</p>
              <p className="text-xs text-slate-500">変動費用</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-xl font-bold text-slate-600">{usageCount}/{usageItems.length}</p>
              <p className="text-xs text-slate-500">使用量</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-xl font-bold text-slate-600">{contractCount}/{contractConditionItems.length}</p>
              <p className="text-xs text-slate-500">契約条件</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
