import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["energy-equipment"];


const pageTitle =
  "蓄電池導入が向く法人の特徴｜投資対効果が出やすい条件";
const pageDescription =
  "蓄電池の導入投資対効果が出やすい法人の特徴と条件を解説。電力使用パターン・契約形態・業種・設置環境など、費用対効果を左右する主要な判断軸を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "蓄電池 法人 向き",
    "蓄電池 投資対効果",
    "法人 蓄電池 条件",
    "蓄電池 デマンドカット 効果",
    "蓄電池 導入 費用対効果",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/battery-suited-corporations",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/battery-suited-corporations",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const suitedConditions = [
  {
    label: "デマンドのピークが特定の時間帯に集中している",
    detail:
      "月間の最大需要電力（デマンド）が特定の時間帯に集中して発生している場合、蓄電池からの放電でピークを削減できる余地が大きい。「一日のうちの数時間だけ電力使用が突出して高い」というパターンの法人は、デマンドカット効果が出やすい。",
  },
  {
    label: "高圧・特別高圧で基本料金の割合が大きい",
    detail:
      "高圧・特別高圧契約では基本料金が月間料金に占める割合が大きく、デマンド削減による基本料金削減の絶対額が高くなりやすい。低圧契約でデマンド管理の仕組みがない場合は、効果が出にくいケースもある。",
  },
  {
    label: "時間帯別料金で昼間と夜間の単価差が大きい",
    detail:
      "昼間と夜間で電力量料金の単価差が大きい時間帯別料金を利用している場合、夜間に蓄電して昼間に放電するピークシフトの効果が高くなる。ピークシフトの効果は昼夜の単価差と使用量の組み合わせで決まる。",
  },
  {
    label: "自家消費型太陽光発電を設置済み、または同時導入を検討している",
    detail:
      "太陽光発電と蓄電池を組み合わせることで、余剰電力の蓄電と夕方以降の放電が可能になり、購入電力量を削減できる。太陽光単独よりも自家消費率が高まり、投資回収を早めやすい。",
  },
  {
    label: "BCP対策として非常用電源の強化を求めている",
    detail:
      "停電時の事業継続が重要な法人（医療・食品・情報通信など）は、電気料金削減だけでなくBCP投資として蓄電池を評価できる。コスト回収の計算に電気料金削減だけを使う必要がなく、投資判断がしやすくなる。",
  },
  {
    label: "設置可能なスペースと電気容量がある",
    detail:
      "蓄電池ユニットには相応の設置スペースが必要で、電気設備の容量も確認が必要。機械室・屋外・駐車場屋根などに設置できる候補場所があり、受変電設備への接続が可能かを確認する。",
  },
];

const lessEffectiveConditions = [
  {
    label: "電力使用が均等で突出したピークがない",
    detail:
      "24時間均等に電力を使用しており、デマンドのピークが特定の時間帯に集中していない場合は、デマンドカットの効果が小さくなりやすい。",
  },
  {
    label: "低圧契約で電力使用量が小さい",
    detail:
      "低圧契約で月間使用量が小さい法人は、投資額に対する削減効果の絶対額が小さく、投資回収期間が長くなりやすい傾向がある。",
  },
  {
    label: "夜間の電力使用が多く充電時間が確保できない",
    detail:
      "24時間フル稼働の設備が多く、夜間に大量の電力を使用する場合は、蓄電のための余力が限られ、ピークシフトの効果が出にくい。",
  },
];

