import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { MARKET_DATA_FAQ } from "../../data/marketDataFaq";
import { SeasonDemandPriceChart, HourlyDemandComparisonChart } from "../../components/market-data/WinterVsSummerCharts";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import {
  SEASON_LABELS,
  SEASON_DEMAND,
  SEASON_PRICE_AVG,
  SEASON_PRICE_STD,
  EXTREME_WEATHER,
  DUCK_WINTER_SOLAR,
  DUCK_SUMMER_SOLAR,
} from "../../data/marketData";


const FAQ = MARKET_DATA_FAQ["winter-vs-summer-electricity"];

const pageTitle = "冬と夏 どちらが電気代リスクか｜法人向け季節別データ比較";
const pageDescription =
  "法人の電気代は冬と夏、どちらがリスクが大きいのか。需給逼迫、市場価格のスパイク、燃調費の動きを季節別データで比較し、契約メニュー別の影響度と対策を整理します。";
const pageUrl = "https://simulator.eic-jp.org/winter-vs-summer-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "冬と夏 電気代",
    "冬 夏 電気料金 比較",
    "冬 JEPX 価格 高い",
    "夏 冬 電力需要 違い",
    "電力価格 ボラティリティ 冬",
    "季節別 電気代 リスク",
    "法人 季節 電力調達",
    "冬季 電気料金 上昇",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/market-data", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/market-data"],
  },
};

const seasonData = SEASON_LABELS.map((label, i) => ({
  label,
  demand: SEASON_DEMAND[i],
  priceAvg: SEASON_PRICE_AVG[i],
  priceStd: SEASON_PRICE_STD[i],
}));

// 冬の昼間太陽光出力の合計（9〜15時）
const winterSolarPeak = DUCK_WINTER_SOLAR.slice(9, 15).reduce((a, b) => a + b, 0);
const summerSolarPeak = DUCK_SUMMER_SOLAR.slice(9, 15).reduce((a, b) => a + b, 0);

