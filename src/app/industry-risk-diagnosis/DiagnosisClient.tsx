"use client";
import { useState } from "react";

const commonCheckItems = [
  {
    label: "現在の電力プランが固定型か市場連動型かを把握している",
    note: "プランの種類によってリスク構造が根本的に異なります。",
  },
  {
    label: "燃料費調整額に上限設定があるかを確認している",
    note: "上限なしプランは市場価格高騰時に青天井で上昇するリスクがあります。",
  },
  {
    label: "直近12か月の請求書から変動費の動向を把握している",
    note: "調整額の推移を確認することで、コスト上昇の原因を特定できます。",
  },
  {
    label: "次回の契約更新時期を把握している",
    note: "更新3〜6か月前に見直しを開始することが最も選択肢の多い状況を作れます。",
  },
];

const industries = [
  {
    name: "製造業（工場・生産設備）",
    slug: "manufacturing",
    usageCharacteristics:
      "電力使用量が多く、24時間稼働や夜間操業があるケースが多い。設備の稼働状況によって使用量が大きく変動する。",
    riskLevel: "非常に高い",
    risks: [
      "燃料費調整額・市場価格調整額の変動が年間コストに与えるインパクトが大きい",
      "電力使用量が多いため、単価が少し上がっても年間総額への影響が大きい",
      "生産コストに占める電力コストの比率が高く、価格転嫁が難しい業種では収益直撃リスクがある",
      "設備の老朽化でデマンド値（最大需要電力）が高止まりしているケースがある",
    ],
    countermeasures: [
      "固定型プランで料金の予見性を確保することが基本戦略になりやすい",
      "契約電力（デマンド値）の最適化でコスト削減できる余地がある",
      "太陽光・蓄電池の自家消費導入で昼間ピークのコストを抑制できる",
      "電力使用量の可視化（スマートメーター活用）でピークシフトを検討する",
    ],
  },
  {
    name: "小売業・スーパーマーケット",
    slug: "retail",
    usageCharacteristics:
      "店舗の照明・空調・冷蔵冷凍設備が主な消費源。営業時間中の使用量が多く、季節変動（夏・冬）もある。",
    riskLevel: "高い",
    risks: [
      "冷凍冷蔵設備は電力依存度が高く、停電・供給不安への対応が重要",
      "食品小売では電力コストを販売価格に転嫁しにくく、原価圧迫リスクが大きい",
      "夏・冬の空調需要増加と燃料費調整額の上昇が重なるタイミングが最大リスク",
      "複数店舗の契約をバラバラに管理していると、最適化の機会を逃しやすい",
    ],
    countermeasures: [
      "複数店舗を一括で見直すことで、交渉力を高め有利な条件を引き出しやすい",
      "冷蔵冷凍設備のインバーター化・省エネ設備更新でデマンドピークを抑制する",
      "太陽光発電の自家消費（屋根置き）で昼間の買電コストを削減する",
      "LED照明・高効率空調への更新で基礎的な使用量を削減する",
    ],
  },
  {
    name: "飲食業・飲食チェーン",
    slug: "food-service",
    usageCharacteristics:
      "厨房設備・空調・照明が主な消費源。店舗規模は中小が多く、使用量は比較的小さいが数が多い。",
    riskLevel: "中〜高",
    risks: [
      "低圧契約が多く、高圧に比べて単価が高い傾向がある",
      "電気・ガスの両方が値上がりしているため、光熱費全体の上昇インパクトが大きい",
      "物価高の中で客単価調整が難しく、コスト転嫁に限界がある",
      "オーナー経営の多店舗展開では、契約管理が手薄になりがち",
    ],
    countermeasures: [
      "まず請求書を確認し、現状の変動費（調整額）の構成比を把握する",
      "低圧から高圧への切替が可能な規模（50kW以上）であれば検討価値がある",
      "省エネ補助金（中小企業向け）を活用した設備更新を検討する",
      "フランチャイズの場合は本部との情報共有で、一括調達の可能性を探る",
    ],
  },
  {
    name: "医療・福祉施設（病院・介護施設）",
    slug: "healthcare",
    usageCharacteristics:
      "24時間稼働で安定供給が最優先。電力は生命維持に直結するインフラ。",
    riskLevel: "高い（コスト＋安定性の両面）",
    risks: [
      "24時間稼働のため使用量が多く、単価変動の影響が年間を通じて大きい",
      "医療機器・生命維持装置への電力供給の安定性が最優先事項",
      "公的病院・福祉施設は予算制度により、電力コスト上昇を吸収できないケースがある",
      "新電力撤退リスクへの備えとして、供給安定性の高い電力会社を選ぶ必要性が高い",
    ],
    countermeasures: [
      "供給安定性・財務基盤が強固な電力会社を優先的に比較する",
      "非常用発電設備の整備状況を確認し、停電リスクへの備えを強化する",
      "固定型プランで予算の安定化を図ることが基本戦略になりやすい",
      "太陽光＋蓄電池の導入で自家発電比率を高め、供給安定性とコスト削減を両立する",
    ],
  },
  {
    name: "オフィス（事務所・本社機能）",
    slug: "office",
    usageCharacteristics:
      "空調・照明・OA機器が主な消費源。営業時間（9〜18時）集中型で夜間は少ない。テレワーク普及で使用パターンが変化している。",
    riskLevel: "中程度",
    risks: [
      "使用量はそれほど多くないが、燃料費調整額の上昇が続くと予算超過の原因になる",
      "賃貸ビルでは電力契約をビル管理会社が一括管理しており、個別最適化が難しい場合がある",
      "テレワーク普及で使用パターンが変化しており、現行の契約電力が実態に合っていない可能性がある",
    ],
    countermeasures: [
      "ビル管理会社に電力契約の条件を確認し、変更の余地があるか照会する",
      "現在の契約電力が実際のデマンド実績に対して過大でないか確認する",
      "LED照明・高効率空調への更新で基礎的な使用量を削減する",
      "省エネ診断を受け、費用対効果の高い改善策を特定する",
    ],
  },
  {
    name: "宿泊業（ホテル・旅館）",
    slug: "hotel",
    usageCharacteristics:
      "客室・レストラン・温水・空調・照明など施設全体で24時間電力を使用。繁忙期と閑散期で使用量が大きく変動。",
    riskLevel: "高い",
    risks: [
      "繁忙期（夏・冬・連休）は使用量増加と燃料費調整額上昇が重なりやすい",
      "温水・給湯（ガス・電気）と電力両方のコスト上昇が同時に発生する",
      "旅行需要の回復局面で稼働率が上がると、電力コストも比例して上昇する",
      "温泉施設・プール付き施設は電力使用量が特に多く、変動コストの影響が大きい",
    ],
    countermeasures: [
      "繁忙期・閑散期の使用量変動に対応した時間帯別料金プランを検討する",
      "太陽光発電の自家消費で昼間の買電コストを削減する（駐車場・屋上等に設置）",
      "ヒートポンプ式給湯設備への切替で電力コストと熱エネルギーコストを最適化する",
      "電力使用量の多い繁忙期を念頭に、固定型プランで料金上限を確保する",
    ],
  },
];

