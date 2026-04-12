"use client";
import { useState } from "react";

const suitabilityCategories = [
  {
    category: "設置場所・建物の条件",
    items: [
      {
        label: "屋根・屋上・駐車場に一定の面積がある（目安：50坪以上のスペース）",
        note: "自家消費型太陽光発電では、屋根・屋上・駐車場の遊休スペースが設置面積となります。10kW以上のシステムを設置するには数十坪以上のスペースが必要です。",
        positive: true,
      },
      {
        label: "屋根の向きが南向き〜東西向きで、日当たりが確保されている",
        note: "南向きが最も発電効率が高く、東・西向きでも一定の発電量が期待できます。北向き屋根や周囲の建物・木によって日当たりが大幅に遮られる場合は発電量が少なくなります。",
        positive: true,
      },
      {
        label: "建物の築年数が新しく（目安：20年以内）、屋根の強度が十分にある",
        note: "太陽光パネルは重量があるため、屋根の耐荷重が不足している場合は補強工事が必要になるか、設置が難しい場合があります。事前に構造調査が推奨されます。",
        positive: true,
      },
      {
        label: "建物が老朽化しており、近いうちに解体・建替えの予定がある",
        note: "建物の寿命が残り5〜10年程度の場合、太陽光発電の投資回収（一般的に7〜15年）が間に合わない可能性があります。",
        positive: false,
      },
      {
        label: "賃借建物であり、オーナーの許可取得が難しい",
        note: "賃借物件では建物オーナーの同意が必要です。オーナーの理解が得られない場合は設置が困難になります。ただし、最近はオーナー同意を得た導入事例も増えています。",
        positive: false,
      },
    ],
  },
  {
    category: "電力使用パターン",
    items: [
      {
        label: "昼間（9〜17時頃）に電力使用量が多い",
        note: "太陽光発電は昼間に発電するため、昼間の消費量が多いほど自家消費率が高まり、コスト削減効果が出やすくなります。夜間のみ稼働する工場などは自家消費率が低くなります。",
        positive: true,
      },
      {
        label: "年間を通じて安定した電力需要がある",
        note: "太陽光発電量は季節・天候によって変動します。通年で電力需要がある施設（工場・病院・オフィス等）は自家消費率を確保しやすい傾向があります。",
        positive: true,
      },
      {
        label: "業種的に電力使用量が多く、現在の買電コストが高い",
        note: "買電単価が高いほど、同じ発電量でも経済的なメリットが大きくなります。特に高圧・特別高圧の需要家や電力多消費産業では投資回収が早くなりやすい傾向があります。",
        positive: true,
      },
      {
        label: "稼働が週末・祝日含む年中で、発電量を無駄なく使いやすい",
        note: "週5日稼働・祝日休業の施設では、休日の余剰発電量が多くなります。余剰電力を売電（余剰売電）する形でも収益化できますが、自家消費型の場合は自家使用量の最大化が基本です。",
        positive: true,
      },
    ],
  },
  {
    category: "資金・予算・補助金",
    items: [
      {
        label: "初期投資の目処が立っている（100kWシステムで数百万〜数千万円規模）",
        note: "産業用太陽光発電の導入コストは容量・工事条件によって異なりますが、100kWクラスで概ね1,000〜3,000万円程度が目安です。補助金活用で圧縮できる場合があります。",
        positive: true,
      },
      {
        label: "国・自治体の補助金・税制優遇の活用を検討できる",
        note: "中小企業省エネ補助金・RE100関連補助金・地方自治体の補助制度など、太陽光設備に活用できる補助金が複数あります。毎年公募内容が変わるため最新情報の確認が必要です。",
        positive: true,
      },
      {
        label: "PPA（電力購入協定）や屋根貸しモデルを活用できる可能性がある",
        note: "初期費用ゼロで太陽光を設置できるPPAモデルや、屋根を事業者に貸すことで固定賃料を受け取る屋根貸しモデルも選択肢になります。自己資金が限られる場合でも検討できます。",
        positive: true,
      },
    ],
  },
  {
    category: "環境・ESG目標との連携",
    items: [
      {
        label: "CO2削減・脱炭素目標（RE100・SBT等）への取り組みが求められている",
        note: "自家消費型太陽光は再エネ由来の電力を直接使用することで、Scope2（間接排出）の削減に直結します。サプライチェーン上の要求や投資家対応としても有効です。",
        positive: true,
      },
      {
        label: "取引先・顧客から再エネ使用の証明を求められている",
        note: "自家消費型太陽光は、再エネ使用の証明（電力使用報告・グリーン電力証書等）に活用できます。非化石証書と組み合わせることで証明力がさらに高まります。",
        positive: true,
      },
    ],
  },
];

