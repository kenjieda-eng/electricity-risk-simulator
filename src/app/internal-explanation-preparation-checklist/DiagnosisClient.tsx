"use client";
import { useState } from "react";

const currentStatusItems = [
  {
    label: "現在の電力契約の基本情報（プラン名・電力会社・契約電力・契約期間）",
    note: "説明の出発点として、現行契約がどのような条件かを整理します。プラン名・電力会社・契約種別（高圧・低圧等）・契約電力（kW）・満了日を1枚の表にまとめると説明しやすくなります。",
    section: "current",
  },
  {
    label: "直近12か月分の月次電気料金（総額・使用量・主要項目別内訳）",
    note: "月次の請求金額推移グラフがあると、「いつから・どのくらい上がったか」が視覚的に伝わります。前年同月比での増減額も示すと、上昇の実感を共有しやすくなります。",
    section: "current",
  },
  {
    label: "電気料金が上昇している場合、その原因の特定（燃料費調整額・市場価格調整額・再エネ賦課金等）",
    note: "「なぜ上がったか」を説明できないと、見直しの必要性に説得力がありません。変動費項目ごとの金額推移を整理し、上昇原因を特定しておきましょう。",
    section: "current",
  },
  {
    label: "年間電気料金の総額と、売上・原価に占める比率（電力コスト比率）",
    note: "「年間○○万円かかっている」という絶対額と、「原価の○%を占める」という相対的な大きさの両方を示すことで、見直しの優先度が伝わりやすくなります。",
    section: "current",
  },
];

const riskItems = [
  {
    label: "シミュレーターを使った今後の上振れリスク試算結果",
    note: "現行プランのままだと今後どの程度のコスト上振れが起こりうるかを試算した結果を示します。「楽観シナリオ・標準シナリオ・悲観シナリオ」の3パターンで示すと理解が得やすくなります。",
    section: "risk",
  },
  {
    label: "現在のプランが固定型か市場連動型か、それぞれのリスク構造の説明",
    note: "市場連動型は上振れリスクが大きいこと、固定型は安定性が高いが割高になる可能性があることを簡潔に説明します。プラン選択の方向性の根拠になります。",
    section: "risk",
  },
  {
    label: "燃料費調整額に上限設定があるかどうか（上限なしの場合はリスクの大きさを明示）",
    note: "上限なしプランのリスクは、2021〜2022年の価格高騰局面の実績データで示すと説得力が増します。「過去の高騰局面では○○万円上振れした」という事実があれば有効です。",
    section: "risk",
  },
  {
    label: "契約の自動更新リスク（更新を見逃した場合の影響）",
    note: "「見直しをしない場合に起こりうること」を示すことで、意思決定を促す材料になります。自動更新で不利な条件が延長されるリスクを数値で示せると効果的です。",
    section: "risk",
  },
];

const comparisonItems = [
  {
    label: "2社以上の見積書（同一前提条件での比較）",
    note: "1社だけでは比較にならず、社内承認を得にくい場合があります。最低2〜3社の見積を揃え、同一前提条件での比較であることを明示してください。",
    section: "comparison",
  },
  {
    label: "現行プランとの年間総額比較（削減見込み額・削減率）",
    note: "「現行より年間○○万円削減できる」という数字は意思決定の最大の根拠になります。変動費を含めた年間総額ベースで比較し、削減見込みの根拠も示すことが重要です。",
    section: "comparison",
  },
  {
    label: "各プランの変動リスク比較（固定費・変動費の構成比、燃料費調整額の上限有無）",
    note: "単価だけでなく、リスク構造の違いを比較することで、単純な最安値選びではなく「自社に合ったリスク水準の選択」として説明できます。",
    section: "comparison",
  },
  {
    label: "切替先電力会社の信頼性・実績情報（倒産リスク等）",
    note: "新電力の撤退・倒産リスクを懸念する声が出ることがあります。切替先の設立年・資本関係・実績を簡単に示しておくと安心感につながります。",
    section: "comparison",
  },
  {
    label: "契約期間・中途解約条件の比較（各社の違いを明示）",
    note: "「縛り期間がどれくらいあるか」「中途解約時の違約金はいくらか」は特に経営者・法務担当が気にするポイントです。各社の条件を横断的に整理してください。",
    section: "comparison",
  },
];

