import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "JEPX価格の10年推移グラフ｜2021年1月250円スパイクの衝撃と法人電気料金への波及を完全解説";
const pageDescription =
  "JEPXスポット価格は2016年の8.4円/kWhから2022年の20.1円まで2.4倍に上昇、2021年1月には250円超の歴史的スパイクも発生。本記事は法人担当者向けに、年度別推移グラフ、スパイク3事例の請求インパクト、市場連動プランの実害、固定プランとの差を実データで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX 卸電力市場 推移",
    "JEPXシステムプライス 年度別",
    "電力卸市場 法人 影響",
    "市場連動プラン 電気代 上がる",
    "JEPX スパイク 法人",
    "卸電力 料金 波及経路",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/jepx-price-trend-and-corporate-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/jepx-price-trend-and-corporate-impact",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/price-trends",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-trends"],
  },
};

// JEPX年度平均推移（円/kWh）
const jepxYearlyRows = [
  { fy: "2016年度", avg: 8.4, maxMonth: "1月（11.2）", minMonth: "4月（5.8）", yoy: "—" },
  { fy: "2017年度", avg: 9.1, maxMonth: "2月（12.6）", minMonth: "5月（6.3）", yoy: "+8.3%" },
  { fy: "2018年度", avg: 10.2, maxMonth: "1月（14.8）", minMonth: "4月（7.1）", yoy: "+12.1%" },
  { fy: "2019年度", avg: 7.6, maxMonth: "1月（11.4）", minMonth: "9月（5.2）", yoy: "▲25.5%" },
  { fy: "2020年度", avg: 10.3, maxMonth: "1月（248.0）", minMonth: "8月（6.7）", yoy: "+35.5%" },
  { fy: "2021年度", avg: 18.5, maxMonth: "6月（22.3）", minMonth: "3月（14.6）", yoy: "+79.6%" },
  { fy: "2022年度", avg: 20.1, maxMonth: "9月（27.8）", minMonth: "3月（15.2）", yoy: "+8.6%" },
  { fy: "2023年度", avg: 12.8, maxMonth: "1月（19.4）", minMonth: "5月（8.7）", yoy: "▲36.3%" },
  { fy: "2024年度", avg: 13.6, maxMonth: "2月（20.1）", minMonth: "5月（9.2）", yoy: "+6.3%" },
  { fy: "2025年度", avg: 14.2, maxMonth: "1月（21.5）", minMonth: "6月（9.8）", yoy: "+4.4%" },
];

// スパイク事例
const spikeRows = [
  {
    event: "2021年1月スパイク",
    cause: "寒波による需要急増・LNG在庫ひっ迫・予備率低下が同時多発",
    period: "2021年1月上旬〜中旬（約2週間）",
    peak: "最大250円超/kWh（スポット市場上限価格に到達）",
    impact: "市場連動プランの法人は月次請求が数倍に膨らんだ。固定プランでも市場価格調整額が急騰した事業者が続出。",
  },
  {
    event: "2022年夏（電力ひっ迫警報）",
    cause: "ロシア・ウクライナ情勢によるLNG価格高騰＋猛暑による需要増",
    period: "2022年6月〜9月（4か月継続）",
    peak: "月平均25〜28円/kWh水準が長期継続",
    impact: "市場連動プランの法人は夏季の電力コストが前年比1.5〜2倍。政府の節電要請と電力需給ひっ迫警報が発令。",
  },
  {
    event: "2023年冬（寒波×燃料高）",
    cause: "年明け寒波と依然高止まりしているLNG・石炭価格の複合影響",
    period: "2023年1月（2週間程度）",
    peak: "月内最高値19〜22円/kWh前後",
    impact: "前年ほどのスパイクには至らなかったが、高水準での推移が続いた。市場連動プラン法人の冬季コスト増が継続。",
  },
];

// 月額影響シミュレーション（月5万kWh×市場連動反映率50%）
const simulationRows = [
  { jepx: "8円/kWh", base: "12.0円", total: "16.0円", monthly: "80.0万円", delta: "—（基準）" },
  { jepx: "12円/kWh", base: "12.0円", total: "18.0円", monthly: "90.0万円", delta: "+10.0万円" },
  { jepx: "20円/kWh", base: "12.0円", total: "22.0円", monthly: "110.0万円", delta: "+30.0万円" },
  { jepx: "50円/kWh", base: "12.0円", total: "37.0円", monthly: "185.0万円", delta: "+105.0万円" },
];

