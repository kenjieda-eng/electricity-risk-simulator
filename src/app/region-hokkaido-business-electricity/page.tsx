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


const pageTitle = "北海道電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "北海道電力エリアの法人向け電気料金を詳解。高圧・特別高圧の単価目安、2023〜2026年の料金改定動向、新電力の参入・撤退状況、石炭火力依存リスクと契約見直しのポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-hokkaido-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "北海道電力 法人",
    "ほくでん エリア 電気料金",
    "北海道 高圧電力 単価",
    "北海道電力 料金改定",
    "北海道 新電力",
    "法人電気代 北海道",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

const prefectures = ["北海道"];

const areaBasicInfo = [
  { label: "担当都道府県", value: "北海道" },
  { label: "旧一般電気事業者", value: "北海道電力（通称：ほくでん）" },
  { label: "送配電事業者", value: "北海道電力ネットワーク" },
  { label: "小売事業者", value: "北海道電力（小売部門）" },
  { label: "管内面積（概算）", value: "約 83,450 km²（全国最大）" },
  { label: "管内世帯数（概算）", value: "約 270万世帯" },
  { label: "法人需要家数の目安", value: "約 25万口（高圧以上：約 1.5万口）" },
  { label: "電源構成の特徴", value: "石炭火力約 35〜40%、LNG火力約 20〜25%、水力約 15%、再エネ（風力・太陽光）約 10%" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 15〜20%" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,600〜2,000 円/kW",
    ryoryo: "約 13〜16 円/kWh",
    nencho: "燃調費別途",
    note: "大工場・大型施設向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,800〜2,200 円/kW",
    ryoryo: "約 16〜19 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 1,000〜1,300 円/kW",
    ryoryo: "約 17〜20 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ申請が認可。高圧・特別高圧も同時期に標準メニューを改定。全国最高水準の料金水準が一段と上昇。",
  },
  {
    date: "2023年12月",
    content: "燃料費調整額の基準燃料価格を改定。石炭・LNG価格の高止まりを反映してプラス幅が拡大。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。高圧・特別高圧需要家の契約単価に容量市場調達コストが転嫁される形となった。",
  },
  {
    date: "2024年10月",
    content: "電気・ガス料金激変緩和措置が段階的縮小・終了。法人の請求額が再び上昇。特に暖房需要の多い北海道では影響が大きかった。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ（前年比 +0.4 円程度）。高圧以上の影響も大きい。",
  },
  {
    date: "2026年4月（直近）",
    content: "石炭・LNG価格のやや落ち着きにより燃調費プラス幅はわずかに縮小傾向。ただし容量拠出金・再エネ賦課金のコストは継続。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "需要規模が小さく新電力にとって採算が取りにくいエリア。参入社数は全国で最も少ない部類に属し、高圧向けに実績のある事業者は限定的（2024年時点で数十社程度）。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022年のエネルギー危機以降、北海道で新規受付を停止または撤退した新電力が複数確認されている。もともと参入数が少ないため、撤退後の選択肢が一層限られる状況になった。",
  },
  {
    category: "市場シェア推移",
    detail:
      "新電力シェアは 15% 前後で横ばいが続いており、全国水準（30% 超）を大きく下回る。需要規模の小ささと厳冬期の供給リスクが新電力参入を抑制している。",
  },
  {
    category: "価格競争力",
    detail:
      "ほくでんの高い料金水準のため、新電力の値引き幅は他エリアと比較して限定的。相見積もりを取っても削減率は 3〜8% 程度にとどまるケースが多い。",
  },
];