const internalProcessItems = [
  {
    label: "稟議・決裁に必要な書類フォーマットを確認・用意している",
    note: "社内の稟議書フォーマットに合わせて資料を準備することで、担当部門の手戻りを減らせます。見積書の原本・比較表・説明資料をセットで提出できるようにしてください。",
    section: "process",
  },
  {
    label: "関係部署（経理・経営企画・法務・施設管理等）への事前根回しが済んでいる",
    note: "稟議で突然反対意見が出ることを防ぐため、意思決定に関わる部署へ事前に内容を共有し、懸念事項を把握・対処しておくことが有効です。",
    section: "process",
  },
  {
    label: "切替スケジュールと手続きの工数を整理している",
    note: "承認後に「いつまでに、誰が、何をするか」を整理しておくと、決裁後に素早く動けます。切替完了まで通常1〜2か月かかる点を踏まえたスケジュールを準備してください。",
    section: "process",
  },
  {
    label: "切替後のモニタリング方法（コスト効果確認の仕組み）を説明できる",
    note: "「切り替えた後にきちんと効果を検証します」という説明があると、意思決定者の不安を軽減しやすくなります。月次のコスト確認方法を簡単に示すことを推奨します。",
    section: "process",
  },
];

const allItems = [
  ...currentStatusItems,
  ...riskItems,
  ...comparisonItems,
  ...internalProcessItems,
];

const sections = [
  {
    key: "current",
    title: "① 現状確認：揃えておくべき情報（4項目）",
    description: "「現在どのような状況か」を示す情報です。請求書と契約書から整理できます。",
    items: currentStatusItems,
    borderColor: "border-slate-200",
    bgColor: "bg-slate-50",
    checkBorder: "border-slate-300",
    checkBg: "bg-white",
    checkActive: "border-slate-500 bg-slate-500",
    itemBorder: "border-slate-200",
    itemBg: "bg-slate-50",
    itemActiveBorder: "border-slate-400",
    itemActiveBg: "bg-slate-100",
  },
  {
    key: "risk",
    title: "② リスク説明：上振れリスクの試算と根拠（4項目）",
    description: "「このままにしておくとどうなるか」を示す情報です。シミュレーターの活用が有効です。",
    items: riskItems,
    borderColor: "border-amber-100",
    bgColor: "bg-amber-50",
    checkBorder: "border-amber-300",
    checkBg: "bg-white",
    checkActive: "border-amber-500 bg-amber-500",
    itemBorder: "border-amber-100",
    itemBg: "bg-amber-50",
    itemActiveBorder: "border-amber-400",
    itemActiveBg: "bg-amber-100",
  },
  {
    key: "comparison",
    title: "③ 比較資料：見積比較と判断根拠（5項目）",
    description: "「なぜこの選択肢を選ぶか」の根拠となる情報です。複数社の見積書をもとに整理します。",
    items: comparisonItems,
    borderColor: "border-sky-100",
    bgColor: "bg-sky-50",
    checkBorder: "border-sky-300",
    checkBg: "bg-white",
    checkActive: "border-sky-500 bg-sky-500",
    itemBorder: "border-sky-100",
    itemBg: "bg-sky-50",
    itemActiveBorder: "border-sky-400",
    itemActiveBg: "bg-sky-100",
  },
  {
    key: "process",
    title: "④ 社内プロセスの準備（4項目）",
    description: "「スムーズに意思決定してもらうための準備」です。根回し・スケジュール・フォローアップの整理が含まれます。",
    items: internalProcessItems,
    borderColor: "border-slate-200",
    bgColor: "bg-slate-50",
    checkBorder: "border-slate-300",
    checkBg: "bg-white",
    checkActive: "border-slate-500 bg-slate-500",
    itemBorder: "border-slate-200",
    itemBg: "bg-slate-50",
    itemActiveBorder: "border-slate-400",
    itemActiveBg: "bg-slate-100",
  },
];

