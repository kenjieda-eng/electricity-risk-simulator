import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "燃料費調整額の計算式の詳細｜基準燃料価格・換算係数・3ヶ月平均の仕組み";
const pageDescription =
  "燃料費調整額の計算式を基準燃料価格、換算係数、貿易統計3ヶ月平均の考え方から詳しく解説。電力会社ごとに異なる基準値、タイムラグ、契約区分別の違いを整理します。";
const pageUrl = "https://simulator.eic-jp.org/fuel-cost-adjustment-calculation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "燃料費調整額 計算",
    "燃料費調整額 計算式",
    "基準燃料価格",
    "換算係数 燃調",
    "燃調 3ヶ月平均",
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

export default function FuelCostAdjustmentCalculationPage() {
  return (
    <>
      <ArticleJsonLd
        headline="燃料費調整額の計算式の詳細｜基準燃料価格・換算係数・3ヶ月平均の仕組み"
        description="燃料費調整額の計算式を基準燃料価格、換算係数、貿易統計3ヶ月平均の考え方から詳しく解説。電力会社ごとに異なる基準値、タイムラグ、契約区分別の違いを整理します。"
        url="https://simulator.eic-jp.org/fuel-cost-adjustment-calculation"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "燃料費調整額の計算式の詳細" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">燃料費調整額の計算式の詳細</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">燃料費調整額の計算式の詳細</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          燃調費は「貿易統計の 3 ヶ月平均 CIF 価格」と「基準燃料価格」の差額から、一定の係数で kWh あたり単価に換算する仕組みです。
          このページでは、各計算要素の意味と、電力会社・契約区分で結果が変わる理由を詳しく解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">計算式の全体像</h2>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-900">
            <p className="font-semibold">燃料費調整単価 = （平均燃料価格 − 基準燃料価格）× 基準単価 ÷ 1,000</p>
            <p className="mt-3 text-xs text-slate-700">平均燃料価格 = 原油 CIF × α + LNG CIF × β + 石炭 CIF × γ</p>
            <p className="mt-1 text-xs text-slate-700">α + β + γ = 1（換算係数は会社・契約区分ごとに定める）</p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">① 平均燃料価格（3燃料の加重平均）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            平均燃料価格は、原油・LNG・石炭の貿易統計 CIF 価格（輸入価格）の加重平均です。
            加重の比率（換算係数 α, β, γ）は、各電力会社の火力発電の燃料構成を反映して決められています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">電力会社（例）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">原油比率 α</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">LNG比率 β</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">石炭比率 γ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="border border-slate-200 px-3 py-2">東京電力EP（関東）</td><td className="border border-slate-200 px-3 py-2 text-right">約 0.05</td><td className="border border-slate-200 px-3 py-2 text-right">約 0.65</td><td className="border border-slate-200 px-3 py-2 text-right">約 0.30</td></tr>
                <tr className="border-t border-slate-100"><td className="border border-slate-200 px-3 py-2">関西電力（近畿）</td><td className="border border-slate-200 px-3 py-2 text-right">約 0.10</td><td className="border border-slate-200 px-3 py-2 text-right">約 0.45</td><td className="border border-slate-200 px-3 py-2 text-right">約 0.45</td></tr>
                <tr className="border-t border-slate-100"><td className="border border-slate-200 px-3 py-2">九州電力（九州）</td><td className="border border-slate-200 px-3 py-2 text-right">約 0.15</td><td className="border border-slate-200 px-3 py-2 text-right">約 0.40</td><td className="border border-slate-200 px-3 py-2 text-right">約 0.45</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 比率は概算イメージ。正確な値は各社の約款・公表資料を確認してください。LNG 比率が高い会社ほど、LNG 価格急騰時の影響が大きくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">② 基準燃料価格</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基準燃料価格は、燃調制度が設定された時点（または料金改定時）の燃料価格水準を指します。
            平均燃料価格がこれを上回るとプラス、下回るとマイナスになります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023 年の規制料金改定では、多くの電力会社が基準燃料価格を引き上げました。
            これにより、同じ燃料価格でも燃調単価は低く算出される（実質的な本体値上げ）形になっています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">③ 3ヶ月平均とタイムラグ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃調は「直近3ヶ月の貿易統計 CIF 平均」を参照し、その月の燃調単価として反映します。
            例えば「8月検針分」の燃調は「2〜4月の貿易統計 CIF 平均」を参照します。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">タイムラグの例</p>
            <table className="mt-3 w-full text-sm text-slate-700">
              <thead className="bg-white text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-2 py-1 text-left">参照期間</th>
                  <th className="border border-slate-200 px-2 py-1 text-left">反映検針月</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-2 py-1">2月・3月・4月</td><td className="border border-slate-200 px-2 py-1">8月検針分</td></tr>
                <tr><td className="border border-slate-200 px-2 py-1">5月・6月・7月</td><td className="border border-slate-200 px-2 py-1">11月検針分</td></tr>
                <tr><td className="border border-slate-200 px-2 py-1">8月・9月・10月</td><td className="border border-slate-200 px-2 py-1">2月検針分</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            このラグにより、燃料価格が下がってもしばらく燃調は高止まりし、燃料価格が上がっても実際の請求反映は数ヶ月後になります。
            予算管理では、この 3〜5 ヶ月の先行指標として貿易統計を確認するのが実務的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">④ 契約区分別の違い</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><strong>低圧（家庭・業務用）</strong>：換算係数は高圧・特別高圧と異なり、燃調の変動幅は比較的小さい。</li>
            <li><strong>高圧</strong>：kWh あたりの影響額が最も大きい区分。月次の変動が経営への影響として見えやすい。</li>
            <li><strong>特別高圧</strong>：基本単価が低いぶん、同じ燃調変動でも請求額全体に対する比率は大きくなる。</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">計算例：月10万kWhの高圧需要家</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            平均燃料価格が基準より 15,000 円/kl 上昇した場合、基準単価 0.2 を仮定すると燃調単価は：
          </p>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-900">
            <p>15,000 × 0.2 ÷ 1,000 = 3.0 円/kWh</p>
            <p className="mt-2">月10万 kWh × 3.0 円/kWh = 30 万円/月 の影響</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年額では 360 万円の差になります。使用量規模が大きい事業者ほど、燃調の変動が経営に与える影響が大きくなります。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="fuel-cost-adjustment-calculation" terms={["燃料費調整額", "電力量料金", "基本料金", "再エネ賦課金", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/fuel-cost-adjustment", title: "燃料費調整額（燃調費）とは", description: "制度の基本まとめ。" },
            { href: "/fuel-cost-adjustment-history", title: "燃料費調整額の推移詳細", description: "2018〜2026年度の変動を分析。" },
            { href: "/fuel-cost-adjustment-upper-limit", title: "燃料費調整額の上限制度", description: "規制料金と自由料金の違い。" },
            { href: "/lng-electricity-price", title: "LNGと電気料金の関係", description: "燃料市況の背景を確認。" },
            { href: "/electricity-price-trend-2019-2025", title: "法人向け電気料金は高止まりしているのか", description: "燃調費推移を含む長期の料金水準をデータで確認できます。" },
          ]}
        />

        <ContentCta
          heading="自社への影響額を試算"
          description="現在の使用量をベースに、燃調上振れシナリオでの月額・年額影響を確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="fuel-cost-adjustment-calculation" />
      </div>
    </main>
    </>
  );
}
