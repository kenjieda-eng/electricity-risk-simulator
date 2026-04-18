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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["by-region"];


const pageTitle = "九州電力エリアの法人電気代事情｜太陽光大量導入と料金特性";
const pageDescription =
  "九州電力エリア（九州7県）の法人向け電気料金を詳解。全国最多水準の太陽光発電導入による出力制御・料金特性、高圧・特別高圧の単価目安、2023〜2026年の改定動向、新電力状況と契約見直しのポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-kyushu-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "九州電力 法人",
    "九電エリア 電気料金",
    "九州 高圧電力 単価",
    "九州 太陽光 出力制御",
    "九州 新電力",
    "法人電気代 福岡",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const prefectures = [
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
];

const areaBasicInfo = [
  { label: "担当都道府県", value: "福岡県・佐賀県・長崎県・熊本県・大分県・宮崎県・鹿児島県（九州7県）" },
  { label: "旧一般電気事業者", value: "九州電力（送配電：九州電力送配電）" },
  { label: "小売部門", value: "九州電力株式会社（小売部門として一体運営）" },
  { label: "管内面積（概算）", value: "約 36,800 km²" },
  { label: "管内世帯数（概算）", value: "約 640万世帯" },
  { label: "法人需要家数の目安", value: "約 70万口（高圧以上：約 6.5万口）" },
  { label: "電源構成の特徴", value: "太陽光 約 25〜35%（日中）、原子力（川内・玄海）約 20〜25%、LNG火力約 25〜30%" },
  { label: "太陽光発電設備容量", value: "約 1,800〜2,000万kW（全国最大規模）" },
  { label: "出力制御状況", value: "年間の出力制御率が全国で最も高い水準。再エネの系統接続に制約あり" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 18〜23%（高圧・特別高圧の推計）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,100〜1,400 円/kW",
    ryoryo: "約 10〜12.5 円/kWh",
    nencho: "燃調費別途",
    note: "全国比で割安水準",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,200〜1,600 円/kW",
    ryoryo: "約 12〜15 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "高圧（6kV）小口需要",
    kihon: "固定 + 需要割",
    ryoryo: "約 13〜16 円/kWh",
    nencho: "燃調費別途",
    note: "小規模事業所",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 750〜950 円/kW",
    ryoryo: "約 12〜15 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ認可。九州電力も高圧・特別高圧の標準メニューを改定。原子力の稼働継続と太陽光の豊富な発電量が他エリアより値上げ幅を抑制。",
  },
  {
    date: "2023年12月",
    content: "太陽光発電の出力制御に伴う系統安定化コストが顕在化。九州電力は出力制御補償コストを電気料金原価に含める形で対応。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。九州エリアも例外なく高圧・特別高圧の料金単価に影響。ただし電源が多様なため他エリアと比較して影響は限定的。",
  },
  {
    date: "2024年10月",
    content: "電気・ガス料金激変緩和措置終了。法人の実負担は上昇したが、太陽光・原子力の活用から他エリアより影響は抑制。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金 3.49 円/kWh へ引き上げ。全エリア共通だが、九州は再エネ発電量が多いため長期的には賦課金単価の抑制効果が期待される。",
  },
  {
    date: "2026年4月（直近）",
    content: "川内原発の稼働継続、玄海原発も稼働中。LNG価格落ち着きに加え原子力・太陽光の安定調達が寄与し、電力量料金は全国比で低い水準を維持。",
  },
];

