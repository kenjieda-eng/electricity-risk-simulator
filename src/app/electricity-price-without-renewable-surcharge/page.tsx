import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import RenewableSurchargeCharts from "./_components/RenewableSurchargeCharts";
import { RENEWABLE_SURCHARGE_DATA } from "./_lib/renewable-surcharge-data";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle = "再エネ賦課金を除いても電気料金は高いのか｜法人向けにベース単価の上昇を整理";
const pageDescription =
  "再エネ賦課金を含まないデータでも、法人向け電気料金は2019年から2021年の水準に戻っていません。請求書の一部ではなく、電気料金のベース単価そのものが上がっている可能性を解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ賦課金を除く 電気料金",
    "法人 電気料金 ベース単価",
    "電気料金 高止まり 要因",
    "燃料調達コスト 円安",
    "法人 電力契約 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-without-renewable-surcharge",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-without-renewable-surcharge",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "再エネ賦課金を除いた電気料金",
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

export default function ElectricityPriceWithoutRenewableSurchargePage() {
  const firstYear = RENEWABLE_SURCHARGE_DATA[0];
  const latestYear = RENEWABLE_SURCHARGE_DATA[RENEWABLE_SURCHARGE_DATA.length - 1];
  const unitPriceGrowthMultiple = latestYear.unitPriceYenPerKwh / firstYear.unitPriceYenPerKwh;

  return (
    <>
      <ArticleJsonLd
        headline="再エネ賦課金を除いても電気料金は高いのか｜法人向けにベース単価の上昇を整理"
        description="再エネ賦課金を含まないデータでも、法人向け電気料金は2019年から2021年の水準に戻っていません。請求書の一部ではなく、電気料金のベース単価そのものが上がっている可能性を解説します。"
        url="https://simulator.eic-jp.org/electricity-price-without-renewable-surcharge"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "再エネ賦課金を除いても電気料金は高いのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-trends" className="underline-offset-2 hover:underline">電気料金の推移と高止まり</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">再エネ賦課金を除いた見方</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">再エネ賦課金を除いても電気料金は高いのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          請求額が上がると、再エネ賦課金だけが原因だと捉えられることがあります。しかし、法人の料金判断では、賦課金を含む総額だけでなく、
          ベース単価そのものがどう動いているかを分けて確認する必要があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、再エネ賦課金を含まない推移データを前提に、2019年から2021年との比較で高止まり傾向を整理し、
          実務上の見方を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ賦課金とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は、太陽光・風力など再生可能エネルギーの固定価格買取制度（FIT/FIP）を支えるために、電気使用量に
            応じて電気料金に上乗せされる制度負担です。燃料費調整額とは別項目で、毎年度に単価が見直されます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            標準家庭（300kWh/月）で見ると、2012年度の月額66円から2026年度は月額1,254円まで上昇し、買い取り単価は約
            {unitPriceGrowthMultiple.toFixed(1)} 倍になっています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            再エネ賦課金データ（2012年度〜2026年度、標準家庭300kWh/月）
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
            ご提示いただいたデータをそのまま掲載しています。2023年度は単価が一時的に低下した一方、2024年度に大きく反発し、
            2026年度は4.18円/kWhとなっています。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-[980px] table-auto border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-3 py-3 font-semibold">年度</th>
                  <th className="px-3 py-3 font-semibold">適用期間</th>
                  <th className="px-3 py-3 font-semibold">買い取り単価</th>
                  <th className="px-3 py-3 font-semibold">昨年度比</th>
                  <th className="px-3 py-3 font-semibold">標準家庭の負担（300kWh/月）</th>
                </tr>
              </thead>
              <tbody>
                {RENEWABLE_SURCHARGE_DATA.map((row) => (
                  <tr key={row.fiscalYear} className="border-t border-slate-100 align-top hover:bg-slate-50">
                    <td className="px-3 py-3 whitespace-nowrap">{row.fiscalYear}年度</td>
                    <td className="px-3 py-3">{row.periodLabel}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{row.unitPriceYenPerKwh.toFixed(2)} 円/kWh</td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      {row.yearOverYearYen === null || row.yearOverYearPercent === null
                        ? "–"
                        : `${row.yearOverYearYen >= 0 ? "+" : ""}${row.yearOverYearYen.toFixed(2)}円（${
                            row.yearOverYearPercent >= 0 ? "+" : ""
                          }${row.yearOverYearPercent}%）`}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      年額 {row.annualBurdenYen.toLocaleString("ja-JP")} 円、月額{" "}
                      {row.monthlyBurdenYen.toLocaleString("ja-JP")} 円
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <RenewableSurchargeCharts />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">今回のデータは再エネ賦課金を含まない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            今回の2019年から2025年の年平均データは、再エネ賦課金を含まない単価です。つまり、請求書上の一時的な負担項目ではなく、
            電気料金のベースに近い部分の動きを見ています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、ここで確認できる上昇は「賦課金が高いから上がっている」という説明だけでは捉えきれません。ベースコスト側の変化を読み取ることが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">それでも2019年から2021年より高い水準が続いている</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金を除いたデータでも、2025年は2019年から2021年平均を上回っています。特別高圧は約52%、高圧は約41%、
            低圧電灯は約24%、低圧電力は約18%高い水準です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>特別高圧: 2019-2021平均11.434 → 2025年17.414</li>
            <li>高圧: 2019-2021平均15.024 → 2025年21.145</li>
            <li>低圧電灯: 2019-2021平均21.760 → 2025年26.891</li>
            <li>低圧電力: 2019-2021平均25.622 → 2025年30.194</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この傾向は、請求明細の一項目だけでなく、契約単価や調達条件を含む基礎部分の見直しが必要なことを示しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人にとって重要なのは請求額ではなくベース単価の変化</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求額は、使用量、季節、補助金、各種調整項目で短期的に見え方が変わります。これだけで判断すると、
            料金環境が改善したのか、単に一時的に抑えられているだけなのかを見誤る可能性があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人の実務では、ベース単価がどの水準にあるのかを先に押さえ、そこに補助や制度要因がどう重なるかを分けて見ると、
            契約見直しの優先順位を付けやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ賦課金以外に考えるべき要因</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ベース単価の高止まりを考えるときは、特定項目だけでなく複数要因の重なりを前提に見ることが大切です。一般的には次のような要因が影響します。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料調達コストの上昇</li>
            <li>円安による輸入コスト増</li>
            <li>電力会社の料金改定</li>
            <li>卸市場や燃料価格の変動反映の強まり</li>
            <li>補助金の有無による見え方の変化</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求書分析では、{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額
            </Link>{" "}
            と{" "}
            <Link href="/renewable-energy-surcharge" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              再エネ賦課金
            </Link>{" "}
            の役割を分けて確認すると、実態把握しやすくなります。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="electricity-price-without-renewable-surcharge" terms={["再エネ賦課金", "燃料費調整額", "容量拠出金", "電力量料金", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="賦課金以外の要因も含めて見ると、契約見直しの論点を整理しやすくなります。"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "請求額に影響する調整項目の読み方を確認できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度項目としての位置付けと見方を整理できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "上昇要因を全体構造で確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="ベース単価を前提に比較する"
          description="請求総額だけでなく、単価構造まで確認しながら比較すると、自社に合う契約条件を判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/fuel-cost-adjustment", label: "燃料費調整額の解説を見る" },
            { href: "/renewable-energy-surcharge", label: "再エネ賦課金の解説を見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
