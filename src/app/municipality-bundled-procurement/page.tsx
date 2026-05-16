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
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import TableOfContents from "../../components/market-data/TableOfContents";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["municipality"];

const faqItems = [
  { question: "共同調達は単独調達と比べてどれくらい費用削減になりますか？", answer: "業界の典型値として、単独調達からバンドリングに移行することで kWh 単価で 5〜15% の削減が見込めます。年間電力費 1 億円規模の自治体なら年間 500〜1,500 万円の削減効果に相当します。スケールメリットの大きさは調達総量に比例するため、高圧以上の主要施設を先行してまとめると効果が顕著です。" },
  { question: "対象施設をどう選定すればよいですか？", answer: "①使用量規模（高圧・特別高圧を優先）、②契約満了日の近接性、③電圧区分・供給エリアの統一性、④指定管理・直営の区分の 4 軸でグルーピングします。最初から全施設を一括にする必要はなく、効果の出やすい高圧施設（庁舎・学校・体育館）から段階導入するのが定石です。" },
  { question: "共同調達のスキームの選択基準は？（広域連携 vs 組合方式）", answer: "広域連携方式は事務取り扱い自治体（リード自治体）が他自治体分も一括処理する形で、手続きは比較的シンプルです。組合方式（一部事務組合）は法人格を持つ組合が契約主体となり、複数自治体の利害調整に向いています。年間調達総額・参加自治体数・規約整備の難易度で選択するのが実務的判断です。" },
  { question: "共同調達の進め方の標準フローは？", answer: "STEP1 施設リスト・使用実績の整備 → STEP2 対象施設の選定とグルーピング → STEP3 入札仕様書の作成（施設明細書付き）→ STEP4 入札の実施（事業者説明会含む）→ STEP5 契約締結と施設別管理の 5 ステップが標準です。最低でも入札公告 90 日前から逆算した進行管理が必要で、4 月始まりの新契約に向けては前年 9 月〜10 月から準備開始が安全圏です。" },
  { question: "共同調達の注意点・失敗例は？", answer: "病院・福祉施設・指定管理施設などの特殊条件施設を一括仕様書に無理に組み込むと不調リスクが高まります。これらは別契約に切り出すのが鉄則です。また、一部施設だけ応札なし・条件合致なしになるケースに備えて、随意契約への切り出し手続きを事前に契約書に盛り込んでおくのが重要です。" },
  { question: "共同調達と単独調達のどちらがよい場合がありますか？", answer: "施設数 5 件未満・調達総量 500 万 kWh/年未満の場合は、共同調達の手続き負荷に対して削減効果が小さく、単独調達のほうが合理的な場合があります。また、特殊な供給条件（24時間対応・離島・自家発電併設等）を持つ施設は単独調達のほうが柔軟な条件設計が可能です。規模・特殊性で判断します。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・自治体公共調達情報" },
  { name: "総務省（地方財政・公共調達）", url: "https://www.soumu.go.jp", description: "地方自治法・公共契約に関する制度情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "電力需給・系統情報" },
];


const pageTitle = "公共施設の電力一括調達（バンドリング）の進め方｜自治体向け";
const pageDescription =
  "複数の公共施設の電力契約を一括で調達するバンドリング手法について、メリット・手順・注意点を整理します。";
const pageUrl = "https://simulator.eic-jp.org/municipality-bundled-procurement";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "公共施設 電力 一括調達",
    "自治体 バンドリング",
    "公共施設 電力 まとめ契約",
    "自治体 電力 スケールメリット",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/municipality", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/municipality"],
  },
};

