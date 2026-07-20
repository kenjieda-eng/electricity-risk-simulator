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
  "ガソリンスタンド（SS）の電気料金見直しポイント｜洗車機・計量機ポンプ・EV急速充電器併設の契約最適化";
const pageDescription =
  "ガソリンスタンド（SS）の電気料金見直しを解説。洗車機ピーク負荷、計量機ポンプ、24h看板照明、EV急速充電器併設、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ガソリンスタンド 電気料金 見直し",
    "SS 電気代",
    "洗車機 EV充電器 電力",
    "計量機ポンプ 電気代",
    "SS 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/gas-station-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/gas-station-electricity-cost-review",
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
    label: "洗車機（門型・トンネル式）",
    detail:
      "SS電力の最大ピーク要素。門型洗車機（ブラシ＋送風乾燥）で1台あたり15〜30kW、トンネル式コンベア洗車機で30〜80kWの瞬時負荷。高圧温水ポンプ・ブロワー乾燥・ワックス処理の連動稼働でデマンドが跳ね上がる。SS全体の電力使用量の25〜40%を占めるSSも多い。",
  },
  {
    label: "ガソリン計量機ポンプ・地下タンク制御",
    detail:
      "計量機ポンプ（1機あたり0.75〜2.2kW）と地下タンクの液面センサー・制御盤の常時電源。SS規模で計量機4〜12機、合計5〜25kWの常時負荷。POSレジ・防爆認証電装品も常時稼働。",
  },
  {
    label: "看板照明・キャノピー照明（24h）",
    detail:
      "SS看板・キャノピー（屋根）照明・誘導サインは24h点灯が標準。LED化前は1SSあたり10〜30kW、LED化後で3〜10kWまで削減可能。深夜時間帯の電力使用量に直結し、深夜料金プラン適性を左右する。",
  },
  {
    label: "EV急速充電器（50〜150kW、併設SS）",
    detail:
      "脱炭素対応で併設が進むEV急速充電器。50kW機1台で契約電力50kW追加、150kW機なら150kW追加と、SS全体の契約電力構造を一変させる。複数台設置で契約電力が小規模SSで2〜3倍化するケースも。",
  },
  {
    label: "事務所・店舗空調・灯油ボイラー併用",
    detail:
      "SS事務所・コンビニ併設店舗の空調（業務用エアコン 5〜15kW）、冷蔵冷凍ショーケース（併設店舗で20〜50kW）、灯油ボイラー（暖房・給湯）の電装品。寒冷地SSは灯油消費もコスト要素。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "全国石油業共済協同組合連合会・経産省資源エネルギー庁の統計によれば、SSの電気料金は売上高の0.5〜2%（燃料売上が大きいため比率は低めだが絶対額は中小事業所として大きい）。粗利ベースでは5〜15%に達する。洗車機・EV充電器併設で電力依存度が急上昇する業種。",
  },
  {
    label: "SS1施設あたりの電力使用量",
    detail:
      "小規模単独SS（フルサービス、洗車なし）で年間3〜8万 kWh、中規模セルフSS（洗車機1〜2機）で年間10〜30万 kWh、大規模SS（複数洗車機＋EV充電器併設）で年間50〜150万 kWh。EV急速充電器併設で年間使用量が2〜4倍化するケースが顕著。",
  },
  {
    label: "SS規模別の年間使用量",
    detail:
      "小規模単独SS（月販燃料50〜150kL）で年間3〜8万 kWh、中規模セルフSS（月販150〜400kL）で年間10〜30万 kWh、大規模チェーンSS本社含む合計（複数店舗・EV充電拠点）で年間500〜2,000万 kWh。SS過疎地問題で経営統合・大型化が進行中。",
  },
];

