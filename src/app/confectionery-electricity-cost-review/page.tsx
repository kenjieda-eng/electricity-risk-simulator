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
  "菓子業の電気料金見直しポイント｜製菓オーブン・冷蔵ショーケース・季節商戦の契約最適化";
const pageDescription =
  "菓子業（製菓・洋菓子・和菓子）の電気料金見直しを解説。オーブン・冷却設備、冷蔵ショーケース、和菓子の蒸し・餡製造、季節商戦の電力ピーク、固定vs市場連動の判断、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "菓子業 電気料金 見直し",
    "製菓 オーブン 電気代",
    "洋菓子 冷蔵 電力",
    "和菓子 蒸し 電気代",
    "菓子工場 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/confectionery-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/confectionery-electricity-cost-review",
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
    label: "製菓オーブン・焼成設備",
    detail:
      "菓子製造の中核設備。電気オーブン・トンネルオーブン・コンベアオーブンが工場全体の電力使用量の25〜40%を占める。焼成温度150〜230℃の維持、連続生産で多数台同時稼働する大型菓子工場では特に大きい負荷。",
  },
  {
    label: "冷却・凝固・成形設備",
    detail:
      "焼成後の冷却ライン、チョコレート・キャラメル等の冷却凝固設備、生クリーム・カスタードの冷却設備。冷却塔・凝固トンネルの電力負荷で工場全体の15〜25%を占める。冷却効率が製品品質を左右。",
  },
  {
    label: "冷蔵ショーケース・冷蔵倉庫（洋菓子）",
    detail:
      "洋菓子の生菓子・ケーキ・パティスリーは冷蔵保管必須（2〜5℃）。直営店舗・卸先のショーケース、工場の冷蔵倉庫で24時間連続稼働。年間電力使用量の20〜30%を占める。",
  },
  {
    label: "蒸し・餡製造設備（和菓子）",
    detail:
      "和菓子業界特有の蒸し器・餡練機・蒸籠が中心。蒸気ボイラー・電気蒸し器の電力負荷で和菓子工場の15〜25%を占める。季節商戦（お盆・お彼岸・年末）でのピーク稼働が顕著。",
  },
  {
    label: "包装・印字・検査設備",
    detail:
      "個別包装機・カートン充填機・X線検査機・金属検出機の電力負荷。1ラインあたり30〜100kWの常時負荷。賞味期限の印字・QRコード印刷等の追加電力もあり。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・全日本菓子協会の統計によれば、菓子業の電気料金は売上高の4〜8%（菓子種別により差異）。製造原価に占める比率は6〜15%。製菓オーブン・冷却設備の電力依存度が高い。",
  },
  {
    label: "1トン製品あたりの電力使用量",
    detail:
      "ビスケット・クッキーで1トンあたり400〜700 kWh、洋菓子（ケーキ・パティスリー）で1トンあたり600〜1,200 kWh、和菓子で1トンあたり300〜600 kWh、チョコレートで1トンあたり500〜900 kWhが業界平均。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模和菓子店（年商3〜15億円）で年間30〜200万 kWh、中規模製菓工場（年商30〜200億円）で年間500〜2,500万 kWh、大規模菓子工場（年商300億円超）で年間3,000万〜1.5億 kWh。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の連続焼成ベースへの影響",
    detail:
      "連続オーブン・冷蔵ショーケースの24h稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月100万kWh）で月100万円の差、年間1,200万円規模のインパクト。化石燃料連動の燃料費調整額は2022年以降4〜5円/kWhレンジで推移。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間1,500万kWh使用の中規模工場で年6,000万円超の負担。",
  },
  {
    label: "季節商戦の電力ピーク",
    detail:
      "クリスマス・バレンタイン・お盆・お彼岸・年末年始の前1〜2ヶ月で生産量が他季の2〜3倍に増加。電力需要も同時に増加し、季節ピーク月の電気代が他季の2倍以上に達する事業者も。デマンドピーク管理の効果が大きい。",
  },
  {
    label: "冷蔵ショーケースの直営店舗電力",
    detail:
      "洋菓子業界は直営店舗・百貨店内売場の冷蔵ショーケースが多数あり、店舗別の高圧契約管理が必要。1店舗あたり年間電力50〜200万kWh、全店合計で工場本体を上回る場合も。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、菓子業のような季節ピーク業種に影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模和菓子店・パティスリー（年商3〜15億円、従業員15〜60名）",
    profile: "地場和菓子店・洋菓子店／高圧 100〜300kW／年間 30〜200万 kWh",
    annualCost: "年間電気代 900〜6,000 万円",
    note: "季節商戦中心・直営店舗複数／LED化・冷蔵ショーケース更新で年10〜15%削減事例多数。",
  },
  {
    size: "中規模製菓工場（年商30〜200億円、従業員100〜350名）",
    profile: "ビスケット・チョコレート・和菓子の中堅メーカー／高圧 1,000〜2,500kW／年間 500〜2,500万 kWh",
    annualCost: "年間電気代 1.5〜7.5 億円",
    note: "オーブン・冷却ラインの連続稼働／固定3〜5年契約＋自家消費太陽光で年8〜15%削減事例。",
  },
  {
    size: "大規模菓子工場（年商300億円超、従業員500名以上）",
    profile: "ロッテ・明治・森永等の総合菓子メーカー基幹工場／特別高圧 3,000〜8,000kW／年間 3,000万〜1.5億 kWh",
    annualCost: "年間電気代 9〜45 億円",
    note: "1%の単価改善でも年900〜4,500万円のインパクト。長期固定（5〜10年）契約と需要家主導型PPA併用が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：地場洋菓子店の年間14%削減（Before/After）",
    before: "首都圏の洋菓子店A社（5店舗）の年商10億円事業（高圧 220kW、年間 150万 kWh、年間電気代 4,500万円）。市場連動プラン継続、冷蔵ショーケース旧型、LED未更新。",
    after: "新電力切替（固定3年）／全店LED化（投資 180万円）／冷蔵ショーケースのインバータ化＋扉開閉センサー導入／デマンドコントローラー導入。",
    result: "年間電気代 4,500万円 → 3,870万円（▲14%、▲630万円）／契約 kW 220→190／投資回収 1.0年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模チョコレート工場の年間16%削減",
    before: "関東のチョコレートメーカーB社の年商150億円工場（高圧 1,800kW、年間 1,800万 kWh、年間電気代 5.4億円）。市場連動プランで2022〜2023年に月最大2,000万円の追加負担を経験。クリスマス・バレンタイン時期に電力消費突出。",
    after: "固定5年プラン切替／自家消費太陽光 900kW 導入（屋根6,000 m²）／冷却凝固トンネルのインバータ化／オーブン排熱回収＋予熱ライン化／BEMS導入で需要見える化＋デマンド制御。",
    result: "年間電気代 5.4億円 → 4.54億円（▲16%、▲8,600万円）／契約 kW 1,800→1,580／投資回収 5.0年（補助金後 3.4年）",
  },
  {
    title: "事例3：大規模菓子工場の年間1.5億円削減",
    before: "国内大手菓子メーカーC社の基幹工場（特別高圧 4,500kW、年間 4,200万 kWh、年間電気代 12.6億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2.5 MW＋蓄電池 3 MWh／オーブン排熱回収＋コージェネ 1.5MW／需要家主導型PPA（オフサイト風力3MW）／DR（デマンドレスポンス）契約締結。",
    result: "年間電気代 12.6億円 → 11.1億円（▲12%、▲1.5億円）／契約 kW 4,500→4,050／投資回収 6.5年（補助金後 4.8年）",
  },
];