export default function WinterVsSummerElectricityPage() {
  return (
    <>
      <ArticleJsonLd
        headline="冬と夏、どちらが電気料金リスクか｜季節別データで検証する"
        description="冬の平均JEPX価格13.96円 vs 夏11.67円、標準偏差12.72 vs 6.57──データが示す「冬の方がリスクは高い」という事実。4つの理由と季節別時間帯パターン、太陽光の季節効果、法人の対策を解説します。"
        url="https://simulator.eic-jp.org/winter-vs-summer-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "冬と夏、どちらが電気料金リスクか" },
        ]}
      faq={FAQ}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/market-data" className="underline-offset-2 hover:underline">データで見る電力市場</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">冬と夏の電気料金リスク比較</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">MARKET DATA ／ データで見る電力市場</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          冬と夏、どちらが電気料金リスクか
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">季節別データで検証する</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「夏は冷房でコストが高い」というイメージがありますが、JEPXスポット市場のデータは
          異なる事実を示しています。冬の平均価格は13.96円/kWhと夏の11.67円より<strong>20%高く</strong>、
          価格の標準偏差（ボラティリティ）は12.72と夏の6.57の<strong>約2倍</strong>です。
          また、冬の電力需要（110,483MW）は夏（103,276MW）を上回り、
          極寒日の最高価格は24.75円と猛暑日の12.61円の2倍近くになります。
          データは「冬の方がリスクが高い」ことを明確に示しています。
        </p>
      </header>

      <TableOfContents />

      {/* 結論を最初に */}
      <section className="mt-6 rounded-xl border border-blue-300 bg-blue-50 p-5">
        <h2 className="text-xl font-semibold text-blue-900">結論：冬の方が電気料金リスクは高い</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-blue-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">冬の平均価格</p>
            <p className="text-2xl font-bold text-blue-700">13.96円</p>
            <p className="text-xs text-slate-500">夏（11.67円）比 +20%</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">冬の価格ボラティリティ（σ）</p>
            <p className="text-2xl font-bold text-blue-700">12.72</p>
            <p className="text-xs text-slate-500">夏（6.57）の約2倍</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">冬の平均需要</p>
            <p className="text-2xl font-bold text-blue-700">110,483MW</p>
            <p className="text-xs text-slate-500">夏（103,276MW）比 +7%</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">極寒日の価格</p>
            <p className="text-2xl font-bold text-blue-700">24.75円</p>
            <p className="text-xs text-slate-500">猛暑日（12.61円）の1.96倍</p>
          </div>
        </div>
      </section>

      {/* チャート1: 季節別需要・価格 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">季節別 平均需要とJEPX平均価格</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          4季節（春夏秋冬）の平均需要（棒グラフ・左軸）と平均スポット価格（折れ線・右軸）を重ね合わせて表示。
          需要も価格も冬が最高水準であることが確認できます。
        </p>
        <div className="mt-4">
          <SeasonDemandPriceChart />
        <MarketDataDownload
          filename="season-price-demand.csv"
          headers={["season", "demand_mw", "price_avg", "price_std"]}
          rows={SEASON_LABELS.map((season, i) => ({
            season,
            demand_mw: SEASON_DEMAND[i],
            price_avg: SEASON_PRICE_AVG[i],
            price_std: SEASON_PRICE_STD[i],
          }))}
          apiPath="/api/market-data"
          caption="季節別の平均需要・価格・ボラティリティ"
        />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: JEPX公表の30分値スポット価格・各一般送配電事業者の需要実績（FY2019〜FY2025集計）
        </p>
      </section>

      {/* 季節別詳細テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">季節別データ詳細</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">季節</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均需要（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均価格（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">標準偏差（ボラティリティ）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">変動係数（CV）</th>
              </tr>
            </thead>
            <tbody>
              {seasonData.map((row, i) => (
                <tr
                  key={row.label}
                  className={`${i === 3 ? "bg-blue-50 font-semibold" : i === 1 ? "bg-red-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <td className="border border-slate-200 px-3 py-2 font-semibold">
                    {row.label}
                    {i === 3 && <span className="ml-2 text-xs font-normal text-blue-600">← 最高リスク</span>}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right">
                    {row.demand.toLocaleString()}
                  </td>
                  <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${i === 3 ? "text-blue-700" : ""}`}>
                    {row.priceAvg.toFixed(2)}
                  </td>
                  <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${i === 3 ? "text-blue-700" : ""}`}>
                    {row.priceStd.toFixed(2)}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">
                    {((row.priceStd / row.priceAvg) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          変動係数（CV）= 標準偏差 ÷ 平均価格 × 100。数値が高いほど価格変動リスクが大きいことを示す。
        </p>
      </section>

      {/* チャート2: 時間帯別需要パターン */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">時間帯別需要パターン：冬の朝夕ダブルピーク vs 夏の昼ピーク</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          冬（青線）は朝7〜9時と夕方17〜19時にダブルピークを形成する一方、夏（赤線）は昼10〜14時に
          単一ピークを持つ形状です。この違いが電力市場価格の時間帯別パターンの差異につながっています。
        </p>
        <div className="mt-4">
          <HourlyDemandComparisonChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: 各一般送配電事業者公表の30分値需要データ（9エリア合計）の季節別時間帯平均
        </p>
      </section>

      {/* 4つの理由 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">冬のリスクが高い4つの理由</h2>
        <div className="mt-4 space-y-5">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">1</div>
              <h3 className="text-base font-semibold text-blue-900">需要量：冬の方が7%多い</h3>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              冬の平均需要は110,483MWと夏の103,276MWを7%上回ります。
              暖房（電気・ガスの熱源→電力消費）に加え、夜が長いことによる照明需要の増加、
              産業活動の稼働パターンが冬に電力需要を押し上げます。日本の電力需要は
              歴史的に「冬ピーク型」であり、これは現在も基本的に変わっていません。
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">2</div>
              <h3 className="text-base font-semibold text-blue-900">平均価格：冬は夏より20%高い</h3>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              冬の平均JEPX価格は13.96円/kWhと、夏の11.67円を20%上回っています。
              需要量の多さに加えて、LNG（液化天然ガス）の需要が冬季に急増するため
              燃料コストが上昇し、火力発電の発電コストが高くなることが主因です。
              LNGは暖房・発電双方に使われるため、厳冬年には燃料調達コストが逼迫します。
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">3</div>
              <h3 className="text-base font-semibold text-blue-900">ボラティリティ：冬の標準偏差は夏の2倍</h3>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              価格の標準偏差（ボラティリティ）は冬12.72に対して夏は6.57と約2倍の差があります。
              これは冬には価格が「穏やかな日」と「急騰する日」の両極端に分かれやすいことを意味します。
              2021年1月の大寒波時には価格が200円/kWhを超えた一方、暖冬年には10円以下の日が続くこともあります。
              この価格変動の大きさが「冬のリスクが高い」最大の理由です。
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">4</div>
              <h3 className="text-base font-semibold text-blue-900">極端事象：極寒日は猛暑日の2倍の価格</h3>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              極寒日（寒候期の下位5%水準の低温日）の平均JEPX価格は24.75円/kWhと、
              猛暑日の12.61円の1.96倍に達します。需要は極寒日で125,099MWと猛暑日の112,228MWを
              大きく上回り、供給余力が逼迫するとスパイク価格が発生するリスクが高まります。
            </p>
          </div>
        </div>
      </section>

      {/* 極端事象の比較 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">極端気象日の比較：極寒日 vs 猛暑日 vs 通常日</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">気象区分</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">サンプル数（日）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均需要（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均価格（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">通常日比（価格）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-blue-800">極寒日（最低気温下位5%）</td>
                <td className="border border-slate-200 px-3 py-2 text-right">{EXTREME_WEATHER.cold.n}</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-blue-700">{EXTREME_WEATHER.cold.demand.toLocaleString()}</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-bold text-blue-700">{EXTREME_WEATHER.cold.price.toFixed(2)}</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-blue-700">
                  +{(((EXTREME_WEATHER.cold.price - EXTREME_WEATHER.normal.price) / EXTREME_WEATHER.normal.price) * 100).toFixed(0)}%
                </td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-800">猛暑日（最高気温35℃以上）</td>
                <td className="border border-slate-200 px-3 py-2 text-right">{EXTREME_WEATHER.hot.n}</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">{EXTREME_WEATHER.hot.demand.toLocaleString()}</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-bold text-red-700">{EXTREME_WEATHER.hot.price.toFixed(2)}</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">
                  +{(((EXTREME_WEATHER.hot.price - EXTREME_WEATHER.normal.price) / EXTREME_WEATHER.normal.price) * 100).toFixed(0)}%
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-slate-200 px-3 py-2 text-slate-600">通常日</td>
                <td className="border border-slate-200 px-3 py-2 text-right">{EXTREME_WEATHER.normal.n}</td>
                <td className="border border-slate-200 px-3 py-2 text-right">{EXTREME_WEATHER.normal.demand.toLocaleString()}</td>
                <td className="border border-slate-200 px-3 py-2 text-right">{EXTREME_WEATHER.normal.price.toFixed(2)}</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-400">基準</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: JEPX・需要実績データとAMeDAS気温データを突合した集計（FY2019〜FY2025）
        </p>
      </section>

      {/* 時間帯別パターンの解説 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">時間帯別パターン：冬の朝夕ダブルピーク vs 夏の昼シングルピーク</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <h3 className="text-base font-semibold text-blue-900">冬のパターン：朝夕ダブルピーク</h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li><span className="font-semibold">朝7〜9時（第1ピーク）:</span> 起床→暖房・給湯の一斉稼働。工場・オフィスの始業と重なり急上昇。</li>
              <li><span className="font-semibold">日中10〜16時（谷）:</span> 日照があれば太陽光発電が需要をある程度補完するが、冬は発電量が少ない。</li>
              <li><span className="font-semibold">夕方17〜19時（第2ピーク）:</span> 帰宅→暖房再稼働。日没で太陽光ゼロに。電力価格が最高値をつける時間帯。</li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <h3 className="text-base font-semibold text-red-900">夏のパターン：昼シングルピーク</h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li><span className="font-semibold">朝6〜9時（立ち上がり）:</span> 出勤・冷房開始。比較的緩やかな需要増。</li>
              <li><span className="font-semibold">昼10〜15時（ピーク）:</span> 最高気温到達で冷房全開。ただし太陽光発電も最大出力でピークを緩和。</li>
              <li><span className="font-semibold">夕方16〜18時（緩やかな低下）:</span> 太陽光が減少するが気温も下がりはじめ、価格の急騰は限定的。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 太陽光の季節効果 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">太陽光の季節効果：夏は昼を助けるが冬は効かない</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          太陽光発電は夏の電力コスト抑制に貢献していますが、冬には出力が限られます。
          データによると、9〜15時の太陽光合計出力は夏が{(summerSolarPeak / 1000).toFixed(0)}GWh相当に対し、
          冬は{(winterSolarPeak / 1000).toFixed(0)}GWh相当と大きな差があります。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
            <h3 className="text-base font-semibold text-amber-900">夏の太陽光効果</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              夏は太陽角度が高く、日照時間も長いため太陽光の発電量が最大化します。
              昼の需要ピーク時間帯（10〜14時）と太陽光の発電ピークが重なり、
              市場価格の急騰を抑制する「ダックカーブ」の腹を形成します。
              夏の昼間電力価格が他の季節に比べて低めに抑えられる理由の一つです。
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <h3 className="text-base font-semibold text-blue-900">冬の太陽光の限界</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              冬は日照時間が短く、太陽角度も低いため発電量が夏の{Math.round(winterSolarPeak / summerSolarPeak * 100)}%程度に低下します。
              需要ピークとなる朝夕（太陽光がゼロの時間帯）は太陽光の補完効果がなく、
              火力発電がフル稼働を余儀なくされます。燃料コスト上昇がそのまま価格に反映されます。
            </p>
          </div>
        </div>
      </section>

      {/* 法人の季節別対策 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人の季節別対策</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-white p-4">
            <h3 className="text-base font-semibold text-blue-900">冬季対策（リスクが高い季節）</h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold mt-1">▶</span>
                <span><strong>朝夕のデマンド管理:</strong> 7〜9時と17〜19時の電力使用を分散・抑制。ヒートポンプ暖房の段階的起動制御が効果的です。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold mt-1">▶</span>
                <span><strong>蓄熱システムの活用:</strong> 深夜の安い電力で蓄熱し、朝夕のピーク時間帯に放熱・放電。蓄熱暖房や蓄電池が有効。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold mt-1">▶</span>
                <span><strong>固定価格型プランの検討:</strong> 冬のボラティリティが高い時期に市場連動型は不利になるリスクがあります。<Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定価格型</Link>でリスクヘッジを検討。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold mt-1">▶</span>
                <span><strong>断熱・保温改善:</strong> 建物の断熱性能向上は暖房負荷を低減し、ピーク需要そのものを削減します。</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-100 bg-white p-4">
            <h3 className="text-base font-semibold text-red-900">夏季対策（リスクが増加中）</h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-red-600 font-bold mt-1">▶</span>
                <span><strong>昼間の太陽光活用:</strong> 自家消費太陽光を最大化し、JEPXが高い14〜17時の購入電力量を削減。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold mt-1">▶</span>
                <span><strong>冷房の予冷運転:</strong> 価格が低い午前中から冷房を強めに稼働させ、価格が高い午後には設定温度を緩める。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold mt-1">▶</span>
                <span><strong>デマンドコントロール:</strong> <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール</Link>で猛暑日のピーク需要を抑制し基本料金を守る。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold mt-1">▶</span>
                <span><strong>蓄電池の昼蓄・夕放:</strong> 太陽光発電の余剰電力を蓄電し、夕方の需給逼迫時に放電するアービトラージが有効。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 市場連動型か固定型か */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">プラン選択の季節的考え方</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          冬季の高価格・高ボラティリティと夏季の高需要・低ボラティリティという季節特性を踏まえると、
          電力調達プランの選択に対して以下の考え方が参考になります。
        </p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm leading-7 text-slate-700">
            <strong>市場連動型プランが有利になりやすい条件:</strong><br />
            暖冬年・並冬年で冬の価格が低水準に推移する場合。自社の使用ピークが夏昼にあり、
            太陽光発電との組み合わせで昼間電力を抑制できる場合。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            <strong>固定価格型プランが有利になりやすい条件:</strong><br />
            冬の需要が多く（暖房依存の製造・農業・公共施設等）、価格高騰時の影響が大きい場合。
            電力調達コストの予算管理を優先する場合。大寒波リスクに備えたい場合。
          </p>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          どちらが有利かは業種・施設特性・リスク許容度によって異なります。
          <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較診断</Link>
          で自社に最適なプランタイプを確認することをお勧めします。
        </p>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ：データが示す「冬リスク優位」の現実</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          「夏は冷房で電気代が高い」という一般的なイメージに反して、JEPXスポット市場データが示す
          電力コストリスクは冬の方が大きいことが明確です。冬は平均価格・需要量・ボラティリティのすべてで
          夏を上回り、極寒日の価格は猛暑日の約2倍に達します。また、冬は太陽光発電の補完効果が乏しく、
          朝夕ダブルピークで火力燃料コストが直接市場価格に反映されます。
          ただし、気候変動による夏の猛暑激化により夏リスクも増加傾向にあるため、
          冬・夏双方のリスクを踏まえた年間を通じた電力調達・省エネ戦略が求められます。
        </p>
      </section>

      {/* 関連リンク */}
      
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />
      <MarketDataFaq items={FAQ} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/warming-trend-30-years", title: "温暖化30年と電力需要", description: "1995年からの気温上昇トレンドと電気料金への中長期影響。" },
            { href: "/extreme-heat-electricity-risk", title: "猛暑日・熱帯夜と電力リスク", description: "猛暑日・熱帯夜の増加トレンドと電力需要・価格への具体的影響。" },
            { href: "/electricity-cost-risk-severe-winter", title: "厳冬・寒波が電気料金に与える影響", description: "2021年1月大寒波事例と冬季電力価格の高騰リスク。" },
            { href: "/jepx-spot-price-dashboard", title: "JEPXスポット価格の全体像", description: "2010年以降のJEPX年次・季節別価格トレンド。" },
            { href: "/compare", title: "料金メニュー比較診断", description: "市場連動型と固定価格型、自社に最適なプランを診断。" },
            { href: "/demand-control-reduction-effect", title: "デマンドコントロールの削減効果", description: "冬夏のピーク管理でデマンド値を下げる方法。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="季節リスクを考慮した電気料金診断"
          description="冬と夏の電力コストリスクを踏まえて、自社に最適な電力調達プランをシミュレーターで確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニュー比較診断" },
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
