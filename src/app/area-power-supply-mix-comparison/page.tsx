import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import AreaSupplyMixChart from "../../components/area-supply/AreaSupplyMixChart";
import { AREA_SUPPLY_DATA } from "../../data/areaSupplyData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["power-procurement"];


const pageTitle = "エリア別電源構成マップ｜9エリアの発電ミックスを比較する";
const pageDescription =
  "東京はLNG55.7%、北陸は石炭53.8%、関西は原子力34.8%──同じ日本でもエリアごとに電源構成は大きく異なります。9エリアの30分値実績データから電源構成比率を可視化し、法人電気料金への影響を解説します。";
const pageUrl = "https://simulator.eic-jp.org/area-power-supply-mix-comparison";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電源構成 エリア別",
    "発電ミックス 比較",
    "電力会社 電源構成",
    "LNG火力 依存",
    "原子力 比率 エリア",
    "法人電気料金 電源構成",
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

const areaProfiles = [
  {
    area: "東京",
    color: "border-sky-200 bg-sky-50",
    titleColor: "text-sky-900",
    summary: "LNG火力が55.7%を占め、国際ガス価格に最も敏感なエリア。太陽光は出力最大だがシェア10.7%に留まる。",
    risk: "LNG価格高騰 → 燃調費急上昇",
    features: ["LNG 55.7%（全国最高）", "太陽光抑制 0%（吸収余力あり）", "常時 4,456MW を他エリアから輸入"],
  },
  {
    area: "関西",
    color: "border-indigo-200 bg-indigo-50",
    titleColor: "text-indigo-900",
    summary: "原子力34.8%（稼働率100%）がベースロードを担い、燃料費変動リスクが相対的に低い。揚水発電の活用も全国最積極的。",
    risk: "原発停止リスク → 火力代替で急騰",
    features: ["原子力 34.8%（全国最高）", "揚水発電 充電時間率 47.7%", "太陽光抑制 10.1%（昼間余剰）"],
  },
  {
    area: "北陸",
    color: "border-emerald-200 bg-emerald-50",
    titleColor: "text-emerald-900",
    summary: "石炭53.8%＋水力26.9%という独自の構成。水力の豊富さが料金安の一因だったが、石炭価格高騰で2023年大幅値上げ。",
    risk: "石炭価格高騰 + 水力渇水",
    features: ["石炭 53.8%（全国最高）", "水力 26.9%（全国最高）", "原子力 0%（全停止）"],
  },
  {
    area: "九州",
    color: "border-red-200 bg-red-50",
    titleColor: "text-red-900",
    summary: "原子力29.5%（稼働率100%）と太陽光13.3%の組合せ。太陽光出力制御が全国最多（昼間13.8%）で、余剰電力を他エリアへ輸出。",
    risk: "太陽光抑制拡大 → 再エネ投資効率低下",
    features: ["原子力 29.5%（100%稼働）", "太陽光抑制率 13.8%（全国最多）", "常時 1,637MW を輸出"],
  },
  {
    area: "北海道",
    color: "border-teal-200 bg-teal-50",
    titleColor: "text-teal-900",
    summary: "石炭37.8%、風力9.9%（全国最高）、太陽光10.5%。再エネ比率は季節変動が極めて大きく、5月61.2%→1月30.5%。",
    risk: "冬季の化石燃料依存 + 連系線制約",
    features: ["風力 9.9%（全国最高）", "再エネ比率 5月61.2%↔1月30.5%", "蓄電池稼働率 98.8%"],
  },
  {
    area: "中部",
    color: "border-orange-200 bg-orange-50",
    titleColor: "text-orange-900",
    summary: "LNG49.6%で東京に次ぐ高依存度。製造業の電力需要が多く、太陽光13.5%は中位水準。",
    risk: "LNG価格変動の影響大",
    features: ["LNG 49.6%（東京に次ぐ）", "太陽光 13.5%", "原子力 0%（浜岡停止）"],
  },
  {
    area: "東北",
    color: "border-cyan-200 bg-cyan-50",
    titleColor: "text-cyan-900",
    summary: "石炭36.0%＋LNG28.3%の火力主体だが、太陽光9.5%＋風力4.5%の再エネも伸長。全国最大の電力輸出エリア。",
    risk: "再エネ抑制拡大リスク",
    features: ["常時 4,041MW を輸出（全国最大）", "風力 4.5%（北海道に次ぐ）", "地熱 1.0%"],
  },
  {
    area: "中国",
    color: "border-amber-200 bg-amber-50",
    titleColor: "text-amber-900",
    summary: "石炭43.9%と高い化石燃料依存。太陽光15.8%は全国上位だが、島根原発再稼働で構成変化の可能性。",
    risk: "石炭価格高騰リスク",
    features: ["石炭 43.9%", "太陽光 15.8%（全国上位）", "原子力 6.4%（島根2号機）"],
  },
  {
    area: "四国",
    color: "border-yellow-200 bg-yellow-50",
    titleColor: "text-yellow-900",
    summary: "石炭45.5%＋原子力17.1%（伊方稼働率78%）。太陽光抑制率10.5%と高く、需要規模が小さいため余剰吸収が課題。",
    risk: "太陽光抑制 + 石炭価格上昇",
    features: ["石炭 45.5%", "原子力 17.1%（伊方3号機）", "太陽光抑制 10.5%"],
  },
];

