import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { JEPX_AREA_YEARLY_AVG } from "../../data/jepxData";
import { DEMAND_AREA_FY, LOAD_FACTOR_FY, DEMAND_AREA_SHARE } from "../../data/demandData";
import { getWeatherByRegion } from "../../data/weatherData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import TableOfContents from "../../components/market-data/TableOfContents";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["by-region"];

const faqItems = [
  { question: "四国電力エリアの法人料金は規模が小さいゆえに高いですか？", answer: "高圧電力量料金の業界標準メニューベースで、四国電力エリアは全国10エリア中で割高グループ（17円/kWh前後）に位置します。需要規模が他エリアより小さく、固定費の単価への乗せ方が相対的に高くなる構造があります。一方、伊方原発の稼働により燃調費プラス幅は中位に抑えられており、燃料価格高騰局面では他エリアより上振れ耐性があります。" },
  { question: "伊方原発の稼働状況と四電料金の関係は？", answer: "伊方3号機（出力89万kW）は2025年現在稼働中で、四国電力エリアのベースロード電源として重要な位置を占めています。原子力比率の上昇は燃料費調整額を抑制する効果がある一方、定期検査・規制対応による停止時はLNG・石炭火力の代替稼働で燃調費が急増するリスクがあります。稼働状況のモニタリングが法人需要家の年次予算精度に直結します。" },
  { question: "四国の太陽光出力制御リスクは契約にどう反映しますか？", answer: "四国エリアは太陽光発電の出力制御（再エネ抑制）が全国でも頻繁に発動されるエリアです。これは小規模需要に対して再エネ導入量が大きく、昼間に余剰が発生しやすい構造によります。市場連動プランでは抑制発動時間帯のJEPXスポット価格が異常な低価格（時に0円付近）になる場合があり、市場連動の昼間メリットが他エリアより享受しやすい特性があります。" },
  { question: "四国 4 県の業種別電気代特性に違いは？", answer: "愛媛県は化学・パルプ・造船など重工業が集積し、契約電力規模が大きい需要家が多い傾向です。香川県はうどん製造などの食品工場・観光業、徳島県は化学・電子部品、高知県は林業・農業・観光業と、4県で産業構造に違いがあります。県単位で主要業種を踏まえた契約形態の選択（特別高圧/高圧）と削減施策の優先順位設定が重要です。" },
  { question: "四国新電力で中小企業向けの選択肢は？", answer: "新電力数は20〜30社程度と限定的で、地場系（四国ガス・各県の地域新電力）と全国対応の大手新電力が中心です。中小企業（年間電力使用量100万kWh以下）向けにはシンプルな固定単価プランを提供する全国系が現実的な選択肢で、本部一括契約のスケールメリットを得られる可能性があります。撤退リスクの低い親会社系を優先する選定基準が定石です。" },
  { question: "四国エリアの中小企業削減事例の典型値は？", answer: "業界平均レンジとして、製造業（高圧、年間500万kWh級）で年間150〜400万円（5〜8%）、食品工場（高圧、年間100万kWh級）で年間40〜100万円（5〜10%）、観光業ホテル（高圧、年間300万kWh級）で年間80〜200万円（5〜8%）の削減事例が報告されています。太陽光出力制御時間帯の活用（市場連動部分採用＋自家消費太陽光）が四国特有の有効施策です。" },
];

const sourcesItems = [
  { name: "四国電力", url: "https://www.yonden.co.jp/", description: "四国電力エリアの法人向け料金プラン情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・四国地方需給情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "四国エリアの需給・系統情報" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
];


const pageTitle = "四国電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "四国電力エリア（香川・徳島・愛媛・高知）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、伊方原発の稼働影響、太陽光出力制御リスク、新電力の参入状況と契約見直しポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-shikoku-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "四国電力 法人",
    "四国電力エリア 電気料金",
    "香川 高圧電力 単価",
    "四国電力 料金改定",
    "四国 新電力",
    "法人電気代 四国",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/by-region", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/by-region"],
  },
};

const prefectures = ["香川県", "徳島県", "愛媛県", "高知県"];

