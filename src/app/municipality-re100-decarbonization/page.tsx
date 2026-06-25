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
  { question: "自治体の脱炭素要請の現状は？", answer: "国の 2050 年カーボンニュートラル宣言を受け、2026 年時点で 1,000 自治体以上がゼロカーボンシティを表明しています。地球温暖化対策推進法第 21 条に基づく地方公共団体実行計画の策定が義務化され、庁舎・公共施設の電力消費に起因する CO₂ 削減が主要な取り組み項目になっています。脱炭素先行地域の選定や補助金活用も急速に広がっています。" },
  { question: "再エネ電力調達の選択肢の比較は？", answer: "①再エネメニュー（電力会社の標準プラン、5〜15% プレミアム）、②非化石証書（1〜3 円/kWh、最低コスト）、③オンサイト PPA（10〜20 年契約、屋根貸し）、④オフサイト・コーポレート PPA（大規模向け）、⑤自家消費型太陽光（自治体所有、補助金活用前提）の 5 つが主な選択肢です。コスト・初期投資・契約期間・手続きの複雑さで選択します。" },
  { question: "コストと脱炭素の両立のための戦略パターンは？", answer: "①段階導入型（非化石証書 → 再エネメニュー → PPA で財政負担を分散）、②施設優先順位型（庁舎・学校など象徴的施設から先行）、③ポートフォリオ型（複数手段の組み合わせでリスク分散）の 3 パターンが代表的です。自治体規模・財政状況・既存施設特性に応じて、まず段階導入型から始めるのが多数派です。" },
  { question: "入札仕様書に環境要件を入れる際の注意点は？", answer: "①必須要件として設定（不調リスク高）、②加点評価方式（総合評価落札、リスク低・手続き複雑）、③努力義務として記載（参加者制限なし、効果保証なし）の 3 通りがあります。小規模自治体・単独入札では加点評価か努力義務、大規模自治体では総合評価落札方式が現実的です。CO₂ 排出係数上限値・環境価値の種類・証書提出義務を仕様書に明記してください。" },
  { question: "先進自治体の事例を学ぶには？", answer: "環境省の脱炭素先行地域選定自治体の公開資料、政令市・中核市の地球温暖化対策実行計画書、自治体国際協力機構（CLAIR）等の事例集が参考になります。具体的には、政令市 A 市の段階移行（非化石証書 → PPA 導入）、中規模市 B 市の総合評価落札方式導入、脱炭素先行地域での 10 施設オンサイト PPA で年間 30% を自家消費型太陽光で賄う事例などが報告されています。" },
  { question: "脱炭素調達のよくある落とし穴は？", answer: "①グリーンウォッシュ（環境価値が実際に附属していない）、②非化石証書の二重カウント（自治体と電力会社の使用が重複）、③ PPA 長期契約と単年度予算主義の矛盾（債務負担行為議決必須）、④環境要件を仕様書に必須要件として入れて参加事業者が減り入札不調になる、の 4 つが代表的な落とし穴です。トラッキング付き証書の選定と、債務負担行為手続きの事前確認が必須です。" },
];

const sourcesItems = [
  { name: "環境省（脱炭素先行地域・自治体支援）", url: "https://www.env.go.jp", description: "ゼロカーボンシティ・脱炭素先行地域・補助金情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "再エネ・非化石証書制度に関する情報" },
  { name: "総務省（地方公共団体実行計画）", url: "https://www.soumu.go.jp", description: "地球温暖化対策推進法・自治体支援制度情報" },
];


const pageTitle = "自治体のRE100・脱炭素調達と電力コストの両立｜ゼロカーボンシティ向け実務ガイド";
const pageDescription =
  "ゼロカーボンシティ宣言した自治体が、RE100・脱炭素目標と電力コスト管理を両立させるための調達戦略を完全整理。再エネ電力メニュー比較、PPA活用、入札方式選定、議会説明、住民影響への配慮まで、実務上の選択肢を一般社団法人エネルギー情報センターが中立解説。自治体担当者・議員向け。";
const pageUrl = "https://simulator.eic-jp.org/municipality-re100-decarbonization";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自治体 RE100",
    "自治体 脱炭素 電力調達",
    "自治体 再エネ調達 コスト",
    "ゼロカーボンシティ 電力",
    "公共施設 RE100",
    "自治体 PPA 導入",
    "自治体 再エネ 入札",
    "自治体 電力契約 議会",
    "脱炭素 電力 自治体",
    "公共施設 再エネ メニュー",
    "自治体 電気代 両立",
    "法人電気料金",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: false, follow: true },
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

