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
  "半導体業の電気料金見直しポイント｜クリーンルーム・露光装置・超純水の契約最適化";
const pageDescription =
  "半導体業（ロジック・メモリ・パワーデバイス・OSAT）の電気料金見直しを解説。クリーンルーム24h連続稼働、製造装置の高負荷、超純水製造、電力品質要求（UPS・自家発電）、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "半導体業 電気料金 見直し",
    "クリーンルーム 電気代",
    "半導体工場 電力契約",
    "露光装置 電気代",
    "超純水 電力コスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/semiconductor-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/semiconductor-electricity-cost-review",
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
    label: "クリーンルーム空調（24h連続・電力依存度極大）",
    detail:
      "半導体業の電力消費の中核。クラス1〜100のクリーンルーム空調（HEPA/ULPAフィルタ＋ファンフィルタユニット FFU）が24時間×365日連続稼働。床面積1m²あたり1,000〜2,000Wの常時負荷で、最先端ロジック工場では電力消費の40〜55%を占める。",
  },
  {
    label: "製造装置（露光・エッチング・成膜・洗浄）",
    detail:
      "露光装置（EUV・KrF・ArF）、ドライエッチング装置、CVD・PVD成膜装置、化学的機械研磨（CMP）装置、洗浄装置などのプロセス装置。1台あたり数百〜数千kWの常時電力。最先端ロジック工場で装置電力が工場全体の30〜45%を占める。",
  },
  {
    label: "超純水製造（UPW プラント）",
    detail:
      "半導体製造に必須の超純水（Ultra Pure Water）製造プラント。逆浸透膜（RO）、イオン交換、UV殺菌の連続稼働。300mmウエハーファブ1工場で月100,000〜300,000m³の超純水を製造し、500〜2,000kWの常時電力負荷。",
  },
  {
    label: "電力品質要求（UPS・無停電電源・自家発電）",
    detail:
      "瞬時電圧低下（瞬停）で数億〜数十億円の損失が発生するため、半導体工場は最高水準の電力品質要求。大規模UPS（10〜100MW）、無停電電源装置、自家発電バックアップが標準装備。常時稼働で電力消費の5〜10%を占める。",
  },
  {
    label: "ガス・ケミカル供給・廃ガス処理",
    detail:
      "プロセスガス（H2、N2、O2、Ar）の高圧供給、特殊ガス（シラン、アルシン）の精製、ケミカル供給、廃ガス処理装置（スクラバー、燃焼塔）が24h稼働。1工場で500〜1,500kWの常時負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本半導体協会・電子情報技術産業協会（JEITA）の統計から、半導体業の電気料金は売上高比3〜10%（最先端ロジック・メモリで7〜15%）。中規模半導体工場で年30〜100億円、大手最先端ファブで年200〜1,000億円規模の電気代に達する。",
  },
  {
    label: "ウエハー1枚あたりの電力使用量",
    detail:
      "300mmウエハー1枚の製造で250〜450kWh（最先端ロジックで500〜800kWh）。ナノレベルのプロセス微細化と多層化で年5〜8%の電力増加トレンド。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模ファブ・パッケージング工場（300〜1,000名）で年間5,000万〜2億kWh、中規模半導体工場（1,000〜3,000名）で年間2〜10億kWh、大手最先端ファブ（3,000名超）で年間10〜50億kWh。特別高圧契約＋大規模自家発電が標準。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額のクリーンルーム連続稼働への影響",
    detail:
      "半導体業は24時間連続稼働で月間使用量が桁違いに大きく、燃料費調整額1円/kWhの変動でも中規模工場（年5億kWh）で年5億円の差。大手最先端ファブでは年数十億円のインパクト。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間5億kWh使用の中規模半導体工場で年20.9億円の負担、5年で104.5億円。減免制度（年間1,000万kWh以上等）対象は必須。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金はkWhベースで上乗せされ、半導体業のような大量電力消費業種に大きな影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
  {
    label: "プロセス微細化に伴う電力使用量増",
    detail:
      "7nm→5nm→3nm→2nmと進むプロセス微細化で、ウエハー1枚あたりの電力使用量が世代ごとに1.2〜1.5倍増加トレンド。EUV露光装置1台で数千kWの常時電力という極端な状況に。",
  },
  {
    label: "顧客（IT・自動車）のサプライチェーンCN要求",
    detail:
      "AppleやTOYOTAなど大手顧客のサプライチェーン全体CN目標達成のため、半導体メーカー側に再エネ100%調達が要求。TSMC・サムスン等は2030年再エネ100%目標を発表済み。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模ファブ・OSAT・パッケージング工場（従業員300〜1,000名）",
    profile: "パワーデバイス・アナログ・パッケージング／特別高圧 5,000〜20,000kW／年間 5,000万〜2億kWh",
    annualCost: "年間電気代 15〜60 億円",
    note: "新電力切替・固定3年契約・クリーンルーム空調最適化・LED化で年7〜10%削減事例。再エネ賦課金減免制度の申請必須。",
  },
  {
    size: "中規模半導体工場（従業員1,000〜3,000名）",
    profile: "ロジック・メモリ国内中堅メーカー／特別高圧 30,000〜100,000kW／年間 2〜10億kWh",
    annualCost: "年間電気代 60〜300 億円",
    note: "固定5年契約＋自家消費太陽光（20〜50MW）＋クリーンルーム空調最適化＋超純水プラント効率化＋廃熱回収で年8〜12%削減事例。",
  },
  {
    size: "大手最先端ファブ（従業員3,000名超）",
    profile: "TSMC熊本級・最先端メモリ工場／特別高圧 100,000〜500,000kW／年間 10〜50億kWh",
    annualCost: "年間電気代 300〜1,500 億円",
    note: "1%の単価改善でも年3〜15億円のインパクト。長期固定（15〜20年）契約＋大規模PPA（100〜500MW）＋自家発電拡張＋顧客向け再エネ100%対応が標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅パワーデバイス工場の年間9%削減（Before/After）",
    before: "九州地区のパワーデバイスメーカーA社の主力工場（特別高圧 12,000kW、年間 1億kWh、年間電気代 30億円）。市場連動プラン継続、クリーンルーム空調インバータ最適化なし、超純水プラント効率化なし、LED未更新。",
    after: "新電力切替（固定3年）／クリーンルーム空調VAV＋インバータ化（投資 3億円）／超純水プラント効率化／製造装置スケジュール最適化／LED化／再エネ賦課金減免申請。",
    result: "年間電気代 30億円 → 27.3億円（▲9%、▲2.7億円）／契約 kW 12,000→11,000／投資回収 2年（SII補助 1/2 活用＋再エネ賦課金減免）",
  },
  {
    title: "事例2：中規模メモリ工場の年間11%削減",
    before: "東日本のメモリメーカーB社の基幹工場（特別高圧 50,000kW、年間 4億kWh、年間電気代 120億円）。市場連動プランで2022〜2023年に月最大10億円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 30MW（敷地内）／クリーンルーム空調＋FFU最適化／超純水プラント効率化／DR契約／需要家主導型PPA補助金活用／グリーン電力25%調達／再エネ賦課金減免申請。",
    result: "年間電気代 120億円 → 107億円（▲10.8%、▲13億円）／契約 kW 50,000→44,000／投資回収 7年（補助金後 5年）",
  },
  {
    title: "事例3：大手最先端ファブ年間60億円削減",
    before: "大手最先端ロジックファブC社（特別高圧 200,000kW、年間 18億kWh、年間電気代 540億円）。長期固定契約継続もEUV露光装置増設で電力使用量が3年で30%増加。顧客（Apple級）のCN要求も対応中。",
    after: "電力契約の15年長期固定締結／オフサイトPPA 200MW（再エネ100%対応）／クリーンルーム空調AI最適化／超純水プラント超効率化／自家発電拡張（コージェネ50MW）／GX補助・CCUS実証／顧客向け再エネ100%対応の追加証書購入。",
    result: "年間電気代 540億円 → 480億円（▲11.1%、▲60億円）／契約 kW 200,000→180,000／投資回収 10年（補助金後 7年）／CO₂削減 約120,000 t/年",
  },
];

