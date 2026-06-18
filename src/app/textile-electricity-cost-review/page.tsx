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
  "繊維業の電気料金見直しポイント｜染色工程・紡織機・縫製機の契約最適化";
const pageDescription =
  "繊維業（紡績・織布・染色・縫製）の電気料金見直しを解説。染色工程の温水・蒸気使用、紡織機・縫製機の負荷特性、季節商品の需要変動、工場vs縫製所の規模別差、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "繊維工場 電気料金 見直し",
    "染色工場 電気代 削減",
    "紡績 紡織 電力契約",
    "縫製工場 電気料金",
    "アパレル 工場 電力コスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/textile-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/textile-electricity-cost-review",
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
    label: "染色工程（温水・蒸気・乾燥）",
    detail:
      "染色は繊維業の電力消費の中核。染色機（液流染色・ジッガー・コールドパッドバッチ）、蒸気ボイラー補機（電気式ボイラーや給水ポンプ）、乾燥機（テンター・ヤンキードラム）、排水処理設備が連続稼働する。中規模染色工場の電力使用量の45〜60%を占める基幹工程。",
  },
  {
    label: "紡織機・縫製機（生産ライン主力）",
    detail:
      "紡績機（リング精紡機・オープンエンド紡績機）、織機（エアジェット・ウォータージェット・レピア）、編機（丸編・横編・経編）、縫製機の動力。1台あたり数kW〜50kWの動力負荷で、工場全体の電力使用量の20〜35%を占める。",
  },
  {
    label: "空調・除湿（恒温恒湿管理）",
    detail:
      "繊維加工は温度・湿度管理が品質を左右するため、紡績・織布工程では恒温恒湿空調が24時間連続稼働。中規模工場で200〜800kWの常時負荷。夏季と冬季の空調負荷差が大きく契約電力に影響する。",
  },
  {
    label: "コンプレッサー（エアジェット織機向け）",
    detail:
      "エアジェット織機・空気搬送・空圧シリンダーで大量の圧縮空気を消費。100〜500kWの大型コンプレッサーが工場規模に応じて配置される。インバータ化・台数制御の効果が大きい設備。",
  },
  {
    label: "照明・排水処理・付帯設備",
    detail:
      "工場照明（24時間稼働工場で常時点灯）、染色排水処理設備（中和・凝集沈殿・活性汚泥）、廃水蒸発濃縮装置などが年間消費電力の10〜15%を占める。LED化・処理設備のインバータ化が省エネの定番。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本繊維産業連盟の統計によれば、繊維業の電気料金は売上高の3〜8%（染色比率の高い工場で6〜10%）に達する。製造原価に占める比率は5〜12%。化学繊維（合繊）工場では更に高く、原料費に次ぐ第2のコスト要素となる。",
  },
  {
    label: "1製品単位あたりの電力使用量",
    detail:
      "綿糸1kgの紡績で1.2〜2.0 kWh、織布1m²で0.8〜1.5 kWh、染色1kgで2.5〜5.0 kWh、縫製1着で0.3〜0.8 kWh。染色工程が最も電力集約的で、繊維業全体の電力消費の中核を成す。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模縫製工場（従業員30〜100名）で年間30〜100万 kWh、中規模紡織染色工場（150〜500名）で年間400〜2,000万 kWh、大規模合繊メーカー（1,000名超）で年間5,000〜30,000万 kWh。高圧・特別高圧契約が中心。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の連続稼働ベースへの影響",
    detail:
      "染色工場は24時間連続稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月100万kWh）で月100万円の差。年間1,200万円規模のインパクト。化石燃料連動の燃料費調整額は2022年以降4〜5円/kWhレンジで推移し、繊維業の電気代上振れの最大要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間1,200万kWh使用の中規模染色工場で年5,016万円の負担、5年で2.51億円。減免制度（年間1,000万kWh以上等）の対象規模だが申請要件は厳格。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、繊維業のような大量電力消費業種に大きな影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
  {
    label: "季節商品需要変動による稼働変動",
    detail:
      "アパレル向け繊維製品は春夏商品・秋冬商品の生産サイクルがあり、ピーク期と閑散期で電力使用量が1.5〜2倍変動する。契約電力をピーク期に合わせると年間平均で過剰契約となるため、契約区分の選択が重要。",
  },
  {
    label: "蒸気ボイラー併用と電気ボイラー切替",
    detail:
      "従来は重油・LNG蒸気ボイラーが主流だが、脱炭素規制で電気ボイラー転換が増加。電化により電力使用量が2〜3倍になる工場もあり、契約電力上振れが事業課題となる。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模縫製工場・編立工場（従業員30〜80名）",
    profile: "OEM縫製・地場ニッターなど／低圧〜高圧 50〜200kW／年間 30〜100万 kWh",
    annualCost: "年間電気代 900〜3,000 万円",
    note: "新電力切替・固定3年契約・LED化・空調更新で年8〜14%削減事例。市場連動からの離脱が最重要論点。SII補助金1/2活用で投資回収3〜5年。",
  },
  {
    size: "中規模紡織染色工場（従業員150〜500名）",
    profile: "中堅紡織染色メーカー／高圧 800〜2,500kW／年間 800〜2,500万 kWh",
    annualCost: "年間電気代 2.0〜7.5 億円",
    note: "染色工程の温水・蒸気使用が電力消費の中核。固定5年契約＋自家消費太陽光（1〜3MW）＋廃熱回収＋空調最適化で年10〜18%削減事例。",
  },
  {
    size: "大規模合繊メーカー（従業員1,000名超）",
    profile: "合繊・産業資材総合メーカー／特別高圧 5,000〜15,000kW／年間 5,000〜20,000万 kWh",
    annualCost: "年間電気代 10〜50 億円",
    note: "1%の単価改善でも年1,000〜5,000万円のインパクト。長期固定（5〜10年）契約＋大規模太陽光＋コージェネ併設が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅編立工場の年間13%削減（Before/After）",
    before: "北関東のニット編立メーカーA社の工場（高圧 180kW、年間 80万 kWh、年間電気代 2,400万円）。市場連動プラン継続、LED未更新、コンプレッサーの台数制御なし、空調インバータなし。",
    after: "新電力切替（固定3年）／全照明LED化（投資 220万円）／コンプレッサー台数制御＋インバータ化／空調インバータ化／力率改善コンデンサ更新。",
    result: "年間電気代 2,400万円 → 2,090万円（▲13%、▲310万円）／契約 kW 180→160／投資回収 1.5年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模染色工場の年間17%削減",
    before: "北陸地区の染色メーカーB社の中規模工場（高圧 1,800kW、年間 1,500万 kWh、年間電気代 4.5億円）。市場連動プランで2022〜2023年に月最大2,000万円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 2.0 MW 導入（屋根11,000 m²）／染色排水処理設備の蒸発濃縮装置（廃熱利用）導入／蒸気ボイラー→電気＋ヒートポンプ転換／需要家主導型PPA補助金活用。",
    result: "年間電気代 4.5億円 → 3.74億円（▲17%、▲7,650万円）／契約 kW 1,800→1,500／投資回収 6.5年（補助金後 4.5年）",
  },
  {
    title: "事例3：大規模合繊メーカー基幹工場の年間1.8億円削減",
    before: "国内合繊メーカーC社の基幹工場（特別高圧 8,000kW、年間 6,500万 kWh、年間電気代 16億円）。長期固定契約継続も電気ボイラー転換で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 4 MW＋蓄電池 5 MWh／コージェネ 2MW増設／紡織工程の空調インバータ化／DR（デマンドレスポンス）契約締結／需要家主導型PPA。",
    result: "年間電気代 16億円 → 14.2億円（▲11%、▲1.8億円）／契約 kW 8,000→7,200／投資回収 7年（補助金後 5.5年）／CO₂削減 約14,000 t/年",
  },
];

