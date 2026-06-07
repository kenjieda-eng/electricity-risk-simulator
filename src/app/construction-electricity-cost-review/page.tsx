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
  "建設業の電気料金見直しポイント｜現場仮設電源と本社・支店契約の最適化";
const pageDescription =
  "建設業（ゼネコン・サブコン）の電気料金見直しを解説。建設現場の高圧仮設電源、本社・支店・資機材センターの電力契約、重機電動化トレンド、建設DXの電力負荷、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "建設業 電気料金 見直し",
    "建設現場 仮設電源 電気代",
    "ゼネコン 電力契約",
    "建設会社 電気代 削減",
    "重機 電動化 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/construction-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/construction-electricity-cost-review",
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
    label: "建設現場の高圧仮設電源（一時契約）",
    detail:
      "中規模以上の工事現場で必要な高圧仮設受電（150〜500 kW）。タワークレーン・コンクリートポンプ車・溶接機・現場照明・仮設事務所空調の合計負荷。工期6〜36ヶ月で契約が完結し、本契約と異なる『仮設電気料金』体系が適用される。",
  },
  {
    label: "本社・支店オフィスの常設電力",
    detail:
      "ゼネコン本社（数千人規模）で年間100〜400万kWh、地方支店（数十〜数百人）で年間20〜80万kWhが目安。執務エリア空調・照明・サーバー室の連続稼働が中心で、業種別では中位の負荷水準。",
  },
  {
    label: "資機材センター・倉庫の電力",
    detail:
      "資機材保管倉庫、プレキャストコンクリート（PC）工場、鉄筋加工場など。中規模で年間100〜500万kWh、24時間稼働の溶接・加工設備があれば更に大きくなる。建設業のサプライチェーン上の固定電力負荷。",
  },
  {
    label: "建設DX・BIM/CIMサーバー・現場IoT",
    detail:
      "BIM/CIMサーバー、3Dスキャナ、ドローン管制、現場IoT機器の充電・通信。本社・支店・現場の3拠点で連動稼働するため、契約見直しの新しい論点。年間電力消費は中規模ゼネコンで10〜30万kWh規模。",
  },
  {
    label: "重機電動化（EV建機・蓄電池）の充電",
    detail:
      "2025年以降、ミニショベル・電動コンクリート打設機・電動フォークリフトの導入が拡大。1台あたり年間2,000〜8,000 kWhの電力需要を新規発生。現場仮設電源の契約電力上振れ要因。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準（ゼネコン・サブコン）",
    detail:
      "日本建設業連合会・国交省統計によれば、建設業の電気料金は売上高の0.3〜0.8%（ゼネコン）、PC工場・鉄筋加工場併設では1.5〜3.0%。本体事業（請負工事）と固定資産（オフィス・工場）の二重コスト構造を持つ。",
  },
  {
    label: "現場仮設電源の電気代単価",
    detail:
      "仮設電気料金は本契約より15〜30%割高。基本料金単価1,700〜2,200円/kW・月、電力量料金18〜28円/kWh が目安。工期長期化・規模拡大で総額が膨らみやすく、工事原価への影響が無視できない。",
  },
  {
    label: "現場規模別の月間電気代",
    detail:
      "小規模現場（マンション5階建て、契約100kW）月20〜45万円。中規模現場（オフィスビル10階建て、契約250kW）月60〜130万円。大規模現場（高層ビル40階建て、契約500kW超）月200〜500万円。",
  },
];

