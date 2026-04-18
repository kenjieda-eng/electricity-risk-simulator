import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import JepxFyPriceChart from "../../components/market-data/JepxFyPriceChart";
import JepxHourlyPriceChart from "../../components/market-data/JepxHourlyPriceChart";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { MARKET_DATA_FAQ } from "../../data/marketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import {
  JEPX_FY_LABELS,
  JEPX_FY_AVG,
  JEPX_FY_MEDIAN,
  JEPX_FY_MAX,
  JEPX_FY_STD,
  JEPX_SPIKE_FY,
  JEPX_FY_MIN,
} from "../../data/marketData";


const FAQ = MARKET_DATA_FAQ["jepx-spot-price-dashboard"];

// --- 定数 ---
const pageTitle = "JEPXスポット価格の全体像｜FY2010〜2026の17年間データ";
const pageDescription =
  "日本卸電力取引所（JEPX）スポット価格のFY2010〜FY2026、17年分のデータを徹底解説。年度別平均・中央値・最大値・標準偏差、時間帯別パターン、価格スパイク発生頻度を可視化し、法人向け電気料金への影響を分析します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX",
    "スポット価格",
    "日本卸電力取引所",
    "電力市場",
    "法人電気料金",
    "市場連動型",
    "電力価格推移",
    "FY2020価格スパイク",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/jepx-spot-price-dashboard",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/jepx-spot-price-dashboard",
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

// --- スパイク件数（件数 > 0 のもの）---
const spikeRows = JEPX_FY_LABELS.map((label, i) => ({
  label,
  avg: JEPX_FY_AVG[i],
  spike: JEPX_SPIKE_FY[i],
})).filter((r) => r.spike > 0);

