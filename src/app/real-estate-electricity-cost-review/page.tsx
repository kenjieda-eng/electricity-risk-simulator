import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["industry-guide"];

const pageTitle =
  "不動産業の電気料金見直しポイント｜共用部・賃貸物件・倉庫の契約最適化";
const pageDescription =
  "不動産業（仲介業・開発業・賃貸管理業）の電気料金見直しを解説。本社オフィス＋管理物件の共用部、倉庫、多拠点支店の電力プロファイル、賃貸物件の電気代管理、テナント還元、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "不動産業 電気料金 見直し",
    "賃貸物件 共用部 電気代",
    "不動産管理 電力契約",
    "倉庫 電気代",
    "仲介業 開発業 電気料金",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/real-estate-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/real-estate-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/industry-guide"],
  },
};

const usageProfile = [
  {
    label: "本社オフィス＋多拠点支店",
    detail:
      "不動産業は地域密着型の支店展開が一般的。本社＋全国・都市部・住宅地に複数支店を展開し、平日昼間中心の業務電力が発生。1拠点あたり低圧20〜80kW、年5〜30万kWhが目安で、多拠点合計では年200〜1,000万kWhに達する大手も。",
  },
  {
    label: "管理物件の共用部電力（エレベーター・廊下・駐車場）",
    detail:
      "賃貸管理業務で扱う管理物件の共用部電力（エレベーター・廊下照明・駐車場照明・受水槽ポンプ・換気）はオーナー契約だが、PM/BM業務で管理を委託される。1棟あたり年5〜50万kWh規模で、保有/管理戸数が多いほどグループ合計が膨大。",
  },
  {
    label: "倉庫・展示場・モデルルーム",
    detail:
      "開発業の倉庫・モデルルーム・展示場は使用パターンが業務時間中心。1棟あたり低圧20〜100kW、年10〜50万kWh。週末営業のモデルルーム特性、季節商戦の影響も。",
  },
  {
    label: "商業ビル・物件運営（保有物件）",
    detail:
      "REIT/開発業の自社保有物件は商業ビル・オフィスビル・物流施設として運営。1棟あたり高圧500〜3,000kW、年200〜2,000万kWh。テナント別個別契約と共用部一括契約の組合せ管理が必要。",
  },
  {
    label: "ITシステム・データセンター（顧客管理）",
    detail:
      "REINS/物件管理システム・賃貸契約管理システムは自社サーバーまたはクラウド運用。大手では自社DC運用も。社内サーバー室で月3,000〜10,000kWhの電力消費。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省・不動産業協会等の参考値から、不動産業（仲介・賃貸管理）の電気代は売上高比0.2〜0.8%、開発業（REIT・建設）で売上高比0.3〜1.5%。中堅仲介業で年1,000〜5,000万円、大手開発業で年5,000万〜2億円が一般的レンジ。",
  },
  {
    label: "管理物件の共用部電気代",
    detail:
      "管理戸数1,000戸の中堅PM業で年間共用部使用量は500〜2,000万kWh、年1.5〜6億円規模。オーナー契約だが管理委託費に含めて代行契約するケースが大半。",
  },
  {
    label: "事業形態別の年間使用量",
    detail:
      "小規模仲介業（30〜100名）で本社+1〜3拠点、年間20〜80万kWh。中堅仲介＋管理業（300〜1,000名）で本社+10〜30拠点、年間200〜800万kWh。大手開発業＋REIT（1,000名超、保有物件多数）で本社+保有物件全体、年間1,000〜5,000万kWh。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の多拠点合算インパクト",
    detail:
      "本社+多拠点で年間500万kWh使用の中堅不動産業者で燃料費調整額1円/kWh変動による年500万円の差。管理物件共用部を含めると年数千万円規模に。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間1,000万kWh使用の中堅PM業で年4,180万円の負担、5年で2.09億円。",
  },
  {
    label: "テナント請求と共用部費用配賦",
    detail:
      "賃貸物件のテナント別電気代と共用部費用の配賦ルールが上昇局面で問題化。共用部の電気代上昇分を管理費に転嫁できない契約形態が多く、PM業の利益圧迫要因に。",
  },
  {
    label: "ESG対応（賃貸物件ZEH/ZEB化）",
    detail:
      "投資家・テナント要求でZEH（ゼロエネルギーハウス）・ZEB（ゼロエネルギービル）対応が必須化。太陽光・蓄電池・断熱性能向上の初期投資負担が新たな費用に。",
  },
  {
    label: "管理物件分散契約と集中購買機会",
    detail:
      "管理物件ごとに地域電力会社・新電力との個別契約が分散しているケースで、集中購買すれば年5〜10%単価改善の機会がある。PM/BM業の電力購買担当不足が課題。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模仲介業（従業員30〜100名）",
    profile: "地域密着型仲介＋小規模管理／低圧 30〜100kW／年間 20〜80万kWh",
    annualCost: "年間電気代 600〜2,400万円",
    note: "本社+1〜3拠点。新電力切替・固定3年契約・LED化・空調最適化で年8〜12%削減事例。管理物件分の集中購買は管理戸数100戸超で検討開始。",
  },
  {
    size: "中堅仲介＋PM業（従業員300〜1,000名）",
    profile: "本社+10〜30拠点＋管理1,000戸／高圧 200〜600kW／年間 200〜800万kWh",
    annualCost: "年間電気代 6,000万〜2.4億円（管理物件除く）",
    note: "本社・支店をグループ一括契約化＋固定5年契約＋管理物件共用部の代行集中購買で年10〜15%削減事例。",
  },
  {
    size: "大手開発業・REIT（従業員1,000名超、保有物件多数）",
    profile: "本社＋保有物件／特別高圧 3,000〜10,000kW／年間 2,000〜10,000万kWh",
    annualCost: "年間電気代 6〜30 億円",
    note: "1%の単価改善でも年600〜3,000万円のインパクト。長期固定5〜10年契約＋オフサイトPPA＋保有物件ZEB化＋テナント還元プログラムが標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅仲介業の年間11%削減（Before/After）",
    before: "都内中堅仲介業者A社（本社+5支店、低圧合計 200kW、年間 60万kWh、年間電気代 1,800万円）。各拠点個別契約、市場連動プラン継続、LED未更新、管理物件共用部の購買集約なし。",
    after: "本社・支店をグループ一括契約化（固定3年）／全拠点LED化（投資 200万円）／空調個別制御化／管理物件100戸の共用部代行集中購買開始。",
    result: "年間電気代 1,800万円 → 1,602万円（▲11%、▲198万円）／契約 kW 合計 200→180／投資回収 1.5年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中堅PM業の年間14%削減",
    before: "中堅PM業者B社（本社+20支店+管理1,500戸、高圧合計 800kW、年間 600万kWh、年間電気代 1.8億円）。各支店個別契約、市場連動プラン、管理物件代行契約も分散状態。",
    after: "支店グループ一括契約＋管理物件共用部代行集中購買化／固定5年プラン切替／全拠点LED＋BEMS導入／管理物件LED改修プログラム（オーナー負担+補助金活用）／グリーン電力20%調達。",
    result: "年間電気代 1.8億円 → 1.548億円（▲14%、▲2,520万円）／契約 kW 合計 800→700／投資回収 3年（補助金後 2年）／オーナー満足度向上による契約継続率改善",
  },
  {
    title: "事例3：大手REIT保有物件年間1.5億円削減",
    before: "大手REIT C社（本社+保有商業ビル20棟、特別高圧合計 8,000kW、年間 5,000万kWh、年間電気代 15億円）。長期固定契約継続も保有物件のZEB化未着手、テナント還元プログラムなし。",
    after: "電力契約の10年長期固定締結／保有物件ZEB化10棟＋自家消費太陽光2MW＋蓄電池3MWh／オフサイトPPA 5MW（再エネ100%）／テナント還元プログラム導入（再エネ証書テナント別還元）。",
    result: "年間電気代 15億円 → 13.5億円（▲10%、▲1.5億円）／契約 kW 合計 8,000→7,200／投資回収 8年（補助金後 6年）／テナント満足度向上による稼働率改善",
  },
];

