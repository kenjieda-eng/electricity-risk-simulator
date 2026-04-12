"use client";
import { useState } from "react";

const infoItems = [
  {
    label: "供給地点特定番号（22桁の番号）を把握している",
    note: "見積依頼の必須情報です。現在の請求書に記載されています。電力会社が供給条件を特定するために使います。",
    priority: "必須",
  },
  {
    label: "現在の契約電力（kW）を把握している",
    note: "基本料金の算定根拠となる契約電力を確認します。高圧・特別高圧の場合は最大需要電力（デマンド値）との関係も確認が必要です。",
    priority: "必須",
  },
  {
    label: "直近12か月分の月間使用量（kWh）データがある",
    note: "季節変動・稼働状況の影響を反映した使用量実績が、見積精度を左右します。請求書または電力会社のWebサービスから取得してください。",
    priority: "必須",
  },
  {
    label: "現在の電力供給エリア（地域）を把握している",
    note: "電力の供給エリアによって、対応できる新電力会社が限られます。供給エリアは現在の一般送配電事業者（東北・東京・中部等）で確認できます。",
    priority: "必須",
  },
  {
    label: "現行契約の満了日と自動更新条項を確認している",
    note: "契約期間と更新条件は見積依頼のタイミングを決める要素です。中途解約違約金の有無も事前に確認しておきましょう。",
    priority: "必須",
  },
];

const preferredItems = [
  {
    label: "施設の用途・稼働時間帯を整理している",
    note: "事務所・工場・商業施設では電力の使われ方が異なります。用途と稼働時間帯を伝えることで、最適なプランを提案してもらいやすくなります。",
  },
  {
    label: "太陽光・蓄電池などの自家消費設備の有無を把握している",
    note: "自家消費設備がある場合、買電量・売電量の実績データが見積精度に影響します。また設備の有無でプランの最適解が変わる場合があります。",
  },
  {
    label: "電力使用量に大きな季節変動や繁忙期があることを伝える準備がある",
    note: "業種・稼働実態による使用量変動は、プランの選択・基本料金の設定に関わります。変動幅が大きい場合は特に明示すると有益な提案が届きやすくなります。",
  },
  {
    label: "現行プランで不満な点・重視する条件を整理している",
    note: "「料金安定を最優先」「市場連動でコストを抑えたい」「解約条件を柔軟にしたい」など、優先条件を明示することで比較の軸がぶれにくくなります。",
  },
  {
    label: "複数拠点分をまとめて見積依頼するかどうかを決めている",
    note: "複数拠点を一括で依頼すると、交渉力が高まり有利な条件を引き出せることがあります。一方で拠点ごとに状況が異なる場合は別々に依頼する方が適切な場合もあります。",
  },
];

const internalItems = [
  {
    label: "見直しの目的（コスト削減・リスク低減・安定化 等）を社内で共有している",
    note: "目的によって比較の軸が変わります。コスト削減優先なら年間総額、安定優先なら固定費比率・変動リスクを重視するなど、事前に方針をそろえておきましょう。",
  },
  {
    label: "見積比較後の承認フロー（稟議・上長決裁等）を把握している",
    note: "承認に必要な書類・比較資料の形式を事前に確認しておくと、見積取得後の手続きがスムーズになります。",
  },
  {
    label: "切替完了の目標時期から逆算して、見積依頼のスケジュールを立てている",
    note: "電力契約の切替には通常2〜4か月程度の期間が必要です。契約満了日の3〜6か月前を目安に見積依頼を開始することを推奨します。",
  },
  {
    label: "シミュレーターで現行プランのリスク試算を実施済みか、または予定している",
    note: "シミュレーターを使って現行プランの上振れリスクを事前に把握しておくと、見積比較時の判断基準として活用できます。社内説明の根拠資料にもなります。",
  },
];

const comparisonPoints = [
  { label: "比較対象となる全見積で「同一前提条件（使用量・契約電力）」が揃っているか" },
  { label: "燃料費調整額の上限設定と算定方式が明示されているか" },
  { label: "市場価格調整額の有無と算定方式が明示されているか" },
  { label: "容量拠出金の反映方法（単価込み・別建て）が明示されているか" },
  { label: "再エネ賦課金の扱いが揃っているか（全見積で同一か）" },
  { label: "契約期間・中途解約条件が各見積で明示されているか" },
  { label: "年間総額（固定費＋変動費見込み）での比較ができているか" },
];

