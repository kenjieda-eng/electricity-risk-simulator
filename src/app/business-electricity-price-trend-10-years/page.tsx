import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import BusinessElectricityTrendHubCharts from "./_components/BusinessElectricityTrendHubCharts";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import {
  CONTRACT_VIEWPOINT_ROWS,
  TRANSITION_COMPARISON_CARDS,
  TREND_EVENT_TIMELINE,
} from "../../data/businessElectricityTrendHubData";
import { JEPX_YEARLY_SUMMARY } from "../../data/jepxData";
import { DEMAND_FY_TREND } from "../../data/demandData";
import { CDD_TREND, HDD_TREND, DECADAL_AVG_TEMP } from "../../data/weatherData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle = "法人の電気料金推移（10年）｜電気代の10年推移（2016→2025）を実データで解説";
const pageDescription =
  "電気料金の推移を10年スパン（2016→2025年）で、特別高圧・高圧・低圧の実データと図表で解説。法人の電気代10年推移、2021年以降の値上がり、高止まり、2022年急騰、補助政策、再エネ賦課金、JEPX市場の影響まで整理し、契約見直しの判断材料として使える形にまとめています。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 推移 10年",
    "電気料金推移 10年",
    "電気料金推移 10 年 法人",
    "電気料金 推移 10年 法人",
    "電気代 推移 10年",
    "電気代 値上げ 推移",
    "電気料金 推移",
    "法人向け電気料金 高止まり",
    "電気料金 いつから高くなった",
    "法人 電気料金 長期推移",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-price-trend-10-years",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-price-trend-10-years",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/price-trends", width: 1200, height: 630, alt: "法人の電気料金推移（10年）｜電気代の10年推移を特別高圧・高圧・低圧で見る" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-trends"],
  },
};

