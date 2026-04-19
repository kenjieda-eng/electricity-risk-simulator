import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["risk-scenarios"];


const pageTitle =
  "円安で電気料金・電気代はどう上がるか｜為替水準別の影響試算と過去の事例";
const pageDescription =
  "円安が法人・企業・自治体の電気料金・電気代に与える影響を為替水準別に試算。110円〜170円の燃調費への影響と月5万kWhの月額コスト変化、過去3局面の事例を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "円安 電気料金 法人",
    "為替リスク 電気代",
    "輸入燃料コスト",
    "燃料費調整額 見積",
    "市場連動 固定 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-cost-risk-yen-depreciation",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-cost-risk-yen-depreciation",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "円安リスクの解説",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const exchangeRateImpact = [
  {
    rate: "110円（2019年水準）",
    lngImpact: "基準",
    fuelAdjImpact: "±0円/kWh",
    monthlyImpact: "±0",
    isBase: true,
  },
  {
    rate: "130円",
    lngImpact: "+18%",
    fuelAdjImpact: "+0.5〜1.0円/kWh",
    monthlyImpact: "+2.5〜5万円",
  },
  {
    rate: "150円（2024年水準）",
    lngImpact: "+36%",
    fuelAdjImpact: "+1.0〜2.0円/kWh",
    monthlyImpact: "+5〜10万円",
  },
  {
    rate: "160円",
    lngImpact: "+45%",
    fuelAdjImpact: "+1.5〜2.5円/kWh",
    monthlyImpact: "+7.5〜12.5万円",
  },
  {
    rate: "170円（危機水準）",
    lngImpact: "+55%",
    fuelAdjImpact: "+2.0〜3.5円/kWh",
    monthlyImpact: "+10〜17.5万円",
    isCrisis: true,
  },
];

const historicalEvents = [
  {
    period: "2012-2013年",
    rate: "80→105円",
    background: "アベノミクス",
    impact: "燃調費+1〜2円/kWh",
  },
  {
    period: "2022年",
    rate: "115→150円",
    background: "日米金利差拡大",
    impact: "燃調費+3〜5円/kWh（LNG高と重複）",
  },
  {
    period: "2024年",
    rate: "140→160円",
    background: "金利差継続",
    impact: "燃調費の高止まり要因",
  },
];

const checklist = [
  "直近3ヶ月の請求書で燃料費調整額の推移を確認し、為替との連動を把握する",
  "現在の契約が固定か市場連動かを確認し、為替変動がどの項目に反映されるか整理する",
  "見積取得時に「為替前提条件」を必ず確認し、前提が変わった場合の再見積条件を明確にする",
  "年間予算に「円安+10円シナリオ（+1〜2円/kWh）」の安全幅を加えておく",
  "契約更新の6ヶ月前に複数社へ見積依頼し、为替リスク込みの総額で比較する",
];

