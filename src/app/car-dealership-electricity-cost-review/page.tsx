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
  "自動車ディーラーの電気料金見直しポイント｜ショールーム照明・整備工場・EV試乗充電器の契約最適化";
const pageDescription =
  "自動車ディーラーの電気料金見直しを解説。ショールーム演出照明・空調、整備工場、EV試乗車充電器、規模別事例、固定vs市場連動、屋根太陽光、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自動車ディーラー 電気料金 見直し",
    "ショールーム 電気代",
    "整備工場 EV充電器 電力",
    "ディーラー 電気代",
    "ディーラー 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/car-dealership-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/car-dealership-electricity-cost-review",
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
    label: "ショールーム照明・空調（演出照明含む）",
    detail:
      "自動車ディーラーの顔となる空間。ショールーム面積300〜2,000m²で、演出照明（スポットライト・LEDパネル）＋全般照明＋空調（業務用エアコン20〜100kW）が常時稼働。新車展示の魅せる照明（メタルハライド・LED）で1店舗あたり10〜50kWの照明負荷。ディーラー全体の電力使用量の20〜30%を占める。",
  },
  {
    label: "整備工場（リフト／コンプレッサー／塗装）",
    detail:
      "ディーラー併設整備工場の電力。リフト3〜10台（合計10〜50kW）、エアコンプレッサー（15〜45kW）、簡易塗装ブース（小規模）、診断装置、車検ライン機器など。ディーラー全体の30〜40%を占める電力ヘビー部門。",
  },
  {
    label: "洗車機・納車前準備",
    detail:
      "納車前洗車機（門型・15〜30kW）と納車前準備電力。中古車展示場の場合は洗車頻度が高くデマンド要素になる。",
  },
  {
    label: "EV試乗車・納車車両用充電器",
    detail:
      "EV試乗車・販売車両の充電器。普通充電器（6〜7kW）複数台＋急速充電器（50〜150kW）1〜2台が標準化。EV比率上昇で充電器台数が増え、契約電力が大幅増加。1店舗で50〜200kWの充電容量追加事例も。",
  },
  {
    label: "看板・サイン照明・屋外広告",
    detail:
      "自動車メーカーブランドサイン・店舗看板（24h点灯）。1店舗あたり3〜15kWのLED看板照明。深夜時間帯の電力使用量に影響。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本自動車販売協会連合会・経産省自動車課・自動車工業会EV普及データの統計によれば、自動車ディーラーの電気料金は売上高の0.3〜1%（車両売上が大きいため比率は低めだが絶対額は大きい）。粗利ベースでは3〜8%に達する。ショールーム＋整備工場の複合電力構造が特徴。",
  },
  {
    label: "ディーラー1店舗あたりの電力使用量",
    detail:
      "小規模販社（ショールーム＋簡易整備）で年間10〜30万 kWh、中規模ディーラー（ショールーム＋認証整備工場）で年間40〜150万 kWh、大規模県下総代理店本社（多店舗統合）で年間500〜3,000万 kWh。EV試乗車充電器併設で年間20〜40%増のトレンド。",
  },
  {
    label: "ディーラー規模別の年間使用量",
    detail:
      "小規模販社（年商10〜30億円、1〜3店舗）で年間10〜30万 kWh、中規模ディーラー（年商50〜300億円、5〜20店舗）で年間40〜150万 kWh、大規模県下総代理店本社（年商500億円超、20店舗以上）で年間500〜3,000万 kWh。EV化と整備工場拡張で大型化が進行中。",
  },
];