const costFactors = [
  {
    label: "仮設電気の単価上昇（基本料金高め）",
    detail:
      "仮設電気は短期契約のため基本料金単価が常設契約より15〜30%高い。中規模現場（契約250kW）で月15〜35万円の差額。工期24ヶ月で年間180〜420万円の上振れ。本契約への切替（工期12ヶ月以上）で年100〜200万円削減事例あり。",
  },
  {
    label: "燃料費調整額の急騰",
    detail:
      "本社・支店・資機材センターは中規模使用量（月10〜50万kWh）。燃料費調整額1円/kWhの変動で月10〜50万円の差。建設現場では工事原価に直接乗るため、見積精度に影響する。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。本社（年200万kWh）で年700〜900万円、ゼネコン全社（事業所合計）で年5,000万円〜2億円の負担。",
  },
  {
    label: "重機電動化による契約電力上振れ",
    detail:
      "電動建機・電動ミニショベル・電動コンクリート打設機の導入で仮設電源の契約電力が10〜30%上振れ。充電タイミング集中で更に増加。電動化前提の契約設計が必要。",
  },
  {
    label: "建設DX（BIM・IoT）による情報システム電力増",
    detail:
      "BIM/CIMサーバー、現場IoT、ドローン管制システムの電力消費が新規に発生。本社・現場の双方で電力負荷が増加し、契約電力見直しの論点となる。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模建設会社（地場工務店、年商10〜30億円）",
    profile: "本社事務所＋資機材倉庫1〜2拠点／低圧・高圧50〜150 kW／年間 10〜30 万 kWh",
    annualCost: "年間電気代 250〜750 万円（事業所合計）",
    note: "新電力切替・固定3年契約・LED化で年8〜15%削減事例。仮設電源は工期2〜6ヶ月の短期で本契約への切替メリットは限定的。",
  },
  {
    size: "中堅ゼネコン（年商100〜500億円、施工件数30〜100件/年）",
    profile: "本社＋支店3〜10拠点＋資機材センター／高圧 200〜800 kW／年間 100〜400 万 kWh",
    annualCost: "年間電気代 2,500万〜1.0 億円（事業所合計）",
    note: "拠点バンドル契約で5〜15%単価優遇。仮設電源も常設電気と一括契約で年300〜800万円削減事例。BIM/CIMサーバー集約化と空調更新で更に削減。",
  },
  {
    size: "大手ゼネコン（年商1,000億円超、施工件数100件超/年）",
    profile: "本社＋支店20拠点超＋PC工場・鉄筋加工場／特別高圧 1,500〜4,000 kW／年間 800〜3,000 万 kWh",
    annualCost: "年間電気代 2〜7.5 億円（全社合計）",
    note: "全社契約集約・自家消費太陽光・蓄電池・電動建機充電統合管理で年12〜20%削減。需要家主導型PPA活用で投資回収6〜9年。",
  },
];

const caseStudies = [
  {
    title: "事例1：地場工務店2拠点の年間14%削減（Before/After）",
    before: "地場工務店A社の本社（年20万kWh）＋資機材倉庫（年8万kWh）（合計28万kWh、年間電気代 700万円）。地域電力会社の従量電灯B・C混在、LED未更新。",
    after: "新電力切替（固定3年）／本社・倉庫全照明LED化（投資 280万円）／空調更新／契約区分見直し（高圧低圧の最適化）。",
    result: "年間電気代 700万円 → 602万円（▲14%、▲98万円）／LED投資回収 2.9年／3年累計削減 294万円",
  },
  {
    title: "事例2：中堅ゼネコン8拠点の年間18%削減",
    before: "中堅ゼネコンB社の本社＋支店7拠点＋資機材センター（合計年250万kWh、年間電気代 6,500万円）。各拠点個別契約、本社のみ新電力切替済、仮設電源は工事毎に従来電力。",
    after: "全8拠点バンドル契約／固定5年プラン／本社太陽光500 kW＋蓄電池導入／仮設電源も同電力会社一括契約／BIM/CIMサーバー仮想化集約。",
    result: "年間電気代 6,500万円 → 5,330万円（▲18%、▲1,170万円）／投資回収 4.5年（補助金活用）／5年累計削減 5,850万円",
  },
  {
    title: "事例3：大手ゼネコン全社25拠点の年間1.8億円削減",
    before: "大手ゼネコンC社の本社＋支店20拠点＋PC工場2＋鉄筋加工場3（合計年1,800万kWh、年間電気代 4.5億円）。拠点ごと個別契約、自家消費太陽光なし、電動建機200台導入予定。",
    after: "全社契約集約（特別高圧含む）／固定7年プラン／PC工場・鉄筋加工場に自家消費太陽光合計3 MW＋蓄電池4 MWh／電動建機充電タイミング全社統合管理／需要家主導型PPA補助金活用。",
    result: "年間電気代 4.5億円 → 3.6億円（▲20%、▲9,000万円）／全社契約集約効果 ▲9,000万円／合計年1.8億円削減／投資回収 6年（補助金後 4.5年）／CO₂削減 約8,500 t/年",
  },
];

