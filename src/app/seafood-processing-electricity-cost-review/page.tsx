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
  "水産加工業の電気料金見直しポイント｜鮮魚冷蔵冷凍・干物燻製・港湾立地の契約最適化";
const pageDescription =
  "水産加工業の電気料金見直しを解説。鮮魚冷蔵・冷凍、干物・燻製の加熱乾燥、港湾近隣工場の特性、季節漁獲量による電力変動、固定vs市場連動の判断、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "水産加工 電気料金 見直し",
    "鮮魚 冷凍 電気代",
    "干物 燻製 電力",
    "水産工場 港湾",
    "水産加工 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/seafood-processing-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/seafood-processing-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle },
    ],
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
    label: "鮮魚冷蔵庫・冷凍庫（24時間連続稼働）",
    detail:
      "水産加工の中核設備。鮮魚は0℃前後の冷蔵庫、加工製品は-25℃の冷凍庫で24時間連続稼働。コンプレッサー・凝縮器・蒸発器の電力負荷で工場全体の電力使用量の35〜50%を占める。季節漁獲量変動で運用負荷が大きく変動。",
  },
  {
    label: "急速冷凍機（IQF・ブラストチラー）",
    detail:
      "鮮魚の鮮度を維持するための急速冷凍機。漁獲直後の-40℃急速冷凍が主流で、漁期集中時の電力負荷が突出。工場全体の15〜25%を占める。",
  },
  {
    label: "干物・燻製の加熱乾燥設備",
    detail:
      "干物の天日乾燥・冷風乾燥、燻製の燻煙・加熱設備。電気・蒸気ボイラー、温風機・送風機の電力負荷で工場全体の15〜25%を占める。",
  },
  {
    label: "加工ライン（洗浄・三枚卸し・成形）",
    detail:
      "鮮魚の自動洗浄機、三枚卸し機、ミンチ機、成形機の動力電力。1ラインあたり50〜200kWの常時負荷。水産加工は人手作業と機械の混在が多い。",
  },
  {
    label: "製氷機・氷温管理（漁港共用）",
    detail:
      "漁港近隣の水産加工工場は製氷機を設置し、漁船・水揚げ後の鮮魚保管に使用。1日数トンの製氷で電力負荷大。共用施設として周辺事業者にも供給するケース多い。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・全国水産加工業協同組合連合会の統計によれば、水産加工業の電気料金は売上高の7〜13%（冷凍水産加工は最高水準）。製造原価に占める比率は12〜22%。冷凍冷蔵設備で電力依存度が高い。",
  },
  {
    label: "1トン製品あたりの電力使用量",
    detail:
      "鮮魚加工で1トンあたり300〜600 kWh、冷凍水産で1トンあたり500〜900 kWh、干物・燻製で1トンあたり400〜800 kWh、缶詰水産で1トンあたり400〜700 kWhが業界平均。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模水産加工（年商3〜20億円）で年間50〜250万 kWh、中規模水産加工（年商50〜300億円）で年間500〜2,500万 kWh、大規模水産加工（年商500億円超）で年間2,500万〜1億 kWh。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の24h冷凍ベースへの影響",
    detail:
      "鮮魚冷蔵・冷凍倉庫の24h稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月100万kWh）で月100万円の差、年間1,200万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間1,500万kWh使用の中規模工場で年6,000万円超の負担。",
  },
  {
    label: "漁期集中の電力変動",
    detail:
      "サンマ・サバ・マグロ・ホタテ等の漁期に水揚げが集中し、急速冷凍機・冷蔵庫の電力負荷が漁期外の2〜3倍に急増。月別電力消費の変動が極めて大きく、デマンドピーク管理が困難。",
  },
  {
    label: "夏季冷凍機効率低下",
    detail:
      "外気温35℃超で冷凍機の凝縮器効率が低下し、消費電力が15〜25%増。海沿い工場では潮風による設備腐食もあり、冷凍機の保守コストも電気代に間接的に影響。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、水産加工のような24h冷凍稼働業種に影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模水産加工（年商3〜20億円、従業員15〜80名）",
    profile: "地場水産加工・干物・佃煮メーカー／高圧 200〜500kW／年間 50〜250万 kWh",
    annualCost: "年間電気代 1,500〜7,500 万円",
    note: "鮮魚冷蔵＋干物加熱／LED化・冷凍機更新で年10〜15%削減事例多数。",
  },
  {
    size: "中規模水産加工（年商50〜300億円、従業員150〜400名）",
    profile: "ニッスイ・極洋等の中堅水産加工メーカー／高圧 1,500〜3,000kW／年間 1,000〜2,500万 kWh",
    annualCost: "年間電気代 3.0〜7.5 億円",
    note: "CO2冷媒インバータ化＋自家消費太陽光で年8〜15%削減事例。",
  },
  {
    size: "大規模水産加工（年商500億円超、従業員500名以上）",
    profile: "総合水産メーカー基幹工場／特別高圧 3,000〜8,000kW／年間 2,500万〜1億 kWh",
    annualCost: "年間電気代 7.5〜30 億円",
    note: "長期固定（5〜10年）契約と需要家主導型PPA併用が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模干物加工メーカーの年間14%削減（Before/After）",
    before: "東北の干物加工メーカーA社（高圧 350kW、年間 200万 kWh、年間電気代 6,000万円）。市場連動プラン継続、冷凍機が15年経過、乾燥機の温度制御は手動。",
    after: "新電力切替（固定3年）／冷凍機をCO2冷媒インバータ式に更新（SII＋農水補助1/2活用、投資1,800万円）／乾燥機温度自動制御＋IoT管理／LED化／デマンドコントローラー導入。",
    result: "年間電気代 6,000万円 → 5,160万円（▲14%、▲840万円）／契約 kW 350→300／投資回収 補助金後 2.1年",
  },
  {
    title: "事例2：中規模水産加工メーカーの年間17%削減",
    before: "三陸の水産加工メーカーB社（高圧 2,200kW、年間 2,000万 kWh、年間電気代 6.0億円）。市場連動プランで2022〜2023年に月最大2,200万円の追加負担を経験。漁期集中時のデマンド管理が課題。",
    after: "固定5年プラン切替／冷凍機をCO2冷媒インバータ式に更新（投資5,500万円、SII＋農水補助1/2活用）／自家消費太陽光 1MW 導入（屋根7,000 m²）／BEMS＋漁期予測連動デマンド制御／需要家主導型PPA。",
    result: "年間電気代 6.0億円 → 4.98億円（▲17%、▲1.02億円）／契約 kW 2,200→1,900／投資回収 補助金後 3.0年",
  },
  {
    title: "事例3：大規模水産加工工場の年間1.5億円削減",
    before: "北海道の総合水産加工メーカーC社の基幹工場（特別高圧 5,000kW、年間 4,500万 kWh、年間電気代 13.5億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2.5 MW＋蓄電池 3 MWh／コージェネ 1.5MW／需要家主導型PPA（オフサイト風力3MW）／DR契約締結。",
    result: "年間電気代 13.5億円 → 12.0億円（▲11%、▲1.5億円）／契約 kW 5,000→4,500／投資回収 6.5年（補助金後 4.8年）",
  },
];

