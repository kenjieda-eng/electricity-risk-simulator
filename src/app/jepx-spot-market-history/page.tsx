import type { Metadata } from "next";
import Link from "next/link";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { JEPX_SYSTEM_PRICE_YEARLY } from "../../data/priceAdjustmentHistory";
import { JEPX_YEARLY_SUMMARY } from "../../data/jepxData";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "JEPXスポット市場の価格推移｜2016〜2025年度の年度別詳細";
const pageDescription =
  "JEPXスポット市場のシステムプライスを2016年度から2025年度まで年度別に解説。2021年1月の歴史的高騰、2022年度のウクライナ危機での過去最高値、その後の正常化までをデータで整理します。";
const pageUrl = "https://simulator.eic-jp.org/jepx-spot-market-history";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX 推移",
    "JEPX 価格 履歴",
    "JEPX システムプライス",
    "2021年1月 JEPX",
    "2022年 JEPX ウクライナ",
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

const faq = [
  { question: "JEPXスポット市場の価格はどのように推移してきましたか？", answer: "2016年度は8.47円/kWhで安定していましたが、2020年度末に寒波で250円超のスパイクが発生。2022年度はウクライナ危機でLNGが高騰し、年度平均20.37円/kWhと過去最高を記録しました。2023年度以降はLNG正常化で10〜12円台に落ち着いています。" },
  { question: "2021年1月のJEPX歴史的スパイクとは何ですか？", answer: "記録的な寒波とLNG在庫逼迫により、2021年1月中旬にJEPXスポット価格が一時250円/kWhを超える30分コマが発生しました。月平均は60円/kWhを突破し、市場連動プラン契約の中小事業者・新電力で経営破綻が相次ぎました。" },
  { question: "JEPXの市場規模はどれくらい拡大しましたか？", answer: "FY2010のコマあたり平均約定量は約31万kWhでしたが、FY2025には1,624万kWhと50倍超に成長しました。電力小売全面自由化（2016年度）以降、市場参加者が急増し、流動性と価格発見機能が大幅に向上しています。" },
];

