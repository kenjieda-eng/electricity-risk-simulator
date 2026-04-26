import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import {
  FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE,
  FUEL_IMPORT_PRICE_YEARLY,
} from "../../data/priceAdjustmentHistory";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "燃料費調整額（燃調費）とは｜計算式と2018〜2026年度の推移を解説";
const pageDescription =
  "燃料費調整額（燃調費）とは、LNG・原油・石炭の輸入価格を電気料金に反映する仕組み。計算式、2018〜2026年度の推移、2022年の急騰、激変緩和措置の影響、市場価格調整額との違いまで、法人向けに実データで解説します。";
const publishedDate = "2026-03-01";
const pageUrl = "https://simulator.eic-jp.org/fuel-cost-adjustment";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "燃料費調整額",
    "燃料費調整額 とは",
    "燃調費",
    "燃調費 とは",
    "燃調費 2026",
    "燃料費調整額 推移",
    "燃料費調整額 計算",
    "燃料費調整額 LNG",
    "電気料金 燃調費",
    "激変緩和措置 電気料金",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/price-increase", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-increase"],
  },
};

export default function FuelCostAdjustmentPage() {
  const labels = FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE.map((r) => `${r.fiscalYear}年度`);
  const values = FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE.map((r) => r.yenPerKwh);
  const lngLabels = FUEL_IMPORT_PRICE_YEARLY.map((r) => `${r.fiscalYear}年度`);
  const lngValues = FUEL_IMPORT_PRICE_YEARLY.map((r) => r.lngYenPerTon / 1000);

  return (
    <>
      <ArticleJsonLd
        headline="燃料費調整額（燃調費）とは｜計算式と2018〜2026年度の推移を解説"
        description="燃料費調整額（燃調費）とは、LNG・原油・石炭の輸入価格を電気料金に反映する仕組み。計算式、2018〜2026年度の推移、2022年の急騰、激変緩和措置の影響、市場価格調整額との違いまで、法人向けに実データで解説します。"
        url="https://simulator.eic-jp.org/fuel-cost-adjustment"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "燃料費調整額（燃調費）とは" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">燃料費調整額（燃調費）とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <strong className="font-semibold text-slate-900">燃料費調整額（燃調費）</strong>とは、LNG・原油・石炭の輸入価格の変動を電気料金に反映する仕組みです。本記事では計算式、2018〜2026年度の推移、2022年の急騰、激変緩和措置の影響まで、法人向けに実データで整理します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、燃料費調整額（燃調費）の計算式、貿易統計 CIF 価格との関係、2018〜2026 年度の推移、2022 年ウクライナ危機時の急騰、激変緩和措置（電気料金値引き補助金）の影響を実データで解説し、後半で <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額（市場連動プラン）との違い</Link> を比較表で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額の仕組み</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電気料金は、発電コストの中でも大きな割合を占める燃料費が変動した場合に、
            一定のルールで料金に反映する「燃料費調整制度」が設けられています（電気事業法に基づく算定規則）。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            具体的には、貿易統計上の LNG・原油・石炭の平均 CIF 価格を 3 ヶ月分平均し、
            基準燃料価格との差に応じて kWh あたりの単価を毎月改定します。
            改定は 3 ヶ月前の貿易統計を参照するため、実際の燃料市況とは 3〜5 ヶ月程度のタイムラグがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額の計算式</h2>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-900">
            <p className="font-semibold">
              燃料費調整単価 =（平均燃料価格 − 基準燃料価格）× 基準単価 ÷ 1,000
            </p>
            <p className="mt-2 text-xs text-slate-700">
              平均燃料価格 = 原油 CIF × α + LNG CIF × β + 石炭 CIF × γ（換算係数は会社・契約区分ごとに定める）
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            平均燃料価格が基準値を上回ると燃調はプラス（上乗せ）、下回るとマイナス（値引き）になります。
            2020 年度のようにコロナ禍で世界的に燃料需要が落ち込んだ時期はマイナスの月が続きました。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2018〜2026年度の推移（東京電力EP 高圧）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は東京電力エナジーパートナーの高圧料金メニューにおける、年度平均の燃調単価の概算推移です。
            2022 年度にウクライナ危機起点の LNG 急騰で過去最高水準まで上昇し、
            2023 年度は政府の激変緩和措置（電気料金値引き）で見かけ上は低く抑えられています。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "燃調単価 年度平均（円/kWh）※補助反映後",
                  values,
                  color: "#dc2626",
                  fillColor: "rgba(220,38,38,0.14)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 実績は月次で大きく変動します。激変緩和措置（2023年1月〜）の値引きを反映した概算です。
            正確な月次値は東京電力エナジーパートナーの公表資料をご確認ください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年度別の燃調と解説</h2>
          <table className="mt-4 w-full min-w-[680px] border-collapse text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="border border-slate-200 px-3 py-2 text-left">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-right">燃調（概算）</th>
                <th className="border border-slate-200 px-3 py-2 text-right">補助反映分</th>
                <th className="border border-slate-200 px-3 py-2 text-left">背景</th>
              </tr>
            </thead>
            <tbody>
              {FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE.map((r) => (
                <tr key={r.fiscalYear} className="border-t border-slate-100">
                  <td className="border border-slate-200 px-3 py-2">{r.fiscalYear}年度</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                    {r.yenPerKwh > 0 ? "+" : ""}{r.yenPerKwh.toFixed(2)} 円/kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-500">
                    {r.subsidyAppliedYen ? `▲${r.subsidyAppliedYen.toFixed(2)}` : "—"}
                  </td>
                  <td className="border border-slate-200 px-3 py-2">{r.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LNG輸入価格との連動</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃調費の最大の変動要因は LNG 輸入価格です。日本の火力発電はガス火力が中心のため、
            LNG の CIF 価格が動けば、その 3〜5 ヶ月後に燃調単価が動きます。
          </p>
          
      <MarketDataDownload
        apiPath="/api/datasets/price-adjustment"
        caption="燃料費調整・再エネ賦課金履歴（CC BY 4.0、商用利用可）"
      />
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={lngLabels}
              series={[
                {
                  label: "LNG CIF価格（千円/トン）",
                  values: lngValues,
                  color: "#0891b2",
                  fillColor: "rgba(8,145,178,0.12)",
                },
              ]}
              unit="千円/トン"
              yTitle="千円/トン"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 財務省貿易統計（年度平均の概算）。2022年度は 128,000 円/トンまで急騰しました。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃調単価は電力会社ごとに異なる（同じ月でも数円単位で差が出る場合あり）</li>
            <li>規制料金には燃調の上限があり、自由料金（法人向け高圧・特別高圧）には上限がない会社が多い</li>
            <li>市場連動メニューでは燃調ではなく「市場価格調整額」で反映される仕組みが一般的</li>
            <li>激変緩和措置による値引きは一時的なもので、終了すると請求額が急増する可能性がある</li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">もっと深く知りたい方へ</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                燃料費調整額の推移詳細｜ウクライナ危機と激変緩和措置
              </Link>
            </li>
            <li>
              <Link href="/fuel-cost-adjustment-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                燃料費調整額の計算式の詳細｜基準燃料価格と換算係数
              </Link>
            </li>
            <li>
              <Link href="/fuel-cost-adjustment-upper-limit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                燃料費調整額の上限制度｜規制料金と自由料金の違い
              </Link>
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/fuel-vs-market-adjustment-comparison", title: "燃料費調整額と市場価格調整額の違いを完全比較", description: "10 項目比較表と金額規模シミュレーションで、どちらのリスクが大きいかを整理します。" },
            { href: "/lng-electricity-price", title: "法人の電気料金とLNGの関係", description: "LNG市況が料金に波及する流れを整理。" },
            { href: "/market-price-adjustment", title: "市場価格調整額とは", description: "燃調と混同しやすい別の調整項目。" },
            { href: "/market-linked-plan", title: "市場連動プランとは", description: "燃調ではなくJEPX連動で請求される契約。" },
            { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "燃調と並ぶ請求書の変動要因。" },
            { href: "/electricity-price-trend-2019-2025", title: "法人向け電気料金は高止まりしているのか", description: "燃調費を含む料金水準の推移実態をデータで確認できます。" },
            { href: "/concierge", title: "AI コンシェルジュで関連情報を探す", description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。" },
          ]}
        />

        <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

        <ContentCta
          heading="実際に比較して判断する"
          description="解説を押さえたうえで、現在契約と候補プランを同条件で比較すると、見直しの方向性を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="fuel-cost-adjustment" />
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