export default function JepxSpotPriceDashboardPage() {
  return (
    <>
      <ArticleJsonLd
        headline="JEPXスポット価格の全体像｜FY2010〜2026の17年間データ"
        description="日本卸電力取引所（JEPX）スポット価格のFY2010〜FY2026、17年分のデータを徹底解説。年度別平均・中央値・最大値・標準偏差、時間帯別パターン、価格スパイク発生頻度を可視化し、法人向け電気料金への影響を分析します。"
        url="https://simulator.eic-jp.org/jepx-spot-price-dashboard"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "JEPXスポット価格の全体像" },
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
        <span className="text-slate-800">JEPXスポット価格の全体像</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">
          MARKET DATA ／ データで見る電力市場
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          JEPXスポット価格の全体像
        </h1>
        <p className="mt-1 text-base font-medium text-slate-600">FY2010〜2026の17年間データ</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本卸電力取引所（JEPX）のスポット市場は、新電力各社が「翌日の電力」を売買する国内最大の電力取引プラットフォームです。
          FY2010（2010年度）からFY2026まで、17年分の約300万コマ超のデータを集計・可視化しました。
          市場連動型プランを契約している法人、あるいは今後の料金見直しを検討している法人のご担当者に向けて、
          スポット価格の構造・季節性・極端事象をわかりやすく解説します。
        </p>
      </header>

      {/* キーファクト */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-slate-900">17年間のキーファクト</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          まず全期間を通じて把握すべき4つの数字を確認しましょう。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">年度最高平均価格</p>
            <p className="mt-1 text-2xl font-bold text-red-600">20.41 円/kWh</p>
            <p className="mt-1 text-xs text-slate-500">FY2022（2022年度）</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">年度最安平均価格</p>
            <p className="mt-1 text-2xl font-bold text-green-600">7.93 円/kWh</p>
            <p className="mt-1 text-xs text-slate-500">FY2019（2019年度）</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">最多スパイク年度（≥40円）</p>
            <p className="mt-1 text-2xl font-bold text-orange-600">749 コマ</p>
            <p className="mt-1 text-xs text-slate-500">FY2020（寒波一極集中）</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">全期間最高瞬間価格</p>
            <p className="mt-1 text-2xl font-bold text-red-700">251 円/kWh</p>
            <p className="mt-1 text-xs text-slate-500">FY2020 冬季需給逼迫時</p>
          </div>
        </div>
      </section>

      {/* グラフ1：年度別平均価格 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年度別平均スポット価格（FY2010〜FY2026）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          棒グラフは各年度の年間平均価格を示します。青が標準水準（14円未満）、黄が中程度（14〜18円）、
          赤が高水準（18円以上）です。FY2022の突出した高さと、FY2019の底値が一目でわかります。
        </p>
        <div className="mt-4">
          <JepxFyPriceChart />
        <MarketDataDownload
          filename="jepx-spot-price-fy.csv"
          headers={["fy", "avg", "median", "max", "min", "std", "spike_count"]}
          rows={JEPX_FY_LABELS.map((label, i) => ({
            fy: label,
            avg: JEPX_FY_AVG[i],
            median: JEPX_FY_MEDIAN[i],
            max: JEPX_FY_MAX[i],
            min: JEPX_FY_MIN?.[i] ?? 0,
            std: JEPX_FY_STD[i],
            spike_count: JEPX_SPIKE_FY[i],
          }))}
          apiPath="/api/market-data"
          caption="FY2010〜2026の17年分JEPX価格統計"
        />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          ※ 出典: JEPX公表データをもとにエネルギー情報センターが集計。FY2026は期中データを含む暫定値。
        </p>
      </section>

      {/* グラフ2：時間帯別価格 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">時間帯別平均スポット価格（全期間・24時間）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          全17年分を時間帯ごとに集計した「平均的な1日の価格カーブ」です。
          夜間（0〜5時）は10〜10.6円程度と比較的安定していますが、夕方にかけて急上昇し、
          17〜18時台に15〜16円台のピークを形成します。これは夕方の帰宅需要と太陽光発電の
          出力低下が重なるためです。赤いポイントが15円以上の高値帯を示しています。
        </p>
        <div className="mt-4">
          <JepxHourlyPriceChart />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          ※ FY2010〜FY2026の全30分値コマを1時間単位に集計した単純平均。
        </p>
      </section>

      {/* 年度別統計表 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年度別統計サマリー</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          各年度の基本統計量を一覧で確認できます。標準偏差（STD）が大きい年度は価格の「ばらつき」が大きく、
          市場連動型プランでは請求額の変動リスクが高まります。FY2020のSTD 23.73は突出した異常値で、
          年間平均は11.21円にもかかわらず、一時251円という極端な価格が発生したことを示しています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">中央値</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最大値</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">標準偏差</th>
              </tr>
            </thead>
            <tbody>
              {JEPX_FY_LABELS.map((label, i) => (
                <tr
                  key={label}
                  className={
                    JEPX_FY_AVG[i] >= 18
                      ? "bg-red-50"
                      : JEPX_FY_AVG[i] >= 14
                      ? "bg-yellow-50"
                      : "bg-white"
                  }
                >
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                    {JEPX_FY_AVG[i].toFixed(2)}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">
                    {JEPX_FY_MEDIAN[i].toFixed(2)}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">
                    {JEPX_FY_MAX[i].toFixed(2)}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">
                    {JEPX_FY_STD[i].toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          ※ 背景色: 赤＝平均18円以上、黄＝14〜18円、白＝14円未満。FY2026は暫定値。
        </p>
      </section>

      {/* JEPXとは */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">JEPXスポット市場とは何か</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          日本卸電力取引所（JEPX: Japan Electric Power Exchange）は、2005年に設立された国内唯一の
          電力取引所です。スポット市場（日前市場）では、翌日の各30分コマの電力が競争入札によって取引されます。
          入札は毎日午前10時に締め切られ、需要と供給が均衡する価格（市場約定単価・システムプライス）が
          決定します。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          市場参加者は大手電力会社、新電力、ガス会社、再エネ発電事業者など多岐にわたります。
          特に電力自由化（2016年4月）以降は新電力の参加が拡大し、取引量も年々増加しています。
          2022年度の取引量は年間約4,000億kWhに達し、国内電力需要の約40%相当が市場を経由しています。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          スポット価格は卸電力市場の「体温計」とも言える指標で、燃料費変動・需給逼迫・再エネ普及など
          電力市場の構造変化を敏感に反映します。法人電気料金の原価構成にも直接・間接的に影響するため、
          電力調達コスト管理において欠かせない情報源です。
        </p>
      </section>

      {/* スポット価格が法人料金に与える影響 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">スポット価格が法人電気料金に与える影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          新電力各社は、調達した電力の一部をJEPXスポット市場で購入しています。特に「市場連動型プラン」
          では、スポット市場の価格変動がそのまま（あるいは一定の係数をかけて）月々の請求額に反映される
          仕組みになっています。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">市場連動型プランのしくみ</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              従量料金単価がJEPXスポット価格（月平均または週平均）に連動します。
              市場価格が低い年度はコスト削減メリットを享受できますが、
              FY2020やFY2022のような高騰期には、固定プランとの料金差が数倍になることもあります。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">固定価格型プランとの比較</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              固定型プランはスポット価格のリスクをあらかじめ織り込んだ水準に設定されています。
              市場が落ち着いた年度は割高に見えますが、高騰時の「上振れリスク」を遮断できる
              という経営上の確実性があります。
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          どちらのプランが適切かは、事業の電力消費規模・季節パターン・収益への感応度によって異なります。
          スポット価格の歴史的な変動幅（FY2019: 7.93円 → FY2022: 20.41円）を踏まえたうえで、
          プラン選択のリスク許容度を設定することが重要です。
        </p>
      </section>

      {/* FY2020危機 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">FY2020冬季需給逼迫クライシスの解剖</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          FY2020（2020年4月〜2021年3月）は、電力自由化以来最大の需給逼迫を経験した年度です。
          2021年1月の記録的寒波（東京都心の最低気温 −5℃台）に加え、LNG不足・太陽光出力低下が
          重なり、スポット価格が瞬間的に<strong className="text-red-600">251円/kWh</strong>という
          前代未聞の水準に達しました。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          年間を通じた標準偏差は23.73円と、前年FY2019の3.12円から7倍以上に拡大。
          40円以上のスパイクコマ数は年間749コマ（約15日相当）に上りました。
          市場連動型プランの一部契約企業では、1月単月の電気料金が前年比3〜5倍に膨張したケースも
          報告されています。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          この危機は「LNG在庫リスク」「再エネ出力変動リスク」「気温リスク」が同時多発した複合事象であり、
          今後も同様の状況が再現しうることを示す歴史的事例となっています。
          経済産業省はその後、需給調整市場の整備や容量市場の導入を進め、制度的な安全網の強化を図っています。
        </p>
      </section>

      {/* 価格スパイク発生件数 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年度別価格スパイク発生件数（≥40円/kWh）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          スポット価格が40円/kWh以上となった30分コマの件数をまとめました。スパイクは特定の年度に集中しており、
          構造的な需給逼迫や燃料危機と強く連動していることがわかります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">スパイクコマ数（≥40円）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">年度平均（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">背景</th>
              </tr>
            </thead>
            <tbody>
              {spikeRows.map((row) => (
                <tr key={row.label} className="bg-orange-50 odd:bg-orange-50 even:bg-orange-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-bold text-red-700">
                    {row.spike.toLocaleString()}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.avg.toFixed(2)}</td>
                  <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                    {row.label === "FY2020"
                      ? "2021年1月寒波、LNG不足"
                      : row.label === "FY2021"
                      ? "ウクライナ前哨・燃料高"
                      : row.label === "FY2022"
                      ? "ロシア侵攻・欧州エネルギー危機"
                      : row.label === "FY2018"
                      ? "夏季猛暑・需給逼迫"
                      : row.label === "FY2013"
                      ? "震災後の電力不足"
                      : "需給逼迫"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 夕方ピークの構造 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">夕方17〜18時ピークの構造的要因</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          時間帯別価格グラフで確認した17〜18時台のピークは「ダックカーブ問題」の典型的な現れです。
          日中に大量発電する太陽光発電が日没に向けて急速に出力を落とす一方、家庭や業務施設の
          夕方需要がピークを迎えるため、市場参加者は急いで代替電源（ガス・石炭）の入札を積み上げます。
          この競合が価格を押し上げる構造は、再生可能エネルギーの普及が進むほど強まる傾向にあります。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          法人にとっては、夕方のピーク時間帯（16〜19時）の消費電力を意識的にコントロールすること、
          例えばデマンドレスポンスや蓄電池の活用が、電力コスト削減の鍵となります。
          特に高圧・特別高圧の市場連動型プランでは、夕方の高値コマが月額コストに直結するため、
          時間帯別の使用量把握が不可欠です。
        </p>
      </section>

      {/* FY2026以降の見通し */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">FY2026以降のスポット価格展望</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          FY2026の暫定平均は15.81円（期中）と、FY2023の底値10.74円から再び上昇傾向にあります。
          背景には、LNG価格の再上昇、国内旧式石炭火力の廃止、そして猛暑による夏季需要増加が挙げられます。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-slate-900">上昇圧力要因</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>・LNG・石炭の国際価格上昇リスク</li>
              <li>・温暖化による猛暑・寒波の激化</li>
              <li>・老朽火力廃止による供給力低下</li>
              <li>・容量市場コストの上乗せ</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-slate-900">下降圧力要因</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>・再エネ（太陽光・洋上風力）の拡大</li>
              <li>・原子力再稼働による安定電源確保</li>
              <li>・蓄電池コスト低下による調整力強化</li>
              <li>・省エネ推進による需要抑制</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          両方向の力が拮抗するなか、スポット価格の「変動リスク」は中長期的に高止まりする可能性が高く、
          法人の電力調達戦略においてリスクヘッジ（固定型プランや相対契約）の重要性が増しています。
        </p>
      </section>

      {/* 法人向けインサイト */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人担当者が押さえるべき3つのポイント</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">① 変動リスクを数字で把握する</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              FY2019の7.93円からFY2022の20.41円への上昇は約2.6倍。市場連動型プランを
              継続する場合、この変動幅に耐えられる財務体力があるか、予算への影響を試算しておく必要があります。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">② 夕方ピーク時間帯を管理する</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              16〜19時のスポット価格は他の時間帯より30〜50%高い傾向があります。
              この時間帯の消費電力を意識的に分散させるだけで、市場連動プランの
              実質単価を引き下げられます。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">③ 冬季の需給逼迫リスクを認識する</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              スパイク事例のほとんどが1〜2月に集中しています。冬季の電力消費が大きい業種
              （ホテル・病院・製造業）は、冬季限定の固定型プランや長期相対契約の活用を
              検討する価値があります。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ：JEPXデータが示す本質</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          17年間のJEPXデータが示す本質は、「電力市場は平時は安定しているが、複数のリスク要因が
          重なった際に予測を超えた価格高騰を引き起こす」という事実です。FY2020の251円/kWh、
          FY2022の年度平均20円超という事象は、いずれも「想定外」とされていたものです。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電力調達担当者は、こうしたデータを継続的にモニタリングしながら、
          プラン選択・省エネ施策・デマンドコントロールを組み合わせた総合的なコスト管理を
          実践することが求められます。
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
              href: "/electricity-demand-pattern",
              title: "全国電力需要パターン",
              description: "時間帯・月・年度で見る需要構造。JEPXと密接に連動する需要側のデータを解説。",
            },
            {
              href: "/weather-electricity-price-link",
              title: "気温と電力価格の因果チェーン",
              description: "気温→需要→価格のU字構造。スパイクが起きる気象的メカニズムを詳述。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動型プランとは",
              description: "スポット価格連動プランの料金構造・メリット・リスクを詳しく解説。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "2019〜2025年の料金推移データでJEPX価格と電気代の連動を確認。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金リスクをシミュレーションする"
          description="JEPXスポット価格の変動が自社の電気料金にどう影響するか、シミュレーターで診断できます。現在の契約単価・使用量を入力するだけで、高騰シナリオ下の概算コスト増加額を確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/market-linked-plan", label: "市場連動型プランを理解する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
