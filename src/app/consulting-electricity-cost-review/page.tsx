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
  "コンサルティング業の電気料金見直しポイント｜多拠点オフィスとグリーン認証連動の契約最適化";
const pageDescription =
  "コンサルティング業（戦略・IT・会計・人事コンサル）の電気料金見直しを解説。オフィス中心の低電力消費、クライアント請求の透明性、多拠点（東京・大阪・名古屋）集中契約、グリーン認証連動、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "コンサルティング 電気料金 見直し",
    "コンサル会社 電気代",
    "多拠点 集中契約 電力",
    "グリーン電力 認証",
    "コンサルファーム 電気料金",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/consulting-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/consulting-electricity-cost-review",
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
    label: "オフィス基本電力（業務時間中心）",
    detail:
      "コンサルティング業のオフィスは業務時間8〜22時稼働が中心で、平日昼間ピークの典型的負荷曲線。社員1人あたり月100〜180kWh（一般オフィス水準）。マルチモニター環境とノートPC中心で個別席負荷は控えめだが、会議室・ミーティングルームの空調・プロジェクター負荷が加算される。",
  },
  {
    label: "会議室・プレゼン設備（クライアント対応）",
    detail:
      "クライアント向け会議室・ワークショップルーム・大型プレゼン設備は、大型モニター（55〜85インチ）、プロジェクター、ビデオ会議機材が稼働。100人規模のオフィスで月3,000〜8,000kWh、年4〜10万kWhを消費。",
  },
  {
    label: "多拠点（東京・大阪・名古屋等）の集合管理",
    detail:
      "大手コンサルファームは東京本社＋複数支店構成。拠点ごとに低圧／高圧契約が分散されているケースが多く、集中購買による交渉力強化、契約条件統一が課題。1ヶ月のグループ合計使用量が500〜2,000万kWhに達する大手ファームも。",
  },
  {
    label: "クライアント常駐オフィス（短期契約）",
    detail:
      "クライアントオフィスへの常駐型コンサル（戦略・IT実装支援等）では、常駐先電力使用量は自社外コストだが、社内に常駐対応のための拠点側待機要員のオフィス電力は継続的に発生する。",
  },
  {
    label: "クラウド・SaaSツール基盤",
    detail:
      "ナレッジマネジメントシステム、提案資料DB、データ分析環境はクラウド/SaaS中心で自社電力消費は小さい。一方、社内ローカルでBI/分析環境を運用する大手ファームではサーバー室電力が発生。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省・コンサルティング業協会等の参考値から、コンサルティング業の電気代は売上高比0.1〜0.5%（業務原価比0.5〜2%）と業界全体で見ても低い水準。大手戦略ファーム本社で年5,000万〜2億円、中堅IT/会計ファームで年1,000〜5,000万円、ブティック型ファームで年300〜1,500万円が一般的。",
  },
  {
    label: "従業員1人あたりの電力使用量",
    detail:
      "戦略系コンサルで従業員1人あたり月100〜180kWh、IT実装系コンサルで月150〜300kWh（社内検証環境込み）、ブティック型で月150〜250kWh。事務職系業種では低水準だが、会議室・大型モニター比率で20〜40%格差。",
  },
  {
    label: "拠点規模別の年間使用量",
    detail:
      "小規模ブティックファーム（30〜100名）で年間5〜20万kWh、中堅ファーム（300〜1,000名）で年間50〜200万kWh、大手戦略コンサル本社（1,000名超）で年間300〜1,500万kWh。低圧〜高圧契約が中心で本社ビル全体管理は特別高圧も。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の本社契約への影響",
    detail:
      "コンサル業はオフィス中心だが多拠点合算では使用量が大きく、燃料費調整額1円/kWhの変動で年間500万kWh使用の中堅ファームで年500万円の差。グループ合計では年数千万円規模。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間800万kWh使用の大手ファーム本社で年3,344万円の負担、5年で1.672億円超。",
  },
  {
    label: "クライアント請求の単価透明化",
    detail:
      "コンサル契約はマンアワー（時間×単価）課金が主流で、電力コストは間接費として埋め込まれる。近年は外資系・大手クライアントから諸経費の透明化が求められ、電気代上昇分の契約改定対応が課題。",
  },
  {
    label: "グリーン認証・サステナビリティ要求",
    detail:
      "外資系・グローバル企業向け提案案件では、コンサル側にも再エネ100%調達・カーボンニュートラル目標を求められるケースが急増。グリーン電力証書購入、PPA契約のプレミアム単価が新たな費用負担に。",
  },
  {
    label: "多拠点分散契約と集中購買機会損失",
    detail:
      "多拠点をビル管理会社経由で個別契約しているケースで、グループ集中購買すれば年5〜10%単価改善できる機会を逸失している事例が多数。グループ電力購買担当の不在が課題。",
  },
];

