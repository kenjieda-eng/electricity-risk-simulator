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
  "皮革業の電気料金見直しポイント｜鞣し工程と排水処理の契約最適化";
const pageDescription =
  "皮革業（タンナー・なめし加工・染色仕上げ）の電気料金見直しを解説。鞣し工程の電力消費、排水処理設備の連続稼働、小規模事業者向け契約見直し、ニッチ業界の補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "皮革業 電気料金 見直し",
    "タンナー 電気代 削減",
    "鞣し 電力契約",
    "皮革加工 電気料金",
    "皮革工場 排水処理 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/leather-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/leather-electricity-cost-review",
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
    label: "鞣し工程（タイコ・ドラム・脱毛・洗浄）",
    detail:
      "皮革のなめし加工はタイコ（回転ドラム）に皮革を入れ、薬剤と水を使いクロムなめし・タンニンなめしを行う基幹工程。タイコの動力（10〜50kW/台）と給湯・温水循環設備が電力消費の中核。中規模タンナーの電力使用量の30〜45%を占める。",
  },
  {
    label: "染色・仕上げ・乾燥設備",
    detail:
      "染色機・スプレー塗装ライン・乾燥機・プレス機・コニング・パウダリングなど後加工設備の電力。1ラインあたり20〜100kWの動力負荷。仕上工程は気候・湿度管理が品質を左右するため空調も連続稼働。",
  },
  {
    label: "排水処理設備（中和・凝集沈殿・活性汚泥）",
    detail:
      "皮革業は大量の有機物・クロム含有排水を処理する必要があり、排水処理設備が24時間連続稼働する。中和槽・凝集沈殿槽・活性汚泥槽の撹拌機・ブロワー・ポンプで50〜200kWの恒常負荷。皮革業特有のコスト要因。",
  },
  {
    label: "ボイラー補機・給湯設備",
    detail:
      "なめし工程の温水（30〜50°C）、染色の温水（40〜80°C）を作るボイラー補機・循環ポンプの電力。ボイラー本体は重油・LNGが主流だが、電気ヒートポンプ給湯への転換も増加傾向。",
  },
  {
    label: "照明・空調・付帯設備",
    detail:
      "工場照明、仕上場の空調、原皮保管庫の冷蔵設備（夏季）が年間消費電力の10〜15%を占める。LED化・空調インバータ化が省エネの定番。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本皮革産業連合会の統計によれば、皮革業の電気料金は売上高の2〜6%（排水処理比率の高い工場で4〜8%）に達する。製造原価に占める比率は3〜10%。原皮コストに次ぐ2番目のコスト要素となる規模感。",
  },
  {
    label: "1枚（牛革）あたりの電力使用量",
    detail:
      "牛革1枚（約3〜4 m²）の鞣し・染色・仕上げ加工で6〜12 kWhが業界平均。原皮の状態・なめし方式（クロムなめし／タンニンなめし）・仕上げグレードで2倍程度ぶれる。豚革・羊革は更に少ない電力量。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模タンナー（従業員10〜30名）で年間20〜80万 kWh、中規模（50〜200名）で年間200〜800万 kWh、大規模（300名以上）で年間1,000〜3,000万 kWh。業界の事業者数は減少傾向で、低圧〜高圧契約が中心。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の小規模事業者への影響",
    detail:
      "皮革業は中小規模事業者が中心で、月間使用量は5〜20万kWhが多い。燃料費調整額1円/kWhの変動で月5〜20万円の差。年60〜240万円規模だが、利益率が薄い業界では事業継続性に直結する変動幅。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間50万kWh使用の小規模タンナーで年209万円の負担、5年で1,000万円超。減免制度の対象規模に達しない事業者は満額負担。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、皮革業のような中小事業者にも一律影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
  {
    label: "排水処理設備の連続稼働コスト",
    detail:
      "皮革業特有の大量排水処理は24時間連続稼働必須で、停止できない。電気代変動が処理コストに直結し、利益率を圧迫する代表的な業種特性。",
  },
  {
    label: "ニッチ業界ゆえの交渉力不足",
    detail:
      "皮革業は事業者数が少なく、業界全体での購買力が限定的。新電力からも「ニッチ業界向け」という認識で標準的な条件しか提示されにくく、相見積による交渉が特に重要となる。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模タンナー（従業員10〜30名）",
    profile: "家族経営・地場の個性派タンナー／低圧〜高圧 30〜100kW／年間 20〜80万 kWh",
    annualCost: "年間電気代 600〜2,400 万円",
    note: "新電力切替・固定3年契約・LED化・小型空調更新で年8〜13%削減事例。市場連動からの離脱が最重要論点。中小企業省エネ補助金2/3活用で投資回収2〜3年。",
  },
  {
    size: "中規模タンナー（従業員50〜200名）",
    profile: "中堅皮革メーカー（袋物・靴向け）／高圧 400〜1,200kW／年間 300〜1,000万 kWh",
    annualCost: "年間電気代 900〜3,000 万円",
    note: "排水処理設備の24h稼働が電力消費の中核。固定5年契約＋空調インバータ化＋ヒートポンプ給湯転換で年10〜15%削減事例。屋根面積を活用した自家消費太陽光（500kW〜1MW）の相性も良好。",
  },
  {
    size: "大規模皮革メーカー（従業員300名以上）",
    profile: "総合皮革メーカー（自動車・家具向け）／高圧〜特別高圧 1,500〜3,000kW／年間 1,200〜3,000万 kWh",
    annualCost: "年間電気代 3,500〜9,000 万円",
    note: "1%の単価改善でも年100〜300万円のインパクト。長期固定（5〜7年）契約＋大規模太陽光＋蓄電池併設で年12〜18%削減事例。海外顧客向け再エネ100%対応もメリット。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模タンナーの年間12%削減（Before/After）",
    before: "近畿地区の小規模タンナーA社（高圧 65kW、年間 35万 kWh、年間電気代 1,050万円）。市場連動プラン継続、LED未更新、空調インバータなし、力率管理未実施。",
    after: "新電力切替（固定3年）／全照明LED化（投資 120万円）／空調インバータ化／力率改善コンデンサ更新／排水処理設備のブロワーインバータ化。",
    result: "年間電気代 1,050万円 → 924万円（▲12%、▲126万円）／契約 kW 65→55／投資回収 1.3年（中小企業省エネ補助 2/3 活用）",
  },
  {
    title: "事例2：中規模タンナーの年間14%削減",
    before: "兵庫県の中規模タンナーB社（高圧 800kW、年間 600万 kWh、年間電気代 1,800万円）。市場連動プランで2022〜2023年に月最大80万円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 600kW 導入（屋根3,500 m²）／ヒートポンプ給湯転換（重油ボイラー→電気）／排水処理設備のインバータ化／需要家主導型PPA補助金活用。",
    result: "年間電気代 1,800万円 → 1,548万円（▲14%、▲252万円）／契約 kW 800→680／投資回収 6.2年（補助金後 4.5年）",
  },
  {
    title: "事例3：大規模皮革メーカー基幹工場の年間1,000万円削減",
    before: "国内大手皮革メーカーC社の基幹工場（特別高圧 2,800kW、年間 2,500万 kWh、年間電気代 7,500万円）。長期固定契約継続もヒートポンプ転換で契約電力上振れ。",
    after: "電力契約の7年長期固定締結／自家消費太陽光 1.5 MW＋蓄電池 1.5 MWh／コージェネ 500kW増設／排水処理設備のインバータ化／DR契約締結／需要家主導型PPA。",
    result: "年間電気代 7,500万円 → 6,500万円（▲13%、▲1,000万円）／契約 kW 2,800→2,500／投資回収 7年（補助金後 5年）／CO₂削減 約4,500 t/年",
  },
];