const demandManagement = [
  {
    label: "クリーンルーム空調・FFUのVAV制御",
    detail:
      "クラス・占有率に応じたVAV（可変風量）制御、FFUの個別制御による電力▲15〜25%削減。中規模半導体工場で年数億円規模の削減効果。SII補助1/2活用で投資回収2〜3年。",
  },
  {
    label: "超純水プラントの効率化",
    detail:
      "逆浸透膜（RO）の高効率化、エネルギー回収装置（ERD）の導入、温水利用最適化で電力▲20〜30%削減。中規模半導体工場で年1〜3億円規模の削減事例。",
  },
  {
    label: "製造装置のスケジュール最適化",
    detail:
      "メンテナンス時間帯の集約、複数装置の起動タイミング分散でデマンドピーク抑制。AI予測制御と組合せで契約電力5〜10%削減事例。",
  },
  {
    label: "計画停止と需給逼迫期DR連動",
    detail:
      "夏冬の電力需給逼迫期に計画的なメンテナンス停止を行うDRプログラム参加。電力会社からインセンティブ収入も得られ、年数億〜十数億円の収益化が可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "クリーンルーム空調・FFU・超純水プラント・廃熱回収・LED",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "半導体業のような大量電力消費業種で採択率が高い主力補助金。クリーンルーム空調最適化で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場敷地が広大、24h稼働の半導体業と相性極良好。30〜200MW級も対象。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "コージェネ・CCUS・電化・グリーン水素",
    rate: "1/2、上限数十億円",
    note: "CN対応のための大型補助。半導体業のGX投資の主力財源。",
  },
  {
    name: "再エネ賦課金減免制度",
    target: "年間1,000万kWh以上の電気多消費事業者",
    rate: "減免率による（最大80%）",
    note: "半導体業のほぼ全社が対象。年数億〜数百億円の負担軽減効果。原単位改善計画提出が必要。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "特別高圧契約で長期固定（5〜20年）への切替の検討余地があるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "クリーンルーム空調・FFUのVAV制御最適化を評価したか",
  "工場敷地を活用した自家消費太陽光（20〜200MW）導入の試算を実施したか",
  "超純水プラントの効率化・エネルギー回収装置導入を評価したか",
  "製造装置のスケジュール最適化・AI予測制御を検討したか",
  "電力品質要求（UPS・自家発電）の冗長性最適化を実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象に該当し、申請を実施したか",
  "顧客（IT・自動車）のサプライチェーンCN要求に対応するグリーン電力調達計画があるか",
  "GX補助・需要家主導型PPA補助金の組合せ申請を検討したか",
];

const faqItems = [
  { question: "半導体業の電気代水準はどれくらいですか？", answer: "売上高比3〜10%（最先端ロジック・メモリで7〜15%）が業界平均です。中規模半導体工場で年60〜300億円、大手最先端ファブで年300〜1,500億円規模の電気代になります。" },
  { question: "なぜ半導体工場はこんなに電力多消費なのですか？", answer: "クリーンルーム空調（24h連続）、製造装置（露光・エッチング・成膜）、超純水製造、電力品質要求の4つが組み合わさるためです。ウエハー1枚あたり250〜800kWh（最先端では更に増加）が必要で、これは家庭1ヶ月分の電力に相当します。" },
  { question: "プロセス微細化で電気代はどれくらい増えますか？", answer: "7nm→5nm→3nm→2nmと進むプロセス微細化で、ウエハー1枚あたりの電力使用量が世代ごとに1.2〜1.5倍増加トレンド。最先端ロジックファブで年間電力使用量が3年で30%増加した事例多数。" },
  { question: "半導体業に向く電力プランは固定ですか、市場連動ですか？", answer: "24時間連続稼働・電力品質要求極大の半導体業は固定プラン（15〜20年長期）推奨。市場高騰時の影響額が桁違いに大きく、瞬停による生産損失リスクの観点でも市場連動は不可です。" },
  { question: "クリーンルーム空調最適化でどれだけ電気代を下げられますか？", answer: "VAV制御＋FFU個別制御＋温度設定最適化で電力▲15〜25%削減事例多数。中規模半導体工場で年3〜10億円規模の削減、SII補助1/2活用で投資回収2〜3年。" },
  { question: "自家消費型太陽光は半導体工場で投資回収できますか？", answer: "工場敷地が広大、24h連続稼働の半導体業は業種別で最上位の相性。30MWで年3,300〜3,900万kWh発電、年30〜40億円削減、投資回収6〜8年（補助金後4〜6年）。100MW級でも検討余地。" },
  { question: "顧客（Apple・TOYOTA）のCN要求にどう対応すべきですか？", answer: "オフサイトPPA契約（再エネ100%対応）と非化石証書購入の組合せが標準。TSMC・サムスンは2030年再エネ100%目標を発表済みで、日本国内メーカーも対応が急務。長期PPA契約で実現可能です。" },
  { question: "半導体業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（クリーンルーム空調・超純水プラント）、需要家主導型PPA補助金（大規模太陽光）、脱炭素先行地域・GX補助（CCUS）、再エネ賦課金減免の4本柱です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本半導体製造装置協会（SEAJ）", url: "https://www.seaj.or.jp/" },
  { name: "電子情報技術産業協会（JEITA）", url: "https://www.jeita.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function SemiconductorElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/semiconductor-electricity-cost-review"
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
          <span className="text-slate-800">半導体業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            半導体業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            半導体業（ロジック・メモリ・パワーデバイス・OSAT）は、クリーンルーム空調24時間連続稼働、製造装置の極端な電力消費、超純水製造、電力品質要求という典型的エネルギー多消費業種です。プロセス微細化（7nm→5nm→3nm→2nm）に伴う電力使用量増加、顧客（Apple・TOYOTA級）のサプライチェーンCN要求、TSMC・サムスンの再エネ100%目標といった業界構造変化に直面しています。本ページでは半導体業特有の電力負荷特性、業界平均水準、規模別事例、クリーンルーム最適化、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>半導体業の電力使用プロファイル（クリーンルーム／製造装置／超純水／電力品質）</li>
              <li>業界平均の電気代水準（売上高比3〜15%）と単位ウエハー単価</li>
              <li>燃料費調整額・再エネ賦課金・容量拠出金・プロセス微細化の影響</li>
              <li>規模別（パワーデバイス／中堅メモリ／大手最先端ファブ）の電気代と削減事例3件（Before/After）</li>
              <li>クリーンルーム空調VAV制御・超純水プラント効率化の費用対効果</li>
              <li>SII・需要家主導型PPA・GX補助・再エネ賦課金減免の組合せ活用</li>
              <li>半導体業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              半導体業の電力使用特性 — クリーンルーム・製造装置・超純水・電力品質
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体業の電力使用は『クリーンルーム空調（基幹）／製造装置（露光・エッチング・成膜・洗浄）／超純水プラント／電力品質設備（UPS・自家発電）／ガス・廃ガス処理』の5層構造です。クリーンルーム空調が電力消費の40〜55%を占めるため、空調最適化が契約見直しの起点となります。
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
              業界平均の電気代水準 — 売上高比3〜15%、最先端で更に高い
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体業の電気代水準は事業形態（ロジック・メモリ・パワーデバイス・OSAT）とプロセス世代で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本半導体製造装置協会・電子情報技術産業協会・経産省工業統計から整理。実値はプロセス世代・装置稼働率で2〜3倍ぶれます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              半導体業の主要な電気代上昇要因 — 燃料費・賦課金・微細化・CN要求
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体業の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。プロセス微細化、顧客サプライチェーンCN要求は業界固有の構造要因です。
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
              、{" "}
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の事業影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — パワーデバイス／中堅メモリ／大手最先端ファブ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              <Link href="/semiconductor-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">半導体施設の関連事例</Link>
              、{" "}
              <Link href="/electronics-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電子機器業の電気料金見直し</Link>
              、{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              プロセス微細化と顧客サプライチェーンCN要求への対応
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体業のエネルギー戦略の中核はプロセス微細化に伴う電力使用量増加と、顧客（Apple・TOYOTA級）のサプライチェーンCN要求対応の両立。TSMC・サムスンは2030年再エネ100%目標を発表済みで、日本国内メーカーも同水準の対応が急務です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">プロセス微細化の電力影響</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>EUV露光装置1台で数千kWの常時電力</li>
                  <li>多層化（メモリ）で年5〜8%電力増</li>
                  <li>ウエハー1枚あたり世代ごとに1.2〜1.5倍</li>
                  <li>長期電力供給確保が経営戦略の中核</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">顧客CN対応の段階導入</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>自家消費太陽光30〜100MW</li>
                  <li>オフサイトPPA100〜500MW</li>
                  <li>非化石証書購入で部分対応</li>
                  <li>2030年再エネ100%目標が標準</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              連続稼働工場の関連論点は{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              半導体業のデマンド管理 — 空調VAV・超純水・装置スケジュール
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体業のデマンド管理は『クリーンルーム空調・FFUのVAV制御』『超純水プラント効率化』『製造装置スケジュール最適化』『DR連動』の4論点を組合せて最適化します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              燃料費調整・市場連動プランの影響 — 最先端ファブの極端な感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              最先端半導体ファブは24時間連続稼働かつ電力品質要求極大のため、市場価格高騰局面で経営インパクトが直撃します。15〜20年級の超長期固定契約が標準的に検討される業種です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プラン（長期）が向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24時間連続稼働・電力品質要求極大</li>
                  <li>瞬停による生産損失リスクが甚大</li>
                  <li>プロセス微細化で電力使用量増加トレンド</li>
                  <li>顧客（Apple・TOYOTA）のCN要求と整合</li>
                  <li>長期投資回収計画の予算精度確保</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが甚大</li>
                  <li>顧客のCN要求と矛盾（非化石証書購入不可）</li>
                  <li>競合（TSMC・サムスン）との価格競争で原価競争力低下</li>
                  <li>JEPX 80円/kWh級高騰時に年数十億円の追加負担</li>
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
              業種特有の節電・省エネ施策 — 空調VAV・超純水効率化・大規模太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体業向けの省エネ施策は『クリーンルーム空調VAV制御』『超純水プラント効率化』『廃熱回収システム』『大規模太陽光（30〜200MW）』が4本柱。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">クリーンルーム空調VAV</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>VAV制御＋FFU個別制御</li>
                  <li>電力▲15〜25%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">超純水プラント効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>RO膜高効率化＋ERD導入</li>
                  <li>電力▲20〜30%</li>
                  <li>SII補助1/2、投資回収3〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">廃熱回収システム</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>クリーンルーム・装置の廃熱再利用</li>
                  <li>蒸気使用量▲30〜50%</li>
                  <li>SII補助1/2、投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">大規模太陽光（30〜200MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>30MWで年3,300〜3,900万kWh発電</li>
                  <li>24h稼働で自家消費率95%超</li>
                  <li>投資回収 6〜8年（補助金後 4〜6年）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・GX補助・再エネ賦課金減免
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜5年短縮できます。再エネ賦課金減免制度は年数億〜数百億円規模の負担軽減効果。
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
              、{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・自家消費太陽光の補助金</Link>
              、{" "}
              <Link href="/renewable-energy-surcharge-reduction-system" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金減免制度</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              半導体業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社半導体工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体業はクリーンルーム連続稼働・プロセス微細化・顧客CN要求・国際競争の4重課題に直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>プロセス微細化に伴う電力需要増シナリオを比較する</li>
              <li>事例で示した9〜11%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="semiconductor-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/semiconductor-facility-electricity-cost-review", title: "半導体施設の電気料金見直し", description: "半導体関連施設の関連事例。" },
              { href: "/electronics-electricity-cost-review", title: "電子機器業の電気料金見直し", description: "電子機器製造の類似事例。" },
              { href: "/precision-instruments-electricity-cost-review", title: "精密機器業の電気料金見直し", description: "クリーン環境製造の類似事例。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "電力品質要求業種の関連事例。" },
              { href: "/pharmaceutical-electricity-cost-review", title: "製薬業の電気料金見直し", description: "クリーンルーム業種の類似事例。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働ベースロード業種の関連事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "電力品質要求極大業種が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "敷地大の連続稼働工場の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい工場の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "クリーンルーム空調・超純水で活用できる主力補助金。" },
              { href: "/renewable-energy-surcharge-reduction-system", title: "再エネ賦課金減免制度", description: "電気多消費業種の主力負担軽減制度。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大の半導体業に直結するリスク。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社半導体工場条件でリスクを確認する"
            description="クリーンルーム・製造装置・超純水・電力品質設備の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。プロセス微細化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