export default function BatterySuitedCorporationsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="蓄電池導入が向く法人の特徴｜投資対効果が出やすい条件"
        description="蓄電池の導入投資対効果が出やすい法人の特徴と条件を解説。電力使用パターン・契約形態・業種・設置環境など、費用対効果を左右する主要な判断軸を実務目線で整理します。"
        url="https://simulator.eic-jp.org/battery-suited-corporations"
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "省エネ設備・エネルギー装備", url: "https://simulator.eic-jp.org/articles/energy-equipment" },
        ]}
        faq={[
    { question: "蓄電池や太陽光の導入で電気代はどのくらい下がりますか？", answer: "条件により異なりますが、自家消費型太陽光で5〜15%、蓄電池併用でさらに数%の削減が一般的な目安です。" },
    { question: "導入に使える補助金はありますか？", answer: "SII省エネ補助金、需要家主導型PPA補助金、自治体独自の補助金などが利用できる場合があります。" },
        ]}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/energy-equipment" className="underline-offset-2 hover:underline">蓄電池・太陽光・DR</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">蓄電池導入が向く法人の特徴</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          蓄電池導入が向く法人の特徴
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          蓄電池の導入は電気料金削減の手段として有効な場合がありますが、すべての法人に同じ効果が出るわけではありません。投資対効果（ROI）が出やすい法人と出にくい法人の違いを理解することが、導入検討の第一歩です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、蓄電池導入の費用対効果が高くなりやすい法人の特徴と条件を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>蓄電池の主な効果（デマンドカット・ピークシフト）の仕組み</li>
            <li>投資対効果が出やすい法人の6つの特徴</li>
            <li>逆に蓄電池の効果が出にくい条件</li>
            <li>業種・施設別の傾向</li>
            <li>次のアクションへのつなげ方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            蓄電池の主な効果の仕組み
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け蓄電池の主な電気料金削減効果は大きく2つに分類できます。ひとつは<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>の削減、もうひとつは<Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>の最適化です。どちらの効果が大きいかは法人の電力使用パターンと契約形態によって異なります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンドカット（基本料金削減）</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                ピーク時間帯に蓄電池から放電して電力需要のピーク（デマンド）を抑制する。<Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧</Link>・<Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧</Link>では基本料金がデマンドに連動することが多く、ピーク削減が基本料金の削減に直結する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">ピークシフト（電力量料金削減）</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                割安な夜間電力で蓄電し、単価の高い昼間に放電する。時間帯別料金を利用している場合に昼夜の単価差分だけ削減効果が生まれる。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドの仕組みについては{" "}
            <Link
              href="/contract-demand-what-is-it"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              デマンドとは
            </Link>{" "}
            で詳しく確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            投資対効果が出やすい6つの条件
          </h2>
          <div className="mt-4 space-y-3">
            {suitedConditions.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            効果が出にくい条件
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の条件に当てはまる場合、蓄電池の投資回収期間が長くなりやすく、優先度が相対的に低くなる可能性があります。
          </p>
          <div className="mt-4 space-y-3">
            {lessEffectiveConditions.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種・施設別の傾向
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種・施設の特性によって蓄電池の向き不向きに傾向があります。ただし個々の事業者の電力使用状況が実際の効果を左右するため、あくまで参考として把握することが重要です。
          </p>
          
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">業種・施設</th>
                  <th className="border border-slate-200 px-3 py-2">蓄電池の向き</th>
                  <th className="border border-slate-200 px-3 py-2">主な理由</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">工場（製造業）</td>
                  <td className="border border-slate-200 px-3 py-2">向きやすい</td>
                  <td className="border border-slate-200 px-3 py-2">生産開始時のデマンドピークが大きい、高圧・特別高圧契約</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">大型商業施設</td>
                  <td className="border border-slate-200 px-3 py-2">向きやすい</td>
                  <td className="border border-slate-200 px-3 py-2">開店直後のピーク、特別高圧・高圧で基本料金が大きい</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">病院・医療施設</td>
                  <td className="border border-slate-200 px-3 py-2">向きやすい（BCP観点も）</td>
                  <td className="border border-slate-200 px-3 py-2">電気料金削減＋BCP投資として評価できる</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">物流倉庫</td>
                  <td className="border border-slate-200 px-3 py-2">条件次第</td>
                  <td className="border border-slate-200 px-3 py-2">荷役作業の時間帯集中があればデマンドカット効果が出やすい</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">小規模オフィス</td>
                  <td className="border border-slate-200 px-3 py-2">向きにくい</td>
                  <td className="border border-slate-200 px-3 py-2">使用量が小さく投資回収期間が長くなりやすい</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まず現行のコストリスクを把握する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池の導入検討を進める前に、まず現行の電力契約条件でどの程度の料金上振れリスクがあるかを把握することをお勧めします。電気料金の上振れリスクが大きい場合は、契約見直し（プラン変更）の方が即効性の高い対策になる場合もあります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池と契約見直しの組み合わせについては{" "}
            <Link
              href="/contract-review-and-equipment-combination"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              契約見直しと設備対策をどう組み合わせるか
            </Link>{" "}
            で整理しています。
          </p>
        </section>

        <SourcesAndFaq
          faq={[
          { question: "蓄電池や太陽光の導入で電気代はどのくらい下がりますか？", answer: "条件により異なりますが、自家消費型太陽光で5〜15%、蓄電池併用でさらに数%の削減が一般的な目安です。" },
          { question: "導入に使える補助金はありますか？", answer: "SII省エネ補助金、需要家主導型PPA補助金、自治体独自の補助金などが利用できる場合があります。" },
          ]}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "SII 環境共創イニシアチブ", url: "https://sii.or.jp" },
          { name: "環境省", url: "https://www.env.go.jp" },
          ]}
          publishedAt="2026-04-11"
        />



        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/commercial-facility-battery-considerations",
              title: "商業施設で蓄電池を検討するときの着眼点",
              description: "ピーク負荷と営業への影響を踏まえた検討方法。",
            },
            {
              href: "/hospital-battery-considerations",
              title: "病院で蓄電池を検討するときの着眼点",
              description: "BCP対策と料金削減を両立する考え方。",
            },
            {
              href: "/municipality-battery-considerations",
              title: "自治体施設で蓄電池を検討するときの着眼点",
              description: "防災拠点機能と電気料金削減の両立。",
            },
            {
              href: "/solar-suited-corporations",
              title: "自家消費型太陽光が向く法人の特徴",
              description: "太陽光発電の費用対効果が出やすい条件の整理。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "デマンドとは",
              description: "契約電力と基本料金の関係をわかりやすく解説。",
            },
            {
              href: "/contract-review-and-equipment-combination",
              title: "契約見直しと設備対策をどう組み合わせるか",
              description: "契約と設備の両面からコストを最適化する考え方。",
            },
            {
              href: "/subsidies-overview",
              title: "省エネ・再エネ設備の補助金概要",
              description: "蓄電池導入に活用できる補助金制度の整理。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約見直しの始め方",
              description: "蓄電池導入と合わせて契約条件を最適化する考え方。",
            },
          ]}
        />

        <ContentCta
          heading="自社の条件でリスクを確認する"
          description="現行の電力契約条件をもとに、電気料金の上振れリスクをシミュレーターで試算できます。蓄電池導入の検討前に、まず現状のコストリスクを数値で把握することをお勧めします。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
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