const costFactors = [
  {
    label: "ショールーム演出照明の電力負荷",
    detail:
      "新車展示の魅せる演出照明は1店舗10〜50kWで日中〜夜間常時点灯。メタルハライドからLED化で電力▲40〜60%削減可能だが、未更新ディーラーも多い。",
  },
  {
    label: "EV試乗車充電器の契約電力増",
    detail:
      "EV試乗車・販売車両の急速充電器（50〜150kW）追加で契約電力が一気に増加。中規模ディーラーで既存契約300kWに150kW機を1台追加で50%増、基本料金が月数十万円規模で増加するケースが多い。",
  },
  {
    label: "整備工場併設の複合電力構造",
    detail:
      "ショールーム電力（空調・演出照明）と整備工場電力（コンプレッサー・リフト）の両方を抱える複合構造で、ピーク管理が複雑。デマンドコントローラーが効果的な業種。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。中規模ディーラー（年100万kWh）で年418万円超の負担。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、ショールーム・整備工場・EV充電のすべての時間帯で発生。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模販社（年商10〜30億円、1〜3店舗）",
    profile: "地方中小ディーラー／低圧 50〜150kW／年間 10〜30万 kWh",
    annualCost: "年間電気代 300万〜900万円",
    note: "LED化・空調更新・整備工場省エネで年8〜12%削減事例。",
  },
  {
    size: "中規模ディーラー（年商50〜300億円、5〜20店舗）",
    profile: "国内メーカー系正規ディーラー／高圧 200〜600kW／年間 40〜150万 kWh",
    annualCost: "年間電気代 1,200万〜4,500万円",
    note: "ショールーム全LED化＋整備工場省エネ＋屋根太陽光＋EV充電最適化で年10〜15%削減事例。",
  },
  {
    size: "大規模県下総代理店本社（年商500億円超、20店舗以上）",
    profile: "県下総代理店・大手ディーラーグループ／高圧合計 1,000〜3,000kW／年間 500〜3,000万 kWh",
    annualCost: "年間電気代 1.5〜9 億円",
    note: "長期固定（5〜10年）契約＋全店太陽光＋EV充電基地化で年8〜13%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模販社の年間11%削減（Before/After）",
    before: "地方中小ディーラーA社（低圧 100kW、年間 20万 kWh、年間電気代 600万円）。市場連動プラン継続、ショールーム蛍光灯＋メタルハライド演出照明、整備工場コンプレッサー15年経過。",
    after: "新電力切替（固定3年）／ショールーム全LED化（演出照明含む、SII補助1/2活用、投資300万円）／整備工場コンプレッサー高効率モデル更新／空調更新／看板LED化／デマンドコントローラー導入。",
    result: "年間電気代 600万円 → 534万円（▲11%、▲66万円）／契約 kW 100→80／投資回収 補助金後 4年",
  },
  {
    title: "事例2：中規模ディーラーの年間14%削減",
    before: "国内メーカー系正規ディーラーB社（高圧 400kW、年間 100万 kWh、年間電気代 3,000万円）。市場連動プランで2022〜2023年に月最大350万円の追加負担。EV試乗車充電器3台導入。",
    after: "固定3年プラン切替／ショールーム全LED化＋演出照明スマート制御／整備工場コンプレッサーインバータ化／屋根面積活用自家消費太陽光 100kW＋蓄電池 50kWh／EV充電器ピークカット運用／需要家主導型PPA／BEMS導入／空調更新／灯油暖房高効率化。",
    result: "年間電気代 3,000万円 → 2,580万円（▲14%、▲420万円）／契約 kW 400→340／投資回収 補助金後 4年",
  },
  {
    title: "事例3：大規模県下総代理店本社の年間8,000万円削減",
    before: "県下総代理店本社C社の本社＋直営50店舗合計（高圧合計 2,000kW、年間 1,800万 kWh、年間電気代 5.4億円）。長期固定契約継続もEV充電器併設拡大で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／全店屋根面積活用自家消費太陽光 合計 3 MW＋蓄電池 5 MWh／全店LED化＋演出照明スマート制御／EV充電基地化（ピークカット運用＋V2X検討）／整備工場省エネ全面化／需要家主導型PPA（オフサイト風力5MW）／BEMS全店導入／DR契約締結／長期メンテナンス契約。",
    result: "年間電気代 5.4億円 → 4.6億円（▲14.8%、▲8,000万円）／契約 kW 2,000→1,700／投資回収 7年（補助金後 5年）／CO₂削減 約9,000 t/年",
  },
];

