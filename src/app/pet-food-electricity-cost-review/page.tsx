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
  "ペットフード業の電気料金見直しポイント｜ドライ押出機・ウェット殺菌・国内生産拡大の契約最適化";
const pageDescription =
  "ペットフード業（ドライ・ウェット・トリーツ）の電気料金見直しを解説。エクストルーダ押出機・乾燥機、ウェット殺菌冷却、国内生産拡大の動向、ペット人口増加と電力増、固定vs市場連動の判断、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ペットフード 電気料金 見直し",
    "ドライペットフード 押出機 電気代",
    "ウェットペットフード 殺菌 電力",
    "ペットフード 国内生産",
    "ペットフード 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/pet-food-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/pet-food-electricity-cost-review",
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
    label: "エクストルーダ押出機（ドライペットフード）",
    detail:
      "ドライペットフードの中核設備。エクストルーダ（押出成形機）は150〜180℃の高温で原料を瞬間調理・成形する。1機あたり200〜500kWの常時負荷で、ドライペットフード工場の電力使用量の30〜45%を占める。連続稼働が標準。",
  },
  {
    label: "乾燥機・冷却機（ドライペットフード）",
    detail:
      "エクストルーダ通過後の含水率15〜25%を5〜8%まで乾燥させる乾燥機（流動層乾燥機・帯式乾燥機）、その後の冷却機の電力負荷。工場全体の20〜30%を占める。乾燥温度80〜120℃の維持に大量電力。",
  },
  {
    label: "殺菌・冷却ライン（ウェットペットフード）",
    detail:
      "ウェットペットフード（缶詰・パウチ）の中核設備。レトルト殺菌機（110〜125℃で10〜60分）、その後の急冷ラインの電力負荷で工場全体の25〜40%を占める。",
  },
  {
    label: "原料保管・冷蔵庫（生鮮原料使用）",
    detail:
      "肉・魚等の生鮮原料を使用するペットフード工場では原料冷蔵庫（0〜4℃）の24h連続稼働が必須。工場全体の10〜20%を占める。",
  },
  {
    label: "包装・パッケージング設備",
    detail:
      "袋・缶・パウチへの充填機、ラベラー・キャッパー・段ボール詰めの自動ラインの動力。1ラインあたり50〜200kWの常時負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・ペットフード協会の統計によれば、ペットフード業の電気料金は売上高の4〜9%（ドライペットフード・ウェットで差異）。製造原価に占める比率は7〜15%。エクストルーダ・レトルト殺菌で電力依存度が中〜高位。",
  },
  {
    label: "1kg製品あたりの電力使用量",
    detail:
      "ドライペットフードで1kgあたり0.5〜1.0 kWh、ウェットペットフードで1kgあたり0.3〜0.7 kWh、トリーツ（おやつ）で1kgあたり0.6〜1.5 kWh、サプリ・ヘルスケアで1kgあたり1.0〜2.5 kWhが業界平均。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模ペットフードOEM工場（年商5〜30億円）で年間100〜500万 kWh、中規模ペットフード工場（年商50〜300億円）で年間1,000〜3,000万 kWh、大規模ペットフードメーカー（年商500億円超）で年間3,000万〜1.5億 kWh。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額のエクストルーダベースへの影響",
    detail:
      "エクストルーダ・乾燥機の連続稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月150万kWh）で月150万円の差、年間1,800万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間2,000万kWh使用の中規模工場で年8,000万円超の負担。",
  },
  {
    label: "ペット人口増加による生産拡大",
    detail:
      "国内ペット飼育数は2,000万頭規模（犬猫合計）で、コロナ後さらに増加。プレミアム化・国産化のトレンドで国内生産が拡大しており、新ライン増設による電力契約kWの大幅増が業界課題。",
  },
  {
    label: "輸入から国内生産へのシフト",
    detail:
      "為替円安・輸入価格高騰でペットフードの国内生産シフトが加速。新設工場・既存工場の生産拡大で電力需要が業界全体で増加傾向。新電力契約の競争入札メリットが拡大。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、ペットフード業のような連続稼働業種に影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模ペットフードOEM工場（年商5〜30億円、従業員15〜80名）",
    profile: "ペットフードOEM受託メーカー・地場メーカー／高圧 200〜500kW／年間 100〜500万 kWh",
    annualCost: "年間電気代 3,000万〜1.5億円",
    note: "ドライ・ウェット併存／LED化・空調更新で年10〜15%削減事例多数。",
  },
  {
    size: "中規模ペットフード工場（年商50〜300億円、従業員150〜400名）",
    profile: "中堅ペットフードメーカー・大手OEM工場／高圧 1,500〜3,000kW／年間 1,000〜3,000万 kWh",
    annualCost: "年間電気代 3.0〜9.0 億円",
    note: "エクストルーダ高効率化＋自家消費太陽光で年8〜15%削減事例。",
  },
  {
    size: "大規模ペットフードメーカー（年商500億円超、従業員500名以上）",
    profile: "ユニ・チャーム・マルカン・日本ペットフード等の総合ペットフードメーカー基幹工場／特別高圧 3,000〜8,000kW／年間 3,000万〜1.5億 kWh",
    annualCost: "年間電気代 9〜45 億円",
    note: "長期固定（5〜10年）契約と需要家主導型PPA併用が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模ペットフードOEM工場の年間14%削減（Before/After）",
    before: "関東のペットフードOEM工場A社（高圧 350kW、年間 250万 kWh、年間電気代 7,500万円）。市場連動プラン継続、エクストルーダ熱効率管理は手動、LED未更新。",
    after: "新電力切替（固定3年）／全照明LED化（投資 200万円）／エクストルーダの温度自動制御＋IoT管理／乾燥機のインバータ化／デマンドコントローラー導入。",
    result: "年間電気代 7,500万円 → 6,450万円（▲14%、▲1,050万円）／契約 kW 350→310／投資回収 1.5年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模ペットフード工場の年間17%削減",
    before: "東海のペットフードメーカーB社（高圧 2,200kW、年間 2,500万 kWh、年間電気代 7.5億円）。市場連動プランで2022〜2023年に月最大2,800万円の追加負担を経験。プレミアム化対応で生産拡大中。",
    after: "固定5年プラン切替／エクストルーダ排熱回収＋原料予熱化（投資3,000万円、SII＋農水補助1/2活用）／自家消費太陽光 1MW 導入（屋根7,000 m²）／BEMS＋AIデマンド予測／レトルト殺菌の高効率化。",
    result: "年間電気代 7.5億円 → 6.23億円（▲17%、▲1.27億円）／契約 kW 2,200→1,900／投資回収 補助金後 3.0年",
  },
  {
    title: "事例3：大規模ペットフードメーカーの年間1.4億円削減",
    before: "国内大手ペットフードメーカーC社の基幹工場（特別高圧 4,500kW、年間 4,500万 kWh、年間電気代 13.5億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2.5 MW＋蓄電池 3 MWh／コージェネ 1.5MW＋排熱回収／需要家主導型PPA（オフサイト風力3MW）／DR契約締結／エクストルーダ・乾燥機の高効率化。",
    result: "年間電気代 13.5億円 → 12.1億円（▲10%、▲1.4億円）／契約 kW 4,500→4,050／投資回収 6.5年（補助金後 4.8年）",
  },
];