export default function RegionHokkaidoBusinessElectricityPage() {
  const weather = getWeatherByRegion("hokkaido");
  return (
    <>
      <ArticleJsonLd
        headline="北海道電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況"
        description="北海道電力エリアの法人向け電気料金を詳解。高圧・特別高圧の単価目安、2023〜2026年の料金改定動向、新電力の参入・撤退状況、石炭火力依存リスクと契約見直しのポイントを解説します。"
        url="https://simulator.eic-jp.org/region-hokkaido-business-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "北海道電力エリアの法人電気代事情" },
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
        <span className="text-slate-800">北海道電力エリアの事情</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          北海道電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          北海道電力エリアは本州から孤立した独立系統を持ち、石炭火力への高い依存度と全国最高水準の電気料金が特徴です。
          寒冷地ゆえの暖房電力需要が大きく、燃料費変動の影響を直接受けやすい構造となっています。
          本ページでは、エリアの基本情報・料金水準・改定動向・新電力状況・
          契約見直しポイントを詳しく解説します。
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

      {/* エリア基本情報テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア基本情報</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          北海道電力エリアの規模感・事業者構成を確認してください。
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
        <h2 className="text-xl font-semibold text-slate-900">料金水準（法人向け標準メニュー目安）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は北海道電力の標準メニューをベースにした概算値です。
          燃料費調整額・再エネ賦課金（2026年4月時点: 3.49 円/kWh）は別途加算されます。
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
              { area: "北海道電力エリア（当エリア）", value: 18.5, color: "bg-blue-600" },
              { area: "東北電力エリア", value: 16.2, color: "bg-teal-400" },
              { area: "東京電力エリア", value: 15.5, color: "bg-sky-400" },
              { area: "中部電力エリア", value: 15.0, color: "bg-emerald-400" },
              { area: "北陸電力エリア", value: 14.5, color: "bg-green-400" },
              { area: "関西電力エリア", value: 13.8, color: "bg-indigo-400" },
              { area: "中国電力エリア", value: 16.8, color: "bg-orange-400" },
              { area: "四国電力エリア", value: 17.0, color: "bg-amber-400" },
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
        </div>
      </section>

      {/* エリア特有の事情 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">北海道電力エリア特有の事情</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">石炭火力への高依存（CO2コスト増リスク）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              北海道電力は電源構成の約 35〜40% を石炭火力に依存しており、全国的に見ても高い比率です。
              カーボンプライシング（炭素税・排出量取引）の本格導入が議論される中、将来的な CO2 コスト増が
              電気料金に転嫁されるリスクがあります。Scope 2 排出量の管理を求められる企業にとっても重要な課題です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">全国最高水準の電力量料金</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              北海道電力の高圧向け電力量料金は、本土9エリアの中で最も高い水準となっています。
              独立系統による他エリアからの融通制限、需要密度の低さ、燃料調達コストなどが複合的に作用しています。
              製造業や冷凍・冷蔵倉庫など電力多消費業種への影響が特に大きいエリアです。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">寒冷地ゆえの暖房電力需要</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              冬季の暖房電力需要が全国で最も大きく、1〜2 月を中心に電力消費量が急増します。
              デマンドコントロールが難しい暖房用途では最大需要電力（デマンド）が上昇しやすく、
              基本料金の増加につながります。電気暖房の一部をガスや灯油に切り替えるなどのピーク対策が有効です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">洋上風力を含む再エネポテンシャル</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              北海道は風力・太陽光・バイオマスなど再エネのポテンシャルが全国屈指です。
              石狩湾沖などで洋上風力の開発が進んでおり、中長期的には再エネ比率の向上が期待されます。
              オンサイト太陽光や PPA による自家消費も石炭火力依存の軽減に有効な選択肢です。
            </p>
          </div>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最近の料金改定動向（2023〜2026年）</h2>
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
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">北海道電力エリアで契約見直しを進める際のポイント</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>
            <span className="font-semibold">石炭火力依存によるCO2コスト増リスクを確認する</span>
            — カーボンプライシング導入時の影響試算を行い、再エネ調達（非化石証書・PPA）への切り替え計画を検討してください。
          </li>
          <li>
            <span className="font-semibold">暖房電力のデマンド管理を徹底する</span>
            — 冬季ピーク時のデマンド値が基本料金を押し上げます。ピーク時間帯の暖房出力制御やシフトが効果的です。
          </li>
          <li>
            <span className="font-semibold">寒冷地特有の厳冬期ピーク制御を実施する</span>
            — 1〜2 月は需要ピークが集中します。デマンドコントローラーの導入や蓄熱設備の活用を検討してください。
          </li>
          <li>
            <span className="font-semibold">再エネ導入（風力・バイオマス）を検討する</span>
            — 北海道の豊富な再エネポテンシャルを活かし、オンサイト発電や PPA による自家消費を推進することで CO2 排出量と電気代の双方を削減できます。
          </li>
          <li>
            <span className="font-semibold">契約電力の適正化を行う</span>
            — 過大な契約電力設定は基本料金の無駄払いにつながります。過去 1 年のデマンド実績を確認し、適切な契約電力への変更を検討してください。
            <Link href="/capacity-contribution-cost-impact" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金の詳細はこちら
            </Link>
          </li>
        </ol>
      </section>

      {/* 電源構成の実績データ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電源構成の実績データ（30分値集計）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          2024〜2026年の30分値データ（35,280レコード）を集計した北海道エリアの電源構成実績です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600">石炭火力</p>
            <p className="mt-1 text-2xl font-bold text-slate-800">37.8%</p>
            <p className="text-xs text-slate-500">平均 1,328 MW</p>
          </div>
          <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4">
            <p className="text-xs font-semibold text-cyan-700">風力</p>
            <p className="mt-1 text-2xl font-bold text-cyan-900">9.9%</p>
            <p className="text-xs text-cyan-600">全国最高 / 平均 348 MW</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">太陽光</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">10.5%</p>
            <p className="text-xs text-amber-600">最大 2,153 MW</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-semibold text-emerald-700">再エネ季節変動</p>
            <p className="mt-1 text-2xl font-bold text-emerald-900">61.2% ↔ 30.5%</p>
            <p className="text-xs text-emerald-600">5月最大 / 1月最小</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          風力9.9%は全国最高で、再エネ比率は5月に61.2%に達する一方、1月は30.5%まで低下する極端な季節変動が特徴です。
          原子力はゼロ（全停止）で、冬季は石炭火力への依存度がさらに高まります。蓄電池稼働率98.8%は全国トップですが容量は小規模です。
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
                const areaPrice = row.hokkaido;
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
          北海道エリアは本州との連系線容量制約により、独自の需給バランスでプレミアムが恒常的に発生。FY2018は+5.54円と最大の乖離。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア需要の特徴</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          北海道電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "hokkaido")?.share}%を占めます。他エリアとの需要相関が最も低い(0.55〜0.78)。寒冷地特有の冬季暖房需要がパターンを独自化。
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
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{d?.hokkaido.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{lf?.hokkaido}%</td>
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
          札幌の気象データから、当エリアの電力需要に影響する気候特性を整理します。
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
          札幌の極寒日（-10℃以下）は1990年代の64日→2020年代の35日に半減。一方で夏の最高気温は+2.6℃上昇し、かつて冷房不要だった北海道でも冷房需要が急増しています。
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
              href: "/region-tohoku-business-electricity",
              title: "東北電力エリアの法人電気代事情",
              description: "東北エリアの料金水準・再エネ動向・新電力状況を解説。",
            },
            {
              href: "/region-tokyo-business-electricity",
              title: "東京電力エリアの法人電気代事情",
              description: "関東エリアの料金特性とLNG火力リスクを詳しく解説。",
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
          heading="北海道電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、石炭火力依存・燃料費変動・容量拠出金・再エネ賦課金のリスクを数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を確認する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