export default function JepxSpotMarketHistoryPage() {
  const labels = JEPX_SYSTEM_PRICE_YEARLY.map((r) => `${r.year}年度`);
  const values = JEPX_SYSTEM_PRICE_YEARLY.map((r) => r.systemPriceYenPerKwh);

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
          { name: "JEPXスポット市場の価格推移" },
        ]}
        faq={faq}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">JEPXスポット市場の価格推移</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">JEPXスポット市場の価格推移</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPX スポット市場の価格は、法人向け電気料金の背景を読むための重要指標です。
          このページでは 2016 年度から現在までの年度平均システムプライスを整理し、
          各年度の背景要因を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年度別システムプライス推移</h2>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "JEPXシステムプライス年度平均（円/kWh）",
                  values,
                  color: "#2563eb",
                  fillColor: "rgba(37,99,235,0.16)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">出典: 日本卸電力取引所（JEPX）公表値。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年度別の数値と背景</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年度平均</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な背景</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2016年度</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">8.47</td><td className="border border-slate-200 px-3 py-2">新電力参入拡大期、安定基調</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2017年度</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">9.74</td><td className="border border-slate-200 px-3 py-2">燃料価格上昇</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2018年度</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">9.74</td><td className="border border-slate-200 px-3 py-2">安定基調持続</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2019年度</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">7.92</td><td className="border border-slate-200 px-3 py-2">コロナ直前、燃料安で底値</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2020年度</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">11.12</td><td className="border border-slate-200 px-3 py-2">2021年1月に250円超スパイク発生</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2021年度</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">13.48</td><td className="border border-slate-200 px-3 py-2">LNG需給逼迫で高値定着</td></tr>
                <tr className="border-t bg-red-50"><td className="border border-slate-200 px-3 py-2 font-semibold">2022年度</td><td className="border border-slate-200 px-3 py-2 text-right font-bold text-red-700">20.37</td><td className="border border-slate-200 px-3 py-2">ウクライナ危機で過去最高</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2023年度</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">10.74</td><td className="border border-slate-200 px-3 py-2">LNG正常化で下落</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2024年度</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">12.30</td><td className="border border-slate-200 px-3 py-2">再上昇基調</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">2025年度</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">11.05</td><td className="border border-slate-200 px-3 py-2">高止まり継続</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2021年1月の歴史的スパイク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2020 年度末、記録的な寒波と LNG 在庫逼迫で、JEPX スポット価格は 2021 年 1 月中旬に
            一時 250 円/kWh を超える 30 分コマが発生しました。1 月の月平均は 60 円/kWh を突破し、
            年度平均を大きく押し上げました。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>当時の状況：</strong>広域予備率が一桁台に低下。節電要請が出される中、
              市場連動プラン契約の中小事業者・新電力で経営破綻が相次いだ。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年度のウクライナ危機影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022 年 2 月のウクライナ危機発生以降、LNG スポット価格が歴史的な水準まで急騰。
            日本の発電用 LNG 調達コストが跳ね上がり、JEPX 年度平均は 20.37 円/kWh に達しました。
            2022 年度は年間を通じて 15〜25 円/kWh の高値水準が続き、
            新電力 100 社超が撤退・事業譲渡に追い込まれました。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">時間帯別の変動パターン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年度平均だけでなく、時間帯別の変動パターンも重要です。典型的な変動は次の通りです。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              <strong>太陽光出力時間帯（10〜15時）</strong>：晴天時は需給緩和で低価格、
              一部時間帯で 0.01 円/kWh まで下落することも
            </li>
            <li>
              <strong>夕方ピーク（17〜20時）</strong>：太陽光出力減少＋需要増で高値になりやすい時間帯
            </li>
            <li>
              <strong>冬朝（7〜9時）</strong>：暖房需要で高値。寒波時にスパイクが発生しやすい
            </li>
            <li>
              <strong>深夜（0〜5時）</strong>：需要減で安定的に低価格
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPX年度別推移データ（2010〜2026年度）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力自由化前後を含む2010年度以降の全データを整理しました。FY2019が最安（7.93円）、FY2022が過去最高（20.41円）で、
            FY2025は11.06円と落ち着いた水準となっています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">平均</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">中央値</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">最安</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">最高</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">標準偏差</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">平均約定量</th>
                </tr>
              </thead>
              <tbody>
                {JEPX_YEARLY_SUMMARY.map((row) => (
                  <tr
                    key={row.fy}
                    className={
                      row.fy === 2022
                        ? "bg-red-50"
                        : row.fy === 2019
                        ? "bg-green-50"
                        : "odd:bg-white even:bg-slate-50"
                    }
                  >
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.fy}年度</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${row.fy === 2022 ? "text-red-700" : row.fy === 2019 ? "text-green-700" : "text-slate-700"}`}>
                      {row.avg.toFixed(2)}円
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.median.toFixed(2)}円</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.min.toFixed(2)}円</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.max.toFixed(0)}円</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.stdDev.toFixed(2)}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{(row.avgVolume / 10000).toFixed(0)}万kWh</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">出典: 日本卸電力取引所（JEPX）公表値を集計。単位: 円/kWh（約定量を除く）。</p>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">年度平均価格の推移（棒グラフ）</h3>
          <div className="mt-3 space-y-1">
            {JEPX_YEARLY_SUMMARY.map((row) => {
              const maxAvg = 21;
              const pct = Math.min((row.avg / maxAvg) * 100, 100);
              const barColor =
                row.fy === 2022
                  ? "bg-red-500"
                  : row.fy === 2020 || row.fy === 2021
                  ? "bg-orange-400"
                  : row.fy === 2019
                  ? "bg-green-500"
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
                  <span className="w-16 shrink-0 font-semibold">{row.avg.toFixed(2)}円</span>
                </div>
              );
            })}
          </div>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">約定量の推移 — 市場規模の拡大</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            FY2010のコマあたり平均約定量は約31万kWhでしたが、FY2025には1,624万kWhと<strong>50倍超</strong>に拡大しました。
            電力小売全面自由化（2016年度）以降、市場参加者が急増し、JEPX の流動性と価格発見機能が大幅に向上しています。
          </p>
          <div className="mt-3 space-y-1">
            {JEPX_YEARLY_SUMMARY.filter((r) => r.fy <= 2025).map((row) => {
              const maxVol = 19000000;
              const pct = Math.min((row.avgVolume / maxVol) * 100, 100);
              return (
                <div key={row.fy} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-16 shrink-0 text-right font-medium">{row.fy}年度</span>
                  
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="flex-1 rounded-sm bg-slate-100">
                    <div
                      className="h-5 rounded-sm bg-indigo-400 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-20 shrink-0 font-semibold">{(row.avgVolume / 10000).toFixed(0)}万kWh</span>
                </div>
              );
            })}
          </div>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "日本卸電力取引所（JEPX）", url: "http://www.jepx.org", description: "スポット市場のシステムプライス・約定量の公表データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力市場の動向分析・LNG調達に関する情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "卸電力市場の価格動向レポート" },
          ]}
          publishedAt="2026-04-11"
        />

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/jepx-explained", title: "JEPXとは", description: "卸電力市場の基本解説。" },
            { href: "/jepx-price-volatility", title: "JEPX価格変動の要因", description: "何が価格を動かすのかを分析。" },
            { href: "/jepx-business-impact", title: "JEPXが法人料金に与える影響", description: "調達経路別の波及を整理。" },
            { href: "/market-price-adjustment", title: "市場価格調整額とは", description: "JEPX連動の請求反映。" },
            { href: "/how-electricity-prices-are-determined", title: "電気の価格はどう決まるのか", description: "価格決定の仕組み。" },
          ]}
        />

        <ContentCta
          heading="自社への影響を試算する"
          description="JEPX高騰シナリオでの請求影響を、シミュレーターで数字として確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="jepx-spot-market-history" />
      </div>
    </main>
    </>
  );
}
