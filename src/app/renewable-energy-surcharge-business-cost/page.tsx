import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import {
  BUSINESS_USAGE_PROFILES,
  RENEWABLE_SURCHARGE_DATA,
} from "../../data/priceAdjustmentHistory";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "再エネ賦課金の法人別月額試算｜業態・規模ごとの負担額シミュレーション";
const pageDescription =
  "再エネ賦課金を月間使用量ベースで法人別に試算。小規模オフィスから大規模工場まで、2025年度単価での月額・年額負担を一覧化し、過去13年間の負担推移をグラフで確認できます。";
const pageUrl = "https://simulator.eic-jp.org/renewable-energy-surcharge-business-cost";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ賦課金 法人",
    "再エネ賦課金 月額",
    "再エネ賦課金 試算",
    "再エネ賦課金 工場",
    "再エネ賦課金 負担額",
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

export default function RenewableEnergySurchargeBusinessCostPage() {
  const latest = RENEWABLE_SURCHARGE_DATA[RENEWABLE_SURCHARGE_DATA.length - 1];
  // 大規模工場（月100万kWh）の年度別負担推移
  const largeFactoryLabels = RENEWABLE_SURCHARGE_DATA.map((r) => `${r.fiscalYear}年度`);
  const largeFactoryMonthly = RENEWABLE_SURCHARGE_DATA.map((r) =>
    Math.round((r.unitPriceYenPerKwh * 1000000) / 10000)
  ); // 万円単位

  return (
    <>
      <ArticleJsonLd
        headline="再エネ賦課金の法人別月額試算｜業態・規模ごとの負担額シミュレーション"
        description="再エネ賦課金を月間使用量ベースで法人別に試算。小規模オフィスから大規模工場まで、2025年度単価での月額・年額負担を一覧化し、過去13年間の負担推移をグラフで確認できます。"
        url="https://simulator.eic-jp.org/renewable-energy-surcharge-business-cost"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "再エネ賦課金の法人別月額試算" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">再エネ賦課金の法人別月額試算</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">再エネ賦課金の法人別月額試算</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          再エネ賦課金は「単価 × 使用量」の単純な費目ですが、法人では月間使用量が数千 kWh から数百万 kWh まで幅広く、
          規模によって負担額は数千円〜数千万円まで桁が変わります。このページでは {latest.fiscalYear}年度単価 {latest.unitPriceYenPerKwh.toFixed(2)} 円/kWh を使い、
          代表的な業態別の月額・年額負担を試算します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業態別の月額負担一覧（{latest.fiscalYear}年度単価）</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">業態の目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月間使用量</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月額負担</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年額負担</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">10年累計</th>
                </tr>
              </thead>
              <tbody>
                {BUSINESS_USAGE_PROFILES.map((p) => {
                  const monthly = Math.round(p.monthlyKwh * latest.unitPriceYenPerKwh);
                  const yearly = monthly * 12;
                  return (
                    <tr key={p.label} className="border-t border-slate-100">
                      <td className="border border-slate-200 px-3 py-2">
                        <div className="font-semibold text-slate-900">{p.label}</div>
                        <div className="text-xs text-slate-500">{p.description}</div>
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{p.monthlyKwh.toLocaleString("ja-JP")} kWh</td>
                      <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{monthly.toLocaleString("ja-JP")} 円</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{yearly.toLocaleString("ja-JP")} 円</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{(yearly * 10).toLocaleString("ja-JP")} 円</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">大規模工場の年度別負担推移（月100万kWh想定）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            連続操業の大規模工場を例に、制度開始から現在までの年度別月額負担の推移をグラフ化しました。
            単位は万円です。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={largeFactoryLabels}
              series={[
                {
                  label: "月額負担（万円、月100万kWh使用）",
                  values: largeFactoryMonthly,
                  color: "#dc2626",
                  fillColor: "rgba(220,38,38,0.12)",
                },
              ]}
              unit="万円"
              yTitle="万円/月"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 2012年度は月 22 万円、{latest.fiscalYear}年度は月 {largeFactoryMonthly[largeFactoryMonthly.length - 1].toLocaleString("ja-JP")} 万円。
            単価上昇に比例して、大規模需要家ほど制度負担の絶対額が大きく変化します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業態別の負担感を整理する</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">小〜中規模事業者（月3,000〜10,000 kWh）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                月額 1〜4 万円程度。電気料金全体に占める割合は 10〜15% 前後。契約見直しで本体単価を下げても、
                賦課金は同じ金額が残ります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">中規模工場・商業施設（月50,000〜200,000 kWh）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                月額 20〜80 万円。電気料金の重要な構成要素。自家消費型太陽光で使用量そのものを減らすと
                賦課金も連動して減らせます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">大規模施設（月20万kWh超）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                月額 80〜400 万円。年額換算で 1,000 万円を超えることも珍しくありません。
                経営層への説明責任も重くなります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">大規模工場（月100万kWh超）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                月額 400 万円超、年額 5,000 万円規模。電気多消費事業者向けの
                <Link href="/renewable-energy-surcharge-reduction-system" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
                  減免制度
                </Link>
                の対象となる可能性があります。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">賦課金を減らす3つのアプローチ</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong>使用量を減らす</strong>：省エネ、デマンド制御、LED化、設備更新など。単価は変えられないので、
              分母の kWh を減らすのが唯一の直接的な削減策です。
            </li>
            <li>
              <strong>自家消費型再エネを導入する</strong>：自社屋根の太陽光など、系統から買う kWh そのものを減らせば、
              <Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>以外の可変費目と一緒に賦課金も減ります。
            </li>
            <li>
              <strong>減免制度を活用する</strong>：電気使用量に対する電気料金比率が高く、かつ売上高に対する電気料金比率が高い事業者は、
              賦課金の 80% 減免を受けられる場合があります。
            </li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="renewable-energy-surcharge-business-cost" terms={["再エネ賦課金", "燃料費調整額", "容量拠出金", "電力量料金", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "制度の基本と計算方法のまとめ。" },
            {
              href: "/renewable-energy-surcharge-history",
              title: "再エネ賦課金の推移と変動要因",
              description: "2012〜2026年度の単価変動を分析。",
            },
            {
              href: "/renewable-energy-surcharge-reduction-system",
              title: "再エネ賦課金の減免制度",
              description: "電気多消費事業者向けの減免要件と申請の流れ。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光の費用対効果",
              description: "使用量削減による賦課金低減効果も確認できます。",
            },
            { href: "/electricity-price-trend-2019-2025", title: "法人向け電気料金は高止まりしているのか", description: "賦課金を含む料金水準の推移をデータで確認できます。" },
          ]}
        />

        <ContentCta
          heading="自社の試算をシミュレーターで"
          description="月間使用量を入力すると、賦課金を含めた総額ベースでの影響額を確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="renewable-energy-surcharge-business-cost" />
      </div>
    </main>
    </>
  );
}