const solarFeatures = [
  {
    title: "全国最大規模の太陽光発電導入",
    body: "九州7県は日照時間が長く、全国で最も多くの太陽光発電設備が導入されています。2024年時点で設備容量は約1,800〜2,000万kWに達しており、晴天の日中には系統の電力を太陽光だけで賄えるレベルになっています。この豊富な再エネ発電量は電源の多様化と燃料費節減に貢献しています。",
  },
  {
    title: "出力制御が頻発する課題",
    body: "太陽光発電量が系統の需要を上回る際、九州電力は系統安定化のために出力制御（カーテイルメント）を実施しています。年間の出力制御量・時間は全国で最多。法人向け太陽光PPA・オンサイト発電で余剰電力が発生する場合も影響を受けることがあります。",
  },
  {
    title: "原子力との組み合わせによる低コスト電源構成",
    body: "川内原発（鹿児島）・玄海原発（佐賀）が稼働しており、昼間の太陽光＋夜間の原子力というベースロード電源の組み合わせが実現しています。この組み合わせにより九州の法人向け電気料金は全国比で割安水準を維持しやすい構造となっています。",
  },
  {
    title: "将来の系統増強・蓄電池政策",
    body: "出力制御の解消に向け、九州〜本州間の連系線増強（日本海ルート）や大型蓄電池の整備が進んでいます。これらの系統増強コストは将来の託送料金に含まれて法人負担となる可能性があり、長期的な動向を注視する必要があります。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "全国比で需要規模が小さいため、新電力の参入数は東京・関西より少ない（40〜60社程度）。ただし九州電力の料金水準が低いこともあり、値引き余地が限られる中での競争となっている。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022〜2023年の撤退ラッシュでは規模の小さい新電力が中心に撤退。九州電力本体の料金が全国比で低いため、撤退後に九州電力へ戻るケースが多く、切替影響が相対的に限定的だった。",
  },
  {
    category: "価格競争力",
    detail:
      "旧一電の料金水準が全国比で割安であるため、新電力が大幅な値引きを提示するのが難しい状況。それでも大口需要家では5〜10%程度の引き下げを実現する事業者もある。",
  },
  {
    category: "再エネ特化型サービス",
    body: "太陽光発電が豊富な九州では、地産地消型の再エネプランや環境価値（FIT証書・非化石証書）を組み合わせた脱炭素対応メニューを提供する新電力も存在する。",
    detail: "太陽光発電が豊富な九州では、地産地消型の再エネプランや環境価値（FIT証書・非化石証書）を組み合わせた脱炭素対応メニューを提供する新電力も存在する。",
  },
];