const demandManagement = [
  {
    label: "現場仮設電源の負荷分散設計",
    detail:
      "タワークレーン・コンクリートポンプ車・溶接機の同時稼働を避けて段階起動。仮設契約電力20〜30%削減事例多数。工程表と電力計画の連動が鍵。",
  },
  {
    label: "本社・支店のデマンドコントローラー",
    detail:
      "執務時間外の空調自動制御、サーバー室空調最適化、エレベータ運転制御で契約電力10〜15%削減。投資100〜300万円で1〜2年回収。",
  },
  {
    label: "資機材センターのピーク管理",
    detail:
      "PC工場・鉄筋加工場の生産スケジュール調整、24時間稼働化（夜間電力活用）でデマンドピーク回避。生産計画と電力計画の同時最適化。",
  },
  {
    label: "電動建機充電タイミングの夜間シフト",
    detail:
      "電動ミニショベル・電動フォークリフトの充電を夜間（22〜6時）に集中。現場昼間負荷ピークを回避し、契約電力上振れを50〜70%抑制。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "本社・支店・PC工場のLED・空調・コンプレッサー更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "建設業の事業所省エネ投資の主力。本社・支店改修と合わせて申請しやすい。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "PC工場・鉄筋加工場の広い屋根を活用しやすい。本社ビル屋上にも設置可能。",
  },
  {
    name: "建設DX・GX促進補助（国交省・経産省）",
    target: "BIM/CIM導入、ICT建機、電動建機",
    rate: "1/3〜1/2、上限数千万円",
    note: "2025年度以降建設業の脱炭素化補助が拡大。電動建機・電動運搬機械が対象。",
  },
  {
    name: "ZEB（ネット・ゼロ・エネルギー・ビル）補助",
    target: "本社・支店ビルのZEB化改修・新築",
    rate: "1/2〜2/3、上限5〜10億円",
    note: "本社ビル改修時に活用しやすい。ZEB認証取得で企業ブランディング効果も。",
  },
];