const demandManagement = [
  {
    label: "本社・支店グループ一括契約化",
    detail:
      "各拠点個別契約をグループ一括契約に統合することで電力単価▲5〜10%削減。新電力との交渉力強化、契約条件統一による管理コスト削減効果も発生する。",
  },
  {
    label: "管理物件共用部の代行集中購買",
    detail:
      "管理物件の共用部電力をオーナー個別契約から代行集中購買化することで、年5〜8%単価改善。PM業の付加価値サービスとしてオーナー満足度も向上。",
  },
  {
    label: "保有物件ZEB化と自家消費太陽光",
    detail:
      "保有商業ビル・オフィスビルの屋上太陽光1MW級導入で年100〜130万kWh発電、年1,000〜1,500万円削減。テナント還元プログラムと組み合わせると差別化に。",
  },
  {
    label: "テナント還元プログラム",
    detail:
      "保有物件の再エネ電力をテナント別に配賦・再エネ証書発行することで、テナント側ESG要求対応と稼働率向上の両立。大手商業ビルで標準化が進行中。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / オフィス・商業ビル型）",
    target: "本社・支店のLED・空調・BEMS／保有物件のZEB化",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "不動産業の本社・支店設備更新で活用しやすい主力補助金。保有物件のZEB化で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "保有物件屋上太陽光・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "REIT/開発業の保有物件で活用しやすい。屋上面積大の商業ビル・物流施設で投資回収短縮。",
  },
  {
    name: "ZEB化補助金（環境省・経産省）",
    target: "保有物件のZEB Ready/ZEB Oriented化",
    rate: "1/2〜3/5、上限数億円",
    note: "新築・大規模改修時のZEB認証取得で活用可能。投資家・テナント要求対応に整合的。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小不動産業の本社・支店設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の中小仲介・管理業で活用可能。LED・空調更新で採択率高い。",
  },
];