const merits = [
  {
    title: "調達単価の引き下げ",
    desc: "総使用量が増えるほど事業者にとって供給の採算が取りやすくなり、競争が生まれやすくなります。スケールメリットにより単価が5〜15%程度改善する事例もあります。",
  },
  {
    title: "入札事務の効率化",
    desc: "施設ごとに別々に入札していた手続きを一本化できるため、財政・総務担当者の工数を大幅に削減できます。仕様書・公告文・契約書の標準化も進めやすくなります。",
  },
  {
    title: "条件の統一と管理の一元化",
    desc: "供給条件・価格形式・契約期間を統一することで、施設ごとのバラつきをなくし、比較・管理がしやすくなります。月次の請求管理も一元化できます。",
  },
  {
    title: "入札不調リスクの低減",
    desc: "使用量規模が大きくなるほど事業者の参入意欲が高まり、不調になるリスクが下がります。小規模施設が単独で入札しても応札者ゼロになるケースでも、まとめることで解決できます。",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "施設リストの作成と使用実績の整備",
    desc: "全公共施設（庁舎・学校・体育館・公民館等）の使用量（kWh）・電圧区分（特別高圧・高圧・低圧）・需要番号・契約満了日を一覧にまとめます。使用実績は直近12か月分を取得してください。",
  },
  {
    step: "STEP 2",
    title: "一括調達の対象施設の選定とグルーピング",
    desc: "すべての施設を一まとめにするのが理想ですが、電圧区分・供給エリア・契約時期・指定管理の有無によってグループ分けが必要な場合があります。最初から全施設をまとめず、高圧以上を先行させる方法も有効です。",
  },
  {
    step: "STEP 3",
    title: "入札仕様書の作成",
    desc: "一括調達の仕様書は個別入札より詳細になります。施設リスト・電圧区分ごとの使用量・価格形式・緊急時対応・施設ごとの供給開始日と終了日を明記します。分割発注・一部施設の随意契約への変更条件も記載してください。",
  },
  {
    step: "STEP 4",
    title: "入札の実施",
    desc: "一般競争入札を原則とし、参加資格（小売電気事業者登録・保証金・過去の供給実績等）を設定します。事業者説明会を設けることで質問を事前に集約でき、公告後の問い合わせ対応を減らせます。",
  },
  {
    step: "STEP 5",
    title: "契約締結と施設別管理",
    desc: "落札後は一括の契約書を締結しつつ、施設ごとの供給条件を別紙（施設明細書）で管理します。途中で施設が追加・削除された場合の対応ルールも契約書に盛り込んでおいてください。",
  },
];

const scaleRows = [
  {
    scale: "10施設未満（小規模）",
    totalKwh: "〜500万kWh/年",
    approach: "高圧以上を先行して一括。低圧は個別または小口随意契約",
    note: "まずは高圧施設（庁舎・学校）のみでバンドリングを試みる",
  },
  {
    scale: "10〜50施設（中規模）",
    totalKwh: "500万〜3,000万kWh/年",
    approach: "電圧区分・エリアでグルーピングして2〜3本の入札に集約",
    note: "担当者が管理できる範囲で分割。全施設統合は次フェーズで",
  },
  {
    scale: "50施設以上（大規模）",
    totalKwh: "3,000万kWh以上/年",
    approach: "電圧区分ごとに別入札。必要に応じて都道府県共同調達に参加",
    note: "大規模ほどスケールメリットが出やすい反面、不調時の影響も大きい",
  },
];

const cautions = [
  {
    title: "施設ごとの特殊要件への対応",
    desc: "病院・福祉施設など24時間対応が必要な施設や、太陽光発電が設置されている施設は特殊な供給条件が必要です。一括仕様書に組み込むと複雑化するため、別途契約とするほうが無難な場合があります。",
  },
  {
    title: "指定管理施設の取り扱い",
    desc: "指定管理者が電力契約の当事者となっている施設は、自治体主導の一括調達の対象外となる場合があります。協定書・仕様書の確認が必要です。",
  },
  {
    title: "一部施設が不調になった場合の対応",
    desc: "一括入札でも特定施設だけ応札なし・条件合致なしとなるケースがあります。一部施設を随意契約に切り出す手続きを事前に準備しておき、4月1日以降の供給空白が生じないよう対応してください。",
  },
];

