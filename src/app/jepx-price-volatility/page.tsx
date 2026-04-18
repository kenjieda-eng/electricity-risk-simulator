import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import { JEPX_YEARLY_SUMMARY } from "../../data/jepxData";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "JEPX価格変動の要因｜需給・燃料・再エネ出力・気象の影響を解説";
const pageDescription =
  "JEPXスポット価格を動かす主要因を、需給バランス、燃料CIF価格、再エネ出力、気象条件、系統制約の5つに整理して解説。過去の高騰事例と照らし合わせて実務的に理解できます。";
const pageUrl = "https://simulator.eic-jp.org/jepx-price-volatility";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX 変動 要因",
    "JEPX 高騰 理由",
    "JEPX 太陽光",
    "JEPX 寒波",
    "電力 需給 逼迫",
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

const faq = [
  { question: "JEPX価格が大きく変動する主な要因は何ですか？", answer: "JEPX価格を動かす主要因は、需給バランス、燃料CIF価格、再エネ出力、気象条件、系統制約の5つです。これらが同じ方向に重なると価格が大きく動きやすくなります。2021年1月には寒波+LNG逼迫+発電所停止が重なり250円/kWhを超えました。" },
  { question: "太陽光発電の普及はJEPX価格にどう影響していますか？", answer: "晴天の昼間（10〜15時）は太陽光出力が集中するため、限界費用が下がりスポット価格が急落するパターンが定着しています。一方、曇天・雨天・夜間は火力依存が高まり価格が上昇します。特に冬の曇天夕方は高値になりやすい傾向があります。" },
  { question: "JEPXのスパイク（異常高騰）は近年どうなっていますか？", answer: "FY2020は50円/kWh超のスパイクが749コマ（全体の4.3%）発生し最高値は251円でしたが、FY2024以降はスパイク発生ゼロとなっており、市場は安定化傾向にあります。" },
];