const procurementOptions = [
  {
    method: "再エネメニュー（電力会社の標準プラン）",
    reEnergy: "100%または指定割合",
    initialCost: "不要",
    premiumGuide: "通常料金の5〜15%増し",
    contract: "1〜3年",
    note: "最も導入しやすいが価格変動あり。入札仕様書に条件を明記",
  },
  {
    method: "非化石証書（FIT非化石・トラッキング付き）",
    reEnergy: "証書の調達量に応じて",
    initialCost: "不要",
    premiumGuide: "1〜3円/kWh程度",
    contract: "単年度更新が多い",
    note: "既存の電力契約に組み合わせ可。最も低コストで環境価値を取得できる",
  },
  {
    method: "PPA（電力購入契約・オンサイト）",
    reEnergy: "発電量に応じて",
    initialCost: "施設によっては不要（第三者所有型）",
    premiumGuide: "初期はプレミアム不要の場合も。長期的にはコスト削減効果あり",
    contract: "10〜20年",
    note: "屋根・駐車場に太陽光を設置。長期契約のため债務負担行為の設定が必要",
  },
  {
    method: "PPA（オフサイト・コーポレートPPA）",
    reEnergy: "100%",
    initialCost: "交渉による",
    premiumGuide: "市場価格＋環境価値プレミアム（交渉次第）",
    contract: "10〜20年",
    note: "大規模施設向け。発電所からの環境価値を直接調達できる",
  },
  {
    method: "自家消費型太陽光（自治体所有）",
    reEnergy: "発電量相当分",
    initialCost: "大（補助金で軽減可）",
    premiumGuide: "初期投資後は実質的なプレミアムなし",
    contract: "設備寿命（20〜30年）",
    note: "長期的なコスト安定化効果が高い。補助金・交付金の活用が前提",
  },
];

const strategyPatterns = [
  {
    pattern: "段階導入型",
    desc: "まず非化石証書（低コスト）で環境価値を調達し、次年度以降に再エネメニューやPPAに移行する。財政負担を分散できる。",
    suitable: "財政状況が厳しく一度に大規模な再エネ調達が困難な自治体",
  },
  {
    pattern: "施設優先順位型",
    desc: "庁舎・学校など象徴的な施設から再エネ電力に切り替え、段階的に対象施設を拡大する。費用対効果の高い施設を優先。",
    suitable: "脱炭素目標はあるが、全施設一括の移行は難しい自治体",
  },
  {
    pattern: "ポートフォリオ型",
    desc: "複数の調達手段（再エネメニュー＋非化石証書＋PPAなど）を組み合わせてリスク分散と目標達成を両立する。",
    suitable: "大規模自治体・政令市。複数施設・電圧区分を持つ自治体",
  },
];

const pitfalls = [
  {
    title: "グリーンウォッシュのリスク",
    desc: "「再エネ電力」と謳っていても、環境価値（非化石証書・FIT証書等）が実際に附属していない場合があります。入札仕様書では「環境価値が付随した電力であること」を明示し、証書の種類・トラッキング情報の提出を求めてください。",
  },
  {
    title: "非化石証書の二重カウント",
    desc: "自治体が非化石証書を取得する一方で、電力会社が同じ電源の環境価値を別途使用していないかを確認する必要があります。トラッキング付き非化石証書（発電所特定可）を選ぶことでリスクを低減できます。",
  },
  {
    title: "PPA長期契約と単年度予算の矛盾",
    desc: "PPAは通常10〜20年の長期契約であるため、地方自治法の単年度予算主義とそのままでは相容れません。債務負担行為の設定と議会議決が必要です。事前に財政・法制担当と手続きを確認してください。",
  },
  {
    title: "環境要件を仕様書に入れると参加者が減る問題",
    desc: "再エネ100%や非化石証書添付を必須条件にすると、対応できない事業者が応札できず入札不調リスクが高まります。「努力義務」または「加点評価」として設定し、総合評価落札方式を検討してください。",
  },
];