export default function ElectricityCostRiskYenDepreciationPage() {
  return (
    <>
      <ArticleJsonLd
        headline="円安で電気料金・電気代はどう上がるか｜為替水準別の影響試算と過去の事例"
        description="円安が法人・企業・自治体の電気料金・電気代に与える影響を為替水準別に試算。110円〜170円の燃調費への影響と月5万kWhの月額コスト変化、過去3局面の事例を整理します。"
        url="https://simulator.eic-jp.org/electricity-cost-risk-yen-depreciation"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "円安で電気料金・電気代はどう上がるか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">円安リスク</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          円安で電気料金・電気代はどう上がるか｜為替水準別の影響試算と過去の事例
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金は国内要因だけで決まるわけではありません。燃料を海外から輸入する日本では、為替の変動が発電コストに波及しやすく、
          法人・企業・自治体の電気代にも影響します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、円安がどのような経路で請求額に反映されるのかを、為替水準別の影響試算と過去事例を交えて整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">円安リスクとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            円安リスクは、通年で影響し得る上振れ要因です。円安になると、海外から購入するLNG、石炭、原油などの燃料を円換算したコストが上がります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この変化は発電コストに波及し、結果として法人・企業・自治体の電気料金・電気代に反映されやすくなります。
          </p>
        </section>

        {/* Table 1: 為替水準と燃調費への影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">為替水準と燃調費への影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年水準（110円）を基準に、円安が進行した場合の燃料費調整額への影響と月5万kWhの月額コスト変化を試算します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">為替水準（円/ドル）</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">LNG調達コスト影響</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">燃調費への影響（目安）</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">月5万kWhの月額影響</th>
                </tr>
              </thead>
              <tbody>
                {exchangeRateImpact.map((row) => (
                  <tr
                    key={row.rate}
                    className={`border-b border-slate-100 ${row.isCrisis ? "bg-red-50 font-semibold" : row.isBase ? "bg-slate-50" : "hover:bg-slate-50"}`}
                  >
                    <td className="px-4 py-3 text-slate-800">{row.rate}</td>
                    <td className="px-4 py-3 text-slate-700">{row.lngImpact}</td>
                    <td className={`px-4 py-3 ${row.isCrisis ? "text-red-700 font-bold" : "text-slate-700"}`}>{row.fuelAdjImpact}</td>
                    <td className={`px-4 py-3 ${row.isCrisis ? "text-red-700 font-bold" : "text-slate-700"}`}>{row.monthlyImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 影響幅は試算値。実際の燃調費は電力会社の計算方式・時期・LNG価格水準により異なります。基本料金・消費税は含みません。
          </p>
        </section>

        {/* Table 2: 過去の円安局面と電気料金への影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">過去の円安局面と電気料金への影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            過去の主要な円安局面において、電気料金（特に燃料費調整額）にどのような影響が生じたかを整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">時期</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">為替水準</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">背景</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">電気料金への影響</th>
                </tr>
              </thead>
              <tbody>
                {historicalEvents.map((row) => (
                  <tr key={row.period} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.period}</td>
                    <td className="px-4 py-3 text-slate-700">{row.rate}</td>
                    <td className="px-4 py-3 text-slate-700">{row.background}</td>
                    <td className="px-4 py-3 text-slate-700">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 影響幅はLNG価格・需給状況との複合要因。円安単独の影響ではない場合を含みます。
          </p>
        </section>

        {/* Checklist */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">円安リスクへの対応チェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            円安局面では以下5点を確認・対応しておくことで、電気料金上振れへの備えを整えられます。
          </p>
          <ul className="mt-4 space-y-3">
            {checklist.map((item, index) => (
              <li key={index} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-slate-400 text-xs font-bold text-slate-500">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ円安で電気料金・電気代が上がるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            輸入燃料コストが上がると、発電コストも上昇しやすくなります。電力契約では、この影響が
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額
            </Link>
            や見積単価に反映されることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            背景の理解には{" "}
            <Link href="/lng-electricity-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              LNGと電気料金の関係
            </Link>
            も有効です。為替と燃料価格が重なる局面では、上振れ幅が大きくなる可能性があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランの両方に影響する理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            は短期の価格変動が見えやすい一方、<Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            でも契約更新や調整項目で影響を受けることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「固定だから為替は関係ない」とは言い切れません。契約タイプの違いは{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ページ
            </Link>
            で確認しつつ、為替影響を前提に判断することが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・企業・自治体が確認したい請求書・見積書のポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>と従量料金の構成</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>の扱い</li>
            <li><Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額</Link>などの調整項目</li>
            <li>契約期間と更新条件</li>
            <li>見積単価の前提条件</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            これらを分けて確認すると、円安局面でどこに影響が出やすいかを把握しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">円安リスクをシミュレーターでどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            円安は通年影響として表れる要因です。単月の増減だけでなく、年間でどの程度の差になるかを確認し、
            他リスク要因と重ねた場合の変化も確認することが有効です。最終的には{" "}
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            で位置づけを確認すると、予算管理に使いやすくなります。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="electricity-cost-risk-yen-depreciation" terms={["燃料費調整額", "市場価格調整額", "JEPX", "再エネ賦課金", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="為替と燃料要因の理解を、契約比較や見直し実務へつなげるための導線です。"
          links={[
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "輸入燃料と電気料金のつながりを整理できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "請求額に反映される調整項目の基礎を確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "価格変動の反映が早い契約の特徴を把握できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "料金安定を重視する契約の考え方を確認できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "見積比較で確認したい実務項目を整理できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人の電気料金推移（2019〜2025年）",
              description: "円安・LNG高騰の影響が実際の料金推移でどう現れたかを確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="為替影響を含めて比較・試算する"
          description="円安リスクの構造を理解した後は、比較ページとシミュレーションで自社条件に近い試算を行うと、見直し判断が具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
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