export default function JepxPriceVolatilityPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力調達の仕組みを知る", url: "https://simulator.eic-jp.org/articles/power-procurement" },
          { name: "JEPX価格変動の要因" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">JEPX価格変動の要因</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">JEPX価格変動の要因</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPX スポット価格は、日次・時間帯ごとに動きます。ニュースでは「高騰」「下落」だけが伝わりがちですが、
          価格を動かす要因を切り分けて理解すると、実務の予測精度や、シナリオ別の備えが格段にやりやすくなります。
          このページでは、JEPX 価格を動かす 5 大要因を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">要因 ①：需給バランス</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最も直接的な要因。需要が発電能力に対して逼迫すると、限界費用の高い発電機（石油火力・緊急用電源）が追加稼働し、
            市場価格が跳ね上がります。広域予備率が一桁台に下がると、スポット価格は一気に 50〜100 円/kWh 超まで上昇する傾向があります。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">需給逼迫シグナル</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
              <li>広域予備率 5% 以下：需給警戒</li>
              <li>広域予備率 3% 以下：需給注意報</li>
              <li>広域予備率 2% 以下：電力需給ひっ迫警報</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">要因 ②：燃料CIF価格</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            火力発電の限界費用は、燃料価格によって大きく変わります。LNG スポット価格が 10 ドル/MMBtu から 30 ドル/MMBtu になれば、
            LNG 火力の発電コストはほぼ 3 倍になり、市場価格もそれに応じて上昇します。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022 年度のウクライナ危機時には、LNG スポットが一時 100 ドル/MMBtu 近くまで急騰し、
            JEPX 年度平均が 20 円/kWh 台に押し上げられました。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">要因 ③：再エネ出力</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            太陽光・風力の出力は、JEPX 価格に大きく影響します。特に太陽光は晴天の昼間（10〜15時）に出力が集中するため、
            この時間帯の需要は化石燃料発電ではなく再エネで賄える → 限界費用が下がる → スポット価格が急落
            というパターンが定着しました。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">晴天の昼間</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                スポット価格が 0.01 円/kWh まで下がる時間帯も発生。過剰供給により一部の火力が停止する。
              </p>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">曇天・雨天・夜間</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                再エネ出力が減り、火力の稼働比率が上がるため、価格が上昇。特に冬の曇天夕方は高値になりやすい。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">要因 ④：気象条件</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            気象は需要と再エネ出力の両方を動かすため、JEPX 価格の最大の短期変動要因です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><strong>猛暑</strong>：冷房需要急増 → 夕方ピークで高値</li>
            <li><strong>寒波</strong>：暖房需要急増 → 朝・夕で高値（2021年1月のスパイクの主因）</li>
            <li><strong>台風通過</strong>：風力停止 + 電力設備への影響で価格変動</li>
            <li><strong>長雨・曇天</strong>：太陽光出力低下 → 昼間の安値が消える</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">要因 ⑤：系統制約</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            送電線の容量制約により、全国一律のシステムプライスから「エリアプライス」が分離することがあります。
            送電線が混雑したエリアは高値、余裕のあるエリアは低値になります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            九州エリアでは太陽光大量導入の影響で、昼間のエリアプライスがシステムプライスより安くなりやすい傾向があります。
            一方、北海道エリアは本州との連系線容量が限られるため、冬季に逼迫しやすい構造です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">過去の高騰事例と要因の組み合わせ</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">時期</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な要因</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">ピーク価格帯</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2021年1月</td><td className="border border-slate-200 px-3 py-2">寒波 + LNG逼迫 + 発電所停止</td><td className="border border-slate-200 px-3 py-2 text-right">250 円/kWh 超</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2022年春</td><td className="border border-slate-200 px-3 py-2">ウクライナ危機起点のLNG高騰</td><td className="border border-slate-200 px-3 py-2 text-right">35 円/kWh</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2022年夏</td><td className="border border-slate-200 px-3 py-2">猛暑 + LNG高止まり</td><td className="border border-slate-200 px-3 py-2 text-right">40 円/kWh</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2022年冬</td><td className="border border-slate-200 px-3 py-2">需給逼迫 + 寒波</td><td className="border border-slate-200 px-3 py-2 text-right">45 円/kWh</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年度別ボラティリティ推移</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実データによるボラティリティの推移です。FY2020は日次ボラティリティが20.79と突出して高く、
            2021年1月の歴史的スパイク（最高251円）が全年度の数値を大きく押し上げています。
            FY2024以降はスパイク発生ゼロとなり、市場は安定化傾向にあります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">日次ボラティリティ</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">コマ単位StdDev</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">最高値</th>
                </tr>
              </thead>
              <tbody>
                {JEPX_YEARLY_SUMMARY.map((row) => (
                  <tr
                    key={row.fy}
                    className={
                      row.fy === 2020
                        ? "bg-red-50"
                        : row.fy === 2021 || row.fy === 2022
                        ? "bg-orange-50"
                        : "odd:bg-white even:bg-slate-50"
                    }
                  >
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.fy}年度</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${row.fy === 2020 ? "text-red-700" : "text-slate-700"}`}>
                      {row.dailyVolatility.toFixed(2)}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.stdDev.toFixed(2)}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.max.toFixed(0)}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">日次ボラティリティの推移（棒グラフ）</h3>
          <div className="mt-3 space-y-1">
            {JEPX_YEARLY_SUMMARY.map((row) => {
              const maxVol = 22;
              const pct = Math.min((row.dailyVolatility / maxVol) * 100, 100);
              const barColor =
                row.fy === 2020
                  ? "bg-red-500"
                  : row.fy === 2021 || row.fy === 2022
                  ? "bg-orange-400"
                  : row.dailyVolatility < 2
                  ? "bg-green-400"
                  : "bg-sky-500";
              return (
                <div key={row.fy} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-16 shrink-0 text-right font-medium">{row.fy}年度</span>
                  <div className="flex-1 rounded-sm bg-slate-100">
                    <div
                      className={`${barColor} h-5 rounded-sm transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-10 shrink-0 font-semibold">{row.dailyVolatility.toFixed(2)}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">スパイク発生頻度（50円/kWh超のコマ）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            FY2020は749コマ（全体の4.3%）で50円超のスパイクが発生し、最高値は251円に達しました。
            <strong className="text-red-700">FY2024以降はスパイク発生ゼロ</strong>となっており、市場は安定化傾向が続いています。
          </p>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">50円超コマ数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">発生率</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">最高値</th>
                </tr>
              </thead>
              <tbody>
                {JEPX_YEARLY_SUMMARY.map((row) => (
                  <tr
                    key={row.fy}
                    className={
                      row.fy === 2020
                        ? "bg-red-50"
                        : row.fy >= 2024
                        ? "bg-green-50"
                        : "odd:bg-white even:bg-slate-50"
                    }
                  >
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.fy}年度</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${row.fy === 2020 ? "text-red-700" : row.fy >= 2024 ? "text-green-700" : "text-slate-700"}`}>
                      {row.spikeCount.toLocaleString()}コマ
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.spikeRatio.toFixed(1)}%</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.max.toFixed(0)}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">出典: JEPX公表データを集計。スパイク = システムプライスが50円/kWhを超えたコマ。</p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "日本卸電力取引所（JEPX）", url: "http://www.jepx.org", description: "スポット市場の約定価格データ・ボラティリティ分析用元データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "需給逼迫時の対応・広域予備率の基準" },
            { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給データ・系統制約情報" },
          ]}
          publishedAt="2026-04-11"
        />

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/jepx-explained", title: "JEPXとは", description: "卸電力市場の基本解説。" },
            { href: "/jepx-spot-market-history", title: "JEPXスポット市場の価格推移", description: "過去の実績数値。" },
            { href: "/jepx-business-impact", title: "JEPXが法人料金に与える影響", description: "調達経路別の波及。" },
            { href: "/electricity-cost-risk-heatwave", title: "猛暑による電気料金リスク", description: "猛暑時のJEPX連動影響。" },
            { href: "/electricity-cost-risk-severe-winter", title: "厳冬による電気料金リスク", description: "寒波時のJEPX連動影響。" },
          ]}
        />

        <ContentCta
          heading="気象リスクのシナリオを試算"
          description="猛暑・寒波時のJEPX高騰を想定したシナリオで、自社への影響を確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="jepx-price-volatility" />
      </div>
    </main>
    </>
  );
}
