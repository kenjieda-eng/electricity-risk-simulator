import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import {
  FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE,
  FUEL_IMPORT_PRICE_YEARLY,
} from "../../data/priceAdjustmentHistory";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "燃料費調整額の推移詳細｜2018〜2026年度の変動とウクライナ危機・激変緩和措置の影響";
const pageDescription =
  "燃料費調整額の年度別推移を、LNG・原油・石炭CIF価格と対比しながら解説。2022年のウクライナ危機による急騰、激変緩和措置による値引き、補助終了後の再上昇までをデータで整理します。";
const pageUrl = "https://simulator.eic-jp.org/fuel-cost-adjustment-history";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "燃料費調整額 推移",
    "燃調費 履歴",
    "ウクライナ危機 電気料金",
    "激変緩和措置 燃調",
    "LNG価格 電気料金",
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

export default function FuelCostAdjustmentHistoryPage() {
  const labels = FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE.map((r) => `${r.fiscalYear}年度`);
  const values = FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE.map((r) => r.yenPerKwh);
  const lngValues = FUEL_IMPORT_PRICE_YEARLY.map((r) => r.lngYenPerTon / 1000);
  const crudeValues = FUEL_IMPORT_PRICE_YEARLY.map((r) => r.crudeYenPerKl / 1000);
  const coalValues = FUEL_IMPORT_PRICE_YEARLY.map((r) => r.coalYenPerTon / 1000);
  const fuelImportLabels = FUEL_IMPORT_PRICE_YEARLY.map((r) => `${r.fiscalYear}年度`);

  return (
    <>
      <ArticleJsonLd
        headline="燃料費調整額の推移詳細｜2018〜2026年度の変動とウクライナ危機・激変緩和措置の影響"
        description="燃料費調整額の年度別推移を、LNG・原油・石炭CIF価格と対比しながら解説。2022年のウクライナ危機による急騰、激変緩和措置による値引き、補助終了後の再上昇までをデータで整理します。"
        url="https://simulator.eic-jp.org/fuel-cost-adjustment-history"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "燃料費調整額の推移詳細" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">燃料費調整額の推移詳細</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">燃料費調整額の推移詳細</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          燃調単価は月次で細かく動きますが、年度平均で見ると 2018 年度から現在までで 2 度の大きな転換点があります。
          ひとつは 2020 年度のコロナ禍でのマイナス圏、もうひとつは 2022 年度のウクライナ危機起点の歴史的な急騰です。
          このページでは、東京電力EP 高圧を例に年度別の変化を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃調単価と燃料CIF価格の連動</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNG・原油・石炭 CIF 価格と燃調単価は強く連動しますが、貿易統計の反映は 3〜5 ヶ月遅れのため、
            燃料価格が下がった後もしばらく燃調の高止まりが続くことがあります。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={fuelImportLabels}
              series={[
                { label: "LNG（千円/トン）", values: lngValues, color: "#0891b2" },
                { label: "原油（千円/kl）", values: crudeValues, color: "#dc2626" },
                { label: "石炭（千円/トン）", values: coalValues, color: "#a16207" },
              ]}
              unit="千円"
              yTitle="千円"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 財務省貿易統計（年度平均の概算）。3燃料すべてが2022年度にピークをつけています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃調単価の年度別推移グラフ</h2>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "燃調 年度平均（円/kWh）",
                  values,
                  color: "#dc2626",
                  fillColor: "rgba(220,38,38,0.14)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">時代区分別の振り返り</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2018〜2019年度：安定期</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                原油・LNG ともに落ち着いた水準で、燃調はほぼ±ゼロ付近。法人では燃調の存在感が低い時期でした。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2020年度：コロナ禍の底値</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                世界的な燃料需要の低下で LNG は 39,000 円/トン、原油は 34,000 円/kl まで下落。
                燃調は −3〜−5 円/kWh 台までマイナス。実質的な電気代減少局面。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2021年度：急速な反転</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                経済再開と冬季需要で燃料価格が反発。年度後半にかけて燃調はマイナス圏から 0 付近へ急上昇。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2022年度：ウクライナ危機の直撃</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                LNG スポット価格は一時 100 ドル/MMBtu 近くまで高騰。貿易統計ベースでも 128,000 円/トンと過去最高。
                燃調単価は自由料金では +10 円/kWh を超える月もあり、請求額が 1.5〜2 倍になる事業者も。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2023年度：激変緩和措置</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                政府の補助金で高圧は 1〜9 月 3.5 円/kWh、10 月〜 1.8 円/kWh の値引き。
                実質的な燃調水準は抑えられるが、ベースの燃料価格は高止まり。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2024〜2026年度：補助縮小と再上昇</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                補助は段階的縮小。燃料価格は高止まりの中、燃調は +2〜+3 円/kWh 台で推移。
                見かけ上の値引きが消えるため、請求額は再び上昇局面。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人請求額への影響試算（月10万kWh）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月10万 kWh 使用の中規模事業所を例に、燃調単価だけで月額がどう変わったかを試算します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">燃調単価</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月額影響</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">対2020年度差</th>
                </tr>
              </thead>
              <tbody>
                {FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE.map((r) => {
                  const monthly = Math.round(r.yenPerKwh * 100000);
                  const baseline = Math.round(
                    (FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE.find((x) => x.fiscalYear === 2020)?.yenPerKwh ?? 0) *
                      100000
                  );
                  const diff = monthly - baseline;
                  return (
                    <tr key={r.fiscalYear} className="border-t border-slate-100">
                      <td className="border border-slate-200 px-3 py-2">{r.fiscalYear}年度</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {r.yenPerKwh > 0 ? "+" : ""}{r.yenPerKwh.toFixed(2)} 円/kWh
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                        {monthly > 0 ? "+" : ""}{monthly.toLocaleString("ja-JP")} 円
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">
                        {diff > 0 ? "+" : ""}{diff.toLocaleString("ja-JP")} 円
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            2020 年度と 2022 年度で、月あたり 100 万円以上の差が生じた事業所も存在します。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="fuel-cost-adjustment-history" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "JEPX", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/fuel-cost-adjustment", title: "燃料費調整額（燃調費）とは", description: "制度の基本と計算式。" },
            { href: "/fuel-cost-adjustment-calculation", title: "燃料費調整額の計算式の詳細", description: "基準燃料価格と換算係数の考え方。" },
            { href: "/fuel-cost-adjustment-upper-limit", title: "燃料費調整額の上限制度", description: "規制料金と自由料金の違い。" },
            { href: "/lng-electricity-price", title: "LNGと電気料金の関係", description: "燃料市況の背景を深掘り。" },
            { href: "/impact-of-electricity-subsidy-ending", title: "電気料金補助金終了の影響", description: "激変緩和措置終了後の請求変化。" },
            { href: "/electricity-price-trend-2019-2025", title: "法人向け電気料金は高止まりしているのか", description: "燃調費を含む料金水準の推移をデータで確認できます。" },
          ]}
        />

        <ContentCta
          heading="自社への影響を試算する"
          description="シミュレーターで月間使用量を入力すると、燃調上振れシナリオでの総額影響を確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="fuel-cost-adjustment-history" />
      </div>
    </main>
    </>
  );
}