const costFactors = [
  {
    label: "EV急速充電器併設による契約電力の激増",
    detail:
      "EV急速充電器（50kW・90kW・150kW）併設で契約電力が一気に増加。中規模セルフSS（既存契約100kW）に150kW機を1台追加で契約電力が2.5倍化、基本料金が月数十万円規模で増加するケースが多い。実需要との乖離管理が経営課題。",
  },
  {
    label: "洗車機ピーク負荷とデマンド管理",
    detail:
      "洗車機（30〜80kW）の同時稼働で30分デマンドが跳ね上がり、年間最大デマンドが契約電力を決定。デマンド管理を怠ると基本料金が過剰になりやすい業種特性。",
  },
  {
    label: "看板・キャノピー照明24h点灯のベースロード",
    detail:
      "看板・キャノピー照明はSS集客の生命線で24h点灯が必須。LED化前のSSで月間使用量の30〜40%を照明が占める。燃料費調整額1円/kWhの変動でも中規模SS（月2.5万kWh）で月2.5万円の差、年30万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増（24h稼働業種）",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。EV充電器併設SS（年間100万kWh）で年418万円の負担。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h看板照明・EV充電業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模単独SS（フルサービス、月販燃料50〜150kL）",
    profile: "地域密着型単独SS／低圧 40〜100kW／年間 3〜8万 kWh",
    annualCost: "年間電気代 90万〜240万円",
    note: "LED看板更新・洗車機高効率化・コンプレッサー省エネで年8〜12%削減事例。",
  },
  {
    size: "中規模セルフSS（月販燃料150〜400kL、洗車機1〜2機）",
    profile: "全国チェーンセルフSS／高圧 80〜250kW／年間 10〜30万 kWh",
    annualCost: "年間電気代 300万〜900万円",
    note: "LED化＋洗車機インバータ化＋デマンドコントローラーで年10〜15%削減事例。",
  },
  {
    size: "大規模チェーンSS（複数店舗・EV充電器併設、本社含む合計）",
    profile: "ENEOS・出光等大手チェーン／高圧合計 500〜2,000kW／年間 500〜2,000万 kWh",
    annualCost: "年間電気代 1.5〜6 億円",
    note: "長期固定（3〜5年）契約＋自家消費太陽光（キャノピー上）＋EV充電器最適化で年8〜13%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模単独SSの年間12%削減（Before/After）",
    before: "地方の単独SS A社（低圧 60kW、年間 5万 kWh、年間電気代 150万円）。市場連動プラン継続、看板照明24h点灯（蛍光灯）、門型洗車機1台、灯油暖房併用。",
    after: "新電力切替（固定3年）／看板・キャノピー全LED化（投資150万円、SII補助1/2活用）／門型洗車機高効率モデル更新／コンプレッサーインバータ化／深夜時間帯運転設備の見直し／デマンドコントローラー導入。",
    result: "年間電気代 150万円 → 132万円（▲12%、▲18万円）／契約 kW 60→50／投資回収 補助金後 4年",
  },
  {
    title: "事例2：中規模セルフSSの年間14%削減",
    before: "都市部セルフSS B社（高圧 180kW、年間 25万 kWh、年間電気代 750万円）。市場連動プランで2022〜2023年に月最大80万円の追加負担。洗車機2台、コンビニ併設なし、24h看板照明。",
    after: "固定3年プラン切替／看板・キャノピー全LED化／洗車機ブロワーインバータ化／コンプレッサー高効率モデル更新／温水洗車の温度設定見直し／デマンドコントローラー導入／需要家主導型PPA／灯油ボイラー高効率化。",
    result: "年間電気代 750万円 → 645万円（▲14%、▲105万円）／契約 kW 180→150／投資回収 補助金後 3年",
  },
  {
    title: "事例3：大規模チェーンSSグループの年間9,000万円削減",
    before: "全国チェーンSS C社の本社＋直営60店舗合計（高圧合計 1,500kW、年間 1,500万 kWh、年間電気代 4.5億円）。長期固定契約継続もEV急速充電器併設拡大で契約電力上振れ。",
    after: "電力契約の5年長期固定締結／キャノピー上自家消費太陽光 合計 2 MW＋蓄電池 3 MWh／EV急速充電器の運用最適化（ピークカット運用）／全店LED化／洗車機全機インバータ化／需要家主導型PPA（オフサイト太陽光5MW）／BEMS全店導入／DR契約締結。",
    result: "年間電気代 4.5億円 → 3.6億円（▲20%、▲9,000万円）／契約 kW 1,500→1,300／投資回収 6年（補助金後 4年）／CO₂削減 約9,000 t/年",
  },
];