const areaBasicInfo = [
  { label: "担当都道府県", value: "香川県・徳島県・愛媛県・高知県" },
  { label: "旧一般電気事業者", value: "四国電力（送配電：四国電力送配電）" },
  { label: "小売子会社", value: "四国電力" },
  { label: "管内面積（概算）", value: "約 18,800 km²" },
  { label: "管内世帯数（概算）", value: "約 170万世帯" },
  { label: "法人需要家数の目安", value: "約 20万口（高圧以上：約 1.2万口）" },
  { label: "電源構成の特徴", value: "原子力（伊方原発）が約20〜25%、LNG火力約20%、石炭火力約15%、水力約10%、太陽光約15%" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 12〜18%（高圧・特別高圧の推計）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,500〜1,800 円/kW",
    ryoryo: "約 13〜16 円/kWh",
    nencho: "燃調費別途",
    note: "大工場・紙パルプ・化学工場向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,600〜2,000 円/kW",
    ryoryo: "約 15〜18 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 950〜1,150 円/kW",
    ryoryo: "約 16〜19 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ申請認可。高圧・特別高圧の自由化メニューも同時期に標準プランを改定。LNG・石炭の高騰を反映。",
  },
  {
    date: "2023年12月",
    content: "燃料費調整額の基準燃料価格を改定。LNG・石炭価格の高止まりを受けてプラス幅が継続。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。高圧・特別高圧需要家の契約単価に容量市場調達コストが転嫁される形となった。",
  },
  {
    date: "2024年8月",
    content: "伊方原発3号機が定期検査後に再稼働。電源構成の原子力比率が回復し、燃調費プラス幅の抑制に寄与。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ（前年比 +0.4 円程度）。太陽光の普及が進む四国でも賦課金負担は増加。",
  },
  {
    date: "2026年4月（直近）",
    content: "伊方原発稼働の安定化傾向により燃調費は落ち着き気味。ただし容量拠出金・再エネ賦課金は継続してコスト上昇圧力に。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "小規模エリアのため新電力の参入社数は全国でも少ない部類。20〜30社程度が高圧向けプランを展開（2024年時点）。需要規模の制約から大手新電力でも限定的な展開にとどまるケースが多い。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022〜2023年のエネルギー危機では、四国エリアでも一部新電力が高圧向け新規受付を停止・既存契約の解除通知を実施。需要規模が小さいだけに影響を受けた需要家の割合が相対的に高かった。",
  },
  {
    category: "市場シェア推移",
    detail:
      "2020年に約8%だった新電力シェアが2022年には18%前後まで拡大したが、撤退で2023年は12〜15%程度に縮小。参入社数の少なさから回復のペースは緩やか。",
  },
  {
    category: "価格競争力",
    detail:
      "需要規模が小さく競合が少ないため、新電力が大きな値引きを提示しにくい構造。ただし伊方原発が安定稼働している局面では四国電力の標準メニューも比較的安定しており、比較によるメリットが出しやすいタイミングがある。",
  },
];