export default function DiagnosisClient() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [checkedCommon, setCheckedCommon] = useState<Record<string, boolean>>({});

  const toggleCommon = (label: string) =>
    setCheckedCommon((prev) => ({ ...prev, [label]: !prev[label] }));

  const commonChecked = Object.values(checkedCommon).filter(Boolean).length;
  const selectedData = industries.find((i) => i.slug === selectedIndustry);

  return (
    <>
      {/* Sticky progress bar */}
      <div className="sticky top-0 z-10 rounded-xl border border-sky-200 bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-600">基本確認チェック進捗</span>
          <span className="text-lg font-bold text-sky-700">
            {commonChecked}/{commonCheckItems.length} 項目
          </span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-sky-500 transition-all"
            style={{
              width: `${(commonChecked / commonCheckItems.length) * 100}%`,
            }}
          />
        </div>
        {selectedData && (
          <p className="mt-1.5 text-xs text-slate-500">
            選択中の業種：{selectedData.name}（リスク水準：{selectedData.riskLevel}）
          </p>
        )}
      </div>

      {/* Common check items */}
      <div className="mt-4 space-y-3">
        {commonCheckItems.map((item) => (
          <div
            key={item.label}
            onClick={() => toggleCommon(item.label)}
            className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all ${
              checkedCommon[item.label]
                ? "border-sky-300 bg-sky-50"
                : "border-slate-200 bg-slate-50 hover:border-sky-200 hover:bg-sky-50/50"
            }`}
          >
            <div
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                checkedCommon[item.label]
                  ? "border-sky-500 bg-sky-500 text-white"
                  : "border-slate-300 bg-white"
              }`}
            >
              {checkedCommon[item.label] && <span className="text-xs">✓</span>}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Common check result */}
      {commonChecked > 0 && commonChecked < commonCheckItems.length && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-800">
            基本確認：{commonChecked}/{commonCheckItems.length} 項目完了
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-700">
            残り{commonCheckItems.length - commonChecked}項目を確認することで、業種診断の精度が高まります。
          </p>
        </div>
      )}
      {commonChecked === commonCheckItems.length && (
        <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="text-sm font-semibold text-green-800">
            基本確認：全{commonCheckItems.length}項目完了
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-700">
            基本確認が整いました。下の業種選択に進んでください。
          </p>
        </div>
      )}

      {/* Industry selector */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-700">
          自社の業種を選択してリスクと対策を確認する
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <button
              key={industry.slug}
              onClick={() =>
                setSelectedIndustry(
                  selectedIndustry === industry.slug ? null : industry.slug
                )
              }
              className={`rounded-lg border p-3 text-left transition-all ${
                selectedIndustry === industry.slug
                  ? "border-sky-400 bg-sky-50 ring-2 ring-sky-300"
                  : "border-slate-200 bg-white hover:border-sky-200 hover:bg-sky-50/50"
              }`}
            >
              <p className="text-sm font-semibold text-slate-900">{industry.name}</p>
              <p className="mt-1 text-xs text-slate-500">リスク水準：{industry.riskLevel}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Selected industry detail */}
      {selectedData && (
        <div className="mt-5 rounded-xl border-2 border-sky-300 bg-sky-50 p-5">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-bold text-slate-900">{selectedData.name}</h3>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              リスク水準：{selectedData.riskLevel}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            <span className="font-semibold text-slate-800">電力使用の特性：</span>
            {selectedData.usageCharacteristics}
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-red-700">主なリスク</p>
              <ul className="mt-2 space-y-2">
                {selectedData.risks.map((risk) => (
                  <li key={risk} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-red-200 bg-red-50 text-xs text-red-400">
                      !
                    </span>
                    <span className="text-sm leading-6 text-slate-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-sky-700">優先的な対策</p>
              <ul className="mt-2 space-y-2">
                {selectedData.countermeasures.map((measure) => (
                  <li key={measure} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-sky-200 bg-sky-100 text-xs text-sky-500">
                      ✓
                    </span>
                    <span className="text-sm leading-6 text-slate-700">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
