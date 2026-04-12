"use client";
import { useState } from "react";

const suitabilityChecks = [
  {
    category: "電力使用パターン",
    items: [
      {
        label: "日中に電力使用量のピーク時間帯がある（工場稼働・空調ピーク等）",
        note: "蓄電池は夜間の安価な電力を蓄え、昼間のピーク時間帯に放電することでコストを削減します。ピークが明確な施設ほど効果が出やすい傾向があります。",
        positive: true,
      },
      {
        label: "契約電力（デマンド）の管理に課題があり、デマンドピークを下げたい",
        note: "デマンドコントロール（ピークカット）に蓄電池を活用することで、契約電力を引き下げ、基本料金の削減につながる場合があります。",
        positive: true,
      },
      {
        label: "時間帯別電灯・夜間割引料金など、時間帯別の料金差があるプランを使っている",
        note: "昼夜の料金差が大きいほど、蓄電池のコスト削減効果が出やすくなります。時間帯別プランとの組み合わせは導入の基本パターンです。",
        positive: true,
      },
      {
        label: "電力使用量が少なく、ほぼ一定（ピークが存在しない）",
        note: "ピークがない・使用量が少ない場合、蓄電池の充放電による差益が小さく、投資回収期間が長くなりやすいため向いていない傾向があります。",
        positive: false,
      },
    ],
  },
  {
    category: "施設・設備の条件",
    items: [
      {
        label: "設置スペース（屋内・屋外の平置きまたはラック設置）を確保できる",
        note: "産業用蓄電池は一定の設置スペースが必要です。容量によっては屋外コンテナ型も検討できますが、スペースと搬入経路の確認が前提となります。",
        positive: true,
      },
      {
        label: "施設の使用期間が長期（10年以上）見込まれる",
        note: "蓄電池の投資回収には一般的に7〜12年程度かかります。施設の使用期間が投資回収期間を上回る見通しがあることが前提になります。",
        positive: true,
      },
      {
        label: "太陽光発電設備がある、または同時導入を検討している",
        note: "太陽光と蓄電池を組み合わせることで、自家消費率が高まり、コスト削減効果と停電対応力の両方が向上します。",
        positive: true,
      },
      {
        label: "建物が老朽化しており、設備投資を5年以内に縮小・終了する予定がある",
        note: "施設の転用・解体が近い場合、蓄電池の投資回収が間に合わない可能性が高く、導入の優先度は低くなります。",
        positive: false,
      },
    ],
  },
  {
    category: "資金・予算の条件",
    items: [
      {
        label: "初期投資を一定程度手当てできる（1,000万円〜規模の投資に耐えられる）",
        note: "産業用蓄電池の導入コストは容量・設置条件によりますが、数百万〜数千万円規模になることが一般的です。補助金活用で負担を減らすことも可能です。",
        positive: true,
      },
      {
        label: "国・自治体の補助金を活用できる状況にある",
        note: "経済産業省や環境省の補助金（蓄電池・再エネ関連）が年度ごとに公募されています。補助金を活用することで初期投資を大幅に圧縮できる場合があります。",
        positive: true,
      },
      {
        label: "PPAや融資型の導入スキームを活用できる",
        note: "初期投資なしで蓄電池を導入できるリース・PPA（電力購入協定）型のスキームも普及しています。自己資金が限られる場合でも導入を検討できます。",
        positive: true,
      },
    ],
  },
  {
    category: "BCP・停電対策の観点",
    items: [
      {
        label: "停電時も電力を継続供給する必要がある（病院・データセンター・食品工場等）",
        note: "BCP（事業継続計画）の観点から、停電時のバックアップ電源としての蓄電池導入はコスト削減だけでなく安全・安心の投資として位置づけられます。",
        positive: true,
      },
      {
        label: "非常用発電機（ディーゼル等）があるが、起動までのギャップをカバーしたい",
        note: "蓄電池は瞬時に放電できるため、非常用発電機が起動するまでの数秒〜数十秒のギャップを補う用途にも活用できます。",
        positive: true,
      },
    ],
  },
];

const allPositiveItems = suitabilityChecks.flatMap((s) =>
  s.items.filter((i) => i.positive)
);
const allNegativeItems = suitabilityChecks.flatMap((s) =>
  s.items.filter((i) => !i.positive)
);
const totalPositive = allPositiveItems.length;
const totalNegative = allNegativeItems.length;

function getScoreResult(positiveChecked: number, negativeChecked: number) {
  if (negativeChecked >= 2) {
    return {
      label: "蓄電池は向いていない可能性が高い",
      color: "border-amber-400 bg-amber-50",
      titleColor: "text-amber-800",
      message: `「向いていない」条件が${negativeChecked}項目該当しています。他の優先度が高い対策（電力契約の見直し・太陽光発電など）を先に検討することをお勧めします。`,
    };
  }
  if (positiveChecked >= 7) {
    return {
      label: "蓄電池導入に非常に向いている",
      color: "border-sky-400 bg-sky-50",
      titleColor: "text-sky-800",
      message: `「向いている」条件が${positiveChecked}項目該当しています。蓄電池導入の費用対効果が高い可能性があります。具体的な検討を進めることを強くお勧めします。`,
    };
  }
  if (positiveChecked >= 4) {
    return {
      label: "蓄電池導入を検討する価値がある",
      color: "border-green-300 bg-green-50",
      titleColor: "text-green-800",
      message: `「向いている」条件が${positiveChecked}項目該当しています。導入メリットがある可能性があります。電力使用量データを整理し、具体的な試算を行うことをお勧めします。`,
    };
  }
  return {
    label: "条件を整えてから再検討",
    color: "border-slate-300 bg-slate-50",
    titleColor: "text-slate-700",
    message: `現時点では「向いている」条件の該当数が少ない状況です。まず電力契約の見直しや省エネ設備更新を優先し、その後に蓄電池を検討することをお勧めします。`,
  };
}

export default function DiagnosisClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (label: string) =>
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));

  const positiveChecked = allPositiveItems.filter((i) => checked[i.label]).length;
  const negativeChecked = allNegativeItems.filter((i) => checked[i.label]).length;
  const totalChecked = positiveChecked + negativeChecked;
  const totalItems = totalPositive + totalNegative;

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
            向いている：{positiveChecked}件　向いていない：{negativeChecked}件
          </p>
        )}
      </div>

      {/* Category sections */}
      {suitabilityChecks.map((section) => (
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
                      {item.positive ? "向いている" : "向いていない"}
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
          {positiveChecked >= 4 && negativeChecked < 2 && (
            <div className="mt-3 rounded-lg border border-sky-300 bg-white/70 p-3">
              <p className="text-sm font-semibold text-sky-800">次のステップ</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                <li>電力使用量データ（1年分）とデマンド実績を整理する</li>
                <li>補助金の公募情報（経済産業省・環境省・都道府県）を確認する</li>
                <li>蓄電池メーカー・EPC事業者に現場調査・見積依頼を行う</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
