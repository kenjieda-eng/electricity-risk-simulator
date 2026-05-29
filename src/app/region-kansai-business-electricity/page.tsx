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
  { question: "関西電力エリアの料金は原発稼働でどう変わりますか？", answer: "原子力は燃料費が安定しているため、原発稼働比率が上がるほど燃料費調整額の上振れ幅が抑制されます。関西電力は2023〜2025年にかけて大飯3・4号機、高浜1〜4号機、美浜3号機を稼働継続しており、同期間の電力量料金上昇幅は全国比で相対的に緩やかでした。一方で定期検査での停止や予期せぬトラブル時はLNG火力の代替稼働で燃調費が急増するリスクがあります。" },
  { question: "大飯・高浜・美浜原発の稼働状況と関電料金の関係は？", answer: "2026年4月時点で大飯3・4（各118万kW）、高浜1〜4（各82.6・87万kW）、美浜3（82.6万kW）の合計約675万kWが稼働中で、関電エリア需要のベースロード約30〜35%を原子力で賄っています。高浜1・2号機と美浜3号機は60年超稼働認可済で、2030年代半ばまでの稼働継続が見込まれており、料金安定要素として機能しています。" },
  { question: "関西経済圏で固定プラン vs 市場連動どちらが向きますか？", answer: "関電エリアの旧一電単価は全国比で割安なため、市場連動プランを選ぶ価格メリットが他エリアより小さい構造があります。製造業大手・大型ビルなど予算管理の説明責任がある法人は固定プラン親和性が高く、中小規模で電力モニタリング体制があれば市場連動も選択肢に入ります。原発停止リスクへのヘッジとして固定プランを軸にする経営判断が一般的です。" },
  { question: "関電エリアの新電力選択で気をつけるべきことは？", answer: "東京エリアより撤退数は少ないものの、中小新電力の撤退事例は2022〜2023年に複数あったエリアです。大阪ガス系（Daigasエナジー）・エネオス系・伊藤忠エネクス系など、親会社の信用力が高い地場系・大手系を優先するのが定石です。価格だけでなく財務安定性・調達手段の多様性を比較軸に含めてください。" },
  { question: "関西の夏季ピーク対策はどうすればよいですか？", answer: "関電エリアは原子力・揚水発電（充電率全国最高47.7%）でピーク対応する構造ですが、太陽光抑制率10.1%という余剰問題が昼間に発生しています。法人需要家としては、デマンドコントローラーによる夏季ピーク日の基本料金圧縮、自家消費型太陽光と蓄電池の組み合わせによる高単価時間帯の購入電力削減が有効な施策となります。" },
  { question: "関西エリアの業種別削減事例の典型値は？", answer: "業界平均レンジとして、中規模オフィスビル（延床5,000m²）で年間180〜600万円（約9〜30%）、製造業（高圧500万kWh/年）で年間400〜1,000万円（5〜10%）、商業施設（中規模スーパー）で年間180〜450万円（10〜18%）の削減事例が報告されています。原発稼働の安定性を背景に固定プラン×省エネ設備の組み合わせが主流です。" },
];

