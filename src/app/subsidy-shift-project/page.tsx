import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["subsidies"];


const pageTitle = "SHIFT事業と電力コスト戦略｜SBT認証・脱炭素経営支援の活用";
const pageDescription =
  "環境省「脱炭素化支援機構・SHIFT事業」の概要と電力コスト戦略への活用を解説。SBT認証取得やGHG削減計画策定に係る費用への補助と、省エネ・再エネ導入との組み合わせ方法を紹介します。2026年度版。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-shift-project";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "SHIFT事業 補助金",
    "SBT認証 費用補助",
    "脱炭素経営 支援",
    "GHG削減 補助金",
    "サプライチェーン 脱炭素",
    "環境省 脱炭素補助金",
    "2026年度 脱炭素補助",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

const overviewTable = [
  { item: "事業名", value: "脱炭素化に向けた省エネ等の推進事業（SHIFT事業）" },
  { item: "実施機関", value: "環境省" },
  { item: "主な支援内容", value: "GHG排出量算定・削減計画策定・SBT等認証取得費用、省エネ設備導入" },
  { item: "補助率（目安）", value: "対象費用の概ね1/2〜2/3以内（事業区分・規模による）" },
  { item: "補助上限額（目安）", value: "計画策定支援: 最大2,000万円 ／ 設備導入支援: 最大1億円（中小）、最大5,000万円（大企業）" },
  { item: "対象企業", value: "SBT認証の取得を目指す企業、GHG排出削減計画を策定する中小〜大企業" },
  { item: "公募時期（目安）", value: "2026年6月〜8月（一次公募予定）※環境省公式サイトで要確認" },
  { item: "採択率（参考）", value: "過去実績から概ね50〜60%程度（年度・区分により変動）" },
  { item: "特徴", value: "削減計画策定後の設備投資（SII省エネ補助金・PPA補助金）との組み合わせが効果的" },
];

const subsidyTargets = [
  { label: "GHG排出量の算定・モニタリング費用", detail: "サプライチェーン排出量（Scope1〜3）の算定に係るコンサルタント費用・システム費用" },
  { label: "脱炭素化計画の策定費用", detail: "SBT・RE100等の認定基準に沿った削減目標・行動計画の策定コンサルタント費用" },
  { label: "認証取得に係る費用", detail: "SBT（Science Based Targets）の申請・審査費用の一部" },
  { label: "省エネ診断費用", detail: "専門機関による省エネ診断の実施に係る費用" },
  { label: "従業員研修・啓発費用", detail: "脱炭素化推進のための社内研修・教材作成費用（条件による）" },
];

const simulationPatterns = [
  {
    label: "パターンA：中小製造業のSBT認証取得",
    cost: "SBT申請・コンサル費：約200〜400万円",
    subsidy: "補助率1/2の場合、概ね100〜200万円の補助",
    benefit: "認証取得により大手顧客からの取引継続・新規獲得機会が増える",
    note: "SBT取得によりサプライチェーン要請をクリアする中小企業が増加中",
  },
  {
    label: "パターンB：中堅企業のGHG削減計画策定＋省エネ連動",
    cost: "GHG算定・計画策定：約500〜1,000万円",
    subsidy: "概ね250〜500万円の補助を想定",
    benefit: "計画策定後に省エネ補助金（SII）と組み合わせて設備投資も支援",
    note: "SHIFT事業で計画を策定し、SII補助金で設備更新する二段活用が効果的",
  },
  {
    label: "パターンC：グループ企業のScope3削減対応",
    cost: "Scope3算定・サプライヤー教育：1,000〜3,000万円",
    subsidy: "区分・規模によるが数百万〜1,000万円超の補助も",
    benefit: "開示義務（TCFD・CSRD）対応のコスト削減に直結",
    note: "グループ全体でのGHG管理体制構築に有効",
  },
];