const checklistItems = [
  "本社・支店の契約電力（kW）が直近12ヶ月のデマンド実績に対して過剰でないか",
  "本社・支店をグループ一括契約に統合できているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "管理物件共用部の代行集中購買化を検討したか",
  "保有物件のZEB化・自家消費太陽光導入計画があるか",
  "賃貸物件のテナント還元プログラム（再エネ証書配賦）を検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "管理物件オーナーへの電力契約見直し提案サービスを構築したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上等）の対象に該当するか",
  "ESG投資家対応で再エネ調達率の目標設定があるか",
  "SII省エネ補助金・需要家主導型PPA補助金・ZEB補助金の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "不動産業の電気代水準はどれくらいですか？", answer: "売上高比0.2〜0.8%（仲介・賃貸管理）、0.3〜1.5%（開発・REIT）が業界平均です。中堅仲介・管理業で年6,000万〜2.4億円、大手開発・REITで年6〜30億円規模の電気代になります。" },
  { question: "管理物件の共用部電力は誰が契約しているのですか？", answer: "原則はオーナー個別契約ですが、PM/BM業務として管理委託される代行契約が一般的です。集中購買化することで管理戸数100戸超で年5〜8%の単価改善が可能、PM業の付加価値サービスとしても活用できます。" },
  { question: "不動産業に向く電力プランは固定ですか、市場連動ですか？", answer: "本社・支店中心は市場連動も検討可能ですが、保有物件運営・PM業は固定プラン推奨。テナント還元プログラムや管理委託先オーナーへの透明性確保で固定プランの優位性が高くなります。" },
  { question: "保有物件のZEB化はどれくらいのコスト削減になりますか？", answer: "ZEB Ready改修で年間電気代▲30〜50%、ZEB Oriented化で▲50%以上削減事例があります。中規模商業ビル（年間電力500万kWh）で年5,000万〜1億円規模の削減、投資回収7〜10年（補助金後5〜7年）が目安です。" },
  { question: "テナント還元プログラムとは何ですか？", answer: "保有物件の再エネ電力をテナント別に配賦・再エネ証書発行する仕組み。テナント側ESG要求対応と物件側稼働率向上を両立。大手商業ビル・オフィスビルで標準化が進行中で、優良テナント獲得アドバンテージに。" },
  { question: "REIT/開発業向けのオフサイトPPAは現実的ですか？", answer: "現実的です。複数物件分の電力を一括長期PPA契約することで、単価▲10〜20%＋再エネ100%対応を実現可能。10〜20年の長期契約となり、ESG投資家対応にも整合的です。" },
  { question: "不動産業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（本社・支店設備更新）、需要家主導型PPA補助金（保有物件太陽光）、ZEB化補助金（投資家対応）、中小企業補助の4本柱です。複数組合せで採択率向上。" },
  { question: "管理物件オーナーへの電力契約見直し提案は付加価値になりますか？", answer: "なります。オーナー個別契約だと年5〜10%の単価改善機会を逸失しているケース多数。PM業として代行集中購買サービスを提供することで管理委託契約継続率・新規獲得率の向上効果が確認されています。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "公益社団法人 全日本不動産協会", url: "https://www.zennichi.or.jp/" },
  { name: "一般社団法人 不動産協会", url: "https://www.fdk.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function RealEstateElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/real-estate-electricity-cost-review"
        datePublished="2026-05-21"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">不動産業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            不動産業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            不動産業（仲介業・開発業・賃貸管理業・REIT）は、本社オフィス＋多拠点支店＋管理物件共用部＋保有物件運営という複層構造の業種です。事業形態によって電力契約管理の課題が大きく異なります。本ページでは不動産業特有の電力負荷特性、業界平均水準、規模別事例、管理物件代行集中購買、保有物件ZEB化、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>不動産業の電力使用プロファイル（本社／支店／管理物件／保有物件／倉庫）</li>
              <li>業界平均の電気代水準（売上高比0.2〜1.5%）と事業形態別単価</li>
              <li>燃料費調整額・再エネ賦課金・テナント請求が当業種に与える影響</li>
              <li>規模別（小規模仲介／中堅PM／大手REIT）の電気代と削減事例3件（Before/After）</li>
              <li>管理物件共用部の代行集中購買による差別化施策</li>
              <li>SII・需要家主導型PPA・ZEB補助金・中小企業補助の組合せ活用</li>
              <li>不動産業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              不動産業の電力使用特性 — 本社・支店・管理物件・保有物件の4層
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業の電力使用は『本社オフィス／多拠点支店／管理物件共用部／保有物件運営』の4層構造です。事業形態（仲介・賃貸管理・開発・REIT）で電力契約管理の課題が異なるため、自社事業の重み付けを把握することが見直しの起点です。
            </p>
            <div className="mt-4 space-y-3">
              {usageProfile.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気料金の上昇要因の全体像は{" "}
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人の電気料金が上がる理由
              </Link>
              、削減打ち手の全体像は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電気代の削減ポイント
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比0.2〜1.5%、事業形態で2〜4倍格差
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業の電気代水準は事業形態（仲介・賃貸管理・開発・REIT）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
            </p>
            <div className="mt-4 space-y-3">
              {industryBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 全日本不動産協会・不動産協会・経産省統計から整理。実値は事業形態・保有物件数で2〜5倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              不動産業の主要な電気代上昇要因 — 燃料費・賦課金・テナント請求・ESG
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業の電気代上昇は、制度的要因（燃料費・賦課金）に加え、テナント請求の透明性、ESG投資家対応のZEB化要求という業界固有要因が並列します。
            </p>
            <div className="mt-4 space-y-3">
              {costFactors.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別要因の詳細は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、{" "}
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の事業影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模仲介／中堅PM／大手REIT
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before（見直し前）：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After（実施施策）：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">Result（削減効果）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関連業種の事例は{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し</Link>
              、{" "}
              <Link href="/shopping-mall-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ショッピングモールの電気料金見直し</Link>
              、{" "}
              <Link href="/department-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">百貨店の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              管理物件共用部の代行集中購買 — PM業の差別化施策
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              管理物件の共用部電力（エレベーター・廊下・駐車場・受水槽）は原則オーナー契約ですが、PM/BM業務として代行集中購買化することで管理戸数100戸超で年5〜8%の単価改善、年100万〜1,000万円規模の削減効果が見込まれます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">集中購買の進め方</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>管理物件全体の使用量・契約電力を集計</li>
                  <li>オーナーへ代行契約スキームを提案</li>
                  <li>新電力5〜10社へ管理物件案件として相見積</li>
                  <li>契約終了月に合わせて段階移行</li>
                  <li>オーナー報告書で削減効果を可視化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">PM業のメリット</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>オーナー満足度向上による契約継続率改善</li>
                  <li>新規管理委託獲得アドバンテージ</li>
                  <li>代行手数料収入（年5〜8%削減効果の20〜30%）</li>
                  <li>共用部LED改修プログラム連動</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              多拠点企業の電気代対応は{" "}
              <Link href="/multi-site-company-price-surge-risk" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">多拠点企業の料金高騰リスク</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              不動産業のデマンド管理 — 集中契約・ZEB化・テナント還元
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業のデマンド管理は『本社・支店グループ契約』『管理物件代行集中購買』『保有物件ZEB化＋自家消費太陽光』『テナント還元プログラム』の4論点を組合せて最適化します。
            </p>
            <div className="mt-4 space-y-3">
              {demandManagement.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド管理の削減効果試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 多拠点合算の上振れ感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業は事業形態によって市場連動・固定プランの最適選択が異なります。仲介中心は市場連動も検討可能ですが、保有物件運営・PM業は固定プラン推奨。テナント還元・オーナー透明性確保で固定プランの優位性が高くなります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>保有物件のテナント還元プログラムと整合的</li>
                  <li>PM業のオーナー透明性確保（管理委託の信頼性）</li>
                  <li>ESG投資家対応（再エネ100%）と長期固定の親和性</li>
                  <li>ZEB化投資の回収計画予算精度確保</li>
                  <li>多拠点合算で大規模契約の交渉力強化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬高値期にテナントから単価上昇クレーム</li>
                  <li>オーナー代行契約の透明性確保が困難</li>
                  <li>ESG投資家への再エネ調達説明が困難</li>
                  <li>JEPX高騰時に保有物件全体で年数千万〜億円規模の追加負担</li>
                  <li>テナント契約更新時の交渉力低下</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              、固定プラン適性は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、比較は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定プランの違い</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種特有の節電・省エネ施策 — ZEB化・集中購買・テナント還元
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業向けの省エネ施策は『保有物件ZEB化』『管理物件代行集中購買』『本社・支店BEMS導入』『テナント還元プログラム』が4本柱。投資回収3〜8年で実行可能な施策が多数存在します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">保有物件ZEB化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ZEB Ready改修で年間電気代▲30〜50%</li>
                  <li>ZEB Oriented化で▲50%以上</li>
                  <li>ZEB補助金1/2〜3/5活用</li>
                  <li>投資回収7〜10年（補助金後5〜7年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">屋上太陽光1MW級</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>商業ビル屋上1MWで年100〜130万kWh発電</li>
                  <li>年1,000〜1,500万円削減</li>
                  <li>テナント還元プログラムと組合せ</li>
                  <li>投資回収7〜10年（補助金後5〜7年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">テナント還元プログラム</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>再エネ電力をテナント別配賦</li>
                  <li>再エネ証書発行で稼働率向上</li>
                  <li>優良テナント獲得アドバンテージ</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">本社・支店BEMS</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>LED化＋空調自動制御</li>
                  <li>電力▲15〜25%、SII補助1/2</li>
                  <li>投資回収1.5〜2.5年</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・ZEB補助・中小企業補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜3年短縮できます。複数補助金の組合せ申請（SII＋PPA＋ZEB）で採択率が高くなる傾向。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyPrograms.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-2">
                    <p><span className="font-semibold text-slate-700">対象：</span>{item.target}</p>
                    <p><span className="font-semibold text-slate-700">補助率：</span>{item.rate}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別制度の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              、{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・自家消費太陽光の補助金</Link>
              、{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              不動産業に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              、契約更新3か月前の準備は{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社不動産事業の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業は本社・支店・管理物件・保有物件が複雑に絡む業種で、契約電力の最適点が見えにくい構造です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・ZEB化のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>本社・支店グループ集中購買による単価改善幅を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>保有物件ZEB化後のシナリオ比較</li>
              <li>事例で示した10〜14%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-21"
            />
            <GlossaryLinks currentSlug="real-estate-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "本社オフィス中心業種の関連事例。" },
              { href: "/shopping-mall-electricity-cost-review", title: "ショッピングモールの電気料金見直し", description: "商業施設運営の関連事例。" },
              { href: "/department-store-electricity-cost-review", title: "百貨店の電気料金見直し", description: "大型商業施設運営の関連事例。" },
              { href: "/warehouse-electricity-cost-review", title: "倉庫の電気料金見直し", description: "保有倉庫・物流施設の関連事例。" },
              { href: "/consulting-electricity-cost-review", title: "コンサルティング業の電気料金見直し", description: "多拠点オフィス業種の関連事例。" },
              { href: "/multi-site-company-price-surge-risk", title: "多拠点企業の料金高騰リスク", description: "多拠点運営に直結するリスク。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "保有物件運営・PM業の固定プラン選択。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "保有物件屋上太陽光の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "保有物件の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "BEMS・LED・空調更新で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "賦課金の仕組みと推移を確認する。" },
            ]}
          />

          <ContentCta
            heading="自社不動産事業条件でリスクを確認する"
            description="本社・支店・管理物件・保有物件の電力使用パターン、ZEB化計画、テナント還元プログラムをもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>
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