const demandManagement = [
  {
    label: "洗車機の稼働タイミング分散制御",
    detail:
      "複数洗車機の同時稼働を避け、デマンドコントローラーで1台ずつ稼働制御。1SSの最大デマンドを15〜25%削減した事例。",
  },
  {
    label: "EV急速充電器のピークカット運用",
    detail:
      "EV急速充電器に出力制御機能を組み込み、SS全体のデマンド上限を超えないよう自動調整。蓄電池併設で更にピーク平準化が可能。",
  },
  {
    label: "看板・キャノピー照明のLED化＋調光",
    detail:
      "看板・キャノピー照明をLED化し、深夜時間帯（0〜5時）は調光30〜50%に落とす運用。電力▲40〜60%、SII補助で投資回収2〜3年。",
  },
  {
    label: "コンプレッサー・ボイラーのインバータ化",
    detail:
      "タイヤ空気入れ用コンプレッサー、温水洗車用ボイラーのインバータ化・スケジュール運転で15〜25%削減。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 事業場型）",
    target: "看板・キャノピーLED化・洗車機高効率化・コンプレッサー・ボイラー",
    rate: "中小1/2、上限15億円",
    note: "SS業向けで採択率が高い主力補助金。LED化単独でも採択実績多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "キャノピー上自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "SSキャノピー上の太陽光は屋根として活用しやすく、相性が良い。",
  },
  {
    name: "経産省 EV充電インフラ整備事業（CEV補助）",
    target: "EV急速充電器（50〜150kW）の新設・更新",
    rate: "1/2〜2/3、上限機種別に設定",
    note: "SS併設EV充電器の主力補助。複数台同時導入で大規模補助の対象。",
  },
  {
    name: "経産省 SS過疎地対策補助金",
    target: "SS存続のための設備更新・経営統合支援",
    rate: "1/2〜2/3、上限地域要件あり",
    note: "SS過疎地（人口減少地域）の事業継続のための特別補助。電力設備更新も対象。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "EV充電インフラ集中整備・太陽光・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネ＋EV化で補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "洗車機の同時稼働回避のデマンドコントローラーを導入しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "看板・キャノピー照明のLED化率を把握しているか",
  "EV急速充電器併設による契約電力増の試算を実施したか",
  "キャノピー上自家消費太陽光（10〜100kW）導入の試算を実施したか",
  "深夜時間帯の運転設備（看板照明・冷蔵）の調光・スケジュール運転を検討したか",
  "デマンドコントローラー・洗車機運転分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "灯油ボイラーの高効率化・更新時期を確認したか",
  "SII・CEV補助・PPA・SS過疎地対策補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "ガソリンスタンドの電気代水準はどれくらいですか？", answer: "売上高比0.5〜2%（燃料売上が大きいため低めだが絶対額は中小事業所として大きい）、粗利比5〜15%が業界平均。中規模セルフSSで年300〜900万円、大規模チェーンSS本社含む合計で年1.5〜6億円規模の電気代になります。" },
  { question: "EV急速充電器併設で電気代はどのくらい増えますか？", answer: "50kW機1台で契約電力50kW追加、150kW機なら150kW追加と、SS全体の契約電力構造が一変します。中規模セルフSS（既存契約100kW）に150kW機を1台追加すると基本料金が月20〜30万円規模で増加するケースも。CEV補助とPPA・蓄電池の組合せで初期投資を抑制可能です。" },
  { question: "洗車機の電気代を削減するには？", answer: "①洗車機のインバータ化（ブロワー・ポンプ）、②高効率モデルへの更新、③同時稼働回避のデマンド制御、④温水温度設定の最適化、⑤BEMSによる需要見える化、の5本柱が効果的。中規模SSで年30〜80万円の削減が目安。" },
  { question: "看板・キャノピー照明のLED化はどれくらい効果がありますか？", answer: "蛍光灯・水銀灯からLED化で電力▲40〜60%。中規模SS（看板10kW級）で年30〜50万円の削減。SII補助1/2活用で投資回収2〜3年が目安です。" },
  { question: "SSの固定プランと市場連動プランどちらが向きますか？", answer: "24h看板照明・洗車機・EV充電器の連続稼働が必要なため、固定プランが向きます。2022〜2023年の市場高騰局面では市場連動継続SSで月数十万円の追加負担が発生しました。EV充電器併設拡大に伴いコスト変動リスクが更に増えるため、固定優位性が高まっています。" },
  { question: "キャノピー上太陽光は投資回収できますか？", answer: "SSキャノピー（屋根）面積100〜500m²で10〜50kWの太陽光が設置可能。EV充電器併設SSなら自家消費率70%超になりやすく、年20〜80万円の削減、CEV補助・PPA活用で投資回収5〜7年が目安です。EV充電とのセット運用が経済合理的です。" },
  { question: "SS向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、CEV補助（EV充電器）、需要家主導型PPA補助金、SS過疎地対策補助、GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "SS過疎地対策補助金とは何ですか？", answer: "SS過疎地（人口減少地域でSSが3カ所以下の市町村）の事業継続のための経産省特別補助。設備更新・経営統合支援で1/2〜2/3補助。電力設備（給油機・洗車機・LED化）も対象になり、地方SSの存続支援として活用されています。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全国石油業共済協同組合連合会", url: "https://www.zensekiren.or.jp/" },
  { name: "経済産業省 資源エネルギー庁 石油流通課（SS過疎地対策）", url: "https://www.enecho.meti.go.jp/category/resources_and_fuel/distribution/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function GasStationElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/gas-station-electricity-cost-review"
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
          <span className="text-slate-800">ガソリンスタンド（SS）の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ガソリンスタンド（SS）の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ガソリンスタンドは、洗車機の瞬時ピーク負荷、計量機ポンプ・地下タンク制御の常時負荷、24h点灯のキャノピー・看板照明、近年急増するEV急速充電器の併設など多面的な電力負荷を持ち、SS過疎地対策・脱炭素対応がコスト構造を急速に変えつつあります。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>SSの電力使用プロファイル（洗車機／計量機／看板／EV充電器）</li>
              <li>業界平均の電気代水準（売上高比0.5〜2%）と1施設あたり単価</li>
              <li>EV急速充電器併設による契約電力増の試算</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>洗車機・看板・キャノピーの省エネ施策</li>
              <li>SII・CEV補助・PPA・SS過疎地対策補助の組合せ活用</li>
              <li>SS向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              SSの電力使用特性 — 洗車機・計量機ポンプ・看板・EV充電器
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              SSの電力使用は『洗車機／計量機ポンプ・地下タンク制御／24h看板・キャノピー照明／EV急速充電器／事務所空調・併設店舗』の5層で構成されます。洗車機の瞬時ピーク負荷とEV充電器併設による契約電力増が業種特有のコスト構造を形成します。
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比0.5〜2%、施設別に大きく異なる
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              SSの電気代水準は洗車機・EV充電器の有無で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全国石油業共済協同組合連合会・経産省資源エネルギー庁から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              SSの主要な電気代上昇要因 — EV充電器・洗車機・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              SSの電気代上昇は、EV急速充電器併設による契約電力激増、洗車機ピーク負荷、24h看板照明ベースロード、再エネ賦課金、容量拠出金が複合的に重なります。
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
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模単独SS／中規模セルフSS／大規模チェーンSS
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              SSの電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              関連業種は{" "}
              <Link href="/auto-repair-bodyshop-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車整備・板金塗装業の電気料金見直し</Link>
              、{" "}
              <Link href="/car-dealership-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車ディーラーの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              洗車機・EV充電器のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              SSは洗車機の同時稼働回避、EV急速充電器のピークカット運用、看板照明のLED化＋調光、コンプレッサーインバータ化など、業種特有のデマンド管理戦略が効果的です。
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
              デマンド管理の基本は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）の仕組み</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 24h看板・EV充電の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              SSは24h看板照明・EV充電器運用が連続稼働するため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が高い業種です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h看板照明・キャノピー照明が必須</li>
                  <li>EV充電器運用の連続稼働</li>
                  <li>燃料売価への即時転嫁が困難</li>
                  <li>洗車機の連続予約運用</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調・照明負荷増</li>
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
              再エネ賦課金の影響 — 24h看板・EV充電業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。SSの中規模セルフSSでは負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模セルフSS（年25万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 87万円</li>
                  <li>2025年度（3.98円/kWh）：年 99.5万円（+12.5万円）</li>
                  <li>2026年度（4.18円/kWh）：年 104.5万円（+17.5万円）</li>
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
              SS特有の節電・省エネ施策 — LED化・洗車機高効率・EV充電最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              SSの省エネは『看板・キャノピーLED化＋調光』『洗車機インバータ化』『EV急速充電器ピークカット運用』『キャノピー上自家消費太陽光』『デマンドコントローラー』の5軸で組み立てます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">看板・キャノピーLED化＋調光</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蛍光灯・水銀灯からLED化で電力▲40〜60%</li>
                  <li>深夜0〜5時に調光30〜50%</li>
                  <li>SII補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">洗車機インバータ化・高効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ブロワー・ポンプのインバータ制御で電力▲20〜30%</li>
                  <li>温水温度の最適設定で更に削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">EV急速充電器ピークカット運用</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>出力制御でSS全体デマンドを上限管理</li>
                  <li>蓄電池併設で更にピーク平準化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">キャノピー上自家消費太陽光（10〜100kW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>EV充電器併設SSで自家消費率70%超</li>
                  <li>投資回収 5〜7年（補助金後 3〜5年）</li>
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
              補助金活用（業種別） — SII・CEV補助・PPA・SS過疎地対策補助・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              SS向けに活用しやすい補助金は5本柱。EV急速充電器併設はCEV補助＋PPA＋GX補助の組合せで補助率を最大化できます。
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
              SSに合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社SSの状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              SSは洗車機ピーク負荷・EV急速充電器併設・24h看板照明の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>EV急速充電器併設のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜20%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="gas-station-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/auto-repair-bodyshop-electricity-cost-review", title: "自動車整備・板金塗装業の電気料金見直し", description: "自動車関連業種の共通論点。" },
              { href: "/car-dealership-electricity-cost-review", title: "自動車ディーラーの電気料金見直し", description: "EV充電器併設が共通。" },
              { href: "/parking-facility-electricity-cost-review", title: "駐車場施設の電気料金見直し", description: "EV充電・24h照明が共通。" },
              { href: "/convenience-store-electricity-cost-review", title: "コンビニの電気料金見直し", description: "24h店舗の共通論点。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店舗の電気料金見直し", description: "看板・店舗照明が共通。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "自動車関連サプライチェーンの共通論点。" },
              { href: "/transportation-electricity-cost-review", title: "運輸業の電気料金見直し", description: "EVトラック普及で関連性高。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "SS事業者が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "キャノピー上太陽光の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED化・洗車機更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "24h看板照明事業者のリスク。" },
              { href: "/demand-value-guide", title: "ピークデマンド管理の基本", description: "洗車機・EV充電のピーク管理。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社SSの条件でリスクを確認する"
            description="洗車機・計量機ポンプ・EV急速充電器・看板照明の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。EV充電器併設後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="ガソリンスタンドの電力契約見直し、専門家に相談しませんか？"
            description="洗車機・EV急速充電器・キャノピー照明・計量機ポンプの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でSS事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