const demandManagement = [
  {
    label: "染色工程のバッチタイミング分散",
    detail:
      "複数台の染色機を運用する場合、染色サイクル（昇温・洗浄・脱水・乾燥）の開始タイミングを30分〜1時間ずらすことでデマンドピークを抑制。中規模工場の契約電力10〜15%削減事例。",
  },
  {
    label: "紡織機の起動シフト・夜間生産",
    detail:
      "紡織機・編機の同時起動を避け、ライン別に時間差で起動。3交代制工場では夜勤シフト時刻の調整で5〜10%のピーク削減が可能。電力単価安価な深夜時間帯への生産シフトも有効。",
  },
  {
    label: "コンプレッサー・空調の負荷追従",
    detail:
      "エアジェット織機向けコンプレッサー、紡織工程の恒温恒湿空調はインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
  {
    label: "季節閑散期の契約電力見直し",
    detail:
      "アパレル向け繊維製品の閑散期（1〜2月、7〜8月）には実稼働が大幅減少。1年契約から短期柔軟契約への切替や、季別契約・ピーク需要時の応答型契約の検討余地がある。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・送風機・染色機更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "繊維業のような連続稼働業種で採択率が高い主力補助金。染色機・コンプレッサー・空調更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場の屋根面積が大きく、24h稼働で自家消費率が高い繊維業と相性良好。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "重油・LNGボイラー→電気・ヒートポンプボイラー転換",
    rate: "1/2、上限数億円",
    note: "蒸気ボイラーの電化と再エネ調達を組合せる繊維業で大型補助の対象になり得る。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "縫製業・編立業など中小規模工場の設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の縫製・編立工場で活用可能。LED・空調更新で採択率高い。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高圧／特別高圧の境界（2,000 kW）に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "季節商品の閑散期に対応した契約見直し（季別・短期契約）を検討したか",
  "屋根面積を活用した自家消費太陽光（1〜3MW）導入の試算を実施したか",
  "電気ボイラー転換に伴う契約電力増加を見積もったか",
  "デマンドコントローラー・力率改善設備の導入余地を確認したか",
  "染色工程の廃熱・蒸発濃縮装置による省エネを評価したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上等）の対象に該当するか",
  "SII省エネ補助金・需要家主導型PPA補助金の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "繊維業の電気代水準はどれくらいですか？", answer: "売上高比3〜8%、染色比率の高い工場で6〜10%、製造原価比5〜12%が業界平均です。中規模紡織染色工場で年2〜7.5億円、大規模合繊メーカーで年10〜50億円規模の電気代になります。" },
  { question: "染色工場と縫製工場ではどちらが電気代インパクトが大きいですか？", answer: "染色工場が圧倒的に大きく、同規模の縫製工場と比べて単位面積あたりで5〜10倍の電気代になります。染色は温水・蒸気・乾燥工程の連続稼働があり、24時間ベースロードが大きいためです。縫製工場は8〜10時間稼働が主で、電気代インパクトは中程度です。" },
  { question: "繊維業の固定プランと市場連動プランどちらが向きますか？", answer: "染色工場・紡織工場は24時間連続稼働でベースロードが大きく、固定プランが向きやすいです。縫製工場のような昼間稼働中心の事業は市場連動も検討可能ですが、夏冬の高騰リスクが大きいため固定プランを選ぶ事例が増えています。" },
  { question: "電気ボイラー転換で電気代はどれくらい増えますか？", answer: "中規模染色工場で重油ボイラー→電気ヒートポンプボイラー転換時、電力使用量が年200〜500万kWh増加、契約電力が300〜800kW上振れする事例が多いです。脱炭素規制で転換は不可避ですが、PPA補助金・GX補助金を組み合わせると投資回収7〜10年で実現可能です。" },
  { question: "繊維業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（補助率1/3〜1/2、設備更新主体）、需要家主導型PPA補助金（太陽光・蓄電池併設）、脱炭素先行地域・GX補助（ボイラー電化）、中小企業省エネルギー設備等支援補助金（縫製業向け）の4本柱。複数組合せで採択率が高くなります。" },
  { question: "季節閑散期の電気代を抑えるにはどうすればよいですか？", answer: "アパレル向け繊維製品の閑散期（1〜2月、7〜8月）には実稼働が大幅減少するため、1年契約から短期柔軟契約への切替や、季別契約・ピーク需要時の応答型契約の検討余地があります。閑散期のみ生産集約・他工場との分業も検討対象。" },
  { question: "自家消費型太陽光は繊維工場で投資回収できますか？", answer: "屋根面積5,000m²以上、連続稼働の染色・紡織工場は業種別で上位の相性。1 MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。" },
  { question: "コンプレッサーのインバータ化でどれだけ電気代を下げられますか？", answer: "エアジェット織機向けの大型コンプレッサー（100〜500kW）をインバータ化・台数制御すると、電力使用量▲20〜35%削減事例が多数あります。中規模工場で年200〜500万円の電気代削減、投資回収2〜3年（SII補助1/2活用で1.5〜2年）が現実的です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本繊維産業連盟（業界統計）", url: "https://www.jtf-net.com/" },
  { name: "日本染色協会", url: "https://www.dyeing.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function TextileElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/textile-electricity-cost-review"
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
          <span className="text-slate-800">繊維業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            繊維業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            繊維業（紡績・織布・染色・縫製）は、染色工程の温水・蒸気使用、紡織機・編機の動力消費、恒温恒湿空調が組み合わさる典型的なエネルギー多消費業種です。脱炭素規制によるボイラー電化、季節商品の需要変動、市場価格高騰リスクが事業競争力を直接左右する時代に入りました。本ページでは繊維業特有の電力負荷特性、業界平均水準、規模別事例、電化対応、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-18" updatedAt="2026-05-18" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>繊維業の電力使用プロファイル（染色／紡織／空調／コンプレッサー）</li>
              <li>業界平均の電気代水準（売上高比3〜10%）と1製品単位の単価</li>
              <li>燃料費調整額・再エネ賦課金・容量拠出金が当業種に与える影響</li>
              <li>規模別（縫製／紡織染色／合繊）の電気代と削減事例3件（Before/After）</li>
              <li>染色工程の温水・蒸気管理と電化対応の費用対効果</li>
              <li>SII・需要家主導型PPA・GX補助・中小企業補助の組合せ活用</li>
              <li>繊維業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              繊維業の電力使用特性 — 染色・紡織・空調・コンプレッサーの4層構造
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              繊維業の電力使用は『染色工程（基幹）／紡織機・縫製機（生産ライン）／空調・除湿（恒温恒湿）／コンプレッサー（エアジェット）』の4層で構成されます。染色工程が電力消費の45〜60%を占めるため、染色設備の電力プロファイルが契約見直しの起点となります。
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
              業界平均の電気代水準 — 売上高比3〜10%、染色1kg 2.5〜5.0 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              繊維業の電気代水準は工程種別（紡績・織布・染色・縫製）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本繊維産業連盟・日本染色協会・経産省工業統計・省エネ事例集から整理。実値は工程比率・連続度合いで1.5〜2倍ぶれます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              繊維業の主要な電気代上昇要因 — 燃料費・賦課金・容量拠出金・電化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              繊維業の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              規模別の削減事例3件 — 縫製80名／紡織染色500名／合繊1,000名超
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              繊維業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-reduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場の電気代削減</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              季節商品の需要変動 — 春夏・秋冬サイクルの契約最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              アパレル向け繊維製品は春夏・秋冬の生産サイクルがあり、ピーク期と閑散期で電力使用量が1.5〜2倍変動します。契約電力をピーク期に合わせると年間平均で過剰契約となるため、契約区分の選択が重要です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ピーク期（10〜12月、4〜6月）の特徴</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>春夏物・秋冬物の納期対応で24h稼働増</li>
                  <li>染色・縫製ラインのフル稼働で電力ピーク発生</li>
                  <li>契約電力（kW）のデマンド超過リスク</li>
                  <li>夏季は空調負荷も同時最大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">閑散期（1〜2月、7〜8月）の特徴</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>稼働率50〜70%、電力使用量が大幅減少</li>
                  <li>契約電力に対する稼働率低下＝基本料金過剰</li>
                  <li>閑散期のメンテナンス集中で品質改善も可能</li>
                  <li>他工場との分業・生産集約の検討余地</li>
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
              繊維業のデマンド管理 — 染色機タイミング・コンプレッサー制御
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              繊維業のデマンド管理は『染色機のバッチタイミング分散』と『紡織機・コンプレッサーの起動シフト』が2大論点です。両者を同時最適化することで契約電力10〜20%削減が現実的に達成できます。
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
              燃料費調整・市場連動プランの影響 — 24h稼働ゆえの上振れ感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              染色工場・紡織工場は24時間連続稼働でベースロードが大きく、市場価格高騰局面での影響額が事業収支に直撃します。燃料費調整額の上限有無、市場連動プランの可否は経営判断レベルの論点です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>染色工場は24時間ベースロード大、価格変動の影響額が桁違い</li>
                  <li>夏冬のピーク期に使用量増と市場高値が重なる構造</li>
                  <li>アパレル発注先への即時価格転嫁が困難</li>
                  <li>電気ボイラー転換で固定単価の重要性が増す</li>
                  <li>原料費・人件費上昇局面で電力コスト固定化のメリット大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬の市場高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが甚大</li>
                  <li>顧客（アパレル）向け価格に電力コスト上昇を即時転嫁できない</li>
                  <li>電力市場の常時監視と柔軟な対応体制が必要</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万円の追加負担</li>
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
              脱炭素対応 — 蒸気ボイラー電化と再エネ調達
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              繊維業（特に染色工程）は重油・LNG蒸気ボイラーが従来の主力熱源でしたが、脱炭素規制で電気ヒートポンプボイラーへの転換が加速しています。電化により電力使用量が2〜3倍になる工場もあり、契約電力上振れと電源調達の両面から経営課題となります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電気ヒートポンプボイラー転換</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>COP3〜5で重油ボイラーの2〜3倍効率</li>
                  <li>GX補助1/2活用で投資回収7〜10年</li>
                  <li>電力使用量増加に対する電源調達設計が重要</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">廃熱回収・蒸発濃縮装置</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>染色排水処理の蒸発濃縮装置で廃熱再利用</li>
                  <li>蒸気使用量▲30〜50%、電力▲10〜20%</li>
                  <li>SII補助1/2活用で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（1〜3 MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>1 MWで年110〜130万kWh発電（年1,000〜1,500万円削減）</li>
                  <li>連続稼働で自家消費率90%超</li>
                  <li>投資回収 7〜10年（補助金後 5〜7年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">オフサイトPPA・グリーン電力調達</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>大手アパレル顧客向け再エネ100%対応</li>
                  <li>長期固定単価で価格変動リスク排除</li>
                  <li>サプライチェーン排出削減（Scope3）に貢献</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自家消費太陽光の費用対効果は{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・GX補助・中小企業補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              繊維業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。複数補助金の組合せ申請（SII＋PPA＋GX）で採択率が高くなる傾向。
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
              繊維業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社繊維工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              繊維業は染色工程の連続稼働・電気ボイラー転換・季節需要変動の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>電気ボイラー転換後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した11〜17%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="textile-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性と契約見直しの考え方。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/glass-ceramics-electricity-cost-review", title: "ガラス・窯業の電気料金見直し", description: "連続稼働・大量電力消費業種としての類似事例。" },
              { href: "/leather-electricity-cost-review", title: "皮革業の電気料金見直し", description: "排水処理を伴う加工業の類似事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "大使用量・24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "ピーク削減とBCP強化の蓄電池活用。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根面積大の連続稼働工場の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい工場の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・空調更新・コンプレッサーで活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大の繊維業に直結するリスク。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社の繊維工場条件でリスクを確認する"
            description="染色機・紡織機・縫製機の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。電気ボイラー転換後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
