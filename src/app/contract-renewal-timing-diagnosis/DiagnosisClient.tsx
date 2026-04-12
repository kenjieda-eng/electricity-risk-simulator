"use client";
import { useState } from "react";

const contractCheckItems = [
  { label: "契約満了日", note: "契約書の「契約期間」欄を確認" },
  { label: "自動更新条項の有無", note: "「自動更新」「自動継続」などの条項を確認" },
  { label: "中途解約条件・違約金", note: "違約金の算定方式と発生条件を確認" },
  { label: "解約予告期間", note: "「○か月前までに解約申告」などの条件を確認" },
];

const autoRenewalRisks = [
  {
    label: "自動更新後に新しい電力会社に切り替えようとすると、違約金が発生する場合がある",
    note: "自動更新の条項が含まれているプランでは、更新後に中途解約すると違約金が発生することがあります。金額は契約によって異なります。",
  },
  {
    label: "更新時に単価条件が変更されていることがある",
    note: "自動更新時に、電力会社側の都合で単価が改定されるケースがあります。更新ごとに請求書と契約書を照合する習慣が重要です。",
  },
  {
    label: "現行プランが割高になっていても気づきにくい",
    note: "自動更新が続くと、市場相場と比較して現行単価が割高になっていても気づきにくくなります。年1回の定期的な市場確認が有効です。",
  },
];

type TimingKey = "over6" | "3to6" | "under3" | "justupdated";

const timingOptions: { key: TimingKey; label: string; urgencyColor: string; urgencyText: string }[] =
  [
    { key: "over6", label: "更新まで6か月以上ある", urgencyColor: "bg-green-100 text-green-700", urgencyText: "余裕あり" },
    { key: "3to6", label: "更新まで3〜6か月ある", urgencyColor: "bg-amber-100 text-amber-700", urgencyText: "準備着手を推奨" },
    { key: "under3", label: "更新まで3か月未満", urgencyColor: "bg-red-100 text-red-700", urgencyText: "急いで対応が必要" },
    { key: "justupdated", label: "更新直後・更新が完了した", urgencyColor: "bg-slate-100 text-slate-700", urgencyText: "次回更新に向けて準備" },
  ];

const timingData: Record<
  TimingKey,
  {
    summary: string;
    actions: { step: number; text: string }[];
    caution: string;
    borderColor: string;
    bgColor: string;
  }
> = {
  over6: {
    summary:
      "今から準備を始めることで最も選択肢が広い状態で判断できます。",
    actions: [
      { step: 1, text: "現行契約書と直近12か月分の請求書を手元に揃える" },
      { step: 2, text: "シミュレーターで現行プランのリスクを試算し、見直しの必要性を判断する" },
      { step: 3, text: "現行プランの変動費（燃料費調整額・市場価格調整額）の傾向を確認する" },
      { step: 4, text: "固定型・市場連動型どちらの方向性が自社に合うかを社内で議論する" },
      { step: 5, text: "更新4〜5か月前を目安に、2〜3社へ同一条件で見積依頼を開始する" },
    ],
    caution:
      "余裕があるからこそ先送りになりがちです。情報収集だけ先に始めておくことで、いざ見積依頼を始めたときの精度が上がります。",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
  },
  "3to6": {
    summary:
      "見直しを行うのに最も適した時間帯です。今すぐ動き始めることで、複数社の見積を比較したうえで判断できます。",
    actions: [
      { step: 1, text: "現行契約の満了日・中途解約条件を正確に把握する" },
      { step: 2, text: "供給地点特定番号・月間使用量・契約電力を整理する" },
      { step: 3, text: "シミュレーターで現行プランのリスクを試算し、社内説明資料を準備する" },
      { step: 4, text: "見直し目的と比較軸を社内で共有し、承認フローを確認する" },
      { step: 5, text: "2〜3社以上に見積依頼を出し、条件・リスク・総額で比較する" },
      { step: 6, text: "見積比較結果をもとに社内承認を得て、切替手続きを開始する" },
    ],
    caution:
      "切替完了には通常1〜2か月の手続き期間が必要です。比較・決定に時間をかけすぎると切替が間に合わない可能性があります。",
    borderColor: "border-amber-200",
    bgColor: "bg-amber-50",
  },
  under3: {
    summary:
      "時間的余裕が少ない状況です。今すぐ動かないと自動更新で現行条件が延長されるリスクがあります。",
    actions: [
      { step: 1, text: "まず現行契約書を確認し、中途解約違約金・自動更新条項を把握する" },
      { step: 2, text: "必要情報（供給地点特定番号・使用量・契約電力）を即座に準備する" },
      { step: 3, text: "今週中に2〜3社へ見積依頼を出す" },
      { step: 4, text: "見積受領後、最低限の比較基準で判断し、早急に社内承認を得る" },
      { step: 5, text: "切替先が決まり次第、すぐに手続きを開始する" },
    ],
    caution:
      "時間不足で条件の十分な比較が難しい場合は、まず現行契約の継続（自動更新）を受け入れつつ、次回更新に向けて早めに準備を始めるという判断も合理的です。",
    borderColor: "border-red-200",
    bgColor: "bg-red-50",
  },
  justupdated: {
    summary:
      "今すぐ切替は難しい状況ですが、次回更新を見据えた準備を今から始めることで、選択肢が広い状態で次の判断ができます。",
    actions: [
      { step: 1, text: "現行契約の満了日と中途解約条件を改めて確認する" },
      { step: 2, text: "シミュレーターで現行プランの上振れリスクを確認し、リスクを認識する" },
      { step: 3, text: "請求書を月次でモニタリングし、変動費の動向を把握する" },
      {
        step: 4,
        text: "次回更新の6か月前（目安）をカレンダーに設定し、見直し開始のトリガーにする",
      },
      {
        step: 5,
        text: "太陽光・蓄電池等の設備投資の可能性も含め、中長期の電力戦略を検討する",
      },
    ],
    caution:
      "更新直後でも、例外的に中途解約が許容される場合（違約金が少額・条件が明示されている等）は、見直しを検討する価値があります。契約書を確認してください。",
    borderColor: "border-slate-200",
    bgColor: "bg-slate-50",
  },
};

