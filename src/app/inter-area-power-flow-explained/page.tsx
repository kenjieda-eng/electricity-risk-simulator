import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import InterAreaFlowChart from "../../components/area-supply/InterAreaFlowChart";
import { FLOW_DATA, PUMPED_DATA } from "../../data/areaSupplyData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["power-procurement"];


const pageTitle = "エリア間電力融通の実態｜東京は常時4,456MW輸入している";
const pageDescription =
  "東京は常時+4,456MWを他エリアから輸入し、東北は-4,041MWを常時輸出。9エリアの連系線潮流・揚水発電・蓄電池の30分値データから、エリア間の電力融通の実態と法人電気料金への影響を解説します。";
const pageUrl = "https://simulator.eic-jp.org/inter-area-power-flow-explained";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "エリア間 電力融通",
    "連系線 電力",
    "揚水発電 活用",
    "電力 輸入 輸出",
    "蓄電池 系統用",
    "地域間連系線 混雑",
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

const batteryData = [
  { area: "北海道", avg: -4, max: 117, min: -93, active: "98.8%" },
  { area: "東北", avg: -2, max: 52, min: -74, active: "93.1%" },
  { area: "東京", avg: 3, max: 45, min: -1, active: "42.2%" },
  { area: "中部", avg: 1, max: 34, min: 0, active: "27.9%" },
  { area: "関西", avg: 2, max: 66, min: -53, active: "40.5%" },
  { area: "九州", avg: -1, max: 50, min: -50, active: "62.9%" },
];