const checklistItems = [
  "本社・支店・資機材センター・PC工場の契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "拠点ごとの契約条件（契約電力・使用量・契約期間・燃料費調整額条件）を一覧化したか",
  "拠点バンドル契約（5〜10拠点同時）でボリュームディスカウントを交渉したか",
  "仮設電気と本契約電気の単価差を把握し、長期工期は本契約切替を検討したか",
  "現場仮設電源の契約電力が工程ピーク負荷に対して妥当か（過剰契約していないか）",
  "電動建機導入予定が現場・本社契約電力に与える影響を見積もったか",
  "本社・支店ビルのZEB化改修と電気契約見直しを同期させたか",
  "PC工場・鉄筋加工場の屋根への自家消費太陽光適性（耐荷重・方位）を確認したか",
  "BIM/CIMサーバーの仮想化集約による電力削減余地を評価したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "燃料費調整額の上限有無を全拠点契約書で確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "建設業の電気代水準はどれくらいですか？", answer: "ゼネコン本体で売上高の0.3〜0.8%、PC工場・鉄筋加工場併設では1.5〜3.0%が目安です。年間電気代は地場工務店で250〜750万円、中堅ゼネコン全社で2,500万〜1.0億円、大手ゼネコン全社で2〜7.5億円規模になります。" },
  { question: "現場仮設電源は本契約電気と比べてどれくらい高いですか？", answer: "仮設電気料金は基本料金単価が15〜30%高く、電力量料金も若干高めです。中規模現場（契約250kW）で月15〜35万円の差額、工期24ヶ月で年間180〜420万円の上振れになります。長期工事は本契約への切替で削減可能です。" },
  { question: "建設業の固定プランと市場連動プランどちらが向きますか？", answer: "本社・支店の常設電力は中規模使用量で安定稼働するため、市場連動も選択肢となりますが、燃料費調整額の不確実性回避と工事原価への組込み（固定単価で見積に乗せる）の観点から、固定プランが向きやすいです。仮設電源は工期短期の場合のみ市場連動の選択余地があります。" },
  { question: "電動建機導入で電気代はどれくらい増えますか？", answer: "電動ミニショベル1台で年2,000〜4,000 kWh、電動フォークリフトで年1,500〜3,000 kWhの電力消費。100台導入で年20〜40万kWh、電気代換算で年500〜1,200万円の上振れ。現場仮設電源の契約電力10〜30%増の影響もあり、契約設計の見直しが必須です。" },
  { question: "建設業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（本社・PC工場の設備更新、補助率1/3〜1/2）、需要家主導型PPA補助金（屋根設置太陽光・蓄電池）、建設DX・GX促進補助（電動建機・BIM/CIM、2025年度拡大）、ZEB補助（本社改修・新築）の4本柱。本社改修＋PC工場太陽光＋電動建機を同時申請すると採択率が高い傾向。" },
  { question: "拠点バンドル契約はどれくらいの規模で交渉できますか？", answer: "年間電力使用量100万kWh以上（中堅ゼネコン規模）で5〜10%の単価優遇、500万kWh以上（大手ゼネコン規模）で10〜15%の優遇が現実的です。本社・支店・資機材センター・PC工場を含めた一括見積で交渉します。" },
  { question: "PC工場・鉄筋加工場の自家消費太陽光は投資回収できますか？", answer: "屋根面積3,000 m²以上、日中稼働ベースロード大きい工場は業種別で上位の相性。1 MW級で年1,000〜1,500万円の削減、投資回収8〜12年（補助金後6〜9年）が目安です。電動建機充電と組み合わせると自家消費率が向上します。" },
  { question: "建設業のBCP電源確保はどう設計すべきですか？", answer: "本社ビルは非常用発電機＋蓄電池併用が標準。PC工場・鉄筋加工場は工程一時停止可能なため非常用発電機メインで対応可能。資機材センターは一時保管のみのため最小限の電源で運用継続可能。災害時の現場復旧電源として可搬型蓄電池の整備も進んでいます。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "国土交通省（建設業統計・建設DX動向）", url: "https://www.mlit.go.jp/" },
  { name: "一般社団法人 日本建設業連合会", url: "https://www.nikkenren.com/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function ConstructionElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/construction-electricity-cost-review"
        datePublished="2026-05-17"
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
          <span className="text-slate-800">建設業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            建設業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            建設業（ゼネコン・サブコン・専門工事会社）の電力契約は『本社・支店オフィス／資機材センター・PC工場／建設現場の高圧仮設電源』の3層構造を持ちます。2025年以降の電動建機導入、建設DX（BIM/CIM）、ZEB化などの新潮流により電力負荷が変化しており、拠点バンドル契約と仮設電源の最適化が経営層判断の論点となっています。本ページでは建設業特有の電力構造、業界平均、規模別事例、補助金、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-17" updatedAt="2026-05-17" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>建設業の電力使用プロファイル（本社／資機材／現場仮設の3層）</li>
              <li>業界平均の電気代水準（売上高比0.3〜3.0%）と現場月額単価</li>
              <li>仮設電気と本契約電気の単価差と切替判断基準</li>
              <li>規模別（地場／中堅／大手）の電気代と削減事例3件（Before/After）</li>
              <li>電動建機・BIM/CIMサーバー・建設DXの新規負荷と対応策</li>
              <li>SII・PPA・建設DX・ZEB補助金の組合せ活用</li>
              <li>建設業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              建設業の電力使用特性 — 本社・資機材・現場仮設の3層構造
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建設業の電力使用は『本社・支店の常設電力（中規模・連続）／資機材センター・PC工場の生産電力（大規模・連続）／建設現場の高圧仮設電源（中〜大規模・期間限定）』の3層構造を持ちます。それぞれ契約形態と単価が異なるため、層別最適化が削減の起点になります。
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
              業界平均の電気代水準 — 売上高比0.3〜3.0%、現場月額単位
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建設業の電気代水準は事業形態（ゼネコン単体／PC工場・鉄筋加工場併設）と現場規模（小・中・大）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本建設業連合会・国土交通省建設業統計・経産省省エネ事例集から整理。実値は地域・拠点規模・PC工場有無で1.5倍前後ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              建設業の主要な電気代上昇要因 — 仮設単価・賦課金・電動建機・DX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建設業の電気代上昇は、仮設電気の単価差・制度的負担増・新規電力需要の3軸で同時進行しています。それぞれの影響額を定量把握し、層別に対策を講じる必要があります。
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
              規模別の削減事例3件 — 地場工務店／中堅ゼネコン／大手ゼネコン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建設業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの見直し</Link>
              、{" "}
              <Link href="/assembly-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">組立工場の見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              デマンド管理のポイント — 仮設電源と本社・工場の同時最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建設業のデマンド管理は『現場仮設電源の負荷分散』『本社・支店のオフィス制御』『PC工場・鉄筋加工場のピーク管理』の3層で進めます。層ごとの最適施策を組み合わせることで契約電力10〜25%削減が達成できます。
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
              、削減効果の試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 工事原価への組込み視点
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建設業の電気代は『本社・支店の固定費』と『建設現場の工事原価』の二重性を持ちます。市場連動プラン採用は工事原価の見積精度を下げるため、固定プランへの偏重が現実的です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>工事見積に電力コスト固定単価で組込み可能</li>
                  <li>本社・支店の予算管理が安定</li>
                  <li>PC工場・鉄筋加工場の生産原価が安定</li>
                  <li>仮設電源の工期中コスト変動を回避</li>
                  <li>建設請負契約の発注者向け説明責任が果たせる</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬の市場高値期と工事繁忙期が重なるリスク</li>
                  <li>工事原価が変動し利益率が圧迫される</li>
                  <li>発注者への価格転嫁が困難（請負契約）</li>
                  <li>仮設電源の月額予算超過リスク</li>
                  <li>JEPX 80円/kWh級の高騰局面で工事粗利減少</li>
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
              再エネ賦課金の影響 — 全社合計で年5,000万〜2億円の負担
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間使用量が大きいゼネコンでは、全社合計の負担額が経営に直撃する規模になります。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中堅ゼネコン（全社年250万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 873万円</li>
                  <li>2025年度（3.98円/kWh）：年 995万円（+122万円）</li>
                  <li>2026年度（4.18円/kWh）：年 1,045万円（+172万円）</li>
                  <li>3年間で年150万円超の負担増（年使用量横ばい前提）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">減免・回避策</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>年間電力使用量1,000万kWh以上で減免対象（大手ゼネコン本体は対象になりうる）</li>
                  <li>PC工場・鉄筋加工場が業種指定で減免対象になる場合あり</li>
                  <li>自家消費太陽光で系統供給量を減らすことが実質的回避策</li>
                  <li>本社ビル屋上＋PC工場屋根で1〜3 MW級導入が現実的</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の詳細は{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、自家消費太陽光による削減策は{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              建設業特有の節電・省エネ施策 — ZEB・電動建機・PC工場太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建設業の省エネは『本社ビルのZEB化』『PC工場・鉄筋加工場の生産効率化』『電動建機の充電最適化』の3軸で組み立てます。各軸の年間削減効果と投資回収年数を提示します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">本社・支店のZEB化改修</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率空調・LED・自家消費太陽光統合で電力▲40〜60%</li>
                  <li>本社（年200万kWh）で年800〜1,200万円削減</li>
                  <li>ZEB補助1/2〜2/3活用で投資回収7〜10年</li>
                  <li>企業ブランディング効果あり（受注先評価向上）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">PC工場・鉄筋加工場の生産効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>インバーター制御・高効率モーターで電力▲20〜30%</li>
                  <li>夜間生産シフトで深夜電力活用（電力単価▲30〜40%）</li>
                  <li>SII補助1/2活用で投資回収3〜5年</li>
                  <li>生産能力向上効果も同時実現</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（PC工場屋根）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>1 MWで年110〜130万kWh発電（年1,000〜1,500万円削減）</li>
                  <li>必要屋根面積 約6,000〜8,000 m²/MW</li>
                  <li>投資回収 8〜12年（補助金後 6〜9年）</li>
                  <li>電動建機充電と組合せて自家消費率向上</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電動建機・蓄電池の統合管理</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>充電タイミング夜間シフトで契約kW▲20〜40%</li>
                  <li>可搬型蓄電池で現場仮設電源を補完</li>
                  <li>建設DX・GX補助金で投資回収3〜5年</li>
                  <li>軽油・ガソリン費用削減効果も同時</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ全体像は{" "}
              <Link href="/electricity-cost-reduction-action-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力コスト削減アクションマップ</Link>
              、太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              、蓄電池活用は{" "}
              <Link href="/battery-storage-bcp-peak-cut-hybrid" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池のBCP×ピークカット活用</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・建設DX・ZEB
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建設業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。複数補助金の組合せ申請（SII＋PPA＋建設DX＋ZEB）で採択率が高くなる傾向。
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
              建設業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社建設業拠点の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建設業は本社・支店・PC工場・現場仮設電源の4層で電気契約が分散しがちです。シミュレーターで自社条件における年間上振れ幅を試算し、拠点バンドル契約・ZEB化・電動建機対応の優先順位付けに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>電動建機・BIM/CIM導入後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した14〜20%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-17"
            />
            <GlossaryLinks currentSlug="construction-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "32業種の電気料金見直しポイントをハブから探す。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "本社・支店オフィスの常設電力の見直し。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "PC工場・鉄筋加工場と類似する組立工場の電力管理。" },
              { href: "/warehouse-electricity-cost-review", title: "物流倉庫の電気料金見直し", description: "資機材センターと類似する倉庫の電力構造。" },
              { href: "/small-office-electricity-cost-review", title: "中小オフィスの電気料金見直し", description: "中小工務店の事務所電力に該当する見直し。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "工事原価の安定性を重視する建設業に固定プランが向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "請負契約で価格転嫁が困難な業種が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "ピーク削減・BCP・電動建機補完の蓄電池活用。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "PC工場・本社ビル屋上の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "日中使用量が大きい建設業の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "PC工場・本社の設備更新で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/multi-site-company-price-surge-risk", title: "多拠点企業の料金高騰リスク", description: "本社・支店・現場の累積影響と管理の考え方。" },
              { href: "/low-margin-company-price-surge-risk", title: "低利益率企業の料金高騰リスク", description: "請負契約の建設業に直結するリスク。" },
            ]}
          />

          <ContentCta
            heading="自社の建設業拠点条件でリスクを確認する"
            description="本社・支店・PC工場・建設現場の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。拠点バンドル契約交渉や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
