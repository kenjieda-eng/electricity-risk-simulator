import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import TempBinChart from "../../components/market-data/TempBinChart";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { MARKET_DATA_FAQ } from "../../data/marketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import {
  TEMP_BIN_LABELS,
  TEMP_BIN_DEMAND,
  TEMP_BIN_PRICE,
  CORR_LABELS,
  CORR_MATRIX,
  EXTREME_WEATHER,
} from "../../data/marketData";


const FAQ = MARKET_DATA_FAQ["weather-electricity-price-link"];

// --- 定数 ---
const pageTitle = "気温と電力価格の因果チェーン｜気温→需要→価格のU字構造";
const pageDescription =
  "気温が15〜20℃のとき電力需要と価格が最低になり、極寒・猛暑で跳ね上がるU字構造をデータで解説。極寒日24.75円・猛暑日12.61円・通常日9.61円の差異、HDD・CDDと価格の相関行列、法人が取るべき気温リスク対策を詳述します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "気温 電力価格",
    "気温需要相関",
    "電力価格U字構造",
    "HDD CDD",
    "極端気象 電気料金",
    "冬季電力スパイク",
    "気温リスク 法人",
    "電力価格因果",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/weather-electricity-price-link",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/weather-electricity-price-link",
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

// --- 相関値の色付け ---
function corrColor(v: number): string {
  const abs = Math.abs(v);
  if (v === 1.0) return "bg-slate-200 text-slate-700";
  if (abs >= 0.7) return v > 0 ? "bg-red-100 text-red-800 font-semibold" : "bg-blue-100 text-blue-800 font-semibold";
  if (abs >= 0.4) return v > 0 ? "bg-orange-50 text-orange-800" : "bg-sky-50 text-sky-800";
  return "bg-white text-slate-600";
}