const allPositiveItems = suitabilityCategories.flatMap((s) =>
  s.items.filter((i) => i.positive)
);
const allNegativeItems = suitabilityCategories.flatMap((s) =>
  s.items.filter((i) => !i.positive)
);
const totalItems =
  allPositiveItems.length + allNegativeItems.length;

function getScoreResult(positiveChecked: number, negativeChecked: number) {
  if (negativeChecked >= 2) {
    return {
      label: "太陽光導入には注意が必要",
      color: "border-amber-400 bg-amber-50",
      titleColor: "text-amber-800",
      message: `「注意が必要」な条件が${negativeChecked}項目該当しています。PPAモデルや屋根貸しなど従来とは異なるアプローチや、他の優先度の高い対策を先に検討することをお勧めします。`,
    };
  }
  if (positiveChecked >= 8) {
    return {
      label: "自家消費型太陽光に非常に向いている",
      color: "border-sky-400 bg-sky-50",
      titleColor: "text-sky-800",
      message: `「向いている」条件が${positiveChecked}項目該当しています。費用対効果が高い可能性があります。設置スペースの確認と施工業者への見積依頼から具体的な検討を始めてください。`,
    };
  }
  if (positiveChecked >= 5) {
    return {
      label: "太陽光導入を検討する価値がある",
      color: "border-green-300 bg-green-50",
      titleColor: "text-green-800",
      message: `「向いている」条件が${positiveChecked}項目該当しています。導入メリットがある可能性があります。設置スペースと電力使用量データを整理し、具体的な試算を行うことをお勧めします。`,
    };
  }
  return {
    label: "まず他の対策を優先する",
    color: "border-slate-300 bg-slate-50",
    titleColor: "text-slate-700",
    message: `現時点では「向いている」条件の該当数が少ない状況です。まず電力契約の見直しや省エネ設備更新を優先し、その後に太陽光発電を改めて検討することをお勧めします。`,
  };
}

export default function DiagnosisClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (label: string) =>
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));

  const positiveChecked = allPositiveItems.filter((i) => checked[i.label]).length;
  const negativeChecked = allNegativeItems.filter((i) => checked[i.label]).length;
  const totalChecked = positiveChecked + negativeChecked;

  const result = getScoreResult(positiveChecked, negativeChecked);

  return (
    <>
      {/* Sticky progress bar */}
      <div className="sticky top-0 z-10 rounded-xl border border-sky-200 bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-600">チェック進捗</span>
          <span className="text-lg font-bold text-sky-700">
            {totalChecked}/{totalItems} 項目
          </span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-sky-500 transition-all"
            style={{
              width: `${totalItems > 0 ? (totalChecked / totalItems) * 100 : 0}%`,
            }}
          />
        </div>
        {totalChecked > 0 && (
          <p className="mt-1.5 text-xs text-slate-500">
            向いている：{positiveChecked}件　注意が必要：{negativeChecked}件
          </p>
        )}
      </div>

      {/* Category sections */}
      {suitabilityCategories.map((section) => (
        <div key={section.category} className="mt-5">
          <h3 className="text-base font-semibold text-slate-800">{section.category}</h3>
          <div className="mt-3 space-y-3">
            {section.items.map((item) => (
              <div
                key={item.label}
                onClick={() => toggle(item.label)}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all ${
                  checked[item.label]
                    ? item.positive
                      ? "border-sky-400 bg-sky-100"
                      : "border-amber-400 bg-amber-100"
                    : item.positive
                    ? "border-sky-100 bg-sky-50 hover:border-sky-300"
                    : "border-amber-100 bg-amber-50 hover:border-amber-300"
                }`}
              >
                <div
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                    checked[item.label]
                      ? item.positive
                        ? "border-sky-500 bg-sky-500 text-white"
                        : "border-amber-500 bg-amber-500 text-white"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {checked[item.label] && (
                    <span className="text-xs">{item.positive ? "✓" : "✕"}</span>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        item.positive
                          ? "bg-sky-100 text-sky-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.positive ? "向いている" : "注意が必要"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Dynamic results */}
      {totalChecked > 0 && (
        <div className={`mt-6 rounded-xl border-2 p-5 ${result.color}`}>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-900">診断結果</h2>
            <span className={`rounded-full px-3 py-1 text-sm font-bold ${result.titleColor} bg-white/60`}>
              {result.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">{result.message}</p>
          {positiveChecked >= 5 && negativeChecked < 2 && (
            <div className="mt-3 rounded-lg border border-sky-300 bg-white/70 p-3">
              <p className="text-sm font-semibold text-sky-800">次のステップ</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                <li>設置可能スペースの確認（屋根・屋上・駐車場の面積・向き・日当たり）</li>
                <li>直近1年の電力使用量データを整理し、昼間使用量の比率を確認する</li>
                <li>複数の施工業者・PPA事業者に現場調査・見積依頼を行う</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
