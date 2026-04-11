import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { JEPX_SYSTEM_PRICE_YEARLY } from "../../data/priceAdjustmentHistory";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "市場価格調整額とは｜仕組み・計算方法・JEPX連動とのつながりを徹底解説";
const pageDescription =
  "市場価格調整額の仕組み、JEPXシステムプライスとの関係、燃料費調整額との違い、2020〜2025年度の推移、法人契約で注意すべきポイントを、実データとグラフで詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/market-price-adjustment";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場価格調整額",
    "市場価格調整額 とは",
    "市場価格調整額 JEPX",
    "市場価格調整額 計算",
    "市場連動 調整額",
    "電気料金 調整項目",
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

export default function MarketPriceAdjustmentPage() {
  const labels = JEPX_SYSTEM_PRICE_YEARLY.map((r) => `${r.year}年度`);
  const values = JEPX_SYSTEM_PRICE_YEARLY.map((r) => r.systemPriceYenPerKwh);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場価格調整額とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          市場価格調整額は、卸電力市場（JEPX）の価格動向を電気料金に反映する調整項目です。
          燃料費調整額と似た役割を持ちますが、参照している価格が「燃料CIF価格」ではなく「JEPX市場価格」である点が決定的に異なります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、市場価格調整額の仕組み、JEPX 推移との関係、燃調との違い、法人契約で注意すべき点を、
          実データとグラフで整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格調整額の基本</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整額は、電気の仕入れコストの一部が JEPX 価格に連動する場合に、
            その変動を料金に反映するための調整項目です。契約書・約款では「市場調整額」「電源調達調整額」「市場連動調整」
            など複数の名称で記載されます。
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電力会社ごとに名称・算定ルール・反映方法が異なる</li>
            <li>固定単価プランの一部で別立て項目として入ることがある</li>
            <li>市場連動プランでは、単価そのものが市場に連動するため別立てにならない場合も多い</li>
            <li>上限の有無は契約ごとに大きく異なる</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXシステムプライスとの連動</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整額の根拠は JEPX スポット市場（一日前市場）のシステムプライスです。
            参考までに、2016〜2025 年度の年度平均システムプライスの推移を確認しておきます。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "JEPXシステムプライス年度平均（円/kWh）",
                  values,
                  color: "#7c3aed",
                  fillColor: "rgba(124,58,237,0.14)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 日本卸電力取引所（JEPX）公表値。2022年度は 20.37 円/kWh と過去最高。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額との違い（詳細版）</h2>
          <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">比較観点</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">市場価格調整額</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">燃料費調整額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">参照指標</td><td className="border border-slate-200 px-3 py-2">JEPX市場価格</td><td className="border border-slate-200 px-3 py-2">燃料CIF価格</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">反映タイミング</td><td className="border border-slate-200 px-3 py-2">月次（当月 or 前月実績）</td><td className="border border-slate-200 px-3 py-2">3〜5ヶ月ラグ</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">変動の幅</td><td className="border border-slate-200 px-3 py-2">大きい（市場動向をほぼそのまま）</td><td className="border border-slate-200 px-3 py-2">中程度（基準単価で緩和）</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">契約上の上限</td><td className="border border-slate-200 px-3 py-2">原則なし（自由設計）</td><td className="border border-slate-200 px-3 py-2">規制料金のみあり</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">表示</td><td className="border border-slate-200 px-3 py-2">契約によって名称が異なる</td><td className="border border-slate-200 px-3 py-2">統一的に「燃料費調整額」</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人契約で見落としやすいポイント</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>「燃調」と「市場調整」を二重に計上される契約がある（総額が上がりやすい）</li>
            <li>固定単価に見えても、別立てで市場連動項目が入っているケースがある</li>
            <li>電気料金値引き（激変緩和措置）は燃調には適用されたが、市場連動項目には適用されなかった例がある</li>
            <li>契約書の末尾にある小さな条項に算定ルールが書かれていることが多い</li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">もっと深く知りたい方へ</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/market-price-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                市場価格調整額の推移とJEPX価格の関係
              </Link>
            </li>
            <li>
              <Link href="/market-price-adjustment-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                市場価格調整額の計算方法と契約約款の読み方
              </Link>
            </li>
            <li>
              <Link href="/market-price-adjustment-risk" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                市場価格調整額の上振れリスクと備え方
              </Link>
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/fuel-cost-adjustment", title: "燃料費調整額（燃調費）とは", description: "燃調費の仕組みと請求影響。" },
            { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場価格連動型契約の特徴。" },
            { href: "/jepx-explained", title: "JEPXとは", description: "卸電力市場の基本。" },
            { href: "/how-to-read-electricity-quote", title: "電気料金見積書の見方", description: "契約条件の読み方。" },
          ]}
        />

        <ContentCta
          heading="同条件で比較する"
          description="調整項目の差を把握したら、同じ前提条件で複数メニューを比較し、総額差を確認することが有効です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="market-price-adjustment" />
      </div>
    </main>
  );
}