export default function AreaPowerSupplyMixComparisonPage() {
  return (
    <>
      <ArticleJsonLd
        headline="エリア別電源構成マップ｜9エリアの発電ミックスを比較する"
        description="東京はLNG55.7%、北陸は石炭53.8%、関西は原子力34.8%──同じ日本でもエリアごとに電源構成は大きく異なります。9エリアの30分値実績データから電源構成比率を可視化し、法人電気料金への影響を解説します。"
        url="https://simulator.eic-jp.org/area-power-supply-mix-comparison"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "エリア別電源構成マップ" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">エリア別電源構成マップ</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">POWER SUPPLY ／ 電力調達の仕組みを知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          エリア別電源構成マップ
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">9エリアの発電ミックスを比較する</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本の電力系統は9つのエリアに分かれており、エリアごとに電源構成（発電ミックス）がまったく異なります。
          東京はLNG火力が55.7%、北陸は石炭53.8%、関西は原子力34.8%──この違いが、燃料費調整額の変動幅やJEPX市場価格の
          エリア差となって法人電気料金に直接影響しています。30分値の実績データ（30万件超）をもとに、各エリアの「顔」を可視化します。
        </p>
      </header>

      {/* チャート */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">9エリア電源構成比率（30分値データ集計）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          2024〜2026年の30分値実績データ（計307,229レコード）を集計した平均電源構成比率です。
          横軸の100%が各エリアの総発電量に対応します。
        </p>
        <div className="mt-4">
          <AreaSupplyMixChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: 各一般送配電事業者公表の30分値データを集計（2024年2月〜2026年4月）</p>
      </section>

      {/* 電源構成の数値テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア別 主要電源比率（%）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">エリア</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">原子力</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">LNG</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">石炭</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">水力</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">太陽光</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">風力</th>
              </tr>
            </thead>
            <tbody>
              {AREA_SUPPLY_DATA.map((row, i) => (
                <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.area}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.nuclear.toFixed(1)}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.lng.toFixed(1)}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.coal.toFixed(1)}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.hydro.toFixed(1)}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.solar.toFixed(1)}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.wind.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 法人料金への影響 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">電源構成が法人電気料金に影響する3つの経路</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">1. 燃料費調整額</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              LNG・石炭依存度が高いエリアほど、国際燃料価格の変動が燃調費に直結します。
              東京（LNG 55.7%）や北陸（石炭 53.8%）は変動幅が大きくなりやすい構造です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">2. JEPX市場価格</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              太陽光が多いエリアは昼間の市場価格が低下しやすい一方、夕方のランプアップで急騰リスクがあります。
              市場連動型プランの企業にとって電源構成はコストの「形」を決めます。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">3. 安定供給リスク</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              原子力が稼働しているエリア（関西・九州）はベースロード電源が安定。停止中のエリアは
              火力フル稼働が前提となり、燃料調達や設備トラブル時の供給逼迫リスクが高まります。
            </p>
          </div>
        </div>
      </section>

      {/* エリア別プロフィール */}
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">エリア別プロフィール</h2>
        <p className="text-sm leading-7 text-slate-600">各エリアの電源構成の特徴と料金影響リスクの概要です。</p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {areaProfiles.map((p) => (
            <div key={p.area} className={`rounded-xl border p-4 ${p.color}`}>
              <h3 className={`text-lg font-semibold ${p.titleColor}`}>{p.area}エリア</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{p.summary}</p>
              <div className="mt-3">
                <p className="text-xs font-semibold text-slate-500">主なリスク要因</p>
                <p className="text-sm font-medium text-red-700">{p.risk}</p>
              </div>
              <ul className="mt-2 space-y-1">
                {p.features.map((f) => (
                  <li key={f} className="text-xs text-slate-600">・{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 原子力稼働状況 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">原子力発電の稼働状況</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          原子力の稼働状況はエリアの電源構成を大きく左右します。関西・九州は100%稼働でベースロードを担う一方、
          北海道・中部・北陸は完全停止で火力に全面依存しています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">エリア</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均出力（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最大出力（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">稼働時間率</th>
              </tr>
            </thead>
            <tbody>
              {[
                { area: "関西", avg: 5368, max: 6605, pct: "100.0%" },
                { area: "九州", avg: 3378, max: 4906, pct: "100.0%" },
                { area: "四国", avg: 680, max: 882, pct: "78.0%" },
                { area: "中国", avg: 415, max: 812, pct: "51.9%" },
                { area: "東北", avg: 392, max: 845, pct: "50.3%" },
                { area: "東京", avg: 59, max: 1321, pct: "5.3%" },
                { area: "北海道", avg: 0, max: 0, pct: "0.0%" },
                { area: "中部", avg: 0, max: 0, pct: "0.0%" },
                { area: "北陸", avg: 0, max: 0, pct: "0.0%" },
              ].map((row, i) => (
                <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.area}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.avg.toLocaleString()}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.max.toLocaleString()}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{row.pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ：自社エリアの電源構成を知ることが契約見直しの第一歩</h2>
        <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
          <p>
            電源構成はエリアごとに全く異なり、それが法人電気料金の「変動の仕方」を決定づけます。
            LNG依存エリアはガス価格、石炭依存エリアは石炭価格、原子力エリアは稼働リスクがそれぞれ主要な料金変動要因です。
          </p>
          <p>
            自社の事業所がどのエリアに属し、そのエリアの電源構成がどのような特徴を持つかを理解したうえで、
            固定価格型・市場連動型などの<Link href="/fixed-vs-market-linked-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約タイプ</Link>を選ぶことで、
            リスクに見合った電力調達が可能になります。
          </p>
        </div>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/duck-curve-electricity-price-impact", title: "ダックカーブとは何か", description: "太陽光の普及で生まれた昼と夕方の需給ギャップを解説。" },
            { href: "/solar-curtailment-by-area", title: "太陽光出力制御の実態", description: "どのエリアでどれだけ太陽光が抑制されているかを可視化。" },
            { href: "/inter-area-power-flow-explained", title: "エリア間電力融通の実態", description: "東京は常時4,456MW輸入。連系線の役割と限界を解説。" },
            { href: "/thermal-vs-renewable-trend", title: "火力 vs 再エネ 年度別推移", description: "FY2023→FY2026の電源構成変化を追跡。" },
            { href: "/fuel-cost-adjustment", title: "燃料費調整額とは", description: "電源構成と燃調費の関係を理解する基礎知識。" },
            { href: "/market-price-adjustment", title: "市場価格調整額とは", description: "JEPXエリアプライスと電源構成の関連性。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、燃料費変動・容量拠出金・再エネ賦課金のリスクを総合的に数値化できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/power-procurement", label: "電力調達の記事一覧" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