export default function MunicipalityRe100DecarbonizationPage() {
  return (
    <>
      <ArticleJsonLd
        headline="自治体のRE100・脱炭素調達と電力コストの両立｜自治体向け"
        description="自治体の脱炭素目標と電力コスト管理を両立させるための調達戦略と実務上の選択肢を整理します。"
        url="https://simulator.eic-jp.org/municipality-re100-decarbonization"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "自治体のRE100・脱炭素調達と電力コストの両立" },
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
        <span className="text-slate-800">RE100・脱炭素調達と電力コストの両立</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <AuthorBadge publishedAt="2026-04-17" updatedAt="2026-04-17" />
      <TableOfContents />

      <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          自治体のRE100・脱炭素調達と電力コストの両立
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2050年カーボンニュートラル宣言・ゼロカーボンシティ表明・地方公共団体実行計画の策定により、
          自治体には脱炭素に向けた電力調達の見直しが求められています。
          しかし「脱炭素を進めたいがコストが増える」という矛盾に直面している担当者も少なくありません。
          再エネ電力調達の選択肢・コスト比較・入札仕様書への組み込み方・よくある落とし穴まで実務的に解説します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 脱炭素の要請 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体を取り巻く脱炭素の要請</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            国の2050年カーボンニュートラル宣言（2020年10月）を受け、自治体には以下の対応が求められています。
          </p>
          <p className="mt-2 text-xs text-slate-500">
            ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">ゼロカーボンシティ表明</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                2050年までにCO₂排出実質ゼロを宣言した自治体。2026年時点で1,000以上の自治体が表明しており、
                電力調達の脱炭素化が行動計画の中心課題となっています。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">地方公共団体実行計画</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                地球温暖化対策推進法第21条に基づき、都道府県・市町村が策定する義務を持つ計画。
                庁舎・公共施設の電力消費に起因するCO₂削減が主要な取り組み項目です。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">脱炭素先行地域・補助制度</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                環境省の「脱炭素先行地域」選定制度や地方公共団体向けの補助金・交付金が整備されており、
                再エネ設備導入・PPA・省エネ改修に活用できます。
              </p>
            </div>
          </div>
        </section>

        {/* 調達選択肢一覧 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ電力調達の選択肢一覧表</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体が活用できる主な再エネ電力調達手段を比較します。
            コスト・初期投資・契約期間・手続きの複雑さが異なるため、施設の特性と財政状況に応じて選択してください。
          </p>
          <p className="mt-2 text-xs text-slate-500">
            ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">調達手段</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">再エネ割合</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">初期投資</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">コストプレミアム目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">契約期間</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考・注意点</th>
                </tr>
              </thead>
              <tbody>
                {procurementOptions.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700">{row.method}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.reEnergy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.initialCost}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.premiumGuide}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.contract}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* コストと脱炭素の両立戦略 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">コストと脱炭素を両立するための戦略パターン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「脱炭素目標は達成したいがコスト増加は抑えたい」という要求を満たすには、
            単一の手段に頼るのではなく、複数の手段を組み合わせた戦略が必要です。
          </p>
          <div className="mt-4 space-y-4">
            {strategyPatterns.map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-indigo-700">{item.pattern}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.desc}</p>
                <p className="mt-2 text-xs text-slate-500">
                  <span className="font-semibold">適した自治体：</span>{item.suitable}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 入札仕様書への組み込み方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">入札仕様書に環境要件を入れるときの書き方と注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            環境要件を入札仕様書に盛り込む方法は大きく3つあります。それぞれの特徴を理解して選択してください。
          </p>
          <p className="mt-2 text-xs text-slate-500">
            ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">必須要件として設定</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                「再エネ電力であること」を応札条件とする。環境目標を確実に達成できるが、
                参加事業者が減り不調リスクが高まる。小規模自治体・単独入札では特に注意が必要。
              </p>
            </div>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-800">加点評価方式（総合評価落札）</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                価格点＋環境点（再エネ比率・CO₂排出係数等）で落札者を決定する。
                入札不調リスクを抑えながら環境優良な事業者を優遇できる。手続きが複雑になる点に注意。
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-800">努力義務として記載</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                「可能な限り再エネ比率を高めること」として仕様書に記載。参加者を制限しないが、
                環境効果の保証はできない。脱炭素取り組みの初期段階に適している。
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-800">仕様書に明記すべき環境関連項目</p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm leading-6 text-sky-700">
              <li>CO₂排出係数の上限値または目標値（例：0.370kg-CO₂/kWh以下）</li>
              <li>環境価値の種類（非化石証書・FIT証書・トラッキングの有無）</li>
              <li>環境価値が電力に附属していることの証明書類の提出義務</li>
              <li>契約期間中のCO₂排出量の報告義務と報告フォーマット</li>
            </ul>
          </div>
        </section>

        {/* 先進事例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">先進自治体の取り組み事例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            脱炭素と電力コスト管理の両立に取り組む自治体の事例を紹介します。
          </p>
          <p className="mt-2 text-xs text-slate-500">
            ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">政令市（A市）の段階移行事例：</span>
              第1フェーズで主要庁舎・学校に非化石証書を組み合わせた再エネメニューを導入（コスト増8%以内に抑制）。
              第2フェーズで庁舎屋上に第三者所有型PPAを導入し、長期的なコスト削減効果を確保。
            </li>
            <li>
              <span className="font-semibold">中規模市（B市）の総合評価落札事例：</span>
              電力調達入札に総合評価落札方式を導入し、CO₂排出係数・再エネ比率を環境点として評価。
              価格競争だけでなく環境優良な事業者が選ばれやすくなり、実質的な再エネ比率が向上した。
            </li>
            <li>
              <span className="font-semibold">脱炭素先行地域選定自治体の事例：</span>
              環境省の脱炭素先行地域に選定されたことで補助金を活用した大規模<Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光</Link>PPA導入が実現。
              庁舎・公民館・学校10施設にオンサイトPPAを設置し、年間電力の30%を自家消費型太陽光で賄うことに成功。
            </li>
          </ul>
        </section>

        {/* よくある落とし穴 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある落とし穴</h2>
          <div className="mt-4 space-y-4">
            {pitfalls.map((item, i) => (
              <div key={i} className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-800">{i + 1}. {item.title}</p>
                <p className="mt-2 text-sm leading-6 text-amber-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：脱炭素調達を進めるための優先事項</h2>
          <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>まず<Link href="/non-fossil-certificates" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">非化石証書</Link><span className="font-semibold">（トラッキング付き）</span>を活用して低コストで環境価値を調達する</li>
            <li>次に主要施設から<span className="font-semibold">再エネメニュー</span>への切り替えを進める</li>
            <li>中長期的には<span className="font-semibold">PPAや自家消費型太陽光</span>を組み合わせてコスト安定化と脱炭素を両立する</li>
            <li>入札仕様書には<span className="font-semibold">総合評価落札方式や加点評価</span>で環境要件を組み込み不調リスクを管理する</li>
            <li>PPA長期契約には<span className="font-semibold">債務負担行為の設定と議会議決</span>が必要な点を事前に確認する</li>
          </ol>
        </section>
      </section>

      {/* 補助金 H2（新設） */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">自治体向け脱炭素補助金（環境省・経産省・総務省）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          再エネ調達でコスト増加を抑制するためには、補助金活用が不可欠です。自治体が活用できる主要な補助メニューを 3 省別に整理します。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-900">環境省</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-700">
              <li>脱炭素先行地域選定事業（最も補助率が高い）</li>
              <li>地域脱炭素移行・再エネ推進交付金</li>
              <li>地方公共団体実行計画策定・実施支援</li>
              <li>ZEB 化推進事業（既存庁舎・学校改修対応）</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-900">経済産業省</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-700">
              <li>省エネルギー投資促進支援事業（SII）</li>
              <li>需要家主導太陽光発電導入支援事業</li>
              <li>蓄電池導入支援事業</li>
              <li>需要家主導 PPA・オフサイト PPA 支援</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-900">総務省</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-700">
              <li>グリーン社会の実現に向けた地方財政措置</li>
              <li>地方公共団体実行計画策定経費の地方交付税措置</li>
              <li>公共施設等適正管理推進事業債（脱炭素化分）</li>
              <li>過疎・離島地域の再エネ導入支援</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          同一設備に複数補助金を重複受給することは原則できないため、設備の主目的（再エネ導入か省エネ更新か脱炭素地域形成か）に応じて、最も補助率の高い窓口を選定します。詳細は<Link href="/subsidy-municipality-energy-examples" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体向けエネルギー補助金・交付金の活用事例</Link>を参照してください。
        </p>
        <p className="mt-2 text-xs text-slate-500">出典: 環境省・経産省・総務省 各省公開情報、自治体公開事例集をもとに作成。</p>
      </section>

      {/* H2-Z シミュレーター */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自治体 RE100 調達のコストを試算する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          脱炭素調達のコスト増分を議会・住民に説明するには、定量的な試算が不可欠です。シミュレーターを以下の観点で活用してください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>現行契約での年間電気代と、再エネ100%プラン切替後の年間コスト差を試算</li>
          <li>非化石証書（1〜3 円/kWh）併用時のコストプレミアムを定量化</li>
          <li>オンサイト PPA 導入後の長期コスト安定化効果を試算</li>
          <li>補助金適用後の実質投資負担額を試算</li>
        </ul>
      </section>

      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <SourcesAndFaq sources={sourcesItems} faq={faqItems} publishedAt="2026-04-17" />
      <div className="mt-6">
        <GlossaryLinks currentSlug="municipality-re100-decarbonization" terms={["再エネ賦課金", "非化石証書", "市場連動プラン", "固定プラン", "燃料費調整額", "容量拠出金"]} />
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
              href: "/subsidy-municipality-energy-examples",
              title: "自治体向けエネルギー補助金・交付金の活用事例",
              description: "再エネ設備・省エネ改修に活用できる補助制度と申請のポイントを解説。",
            },
            {
              href: "/municipality-local-new-power",
              title: "地域新電力と自治体電力調達の関係",
              description: "地域新電力の仕組みと自治体が連携するメリット・注意点を整理。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "脱炭素調達と並行して電力コスト管理の見直し開始タイミングを確認。",
            },
            {
              href: "/municipality-electricity-cost-review",
              title: "自治体庁舎の電気料金見直しポイント",
              description: "公共施設の負荷特性と契約見直しの基本フレームワーク。",
            },
            {
              href: "/municipality-bundled-procurement",
              title: "公共施設の電力一括調達（バンドリング）の進め方",
              description: "脱炭素調達と組み合わせる場合の共同調達の設計。",
            },
            {
              href: "/non-fossil-certificates",
              title: "非化石証書の仕組みと活用法",
              description: "RE100 対応で最も低コストな環境価値調達手段の詳細。",
            },
            {
              href: "/corporate-ppa-overview",
              title: "コーポレートPPAの概要と選び方",
              description: "オンサイト・オフサイト PPA の比較と、自治体での導入手順。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光の費用対効果",
              description: "自治体施設の屋根を活用した太陽光導入の投資回収期間。",
            },
            {
              href: "/municipality-procurement-bidding-failure",
              title: "自治体電力入札が不調になったときの対応ガイド",
              description: "環境要件を入札仕様書に入れた際の不調リスクと対応。",
            },
            { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="電力コストと脱炭素効果を試算する"
          description="シミュレーターで現在の電力コストを把握し、再エネ調達への切り替えコストの参考値としてご活用ください。"
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
