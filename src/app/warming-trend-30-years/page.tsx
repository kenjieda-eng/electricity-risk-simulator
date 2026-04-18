import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import Warming2040Forecast from "../../components/market-data/Warming2040Forecast";
import { MARKET_DATA_FAQ } from "../../data/marketDataFaq";
import { WarmingTrendLineChart, WarmingDecadeBarChart } from "../../components/market-data/WarmingTrendCharts";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import {
  WARMING_YEARS,
  WARMING_TOKYO,
  WARMING_OSAKA,
  WARMING_SAPPORO,
  CDD_TOKYO,
  HDD_TOKYO,
} from "../../data/marketData";


const FAQ = MARKET_DATA_FAQ["warming-trend-30-years"];

const pageTitle = "温暖化30年と電力需要｜1995年からの気温上昇が電気料金に与える影響";
const pageDescription =
  "1995年から2025年の30年間、東京・大阪・札幌の年平均気温はどう変化したか。10年ごとの加速傾向、CDD（冷房度日）の増加と夏のJEPX高騰リスク、HDD（暖房度日）低下と冬の構造変化を実データで解説します。";
const pageUrl = "https://simulator.eic-jp.org/warming-trend-30-years";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "温暖化 電力需要",
    "気温上昇 電気料金",
    "CDD 冷房度日",
    "HDD 暖房度日",
    "JEPX 夏 価格上昇",
    "電力需要 気温トレンド",
    "法人 電気料金 中長期",
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

// 5年区切りのCDD/HDDテーブル用データ（代表年を抜粋）
const cddHddTableRows = [
  { period: "1995–1999", years: [0,1,2,3,4] },
  { period: "2000–2004", years: [5,6,7,8,9] },
  { period: "2005–2009", years: [10,11,12,13,14] },
  { period: "2010–2014", years: [15,16,17,18,19] },
  { period: "2015–2019", years: [20,21,22,23,24] },
  { period: "2020–2025", years: [25,26,27,28,29,30] },
].map((row) => {
  const cddVals = row.years.map((i) => CDD_TOKYO[i]);
  const hddVals = row.years.map((i) => HDD_TOKYO[i]);
  const avgCdd = Math.round(cddVals.reduce((a, b) => a + b, 0) / cddVals.length);
  const avgHdd = Math.round(hddVals.reduce((a, b) => a + b, 0) / hddVals.length);
  const firstYear = WARMING_YEARS[row.years[0]];
  const lastYear = WARMING_YEARS[row.years[row.years.length - 1]];
  return { period: row.period, firstYear, lastYear, avgCdd, avgHdd };
});

const keyStats = [
  { label: "東京 1990年代→2020年代", value: "+0.36℃", sub: "16.78℃ → 17.14℃" },
  { label: "大阪の上昇幅", value: "+0.66℃", sub: "17.30℃ → 17.96℃" },
  { label: "札幌の上昇幅（最大）", value: "+1.18℃", sub: "9.14℃ → 10.32℃" },
  { label: "東京CDD（2025年）", value: "752", sub: "1995年比 +263（+54%）" },
];

