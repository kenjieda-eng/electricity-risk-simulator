import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "見積比較前チェック診断｜電力見積依頼を始める前に確認したいこと";
const pageDescription =
  "電力見積を依頼する前に確認すべき情報・資料・社内調整を診断チェックリスト形式で整理。準備不足のまま見積を取ると比較精度が下がるリスクを防ぐための実務チェックページです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 見積 比較前 チェック",
    "電気料金 見積依頼 準備",
    "法人 電力見積 何を用意する",
    "電力契約 見積比較 準備リスト",
    "電気料金 見積 比較方法",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/quotation-comparison-pre-check",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/quotation-comparison-pre-check",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

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

export default function QuotationComparisonPreCheckPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          見積比較前チェック診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力見積の比較は「条件を揃えること」が精度の前提です。情報が不足したまま見積を依頼すると、前提条件がそろわない見積が届いたり、比較に使えない資料になってしまうことがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、見積依頼を始める前に確認・準備すべき事項を「必須情報」「あると有効な情報」「社内調整事項」「見積受領後の確認ポイント」の4カテゴリでチェックリスト形式で整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>見積依頼に必須の情報・書類一覧</li>
            <li>精度を高めるためにあると有効な情報</li>
            <li>見積依頼前に社内で確認すべき事項</li>
            <li>見積受領後の条件確認チェックリスト</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ準備が見積の質を左右するのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力の見積は「提供された情報の精度」に依存します。使用量データが不完全だと年間コストの試算精度が下がり、比較判断が難しくなります。また、供給地点特定番号が不明だと、そもそも見積計算を開始できない電力会社もあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積の比較方法については{" "}
            <Link href="/compare-business-electricity-estimates" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人の電気料金見積比較の方法
            </Link>{" "}
            もあわせて確認してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">必須情報：揃っていないと見積が出せない（5項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の情報は、見積依頼の際に電力会社が必ず必要とする基本情報です。すべて揃えてから依頼を開始してください。
          </p>
          <div className="mt-4 space-y-3">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-sky-100 bg-sky-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-sky-300 bg-white text-xs text-sky-500">
                  ✓
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

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">あると有効な情報：見積精度と提案品質を高める（5項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            必須ではありませんが、以下の情報を提供することで、より実態に即した見積を取得できます。
          </p>
          <div className="mt-4 space-y-3">
            {preferredItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">社内調整事項：見積前に共有しておきたいこと（4項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積取得後に社内の意見が割れないよう、以下の点を事前に確認・共有しておくことで、比較から決定までの流れがスムーズになります。
          </p>
          <div className="mt-4 space-y-3">
            {internalItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積受領後の確認ポイント（7項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書が届いたら、比較前に以下の点を確認してください。条件が揃っていない見積同士を比べても、正確な判断はできません。
          </p>
          <div className="mt-4 space-y-3">
            {comparisonPoints.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  ✓
                </span>
                <p className="text-sm leading-6 text-slate-700">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            見積書の読み方の詳細は{" "}
            <Link href="/how-to-read-business-electricity-quotation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人向け電気料金見積書の見方
            </Link>{" "}
            を参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">準備から見積比較までのステップ整理</h2>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "必須情報（供給地点特定番号・使用量・契約電力等）を揃える" },
              { step: 2, text: "シミュレーターで現行プランのリスクを試算し、社内説明の根拠を準備する" },
              { step: 3, text: "見直しの目的と比較軸を社内で共有する" },
              { step: 4, text: "2〜3社以上の電力会社に同一条件で見積依頼を出す" },
              { step: 5, text: "見積受領後、前提条件が揃っているかを確認してから比較を行う" },
              { step: 6, text: "年間総額・変動リスク・契約条件の3軸で比較し、社内承認を得る" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="見積比較の準備から比較・判断まで、関連する情報をまとめました。"
          links={[
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "見積書の各項目の意味と、比較判断に使える確認ポイントを解説。",
            },
            {
              href: "/compare-business-electricity-estimates",
              title: "法人の電気料金見積比較の方法",
              description: "複数の見積を受け取ったときに、どう比較すべきかを解説。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "電力契約見直しチェックリスト",
              description: "見積依頼前の準備全般を網羅したチェックリスト。",
            },
            {
              href: "/bill-check-diagnosis",
              title: "請求書確認ポイント診断",
              description: "見積依頼に必要な情報を請求書から確認するチェックリスト。",
            },
            {
              href: "/contract-renewal-timing-diagnosis",
              title: "契約更新タイミング診断",
              description: "いつ見積依頼を始めるべきかを更新時期から逆算して確認。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "単価以外に確認したい比較軸を整理。見積比較の精度を高める。",
            },
          ]}
        />

        <ContentCta
          heading="見積比較の前にリスクを試算する"
          description="見積依頼を始める前にシミュレーターで現行プランの上振れリスクを確認しておくと、比較の判断基準として活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="quotation-comparison-pre-check" />
      </div>
    </main>
  );
}