export default function WeatherElectricityPriceLinkPage() {
  return (
    <>
      <ArticleJsonLd
        headline="気温と電力価格の因果チェーン｜気温→需要→価格のU字構造"
        description="気温が15〜20℃のとき電力需要と価格が最低になり、極寒・猛暑で跳ね上がるU字構造をデータで解説。極寒日24.75円・猛暑日12.61円・通常日9.61円の差異、HDD・CDDと価格の相関行列、法人が取るべき気温リスク対策を詳述します。"
        url="https://simulator.eic-jp.org/weather-electricity-price-link"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "気温と電力価格の因果チェーン" },
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
        <span className="text-slate-800">気温と電力価格の因果チェーン</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">
          MARKET DATA ／ データで見る電力市場
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          気温と電力価格の因果チェーン
        </h1>
        <p className="mt-1 text-base font-medium text-slate-600">気温→需要→価格のU字構造</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力市場を動かす最大の外部要因は気温です。気温が快適な15〜20℃帯では需要も価格も最低水準になりますが、
          猛暑（冷房）や極寒（暖房）になると需要が急増し、卸電力市場でのスポット価格も連動して上昇します。
          このページでは気温帯別の需要・価格データ、相関行列、極端気象の影響を定量的に示し、
          法人が気温リスクにどう備えるべきかを解説します。
        </p>
      </header>

      {/* キーファクト */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-slate-900">気温リスクを示す4つの数字</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">極寒日（≤3℃）の平均価格</p>
            <p className="mt-1 text-2xl font-bold text-blue-700">24.75 円/kWh</p>
            <p className="mt-1 text-xs text-slate-500">通常日比 +158%</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">猛暑日（≥28℃）の平均価格</p>
            <p className="mt-1 text-2xl font-bold text-red-600">12.61 円/kWh</p>
            <p className="mt-1 text-xs text-slate-500">通常日比 +31%</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">通常日（15〜20℃）の平均価格</p>
            <p className="mt-1 text-2xl font-bold text-green-600">9.61 円/kWh</p>
            <p className="mt-1 text-xs text-slate-500">U字底部・最低水準</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">HDD（暖房度日）↔需要 相関係数</p>
            <p className="mt-1 text-2xl font-bold text-purple-700">r = 0.52</p>
            <p className="mt-1 text-xs text-slate-500">中〜強の正の相関</p>
          </div>
        </div>
      </section>

      {/* U字カーブチャート */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">気温帯別：電力需要とスポット価格のU字構造</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          棒グラフ（左軸）が気温帯別の平均電力需要（MW）、折れ線（右軸）が平均JEPXスポット価格（円/kWh）です。
          15〜20℃帯を底として、寒冷側・高温側の両方向に需要と価格が増加するU字型が明確に表れています。
          特に極寒側（0℃以下）では需要・価格ともに急激な上昇が見られます。
        </p>
        <div className="mt-4">
          <TempBinChart />
        <MarketDataDownload
          filename="temp-bin-demand-price.csv"
          headers={["temp_range", "demand_mw", "price_jpy_kwh"]}
          rows={TEMP_BIN_LABELS.map((label, i) => ({
            temp_range: label,
            demand_mw: TEMP_BIN_DEMAND[i],
            price_jpy_kwh: TEMP_BIN_PRICE[i],
          }))}
          apiPath="/api/market-data"
          caption="気温帯別の平均需要と価格（U字構造）"
        />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          ※ 全国9エリア合計需要と東京エリアJEPXスポット価格の日平均値を気温帯別に集計。気温は東京の日平均気温。
        </p>
      </section>

      {/* U字構造の詳細解説 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">U字構造のデータ詳細</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">気温帯</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均需要（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">対15-20℃比</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均価格（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">対15-20℃比</th>
              </tr>
            </thead>
            <tbody>
              {TEMP_BIN_LABELS.map((label, i) => {
                const baseDemand = TEMP_BIN_DEMAND[4]; // 15-20℃
                const basePrice = TEMP_BIN_PRICE[4];
                const demandRatio = ((TEMP_BIN_DEMAND[i] / baseDemand - 1) * 100).toFixed(1);
                const priceRatio = ((TEMP_BIN_PRICE[i] / basePrice - 1) * 100).toFixed(1);
                const isBase = i === 4;
                return (
                  <tr
                    key={label}
                    className={
                      isBase
                        ? "bg-green-50"
                        : i <= 1 || i >= 6
                        ? "bg-red-50"
                        : "odd:bg-white even:bg-slate-50"
                    }
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                      {label}
                      {isBase && <span className="ml-1 text-xs text-green-700">（最低点）</span>}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {TEMP_BIN_DEMAND[i].toLocaleString()}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {isBase ? (
                        <span className="text-slate-400">基準</span>
                      ) : (
                        <span className={Number(demandRatio) > 0 ? "text-red-600" : "text-green-600"}>
                          {Number(demandRatio) > 0 ? "+" : ""}{demandRatio}%
                        </span>
                      )}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                      {TEMP_BIN_PRICE[i].toFixed(2)}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {isBase ? (
                        <span className="text-slate-400">基準</span>
                      ) : (
                        <span className={Number(priceRatio) > 0 ? "text-red-600" : "text-green-600"}>
                          {Number(priceRatio) > 0 ? "+" : ""}{priceRatio}%
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 因果チェーンの解説 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">因果チェーン：気温→需要→価格の伝達メカニズム</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金に気温が影響するまでの経路は複数ありますが、主要な因果チェーンは以下の通りです。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">冬季チェーン（極寒リスク）</h3>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">1</span>
                <span>気温低下（特に最低気温≤3℃）による暖房需要急増</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">2</span>
                <span>太陽光発電の出力低下（日照時間短縮・積雪）</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">3</span>
                <span>LNG需要増加による在庫逼迫・輸送コスト上昇</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">4</span>
                <span>発電コスト上昇→JEPXスポット価格高騰（最大251円/kWh）</span>
              </li>
            </ol>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">夏季チェーン（猛暑リスク）</h3>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">1</span>
                <span>気温上昇（最高気温≥35℃）による冷房需要急増</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">2</span>
                <span>太陽光は発電増加（昼間価格抑制）、夕方以降急落</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">3</span>
                <span>17〜19時に冷房継続+太陽光出力急減→価格スパイク</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">4</span>
                <span>冬に比べスパイク単価は低いが、長期間持続しやすい</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 相関行列 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">変数間相関行列（気温・CDD・HDD・需要・価格）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          5変数間のピアソン相関係数をヒートマップ形式で表示しています。
          赤系は正の相関（一緒に増減）、青系は負の相関（片方が増えると片方が減る）を示します。
          濃い色ほど相関が強く、|r|≥0.7を太字で表示しています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">変数</th>
                {CORR_LABELS.map((label) => (
                  <th key={label} className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CORR_MATRIX.map((row, i) => (
                <tr key={CORR_LABELS[i]}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800 bg-slate-50">
                    {CORR_LABELS[i]}
                  </td>
                  {row.map((v, j) => (
                    <td
                      key={j}
                      className={`border border-slate-200 px-3 py-2 text-center text-sm ${corrColor(v)}`}
                    >
                      {v === 1.0 ? "—" : v.toFixed(3)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded bg-blue-200"></span>強い負の相関（|r|≥0.7）
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded bg-red-200"></span>強い正の相関（|r|≥0.7）
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded bg-sky-100"></span>中程度の負の相関（0.4≤|r|&lt;0.7）
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded bg-orange-50 border border-orange-200"></span>中程度の正の相関
          </span>
        </div>
      </section>

      {/* 相関の解説 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">相関行列の読み解き方</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
            <h3 className="text-base font-semibold text-blue-900">気温 × HDD：r = -0.824（強い負）</h3>
            <p className="mt-2 text-sm leading-7 text-blue-800">
              気温が下がれば暖房度日（HDD）が増加するという物理的な関係を反映しています。
              冬の寒さが厳しいほど暖房消費が増え、電力需要を押し上げます。
              この強い逆相関は気候モデルによる電力需要予測の基盤となっています。
            </p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-5">
            <h3 className="text-base font-semibold text-red-900">気温 × CDD：r = 0.756（強い正）</h3>
            <p className="mt-2 text-sm leading-7 text-red-800">
              気温が上がれば冷房度日（CDD）も増加。夏の猛暑が冷房需要を押し上げます。
              CDD↔需要の相関（r=0.340）はHDDより弱く、猛暑より極寒の方が需要への
              インパクトが大きいことを示しています。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">HDD × 需要：r = 0.522（中〜強）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              暖房度日（HDD）が大きいほど電力需要が増加する関係です。
              冬季の電力需要予測においてHDDは最重要の予測変数であり、
              気象予報の精度が電力調達計画の精度に直結します。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">需要 × 価格：r = 0.324（正）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              需要増加が価格上昇を引き起こす関係ですが、相関係数は0.324と中程度にとどまります。
              燃料費・再エネ出力・系統制約など価格に影響する要因が多数あるため、
              需要だけでは価格を完全に説明できないことがわかります。
            </p>
          </div>
        </div>
      </section>

      {/* 極端気象の影響 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">極端気象が電力市場に与えるインパクト</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          データを極端気温の日（極寒日・猛暑日）と通常日に分類し、需要・価格の差を比較しました。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {/* 通常日 */}
          <div className="rounded-xl border border-green-200 bg-green-50 p-5">
            <h3 className="text-lg font-semibold text-green-900">通常日（5〜25℃）</h3>
            <p className="mt-1 text-xs text-green-700">サンプル数: {EXTREME_WEATHER.normal.n.toLocaleString()}日</p>
            <div className="mt-3 space-y-2">
              <div>
                <p className="text-xs text-green-700">平均需要</p>
                <p className="text-xl font-bold text-green-800">
                  {EXTREME_WEATHER.normal.demand.toLocaleString()} MW
                </p>
              </div>
              <div>
                <p className="text-xs text-green-700">平均スポット価格</p>
                <p className="text-xl font-bold text-green-800">
                  {EXTREME_WEATHER.normal.price.toFixed(2)} 円/kWh
                </p>
              </div>
            </div>
          </div>
          {/* 猛暑日 */}
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="text-lg font-semibold text-red-900">猛暑日（≥28℃）</h3>
            <p className="mt-1 text-xs text-red-700">サンプル数: {EXTREME_WEATHER.hot.n.toLocaleString()}日</p>
            <div className="mt-3 space-y-2">
              <div>
                <p className="text-xs text-red-700">平均需要</p>
                <p className="text-xl font-bold text-red-800">
                  {EXTREME_WEATHER.hot.demand.toLocaleString()} MW
                </p>
                <p className="text-xs text-red-600">
                  +{(((EXTREME_WEATHER.hot.demand / EXTREME_WEATHER.normal.demand) - 1) * 100).toFixed(1)}%（通常日比）
                </p>
              </div>
              <div>
                <p className="text-xs text-red-700">平均スポット価格</p>
                <p className="text-xl font-bold text-red-800">
                  {EXTREME_WEATHER.hot.price.toFixed(2)} 円/kWh
                </p>
                <p className="text-xs text-red-600">
                  +{(((EXTREME_WEATHER.hot.price / EXTREME_WEATHER.normal.price) - 1) * 100).toFixed(1)}%（通常日比）
                </p>
              </div>
            </div>
          </div>
          {/* 極寒日 */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <h3 className="text-lg font-semibold text-blue-900">極寒日（≤3℃）</h3>
            <p className="mt-1 text-xs text-blue-700">サンプル数: {EXTREME_WEATHER.cold.n.toLocaleString()}日</p>
            <div className="mt-3 space-y-2">
              <div>
                <p className="text-xs text-blue-700">平均需要</p>
                <p className="text-xl font-bold text-blue-800">
                  {EXTREME_WEATHER.cold.demand.toLocaleString()} MW
                </p>
                <p className="text-xs text-blue-600">
                  +{(((EXTREME_WEATHER.cold.demand / EXTREME_WEATHER.normal.demand) - 1) * 100).toFixed(1)}%（通常日比）
                </p>
              </div>
              <div>
                <p className="text-xs text-blue-700">平均スポット価格</p>
                <p className="text-2xl font-bold text-blue-900">
                  {EXTREME_WEATHER.cold.price.toFixed(2)} 円/kWh
                </p>
                <p className="text-xs text-blue-600">
                  +{(((EXTREME_WEATHER.cold.price / EXTREME_WEATHER.normal.price) - 1) * 100).toFixed(1)}%（通常日比）
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          ※ 気温は東京の日平均気温。需要は全国合計、価格は東京エリアJEPXシステムプライスの日平均値。
        </p>
      </section>

      {/* 冬の方がリスクが高い理由 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ冬のリスクが夏より高いのか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          データが示す通り、極寒日（24.75円）は猛暑日（12.61円）の約2倍の価格水準になります。
          これは複数の要因が冬季に同時発生しやすいためです。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">LNG在庫の脆弱性</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              LNG火力は需給調整の主役ですが、厳冬時には都市ガス需要も急増するため
              在庫が急速に枯渇します。輸入依存度が高いため、調達量の急増には船舶輸送の
              リードタイムがあり、即時対応が困難です。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">太陽光発電の低出力</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              冬は日照時間が短く、積雪地域では発電量がほぼゼロになります。
              夏は日中に大量発電して需給バランスを支える太陽光が、
              冬の朝夕ピーク時には全く役立たないという構造的な問題があります。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">暖房の種類と電力依存</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              日本の暖房はガスエアコン・石油ストーブなど電力以外の手段も多いため、
              夏冷房ほど電力依存度は高くありません。しかし近年のエコキュートや
              ヒートポンプ暖房の普及で電力への依存度は増しています。
            </p>
          </div>
        </div>
      </section>

      {/* HDD/CDDと電力コスト */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">HDD・CDDを使った電力コスト予測</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          暖房度日（HDD: Heating Degree Days）と冷房度日（CDD: Cooling Degree Days）は、
          電力需要・コストの先行指標として広く使われています。HDDは基準温度（通常18℃）から
          日平均気温を引いた積算値で、値が大きいほど暖房需要が大きくなります。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">HDDと電力コスト管理</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              冬季の月次電力コストはHDD月合計値と強い正の相関を示します（r=0.52）。
              気象予報機関が1ヶ月予報で「寒冬」を示した場合、即座に電力調達計画や
              予算の見直しを行うことが最良のリスク管理です。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">CDDと夏季コスト予測</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              CDDと電力需要の相関（r=0.340）はHDDより弱いですが、夏季の月次コスト管理には
              有効な指標です。気象庁の3ヶ月予報・1ヶ月予報を定期的にチェックし、
              猛暑見通しの場合はデマンドコントロール施策を前倒しで実施することが重要です。
            </p>
          </div>
        </div>
      </section>

      {/* 温暖化の長期リスク */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">温暖化による気温リスクの長期的な拡大</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          過去30年のデータは、東京・大阪・札幌いずれも年平均気温が上昇トレンドにあることを示しています。
          特に2020年代は1990年代比で約0.3〜0.5℃の上昇が見られます。
          猛暑日・熱帯夜の増加は電力冷房需要を恒常的に押し上げ、設備容量の増強圧力にもつながります。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          一方で気候変動による極端気象（記録的寒波・猛暑）の頻度も増しており、
          「平均気温は上昇しているが、極端高温・極端低温リスクは同時に増大する」
          というパラドクス的な状況が生じています。
          これは電力インフラと法人の調達戦略双方に、より大きな変動耐性を求めることを意味します。
        </p>
      </section>

      {/* 法人が取るべき対策 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人が気温リスクに備える5つの対策</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">① 気象予報の定期モニタリング</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              気象庁の3ヶ月予報・1ヶ月予報を毎月確認し、寒冬・猛暑見通しが出た際に
              電力コストの上振れシナリオを作成します。特に11月〜12月の「冬の見通し」は
              翌年の電力調達計画に直結します。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">② 固定型・変動型の組み合わせ</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              極端気象時のリスクに備えるため、全電力を市場連動型にするのではなく、
              ベースロード分（基礎消費量）は固定型、追加分を市場連動型にする
              「ハイブリッド調達」が有効です。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">③ 空調設備の効率化投資</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              高効率エアコン・ヒートポンプへの更新は、猛暑日・極寒日の需要を直接削減します。
              COP（成績係数）が2倍になれば、同じ冷暖房を半分の電力で実現できます。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">④ 蓄熱システムの活用</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              深夜電力を使って蓄冷・蓄熱し、昼間や夕方ピーク時の空調消費を抑制します。
              特に夕方17〜19時の高値帯での消費削減に有効で、市場連動プランの実効単価を
              大幅に引き下げられます。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">⑤ 電力コスト予算の気温感応度分析</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              「気温が1℃低下すると月次電力コストがどれだけ増加するか」を自社データで
              定量化しておきます。この感応度係数があれば、気象予報をもとに翌月の
              電力コスト予算を即座に補正できます。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">⑥ リスクシミュレーションの実施</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              過去の極端気象データ（FY2020冬など）をベースにした「有事シナリオ」を作成し、
              自社の電力コストへの影響額を事前に把握します。
              経営会議に電力コストリスクとして定期報告することが望ましい対応です。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ：気温リスクは定量管理できる</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          気温と電力価格の関係は偶発的ではなく、U字構造という明確なパターンを持ちます。
          15〜20℃を底として、寒冷側では最大158%、高温側でも31%の価格プレミアムが発生します。
          特に冬季の極寒は、LNG在庫・太陽光発電・暖房需要の3要因が複合することで
          想定外の価格スパイクを引き起こすリスクがあります。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          こうした気温リスクは、HDD・CDDと気象予報を活用することで一定程度予見可能です。
          先手を打ったデマンドコントロール・調達戦略の切り替え・設備投資が、
          長期的な電力コスト安定化につながります。
        </p>
      </section>

      {/* 関連リンク */}
      
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />
      <MarketDataFaq items={FAQ} />

<div className="mt-8">
        <RelatedLinks
          heading="関連データ・解説"
          links={[
            {
              href: "/jepx-spot-price-dashboard",
              title: "JEPXスポット価格の全体像",
              description: "FY2010〜2026の17年間価格データ。気温起因のスパイクを年度別に確認できます。",
            },
            {
              href: "/electricity-demand-pattern",
              title: "全国電力需要パターン",
              description: "時間帯・月・年度別の需要構造。U字カーブの需要側データを詳述。",
            },
            {
              href: "/30-year-weather-data",
              title: "30年気象トレンドと電力市場",
              description: "温暖化による猛暑日・熱帯夜増加の実データと電力コストへの影響分析。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組みとリスク",
              description: "気温→需要→燃料費→電気料金の別の伝達経路、燃調制度の詳細解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="気温リスクを含めた電気料金シミュレーションを行う"
          description="極端気象シナリオ（寒冬・猛暑）下で自社の電力コストがどう変動するか、シミュレーターで事前に把握できます。HDD・CDDを加味した冬季・夏季の価格上振れリスクを定量評価してみましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/special/emergency-scenario-analysis", label: "有事シナリオ分析を見る" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