const steps = [
  { step: "STEP 1", label: "公募要領の確認・区分の選択", detail: "SHIFT事業は複数の区分に分かれている場合があります。自社の状況（中小・中堅・大企業、Scope1〜3の対象等）に合った区分を選択する。" },
  { step: "STEP 2", label: "GHG排出量の現状把握", detail: "現状のScope1〜3排出量を概算でも把握しておくと申請書の説得力が増す。既存の環境報告書や電力使用量データを活用する。" },
  { step: "STEP 3", label: "コンサルタント・実施機関の選定", detail: "SHIFT事業では登録コンサルタント等を経由する場合があります。補助金申請実績のある事業者を選ぶと採択率が上がる傾向があります。" },
  { step: "STEP 4", label: "事業計画書・申請書の作成", detail: "削減目標・スケジュール・予算計画を明記する。電力コスト削減への具体的な言及が評価される。" },
  { step: "STEP 5", label: "採択・計画策定の実施", detail: "採択後に計画策定を開始。途中報告が求められる場合があります。" },
  { step: "STEP 6", label: "完了報告・補助金受領", detail: "計画策定完了後に実績報告書を提出して補助金を受領する。" },
];

const pitfalls = [
  { title: "「計画策定だけ」で終わらせる", detail: "SHIFT事業は計画策定を支援しますが、その後の設備投資は別の補助金（SII等）を組み合わせる必要があります。計画策定後のロードマップを見据えて動くことが重要です。" },
  { title: "認証要件と補助対象費用のズレ", detail: "SBT申請費用のうち補助対象外となる費用がある場合があります。公募要領で補助対象費用の定義を必ず確認してください。" },
  { title: "計画が絵に描いた餅になる", detail: "採択後に実際の削減施策が進まないと、次回の申請や顧客への説明に矛盾が生じます。実行可能な目標設定が重要です。" },
  { title: "電力データの収集が不十分", detail: "GHG算定にはScope2（電力由来）の正確なデータが必要です。事前に電力使用量の実績データを取引電力会社から入手しておきましょう。" },
];