const demandManagement = [
  {
    label: "ショールーム演出照明のスマート制御",
    detail:
      "演出照明をBEMS連動で来店時間帯・在店人数に応じて自動制御。1店舗の最大負荷を10〜15%削減した事例。",
  },
  {
    label: "EV試乗車充電器のピークカット運用",
    detail:
      "EV充電器に出力制御機能を組み込み、店舗全体デマンドを上限管理。蓄電池併設で更にピーク平準化が可能。",
  },
  {
    label: "整備工場と販売部門のピーク分散",
    detail:
      "整備工場のリフト・コンプレッサー稼働と販売部門の空調ピークを時間帯で分散制御。1店舗の最大デマンドを15〜25%削減した事例。",
  },
  {
    label: "屋根面積を活用した自家消費太陽光",
    detail:
      "ディーラーの屋根面積（ショールーム＋整備工場）は通常500〜2,000m²と広く、100〜300kWの自家消費太陽光が設置可能。日中の自家消費率70〜85%。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 事業場型）",
    target: "ショールーム照明LED化・空調・コンプレッサー・整備機器",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "ディーラー業向けで採択率が高い主力補助金。ショールーム照明更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "屋根面積活用自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "ディーラーの屋根面積を活用した太陽光と相性が良い。EV充電器とのセット運用で更に効果向上。",
  },
  {
    name: "経産省 EV充電インフラ整備事業（CEV補助）",
    target: "EV試乗車・販売車両用充電器の新設・更新",
    rate: "1/2〜2/3、上限機種別に設定",
    note: "ディーラーEV充電器の主力補助。複数台同時導入で大規模補助の対象。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新整備機器・診断装置・塗装ブースの新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "ディーラー併設整備工場の設備更新で活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "全店脱炭素化・太陽光・蓄電池・EV充電インフラ",
    rate: "1/2、上限数十億円",
    note: "大手ディーラーの全店脱炭素プロジェクトで補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "ショールーム演出照明のLED化率を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "整備工場のコンプレッサー・リフトの電力使用量を時間帯別に把握しているか",
  "EV試乗車・販売車両用充電器併設による契約電力増の試算を実施したか",
  "ディーラー屋根面積を活用した自家消費太陽光（100〜500kW）導入の試算を実施したか",
  "ショールーム演出照明スマート制御・調光の組合せを検討したか",
  "整備工場と販売部門のピーク分散制御を導入しているか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "看板・サイン照明24h点灯のLED化・調光を検討したか",
  "SII・CEV補助・PPA・ものづくり補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "自動車ディーラーの電気代水準はどれくらいですか？", answer: "売上高比0.3〜1%（車両売上が大きいため低めだが絶対額は大きい）、粗利比3〜8%が業界平均。中規模ディーラー（年商150億円級）で年1,200〜4,500万円、大規模県下総代理店本社（年商500億円超）で年1.5〜9億円規模の電気代になります。" },
  { question: "ショールーム演出照明の電気代を削減するには？", answer: "①メタルハライド→LED化（電力▲40〜60%）、②スポットライトのLED化＋スマート制御、③来店時間帯に応じた調光、④BEMSによる需要見える化、⑤演出と省エネの両立設計、の5本柱が効果的。中規模ディーラーで年200〜500万円の削減が目安。SII補助1/2活用で投資回収3〜4年。" },
  { question: "EV試乗車充電器併設で電気代はどれくらい増えますか？", answer: "EV試乗車・販売車両用に普通充電器（7kW）複数台＋急速充電器（50〜150kW）1〜2台が標準化。中規模ディーラーで既存契約300kWに150kW機を1台追加すると基本料金が月20〜30万円規模で増加するケースも。CEV補助とPPA・蓄電池の組合せで初期投資を抑制可能です。" },
  { question: "整備工場併設ディーラーの電気代対策は？", answer: "①コンプレッサーインバータ化＋エアー漏れ対策、②リフトの省エネ運用、③空調の集中管理、④販売部門と整備部門のピーク分散、⑤BEMS導入、の5本柱が効果的。整備工場分だけで年200〜500万円の削減が目安。" },
  { question: "ディーラーの固定プランと市場連動プランどちらが向きますか？", answer: "ショールーム空調・演出照明・整備工場・EV充電器の連続稼働が必要なため、固定プランが向きます。2022〜2023年の市場高騰局面では市場連動継続ディーラーで月数百万円の追加負担が発生しました。EV充電器併設拡大に伴いコスト変動リスクが更に増えるため、固定優位性が高まっています。" },
  { question: "ディーラー屋根面積活用太陽光は投資回収できますか？", answer: "ディーラーの屋根面積（ショールーム＋整備工場）は500〜2,000m²と広く、100〜300kWの自家消費太陽光が設置可能。日中の自家消費率70〜85%、年100〜400万円の削減、PPA活用で投資回収5〜7年が目安。EV充電器とのセット運用で経済合理性が高まります。" },
  { question: "ディーラー向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、CEV補助（EV充電器）、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "EV化進展でディーラーの電気代構造はどう変わりますか？", answer: "EV試乗車・販売車両用充電器の常設化、納車整備時のEV充電、V2X（車両から建物への電力供給）の実証など、ディーラーの電力構造が大きく変わりつつあります。屋根太陽光＋蓄電池＋EV充電器のセット運用で『EV販売拠点＝充電拠点』への進化が進んでいます。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本自動車販売協会連合会", url: "https://www.jada.or.jp/" },
  { name: "一般社団法人 日本自動車工業会（EV普及データ）", url: "https://www.jama.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function CarDealershipElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/car-dealership-electricity-cost-review"
        datePublished="2026-05-26"
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
          <span className="text-slate-800">自動車ディーラーの見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            自動車ディーラーの電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            自動車ディーラーは、ショールームの演出照明と空調、併設整備工場のコンプレッサー・リフト、近年急増するEV試乗車・販売車両用充電器、屋外看板照明など多面的な電力負荷を持ち、EV化進展と屋根面積活用太陽光がコスト構造を変えつつあります。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>ディーラーの電力使用プロファイル（ショールーム／整備工場／EV充電／看板）</li>
              <li>業界平均の電気代水準（売上高比0.3〜1%）と1店舗あたり単価</li>
              <li>ショールーム演出照明LED化＋スマート制御の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>EV試乗車充電器併設の電力構造変化</li>
              <li>SII・CEV補助・PPA・ものづくり補助・GX補助の組合せ活用</li>
              <li>ディーラー向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ディーラーの電力使用特性 — ショールーム・整備工場・EV充電・看板
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ディーラーの電力使用は『ショールーム照明・空調／整備工場（リフト・コンプレッサー）／洗車機・納車前準備／EV試乗車・販売車両用充電器／看板・サイン照明』の5層で構成されます。ショールーム＋整備工場の複合電力構造とEV充電器併設が業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比0.3〜1%、店舗別に大きく異なる
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ディーラーの電気代水準は店舗規模・整備工場有無・EV充電器併設で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本自動車販売協会連合会・経産省自動車課・自動車工業会EV普及データから整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ディーラーの主要な電気代上昇要因 — 演出照明・EV充電・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ディーラーの電気代上昇は、ショールーム演出照明、EV試乗車充電器の契約電力増、整備工場併設の複合構造、再エネ賦課金、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模販社／中規模ディーラー／大規模県下総代理店本社
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ディーラーの電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/gas-station-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガソリンスタンドの電気料金見直し</Link>
              、{" "}
              <Link href="/auto-repair-bodyshop-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車整備・板金塗装業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ショールーム・整備工場のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ディーラーはショールーム演出照明スマート制御、EV充電器ピークカット運用、整備工場と販売部門のピーク分散、屋根面積活用太陽光など、業種特有のデマンド管理戦略が効果的です。
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
              燃料費調整・市場連動プランの影響 — ショールーム連続稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ディーラーはショールーム空調・演出照明・整備工場・EV充電器が連続稼働するため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ショールーム空調・照明が営業時間中継続必須</li>
                  <li>整備工場の計画運用</li>
                  <li>EV充電器の連続稼働</li>
                  <li>新車価格への即時転嫁が困難</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調負荷増</li>
                  <li>EV充電が高単価時間帯に集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数百万円の追加負担</li>
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
              再エネ賦課金の影響 — 多店舗ディーラー業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。ディーラーの中規模5〜20店舗では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模ディーラー（年100万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 349万円</li>
                  <li>2025年度（3.98円/kWh）：年 398万円（+49万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 450万円（+101万円）</li>
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
              ディーラー特有の節電・省エネ施策 — 演出照明・屋根太陽光・EV充電
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ディーラーの省エネは『ショールーム演出照明LED化＋スマート制御』『整備工場コンプレッサー省エネ』『屋根面積活用自家消費太陽光』『EV充電器ピークカット運用』『BEMS導入』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ショールーム演出照明LED化＋スマート制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>メタルハライド→LED化で電力▲40〜60%</li>
                  <li>来店時間帯に応じた調光制御</li>
                  <li>SII補助で投資回収3〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">整備工場コンプレッサー省エネ</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>インバータ化＋エアー漏れ対策</li>
                  <li>電力▲20〜35%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">EV充電器ピークカット運用</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>出力制御で店舗全体デマンドを上限管理</li>
                  <li>蓄電池併設で更にピーク平準化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">屋根面積活用自家消費太陽光（100〜500kW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>日中営業のディーラーで自家消費率70〜85%</li>
                  <li>投資回収 5〜7年（補助金後 4〜5年）</li>
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
              補助金活用（業種別） — SII・CEV補助・PPA・ものづくり・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ディーラー向けに活用しやすい補助金は5本柱。EV充電器併設はCEV補助＋PPA＋GX補助の組合せで補助率を最大化できます。
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
              ディーラーに合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社ディーラーの状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ディーラーはショールーム演出照明・整備工場併設・EV試乗車充電器の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>EV試乗車充電器併設のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した11〜15%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-26"
            />
            <GlossaryLinks currentSlug="car-dealership-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/gas-station-electricity-cost-review", title: "ガソリンスタンドの電気料金見直し", description: "自動車関連業種の共通論点。" },
              { href: "/auto-repair-bodyshop-electricity-cost-review", title: "自動車整備・板金塗装業の電気料金見直し", description: "整備工場併設の共通論点。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "自動車関連サプライチェーンの共通論点。" },
              { href: "/parking-facility-electricity-cost-review", title: "駐車場施設の電気料金見直し", description: "EV充電器併設が共通。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店舗の電気料金見直し", description: "ショールーム照明・空調が共通。" },
              { href: "/shopping-mall-electricity-cost-review", title: "ショッピングモールの電気料金見直し", description: "大型施設の共通論点。" },
              { href: "/department-store-electricity-cost-review", title: "百貨店の電気料金見直し", description: "演出照明・空調が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "整備工場の電気代削減アクション。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "ディーラー業の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "ディーラーが市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根面積活用太陽光の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "ショールーム照明更新の主力補助金。" },
              { href: "/peak-demand-management", title: "ピークデマンド管理の基本", description: "ショールーム・整備工場のピーク管理。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "業種別リスク全体像。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社ディーラーの条件でリスクを確認する"
            description="ショールーム照明・整備工場・EV試乗車充電器・看板照明の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。EV充電器併設後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="自動車ディーラーの電力契約見直し、専門家に相談しませんか？"
            description="ショールーム演出照明・整備工場・EV試乗車充電器・看板照明の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でディーラー事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