export default function RegionKyushuBusinessElectricityPage() {
  const weather = getWeatherByRegion("kyushu");
  return (
    <>
      <ArticleJsonLd
        headline="九州電力エリアの法人電気代事情｜太陽光大量導入と料金特性"
        description="九州電力エリア（九州7県）の法人向け電気料金を詳解。全国最多水準の太陽光発電導入による出力制御・料金特性、高圧・特別高圧の単価目安、2023〜2026年の改定動向、新電力状況と契約見直しのポイントを解説します。"
        url="https://simulator.eic-jp.org/region-kyushu-business-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "九州電力エリアの法人電気代事情" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">九州電力エリアの事情</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-amber-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          九州電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-amber-800">太陽光大量導入と料金特性</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          九州電力エリアは全国最大規模の太陽光発電設備を有し、川内・玄海の原子力発電も稼働することで
          再エネ・原子力の組み合わせによる割安な電源構成を実現しています。
          法人向け電気料金は全国比で低い水準を維持していますが、
          太陽光出力制御による系統コスト・容量拠出金・再エネ賦課金の増加は全国共通の課題です。
          本ページでは、エリアの基本情報・料金水準・太陽光の影響・新電力状況・見直しポイントを解説します。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {prefectures.map((p) => (
            <span
              key={p}
              className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800"
            >
              {p}
            </span>
          ))}
        </div>
      </header>

      {/* エリア基本情報テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア基本情報</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          九州電力エリアの規模感・事業者構成・電源特性を確認してください。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-amber-50">
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
        <h2 className="text-xl font-semibold text-slate-900">料金水準（法人向け標準メニュー目安）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は九州電力の標準メニューをベースにした概算値です。
          燃料費調整額・再エネ賦課金（2026年4月時点: 3.49 円/kWh）は別途加算されます。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-amber-50">
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
              { area: "四国電力エリア", value: 17.0, color: "bg-amber-300" },
              { area: "九州電力エリア（当エリア）", value: 14.2, color: "bg-amber-600" },
              { area: "沖縄電力エリア", value: 19.5, color: "bg-red-400" },
            ].map((item) => (
              <div key={item.area}>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className={item.area.includes("当エリア") ? "font-bold text-amber-800" : ""}>{item.area}</span>
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

      {/* 太陽光大量導入の影響 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">太陽光大量導入と電力事情</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {solarFeatures.map((item, i) => (
            <div key={i} className="rounded-xl border border-amber-100 bg-amber-50 p-4">
              <h3 className="text-base font-semibold text-amber-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>

        {/* 電源別構成の可視化 */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900">九州電力エリアの電源別発電量構成（概算・年間ベース）</h3>
          <p className="mt-1 text-xs text-slate-500">日射量や原発稼働状況により年度・季節で変動。概算値。</p>
          <div className="mt-4 space-y-3">
            {[
              { source: "太陽光", pct: 28, color: "bg-amber-400" },
              { source: "原子力（川内・玄海）", pct: 22, color: "bg-purple-400" },
              { source: "LNG火力", pct: 27, color: "bg-sky-400" },
              { source: "石炭火力", pct: 12, color: "bg-slate-400" },
              { source: "水力・その他再エネ", pct: 11, color: "bg-green-400" },
            ].map((item) => (
              <div key={item.source}>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span>{item.source}</span>
                  <span>{item.pct}%</span>
                </div>
                <div className="h-4 w-full rounded bg-slate-100">
                  <div className={`h-4 rounded ${item.color}`} style={{ width: `${item.pct * 3}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最近の料金改定動向（2023〜2026年）</h2>
        <div className="mt-4 space-y-3">
          {revisionHistory.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-xs font-semibold text-amber-700 pt-1">{item.date}</div>
              <div className="flex-1 rounded-lg border border-slate-100 bg-slate-50 px-4 py-2 text-sm leading-7 text-slate-700">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 新電力動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">新電力動向</h2>
        <div className="mt-4 space-y-3">
          {newPowerStatus.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">{item.category}</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 契約見直しポイント */}
      <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">九州電力エリアで契約見直しを進める際のポイント</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>
            <span className="font-semibold">旧一電の単価が全国比で割安なことを念頭に比較する</span>
            — 九州電力の電力量料金は関西電力と並んで全国最低水準グループに位置します。新電力への乗り換えメリットは他エリアより限定的な場合があります。
          </li>
          <li>
            <span className="font-semibold">太陽光 PPA・オンサイト発電の余剰電力管理に注意する</span>
            — 出力制御が頻発するエリアのため、オンサイト太陽光の余剰売電計画や蓄電池との組み合わせを事前に検討してください。
          </li>
          <li>
            <span className="font-semibold">再エネ地産地消型メニューを活用する</span>
            — 太陽光発電量が豊富な九州では地産地消型の再エネプランが存在します。環境価値（非化石証書）の取得と合わせてGHG削減に活用できます。
          </li>
          <li>
            <span className="font-semibold">原発の稼働状況をモニタリングする</span>
            — 川内・玄海の稼働継続が電力料金の割安維持に寄与しています。定期検査・トラブル停止時の燃料費増加リスクを把握しておいてください。
          </li>
          <li>
            <span className="font-semibold">系統増強コスト（将来の託送料金上昇）に備える</span>
            — 出力制御解消のための連系線増強・蓄電池整備のコストが将来の託送料金に上乗せされる可能性があります。
            <Link href="/capacity-contribution-explained" className="ml-1 text-amber-700 underline underline-offset-2 hover:text-amber-900">
              容量拠出金・系統コストの詳細はこちら
            </Link>
          </li>
        </ol>
      </section>

      {/* 電源構成の実績データ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電源構成の実績データ（30分値集計）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          2023〜2026年の30分値データ（12,144レコード）を集計した九州エリアの電源構成実績です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="text-xs font-semibold text-indigo-700">原子力</p>
            <p className="mt-1 text-2xl font-bold text-indigo-900">29.5%</p>
            <p className="text-xs text-indigo-600">平均 3,378 MW / 稼働率 100%</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600">石炭火力</p>
            <p className="mt-1 text-2xl font-bold text-slate-800">30.1%</p>
            <p className="text-xs text-slate-500">平均 3,449 MW</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-xs font-semibold text-red-700">太陽光抑制</p>
            <p className="mt-1 text-2xl font-bold text-red-900">13.8%</p>
            <p className="text-xs text-red-600">全国最多 / 最大 4,838 MW</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-xs font-semibold text-blue-700">連系線（輸出）</p>
            <p className="mt-1 text-2xl font-bold text-blue-900">−1,637 MW</p>
            <p className="text-xs text-blue-600">常時輸出エリア</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          原子力29.5%（稼働率100%）と太陽光13.3%の組合せが特徴です。太陽光出力制御は全国最多の13.8%（昼間時間帯）で、
          3月には平均565.6MW、4月には851.8MWが抑制されています。余剰電力は連系線で常時1,637MWを輸出しています。
          <a href="/solar-curtailment-by-area" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">→ 太陽光出力制御の実態を見る</a>
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
        <h2 className="text-xl font-semibold text-slate-900">JEPX卸市場でのエリアプライス推移</h2>
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
                const areaPrice = row.kyushu;
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
          九州エリアは太陽光発電の大量導入により、昼間の余剰電力でエリアプライスが全国最安水準。FY2022ですら14.42円と全国平均を-5.99円下回りました。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア需要の特徴</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          九州電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "kyushu")?.share}%を占めます。太陽光大量導入で昼間の余剰が発生。需要の変動パターンが他エリアと異なる。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-amber-50">
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
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{d?.kyushu.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{lf?.kyushu}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: OCCTO公表データを集計（FY2016〜FY2023）</p>
      </section>

      {/* 気候データと電力需要の関係 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">気候データと電力需要の関係</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          福岡の気象データから、当エリアの電力需要に影響する気候特性を整理します。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {weather.summerTmax && (
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">夏の最高気温（7-8月平均）</p>
              <p className="mt-1 text-2xl font-bold text-red-900">{weather.summerTmax.tmax2020_25}℃</p>
              <p className="mt-1 text-sm text-red-700">1990年代後半比 +{weather.summerTmax.change}℃</p>
            </div>
          )}
          {weather.winterTmin && (
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">冬の最低気温（1-2月平均）</p>
              <p className="mt-1 text-2xl font-bold text-blue-900">{weather.winterTmin.tmin2020_25}℃</p>
              <p className="mt-1 text-sm text-blue-700">1990年代後半比 {weather.winterTmin.change > 0 ? "+" : ""}{weather.winterTmin.change}℃</p>
            </div>
          )}
          {weather.hotDays && (
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-800">猛暑日（35℃超）の10年合計</p>
              <p className="mt-1 text-sm text-amber-700">1990年代: {weather.hotDays.d1990s}日 → 2020年代: {weather.hotDays.d2020s}日</p>
              <p className="mt-1 text-sm font-semibold text-amber-900">
                {weather.hotDays.d2020s > weather.hotDays.d1990s * 2 ? `約${Math.round(weather.hotDays.d2020s / Math.max(weather.hotDays.d1990s, 1))}倍に増加` : "増加傾向"}
              </p>
            </div>
          )}
          {weather.cdd ? (
            <div className="rounded-lg border border-orange-100 bg-orange-50 p-4">
              <p className="text-sm font-semibold text-orange-800">冷房度日（CDD）の変化</p>
              <p className="mt-1 text-sm text-orange-700">{weather.cdd.cdd1995_99} → {weather.cdd.cdd2020_24}</p>
              <p className="mt-1 text-sm font-semibold text-orange-900">+{weather.cdd.changePercent}%増加</p>
            </div>
          ) : weather.hdd ? (
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-800">暖房度日（HDD）の変化</p>
              <p className="mt-1 text-sm text-sky-700">{weather.hdd.hdd1995_99} → {weather.hdd.hdd2020_24}</p>
              <p className="mt-1 text-sm font-semibold text-sky-900">{weather.hdd.changePercent}%減少</p>
            </div>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          福岡の冷房度日は+38%増加（名古屋に次ぐ）。猛暑日も18日→126日に急増。太陽光発電が多いため昼間は余剰電力が出やすい一方、夕方以降の冷房需要が卸市場価格を押し上げる構造です。
        </p>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
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
              href: "/region-kansai-business-electricity",
              title: "関西電力エリアの法人電気代事情",
              description: "原発再稼働の影響と関西エリアの料金特性を解説。",
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
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="九州電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、燃料費変動・容量拠出金・再エネ賦課金のリスクを数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "解説記事一覧へ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
