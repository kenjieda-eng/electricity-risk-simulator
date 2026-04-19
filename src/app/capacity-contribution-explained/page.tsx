import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CapacityContributionChartCard from "../../components/capacity-contribution/CapacityContributionCharts";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "容量拠出金とは？仕組み・負担額・電気料金への影響を法人向けにわかりやすく解説";
const pageDescription =
  "容量拠出金とは何かを法人向けにわかりやすく解説。2024年4月に始まった容量市場の仕組み、kWh単価への上乗せ構造、負担額の試算例、契約書・請求書での確認ポイントまで、法人の電気料金への影響を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量拠出金",
    "容量拠出金とは",
    "容量拠出金 とは",
    "容量拠出金 電気代",
    "容量市場 法人 電気料金",
    "容量拠出金 仕組み",
    "容量拠出金 kWh 単価",
    "電気料金 上昇 制度要因",
    "容量拠出金 請求書",
    "小売電気事業者 容量市場",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/capacity-contribution-explained",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/capacity-contribution-explained",
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

export default function CapacityContributionExplainedPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/capacity-contribution-explained"
        datePublished="2026-04-17"
        dateModified="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "料金が上がる理由を知る", url: "https://simulator.eic-jp.org/articles/price-increase" },
          { name: "容量拠出金とは" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">料金が上がる理由を知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">容量拠出金とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2024年度から、電力の安定供給を維持するための「容量市場」制度に基づき、小売電気事業者に容量拠出金の支払いが始まりました。
          この費用は電気料金に転嫁されるため、法人の電気代に影響する新たな制度要因です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、容量市場の目的、拠出金の仕組み、法人の請求書への反映のされ方を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 容量市場とは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">容量市場とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場は、将来の電力供給力（発電所の維持・建設）を確保するために2020年に創設された市場です。
            電力広域的運営推進機関（OCCTO）がオークションを実施し、発電事業者は4年後に必要な供給力を提供する対価として「容量確保契約金額」を受け取ります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            再生可能エネルギーの拡大に伴い、火力発電所の稼働率が低下し採算が悪化しています。
            しかし、太陽光が発電できない夕方以降や、需給が逼迫する夏冬には火力が不可欠です。
            容量市場は、こうした「必要だが採算が合いにくい」電源の維持費用を、電力利用者全体で負担する仕組みです。
          </p>

          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">容量市場の基本構造</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 font-semibold text-sky-700">1.</span>
                <span>OCCTOが4年先の必要供給力を算定し、オークションを実施</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-semibold text-sky-700">2.</span>
                <span>発電事業者が応札し、約定価格（円/kW）が決定</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-semibold text-sky-700">3.</span>
                <span>小売電気事業者が販売電力量に応じて「容量拠出金」をOCCTOに支払い</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-semibold text-sky-700">4.</span>
                <span>小売電気事業者が電気料金に転嫁し、最終的に法人・家庭が負担</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 約定価格の推移 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">容量市場の約定価格はどう推移しているか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場の約定価格は年々上昇傾向にあります。2024年度（対象年度：2020年度オークション）は約3,495円/kWでしたが、
            その後の供給力不足懸念や老朽火力の退出見通しを反映して、2026年度以降はさらに上昇する見通しです。
          </p>
          <div className="mt-4">
            <CapacityContributionChartCard
              kind="market-price"
              title="容量市場 約定価格の推移"
              description="発電事業者が受け取る対価（円/kW）。この金額が拠出金の原資となります。"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 2027年度は市場動向をもとにした見通し値です。実際の約定価格はオークション結果により変動します。
          </p>
        </section>

        {/* 容量拠出金の転嫁構造 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">容量拠出金はどう転嫁されるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金は小売電気事業者に課されますが、最終的には電気料金を通じて需要家（法人・家庭）が負担します。
            転嫁のされ方は契約タイプによって異なります。
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">固定プランの場合</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                契約単価にあらかじめ容量拠出金相当分が含まれているケースが多いです。
                請求書上は「電力量料金」の中に埋もれるため、明示的には見えにくくなります。
                ただし、契約更新時に単価が上がる形で反映されることがあります。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">市場連動プランの場合</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                容量拠出金が独立した項目として請求されるケースがあります。
                「容量拠出金」「容量市場費用」などの名称で、kWhあたりの単価として明記されることもあります。
                見積比較の際にはこの項目の有無を必ず確認する必要があります。
              </p>
            </div>
          </div>
        </section>

        {/* 再エネ賦課金・燃調費との違い */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ賦課金や燃料費調整額との違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金に上乗せされる制度要因には、再エネ賦課金、燃料費調整額（燃調費）、そして容量拠出金があります。
            それぞれ性質が異なるため、混同しないことが重要です。
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-900">項目</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">目的</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">変動要因</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">請求書での見え方</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium">再エネ賦課金</td>
                  <td className="px-3 py-2">再エネ導入促進</td>
                  <td className="px-3 py-2">年度ごと改定（全国一律）</td>
                  <td className="px-3 py-2">独立項目で明記</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium">燃料費調整額</td>
                  <td className="px-3 py-2">燃料価格変動の反映</td>
                  <td className="px-3 py-2">毎月改定（燃料価格連動）</td>
                  <td className="px-3 py-2">独立項目で明記</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">容量拠出金</td>
                  <td className="px-3 py-2">将来の発電所維持</td>
                  <td className="px-3 py-2">年度ごと（オークション結果）</td>
                  <td className="px-3 py-2">契約により異なる（内包 or 別建て）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金と燃料費調整額は請求書に独立項目として現れますが、容量拠出金は契約タイプによって見え方が異なります。
            固定プランでは単価に含まれて見えにくく、市場連動プランでは別建てで明記されるケースがあります。
            詳しくは
            <Link href="/capacity-contribution-what-to-check" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金を踏まえて法人が確認したいこと
            </Link>
            で整理しています。
          </p>
        </section>

        {/* 2024年度からの導入経緯 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2024年度からの導入と今後の見通し</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金の実際の支払いは2024年度から始まりました。初年度はkWhあたり約0.5円程度の影響でしたが、
            約定価格の上昇に伴い、年度を追うごとに負担額は増加する見通しです。
          </p>

          <div className="mt-4">
            <CapacityContributionChartCard
              kind="per-kwh"
              title="容量拠出金のkWhあたり転嫁単価（推計）"
              description="小売電気事業者から需要家に転嫁される1kWhあたりの概算単価。"
            />
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2026年度には1円/kWhを超える水準に達する見込みです。使用量の多い法人ほど影響額が大きくなるため、
            予算策定や契約更新のタイミングで織り込む必要があります。
            具体的な影響額は
            <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金で電気代はどのくらい上がるのか
            </Link>
            で詳しく試算しています。
          </p>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-2">
              <span className="shrink-0 text-sky-700">&#9679;</span>
              <span>容量拠出金は将来の発電所維持を目的とした制度で、2024年度から電気料金に転嫁が始まった</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-sky-700">&#9679;</span>
              <span>約定価格は上昇傾向にあり、法人の電気料金への影響は年々拡大する見通し</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-sky-700">&#9679;</span>
              <span>請求書での見え方は契約タイプ（固定/市場連動）によって異なるため、見積書で確認が必要</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-sky-700">&#9679;</span>
              <span>再エネ賦課金・燃料費調整額とは別の制度要因であり、料金上昇の「第三の柱」として把握すべき</span>
            </li>
          </ul>
        </section>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/capacity-contribution-cost-impact",
              title: "容量拠出金で電気代はどのくらい上がるのか",
              description: "kWhあたりの影響額を契約区分別に試算し、再エネ賦課金・燃調費との比較も整理します。",
            },
            {
              href: "/capacity-contribution-what-to-check",
              title: "容量拠出金を踏まえて法人が確認したいこと",
              description: "見積書・契約書での確認ポイントと予算策定への織り込み方を整理します。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "再エネ賦課金の仕組みや法人の電気料金への影響を解説します。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃料価格の変動が請求額へ反映される仕組みを確認できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "容量拠出金を含む料金水準の推移実態をデータで確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="容量拠出金も含めた電気料金リスクを確認する"
          description="制度要因を含む電気料金の上昇リスクを、30秒でシミュレーションできます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/articles/price-increase", label: "料金が上がる理由をもっと知る" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="capacity-contribution-explained" />
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