const demandManagement = [
  {
    label: "漁期予測連動デマンド制御",
    detail:
      "漁獲予測データと連動してデマンドを事前管理。漁期集中時の急速冷凍機稼働を予測し、他設備の負荷を計画的に分散。中規模工場で年300〜700万円の基本料金削減効果。",
  },
  {
    label: "急速冷凍機のバッチタイミング分散",
    detail:
      "複数の急速冷凍機を運用する場合、起動・運転タイミングを30分〜2時間ずらすことでデマンドピークを抑制。1工場の同時最大負荷を15〜25%削減した事例。",
  },
  {
    label: "冷凍倉庫の事前冷却・蓄熱運用",
    detail:
      "-25℃冷凍倉庫を夜間に予冷（-30℃まで冷却）し、昼間の温度上昇を吸収することで昼間の凝縮器負荷を▲15〜25%。投資はBEMS・温度センサー追加（200〜500万円）のみで回収1〜2年。",
  },
  {
    label: "凝縮器ファンのインバータ化",
    detail:
      "冷凍機の凝縮器ファンをインバータ式に更新で外気温連動制御が可能に。夏季の電力消費▲20〜30%。投資回収はSII補助活用で1.5〜3年。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "水産加工業向けで採択率が高い主力補助金。CO2冷媒インバータ化で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。沿岸工場は塩害対策パネルが必要。",
  },
  {
    name: "農林水産省 水産加工業者向け省エネ設備導入支援",
    target: "冷凍機CO2冷媒化・自然冷媒化・急速冷凍機更新",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "水産加工業特有の補助制度。フロン規制対応とセットで採択しやすい。",
  },
  {
    name: "環境省 フロン排出抑制法対応補助",
    target: "特定フロン使用冷凍機のCO2・自然冷媒への更新",
    rate: "1/2、上限事業規模に応じる",
    note: "フロン規制対応の主力補助金。水産加工業で大規模採択実績多数。",
  },
  {
    name: "水産庁 漁業構造改善・産地強化交付金",
    target: "産地形成・冷蔵庫・加工施設の設備更新",
    rate: "1/2、上限事業規模に応じる",
    note: "水産庁経由の補助制度。漁協・水産加工協同組合での採択実績多数。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "漁期集中時のピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "鮮魚冷蔵・急速冷凍機・干物乾燥機の電力プロファイルを把握しているか",
  "冷凍機のCO2冷媒・アンモニア冷媒への更新計画を策定したか（フロン規制対応）",
  "屋根面積を活用した自家消費太陽光（500kW〜2MW）導入の試算を実施したか（沿岸工場は塩害対策必須）",
  "漁期予測連動デマンド制御の導入余地を確認したか",
  "凝縮器ファンインバータ化・夜間事前冷却の経済合理性を評価したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・農水補助・フロン規制対応補助・水産庁補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "水産加工業の電気代水準はどれくらいですか？", answer: "売上高比7〜13%（冷凍水産加工は最高水準）、製造原価比12〜22%が業界平均。中規模水産加工メーカー（年商200億円級）で年3〜7.5億円、大規模水産加工工場（年商500億円超）で年7.5〜30億円規模の電気代になります。" },
  { question: "漁期集中時のデマンド管理はどうすればよいですか？", answer: "①漁獲予測データと連動した事前デマンド制御、②急速冷凍機のバッチタイミング分散、③冷凍倉庫の夜間事前冷却、④凝縮器ファンインバータ化、⑤コンプレッサー台数制御、の5本柱が中心。中規模工場で年300〜700万円の基本料金削減効果。" },
  { question: "鮮魚冷蔵・冷凍庫の電気代を削減するには？", answer: "①CO2冷媒インバータ式冷凍機への更新（電力▲25〜40%）、②夜間事前冷却・蓄熱運用、③凝縮器ファンのインバータ化、④断熱性能改善工事、⑤BEMS・漁期予測連動制御、の5本柱が中心。投資回収はSII＋農水補助＋フロン規制対応補助の組合せで2〜3年が目安です。" },
  { question: "水産加工業の固定プランと市場連動プランどちらが向きますか？", answer: "24h冷凍倉庫稼働でベースロードが大きく、漁期集中時の電力ピークも大きいため、固定プランが圧倒的に向きます。漁期外でも冷凍倉庫を停止できないため逃げ場がなく、市場高騰時のリスクが極めて大きいです。" },
  { question: "干物・燻製の加熱乾燥電力対策は？", answer: "①乾燥機温度の自動制御＋IoT管理（電力▲10〜20%）、②温風機のインバータ化、③冷風乾燥への一部転換（省エネ＋品質向上）、④排熱回収＋原料予熱化、⑤BEMSによる需要見える化、の5本柱が中心。SII補助＋農水補助＋水産庁補助の組合せで投資回収2〜3年が目安です。" },
  { question: "沿岸水産工場の太陽光導入は塩害対策が必要ですか？", answer: "はい、沿岸500m以内の工場は塩害対策パネル（耐塩害仕様）の選定が必須です。通常パネルより費用が10〜20%高くなりますが、海沿いでも10年以上の耐久性が確保できます。漁港近隣の水産加工工場での導入実績が増えており、屋根面積3,000m²以上で1MW級導入が現実的です。" },
  { question: "水産加工業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、農林水産省水産加工業向け補助、環境省フロン排出抑制法対応補助、水産庁漁業構造改善交付金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "漁協・水産加工協同組合の共同調達は有効ですか？", answer: "はい、複数の水産加工事業者が共同で新電力と契約することで、単独契約より2〜3円/kWh安価な単価を獲得できる事例多数。漁協・水産加工協同組合経由での共同調達は、スケールメリットを活かして中小事業者でも特別高圧並みの単価交渉が可能になります。水産庁補助の活用と組合せて投資回収を加速できます。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全国水産加工業協同組合連合会", url: "https://www.zensui.jp/" },
  { name: "水産庁", url: "https://www.jfa.maff.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function SeafoodProcessingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/seafood-processing-electricity-cost-review"
        datePublished="2026-05-20"
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
          <span className="text-slate-800">水産加工業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            水産加工業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            水産加工業は鮮魚冷蔵・冷凍庫の24h連続稼働、漁期集中時の急速冷凍機ピーク、干物・燻製の加熱乾燥、港湾近隣工場の特性など多面的な電力負荷を持ちます。季節漁獲量による電力変動が大きい独特な業種です。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>水産加工業の電力使用プロファイル（鮮魚冷蔵／急速冷凍／干物乾燥／製氷）</li>
              <li>業界平均の電気代水準（売上高比7〜13%）と1トン製品あたり単価</li>
              <li>漁期集中時のデマンド管理と漁期予測連動制御</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>沿岸工場の塩害対策太陽光・CO2冷媒化の費用対効果</li>
              <li>SII・PPA・農水補助・フロン規制対応・水産庁補助の組合せ活用</li>
              <li>水産加工業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              水産加工業の電力使用特性 — 鮮魚冷蔵・急速冷凍・干物乾燥
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工業の電力使用は『鮮魚冷蔵冷凍／急速冷凍機／干物燻製／加工ライン／製氷機』の5層で構成されます。鮮魚冷蔵冷凍が工場全体の35〜50%を占め、漁期集中時の急速冷凍機ピークが業界特有のコスト構造を形成します。
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比7〜13%、製品1トン300〜900 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工業の電気代水準は加工種別（鮮魚／冷凍／干物燻製／缶詰）と漁期集中度で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全国水産加工業協同組合連合会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              水産加工業の主要な電気代上昇要因 — 漁期集中・冷凍効率・フロン規制
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工業の電気代上昇は、24h冷凍ベースに加え、漁期集中時の急速冷凍機ピーク、夏季冷凍機効率低下、フロン規制対応投資が複合的に重なります。
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
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模干物／中規模水産加工／大規模工場
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-3">
                    <p><span className="font-semibold text-slate-700">プロファイル：</span>{item.profile}</p>
                    <p><span className="font-semibold text-slate-700">年間電気代：</span>{item.annualCost}</p>
                    <p><span className="font-semibold text-slate-700">特徴：</span>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
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
              関連業種は{" "}
              <Link href="/frozen-food-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍食品業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              漁期集中・冷凍倉庫のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工業は漁期予測連動デマンド制御、急速冷凍機バッチ分散、夜間事前冷却など、業種特有のデマンド管理戦略が効果的です。
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
              デマンド管理の基本は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）の仕組み</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 24h冷凍稼働＋漁期ピーク
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工業は24h冷凍稼働と漁期ピーク需要が二重に重なる業種で、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h鮮魚冷蔵稼働が必須</li>
                  <li>漁期集中時の急速冷凍機ピーク発生</li>
                  <li>水産物価格への即時転嫁が困難</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季の市場高値期に漁期と重なるリスク</li>
                  <li>冷凍を停止できないため逃げ場がない</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万円の追加負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 大量使用業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。水産加工業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模水産加工工場（年2,000万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 6,980万円</li>
                  <li>2025年度（3.98円/kWh）：年 7,960万円（+980万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 9,000万円（+2,020万円）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の詳細は{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              水産加工業特有の節電・省エネ施策 — CO2冷媒・漁期予測・PPA
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工業の省エネは『CO2冷媒・自然冷媒インバータ化』『漁期予測連動デマンド制御』『干物乾燥機温度自動化』『塩害対策自家消費太陽光』『BEMS』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">CO2冷媒・アンモニア冷媒インバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力▲25〜40%、フロン規制対応も同時達成</li>
                  <li>SII＋農水補助＋フロン規制対応補助で投資回収 1.5〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">漁期予測連動デマンド制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>漁獲予測と連動した事前デマンド管理</li>
                  <li>基本料金▲10〜20%、年300〜700万円削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">干物乾燥機温度自動化＋IoT管理</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力▲10〜20%（中小干物業者で年100〜300万円削減）</li>
                  <li>SII＋農水補助活用で投資回収 1〜2年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">塩害対策自家消費型太陽光</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>耐塩害仕様パネル必須（費用+10〜20%）</li>
                  <li>1 MWで年100〜130万kWh発電</li>
                  <li>投資回収 8〜11年（補助金後 6〜8年）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・農水補助・フロン規制対応・水産庁補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工業向けに活用しやすい補助金は5本柱。漁協・水産加工協同組合経由の共同申請でスケールメリットを活かせます。
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
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              水産加工業に合った契約見直しチェックリスト（12項目）
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社水産加工工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工業は24h鮮魚冷蔵稼働・漁期集中ピーク・フロン規制対応の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>漁期集中月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した14〜17%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-20"
            />
            <GlossaryLinks currentSlug="seafood-processing-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/frozen-food-electricity-cost-review", title: "冷凍食品業の電気料金見直し", description: "冷凍倉庫24h連続稼働の対策。" },
              { href: "/food-processing-electricity-cost-review", title: "食品加工業の電気料金見直し", description: "食品加工業一般の見直しポイント。" },
              { href: "/meat-processing-electricity-cost-review", title: "精肉加工業の電気料金見直し", description: "ハム・ソーセージの電力対策。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "冷凍倉庫の温度管理電力対策。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し", description: "食品工場一般の見直しポイント。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h冷凍稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "冷凍稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "塩害対策パネルの選定。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "CO2冷媒インバータ化の主力補助金。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "漁期集中ピーク削減効果。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "冷凍24h稼働事業者のリスク。" },
            ]}
          />

          <ContentCta
            heading="自社の水産加工工場条件でリスクを確認する"
            description="鮮魚冷蔵・急速冷凍・干物乾燥の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。漁期集中時のデマンド変動や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="水産加工業の電力契約見直し、専門家に相談しませんか？"
            description="鮮魚冷蔵・急速冷凍・漁期集中対策は固有の論点が多くなります。エネルギー情報センターは中立的立場で水産加工事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
