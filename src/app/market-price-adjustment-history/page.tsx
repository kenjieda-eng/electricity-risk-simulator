import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { JEPX_SYSTEM_PRICE_YEARLY } from "../../data/priceAdjustmentHistory";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "市場価格調整額の推移とJEPX価格の関係｜2016〜2025年度の動きを分析";
const pageDescription =
  "市場価格調整額の根拠となるJEPXシステムプライスの年度別推移を2016〜2025年まで分析。2021年冬・2022年ウクライナ危機での高騰、その後の正常化、そして最近の再上昇の背景を解説します。";
const pageUrl = "https://simulator.eic-jp.org/market-price-adjustment-history";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場価格調整額 推移",
    "JEPX 推移",
    "JEPX 急騰 2021",
    "JEPX 2022",
    "市場連動 履歴",
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

export default function MarketPriceAdjustmentHistoryPage() {
  const labels = JEPX_SYSTEM_PRICE_YEARLY.map((r) => `${r.year}年度`);
  const values = JEPX_SYSTEM_PRICE_YEARLY.map((r) => r.systemPriceYenPerKwh);

  return (
    <>
      <ArticleJsonLd
        headline="市場価格調整額の推移とJEPX価格の関係｜2016〜2025年度の動きを分析"
        description="市場価格調整額の根拠となるJEPXシステムプライスの年度別推移を2016〜2025年まで分析。2021年冬・2022年ウクライナ危機での高騰、その後の正常化、そして最近の再上昇の背景を解説します。"
        url="https://simulator.eic-jp.org/market-price-adjustment-history"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "市場価格調整額の推移とJEPX価格の関係" },
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
        <span className="text-slate-800">市場価格調整額の推移</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場価格調整額の推移とJEPX価格の関係</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額</Link>は <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link> スポット価格を参照するため、JEPX 推移を見ると、市場価格調整額がどの時期にどれだけ動いたかが概ね把握できます。
          このページでは、2016 年度以降のシステムプライス年度平均と、契約への波及を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2016〜2025年度のJEPX年度平均推移</h2>
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
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">時代区分別の振り返り</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2016〜2019年度：安定期</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                年度平均 8〜10 円/kWh。需給バランスも安定し、市場連動プランが低リスクの選択肢として広く普及した時期。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2020年度：反転の兆し</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                年度平均 11.12 円/kWh。冬季（2021年1月）に歴史的な高騰が発生。数日間、システムプライスが 250 円/kWh を超える時間帯も。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2021年度：高値水準定着</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                年度平均 13.48 円/kWh。LNG 需給の逼迫で構造的に上昇。市場連動プラン需要家の請求額が前年比 2 倍になるケースも。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2022年度：過去最高</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                年度平均 20.37 円/kWh。ウクライナ危機で LNG スポット価格が歴史的な水準まで急騰。
                新電力の経営破綻・撤退が相次ぐ。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2023年度：正常化</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                年度平均 10.74 円/kWh。LNG 価格の落ち着きと省エネ浸透で市場は正常化。ただし 2019 年以前の水準には戻らず。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">2024〜2025年度：再上昇</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                年度平均 11〜12 円台。冬季の寒波・夏季の猛暑で時折スポット価格が急騰。高止まり基調が続く。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2021年1月の歴史的高騰</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2020 年度末から 2021 年 1 月にかけて、JEPX スポット価格は一時 250 円/kWh を超える時間帯があり、
            1 日平均で 150 円/kWh を記録する日もありました。原因は次の複合要因です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>寒波による電力需要急増</li>
            <li>LNG在庫の逼迫（船舶遅延・生産トラブル）</li>
            <li>一部発電所の計画外停止</li>
            <li>広域予備率が数%台まで低下</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            この時期に市場連動プラン契約をしていた法人では、1 ヶ月の電気代が通常の 5〜10 倍になる事例もあり、
            市場連動リスクの認識が大きく変わった出来事でした。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人請求額への試算（月10万kWh）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPX 連動で 100% 仕入れされていたと仮定し、月 10 万 kWh の事業所の年額を試算します
            （実際には<Link href="/wheeling-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">託送料金</Link>・調達マージン・<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>等が別途加算されます）。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">JEPX平均</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">想定年額</th>
                </tr>
              </thead>
              <tbody>
                {JEPX_SYSTEM_PRICE_YEARLY.map((r) => {
                  const yearly = Math.round(r.systemPriceYenPerKwh * 100000 * 12);
                  return (
                    <tr key={r.year} className="border-t border-slate-100">
                      <td className="border border-slate-200 px-3 py-2">{r.year}年度</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{r.systemPriceYenPerKwh.toFixed(2)} 円/kWh</td>
                      <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{yearly.toLocaleString("ja-JP")} 円</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            2019 年度と 2022 年度で年額の差は 1,500 万円規模。市場連動の振れ幅の大きさを示しています。
          </p>
        </section>

        
      <MarketDataDownload
        apiPath="/api/datasets/price-adjustment"
        caption="燃料費調整・再エネ賦課金履歴（CC BY 4.0、商用利用可）"
      />
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="market-price-adjustment-history" terms={["市場価格調整額", "JEPX", "市場連動プラン", "燃料費調整額", "再エネ賦課金"]} />
        </div>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/market-price-adjustment", title: "市場価格調整額とは", description: "制度の基本まとめ。" },
            { href: "/market-price-adjustment-calculation", title: "市場価格調整額の計算方法", description: "契約約款の読み方も解説。" },
            { href: "/market-price-adjustment-risk", title: "市場価格調整額の上振れリスク", description: "備え方と判断軸。" },
            { href: "/jepx-explained", title: "JEPXとは何か", description: "卸電力市場の基本。" },
            { href: "/jepx-spot-market-history", title: "JEPXスポット市場の価格推移", description: "JEPX単体の推移分析。" },
            { href: "/jepx-price-trend-and-corporate-impact", title: "JEPX卸電力市場価格の推移と法人電気料金への波及", description: "市場価格調整額の背景となるJEPX推移を詳しく確認できます。" },
          ]}
        />

        <ContentCta
          heading="上振れシナリオの影響を試算"
          description="市場価格調整額のリスクを数値で確認しましょう。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="market-price-adjustment-history" />
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