const demandManagement = [
  {
    label: "タイコ・染色機のバッチタイミング分散",
    detail:
      "複数台のタイコ・染色機を運用する場合、起動タイミングを30分〜1時間ずらすことでデマンドピークを抑制。中規模タンナーの契約電力10〜15%削減事例。",
  },
  {
    label: "排水処理設備のインバータ化",
    detail:
      "排水処理のブロワー・撹拌機・ポンプはインバータ化＋負荷追従制御で20〜35%削減。24h稼働の設備のためインバータ化効果が最大化しやすい。",
  },
  {
    label: "給湯ピーク時間帯のシフト",
    detail:
      "ヒートポンプ給湯設備は深夜電力時間帯（22時〜翌6時）に蓄熱運転し、昼間の負荷分散を行う。蓄湯槽併設で更に効果的。",
  },
  {
    label: "原皮冷蔵保管庫の夏季管理",
    detail:
      "原皮の冷蔵保管庫は夏季に電力負荷が増大。庫内温度設定の最適化、扉開閉管理、断熱強化で5〜10%削減可能。",
  },
];

const subsidyPrograms = [
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "小・中規模タンナーの設備更新（LED・空調・コンプレッサー）",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の皮革加工業で活用しやすい主力補助金。投資回収が短く、皮革業の規模感に合った制度。",
  },
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・送風機・ボイラー更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "中〜大規模タンナーの基幹設備更新で活用可能。排水処理設備のインバータ化も対象。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場の屋根面積を活用、24h排水処理ベースロードで自家消費率が高い皮革業と相性良好。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "重油ボイラー→電気・ヒートポンプ給湯転換",
    rate: "1/2、上限数億円",
    note: "皮革業の鞣し・染色工程の温水ボイラー電化と再エネ調達を組合せる場合に大型補助の対象。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "低圧／高圧の境界（50kW）、高圧／特別高圧の境界（2,000kW）に該当する場合契約区分の最適化を検討したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "排水処理設備のインバータ化・負荷追従制御の導入余地を評価したか",
  "屋根面積を活用した自家消費太陽光（500kW〜1MW）導入の試算を実施したか",
  "ヒートポンプ給湯転換に伴う契約電力増加を見積もったか",
  "デマンドコントローラー・力率改善設備の導入余地を確認したか",
  "原皮冷蔵保管庫の夏季電力管理の最適化を検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象規模（年間1,000万kWh以上等）に該当するか確認したか",
  "中小企業省エネ補助・SII省エネ補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "皮革業の電気代水準はどれくらいですか？", answer: "売上高比2〜6%、排水処理比率の高い工場で4〜8%が業界平均です。小規模タンナーで年600〜2,400万円、中規模タンナーで年900〜3,000万円、大規模皮革メーカーで年3,500〜9,000万円規模の電気代になります。" },
  { question: "皮革業の固定プランと市場連動プランどちらが向きますか？", answer: "排水処理設備が24時間連続稼働するため、市場高騰局面の影響が直撃する業種です。固定プラン（3〜5年）が向きやすく、2022〜2023年の高騰局面では市場連動継続事業者で月数十〜数百万円の追加負担が発生しました。中小規模事業者ほど固定プランのメリットが大きいです。" },
  { question: "排水処理設備の電気代を削減する方法はありますか？", answer: "排水処理のブロワー・撹拌機・ポンプをインバータ化＋負荷追従制御で20〜35%削減できます。24h稼働設備のためインバータ化効果が最大化しやすく、中規模タンナーで年100〜250万円削減、投資回収2〜3年（SII補助1/2活用で1.5〜2年）が現実的です。" },
  { question: "皮革業向けの省エネ補助金は何が活用しやすいですか？", answer: "中小企業省エネルギー設備等支援補助金（補助率2/3、従業員300名以下対象）が皮革業の規模感に最も合いやすい主力補助金です。中〜大規模タンナーは経産省SII省エネ補助金（補助率1/3〜1/2）、太陽光・蓄電池併設は需要家主導型PPA補助金、ボイラー電化は脱炭素先行地域・GX補助の組合せが定番です。" },
  { question: "自家消費型太陽光は皮革工場で投資回収できますか？", answer: "屋根面積3,000m²以上、排水処理24h稼働の工場は業種別で中位以上の相性。500kWで年55〜65万kWh発電、年500〜800万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。排水処理のベースロードで自家消費率80〜90%になりやすいです。" },
  { question: "ヒートポンプ給湯転換で電気代はどれくらい増えますか？", answer: "中規模タンナーで重油給湯→ヒートポンプ給湯転換時、電力使用量が年100〜250万kWh増加、契約電力が150〜400kW上振れする事例が多いです。脱炭素規制で転換は推奨されており、PPA補助金・GX補助金を組み合わせると投資回収7〜10年で実現可能です。" },
  { question: "ニッチ業界の皮革業は新電力交渉で不利ですか？", answer: "業界全体の購買力が限定的なため標準的な条件提示が中心ですが、5〜10社からの相見積取得、契約期間（3〜5年固定）と支払条件（月締翌月払い）の最適化、グループ会社・関連工場との一括契約で交渉力を高められます。地域特化型新電力との交渉も有効です。" },
  { question: "デマンドコントロールでどれだけ基本料金を下げられますか？", answer: "タイコ・染色機のバッチタイミング分散、排水処理ブロワーの段階起動でデマンドピーク10〜15%削減事例多数。中規模タンナー（契約kW 800）で年100〜200万円の基本料金削減、デマンドコントローラー（投資100〜300万円）の投資回収は1〜2年と短いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本皮革産業連合会", url: "https://jlia.or.jp/" },
  { name: "経済産業省 製造産業局（皮革産業室）", url: "https://www.meti.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function LeatherElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/leather-electricity-cost-review"
        datePublished="2026-05-18"
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
          <span className="text-slate-800">皮革業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            皮革業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            皮革業（タンナー・なめし加工・染色仕上げ）は、鞣し工程と排水処理設備の24時間連続稼働が事業の根幹となるニッチ業種です。事業者数の減少傾向の中で、燃料費調整額・再エネ賦課金の上昇、ヒートポンプ給湯への電化対応が利益率を直撃する経営課題となっています。本ページでは皮革業特有の電力負荷特性、業界平均水準、規模別事例、ニッチ業界向けの契約戦略、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-18" updatedAt="2026-05-18" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>皮革業の電力使用プロファイル（鞣し／染色／排水処理／給湯）</li>
              <li>業界平均の電気代水準（売上高比2〜8%）と1枚あたり単価</li>
              <li>燃料費調整額・再エネ賦課金・容量拠出金が当業種に与える影響</li>
              <li>規模別（小規模／中規模／大規模）の電気代と削減事例3件（Before/After）</li>
              <li>排水処理設備の24h稼働への対応とインバータ化費用対効果</li>
              <li>中小企業省エネ補助・SII・需要家主導型PPA・GX補助の組合せ活用</li>
              <li>皮革業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              皮革業の電力使用特性 — 鞣し・排水処理・給湯の3層構造
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              皮革業の電力使用は『鞣し工程（基幹）／排水処理（24h連続）／給湯・染色仕上げ（連続）』の3層で構成されます。鞣し工程と排水処理が電力消費の60〜75%を占めるため、これら基幹設備の電力プロファイルが契約見直しの起点となります。
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
              業界平均の電気代水準 — 売上高比2〜8%、牛革1枚6〜12 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              皮革業の電気代水準は事業形態（タンナー単体／染色仕上げ／総合加工）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本皮革産業連合会・経産省工業統計・省エネ事例集から整理。実値はなめし方式・原皮種別・仕上げグレードで1.5〜2倍ぶれます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              皮革業の主要な電気代上昇要因 — 燃料費・賦課金・容量拠出金・ニッチ業界の特殊性
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              皮革業の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              規模別の削減事例3件 — 小規模／中規模／大規模タンナーのBefore/After
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              皮革業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              業種横断のコスト構造比較は{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              、関連業種の事例は{" "}
              <Link href="/textile-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">繊維業の見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-reduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場の電気代削減</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              排水処理設備の24時間稼働と省エネ — ブロワー・撹拌機の最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              皮革業特有のコスト要因として、排水処理設備が24時間連続稼働する点があります。クロムなめし排水・有機物排水の処理は事業継続上不可欠で、停止できません。ブロワー・撹拌機・ポンプの最適化が省エネの中核となります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ブロワー（活性汚泥曝気）のインバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>DO（溶存酸素）連動制御で空気量を最適化</li>
                  <li>電力▲25〜35%（年100〜300万円削減）</li>
                  <li>SII補助1/2活用で投資回収 2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">撹拌機・ポンプの台数・回転制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>流入水量に応じた台数制御で電力▲15〜25%</li>
                  <li>回転数制御で更に効率化</li>
                  <li>投資回収 1〜3年（補助金活用で1〜2年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">廃水蒸発濃縮装置・スラッジ脱水</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蒸発濃縮で排水処理量▲30〜50%</li>
                  <li>廃熱再利用で電力消費▲10〜20%</li>
                  <li>SII補助1/2活用で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">排水処理槽の保温・断熱強化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>冬季の処理槽保温で熱損失▲30〜50%</li>
                  <li>活性汚泥菌の安定維持にも貢献</li>
                  <li>投資回収 1〜2年</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド管理の基本は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）の仕組み</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              皮革業のデマンド管理 — タイコ起動分散と排水処理制御
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              皮革業のデマンド管理は『タイコ・染色機のバッチタイミング分散』と『排水処理のインバータ化』が2大論点です。両者を同時最適化することで契約電力10〜18%削減が現実的に達成できます。
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
              ニッチ業界ゆえの契約交渉戦略 — 小規模事業者の見直しポイント
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              皮革業は事業者数が少なく、業界全体の購買力が限定的です。新電力からも「ニッチ業界向け」という認識で標準的な条件しか提示されにくいため、相見積による交渉が特に重要となります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>排水処理24h稼働で価格変動の影響が直撃</li>
                  <li>原皮価格・薬剤費上昇局面で電力コスト固定化のメリット大</li>
                  <li>製品価格への即時転嫁が困難（受注生産・OEM中心）</li>
                  <li>事業規模が小さく予算予測の安定性が経営に不可欠</li>
                  <li>ヒートポンプ給湯転換で固定単価の重要性が増す</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ニッチ業界の交渉ポイント</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>5〜10社からの相見積取得が必須</li>
                  <li>3〜5年固定契約で総需要を提示し交渉力UP</li>
                  <li>地域特化型新電力との交渉</li>
                  <li>業界団体経由のグループ契約検討</li>
                  <li>支払条件（月締翌月払い等）の最適化</li>
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
              補助金活用（業種別） — 中小企業省エネ・SII・PPA・GX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              皮革業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。中小規模事業者には中小企業省エネ補助（補助率2/3）が最も使いやすい制度です。
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
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              皮革業に合った契約見直しチェックリスト（12項目）
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
              、契約更新3か月前の準備は{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社皮革工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              皮革業は排水処理24h稼働・ヒートポンプ給湯転換・ニッチ業界の交渉力不足の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>排水処理設備のインバータ化後の削減シナリオを比較する</li>
              <li>事例で示した12〜14%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-18"
            />
            <GlossaryLinks currentSlug="leather-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/textile-electricity-cost-review", title: "繊維業の電気料金見直し", description: "染色・連続稼働業種としての類似事例。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "排水処理など連続稼働設備の契約見直し。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/glass-ceramics-electricity-cost-review", title: "ガラス・窯業の電気料金見直し", description: "連続稼働の加工業の類似事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "中小規模事業者が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "ピーク削減とBCP強化の蓄電池活用。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根面積を活用した太陽光の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい工場の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・空調更新・コンプレッサーで活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/small-business-electricity-cost-saving", title: "中小事業者の電気代削減", description: "小規模事業者向けの実践的削減ステップ。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社の皮革工場条件でリスクを確認する"
            description="鞣し設備・排水処理設備の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。ヒートポンプ給湯転換後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