const sourcesItems = [
  { name: "関西電力", url: "https://www.kepco.co.jp/", description: "関西電力エリアの法人向け料金プラン情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・関西圏需給情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "関西エリアの需給・系統情報" },
];


const pageTitle = "関西電力エリアの法人電気代事情｜原発比率と料金の特性";
const pageDescription =
  "関西電力エリア（近畿2府4県＋福井・三重・岐阜の一部）の法人向け電気料金を詳解。原発再稼働による料金特性、高圧・特別高圧の単価目安、2023〜2026年の改定動向、新電力状況と契約見直しのポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-kansai-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "関西電力 法人",
    "関電エリア 電気料金",
    "関西 高圧電力 単価",
    "関西電力 原発 料金",
    "関西 新電力",
    "法人電気代 大阪",
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

const prefectures = [
  "大阪府",
  "京都府",
  "兵庫県",
  "奈良県",
  "滋賀県",
  "和歌山県",
  "福井県（一部）",
  "三重県（一部）",
  "岐阜県（一部）",
];

const areaBasicInfo = [
  { label: "担当都道府県", value: "大阪府・京都府・兵庫県・奈良県・滋賀県・和歌山県・福井県（一部）・三重県（一部）・岐阜県（一部）" },
  { label: "旧一般電気事業者", value: "関西電力（送配電：関西電力送配電）" },
  { label: "小売部門", value: "関西電力株式会社（小売部門として一体運営）" },
  { label: "管内面積（概算）", value: "約 27,000 km²" },
  { label: "管内世帯数（概算）", value: "約 1,080万世帯" },
  { label: "法人需要家数の目安", value: "約 120万口（高圧以上：約 11万口）" },
  { label: "電源構成の特徴", value: "原子力が約 30〜40%（再稼働進展状況による）、LNG火力は約 30% 前後" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 20〜28%（高圧・特別高圧の推計）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,200〜1,500 円/kW",
    ryoryo: "約 10〜12 円/kWh",
    nencho: "燃調費別途",
    note: "全国比で割安水準",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,300〜1,700 円/kW",
    ryoryo: "約 12〜15 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "高圧（6kV）小口需要",
    kihon: "固定 + 需要割",
    ryoryo: "約 14〜17 円/kWh",
    nencho: "燃調費別途",
    note: "小規模事業所",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 800〜1,000 円/kW",
    ryoryo: "約 13〜16 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ認可。関西電力は原発再稼働を背景に東電・中電より値上げ幅を抑制できた。高圧向けも同時期に標準メニューを見直し。",
  },
  {
    date: "2023年10月",
    content: "高浜3・4号機の稼働延長認可が確定。原子力比率向上の見通しから2024年度以降の燃料費節減効果が期待された。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。関西電力も例外なく高圧・特別高圧の料金単価に影響。ただし原子力調達分の燃料費節減が一部を相殺。",
  },
  {
    date: "2024年10月",
    content: "電気・ガス料金激変緩和措置終了。法人の実負担が上昇したが、他エリアと比較して影響は相対的に軽微。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金 3.49 円/kWh への引き上げ。全エリア共通。高圧需要家への影響も継続。",
  },
  {
    date: "2026年4月（直近）",
    content: "大飯・高浜・美浜の複数基が稼働継続。電源構成の原子力比率は約35%台で推移。燃料費調整額のプラス幅は他エリアより低い水準を維持。",
  },
];

const nuclearImpact = [
  {
    title: "原発再稼働の料金へのプラス効果",
    body: "原子力は燃料費（ウラン代）が安定しており、LNG に比べて燃料費調整額のプラス幅を抑制できます。関西電力は2023〜2025年にかけて複数機を再稼働させており、同期間の電力量料金の上昇幅が全国と比べて相対的に緩やかでした。",
  },
  {
    title: "原発停止リスクにも注意",
    body: "定期検査や予期せぬトラブルで原子炉が停止すると、代替として LNG 火力の稼働が増加し、燃料費が急増します。2011年以降の全停止期間中、関西電力の法人向け料金は数十%上昇した経緯があります。稼働状況のモニタリングが重要です。",
  },
  {
    title: "電気料金の全国比較における位置づけ",
    body: "高圧・特別高圧の電力量料金は全国10エリアの中で概ね下位3位（割安グループ）に位置します。製造業・物流業の本社・工場が関西に多い理由の一つに、電気料金の競争力があるとされています。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "東京エリアに次ぐ規模の需要地であり、60〜80社程度の新電力が高圧向けプランを展開（2024年時点）。大阪ガス系のDaigasエナジーなど地場系が強い競争力を持つ。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022〜2023年に複数の中小新電力が撤退。ただし東京エリアと比較すると撤退数は少なく、大手・地場系の安定供給が継続している事業者も多い。",
  },
  {
    category: "価格競争力",
    detail:
      "旧一電の料金水準が全国比で割安なため、新電力が値引き余地を確保しにくい面もある。それでも大口需要家は相見積もりで10%前後のコスト削減を実現するケースがある。",
  },
  {
    category: "地場系事業者の強み",
    detail:
      "大阪ガスグループ（Daigasエナジー）やエネオス系、伊藤忠エネクス系など体力のある事業者が関西を重点エリアとして展開しており、中小新電力よりも安定性が高い。",
  },
];

export default function RegionKansaiBusinessElectricityPage() {
  const weather = getWeatherByRegion("kansai");
  return (
    <>
      <ArticleJsonLd
        headline="関西電力エリアの法人電気代事情｜原発比率と料金の特性"
        description="関西電力エリア（近畿2府4県＋福井・三重・岐阜の一部）の法人向け電気料金を詳解。原発再稼働による料金特性、高圧・特別高圧の単価目安、2023〜2026年の改定動向、新電力状況と契約見直しのポイントを解説します。"
        url="https://simulator.eic-jp.org/region-kansai-business-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "関西電力エリアの法人電気代事情" },
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
        <span className="text-slate-800">関西電力エリアの事情</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          関西電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-indigo-800">原発比率と料金の特性</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          関西電力エリアは国内で原子力発電の比率が最も高いエリアの一つです。
          原発再稼働の進展により燃料費調整額の上昇が他エリアより抑制される傾向があり、
          法人の電気料金は全国比で割安水準を維持しています。
          ただし、原発停止リスクや容量拠出金・再エネ賦課金の負担増は全国共通の課題です。
          本ページでは、エリアの基本情報・料金水準・原発の影響・新電力状況・見直しポイントを詳しく解説します。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {prefectures.map((p) => (
            <span
              key={p}
              className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800"
            >
              {p}
            </span>
          ))}
        </div>
      </header>

      <AuthorBadge publishedAt="2026-04-11" updatedAt="2026-04-11" />
      <TableOfContents />

      {/* エリア基本情報テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ関西電力エリアの法人電気料金見直しが重要なのか — 原発再稼働と関西経済圏</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          関西電力エリアの規模感・事業者構成・電源特性をベースに、原発再稼働で抑制される料金優位性と関西経済圏の業種構成を踏まえた契約見直しの意義を整理します。原子力34.8%という全国最高水準のベースロードが燃調費上振れの緩衝材となる一方、原発停止リスクと容量拠出金・再エネ賦課金の負担増は経営課題として残ります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">項目</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">内容</th>
              </tr>
            </thead>
            <tbody>
              {areaBasicInfo.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700 whitespace-nowrap">{row.label}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 料金水準テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">関西電力の法人向け料金体系（業務用メニュー詳細）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は関西電力の標準メニューをベースにした概算値です。
          燃料費調整額・再エネ賦課金（2026年4月時点: 3.49 円/kWh）は別途加算されます。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-50">
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
              { area: "関西電力エリア（当エリア）", value: 13.8, color: "bg-indigo-600" },
              { area: "中国電力エリア", value: 16.8, color: "bg-orange-400" },
              { area: "四国電力エリア", value: 17.0, color: "bg-amber-400" },
              { area: "九州電力エリア", value: 14.2, color: "bg-yellow-500" },
              { area: "沖縄電力エリア", value: 19.5, color: "bg-red-400" },
            ].map((item) => (
              <div key={item.area}>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className={item.area.includes("当エリア") ? "font-bold text-indigo-800" : ""}>{item.area}</span>
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
        </div>
      </section>

      {/* 原発再稼働の影響 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">大飯・高浜・美浜原発の再稼働と関電料金体系への影響</h2>
        <div className="mt-4 space-y-4">
          {nuclearImpact.map((item, i) => (
            <div key={i} className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
              <h3 className="text-base font-semibold text-indigo-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>

        {/* 稼働状況簡易テーブル */}
        <div className="mt-5 overflow-x-auto">
          <h3 className="text-base font-semibold text-slate-900 mb-3">関西電力 主要原子炉 稼働状況（2026年4月時点）</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">号機</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">出力</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">稼働状況（概要）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { unit: "大飯3・4号機", output: "各 118 万kW", status: "稼働中（定検スケジュール管理下）" },
                { unit: "高浜1・2号機", output: "各 82.6 万kW", status: "稼働中（60年超稼働認可済み）" },
                { unit: "高浜3・4号機", output: "各 87 万kW", status: "稼働中" },
                { unit: "美浜3号機", output: "82.6 万kW", status: "稼働中（60年超稼働認可済み）" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">{row.unit}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.output}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-slate-400">※稼働状況は定期検査等により変動します。最新情報は関西電力公式サイトでご確認ください。</p>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">関電エリアの夏季ピーク対策と料金改定パターン（2023〜2026 年）</h2>
        <div className="mt-4 space-y-3">
          {revisionHistory.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-xs font-semibold text-indigo-700 pt-1">{item.date}</div>
              <div className="flex-1 rounded-lg border border-slate-100 bg-slate-50 px-4 py-2 text-sm leading-7 text-slate-700">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 新電力動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">関西の新電力切替動向 — 全国 2 番目の市場規模</h2>
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
      <section className="mt-6 rounded-xl border border-indigo-200 bg-indigo-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">関西エリアの業種別削減事例（製造業 / 商業 / DC）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          関電エリアでは原発稼働を背景にした料金安定性を活かしながら、固定プラン×省エネ設備の組み合わせで段階的な削減を進めるパターンが主流です。下記は当エリアでの典型的な削減事例ベンチマークです。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">関西製造業（高圧 500 万kWh/年）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>新電力相見積もり（地場系優先）: 約3〜5%</li>
              <li>デマンドコントローラー: 約3〜5%</li>
              <li>自家消費型太陽光: 約2〜3%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約400〜1,000万円</li>
            </ul>
          </div>
          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">商業施設（中規模スーパー 500m²）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>契約プラン見直し: 約3〜5%</li>
              <li>扉付ショーケース順次更新: 約4〜6%</li>
              <li>LED完全化＋デマンド管理: 約4〜6%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約180〜450万円（10〜18%）</li>
            </ul>
          </div>
          <div className="rounded-xl border border-indigo-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">商用 DC（IT 5MW 中規模）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>外気冷却比率拡大: 約8〜12%</li>
              <li>高効率UPS更新: 約2〜3%</li>
              <li>原発稼働メリットを織り込んだ固定単価交渉: 約3〜5%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約2.0〜4.0億円</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">関電エリア共通の見直しチェックリスト</p>
          <ol className="mt-2 list-decimal list-inside space-y-1 text-xs leading-6 text-slate-700">
            <li>原発の稼働状況をウォッチする（定期検査スケジュール把握で燃調費変動予測）</li>
            <li>旧一電の料金が全国比で割安なことを念頭に提示価格を比較</li>
            <li>地場系・大手系の安定事業者を優先（Daigas エナジー / エネオス系など）</li>
            <li>デマンド管理で基本料金を削減（夏季ピーク日の制御）</li>
            <li>
              容量拠出金・再エネ賦課金の増加を織り込む（
              <Link href="/capacity-contribution-cost-impact" className="text-indigo-700 underline underline-offset-2 hover:text-indigo-900">容量拠出金の詳細</Link>
              ）
            </li>
          </ol>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: エネルギー情報センター内部試算、関西圏法人事例ヒアリング、業界平均レンジで作成。</p>
      </section>

      {/* 電源構成の実績データ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">関電エリアの電源構成（原子力比率と再エネ）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          2024〜2026年の30分値データ（36,960レコード）を集計した関西エリアの電源構成実績です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="text-xs font-semibold text-indigo-700">原子力</p>
            <p className="mt-1 text-2xl font-bold text-indigo-900">34.8%</p>
            <p className="text-xs text-indigo-600">平均 5,368 MW / 稼働率 100%</p>
          </div>
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="text-xs font-semibold text-orange-700">LNG火力</p>
            <p className="mt-1 text-2xl font-bold text-orange-900">27.1%</p>
            <p className="text-xs text-orange-600">平均 4,181 MW</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-xs font-semibold text-blue-700">揚水発電</p>
            <p className="mt-1 text-2xl font-bold text-blue-900">充電率 47.7%</p>
            <p className="text-xs text-blue-600">全国最積極的な揚水活用</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">太陽光抑制</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">10.1%</p>
            <p className="text-xs text-amber-600">昼間の出力制御頻度</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          原子力34.8%（稼働率100%）は全国最高で、ベースロード電源が安定しています。
          その一方、原子力＋太陽光の同時供給により昼間に余剰が発生し、太陽光抑制率は10.1%と高水準です。
          揚水発電を全国で最も積極的に活用（充電率47.7%）し、余剰吸収とピーク対応を行っています。
          <a href="/area-power-supply-mix-comparison" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">→ 9エリアの電源構成を比較する</a>
        </p>
      </section>

      {/* 注記 */}
      <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          ※本ページの料金・シェア情報は2026年4月時点の公開情報をもとにした概算値です。
          正確な単価は各電力会社の公式ホームページまたは見積書でご確認ください。
        </p>
      </div>

      {/* JEPXエリアプライスの推移 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">JEPX 関西エリアプライス推移と原発稼働連動性</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          JEPX（日本卸電力取引所）における当エリアの年度別平均価格です。市場連動型プランの仕入れコストに直結するデータです。
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
                const areaPrice = row.kansai;
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
          関西エリアは原発比率の高さからシステムプライスとほぼ同水準〜やや安で推移。FY2022は-0.87円と需給安定性を反映。
        </p>
      </section>

      {/* H2-Z シミュレーター */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の状況を確認する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          関電エリアの法人需要家として、自社の上振れリスクを定量化するには以下の観点でシミュレーターを活用してください。
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>原発稼働メリットを織り込んだ現行単価と、原発停止シナリオでの上振れ幅を比較する</li>
          <li>固定プランと市場連動プランの年間コスト差を試算する</li>
          <li>夏季ピーク日のデマンド削減で基本料金がどれだけ下がるかを把握する</li>
          <li>容量拠出金・再エネ賦課金の追加コストを織り込んだトータル単価で評価する</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">参考: 大阪の気象データ（夏最高 {weather.summerTmax?.tmax2020_25}℃ / 冷房需要 +{weather.cdd?.changePercent ?? 0}% など）と需要規模（全国 {DEMAND_AREA_SHARE.find(a => a.area === "kansai")?.share}%、負荷率 FY2023 {LOAD_FACTOR_FY.find(r => r.fy === 2023)?.kansai}%）を踏まえた診断条件設計が有効です。</p>
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
              href: "/kepco-corporate-electricity-guide",
              title: "関西電力の法人向けプラン解説",
              description: "エリア全体の市況に対し、関西電力という特定企業のプラン体系・原子力比率と燃調感応度・サポートを中立的に解説（電力会社別解説）。",
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
              href: "/region-tokyo-business-electricity",
              title: "東京電力エリアの法人電気代事情",
              description: "LNG火力依存と首都圏集中による東京エリアの料金特性を解説。",
            },
            {
              href: "/region-chubu-business-electricity",
              title: "中部電力エリアの法人電気代事情",
              description: "製造業集積地・中部エリアの電力事情と料金水準を解説。",
            },
            {
              href: "/region-supplier-withdrawal-map",
              title: "エリア別 新電力撤退状況マップ",
              description: "2022年以降の新電力撤退・解除状況を10エリアで比較。",
            },
            {
              href: "/region-chugoku-business-electricity",
              title: "中国電力エリアの法人電気代事情",
              description: "山陽工業地帯の隣接エリア。関西と連系線で結ばれる重工業集積地の電気代特性を比較。",
            },
            {
              href: "/region-shikoku-business-electricity",
              title: "四国電力エリアの法人電気代事情",
              description: "瀬戸内海を挟む隣接エリア。原発・離島電源の特殊性を関西エリアと比較できる。",
            },
            {
              href: "/business-electricity-cost-reduction-review-points",
              title: "法人電気代見直しの基本ポイント",
              description: "業種・エリアを問わず適用できる、法人契約見直しの基本フレームワーク。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧の電気料金の仕組み",
              description: "関電エリアの製造業大手で活用される特別高圧契約の料金体系を解説。",
            },
            {
              href: "/data-center-electricity-cost-review",
              title: "データセンターの電気料金見直しポイント",
              description: "関西の DC 需要家向け：原発稼働メリットを活かした特高契約の考え方。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="関西電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、原発停止リスク・燃料費変動・容量拠出金のリスクを数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "解説記事一覧へ" },
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