export default function DiagnosisClient() {
  const [contractChecked, setContractChecked] = useState<Record<string, boolean>>({});
  const [selectedTiming, setSelectedTiming] = useState<TimingKey | null>(null);
  const [riskChecked, setRiskChecked] = useState<Record<string, boolean>>({});

  const toggleContract = (label: string) => {
    setContractChecked((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const toggleRisk = (label: string) => {
    setRiskChecked((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const contractCount = contractCheckItems.filter((i) => contractChecked[i.label]).length;
  const riskCount = autoRenewalRisks.filter((i) => riskChecked[i.label]).length;

  const selectedTimingOption = selectedTiming
    ? timingOptions.find((o) => o.key === selectedTiming)
    : null;
  const selectedData = selectedTiming ? timingData[selectedTiming] : null;

  return (
    <div className="space-y-6">
      {/* Sticky score bar */}
      <div className="sticky top-0 z-10 rounded-xl border border-sky-200 bg-white p-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-4 text-sm">
            <span className="font-semibold text-slate-600">
              契約状況確認: {contractCount}/{contractCheckItems.length}
            </span>
            {selectedTimingOption && (
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${selectedTimingOption.urgencyColor}`}>
                {selectedTimingOption.urgencyText}
              </span>
            )}
          </div>
          {!selectedTiming && (
            <span className="text-xs text-slate-500">更新タイミングを選択してください</span>
          )}
        </div>
        {!selectedTiming && (
          <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-sky-500 transition-all duration-300"
              style={{ width: `${(contractCount / contractCheckItems.length) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Contract status checklist */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">まず確認：現在の契約状況</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          以下の情報を手元に用意してから、該当するタイミングのパターンを確認してください。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {contractCheckItems.map((item) => (
            <div
              key={item.label}
              onClick={() => toggleContract(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                contractChecked[item.label]
                  ? "border-slate-400 bg-slate-100"
                  : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  contractChecked[item.label]
                    ? "border-slate-500 bg-slate-500 text-white"
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {contractChecked[item.label] ? "✓" : ""}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timing selector */}
      <section className="rounded-xl border border-sky-100 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          現在の更新タイミングを選択してください
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          該当するパターンをクリックすると、今取るべきアクションが表示されます。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {timingOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setSelectedTiming(option.key === selectedTiming ? null : option.key)}
              className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-200 ${
                selectedTiming === option.key
                  ? "border-sky-400 bg-sky-100 shadow-sm"
                  : "border-slate-200 bg-white hover:border-sky-200 hover:bg-sky-50"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                  selectedTiming === option.key
                    ? "border-sky-500 bg-sky-500 text-white"
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {selectedTiming === option.key ? "✓" : ""}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{option.label}</p>
                <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${option.urgencyColor}`}>
                  {option.urgencyText}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Dynamic actions based on selected timing */}
      {selectedTiming && selectedData && selectedTimingOption && (
        <section
          className={`rounded-xl border-2 p-5 transition-all duration-300 ${selectedData.borderColor} ${selectedData.bgColor}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-900">{selectedTimingOption.label}</h2>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${selectedTimingOption.urgencyColor}`}>
              {selectedTimingOption.urgencyText}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {selectedData.summary}
          </p>
          <div className="mt-4 space-y-3">
            {selectedData.actions.map(({ step, text }) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-lg border border-white bg-white bg-opacity-70 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-amber-100 bg-amber-50 p-3">
            <p className="text-sm leading-6 text-amber-800">
              <span className="font-semibold">注意点：</span>
              {selectedData.caution}
            </p>
          </div>
        </section>
      )}

      {/* Auto-renewal risks */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">自動更新を見過ごすリスク</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          多くの法人電力契約には自動更新条項が含まれています。更新時期を見逃すと、気づかないまま現行条件で1年以上延長されてしまうケースがあります。
        </p>
        <div className="mt-4 space-y-3">
          {autoRenewalRisks.map((item) => (
            <div
              key={item.label}
              onClick={() => toggleRisk(item.label)}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all duration-200 ${
                riskChecked[item.label]
                  ? "border-amber-300 bg-amber-100"
                  : "border-amber-100 bg-amber-50 hover:border-amber-200 hover:bg-amber-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-all duration-200 ${
                  riskChecked[item.label]
                    ? "border-amber-500 bg-amber-500 text-white"
                    : "border-amber-300 bg-white text-amber-500"
                }`}
              >
                {riskChecked[item.label] ? "✓" : ""}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
        {riskCount > 0 && (
          <p className="mt-3 text-sm font-semibold text-amber-700">
            {riskCount}件のリスクを確認しました。契約書で各条件を必ず確認してください。
          </p>
        )}
      </section>
    </div>
  );
}