export default function SubsidyShiftProjectPage() {
  return (
    <>
      <ArticleJsonLd
        headline="SHIFT事業と電力コスト戦略｜SBT認証・脱炭素経営支援の活用"
        description="環境省「脱炭素化支援機構・SHIFT事業」の概要と電力コスト戦略への活用を解説。SBT認証取得やGHG削減計画策定に係る費用への補助と、省エネ・再エネ導入との組み合わせ方法を紹介します。2026年度版。"
        url="https://simulator.eic-jp.org/subsidy-shift-project"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "SHIFT事業と電力コスト戦略" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">SHIFT事業と電力コスト戦略</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-emerald-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          SHIFT事業と電力コスト戦略
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">SBT認証・脱炭素経営支援の活用</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          大手企業からのサプライチェーン脱炭素要請や投資家のESG評価対応に追われる企業が増えています。
          環境省の「SHIFT事業」はGHG排出量の算定・削減計画策定・SBT認証取得に係る費用を支援する制度で、
          電力コスト削減につながる省エネ・再エネ投資と組み合わせることで経営上のメリットを最大化できます。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* SHIFT事業の背景 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜSHIFT事業が注目されるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年以降、上場企業へのTCFD開示義務化や欧州CSRDの適用拡大により、
            日本企業はサプライチェーン全体のGHG排出量（Scope1〜3）の把握と削減計画の開示を求められています。
            これは大企業だけでなく、サプライチェーン上の中小・中堅企業にも波及しています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            SHIFT事業はこうした背景を受け、GHG算定・削減計画策定・認証取得という「脱炭素の入口」を補助します。
            計画策定後に省エネ設備更新（SII補助金）や再エネ調達（PPA補助金）を実施することで、
            電力コストの削減と脱炭素経営の両立が現実的な選択肢になります。
          </p>
        </section>

        {/* 制度概要テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">SHIFT事業 制度概要（目安）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 補助率・上限額・公募時期は年度により変更されます。必ず環境省の最新公募要領をご確認ください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 w-36">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">内容</th>
                </tr>
              </thead>
              <tbody>
                {overviewTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.item}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 補助上限額 詳細 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助上限額の詳細（目安）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下は2026年4月時点の概算です。正式な上限額・補助率は公募要領でご確認ください。年度途中の変更・追加公募の可能性があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">支援区分</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助率（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">中小企業 上限額（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">大企業 上限額（目安）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">計画策定支援（GHG算定・SBT申請等）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">2/3以内</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">最大2,000万円</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">最大2,000万円</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">設備導入支援（省エネ・再エネ設備）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">1/2以内</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">最大1億円</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">最大5,000万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 採択率は過去実績から概ね50〜60%程度とされていますが、年度・区分・申請内容により変動します。申請書の完成度が採否を大きく左右します。
          </p>
        </section>

        {/* 主な補助対象 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">主な補助対象費用</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {subsidyTargets.map((t, i) => (
              <div key={i} className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <h3 className="text-sm font-semibold text-slate-800">{t.label}</h3>
                <p className="mt-2 text-xs text-slate-600">{t.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 補助対象費用の範囲は年度・区分により異なります。必ず最新公募要領で確認してください。
          </p>
        </section>

        {/* 補助金活用シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">活用シミュレーション（想定例）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下はあくまで想定例です。実際の補助額・効果は事業規模・区分・申請内容により異なります。
          </p>
          <div className="mt-4 space-y-4">
            {simulationPatterns.map((p, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-800">{p.label}</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>・ 想定費用：{p.cost}</li>
                  <li>・ 補助金効果：{p.subsidy}</li>
                  <li>・ 期待されるメリット：{p.benefit}</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">※ {p.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 省エネ・再エネ補助金との組み合わせ */}
        <section className="rounded-xl border border-emerald-300 bg-emerald-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">省エネ・再エネ補助金との組み合わせ戦略</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            SHIFT事業で「脱炭素削減計画」を策定した後、その計画に沿って省エネ設備投資（SII補助金）や
            再エネ調達（需要家主導型PPA補助金）を実施すると、電力コスト削減と脱炭素化が同時に進みます。
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <div className="rounded-lg border border-emerald-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800">SHIFT事業<br /><span className="text-xs font-normal text-slate-600">削減計画策定・認証取得費用を補助</span></div>
            <span className="text-emerald-600 font-bold text-lg">→</span>
            <div className="rounded-lg border border-emerald-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800">SII省エネ補助金<br /><span className="text-xs font-normal text-slate-600">計画に基づく設備更新費用を補助</span></div>
            <span className="text-emerald-600 font-bold text-lg">→</span>
            <div className="rounded-lg border border-emerald-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800">電力コスト削減＋脱炭素認証<br /><span className="text-xs font-normal text-slate-600">経営価値の向上</span></div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 各補助金の同一設備への重複申請は不可です。費用の内訳を整理したうえで申請計画を策定してください。
          </p>
        </section>

        {/* 申請の流れ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請の流れ</h2>
          <div className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="shrink-0 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">{s.step}</span>
                <div>
                  <p className="font-semibold text-slate-800">{s.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意点・よくある失敗 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請時の注意点・よくある失敗</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {pitfalls.map((p, i) => (
              <div key={i} className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="text-sm font-semibold text-amber-800">⚠ {p.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 情報の鮮度注記 */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-base font-semibold text-amber-800">情報の鮮度についての注記</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            本ページの情報は2026年4月時点の公開情報をもとにしています。補助金制度は年度ごとに内容・補助率・上限額が変更される場合があります。
            申請前に必ず各実施機関の最新公募要領をご確認ください。
          </p>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>・ SII（環境共創イニシアチブ）: <a href="https://sii.or.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://sii.or.jp/</a></li>
            <li>・ 資源エネルギー庁: <a href="https://www.enecho.meti.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://www.enecho.meti.go.jp/</a></li>
            <li>・ 環境省: <a href="https://www.env.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://www.env.go.jp/</a></li>
          </ul>
        </section>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/subsidies-overview", title: "法人向け電力・省エネ補助金まとめ", description: "2026年度に使える主要制度を横断比較" },
            { href: "/subsidy-sii-energy-saving", title: "省エネ補助金（SII）の申請ガイド", description: "SHIFT事業後の設備投資補助" },
            { href: "/subsidy-demand-side-ppa", title: "需要家主導型太陽光PPAの補助金活用", description: "再エネ調達の補助金と組み合わせ" },
            { href: "/subsidy-application-approval-document", title: "補助金申請を前提とした稟議書の書き方", description: "社内承認を取りやすくする書き方" },
            { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光は電気料金対策としてどう効くか", description: "導入効果と費用対効果の考え方" },
            { href: "/articles/subsidies", title: "補助金・助成金カテゴリ一覧", description: "補助金関連記事をまとめて確認" },
            { href: "/executive-esg-electricity-disclosure", title: "IR・ESG開示における電力リスクの記載ガイド", description: "SHIFT事業と連動するESG開示・脱炭素報告の実務を解説。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="脱炭素化の第一歩は電力コストの現状把握から"
          description="GHG削減計画を策定するには、現在の電力使用量・コスト・排出量の実態把握が必要です。シミュレーターで電力コストのリスク診断をまず行ってください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/subsidies-overview", label: "補助金一覧ページへ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