export default function MunicipalityBundledProcurementPage() {
  return (
    <>
      <ArticleJsonLd
        headline="公共施設の電力一括調達（バンドリング）の進め方｜自治体向け"
        description="複数の公共施設の電力契約を一括で調達するバンドリング手法について、メリット・手順・注意点を整理します。"
        url="https://simulator.eic-jp.org/municipality-bundled-procurement"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "公共施設の電力一括調達（バンドリング）の進め方" },
        ]}
      faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/municipality" className="underline-offset-2 hover:underline">自治体・公共向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電力一括調達（バンドリング）</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <AuthorBadge publishedAt="2026-04-17" updatedAt="2026-04-17" />
      <TableOfContents />

      <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          公共施設の電力一括調達（バンドリング）の進め方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          施設ごとにバラバラに行われていた電力調達を一本化する「バンドリング（一括調達）」は、
          入札不調の増加とコスト上昇が続く現在、多くの自治体が注目している調達改善手法です。
          一括調達のメリット・進め方・規模別の考え方・注意点を実務担当者向けに整理します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* バンドリングとは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ自治体共同調達が今求められるのか — 単独調達の限界</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            バンドリング（共同調達・一括調達）とは、複数の公共施設（庁舎・学校・体育館・公民館・図書館等）の電力契約をまとめて一つの入札・契約として調達する手法です。
            従来は施設ごと・担当課ごとに個別に電力契約を締結していた自治体が多く、
            それぞれの施設で毎年度入札を行う必要がありました。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            しかし、2022 年以降の電力市況高騰と新電力撤退ラッシュで「単独調達では応札者ゼロ・予定価格超過不落」が頻発し、自治体単独での入札成立が困難な構造的局面に突入しました。共同調達は単なる効率化ではなく、調達リスク自体を回避する手段として位置付けが変わってきています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            バンドリングを導入することで、調達量の増加によるスケールメリットと手続きの効率化が同時に期待できます。
            電力市場の高騰・入札不調の増加という環境下で、多くの自治体が一括調達の検討を始めています。
          </p>
        </section>

        {/* メリット */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一括調達の4つのメリット</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {merits.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-indigo-700">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対象施設の選び方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一括調達の対象施設の選び方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            すべての施設を最初から一括にする必要はありません。以下の観点で優先順位をつけてください。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">使用量規模：</span>
              高圧・特別高圧施設（庁舎・学校・体育館）を優先。使用量が大きいほどスケールメリットが出やすい。
            </li>
            <li>
              <span className="font-semibold">契約時期の統一：</span>
              契約満了日がバラバラな施設をまとめるには、一部施設の契約満了を早める・繰り延べするなどの調整が必要。
              まずは満了日が近い施設をグループ化する方法が現実的です。
            </li>
            <li>
              <span className="font-semibold">施設特性のグルーピング：</span>
              電圧区分（高圧・低圧）と供給エリア（電力会社エリア）は同一グループ内で統一することが原則です。
              異なるエリアをまたぐ入札は対応できる事業者が限られます。
            </li>
            <li>
              <span className="font-semibold">指定管理・直営の区分：</span>
              指定管理施設は契約主体が異なる場合があるため、直営施設と分けて検討してください。
            </li>
          </ul>
        </section>

        {/* 5ステップ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一括調達の進め方：5ステップ</h2>
          <div className="mt-4 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex-shrink-0 border-l-4 border-indigo-400 pl-4">
                  <p className="text-xs font-bold text-indigo-600">{s.step}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 規模別パターン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">バンドリングの規模別パターン</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">規模</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">年間使用量目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">推奨アプローチ</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                </tr>
              </thead>
              <tbody>
                {scaleRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700">{row.scale}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.totalKwh}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.approach}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 注意点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一括調達の注意点</h2>
          <div className="mt-4 space-y-4">
            {cautions.map((item, i) => (
              <div key={i} className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-800">{i + 1}. {item.title}</p>
                <p className="mt-2 text-sm leading-6 text-amber-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：バンドリング導入の判断ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            一括調達は「すべての施設を一度にまとめる」ことが目標ではなく、
            「スケールメリットを活かしながら調達の安定性と効率化を実現する」ことが本質です。
            まずは高圧以上の主要施設から試行し、運用実績を積みながら対象施設を拡大していく段階的アプローチが現実的です。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm leading-7 text-slate-700 sm:text-base">
            <li>全施設の使用量・電圧区分・契約満了日を一覧化することが第一歩</li>
            <li>高圧以上の主要施設を先行してバンドリングし、効果を検証する</li>
            <li>指定管理施設・特殊施設は個別に判断し無理にまとめない</li>
            <li>一部不調に備えた随意契約への移行手順をあらかじめ決めておく</li>
          </ul>
        </section>
      </section>

      {/* 共同調達の先進事例 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">共同調達の先進事例（広域連携・組合方式）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          共同調達は実施スキームによって参加自治体間の役割分担が大きく変わります。代表的な 3 パターンを整理します。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">広域連携方式（リード自治体型）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>事務取扱いの中心となるリード自治体が他自治体分も一括処理</li>
              <li>協定書ベースで実施、規約整備が比較的シンプル</li>
              <li>都道府県内の広域連携・近隣市町村連携で多く採用</li>
              <li>典型規模：5〜20 自治体／調達総量 1〜10 億 kWh／年</li>
            </ul>
          </div>
          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">一部事務組合方式</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>法人格を持つ組合が契約主体となる</li>
              <li>規約・予算が組合議会で別途審議される</li>
              <li>大規模・長期での共同調達に向く</li>
              <li>典型規模：10 自治体超／調達総量 5 億 kWh 超／年</li>
            </ul>
          </div>
          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">広域連合・地方公共団体組合</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>複数の業務を包括的に処理する広域組織を活用</li>
              <li>消防・廃棄物処理など他業務と並行して電力共同調達</li>
              <li>政令市・中核市レベルでの実施事例が増加</li>
              <li>典型規模：県内全域／調達総量 10 億 kWh 超／年</li>
            </ul>
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: 総務省「地方公共団体間の連携・補完」資料、自治体公開事例集をもとに業界平均レンジで作成。</p>
      </section>

      {/* H2-Z シミュレーター */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シミュレーターで一括調達の効果を試算する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          共同調達導入の意思決定では、単独調達と一括調達のコスト差を定量的に示すことが議会・首長への説明の決め手になります。シミュレーターを以下の観点で活用してください。
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>現行の施設別契約条件をベースに年間電力費合計を集計する</li>
          <li>共同調達後の単価想定（5〜15% 削減）で年間効果額を試算する</li>
          <li>調達リスクシナリオ（不調時の最終保障供給移行）での上振れ額を比較する</li>
          <li>債務負担行為で複数年契約した場合の議会承認スケジュールを逆算する</li>
        </ul>
      </section>

      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <SourcesAndFaq sources={sourcesItems} faq={faqItems} publishedAt="2026-04-17" />
      <div className="mt-6">
        <GlossaryLinks currentSlug="municipality-bundled-procurement" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン", "最終保障供給"]} />
      </div>
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-procurement-methods",
              title: "自治体電力調達の入札実務",
              description: "一般競争・指名競争・随意契約の使い分けと入札仕様書作成のポイントを解説。",
            },
            {
              href: "/municipality-long-term-contract",
              title: "自治体の長期継続契約（債務負担行為）と電力契約の関係",
              description: "単年度予算の制約下で複数年契約を結ぶ仕組みと注意点を整理。",
            },
            {
              href: "/municipality-facility-management-package",
              title: "公共施設の包括管理委託と電力契約の関係",
              description: "包括管理委託に電力調達を組み込む場合の考え方と留意点。",
            },
            {
              href: "/municipality-designated-manager-electricity",
              title: "指定管理施設の電力契約は誰がどう見直すか",
              description: "指定管理者制度下の電力契約における自治体と管理者の役割分担を整理。",
            },
            {
              href: "/executive-multi-site-cost-management",
              title: "複数拠点の電力コスト一元管理フレームワーク",
              description: "多施設の電力費を効率的に管理するための体制と手順を解説。",
            },
            {
              href: "/municipality-electricity-cost-review",
              title: "自治体庁舎の電気料金見直しポイント",
              description: "庁舎・学校・体育館など公共施設の負荷特性と契約見直しの考え方を整理。",
            },
            {
              href: "/municipality-procurement-bidding-failure",
              title: "自治体電力入札が不調になったときの対応ガイド",
              description: "共同調達でも不調となった場合の随意契約移行・最終保障供給回避の実務手順。",
            },
            {
              href: "/municipality-re100-decarbonization",
              title: "自治体のRE100・脱炭素調達と電力コストの両立",
              description: "共同調達と脱炭素要件を組み合わせる場合の戦略パターン。",
            },
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "共同調達不調時の最終保障供給移行リスクと、自治体側で備えるべき手順を解説。",
            },
            {
              href: "/business-electricity-cost-reduction-review-points",
              title: "法人電気代見直しの基本ポイント",
              description: "業種・エリアを問わず適用できる契約見直しの基本フレームワーク。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧の電気料金の仕組み",
              description: "大規模公共施設で活用される特別高圧契約の料金体系を解説。",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="一括調達の効果を試算する"
          description="シミュレーターで現在の電力コストを把握し、バンドリング導入後の効果試算の参考にご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/articles/municipality", label: "自治体向け記事一覧を見る" },
          ]}
        />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