const sizeBenchmarks = [
  {
    size: "ブティック型ファーム（従業員30〜100名）",
    profile: "戦略・専門特化型ファーム／低圧 30〜80kW／年間 5〜20万kWh",
    annualCost: "年間電気代 150〜600万円",
    note: "オフィス単一拠点中心。新電力切替・固定3年契約・LED化・空調最適化で年7〜10%削減事例。グリーン電力部分調達で大手クライアント対応強化。",
  },
  {
    size: "中堅ファーム・IT/会計コンサル（従業員300〜1,000名）",
    profile: "東京本社＋大阪/名古屋支店／高圧 200〜600kW／年間 50〜200万kWh",
    annualCost: "年間電気代 1,500〜6,000万円",
    note: "拠点集中購買＋固定5年契約＋LED＋空調最適化＋グリーン電力30%調達で年10〜13%削減事例。クライアント請求書での透明化対応も急務。",
  },
  {
    size: "大手戦略コンサル・グローバルファーム本社（従業員1,000名超）",
    profile: "丸の内・大手町等の本社／特別高圧 1,500〜5,000kW／年間 300〜1,500万kWh",
    annualCost: "年間電気代 1〜5 億円",
    note: "1%の単価改善でも年100〜500万円のインパクト。長期固定5〜10年契約＋オフサイトPPA＋グリーン電力100%調達がスタンダード。",
  },
];

const caseStudies = [
  {
    title: "事例1：ブティック型ファームの年間9%削減（Before/After）",
    before: "都内ブティック型戦略ファームA社（低圧 60kW、年間 15万kWh、年間電気代 450万円）。市場連動プラン継続、LED未更新、空調個別制御なし、グリーン電力未対応。",
    after: "新電力切替（固定3年）／全照明LED化（投資 50万円）／空調個別制御化／グリーン電力証書 20% 部分調達／クライアント請求書にグリーン認証反映。",
    result: "年間電気代 450万円 → 410万円（▲9%、▲40万円）／契約 kW 60→55／投資回収 1.5年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中堅IT/会計ファームの年間13%削減",
    before: "東京本社＋大阪支店のIT/会計コンサル B社（高圧 400kW、年間 130万kWh、年間電気代 3,900万円）。各拠点個別契約、市場連動プラン継続、空調最適化未実施。",
    after: "本社＋支店をグループ一括契約化／固定5年プラン切替／本社・支店ともLED化100%／空調BEMS導入／会議室自動制御／グリーン電力30%調達。",
    result: "年間電気代 3,900万円 → 3,393万円（▲13%、▲507万円）／契約 kW 合計 400→350／投資回収 2.5年（補助金後 1.5年）",
  },
  {
    title: "事例3：大手戦略コンサル本社年間4,500万円削減",
    before: "丸の内大手戦略コンサルC社本社＋関西支店（特別高圧 3,000kW、年間 800万kWh、年間電気代 2.4億円）。長期固定契約継続もグループ統一管理なし、グリーン電力対応40%止まり。",
    after: "電力契約の8年長期固定締結／拠点集中購買体制構築／オフサイトPPA 1.5MW（再エネ100%対応）／本社屋上太陽光 500kW／BEMS全拠点導入／DR契約／クライアント請求書での透明化。",
    result: "年間電気代 2.4億円 → 1.95億円（▲18.7%、▲4,500万円）／契約 kW 3,000→2,700／投資回収 6年（補助金後 4年）／CO₂削減 約2,800 t/年",
  },
];