export default function BusinessElectricityPriceTrend10YearsPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/business-electricity-price-trend-10-years"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電気料金推移（10年）" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-trends" className="underline-offset-2 hover:underline">電気料金の推移と高止まり</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">10年推移</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電気料金推移（10年）｜電気代の10年推移（2016→2025）</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <strong>結論：法人の電気料金は2016〜2020年は安定、2021年から段階的な値上げ、2022年に急騰（ウクライナ侵攻・LNG高騰）、2023年以降は激変緩和措置で見かけ上低下、2024年以降の措置縮小で再び高止まりへ——の5局面で推移しています。電気代の10年推移を通期で捉えるのがポイントです。</strong>
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          単月の上げ下げだけでは実態を捉えにくく、基準期・急騰期・高止まり・補助による見かけの低下・補助縮小後の再上昇までを連続で確認する必要があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは「グラフで全体感をつかむ → 主要イベントで要因を確認する → 契約区分ごとの違いを理解する → 詳細ページで深掘りする」という流れで、
          法人の電気料金が10年間でどう変わってきたかを図表中心で整理しています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          グラフは月次データがそろう2019年以降を軸にしつつ、年表では2016年の電力全面自由化以降の制度・市場の転換点もあわせて確認できます。
        </p>
      </header>

      <TableOfContents />
      <section className="mt-6 space-y-6">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "10年視点で見ると、単発の値上げではなく複数回の上昇局面が見える",
            "大きな転換点は2022年前後で、契約区分ごとの差が拡大",
            "ピークアウト後も2010年代後半の水準に戻り切らない契約区分が多い",
            "補助政策の有無で、見かけの請求負担と本来の料金水準にずれが生じる",
          ].map((point) => (
            <article key={point} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm leading-7 text-slate-700">{point}</p>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">このページでわかること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>法人向け電気料金の全体推移と急騰局面の位置づけ</li>
            <li>ピーク後も高止まりして見える構造要因</li>
            <li>補助政策が料金の見え方に与える影響</li>
            <li>特別高圧・高圧・低圧で見え方が違う理由</li>
            <li>詳細テーマを深掘りするための関連ページの案内</li>
          </ul>
        </section>

        <BusinessElectricityTrendHubCharts />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金の10年推移で見える転換点（2016年以降）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            グラフだけでは要因が見えにくいため、制度・市場・国際要因を年表で重ねます。各イベントで「何が起きたか」と
            「料金を見るうえで何に効いたか」を分けて確認すると、社内説明で論点を整理しやすくなります。
          </p>
          <div className="mt-4 space-y-3">
            {TREND_EVENT_TIMELINE.map((event) => (
              <article key={event.year + event.title} className="rounded-lg border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">{event.year}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{event.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{event.whatHappened}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">料金への効き方: {event.whyItMatters}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年平均 → ピーク局面 → 最新の比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月次データがそろう2019年を基準に、ピーク局面と最新値を並べて変化幅を表示しています。2016〜2018年は公開月次データの連続性が
            十分でないため、基準比較は2019年平均で統一しています。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {TRANSITION_COMPARISON_CARDS.map((card) => (
              <article key={card.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">{card.label}</h3>
                <dl className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="flex items-center justify-between gap-2">
                    <dt>{card.baselineLabel}</dt>
                    <dd>{card.baselineValue.toFixed(2)} 円/kWh</dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt>{card.peakLabel}</dt>
                    <dd>
                      {card.peakValue.toFixed(2)} 円/kWh（+{card.peakDelta.toFixed(2)} 円 / +{card.peakDeltaPercent}%）
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt>{card.latestLabel}</dt>
                    <dd>
                      {card.latestValue.toFixed(2)} 円/kWh（+{card.latestDelta.toFixed(2)} 円 / +{card.latestDeltaPercent}%）
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧・高圧・低圧で見え方が違う理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同じニュースでも、契約区分ごとに単価水準・総額影響・補助の見え方が異なります。自社に近い区分で読まないと、意思決定で誤読しやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-left">契約区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な対象</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">単価水準の見え方</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">調整項目の効き方</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">補助の見え方</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">実務上の見方</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {CONTRACT_VIEWPOINT_ROWS.map((row) => (
                  <tr key={row.contractType}>
                    <td className="border border-slate-200 px-3 py-2">{row.contractType}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.target}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.unitPriceView}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.adjustmentImpact}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.subsidyView}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.practicalView}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">急騰局面はどこだったか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大きな上昇は2022年後半から2023年前半に集中し、燃料・為替・市場の複合要因が重なりました。2021年初の需給ひっ迫は先行シグナルとして
            捉えると説明しやすく、2022年の地政学要因で上昇が加速した流れがグラフ上でも確認できます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに詳しい背景は{" "}
            <Link href="/how-long-business-electricity-price-surge-lasts" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が高騰するのはいつまで続くのか
            </Link>{" "}
            で、市場要因と契約反映のタイムラグに分けて確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ピーク後も高止まりして見える理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高止まりは「短期で下がらない」だけではなく、基準期との比較で戻り切らない状態を指します。調達環境の変化、契約単価の改定、調整項目の残存影響が
            同時に効くため、ピークアウト後も2010年代後半の水準には完全に戻っていない契約区分があります。詳しくは{" "}
            <Link href="/why-electricity-prices-have-not-returned" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              急騰後も元に戻らない背景
            </Link>
            でも整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助政策があると何が見えにくくなるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策が入る期間は、請求時点の見かけの負担が下がる一方で、契約単価や調達コストの本来水準は同時には下がらないことがあります。比較実務では、
            「補助込みの見かけ負担」と「補助を除いた水準」を分けて読むことが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策の見え方は{" "}
            <Link href="/impact-of-electricity-subsidy-ending" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              補助金終了の影響
            </Link>
            と{" "}
            <Link href="/electricity-price-subsidy-impact" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              補助金縮小で見え方はどう変わったか
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">卸市場（JEPX）の推移</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け小売料金の背後には、日本卸電力取引所（JEPX）のスポット市場があります。発電事業者と小売事業者が電力を売買するこの市場の価格動向は、
            燃料費調整額や市場連動型プランを通じて法人の請求額に直結します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {(() => {
              const fy2019 = JEPX_YEARLY_SUMMARY.find((r) => r.fy === 2019);
              const fy2022 = JEPX_YEARLY_SUMMARY.find((r) => r.fy === 2022);
              const fy2025 = JEPX_YEARLY_SUMMARY.find((r) => r.fy === 2025);
              return [
                { label: "FY2019（直近の最安値）", value: `${fy2019?.avg.toFixed(2) ?? "7.93"}円/kWh`, note: "電力自由化後の底値圏。安定供給が続いた基準年" },
                { label: "FY2022（歴代最高値）", value: `${fy2022?.avg.toFixed(2) ?? "20.41"}円/kWh`, note: "ウクライナショック直撃。スパイク282コマ、最高100円/kWh" },
                { label: "FY2025（直近）", value: `${fy2025?.avg.toFixed(2) ?? "11.06"}円/kWh`, note: "スパイク発生ゼロ。ただしFY2019比では+39%" },
              ].map((item) => (
                <article key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-2xl font-bold text-sky-700">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.note}</p>
                </article>
              ));
            })()}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            市場の取引規模（約定量）も大きく拡大しています。FY2010の31万kWh/コマからFY2025の1,624万kWh/コマへ50倍超に成長し、
            市場の流動性は向上しています。一方で、価格が急騰（スパイク）した際の影響も大きくなるため、市場連動型プランを利用する法人は価格変動の推移を継続的に確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金の10年推移を読むときに注意したいこと（法人向け）</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              <span className="font-semibold text-slate-900">1) 粒度をそろえる:</span> 月次と年度を混在させる場合は、どの図がどの粒度かを分けて読みます。
            </p>
            <p>
              <span className="font-semibold text-slate-900">2) 単価と総額を分離する:</span> 特別高圧は単価が低めでも総額影響が大きく、低圧は構成比で印象が変わりやすい点に注意が必要です。
            </p>
            <p>
              <span className="font-semibold text-slate-900">3) 制度要因を重ねる:</span> 補助や再エネ賦課金は請求の見え方を大きく変えるため、単価トレンドと同時に確認します。
            </p>
            <p>
              <span className="font-semibold text-slate-900">4) 自社区分で読む:</span> 特別高圧・高圧・低圧を横並びで見た後に、自社と近い契約区分へ絞り込むと誤読を抑えられます。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">全国電力需要の推移</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            全国の電力需要はFY2017の10.2万MWをピークに緩やかに減少しています（-3.6%）。にもかかわらず電気料金は上昇を続けており、
            需要が減っても料金が下がらない「ねじれ」構造が生じています。この背景には、容量拠出金・再エネ賦課金といった制度コストの増加や、燃料費の高騰があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均需要（万MW）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">ピーク（万MW）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">前年比</th>
                </tr>
              </thead>
              <tbody>
                {DEMAND_FY_TREND.map((row, i) => (
                  <tr key={row.fy} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">FY{row.fy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{(row.avgMW / 10000).toFixed(1)}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{(row.peakMW / 10000).toFixed(1)}</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right font-medium ${row.yoyChange === null ? "text-slate-400" : row.yoyChange > 0 ? "text-red-600" : "text-emerald-600"}`}>
                      {row.yoyChange === null ? "—" : `${row.yoyChange > 0 ? "+" : ""}${row.yoyChange}%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">出典: OCCTO公表データを集計（FY2016〜FY2023）</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">気候変動と電力需要の構造変化</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            主要都市の10年平均気温は+0.5〜1.2℃上昇しています。電力需要は全体としては緩やかに減少している一方で、夏のピーク需要は増大傾向にあります。
            「年間の平均需要は下がるが、猛暑時のピーク需要は上がる」という構造は、電力システムの安定供給コストを押し上げ、料金にも影響を与え続けています。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">10年平均気温の推移（東京）</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-sky-50">
                    <tr>
                      <th className="border border-slate-200 p-2 text-left font-semibold text-slate-900">年代</th>
                      <th className="border border-slate-200 p-2 text-right font-semibold text-slate-900">東京（℃）</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {DECADAL_AVG_TEMP.map((row, i) => (
                      <tr key={row.decade} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="border border-slate-200 p-2 text-slate-700">{row.decade}</td>
                        <td className="border border-slate-200 p-2 text-right font-semibold text-slate-800">{row.tokyo.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-slate-500">1990年代16.78℃ → 2020年代17.14℃（+0.36℃）</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">冷暖房需要の変化（CDD vs HDD）</p>
              <div className="mt-3 space-y-3">
                <div className="rounded-lg border border-rose-200 bg-rose-50 p-3">
                  <p className="text-xs font-semibold text-rose-900">冷房需要（CDD）+24〜40%増加</p>
                  <div className="mt-2 space-y-1">
                    {CDD_TREND.map((row) => (
                      <div key={row.cityJa} className="flex items-center justify-between text-xs text-rose-800">
                        <span>{row.cityJa}</span>
                        <span className="font-semibold">+{row.changePercent}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-sky-200 bg-sky-50 p-3">
                  <p className="text-xs font-semibold text-sky-900">暖房需要（HDD）-10〜19%減少</p>
                  <div className="mt-2 space-y-1">
                    {HDD_TREND.map((row) => (
                      <div key={row.cityJa} className="flex items-center justify-between text-xs text-sky-800">
                        <span>{row.cityJa}</span>
                        <span className="font-semibold">{row.changePercent}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※CDD（冷房度日）: 基準温度22℃。HDD（暖房度日）: 基準温度14℃。出典: 気象庁過去の気象データ（1995〜2024年）を集計。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金を10年視点で読む目的は、単発の値上げを把握することではなく、複数の転換点がどう連なってきたかをつかむことです。
            急騰期の要因、ピーク後の高止まり、補助政策による見かけの差、契約区分ごとの見え方の違いを図表で切り分けると、
            予算計画・社内説明・契約見直しの判断軸が整理しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、総額だけでなく単価の推移を継続的に確認し、自社の契約区分に近いデータを基準にしながら、
            補助政策や制度変更の影響を重ねて読むことが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">テーマ別に深掘りする</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            このページで全体像を確認した後、気になるテーマのページへ進むと理解を深められます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Link href="/why-electricity-prices-have-not-returned" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">急騰後も元に戻らない背景</p>
              <p className="mt-1 text-sm text-slate-700">高止まりの構造要因を分解して確認できます。</p>
            </Link>
            <Link href="/impact-of-electricity-subsidy-ending" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">補助金終了の影響</p>
              <p className="mt-1 text-sm text-slate-700">補助後の見かけの変化と実力水準の違いを確認できます。</p>
            </Link>
            <Link href="/business-electricity-bill-breakdown" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">法人向け電気料金の内訳とは</p>
              <p className="mt-1 text-sm text-slate-700">請求内訳のどの項目が増減したかを整理しています。</p>
            </Link>
            <Link href="/why-business-electricity-prices-rise" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">法人の電気料金が上がる理由</p>
              <p className="mt-1 text-sm text-slate-700">チャートの転換点を、要因の言葉で説明しやすくなります。</p>
            </Link>
            <Link href="/high-voltage-electricity-pricing" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">高圧電力の料金の見方</p>
              <p className="mt-1 text-sm text-slate-700">高圧契約の比較で見落としやすい点を確認できます。</p>
            </Link>
            <Link href="/extra-high-voltage-electricity-pricing" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">特別高圧の料金の見方</p>
              <p className="mt-1 text-sm text-slate-700">大口需要家向けの実務論点を確認できます。</p>
            </Link>
            <Link href="/market-linked-vs-fixed" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">市場連動 / 固定プランの違い</p>
              <p className="mt-1 text-sm text-slate-700">推移の理解を、契約メニューの選定に活かせます。</p>
            </Link>
            <Link href="/business-electricity-retrospective" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">法人電気料金振り返り</p>
              <p className="mt-1 text-sm text-slate-700">月次の最新動向を契約区分別に追跡できます。</p>
            </Link>
          </div>
        </section>

        <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">推移と高止まりに関連する記事</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            10年推移の全体像を踏まえたうえで、個別の論点を深掘りできます。
          </p>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <Link href="/electricity-price-trend-2019-2025" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">法人向け電気料金は高止まりしているのか</span>
            </Link>
            <Link href="/how-long-business-electricity-price-surge-lasts" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">電気料金の高騰はいつまで続くのか</span>
            </Link>
            <Link href="/how-much-business-electricity-prices-increase" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">法人の電気料金はどの程度上がるのか</span>
            </Link>
            <Link href="/electricity-price-by-voltage-type" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">特別高圧・高圧・低圧で上がり方はどう違うか</span>
            </Link>
            <Link href="/electricity-price-without-renewable-surcharge" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">再エネ賦課金を除いても電気料金は高いのか</span>
            </Link>
            <Link href="/electricity-price-subsidy-impact" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">補助金縮小で見え方はどう変わったか</span>
            </Link>
            <Link href="/renewable-energy-surcharge" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">再エネ賦課金とは</span>
            </Link>
            <Link href="/capacity-contribution-cost-impact" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">容量拠出金で電気代はどのくらい上がるのか</span>
            </Link>
          </div>
        </div>

        
      <MarketDataDownload
        apiPath="/api/datasets"
        caption="本記事で参照する全データセットを統合API経由で取得可能（CC BY 4.0、商用利用可）"
      />
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="business-electricity-price-trend-10-years" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "JEPX", "市場連動プラン", "高圧電力", "電気料金の内訳"]} />
        </div>

        <AuthorBadge publishedAt="2026-03-27" updatedAt="2026-03-27" />

        <ContentCta
          heading="長期推移を前提に、次の見直し判断へ"
          description="急騰・高止まり・補助要因を分けて理解したうえで比較に進むと、単価だけでない実務判断がしやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/price-trends", label: "推移と高止まりカテゴリへ" },
            { href: "/business-electricity-bill-breakdown", label: "内訳の確認に進む" },
          ]}
        />
      </section>
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