function getReadinessResult(checked: number, total: number) {
  const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
  if (pct >= 90) {
    return {
      label: "社内説明の準備が整っています",
      color: "border-green-400 bg-green-50",
      titleColor: "text-green-800",
      message: `${checked}/${total}項目（${pct}%）が準備完了です。社内説明・稟議に進める状態です。説明資料を最終確認してから提出してください。`,
    };
  }
  if (pct >= 60) {
    return {
      label: "準備はほぼ整っています",
      color: "border-sky-400 bg-sky-50",
      titleColor: "text-sky-800",
      message: `${checked}/${total}項目（${pct}%）が準備完了です。未チェック項目を確認し、残りの準備を進めることで説明の説得力が高まります。`,
    };
  }
  if (pct >= 30) {
    return {
      label: "準備を進めてから説明に臨みましょう",
      color: "border-amber-400 bg-amber-50",
      titleColor: "text-amber-800",
      message: `${checked}/${total}項目（${pct}%）が準備完了です。まだ準備が不足しています。未チェック項目を確認・収集してから社内説明に臨むことをお勧めします。`,
    };
  }
  return {
    label: "準備がまだ不足しています",
    color: "border-slate-300 bg-slate-50",
    titleColor: "text-slate-700",
    message: `${checked}/${total}項目（${pct}%）が準備完了です。準備が不足しています。まず「現状確認」のカテゴリから情報を収集してください。`,
  };
}

export default function DiagnosisClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (label: string) =>
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));

  const totalChecked = allItems.filter((i) => checked[i.label]).length;
  const total = allItems.length;
  const pct = total > 0 ? Math.round((totalChecked / total) * 100) : 0;

  const result = getReadinessResult(totalChecked, total);

  const sectionCounts = sections.map((s) => ({
    key: s.key,
    checked: s.items.filter((i) => checked[i.label]).length,
    total: s.items.length,
  }));

  return (
    <>
      {/* Sticky progress bar */}
      <div className="sticky top-0 z-10 rounded-xl border border-sky-200 bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-600">準備完了度</span>
          <span className="text-lg font-bold text-sky-700">
            {totalChecked}/{total} 項目（{pct}%）
          </span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-sky-500 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        {totalChecked > 0 && (
          <div className="mt-1.5 flex flex-wrap gap-2">
            {sectionCounts.map((s) => (
              <span key={s.key} className="text-xs text-slate-500">
                {s.key === "current" ? "現状" : s.key === "risk" ? "リスク" : s.key === "comparison" ? "比較" : "社内"}：{s.checked}/{s.total}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Section-based checklists */}
      {sections.map((section) => {
        const sCount = sectionCounts.find((s) => s.key === section.key);
        return (
          <div key={section.key} className="mt-5">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-semibold text-slate-800">{section.title}</h3>
              {sCount && sCount.checked > 0 && (
                <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-700">
                  {sCount.checked}/{sCount.total}完了
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-slate-600">{section.description}</p>
            <div className="mt-3 space-y-3">
              {section.items.map((item) => (
                <div
                  key={item.label}
                  onClick={() => toggle(item.label)}
                  className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all ${
                    checked[item.label]
                      ? `${section.itemActiveBorder} ${section.itemActiveBg}`
                      : `${section.itemBorder} ${section.itemBg} hover:border-sky-200 hover:bg-sky-50/50`
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                      checked[item.label]
                        ? section.checkActive + " text-white"
                        : `${section.checkBorder} ${section.checkBg}`
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
        );
      })}

      {/* Dynamic results */}
      {totalChecked > 0 && (
        <div className={`mt-6 rounded-xl border-2 p-5 ${result.color}`}>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-900">準備状況の診断結果</h2>
            <span className={`rounded-full px-3 py-1 text-sm font-bold ${result.titleColor} bg-white/60`}>
              {result.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">{result.message}</p>

          {/* Show missing sections */}
          {sectionCounts.some((s) => s.checked < s.total) && (
            <div className="mt-3 rounded-lg border border-slate-200 bg-white/70 p-3">
              <p className="text-sm font-semibold text-slate-800">未完了の準備カテゴリ</p>
              <ul className="mt-2 space-y-1">
                {sectionCounts
                  .filter((s) => s.checked < s.total)
                  .map((s) => {
                    const sec = sections.find((sec) => sec.key === s.key);
                    return (
                      <li key={s.key} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-xs text-slate-400">
                          {s.total - s.checked}
                        </span>
                        {sec?.title.split("：")[0]}：残り{s.total - s.checked}項目
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