const demandManagement = [
  {
    label: "会議室・ミーティングルーム自動制御",
    detail:
      "会議室の空調・照明・大型モニターを在室センサー＋スケジューラで自動制御することで、空室時の電力消費を100%削減。BEMS導入で月の電力使用量▲10〜20%削減事例。",
  },
  {
    label: "夜間・週末の自動シャットダウン",
    detail:
      "オフィスPC、ドッキングステーション、空調・照明を業務時間外に自動シャットダウン。コンサル業は夜間・週末利用が比較的少ないため効果大。月の電力▲15〜25%削減。",
  },
  {
    label: "多拠点の集中購買・グループ契約化",
    detail:
      "各拠点個別契約をグループ一括契約に切替えるだけで電力単価▲5〜10%削減事例。新電力との交渉力強化、契約条件統一による管理コスト削減効果も。",
  },
  {
    label: "リモートワーク後のオフィス契約電力ダウンサイズ",
    detail:
      "コロナ後のリモートワーク併用で実出社率50〜70%が定着しているファームでは、契約電力（kW）が過剰なケース多数。実デマンド実績に合わせたダウンサイズで基本料金10〜20%削減。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / オフィス・事業場型）",
    target: "LED・空調・BEMS・会議室自動制御",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "コンサル業の本社・支店設備更新で活用しやすい主力補助金。BEMS導入で大規模採択事例あり。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "本社屋上太陽光・オフサイトPPA",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "大型本社ビルを保有するファームで活用可能。賃借ビルの場合はオフサイトPPAで対応。",
  },
  {
    name: "グリーン電力・非化石証書購入補助",
    target: "外資系/グローバルクライアント対応の再エネ調達",
    rate: "制度別、自治体補助との併用",
    note: "サステナビリティ重視ファーム向けの差別化施策に活用可能。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小コンサル会社のオフィス設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下のブティックファームで活用可能。LED・空調更新で採択率高い。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "多拠点をグループ一括契約に統合できているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "会議室・ミーティングルームのBEMS自動制御を導入したか",
  "リモートワーク後のオフィス契約電力ダウンサイズを検討したか",
  "夜間・週末の自動シャットダウンを全拠点で導入したか",
  "本社屋上太陽光（300kW〜1MW）の試算を実施したか",
  "外資系/グローバルクライアント向けにグリーン電力100%調達計画があるか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "クライアント請求書での電力コスト透明化対応を検討したか",
  "SII省エネ補助金・需要家主導型PPA補助金の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "コンサルティング業の電気代水準はどれくらいですか？", answer: "売上高比0.1〜0.5%、業務原価比0.5〜2%と業界全体で低い水準です。ブティック型で年150〜600万円、中堅ファームで年1,500〜6,000万円、大手戦略コンサル本社で年1〜5億円規模になります。" },
  { question: "コンサル業に向く電力プランは固定ですか、市場連動ですか？", answer: "オフィス中心で連続稼働ではないため市場連動も検討可能ですが、外資系/グローバルクライアント対応で再エネ100%調達が要求される場合は固定プラン＋オフサイトPPAが推奨されます。" },
  { question: "多拠点をグループ集中購買すると電気代はどれくらい下がりますか？", answer: "各拠点個別契約をグループ一括契約に統合すると、電力単価▲5〜10%、年間100〜800万円規模の削減事例が多数あります。新電力との交渉力強化と契約条件統一の管理コスト削減効果も発生します。" },
  { question: "リモートワーク後の契約電力ダウンサイズは現実的ですか？", answer: "現実的です。実デマンド実績が契約電力の70%以下になっているケースが多く、ダウンサイズで基本料金▲10〜20%、年100〜500万円規模の削減が可能です。直近12ヶ月のkWh実績を電力会社に開示してもらい再算定するのが第一歩。" },
  { question: "クライアント請求書での電力コスト透明化は可能ですか？", answer: "可能で、近年は外資系・グローバルクライアントからの要求で増加傾向です。マンアワー単価に含めるか、諸経費として明示するかの2パターン。透明性確保が大型案件獲得のアドバンテージになります。" },
  { question: "本社屋上太陽光はコンサルファーム本社で投資回収できますか？", answer: "本社ビルの屋上面積が1,500m²以上で、オフィス稼働時間が長い大手ファームなら検討余地。300kW太陽光で年30〜35万kWh発電、年300〜350万円削減、投資回収7〜10年（補助金後5〜7年）。賃借ビルの場合はオフサイトPPAが現実的。" },
  { question: "コンサル業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（BEMS・空調・LED更新）、需要家主導型PPA補助金（本社太陽光）、グリーン電力購入補助（クライアント対応）、中小企業補助の4本柱です。" },
  { question: "外資系クライアント向け再エネ100%調達のコスト負担はどれくらいですか？", answer: "現状の電力契約に対して単価+1〜3円/kWhのプレミアムが発生する事例が多く、年間100万kWh使用で年100〜300万円の追加負担。長期PPA契約で安価化可能（10年契約で+0.5〜1円/kWh）。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本コンサルタント協会", url: "https://www.jma-japan.net/" },
  { name: "経済産業省（コンサルティング業界統計）", url: "https://www.meti.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function ConsultingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/consulting-electricity-cost-review"
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
          <span className="text-slate-800">コンサルティング業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            コンサルティング業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            コンサルティング業（戦略・IT・会計・人事コンサル）は、オフィス中心の低電力消費業種です。一方で多拠点運営、クライアント請求の透明性、外資系/グローバル顧客向けグリーン電力100%調達など、サービス業独自の論点を抱えます。本ページではコンサル業特有の電力負荷特性、業界平均水準、規模別事例、多拠点集中購買、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>コンサル業の電力使用プロファイル（オフィス／会議室／多拠点／クラウド）</li>
              <li>業界平均の電気代水準（売上高比0.1〜0.5%）と従業員あたり単価</li>
              <li>燃料費調整額・再エネ賦課金・クライアント要求が当業種に与える影響</li>
              <li>規模別（ブティック／中堅／大手戦略コンサル）の電気代と削減事例3件（Before/After）</li>
              <li>多拠点グループ集中購買による電力単価改善の費用対効果</li>
              <li>SII・需要家主導型PPA・グリーン電力・中小企業補助の組合せ活用</li>
              <li>コンサル業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              コンサル業の電力使用特性 — オフィス・会議室・多拠点・クラウド
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コンサル業の電力使用は『オフィス基本電力／会議室・プレゼン設備／多拠点合算／クラウド基盤』の4層構造です。1人あたり負荷は控えめだが、大手ファームのグループ合計では大きく、多拠点契約の集約と会議室管理が見直しの起点になります。
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
              業界平均の電気代水準 — 売上高比0.1〜0.5%、業種別で最も低水準
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コンサル業の電気代水準は事業形態（戦略・IT実装・会計・人事）で異なりますが、全体的には他のサービス業に比べても低水準。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本コンサルタント協会・経産省統計から整理。実値は事業形態・拠点数で1.5〜3倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              コンサル業の主要な電気代上昇要因 — 燃料費・賦課金・グリーン要求・分散契約
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コンサル業の電気代上昇は、制度的要因（燃料費・賦課金）に加え、外資系/グローバルクライアントからのグリーン電力100%要求、多拠点分散契約の機会損失という業界固有要因が並列します。
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
              規模別の削減事例3件 — ブティック／中堅／大手戦略コンサル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コンサル業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/small-office-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">小規模オフィスの電気料金見直し</Link>
              、{" "}
              <Link href="/advertising-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">広告業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              多拠点集中購買 — グループ一括契約化による単価改善
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中堅・大手コンサルファームの電気代削減で最大の効果が見込まれるのが多拠点グループ集中購買。各拠点をビル管理会社経由で個別契約しているケースから、グループ一括契約に切り替えるだけで電力単価▲5〜10%の改善が一般的です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">集中購買による直接効果</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力単価▲5〜10%（年100〜800万円規模の削減）</li>
                  <li>新電力との交渉力強化</li>
                  <li>契約条件統一による管理コスト削減</li>
                  <li>請求書管理・予算管理の効率化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">グループ契約化の進め方</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>全拠点の契約期間・終了月をリスト化</li>
                  <li>各拠点の使用量・契約電力を集計</li>
                  <li>新電力5〜10社へグループ案件として相見積</li>
                  <li>契約終了月に合わせて段階移行</li>
                  <li>移行後はグループBEMS・購買担当を任命</li>
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
              コンサル業のデマンド管理 — 会議室・夜間自動制御・集中契約
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コンサル業のデマンド管理は『会議室自動制御』『夜間・週末シャットダウン』『多拠点集中契約』『リモートワーク対応ダウンサイズ』の4論点を組合せて最適化します。
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
              燃料費調整・市場連動プランの影響 — オフィス中心業種の感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コンサル業はオフィス中心でベースロードは小さいですが、多拠点合算では月の使用量が大きく、市場価格高騰局面で年数百万〜数千万円のインパクトが発生します。グリーン電力100%対応とも整合する固定プラン採用が経営判断レベルの論点。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>クライアント請求書での電力コスト透明化が容易</li>
                  <li>グリーン電力100%対応（外資系クライアント要求）と整合的</li>
                  <li>多拠点グループ契約と長期固定単価の親和性</li>
                  <li>マンアワー単価モデルの予算精度向上</li>
                  <li>サステナビリティ報告（CDP/SBTi）対応</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬の市場高値期にオフィス稼働が継続するリスク</li>
                  <li>クライアント請求書での電力コスト透明化が困難</li>
                  <li>外資系クライアントのグリーン要求と矛盾</li>
                  <li>JEPX高騰時に年数百万〜千万円規模の追加負担</li>
                  <li>マンアワー単価の予算精度低下</li>
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
              業種特有の節電・省エネ施策 — 会議室・グリーン電力・集中購買
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コンサル業向けの省エネ施策は『会議室自動制御』『LED+空調BEMS』『グリーン電力調達』『多拠点集中購買』が4本柱。投資回収1〜3年で実行可能な施策が多数存在します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">会議室自動制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>在室センサー＋スケジューラ連動</li>
                  <li>空調・照明・モニター連動制御</li>
                  <li>空室時の電力消費を完全に削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">オフィス全体LED+BEMS</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>LED化で照明電力▲50〜70%</li>
                  <li>BEMS統合で空調・照明統合制御</li>
                  <li>SII補助1/2で投資回収1.5〜2年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">グリーン電力100%調達</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>非化石証書購入で実質再エネ100%</li>
                  <li>長期PPAで安価化（10年で+0.5〜1円/kWh）</li>
                  <li>外資系・グローバルクライアント獲得アドバンテージ</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">多拠点グループ集中購買</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力単価▲5〜10%</li>
                  <li>契約条件統一・管理コスト削減</li>
                  <li>新電力との交渉力強化</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・グリーン電力・中小企業補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コンサル業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜2年短縮できます。
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
              コンサル業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社コンサル事業の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コンサル業は多拠点運営と外資系クライアント対応で電力契約が複雑化しやすい業種です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・グリーン電力調達のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>多拠点集中購買による単価改善幅を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>グリーン電力100%調達後のクライアント対応シナリオを比較する</li>
              <li>事例で示した9〜18%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="consulting-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "本社オフィス中心業種の関連事例。" },
              { href: "/small-office-electricity-cost-review", title: "小規模オフィスの電気料金見直し", description: "小規模コンサル会社向けの基本。" },
              { href: "/advertising-electricity-cost-review", title: "広告業の電気料金見直し", description: "サービス業の類似事例。" },
              { href: "/it-services-electricity-cost-review", title: "ITサービス業の電気料金見直し", description: "オフィス＋サーバー事業の関連事例。" },
              { href: "/staffing-electricity-cost-review", title: "人材派遣業の電気料金見直し", description: "多拠点オフィス業種の関連事例。" },
              { href: "/multi-site-company-price-surge-risk", title: "多拠点企業の料金高騰リスク", description: "多拠点運営に直結するリスク。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "クライアント請求透明化を重視する法人の選択。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "本社屋上太陽光の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "本社ビル・大型施設の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・BEMS・空調更新で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "賦課金の仕組みと推移を確認する。" },
            ]}
          />

          <ContentCta
            heading="自社コンサル事業条件でリスクを確認する"
            description="本社・支店・会議室の電力使用パターン、グリーン電力100%調達計画、多拠点集中購買による単価改善幅をシミュレーターで試算できます。固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