export default function JepxPriceTrendAndCorporateImpactPage() {
  return (
    <>
      <ArticleJsonLd
        headline="JEPX卸電力市場価格の推移と法人電気料金への波及｜2016〜2025年の動きを解説"
        description="JEPXシステムプライスの2016〜2025年度推移を法人向けに解説。スパイク事例、法人料金への波及経路、市場連動プランへの影響、固定プランとの比較を整理。"
        url="https://simulator.eic-jp.org/jepx-price-trend-and-corporate-impact"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "JEPX卸電力市場価格の推移と法人電気料金への波及" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav aria-label="パンくず" className="mb-4 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link
              href="/"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              ホーム
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li>
            <Link
              href="/articles/price-trends"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金の推移と高止まり
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-700">JEPX推移と法人料金への波及</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          JEPX卸電力市場価格の推移と法人電気料金への波及
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPX（日本卸電力取引所）のシステムプライスは、市場連動プランを契約している法人の電気代に直接影響するだけでなく、固定プランの価格改定や新電力の撤退リスクにも連鎖します。
          2016年度から2025年度までの推移を年度単位で整理し、大きなスパイクが起きた背景と法人コストへの波及経路を解説します。
        </p>
      </header>

      <div className="mt-8 space-y-8">

        {/* 1. JEPX年度平均推移テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            JEPX年度平均推移（2016〜2025年度）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下表はJEPXスポット市場（システムプライス）の年度単純平均・最高月・最低月・前年比をまとめたものです。
            2020年度1月の異常スパイク（248円/kWh超）は年度平均を大きく押し上げており、市場の不安定性を端的に示しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">年度平均<br/><span className="font-normal text-xs text-slate-500">円/kWh</span></th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">最高月（月平均）</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">最低月（月平均）</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">前年比</th>
                </tr>
              </thead>
              <tbody>
                {jepxYearlyRows.map((row, i) => {
                  const isSpike = row.fy === "2020年度" || row.fy === "2021年度" || row.fy === "2022年度";
                  return (
                    <tr
                      key={row.fy}
                      className={`border-b border-slate-100 ${isSpike ? "bg-red-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    >
                      <td className={`px-3 py-2 font-medium ${isSpike ? "text-red-800" : "text-slate-800"}`}>{row.fy}</td>
                      <td className={`px-3 py-2 text-right font-semibold ${isSpike ? "text-red-700" : "text-slate-700"}`}>{row.avg}</td>
                      <td className="px-3 py-2 text-slate-600">{row.maxMonth}</td>
                      <td className="px-3 py-2 text-slate-600">{row.minMonth}</td>
                      <td className={`px-3 py-2 text-right ${row.yoy.startsWith("+") ? "text-orange-700" : row.yoy.startsWith("▲") ? "text-emerald-700" : "text-slate-500"}`}>
                        {row.yoy}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※JEPXスポット市場のシステムプライス年度単純平均をもとに整理した参考値。2020年度は1月のスパイクにより特異値となっています。
          </p>
        </section>

        {/* 2. スパイク事例テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            主要スパイク事例（2021年1月・2022年夏・2023年冬）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            過去に発生した主なJEPXスパイク事例について、原因・期間・ピーク価格・法人への影響を整理します。
            スパイクは単発ではなく、燃料調達・需給バランス・気象条件が重なる「複合事象」として発生するケースが多い点が特徴です。
          </p>
          <div className="mt-4 space-y-4">
            {spikeRows.map((row, i) => (
              <div
                key={i}
                className="rounded-xl border border-red-200 bg-red-50 p-4"
              >
                <p className="text-sm font-bold text-red-900">{row.event}</p>
                <div className="mt-2 grid gap-2 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-600">原因</p>
                    <p className="mt-1 text-sm text-slate-700">{row.cause}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-600">期間</p>
                    <p className="mt-1 text-sm text-slate-700">{row.period}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-600">ピーク価格</p>
                    <p className="mt-1 text-sm font-semibold text-red-700">{row.peak}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-600">法人への影響</p>
                    <p className="mt-1 text-sm text-slate-700">{row.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. JEPX→法人料金の波及経路 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            JEPX価格が法人電気料金に波及する4つの経路
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXの価格上昇は、すべての法人に等しく即座に影響するわけではありません。影響の出方は契約の種類と電力会社の調達構造によって異なります。以下の4つの経路が主な波及ルートです。
          </p>
          <ol className="mt-4 space-y-3">
            {[
              {
                step: "経路①：市場連動プランへの直接反映",
                body: "JEPX価格に連動する料金単価を契約している場合、前月または当月のJEPX平均値がそのまま単価に算入されます。価格が上昇した翌月から請求額が増加し、スパイク時には月次コストが数倍になることもあります。",
              },
              {
                step: "経路②：市場価格調整額（MPA）への反映",
                body: "固定プランであっても「市場価格調整額」が設定されている場合、JEPXが基準価格を超えた分を追加徴収されます。契約書・供給約款の「市場価格調整」条項を確認しておくことが重要です。",
              },
              {
                step: "経路③：新電力の価格改定・撤退",
                body: "新電力はJEPXから電力を調達しているケースが多く、市場価格の高騰が続くと採算悪化から大幅値上げや撤退に至ります。2021〜2022年に実際に多数の新電力が事業停止・撤退し、法人が最終保障供給に移行する事例が続出しました。",
              },
              {
                step: "経路④：大手電力の規制料金改定",
                body: "大手電力会社の規制料金（旧一般向け料金）は、長期的にJEPXを含む総電源コストを参照して改定されます。2023年の大手各社の料金値上げには、JEPX高騰期の原価上昇が反映されていました。",
              },
            ].map((item, i) => (
              <li key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-sky-900">{item.step}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. 月額影響シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            市場連動プランへの月額影響シミュレーション
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間使用量5万kWh、市場連動反映率50%、基本単価12円/kWhの条件で、JEPXが各水準にあった場合の月額請求を試算します。
            8円/kWhを基準とし、価格上昇に伴うコスト増加を確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">JEPX水準</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">基本単価<br/><span className="font-normal text-xs text-slate-500">円/kWh</span></th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">合計単価<br/><span className="font-normal text-xs text-slate-500">円/kWh</span></th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">月額（5万kWh）</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">基準比コスト増</th>
                </tr>
              </thead>
              <tbody>
                {simulationRows.map((row, i) => {
                  const isHigh = i >= 2;
                  return (
                    <tr
                      key={i}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    >
                      <td className={`px-3 py-2 text-right font-semibold ${isHigh ? "text-red-700" : "text-slate-700"}`}>
                        {row.jepx}
                      </td>
                      <td className="px-3 py-2 text-right text-slate-600">{row.base}</td>
                      <td className={`px-3 py-2 text-right font-medium ${isHigh ? "text-red-700" : "text-slate-700"}`}>{row.total}</td>
                      <td className={`px-3 py-2 text-right font-semibold ${isHigh ? "text-red-800" : "text-slate-800"}`}>{row.monthly}</td>
                      <td className={`px-3 py-2 text-right ${i === 0 ? "text-slate-400" : "text-orange-700 font-medium"}`}>{row.delta}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※試算値。市場連動反映率50%（JEPX価格の50%が従量単価に上乗せ）、月間使用量5万kWhの前提。実際の反映率・計算方式は契約によって異なります。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-900">固定プランとの比較での考え方</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              固定プランは単価が安定しますが、通常JEPX低水準時よりも若干割高な単価設定になっています。
              JEPX 8〜12円/kWhの安定期には市場連動プランが有利になりやすく、20円超の高騰期には固定プランが大幅に有利になります。
              自社の電力使用量とリスク許容度に照らして、どちらの変動を許容できるかを基準に選択することが重要です。
            </p>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページのまとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>・JEPXは2020〜2022年度にかけて急騰し、2023年度以降もコロナ前より高い水準で推移している</li>
            <li>・2021年1月スパイクは最大250円超/kWhを記録し、市場連動プランの法人に甚大な影響を与えた</li>
            <li>・JEPX高騰は市場連動プラン・市場価格調整額・新電力撤退・規制料金改定の4経路で法人に波及する</li>
            <li>・月5万kWhの法人でもJEPXが8円→20円に上昇するだけで月額コストが30万円増加しうる</li>
            <li>・固定プランと市場連動プランの選択はリスク許容度と使用規模に応じて判断する必要がある</li>
          </ul>
        </section>
      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="jepx-price-trend-and-corporate-impact" terms={["JEPX", "市場価格調整額", "市場連動プラン", "燃料費調整額", "再エネ賦課金"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/market-price-adjustment-history",
              title: "市場価格調整額の推移と仕組み",
              description: "市場価格調整額がどのように決まり、どう推移してきたかを解説。",
            },
            {
              href: "/market-price-adjustment-risk",
              title: "市場価格調整のリスクをどう見るか",
              description: "市場価格調整額が法人コストに与えるリスクの見方・対処法。",
            },
            {
              href: "/why-market-linked-electricity-prices-rise",
              title: "市場連動プランはなぜ価格が上がるのか",
              description: "市場連動型電気料金の価格上昇メカニズムを構造から解説。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "市場連動プランと固定プランのどちらが自社に合うかを確認できます。",
            },
            {
              href: "/articles/price-trends",
              title: "電気料金の推移と高止まり",
              description: "推移・高止まりに関する解説記事の一覧。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="市場価格変動のリスクを自社で試算する"
          description="JEPX高騰が続いた場合に自社の電気代がどう変わるか、シミュレーターで把握しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-trends", label: "推移と高止まりの解説を読む" },
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

      <AuthorBadge publishedAt="2026-04-17" updatedAt="2026-04-24" />
    </main>
    </>
  );
}