export default function InterAreaPowerFlowExplainedPage() {
  return (
    <>
      <ArticleJsonLd
        headline="エリア間電力融通の実態｜東京は常時4,456MW輸入している"
        description="東京は常時+4,456MWを他エリアから輸入し、東北は-4,041MWを常時輸出。9エリアの連系線潮流・揚水発電・蓄電池の30分値データから、エリア間の電力融通の実態と法人電気料金への影響を解説します。"
        url="https://simulator.eic-jp.org/inter-area-power-flow-explained"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "エリア間電力融通の実態" },
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
        <span className="text-slate-800">エリア間電力融通の実態</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">POWER SUPPLY ／ 電力調達の仕組みを知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          エリア間電力融通の実態
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">東京は常時4,456MW輸入している</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本の電力系統は9つのエリアが「連系線」で結ばれており、エリア間で電力を融通しあっています。
          東京エリアは常時平均4,456MWを他エリアから輸入し、東北エリアは常時4,041MWを輸出しています。
          この融通のバランスが崩れると、エリア間でJEPX市場価格の乖離が広がり、
          法人の電気料金に直接影響します。30分値データから連系線潮流・揚水発電・蓄電池の実態を解説します。
        </p>
      </header>

      {/* 連系線とは */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">連系線（地域間連系線）とは</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          連系線は、隣接する電力エリア間を結ぶ高圧送電線です。電力が余っているエリアから不足しているエリアへ
          電力を送ることで、全国の需給バランスを調整する役割を果たします。ただし送電容量には物理的な上限があり、
          この上限に達すると「混雑」が発生し、エリア間の市場価格が乖離します。
        </p>
      </section>

      {/* 融通チャート */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア別 平均電力融通（連系線潮流）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          正の値（赤）は輸入（他エリアから受電）、負の値（青）は輸出（他エリアへ送電）を示します。
        </p>
        <div className="mt-4">
          <InterAreaFlowChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: 各一般送配電事業者公表の30分値データを集計（2024年2月〜2026年4月）</p>
      </section>

      {/* 融通テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア別 連系線潮流の詳細</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">エリア</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最大（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最小（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">基本的な役割</th>
              </tr>
            </thead>
            <tbody>
              {FLOW_DATA.map((row, i) => (
                <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                  <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${row.avg >= 0 ? "text-red-600" : "text-blue-600"}`}>
                    {row.avg >= 0 ? "+" : ""}{row.avg.toLocaleString()}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.max >= 0 ? "+" : ""}{row.max.toLocaleString()}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.min.toLocaleString()}</td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${row.avg >= 0 ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
                      {row.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 東京−東北の関係 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">東京−東北：日本最大の電力融通ペア</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">東北 → 東京 の構造</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              東北エリアは常時平均4,041MWを輸出しており、その大半が東京エリアに向かいます。
              東北は再エネ（太陽光9.5%＋風力4.5%）と石炭火力（36.0%）で発電した電力を、
              需要最大の東京へ送り続けています。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">連系線混雑のリスク</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              東京の輸入は最小でも+217MW（常に正）であり、東北からの送電が途絶えるケースは事実上ありません。
              ただし冬季の需要ピーク時に連系線が混雑すると、東京のJEPX価格が東北より高くなる
              「エリアプライス乖離」が発生します。
            </p>
          </div>
        </div>
      </section>

      {/* 揚水発電 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">揚水発電の活用状況</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          揚水発電は「電力の蓄電池」として、夜間や昼間の余剰電力で水をくみ上げ（充電）、
          需要ピーク時に放水して発電します。太陽光の普及により、昼間の充電→夕方の放電という
          パターンが増えています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">エリア</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">充電時間率</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最大発電（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最大充電（MW）</th>
              </tr>
            </thead>
            <tbody>
              {PUMPED_DATA.map((row, i) => (
                <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{row.chargingPct}%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.peakGen.toLocaleString()}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-blue-600">{row.peakCharge.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          関西は充電時間率47.7%と最も積極的に揚水を活用しています。原子力のベースロード電源が充電源となり、
          夕方のピーク需要に備える運用です。東京・中部も30%超で、
          <Link href="/duck-curve-electricity-price-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ダックカーブ</Link>対策として揚水が重要な役割を果たしています。
        </p>
      </section>

      {/* 蓄電池 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">系統用蓄電池──まだ黎明期</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          系統用蓄電池（大型蓄電池）は揚水発電を補完する新しい調整力ですが、現時点での貢献は微小です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">エリア</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最大出力（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">稼働率</th>
              </tr>
            </thead>
            <tbody>
              {batteryData.map((row, i) => (
                <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.avg}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.max}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{row.active}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          北海道（98.8%）と東北（93.1%）は高い稼働率ですが最大出力は100MW程度。
          全国の需要（約11,000MW平均）に対して蓄電池の寄与はまだ1%未満です。
          ただし今後の大規模蓄電池プロジェクトの進展により、2030年代には調整力の一角を担う可能性があります。
        </p>
      </section>

      {/* 法人への影響 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人にとっての意味</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">市場連動型プランのエリアプライス</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              連系線が混雑するとエリアプライスがシステムプライスから乖離します。
              東京エリアは需要集中で常に高めのプレミアムがつきやすく、市場連動型プランの企業は
              エリアプライスの動向を意識する必要があります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">供給逼迫時のリスク</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              冬季の寒波や夏季の猛暑で需要が急増した際、連系線の送電容量が上限に達すると
              エリア内の供給力だけで対応する必要があります。この状況ではJEPX価格がスパイクし、
              市場連動型プランの企業は大幅なコスト増に直面します。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">有事シナリオへの備え</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              大規模地震や台風で連系線が損傷するとエリアが孤立し、供給力が大幅に低下するリスクがあります。
              <Link href="/special/emergency-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">有事シナリオ分析</Link>で
              自社のリスクを確認してください。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">将来の連系線増強</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              国は北海道−東北間、東北−東京間の連系線増強を計画しています。実現すれば
              北海道の風力・太陽光を東京へ効率的に送れるようになり、エリアプライスの乖離が縮小する可能性があります。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          エリア間の電力融通は日本の電力システムの安定運用に不可欠ですが、送電容量には限界があります。
          東京の常時輸入体制、東北・九州の輸出構造、関西の揚水活用──これらの実態を理解することで、
          自社エリアの電気料金がなぜそのような水準・変動パターンになるのかが見えてきます。
        </p>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "9エリアの発電ミックスを比較。" },
            { href: "/duck-curve-electricity-price-impact", title: "ダックカーブとは何か", description: "揚水が対策として活用される昼夕の需給ギャップ。" },
            { href: "/solar-curtailment-by-area", title: "太陽光出力制御の実態", description: "連系線で吸収しきれない余剰電力の行方。" },
            { href: "/special/emergency-scenario-analysis", title: "有事シナリオ分析", description: "連系線損傷を含む緊急事態での料金影響。" },
            { href: "/thermal-vs-renewable-trend", title: "火力 vs 再エネ 年度別推移", description: "電源構成の変化が融通パターンに与える影響。" },
            { href: "/market-price-adjustment", title: "市場価格調整額とは", description: "エリアプライスの仕組みと法人負担。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="エリアプライスの変動リスクを診断する"
          description="自社エリアの連系線混雑リスクや市場価格変動が電気料金にどう影響するか、シミュレーターで確認できます。"
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
