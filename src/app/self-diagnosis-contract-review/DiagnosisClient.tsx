"use client";
import { useState } from "react";

const checkItems = [
  {
    label: "直近1年間で電気料金が目に見えて上がった",
    note: "料金の上昇は見直しの最も基本的なきっかけです。燃料費調整額・市場価格調整額・容量拠出金など、変動要素が増えているか確認しましょう。",
    weight: "high",
  },
  {
    label: "現在の契約プランが固定型か市場連動型か、正確に把握していない",
    note: "プランの種類によってリスク構造が大きく異なります。請求書や契約書でプラン名を確認し、料金変動の仕組みを理解することが見直しの前提になります。",
    weight: "high",
  },
  {
    label: "契約の満了日・更新時期を把握していない",
    note: "自動更新で1年延長されるケースがあります。満了の3〜6か月前から動き始めることが、選択肢を広げるうえで重要です。",
    weight: "high",
  },
  {
    label: "現在の電力会社から値上げ通知を受け取ったことがある",
    note: "値上げ通知を受けた後は、現行プランの条件が変わっている可能性があります。改めて見積を取り、比較することが有効です。",
    weight: "high",
  },
  {
    label: "過去2年以内に電力契約を比較・見直ししていない",
    note: "電力市場は2021年以降に大きく変化しました。2年以上見直しをしていない場合、現行プランが現在の相場と乖離している可能性があります。",
    weight: "medium",
  },
  {
    label: "請求書に「市場価格調整額」や「容量拠出金」が加算されているか確認したことがない",
    note: "これらの項目は近年新たに導入された変動費用です。加算されているかどうか、また月々の変動幅がどの程度かを確認することが見直し判断の材料になります。",
    weight: "medium",
  },
  {
    label: "現在のプランの「燃料費調整額に上限があるか」を知らない",
    note: "上限なしの市場連動プランでは、燃料価格が高騰した際に調整額が青天井になります。上限設定の有無はリスク管理上の重要ポイントです。",
    weight: "medium",
  },
  {
    label: "電力使用量が過去と比べて大きく変わった（増加・減少どちらも）",
    note: "使用量が変わると最適な契約プランも変わります。特に大幅増加した場合は、現行の契約電力（kW）設定が割高になっていないか確認が必要です。",
    weight: "medium",
  },
  {
    label: "複数拠点を持つが、まとめて見直しを検討したことがない",
    note: "複数拠点を一括で見直すと、交渉力が上がり、より有利な条件を引き出せる場合があります。拠点別の契約を横断的に確認するタイミングです。",
    weight: "low",
  },
  {
    label: "再エネ・脱炭素目標に関連して、電力調達の方針を整理する必要がある",
    note: "サステナビリティ要件（RE100・SBT等）の対応や、非化石証書・グリーン電力調達のニーズがある場合は、コストと環境価値の両面から見直しを検討する価値があります。",
    weight: "low",
  },
];

export default function DiagnosisClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (label: string) => {
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const highItems = checkItems.filter((i) => i.weight === "high");
  const mediumItems = checkItems.filter((i) => i.weight === "medium");
  const lowItems = checkItems.filter((i) => i.weight === "low");

  const highCount = highItems.filter((i) => checked[i.label]).length;
  const mediumCount = mediumItems.filter((i) => checked[i.label]).length;
  const lowCount = lowItems.filter((i) => checked[i.label]).length;
  const totalCount = highCount + mediumCount + lowCount;
  const totalItems = checkItems.length;

  const getUrgency = () => {
    if (highCount >= 2)
      return {
        level: "high",
        label: "早急に見直しを検討してください",
        description:
          "高優先度の項目に複数該当しています。まず現行の契約書と直近12か月分の請求書を手元に用意し、契約満了日と中途解約条件を確認したうえで、見積依頼先のリストアップを始めることを推奨します。",
        borderColor: "border-red-300",
        bgColor: "bg-red-50",
        badgeColor: "bg-red-100 text-red-700",
        titleColor: "text-red-700",
      };
    if (highCount >= 1 || mediumCount >= 2)
      return {
        level: "medium",
        label: "見直しの準備を始めることを推奨します",
        description:
          "見直しの準備段階として、まずシミュレーターで現行契約の上振れリスクを試算しましょう。リスクの数値を社内共有することで、見直し着手の判断を得やすくなります。",
        borderColor: "border-amber-300",
        bgColor: "bg-amber-50",
        badgeColor: "bg-amber-100 text-amber-700",
        titleColor: "text-amber-700",
      };
    return {
      level: "low",
      label: "現時点では緊急性は低いと考えられます",
      description:
        "現時点では緊急性は低いと考えられます。ただし、次回の契約更新時期の把握と、年1回程度の定期的な料金チェックは続けることをおすすめします。",
      borderColor: "border-slate-300",
      bgColor: "bg-slate-50",
      badgeColor: "bg-slate-100 text-slate-700",
      titleColor: "text-slate-700",
    };
  };

  const urgency = getUrgency();

  return (
    <div className="space-y-6">
      {/* Sticky score bar */}
      <div className="sticky top-0 z-10 rounded-xl border border-sky-200 bg-white p-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-4 text-sm">
            <span className="font-semibold text-red-600">
              高優先度: {highCount}/{highItems.length}
            </span>
            <span className="font-semibold text-amber-600">
              中優先度: {mediumCount}/{mediumItems.length}
            </span>
            <span className="font-semibold text-slate-600">
              低優先度: {lowCount}/{lowItems.length}
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

      {/* High priority items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          重要度：高 ― すぐに確認すべき項目
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          1項目でも該当する場合は、現行の契約条件を早急に確認することを推奨します。
        </p>
        <div className="mt-4 space-y-3">
          {highItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                checked[item.label]
                  ? "border-red-300 bg-red-100"
                  : "border-red-100 bg-red-50 hover:border-red-200 hover:bg-red-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  checked[item.label]
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-red-300 bg-white text-red-400"
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

      {/* Medium priority items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          重要度：中 ― 近く対応を検討したい項目
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          複数該当する場合、見直しに向けた情報収集・準備を始めることが有効です。
        </p>
        <div className="mt-4 space-y-3">
          {mediumItems.map((item) => (
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

      {/* Low priority items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          重要度：低 ― 中長期的に検討したい項目
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          すぐに対応が必要な項目ではありませんが、今後の方針検討の参考にしてください。
        </p>
        <div className="mt-4 space-y-3">
          {lowItems.map((item) => (
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

      {/* Dynamic results section */}
      {totalCount > 0 && (
        <section
          className={`rounded-xl border-2 p-5 transition-all duration-300 ${urgency.borderColor} ${urgency.bgColor}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-900">あなたの診断結果</h2>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${urgency.badgeColor}`}
            >
              {urgency.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">{urgency.description}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <div className="rounded-lg border border-red-200 bg-white p-3 text-center">
              <p className="text-2xl font-bold text-red-600">{highCount}</p>
              <p className="text-xs text-slate-600">高優先度 / {highItems.length}項目</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 text-center">
              <p className="text-2xl font-bold text-amber-600">{mediumCount}</p>
              <p className="text-xs text-slate-600">中優先度 / {mediumItems.length}項目</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-2xl font-bold text-slate-600">{lowCount}</p>
              <p className="text-xs text-slate-600">低優先度 / {lowItems.length}項目</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