const demandManagement = [
  {
    label: "季節商戦の事前生産・冷蔵備蓄",
    detail:
      "クリスマス・バレンタイン・年末年始の前1〜2ヶ月から生産前倒し＋冷蔵備蓄。季節ピーク電力消費を平準化することで、年間ピークデマンド▲15〜25%。冷蔵倉庫の運用コストが増えるが総合的にメリット。",
  },
  {
    label: "オーブンのバッチタイミング分散",
    detail:
      "複数オーブンを運用する場合、起動・焼成タイミングを30分〜2時間ずらすことでデマンドピークを抑制。1工場の同時最大負荷を10〜18%削減した事例。",
  },
  {
    label: "冷蔵ショーケースの店舗別管理",
    detail:
      "直営店舗・百貨店内売場の冷蔵ショーケースの一括管理・遠隔監視で電力▲10〜15%。閉店後の温度緩和運転、扉開閉センサー導入、深夜の自動デフロスト最適化等が効果的。",
  },
  {
    label: "コンプレッサー・冷却設備の負荷追従",
    detail:
      "包装エア・冷却設備のインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率オーブン・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "菓子業向けで採択率が高い主力補助金。冷蔵ショーケース・オーブン更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。季節ピーク需要と太陽光発電の同期も検討可能。",
  },
  {
    name: "農林水産省 食品産業向け省エネ設備導入支援",
    target: "オーブン排熱回収・冷却設備高効率化・包装機更新",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "菓子業特有の補助制度。中小製菓事業者での採択実績多数。",
  },
  {
    name: "中小企業庁 ものづくり補助金",
    target: "新製品開発・生産プロセス改善のための設備投資",
    rate: "1/2〜2/3、上限1,000万〜3,000万円",
    note: "中小菓子業者の生産設備更新で活用可能。電気代削減と生産性向上を同時実現。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "ガスオーブン→電気オーブン転換、CO₂削減投資",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めたオーブン電化や排熱回収で大型補助の対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "季節商戦月（クリスマス・バレンタイン・お盆・お彼岸・年末年始）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "製菓オーブン・冷却設備・冷蔵ショーケースの電力プロファイルを把握しているか",
  "直営店舗の冷蔵ショーケース一括管理・遠隔監視を実施しているか",
  "屋根面積を活用した自家消費太陽光（500kW〜2MW）導入の試算を実施したか",
  "オーブン排熱回収・予熱ライン化の経済合理性を評価したか",
  "デマンドコントローラー・冷蔵ショーケース扉開閉センサーの導入余地を確認したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・農水補助・ものづくり補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "菓子業の電気代水準はどれくらいですか？", answer: "売上高比4〜8%が業界平均で、洋菓子・チョコレート等は冷蔵ショーケース・冷却設備で電力依存度がやや高めです。中規模製菓工場（年商150億円級）で年1.5〜7.5億円、大規模菓子工場（年商300億円超）で年9〜45億円規模の電気代になります。" },
  { question: "季節商戦の電力ピーク対策は？", answer: "①前1〜2ヶ月からの事前生産＋冷蔵備蓄、②オーブンのバッチタイミング分散、③直営店舗のショーケース一括管理、④BEMSによる需要見える化＋デマンド制御、⑤自家消費太陽光（夏季稼働なら）、の5本柱が中心。年間ピークデマンド▲15〜25%可能。" },
  { question: "洋菓子店の冷蔵ショーケース電気代を削減するには？", answer: "①インバータ式冷蔵ショーケースへの更新（電力▲25〜35%）、②扉開閉センサー＋温度緩和運転、③閉店後の自動デフロスト最適化、④LED庫内灯への更新、⑤遠隔監視・一括管理システム導入、の5本柱が中心。投資回収はSII補助＋ものづくり補助活用で2〜3年が目安です。" },
  { question: "菓子業の固定プランと市場連動プランどちらが向きますか？", answer: "季節商戦時に大量電力を使う特性上、市場連動プランは高騰時のリスクが大きいです。冷蔵ショーケース24h稼働の洋菓子業は特に固定プランが向きます。和菓子業も季節商戦集中で同様です。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "オーブン排熱回収は投資回収できますか？", answer: "オーブン排熱（150〜250℃）を回収して原料予熱・温水製造に再利用する事業で、中規模工場で年300〜700万円の燃料・電力削減。投資回収はSII補助＋農水補助活用で2〜3年が目安です。コージェネ・バイナリー発電との組合せでさらに効果増。" },
  { question: "菓子業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、農林水産省食品産業向け補助、中小企業庁ものづくり補助金、脱炭素先行地域・GX補助の5本柱。中小菓子業者でもものづくり補助金（補助率1/2〜2/3）の活用で投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は菓子工場で投資回収できますか？", answer: "屋根面積3,000m²以上、24時間冷蔵稼働の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。" },
  { question: "和菓子業の小規模事業者でも電力契約見直しメリットはありますか？", answer: "高圧契約（100〜300kW）でも年間電気代900〜6,000万円規模になります。季節商戦時の電力ピークが大きいため、新電力切替＋蒸し器インバータ化＋LED化の組合せで年10〜15%削減（年90〜900万円）が現実的。投資回収はSII補助＋ものづくり補助活用で1.5〜3年が目安です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全日本菓子協会", url: "https://anka-kashi.com/" },
  { name: "日本洋菓子協会連合会", url: "https://www.jp-akc.com/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function ConfectioneryElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/confectionery-electricity-cost-review"
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
          <span className="text-slate-800">菓子業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            菓子業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            菓子業（製菓・洋菓子・和菓子）は、オーブン・冷却ライン・冷蔵ショーケース・蒸し器など多様な設備を組合せた電力消費構造を持ちます。クリスマス・バレンタイン・お盆等の季節商戦期に電力需要が集中する独特なピークパターンが特徴です。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>菓子業の電力使用プロファイル（オーブン／冷却／冷蔵ショーケース／蒸し餡）</li>
              <li>業界平均の電気代水準（売上高比4〜8%）と1トン製品あたり単価</li>
              <li>季節商戦期の電力ピーク対策と事前生産・冷蔵備蓄</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>オーブン排熱回収・冷蔵ショーケースインバータ化の費用対効果</li>
              <li>SII・PPA・農水補助・ものづくり補助の組合せ活用</li>
              <li>菓子業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              菓子業の電力使用特性 — オーブン・冷却・冷蔵ショーケース
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              菓子業の電力使用は『製菓オーブン／冷却凝固設備／冷蔵ショーケース／蒸し餡製造／包装検査』の5層で構成されます。製品種別（ビスケット／洋菓子／和菓子／チョコレート）で電力プロファイルが異なり、季節商戦期に需要が集中する独特な構造があります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              業界平均の電気代水準 — 売上高比4〜8%、製品1トン300〜1,200 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              菓子業の電気代水準は製品種別（ビスケット／洋菓子／和菓子／チョコレート）と冷蔵保管比率で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              ※ 出典: 全日本菓子協会・日本洋菓子協会連合会・経産省工業統計から整理。実値は製品種別・冷蔵保管比率で1.5〜2倍ぶれます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              菓子業の主要な電気代上昇要因 — 燃料費・賦課金・季節ピーク・店舗
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              菓子業の電気代上昇は、制度的要因（燃料費調整・賦課金・容量拠出金）と業界特有要因（季節商戦・直営店舗）が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模洋菓子店／中規模チョコレート／大規模菓子工場
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              菓子業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              業種横断のコスト構造比較は{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              季節商戦ピーク・直営店舗のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              菓子業は季節商戦期の事前生産と冷蔵備蓄、直営店舗のショーケース一括管理など、業種特有のデマンド管理戦略が効果的です。
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 季節商戦集中の上振れリスク
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              菓子業は季節商戦期に大量電力を使う特性上、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>季節商戦期に大量電力使用</li>
                  <li>冷蔵ショーケース24h稼働で停止が困難</li>
                  <li>菓子価格への即時転嫁が困難（消費者価格固定）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>クリスマス・年末商戦期の市場高騰でコスト直撃</li>
                  <li>冷蔵ショーケースを停止できないため逃げ場がない</li>
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
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。菓子業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模菓子工場（年1,800万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 6,282万円</li>
                  <li>2025年度（3.98円/kWh）：年 7,164万円（+882万円）</li>
                  <li>2026年度（4.18円/kWh）：年 7,524万円（+1,242万円）</li>
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
              菓子業特有の節電・省エネ施策 — オーブン排熱・冷蔵ショーケース・自家消費太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              菓子業の省エネは『オーブン排熱回収』『冷蔵ショーケースインバータ化・遠隔管理』『冷却ライン高効率化』『自家消費太陽光』『BEMS・デマンド制御』の5軸で組み立てます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">オーブン排熱回収＋予熱ライン化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>燃料・電力▲8〜15%（中規模で年300〜700万円削減）</li>
                  <li>SII＋農水補助活用で投資回収 2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">冷蔵ショーケースインバータ化＋遠隔管理</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力▲25〜35%（洋菓子店で年200〜500万円削減）</li>
                  <li>扉開閉センサー・自動デフロスト最適化</li>
                  <li>投資回収 SII＋ものづくり補助活用で 2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">冷却凝固トンネルのインバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>チョコレート・キャラメル冷却の電力▲20〜30%</li>
                  <li>製品品質安定化と省エネ両立</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（500kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>1 MWで年110〜130万kWh発電</li>
                  <li>自家消費率80%超、投資回収 7〜10年</li>
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
              補助金活用（業種別） — SII・PPA・農水補助・ものづくり補助・GX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              菓子業向けに活用しやすい補助金は5本柱。中小菓子業者でもものづくり補助金（補助率1/2〜2/3）の活用で投資回収を1〜2年短縮できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              菓子業に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              シミュレーターで自社菓子工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              菓子業は季節商戦ピーク・冷蔵ショーケース24h稼働・オーブン連続稼働の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>季節商戦月（クリスマス・バレンタイン等）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜16%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="confectionery-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/food-processing-electricity-cost-review", title: "食品加工業の電気料金見直し", description: "食品加工業一般の見直しポイント。" },
              { href: "/beverage-electricity-cost-review", title: "飲料業の電気料金見直し", description: "清涼飲料・酒類の電力対策。" },
              { href: "/seasoning-electricity-cost-review", title: "調味料業の電気料金見直し", description: "醤油・味噌・ソースの電力対策。" },
              { href: "/dairy-electricity-cost-review", title: "乳製品業の電気料金見直し", description: "牛乳殺菌・チーズ熟成の電力対策。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し", description: "食品工場一般の見直しポイント。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "冷蔵庫の温度管理電力対策。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "季節商戦法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "季節商戦法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "夏季ピーク需要との同期メリット。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "オーブン・冷蔵設備の主力補助金。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "季節ピーク削減効果。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社の菓子工場条件でリスクを確認する"
            description="オーブン・冷蔵ショーケース・冷却ラインの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。季節商戦時のコスト変動や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="菓子業の電力契約見直し、専門家に相談しませんか？"
            description="製菓オーブン・冷蔵ショーケース・季節商戦対策は固有の論点が多くなります。エネルギー情報センターは中立的立場で菓子業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