export default function WarmingTrend30YearsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="温暖化30年と電力需要｜1995年からの気温上昇が電気料金に与える影響"
        description="1995年から2025年の30年間、東京・大阪・札幌の年平均気温はどう変化したか。10年ごとの加速傾向、CDD（冷房度日）の増加と夏のJEPX高騰リスク、HDD（暖房度日）低下と冬の構造変化を実データで解説します。"
        url="https://simulator.eic-jp.org/warming-trend-30-years"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "温暖化30年と電力需要" },
        ]}
      faq={FAQ}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/market-data" className="underline-offset-2 hover:underline">データで見る電力市場</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">温暖化30年と電力需要</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">MARKET DATA ／ データで見る電力市場</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          温暖化30年と電力需要
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">1995年からの気温上昇が電気料金に与える影響</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          1995年から2025年の30年間、日本の主要都市の年平均気温は着実に上昇しています。
          東京では1990年代平均16.78℃から2020年代平均17.14℃へ+0.36℃、大阪は+0.66℃、
          札幌は+1.18℃と北の都市ほど上昇幅が大きい傾向があります。
          この気温トレンドは冷房電力需要の構造的増加を通じてJEPXスポット価格を押し上げ、
          法人の電気料金コストに長期的な上昇圧力をかけています。
        </p>
      </header>

      {/* キーナンバー */}
      <section className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {keyStats.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">{item.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
          </div>
        ))}
      </section>

      {/* チャート1: 30年気温推移 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">東京・大阪・札幌の年平均気温推移（1995〜2025年）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          3都市31年分の年平均気温を折れ線グラフで表示しています。各都市で上昇トレンドが確認でき、
          特に2020年代以降は3都市ともに高水準が続いています。
        </p>
        <div className="mt-4">
          <WarmingTrendLineChart />
        <MarketDataDownload
          filename="warming-trend-30-years.csv"
          headers={["year", "tokyo", "osaka", "sapporo"]}
          rows={WARMING_YEARS.map((year, i) => ({
            year,
            tokyo: WARMING_TOKYO[i],
            osaka: WARMING_OSAKA[i],
            sapporo: WARMING_SAPPORO[i],
          }))}
          apiPath="/api/market-data"
          caption="主要3都市の年平均気温推移（1995-2025）"
        />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: 気象庁 各観測地点の月別平均気温データを年次集計（1995〜2025年）
        </p>
      </section>

      {/* チャート2: 10年平均比較 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">10年ごとの平均気温比較（1990年代〜2020年代）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          10年ごとの平均値で比較すると上昇傾向がより明確です。
          札幌の上昇幅（+1.18℃）は東京（+0.36℃）の3倍以上であり、北方への温暖化の波及が顕著です。
        </p>
        <div className="mt-4">
          <WarmingDecadeBarChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: 気象庁データを10年単位で集計。1990年代=1990〜1999年、2020年代=2020〜2025年。
        </p>
      </section>

      {/* 30年の気温推移 詳細 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">30年の気温推移：緩やかだが確実な上昇</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          1995年から2025年の気温トレンドは、年ごとの変動幅が大きいため短期では見えにくいものの、
          10年単位で平均すると明確な上昇が確認できます。特に2016年以降は高温年が連続し、
          2023年の東京年平均気温は18.14℃と観測史上最高を記録しました。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          このような気温上昇は「地球温暖化」と「都市ヒートアイランド」の複合効果によるものとされています。
          都市部では建物・道路からの放熱、緑地の減少、エアコン排熱などが気温を押し上げ、
          郊外や農村部よりも温暖化の影響を増幅させます。
        </p>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-800">注目: 2020年代の加速</p>
          <p className="mt-1 text-sm leading-7 text-amber-700">
            2020年代（2020〜2025年）の6年間平均は東京17.14℃、大阪17.96℃、札幌10.32℃。
            いずれも過去30年で最高水準の10年代平均を上回っています。このペースが続けば
            2030年代には東京年平均17.5℃超えも視野に入ります。
          </p>
        </div>
      </section>

      {/* 都市間の違い */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">都市間の違い：札幌が最も急激な上昇</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <h3 className="text-base font-semibold text-red-900">東京（+0.36℃）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              1990年代平均16.78℃から2020年代17.14℃へ。すでに高温ベースにあるため上昇幅は小さいが、
              冷房需要はすでに飽和に近い水準。CDD（冷房度日）は2025年に752と30年で最高を記録。
            </p>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
            <h3 className="text-base font-semibold text-amber-900">大阪（+0.66℃）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              1990年代平均17.30℃から2020年代17.96℃へ。もともと高温の都市がさらに上昇しており、
              夏の熱帯夜増加と冷房稼働時間の延長が電力需要を押し上げています。
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <h3 className="text-base font-semibold text-blue-900">札幌（+1.18℃：最大上昇）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              1990年代平均9.14℃から2020年代10.32℃へ、3都市中最大の上昇幅。
              冬の暖房需要減少が大きく、北海道エリアの電力需要構造が変化しつつあります。
              一方で夏の冷房需要は急速に増加しており、かつてはほぼゼロだった冷房設備の普及が加速中。
            </p>
          </div>
        </div>
      </section>

      {/* CDD/HDD テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">CDD・HDD（東京）の5年区切り平均推移</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          CDD（Cooling Degree Day: 冷房度日）は気温が22℃を超えた分の累積値で冷房需要の指標、
          HDD（Heating Degree Day: 暖房度日）は14℃を下回った分の累積値で暖房需要の指標です。
          CDDの増加は夏の冷房電力需要増・JEPX高騰リスクの上昇を意味し、HDDの低下は冬の暖房需要減を意味します。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">期間</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">CDD平均（冷房）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-blue-700">HDD平均（暖房）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">CDD/HDD比率</th>
              </tr>
            </thead>
            <tbody>
              {cddHddTableRows.map((row, i) => (
                <tr key={row.period} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium">{row.period}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">{row.avgCdd}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-blue-700 font-semibold">{row.avgHdd}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">
                    {(row.avgCdd / row.avgHdd).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: 気象庁東京観測所データを基に集計。CDD基準22℃、HDD基準14℃。
        </p>
      </section>

      {/* 冷房需要増とJEPX高騰リスク */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">冷房需要の増加がJEPX夏価格を押し上げる</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          CDD（冷房度日）の増加は直接的に夏の電力需要を押し上げます。エアコンの冷房は電力消費の
          大きな部分を占めており、連続猛暑日には午後の電力需要がピークを形成し、
          JEPXスポット価格が急騰するリスクが高まります。
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex gap-4">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">1</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">気温上昇 → CDD増加 → 冷房稼働時間延長</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                気温が1℃上昇すると全国の冷房電力需要は約1〜2%増加するとされています。
                30年で+0.4〜1.2℃の上昇は、構造的に需要水準を引き上げ続けています。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">2</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">夏の需要ピーク → JEPX午後価格の高騰</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                猛暑日（35℃超）の昼〜夕方の電力需要は平均需要の130%超に達することがあります。
                供給余力が逼迫するとJEPXスポット価格は急騰し、
                <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動型プラン</Link>
                の法人には直接のコスト増として波及します。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">長期的な価格水準の底上げ</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                年平均気温の上昇は夏だけでなく春秋の気温水準も押し上げ、冷房シーズンを延長させます。
                これは夏のみならず年間を通じた電力需要の底上げにつながり、
                電気料金の中長期的な上昇要因となります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 暖房需要減（HDD低下）の影響 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">暖房需要の減少（HDD低下）がもたらす変化</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          温暖化によるHDD（暖房度日）の低下は、冬の暖房電力・ガス需要を減少させます。
          一見コスト減のように見えますが、電力市場全体への影響はより複雑です。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-green-100 bg-green-50 p-4">
            <h3 className="text-base font-semibold text-green-900">冬の暖房コスト削減</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              1990年代平均のHDD約800から2020年代には700台前後へ低下傾向。
              暖房稼働時間の短縮により、特に寒冷地の法人では暖房費が緩やかに減少しています。
            </p>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
            <h3 className="text-base font-semibold text-amber-900">電力供給構造のミスマッチリスク</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              設備投資は従来の「冬ピーク」を前提に設計されてきました。
              「冬ピーク→夏ピーク」への移行により、夏の供給余力不足が顕在化するリスクがあります。
              2022年の夏の需給逼迫警報はその先行事例です。
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <h3 className="text-base font-semibold text-blue-900">北海道エリアの構造変化</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              札幌で+1.18℃という大幅な上昇は、北海道エリアの電力需要季節パターンを変えつつあります。
              冬需要の優位性が縮小し、夏の冷房需要が急増しており、電力会社の設備計画にも影響しています。
            </p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <h3 className="text-base font-semibold text-red-900">年間トータルでは需要増</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              暖房需要減よりも冷房需要増の方が大きく、年間電力需要のトータルは温暖化によって
              増加する傾向にあります。特に日本の気候帯では夏の冷房電力消費が急増しており、
              年間ベースでも電気料金の上昇圧力が続いています。
            </p>
          </div>
        </div>
      </section>

      {/* 法人の中長期コスト見通し */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人の中長期コスト見通しと対策</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          気温トレンドが今後も続くと仮定した場合、法人の電気料金には以下の構造的な上昇圧力が加わります。
          これは短期的な市場価格変動とは別の、10〜20年単位での基礎的なコスト変動要因です。
        </p>
        <div className="mt-4 space-y-3">
          {[
            { title: "冷房設備の能力増強コスト", desc: "より高性能な空調設備への更新が必要となり、設備投資と維持費が増加します。特に製造業・物流倉庫・データセンターでは冷却コストが収益に直結します。" },
            { title: "夏の電力調達リスク管理", desc: "猛暑年の7〜8月に電気代が急騰するリスクが高まります。固定価格型プランの選択や、デマンドコントロール設備の整備で対応できます。" },
            { title: "省エネ投資のROI向上", desc: "気温上昇により省エネ設備（高効率空調・断熱・遮熱フィルム等）の費用対効果が高まります。温暖化が加速するほど省エネ投資の回収期間が短くなります。" },
            { title: "カーボンニュートラルとの連動", desc: "気候変動対策（再エネ導入・省エネ）は電気料金リスク低減と表裏一体です。長期エネルギー戦略として統合的に取り組むことが重要です。" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">{i + 1}</div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          30年のデータが示すように、日本の気温は東京+0.36℃、大阪+0.66℃、札幌+1.18℃と
          着実に上昇しています。この温暖化トレンドは冷房度日（CDD）の増加を通じて夏の電力需要を押し上げ、
          JEPXスポット価格の高騰リスクを構造的に高めています。一方で暖房度日（HDD）の低下は
          冬の暖房コストを若干抑制しますが、年間トータルでは冷房需要増が暖房需要減を上回ります。
          法人の電気料金戦略では、この中長期トレンドを踏まえた省エネ投資・調達方法の見直しが不可欠です。
        </p>
      </section>

      {/* 関連リンク */}
      
      <Warming2040Forecast />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />
      <MarketDataFaq items={FAQ} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/extreme-heat-electricity-risk", title: "猛暑日・熱帯夜と電力リスク", description: "猛暑日・熱帯夜の増加トレンドと電力需要・価格への具体的影響。" },
            { href: "/winter-vs-summer-electricity", title: "冬と夏、どちらが電気料金リスクか", description: "季節別データで検証する電力コストリスクの実態。" },
            { href: "/electricity-demand-pattern", title: "電力需要の時間帯・季節パターン", description: "需要パターンの詳細データと法人への影響。" },
            { href: "/jepx-spot-price-dashboard", title: "JEPXスポット価格の全体像", description: "2010年以降のJEPX年次・月次価格トレンド。" },
            { href: "/demand-suppression-effectiveness", title: "デマンドコントロールの効果", description: "猛暑ピーク時のデマンド抑制で電気代を下げる方法。" },
            { href: "/battery-electricity-cost-benefit", title: "蓄電池は電気料金対策としてどう効くか", description: "夏の高値時間帯を避けるための蓄電池活用法。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金リスクを把握する"
          description="温暖化による夏のJEPX高騰リスクが自社にどう影響するか、シミュレーターで診断できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "電力市場の解説記事一覧" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
