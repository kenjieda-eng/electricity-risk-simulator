"use client";
import { useState } from "react";

const riskCheckItems = [
  {
    label: "現在の電力会社が小規模な新電力会社である",
    note: "資本力・財務基盤が脆弱な新電力は、電力市場の急騰局面で撤退・倒産するリスクがあります。供給元の財務状況を定期的に確認することが重要です。",
    level: "high",
  },
  {
    label: "現在の電力会社から「供給停止」「事業撤退」「契約終了」の通知を受けたことがある",
    note: "このような通知を受けた場合、速やかに代替の電力会社に切り替えないと最終保障供給に移行するリスクがあります。すぐに行動を開始してください。",
    level: "high",
  },
  {
    label: "現在の電力契約が終了しているが、新たな契約先を決めていない",
    note: "契約が空白になっている場合、自動的に最終保障供給（一般送配電事業者の提供）に移行することがあります。最終保障供給は通常の小売より単価が高い傾向があります。",
    level: "high",
  },
  {
    label: "現在の電力会社の経営状況・ニュースを直近1年以内に確認していない",
    note: "電力小売会社の事業撤退・廃業は突然告知されることがあります。主要な新電力のニュースを年数回チェックする習慣が、早期対応につながります。",
    level: "medium",
  },
  {
    label: "現在の電力契約の満了日を把握していない",
    note: "契約が終了した後に放置されると最終保障供給に移行します。満了日を把握し、更新または切替の手続きを確実に行う体制が必要です。",
    level: "medium",
  },
  {
    label: "電力契約の担当者が不在・引き継ぎ不足で、契約状況が把握できていない",
    note: "担当者交代や引き継ぎ漏れで、電力契約の状況が把握できていないケースがあります。契約情報の管理体制を確認してください。",
    level: "medium",
  },
  {
    label: "複数拠点があり、一部拠点の契約状況を把握していない",
    note: "複数拠点を管理している場合、一部拠点が最終保障供給になっていることに気づかないケースがあります。定期的に全拠点の契約状況を確認する体制が重要です。",
    level: "medium",
  },
  {
    label: "電力使用量が多く、最終保障供給になった場合のコスト増加が大きい",
    note: "最終保障供給は単価が高いため、使用量が多い法人ほどコストへのインパクトが大きくなります。予備の切替候補を事前に検討しておくことが有効です。",
    level: "low",
  },
  {
    label: "現在の電力会社との契約が単年度更新で、更新のたびに条件変更の可能性がある",
    note: "単年度契約は柔軟性がある反面、年度ごとに条件交渉が必要です。更新時に不利な条件提示があった場合、速やかに代替候補を検討できる体制を持っておくことが重要です。",
    level: "low",
  },
];

const highItems = riskCheckItems.filter((i) => i.level === "high");
const mediumItems = riskCheckItems.filter((i) => i.level === "medium");
const lowItems = riskCheckItems.filter((i) => i.level === "low");

function getRiskResult(highCount: number, mediumCount: number, lowCount: number) {
  if (highCount >= 1) {
    return {
      label: "緊急対応が必要",
      color: "border-red-400 bg-red-50",
      titleColor: "text-red-800",
      message: "重要度「高」の項目に該当しています。最終保障供給に移行するリスクが高く、早急な確認と対応が必要です。今すぐ現在の契約状況を確認してください。",
    };
  }
  if (mediumCount >= 2) {
    return {
      label: "要注意・対策を検討",
      color: "border-amber-400 bg-amber-50",
      titleColor: "text-amber-800",
      message: `重要度「中」の項目が${mediumCount}つ該当しています。複数のリスク要因が重なっており、契約状況の点検と管理体制の整備を検討してください。`,
    };
  }
  if (mediumCount === 1 || lowCount >= 1) {
    return {
      label: "軽微なリスクあり・把握推奨",
      color: "border-sky-300 bg-sky-50",
      titleColor: "text-sky-800",
      message: "現時点で緊急性は低い状況ですが、リスク要因があります。予防的な確認を行い、定期的なチェック習慣を整えておくと安心です。",
    };
  }
  return {
    label: "現時点でリスクは低い",
    color: "border-green-300 bg-green-50",
    titleColor: "text-green-800",
    message: "現在のところ最終保障供給に移行するリスクは低い状況です。引き続き契約状況の定期確認を続けてください。",
  };
}