const demandManagement = [
  {
    label: "エクストルーダ・レトルト殺菌のバッチ分散",
    detail:
      "複数のエクストルーダ・レトルト殺菌機を運用する場合、起動・運転タイミングを30分〜2時間ずらすことでデマンドピークを抑制。1工場の同時最大負荷を10〜18%削減した事例。",
  },
  {
    label: "乾燥機の運転スケジュール最適化",
    detail:
      "乾燥機の運転を電力単価安価な深夜〜早朝に集中させる運用設計。3交代制のペットフード工場では昼夜のシフト調整で5〜10%のピーク削減が可能。",
  },
  {
    label: "原料冷蔵庫の事前冷却・蓄熱運用",
    detail:
      "原料冷蔵庫を夜間に予冷し、昼間の温度上昇を吸収することで昼間の冷却負荷を▲15〜25%。投資はBEMS・温度センサー追加（200〜500万円）のみで回収1〜2年。",
  },
  {
    label: "コンプレッサー・送風機の負荷追従",
    detail:
      "包装エア・乾燥機送風のインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "ペットフード業向けで採択率が高い主力補助金。エクストルーダ・乾燥機の高効率化で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。連続稼働で自家消費率80%超になりやすい。",
  },
  {
    name: "農林水産省 食品産業向け省エネ設備導入支援",
    target: "エクストルーダ・乾燥機・レトルト殺菌の高効率化",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "ペットフード業特有の補助制度。国内生産シフトと連動した支援。",
  },
  {
    name: "中小企業庁 ものづくり補助金",
    target: "新製品開発・生産プロセス改善のための設備投資",
    rate: "1/2〜2/3、上限1,000万〜3,000万円",
    note: "中小ペットフードOEM工場の生産設備更新で活用可能。電気代削減と生産能力向上を同時実現。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "ガスボイラー→電気ヒートポンプ転換、CO₂削減投資",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた電化や排熱発電で大型補助の対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と他季の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "エクストルーダ・乾燥機・レトルト殺菌の電力プロファイルを把握しているか",
  "国内生産拡大による電力増を契約kWに反映しているか",
  "屋根面積を活用した自家消費太陽光（500kW〜2MW）導入の試算を実施したか",
  "エクストルーダ排熱回収・原料予熱化の経済合理性を評価したか",
  "デマンドコントローラー・乾燥機運転シフトの組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・農水補助・ものづくり補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "ペットフード業の電気代水準はどれくらいですか？", answer: "売上高比4〜9%、製造原価比7〜15%が業界平均。中規模ペットフード工場（年商200億円級）で年3〜9億円、大規模ペットフードメーカー（年商500億円超）で年9〜45億円規模の電気代になります。" },
  { question: "ドライペットフードのエクストルーダ電力対策は？", answer: "①エクストルーダ温度自動制御＋IoT管理（電力▲10〜20%）、②排熱回収＋原料予熱化、③乾燥機のインバータ化、④コンプレッサーのインバータ化、⑤BEMSによる需要見える化、の5本柱が中心。SII＋農水補助＋ものづくり補助の組合せで投資回収2〜3年が目安です。" },
  { question: "ウェットペットフード（レトルト殺菌）の電気代対策は？", answer: "①レトルト殺菌温度の最適化、②高効率レトルト殺菌機への更新、③急冷ラインのインバータ化、④排熱回収＋原料予熱化、⑤BEMS・デマンド制御、の5本柱が中心。SII＋農水補助＋GX補助の組合せで投資回収2〜3年が目安です。" },
  { question: "ペットフード業の固定プランと市場連動プランどちらが向きますか？", answer: "エクストルーダ・原料冷蔵庫の連続稼働でベースロードが大きく、停止できないため、固定プランが向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "国内生産拡大で電力契約はどう変わりますか？", answer: "新ライン増設で契約kWが大幅に増加（既存契約の1.5〜2倍に達するケースも）。電力契約見直しのタイミングを生産拡大計画と合わせることが重要。新ライン稼働前に新電力との競争入札を実施し、長期固定契約を獲得することで投資回収を加速できます。" },
  { question: "エクストルーダ排熱回収は投資回収できますか？", answer: "エクストルーダ排熱（80〜150℃）を回収して原料予熱・乾燥機予熱に再利用する事業で、中規模工場で年500〜1,000万円の電力・燃料削減。投資回収はSII＋農水補助活用で2〜3年が目安です。CO2削減も同時達成。" },
  { question: "ペットフード業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、農林水産省食品産業向け補助、中小企業庁ものづくり補助金、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光はペットフード工場で投資回収できますか？", answer: "屋根面積3,000m²以上、連続稼働の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 ペットフード協会", url: "https://petfood.or.jp/" },
  { name: "農林水産省 畜産局", url: "https://www.maff.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function PetFoodElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/pet-food-electricity-cost-review"
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
          <span className="text-slate-800">ペットフード業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ペットフード業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ペットフード業（ドライ・ウェット・トリーツ）は、エクストルーダ押出機の連続稼働、乾燥機・レトルト殺菌の高負荷、原料冷蔵庫24h稼働など多面的な電力負荷を持ちます。ペット人口増加と国内生産シフトで業界全体の電力需要が拡大中です。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>ペットフード業の電力使用プロファイル（エクストルーダ／乾燥／殺菌／原料冷蔵）</li>
              <li>業界平均の電気代水準（売上高比4〜9%）と1kg製品あたり単価</li>
              <li>ペット人口増加と国内生産拡大の電力影響</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>エクストルーダ排熱回収・原料予熱化の費用対効果</li>
              <li>SII・PPA・農水補助・ものづくり補助・GX補助の組合せ活用</li>
              <li>ペットフード業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ペットフード業の電力使用特性 — エクストルーダ・乾燥・殺菌
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ペットフード業の電力使用は『エクストルーダ／乾燥機／レトルト殺菌／原料冷蔵／包装』の5層で構成されます。製品種別（ドライ／ウェット）で電力プロファイルが異なり、ドライはエクストルーダ・乾燥機、ウェットはレトルト殺菌・冷却が中核です。
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
              業界平均の電気代水準 — 売上高比4〜9%、製品1kg 0.3〜2.5 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ペットフード業の電気代水準は製品種別（ドライ／ウェット／トリーツ／サプリ）と生鮮原料使用比率で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 一般社団法人ペットフード協会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ペットフード業の主要な電気代上昇要因 — ペット人口増・国内シフト・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ペットフード業の電気代上昇は、制度的要因（燃料費調整・賦課金・容量拠出金）と業界特有要因（ペット人口増・国内生産シフト）が複合的に重なります。
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
              規模別の削減事例3件 — 小規模OEM／中規模ペットフード／大規模メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ペットフード業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/food-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品加工業の電気料金見直し</Link>
              、{" "}
              <Link href="/meat-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">精肉加工業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              エクストルーダ・乾燥機のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ペットフード業はエクストルーダ・レトルト殺菌のバッチ分散、乾燥機の運転スケジュール最適化、原料冷蔵庫の事前冷却など、業種特有のデマンド管理戦略が効果的です。
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
              燃料費調整・市場連動プランの影響 — エクストルーダ連続稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ペットフード業はエクストルーダ・原料冷蔵庫の連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>エクストルーダ・原料冷蔵庫の連続稼働が必須</li>
                  <li>国内生産拡大で電力需要が長期増加トレンド</li>
                  <li>ペットフード価格への即時転嫁が困難</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季の市場高値期に連続稼働ペットフード生産</li>
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
              再エネ賦課金の影響 — 連続稼働業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。ペットフード業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模ペットフード工場（年2,500万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 8,725万円</li>
                  <li>2025年度（3.98円/kWh）：年 9,950万円（+1,225万円）</li>
                  <li>2026年度（4.18円/kWh）：年 1.045億円（+1,725万円）</li>
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
              ペットフード業特有の節電・省エネ施策 — エクストルーダ排熱・乾燥機・PPA
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ペットフード業の省エネは『エクストルーダ排熱回収＋原料予熱化』『乾燥機インバータ化』『レトルト殺菌高効率化』『自家消費太陽光』『BEMS・AIデマンド予測』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">エクストルーダ排熱回収＋原料予熱化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力・燃料▲10〜18%（中規模で年500〜1,000万円削減）</li>
                  <li>SII＋農水補助で投資回収 2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">乾燥機のインバータ化＋温度自動制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力▲15〜25%（中規模で年400〜800万円削減）</li>
                  <li>SII＋ものづくり補助で投資回収 2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">レトルト殺菌高効率化（ウェット）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蒸気使用量・電力消費▲20〜30%</li>
                  <li>GX補助で大型補助の対象</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（500kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>連続稼働で自家消費率80%超</li>
                  <li>投資回収 7〜10年（補助金後 5〜7年）</li>
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
              ペットフード業向けに活用しやすい補助金は5本柱。中小ペットフードOEM工場でもものづくり補助金（補助率1/2〜2/3）の活用で投資回収を1〜2年短縮できます。
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
              ペットフード業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社ペットフード工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ペットフード業はエクストルーダ連続稼働・国内生産拡大・原料冷蔵24h稼働の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>国内生産拡大による電力増を試算する</li>
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
            <GlossaryLinks currentSlug="pet-food-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/food-processing-electricity-cost-review", title: "食品加工業の電気料金見直し", description: "食品加工業一般の見直しポイント。" },
              { href: "/meat-processing-electricity-cost-review", title: "精肉加工業の電気料金見直し", description: "ハム・ソーセージの電力対策。" },
              { href: "/seafood-processing-electricity-cost-review", title: "水産加工業の電気料金見直し", description: "鮮魚冷蔵・燻製加熱の電力対策。" },
              { href: "/dairy-electricity-cost-review", title: "乳製品業の電気料金見直し", description: "牛乳殺菌・チーズ熟成の電力対策。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し", description: "食品工場一般の見直しポイント。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "原料冷蔵庫の温度管理電力対策。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "連続稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "連続稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "連続稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "エクストルーダ・乾燥機の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "エクストルーダ連続稼働事業者のリスク。" },
            ]}
          />

          <ContentCta
            heading="自社のペットフード工場条件でリスクを確認する"
            description="エクストルーダ・乾燥機・レトルト殺菌の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。国内生産拡大によるシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="ペットフード業の電力契約見直し、専門家に相談しませんか？"
            description="ドライ・ウェット・国内生産拡大対応の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でペットフード業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