export default function DiagnosisClient() {
  const [infoChecked, setInfoChecked] = useState<Record<string, boolean>>({});
  const [preferredChecked, setPreferredChecked] = useState<Record<string, boolean>>({});
  const [internalChecked, setInternalChecked] = useState<Record<string, boolean>>({});
  const [compChecked, setCompChecked] = useState<Record<string, boolean>>({});

  const toggle = (
    setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
    label: string
  ) => {
    setter((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const infoCount = infoItems.filter((i) => infoChecked[i.label]).length;
  const preferredCount = preferredItems.filter((i) => preferredChecked[i.label]).length;
  const internalCount = internalItems.filter((i) => internalChecked[i.label]).length;
  const compCount = comparisonPoints.filter((i) => compChecked[i.label]).length;
  const totalCount = infoCount + preferredCount + internalCount + compCount;
  const totalItems =
    infoItems.length + preferredItems.length + internalItems.length + comparisonPoints.length;

  const getReadiness = () => {
    if (infoCount < infoItems.length)
      return {
        label: `必須情報が${infoItems.length - infoCount}項目未確認です`,
        description:
          "必須情報が揃っていないと見積依頼を開始できません。供給地点特定番号・契約電力・使用量データ・供給エリア・契約満了日をまず揃えてください。",
        borderColor: "border-red-300",
        bgColor: "bg-red-50",
        badgeColor: "bg-red-100 text-red-700",
      };
    if (totalCount >= totalItems * 0.8)
      return {
        label: "見積依頼の準備が整っています",
        description:
          "必須情報が揃い、準備も十分です。今すぐ2〜3社以上の電力会社に同一条件で見積依頼を開始することをおすすめします。",
        borderColor: "border-sky-300",
        bgColor: "bg-sky-50",
        badgeColor: "bg-sky-100 text-sky-700",
      };
    if (infoCount === infoItems.length)
      return {
        label: "必須情報は揃っています。準備を進めましょう",
        description:
          "必須情報は確認済みです。あると有効な情報や社内調整事項を確認することで、見積の精度と比較のしやすさが上がります。",
        borderColor: "border-amber-300",
        bgColor: "bg-amber-50",
        badgeColor: "bg-amber-100 text-amber-700",
      };
    return null;
  };

  const readiness = totalCount > 0 ? getReadiness() : null;

  return (
    <div className="space-y-6">
      {/* Sticky score bar */}
      <div className="sticky top-0 z-10 rounded-xl border border-sky-200 bg-white p-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-3 text-xs">
            <span className={`font-semibold ${infoCount === infoItems.length ? "text-sky-600" : "text-red-600"}`}>
              必須情報: {infoCount}/{infoItems.length}
            </span>
            <span className="font-semibold text-slate-600">
              有効情報: {preferredCount}/{preferredItems.length}
            </span>
            <span className="font-semibold text-slate-600">
              社内調整: {internalCount}/{internalItems.length}
            </span>
            <span className="font-semibold text-slate-600">
              受領後確認: {compCount}/{comparisonPoints.length}
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

      {/* Required info items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          必須情報：揃っていないと見積が出せない（{infoItems.length}項目）
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          以下の情報は、見積依頼の際に電力会社が必ず必要とする基本情報です。すべて揃えてから依頼を開始してください。
        </p>
        <div className="mt-4 space-y-3">
          {infoItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(setInfoChecked, item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                infoChecked[item.label]
                  ? "border-sky-300 bg-sky-100"
                  : "border-sky-100 bg-sky-50 hover:border-sky-200 hover:bg-sky-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  infoChecked[item.label]
                    ? "border-sky-500 bg-sky-500 text-white"
                    : "border-sky-300 bg-white text-sky-500"
                }`}
              >
                {infoChecked[item.label] ? "✓" : ""}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-700">
                    {item.priority}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preferred items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          あると有効な情報：見積精度と提案品質を高める（{preferredItems.length}項目）
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          必須ではありませんが、以下の情報を提供することで、より実態に即した見積を取得できます。
        </p>
        <div className="mt-4 space-y-3">
          {preferredItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(setPreferredChecked, item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                preferredChecked[item.label]
                  ? "border-slate-400 bg-slate-100"
                  : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  preferredChecked[item.label]
                    ? "border-slate-500 bg-slate-500 text-white"
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {preferredChecked[item.label] ? "✓" : ""}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal items */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          社内調整事項：見積前に共有しておきたいこと（{internalItems.length}項目）
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          見積取得後に社内の意見が割れないよう、以下の点を事前に確認・共有しておくことで、比較から決定までの流れがスムーズになります。
        </p>
        <div className="mt-4 space-y-3">
          {internalItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(setInternalChecked, item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                internalChecked[item.label]
                  ? "border-slate-400 bg-slate-100"
                  : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  internalChecked[item.label]
                    ? "border-slate-500 bg-slate-500 text-white"
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {internalChecked[item.label] ? "✓" : ""}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison points */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          見積受領後の確認ポイント（{comparisonPoints.length}項目）
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          見積書が届いたら、比較前に以下の点を確認してください。条件が揃っていない見積同士を比べても、正確な判断はできません。
        </p>
        <div className="mt-4 space-y-3">
          {comparisonPoints.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(setCompChecked, item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                compChecked[item.label]
                  ? "border-slate-400 bg-slate-100"
                  : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  compChecked[item.label]
                    ? "border-slate-500 bg-slate-500 text-white"
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {compChecked[item.label] ? "✓" : ""}
              </span>
              <p className="text-sm leading-6 text-slate-700">{item.label}</p>
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
            <h2 className="text-xl font-semibold text-slate-900">あなたの準備状況</h2>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${readiness.badgeColor}`}
            >
              {readiness.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">{readiness.description}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-4">
            <div className={`rounded-lg border bg-white p-3 text-center ${infoCount === infoItems.length ? "border-sky-200" : "border-red-200"}`}>
              <p className={`text-xl font-bold ${infoCount === infoItems.length ? "text-sky-600" : "text-red-600"}`}>
                {infoCount}/{infoItems.length}
              </p>
              <p className="text-xs text-slate-500">必須情報</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-xl font-bold text-slate-600">{preferredCount}/{preferredItems.length}</p>
              <p className="text-xs text-slate-500">有効情報</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-xl font-bold text-slate-600">{internalCount}/{internalItems.length}</p>
              <p className="text-xs text-slate-500">社内調整</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-xl font-bold text-slate-600">{compCount}/{comparisonPoints.length}</p>
              <p className="text-xs text-slate-500">受領後確認</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