export default function RegionShikokuBusinessElectricityPage() {
  const weather = getWeatherByRegion("shikoku");
  return (
    <>
      <ArticleJsonLd
        headline="四国電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況"
        description="四国電力エリア（香川・徳島・愛媛・高知）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、伊方原発の稼働影響、太陽光出力制御リスク、新電力の参入状況と契約見直しポイントを解説します。"
        url="https://simulator.eic-jp.org/region-shikoku-business-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "四国電力エリアの法人電気代事情" },
        ]}
      faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">四国電力エリアの事情</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          四国電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          四国電力エリア（香川・徳島・愛媛・高知の4県）は、伊方原発の稼働状況が料金水準を大きく左右するエリアです。
          一方で太陽光発電の普及に伴う出力制御が頻発しており、再エネ活用にも制約があります。
          需要規模が小さいため新電力の参入が限定的で、電力調達の選択肢が少ない点も特徴です。
          本ページでは、エリアの基本情報・料金水準・改定動向・新電力状況・契約見直しポイントを詳しく解説します。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {prefectures.map((p) => (
            <span
              key={p}
              className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800"
            >
              {p}
            </span>
          ))}
        </div>
      </header>

      <AuthorBadge publishedAt="2026-04-12" updatedAt="2026-04-12" />
      <TableOfContents />

      {/* エリア基本情報テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ四国電力エリアの法人電気料金見直しが重要なのか — 小規模エリア特有の課題</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          四国電力エリアの規模感・事業者構成を確認してください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">
                  項目
                </th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">
                  内容
                </th>
              </tr>
            </thead>
            <tbody>
              {areaBasicInfo.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700 whitespace-nowrap">
                    {row.label}
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 料金水準テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">四国電力の法人向け料金体系（中小規模事業者向けメニュー）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は四国電力の標準メニューをベースにした概算値です。
          燃料費調整額・再エネ賦課金（2026年4月時点: 3.49 円/kWh）は別途加算されます。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">メニュー区分</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">基本料金目安</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">電力量料金目安</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">燃調・賦課金</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">備考</th>
              </tr>
            </thead>
            <tbody>
              {priceTable.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">{row.menu}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.kihon}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.ryoryo}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.nencho}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 他エリアとの料金比較（CSSバー） */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900">他エリアとの料金比較（高圧電力量料金 目安）</h3>
          <p className="mt-1 text-xs text-slate-500">各エリア旧一電の標準メニューベース概算。燃調・賦課金除く。</p>
          <div className="mt-4 space-y-3">
            {[
              { area: "北海道電力エリア", value: 18.5, color: "bg-blue-400" },
              { area: "東北電力エリア", value: 16.2, color: "bg-teal-400" },
              { area: "東京電力エリア", value: 15.5, color: "bg-sky-400" },
              { area: "中部電力エリア", value: 15.0, color: "bg-emerald-400" },
              { area: "北陸電力エリア", value: 14.5, color: "bg-green-400" },
              { area: "関西電力エリア", value: 13.8, color: "bg-indigo-400" },
              { area: "中国電力エリア", value: 16.8, color: "bg-orange-400" },
              { area: "四国電力エリア（当エリア）", value: 17.0, color: "bg-amber-600" },
              { area: "九州電力エリア", value: 14.2, color: "bg-yellow-500" },
              { area: "沖縄電力エリア", value: 19.5, color: "bg-red-400" },
            ].map((item) => (
              <div key={item.area}>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className={item.area.includes("当エリア") ? "font-bold text-sky-800" : ""}>{item.area}</span>
                  <span>{item.value} 円/kWh 前後</span>
                </div>
                <div className="h-4 w-full rounded bg-slate-100">
                  <div
                    className={`h-4 rounded ${item.color}`}
                    style={{ width: `${((item.value - 12) / 9) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-400">※目安値。実際の請求単価は契約内容・使用量・時期により異なります。</p>
          <p className="mt-2 text-xs text-slate-500">※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。</p>
        </div>
      </section>

      {/* エリア特有の事情 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">四国 4 県別の電力需要特性と伊方原発の影響</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">伊方原発の安定稼働が料金安定の鍵</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              四国電力エリアでは伊方原発（愛媛県）が電源構成の約20〜25%を担い、稼働の有無が燃料費調整額に
              直接影響します。定期検査や規制対応による停止期間には火力発電の比率が高まり、
              燃調費が増加する傾向があります。原発の稼働スケジュールを注視することが
              電気料金の変動予測に重要です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">太陽光発電の出力制御が頻発</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              四国では太陽光発電の普及が進む一方、系統の受け入れ余力に限界があり、
              晴天時には頻繁に出力制御が実施されています。再エネ電源を活用したPPAや
              非化石証書の調達コストに影響する可能性があります。
              また出力制御分は実質的に発電コストの無駄となるため、
              再エネ賦課金の将来的な上昇圧力にもなり得ます。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">需要規模が小さく新電力参入が限定的</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              四国4県の需要規模は全国でも小さく、新電力各社の営業リソース配分が少ないエリアです。
              参入社数が限られるため競争による値引き効果を享受しにくい面があります。
              契約候補となる新電力が少ない分、慎重な事業者選別が求められます。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">紙パルプ・化学など電力多消費産業がある</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              愛媛県を中心に紙パルプ・化学工業などの電力多消費型製造業が立地しており、
              特別高圧での大口需要が存在します。製造コストに占める電力比率が高い業種では
              わずかな単価の変動も年間コストに大きく影響するため、電力調達戦略の重要性が高いエリアです。
            </p>
          </div>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">四国電力エリアの四季別需要パターンと料金改定（2023〜2026 年）</h2>
        <div className="mt-4 space-y-3">
          {revisionHistory.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-xs font-semibold text-sky-700 pt-1">{item.date}</div>
              <div className="flex-1 rounded-lg border border-slate-100 bg-slate-50 px-4 py-2 text-sm leading-7 text-slate-700">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 新電力動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">四国新電力の特徴と離島電源を含む市場特殊性</h2>
        <div className="mt-4 space-y-3">
          {newPowerStatus.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">{item.category}</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 業種別削減事例 H2-7 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">四国エリアの中小企業削減事例（食品 / 観光 / 製造業）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          四国エリアは中小企業の比率が高く、太陽光出力制御による昼間スポット価格低下を活用した契約形態が他エリアより有効です。下記は当エリアでの典型的な削減事例ベンチマークです。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">愛媛・化学／パルプ工場（特高 5,000 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>特別高圧個別交渉: 約3〜4%</li>
              <li>廃熱回収＋コージェネ: 約4〜6%</li>
              <li>燃調キャップ条項追加: 上振れ抑制効果</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約350〜700万円</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">食品工場・観光ホテル（高圧 300 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>新電力相見積もり: 約3〜5%</li>
              <li>市場連動部分採用＋自家消費太陽光: 約3〜5%</li>
              <li>夏季デマンド管理: 約2〜3%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約80〜200万円</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">中小企業・小売（高圧 100 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>契約プラン見直し（全国系新電力）: 約3〜5%</li>
              <li>LED完全化＋人感センサー: 約2〜3%</li>
              <li>自家消費太陽光（屋根 30kW）: 約3〜5%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約40〜100万円</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">四国電力エリア共通の見直しチェックリスト</p>
          <ol className="mt-2 list-decimal list-inside space-y-1 text-xs leading-6 text-slate-700">
            <li>伊方原発の稼働スケジュールを確認（燃調費連動の予測）</li>
            <li>参入可能な新電力を幅広く調査（全国展開型の大手新電力含む）</li>
            <li>燃調費キャップの有無を必ず確認（原発停止時のリスク保険）</li>
            <li>デマンドコントロールで基本料金を削減（製造ラインのピーク抑制）</li>
            <li>
              容量拠出金の影響を試算（
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の詳細</Link>
              ）
            </li>
          </ol>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: エネルギー情報センター内部試算、四国圏法人事例ヒアリング、業界平均レンジで作成。</p>
      </section>

      {/* 注記 */}
      <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          ※本ページの料金・シェア情報は2026年4月時点の公開情報をもとにした概算値です。
          正確な単価は各電力会社の公式ホームページまたは見積書でご確認ください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
        </p>
      </div>

      {/* JEPXエリアプライスの推移 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">JEPX 四国エリアプライス推移と太陽光出力制御リスク</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          JEPX（日本卸電力取引所）における当エリアの年度別平均価格です。市場連動型プランの仕入れコストに直結するデータです。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-sky-50">
              <tr>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">当エリア（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">システムプライス（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">差額</th>
              </tr>
            </thead>
            <tbody>
              {JEPX_AREA_YEARLY_AVG.filter(r => r.fy >= 2016).map((row, i) => {
                const areaPrice = row.shikoku;
                const diff = Number((areaPrice - row.systemPrice).toFixed(2));
                return (
                  <tr key={row.fy} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium">{row.fy}年度</td>
                    <td className="border border-slate-200 px-3 py-2">{areaPrice.toFixed(2)}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-500">{row.systemPrice.toFixed(2)}</td>
                    <td className={`border border-slate-200 px-3 py-2 font-semibold ${diff > 0 ? "text-red-600" : diff < 0 ? "text-emerald-600" : "text-slate-500"}`}>
                      {diff > 0 ? "+" : ""}{diff.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          四国エリアは伊方原発と太陽光の組み合わせにより、FY2025は8.85円とシステムプライスを-2.21円下回る安値傾向。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">四国電力エリア需要と原発・再エネの電源構成</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          四国電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "shikoku")?.share}%を占めます。全国最小規模の需要エリア。西日本クラスターとの高い連動性(0.95)。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均需要（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">負荷率（%）</th>
              </tr>
            </thead>
            <tbody>
              {[2016, 2023].map((fy, i) => {
                const d = DEMAND_AREA_FY.find(r => r.fy === fy);
                const lf = LOAD_FACTOR_FY.find(r => r.fy === fy);
                return (
                  <tr key={fy} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">FY{fy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{d?.shikoku.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{lf?.shikoku}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: OCCTO公表データを集計（FY2016〜FY2023）</p>
      </section>

      {/* H2-Z シミュレーター */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の状況を確認する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          四国電力エリアの法人需要家として、自社の上振れリスクを定量化するには以下の観点でシミュレーターを活用してください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>伊方原発稼働シナリオ別の燃調費影響を比較する</li>
          <li>太陽光出力制御による昼間スポット価格低下の市場連動メリットを試算する</li>
          <li>固定プランと市場連動プランの年間コスト差を確認する</li>
          <li>容量拠出金・再エネ賦課金の追加コストを織り込んだトータル単価で評価する</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">参考: 松山の気象データ（夏最高 {weather.summerTmax?.tmax2020_25}℃ など）と需要規模（全国 {DEMAND_AREA_SHARE.find(a => a.area === "shikoku")?.share}%、負荷率 FY2023 {LOAD_FACTOR_FY.find(r => r.fy === 2023)?.shikoku}%）を踏まえた診断条件設計が有効です。</p>
      </section>

      {/* 関連リンク */}

      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <SourcesAndFaq sources={sourcesItems} faq={faqItems} publishedAt="2026-04-17" />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/yonden-corporate-electricity-guide",
              title: "四国電力（よんでん）の法人向けプラン解説",
              description: "エリア全体の市況に対し、四国電力という特定企業のプラン体系・伊方原発稼働・サポートを中立的に解説（電力会社別解説）。",
            },
            {
              href: "/business-electricity-retrospective/high-voltage-2019-2025",
              title: "高圧電力 2019〜2025年料金推移",
              description: "全国高圧電力の料金推移データを年次グラフで確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "燃調費の仕組みと法人の請求額への影響を詳しく解説。",
            },
            {
              href: "/emergency-supplier-withdrawal",
              title: "新電力から契約解除通知が届いたとき",
              description: "撤退通知を受けた際の対処手順と緊急対応フローを解説。",
            },
            {
              href: "/region-chugoku-business-electricity",
              title: "中国電力エリアの法人電気代事情",
              description: "石炭火力依存と島根原発再稼働による影響を解説。",
            },
            {
              href: "/region-kyushu-business-electricity",
              title: "九州電力エリアの法人電気代事情",
              description: "原発比率が高く料金水準が安定している九州エリアを解説。",
            },
            {
              href: "/region-supplier-withdrawal-map",
              title: "エリア別 新電力撤退状況マップ",
              description: "2022年以降の新電力撤退・解除状況を10エリアで比較。",
            },
            {
              href: "/region-kansai-business-electricity",
              title: "関西電力エリアの法人電気代事情",
              description: "瀬戸内海を挟む隣接エリア。原発比率の高さで料金安定性に共通点あり。",
            },
            {
              href: "/business-electricity-cost-reduction-review-points",
              title: "法人電気代見直しの基本ポイント",
              description: "業種・エリアを問わず適用できる、法人契約見直しの基本フレームワーク。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光の費用対効果",
              description: "太陽光出力制御リスクが高い四国エリアで、自家消費型太陽光は契約電力削減の有効策。",
            },
            {
              href: "/food-factory-electricity-cost-review",
              title: "食品工場の電気料金見直しポイント",
              description: "四国の主要業種である食品製造業の負荷特性と契約見直しの考え方。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧の電気料金の仕組み",
              description: "愛媛の化学・パルプなど特別高圧需要家向け料金体系を解説。",
            },
            {
              href: "/industry-electricity-calculator",
              title: "業種別電気料金シミュレーター",
              description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="四国電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、原発停止リスク・容量拠出金・再エネ賦課金の影響を数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "シミュレーターの使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
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