export default function DiagnosisClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (label: string) =>
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const total = riskCheckItems.length;

  const highChecked = highItems.filter((i) => checked[i.label]).length;
  const mediumChecked = mediumItems.filter((i) => checked[i.label]).length;
  const lowChecked = lowItems.filter((i) => checked[i.label]).length;

  const result = getRiskResult(highChecked, mediumChecked, lowChecked);

  return (
    <>
      {/* Sticky progress bar */}
      <div className="sticky top-0 z-10 rounded-xl border border-sky-200 bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-600">チェック進捗</span>
          <span className="text-lg font-bold text-sky-700">
            {totalChecked}/{total} 項目
          </span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-sky-500 transition-all"
            style={{ width: `${total > 0 ? (totalChecked / total) * 100 : 0}%` }}
          />
        </div>
        {totalChecked > 0 && (
          <p className="mt-1.5 text-xs text-slate-500">
            高：{highChecked}件　中：{mediumChecked}件　低：{lowChecked}件
          </p>
        )}
      </div>

      {/* High risk items */}
      <div className="mt-4">
        <p className="text-sm font-semibold text-red-700">
          重要度：高（1つでも該当したら早急に確認）
        </p>
        <div className="mt-3 space-y-3">
          {highItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all ${
                checked[item.label]
                  ? "border-red-400 bg-red-100"
                  : "border-red-100 bg-red-50 hover:border-red-300"
              }`}
            >
              <div
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                  checked[item.label]
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-red-300 bg-white"
                }`}
              >
                {checked[item.label] && <span className="text-xs">✓</span>}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medium risk items */}
      <div className="mt-5">
        <p className="text-sm font-semibold text-amber-700">
          重要度：中（複数該当したら対策を検討）
        </p>
        <div className="mt-3 space-y-3">
          {mediumItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all ${
                checked[item.label]
                  ? "border-amber-400 bg-amber-100"
                  : "border-amber-100 bg-amber-50 hover:border-amber-300"
              }`}
            >
              <div
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                  checked[item.label]
                    ? "border-amber-500 bg-amber-500 text-white"
                    : "border-amber-300 bg-white"
                }`}
              >
                {checked[item.label] && <span className="text-xs">✓</span>}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Low risk items */}
      <div className="mt-5">
        <p className="text-sm font-semibold text-slate-600">
          重要度：低（把握しておくと安心）
        </p>
        <div className="mt-3 space-y-3">
          {lowItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggle(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all ${
                checked[item.label]
                  ? "border-sky-300 bg-sky-50"
                  : "border-slate-200 bg-slate-50 hover:border-sky-200 hover:bg-sky-50/50"
              }`}
            >
              <div
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                  checked[item.label]
                    ? "border-sky-500 bg-sky-500 text-white"
                    : "border-slate-300 bg-white"
                }`}
              >
                {checked[item.label] && <span className="text-xs">✓</span>}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic results */}
      {totalChecked > 0 && (
        <div className={`mt-6 rounded-xl border-2 p-5 ${result.color}`}>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-900">診断結果</h2>
            <span className={`rounded-full px-3 py-1 text-sm font-bold ${result.titleColor} bg-white/60`}>
              {result.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            {totalChecked}/{total} 項目に該当しています（高：{highChecked}件、中：{mediumChecked}件、低：{lowChecked}件）。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{result.message}</p>
          {highChecked >= 1 && (
            <div className="mt-3 rounded-lg border border-red-300 bg-white/70 p-3">
              <p className="text-sm font-semibold text-red-800">今すぐ行うべきこと</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-red-700">
                <li>現在の供給状態・請求書発行元を確認する</li>
                <li>電力会社に契約状況を問い合わせる</li>
                <li>代替の電力会社への切替を検討する</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
