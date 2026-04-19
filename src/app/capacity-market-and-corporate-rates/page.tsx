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
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["power-procurement"];


const pageTitle =
  "容量市場と法人料金の関係｜制度の仕組みと今後の負担見通し";
const pageDescription =
  "容量市場の仕組みと、法人向け電気料金への「容量拠出金」の転嫁がどのように行われるかを解説します。2024年度以降に本格化するコスト上昇の背景と今後の負担見通しを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量市場 法人料金 影響",
    "容量拠出金 電気料金 上昇",
    "容量市場 仕組み わかりやすく",
    "法人 電気料金 容量市場",
    "電力システム改革 容量市場",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/capacity-market-and-corporate-rates",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/capacity-market-and-corporate-rates",
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

const capacityMarketFlow = [
  {
    step: "1",
    heading: "容量市場オークションの実施",
    content:
      "電力広域的運営推進機関（OCCTO）が毎年オークションを実施し、4年後の供給力を確保します。発電事業者や需要家（需要応答リソース）が供給力を入札します。",
  },
  {
    step: "2",
    heading: "約定した容量価格の決定",
    content:
      "入札価格のうち需要量を満たすラインの価格（約定価格）が決定します。この価格に確保された供給力（MW）を掛けた総額が容量市場コストになります。",
  },
  {
    step: "3",
    heading: "小売事業者への費用配分",
    content:
      "容量市場の総コストは、各小売事業者の供給実績（販売電力量）に応じて按分されます。需要家規模が大きいほど負担額が大きくなります。",
  },
  {
    step: "4",
    heading: "容量拠出金として法人に転嫁",
    content:
      "小売事業者は負担した容量市場コストを「容量拠出金」として顧客の料金に転嫁します。2024年度から本格的な転嫁が始まり、年々上昇する見通しです。",
  },
];

const burdenOutlook = [
  {
    period: "2024年度以前",
    description: "容量市場の導入（2021年度）以降、段階的に転嫁が開始。影響額は限定的。",
  },
  {
    period: "2024〜2026年度",
    description: "約定価格が高騰したオークション結果が転嫁される時期。1kWhあたり数円規模の影響が現れ始めた。",
  },
  {
    period: "2027年度以降",
    description: "さらなる転嫁額の増加が見込まれるが、再エネ普及・省エネ・需要応答の拡大により変動する可能性がある。",
  },
];

export default function CapacityMarketAndCorporateRatesPage() {
  return (
    <>
      <ArticleJsonLd
        headline="容量市場と法人料金の関係｜制度の仕組みと今後の負担見通し"
        description="容量市場の仕組みと、法人向け電気料金への「容量拠出金」の転嫁がどのように行われるかを解説します。2024年度以降に本格化するコスト上昇の背景と今後の負担見通しを整理します。"
        url="https://simulator.eic-jp.org/capacity-market-and-corporate-rates"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "容量市場と法人料金の関係" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">容量市場と法人料金</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          容量市場と法人料金の関係
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2021年度から始まった容量市場制度により、電力の安定供給を確保するための発電設備の「容量」維持コストが、小売電気料金を通じて法人に転嫁されるようになりました。2024年度以降、この「容量拠出金」が本格的なコスト増加要因として注目されています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          容量市場の仕組みとその料金への影響を理解することで、今後の電力コスト動向をより正確に予測できます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>容量市場の目的と仕組み</li>
            <li>容量拠出金が法人料金に転嫁されるまでの流れ</li>
            <li>2024年度以降の負担増加の背景</li>
            <li>容量拠出金を踏まえた電力コスト管理の視点</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            容量市場とは何か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場とは、電力の安定供給に必要な発電設備の「容量（供給力）」をあらかじめ確保するための仕組みです。電力自由化が進む中で、発電設備への投資が不足し将来的な供給不足が生じることを防ぐために、2021年度から導入されました。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力は「電力量（kWh）」だけでなく、必要なときに必要な量を出力できる「供給力（kW）」の確保が不可欠です。容量市場では、この供給力を将来4年分まとめて確保するためのオークションが毎年実施されます。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場は電力量の取引ではなく、「いざとなれば電力を供給できる態勢を維持することへの対価」を支払う仕組みです。このため、発電量が少ない時期でも発電設備の維持コストを支援する役割を担っています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            容量市場コストが法人料金に転嫁される流れ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場で決定したコストが法人の電気料金に反映されるまでの4段階を確認します。
          </p>
          <div className="mt-4 space-y-4">
            {capacityMarketFlow.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {item.step}
                  </span>
                  <p className="text-sm font-semibold text-slate-900">{item.heading}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            2024年度以降の負担が増加する背景
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場の約定価格は、2023年に実施されたオークション（2027年度向け）で大幅に上昇しました。これは供給力不足への懸念と、電源投資コストの上昇を反映したものです。
          </p>
          <div className="mt-4 space-y-3">
            {burdenOutlook.map((item) => (
              <div
                key={item.period}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.period}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金の詳細や具体的な影響額の試算については、{" "}
            <Link
              href="/capacity-contribution-explained"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              容量拠出金の仕組みと影響
            </Link>{" "}
            もご参照ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            容量拠出金は請求書のどこに現れるか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金の請求書への反映方法は電力会社・プランによって異なります。主な反映方式を整理します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">電力量料金単価に含める方式</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                従量料金の単価に容量拠出金相当分を上乗せする形。見た目上は単価改定に見えるが、実態は容量コストの転嫁。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">容量拠出金として別立てで請求</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                燃料費調整額と同様に、「容量拠出金」として請求書に別項目で記載する方式。変動状況が透明で確認しやすい。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">基本料金への上乗せ方式</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                契約電力（kW）に応じた容量拠出金を基本料金に上乗せする方式。使用量（kWh）ではなく需要規模に比例する。
              </p>
            </div>
            
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">確認のポイント</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                現在の契約書・料金表で容量拠出金の転嫁方法を確認する。見積比較時には、容量拠出金の扱いを統一して比較することが重要。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            容量拠出金を踏まえた電力コスト管理の視点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金は、省エネや節電で直接削減できるコストではありませんが、以下の観点から対応を検討できます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              <span className="font-semibold">使用量（kWh）削減で総負担額を圧縮：</span>
              容量拠出金が電力量料金に含まれている場合、省エネや自家消費太陽光による使用量削減が負担額の軽減につながる。
            </li>
            <li>
              <span className="font-semibold">需要応答（DR）への参加を検討：</span>
              容量市場の需要側リソースとして認められた需要応答に参加することで、容量拠出金の負担軽減や収益化の可能性がある。
            </li>
            <li>
              <span className="font-semibold">見積比較時に容量拠出金の扱いを確認：</span>
              電力会社を比較する際、容量拠出金の転嫁方法と単価を揃えて比較することで、料金水準の正確な比較ができる。
            </li>
            <li>
              <span className="font-semibold">中長期コスト予測に組み込む：</span>
              容量拠出金は今後増加傾向にあるため、電力コストの中期予測（3〜5年）に容量拠出金の増加分を見込んでおくことが重要。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場は、電力の安定供給に必要な発電設備の容量を確保するための制度で、そのコストは容量拠出金として法人電気料金に転嫁されます。2024年度以降、この転嫁額が本格的に増加する見通しであり、燃料費調整額・再エネ賦課金に続く電気料金の上昇要因として認識しておく必要があります。今後の電力コスト管理においては、容量拠出金の動向も継続的に確認することが重要です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金の仕組みと影響",
              description: "容量拠出金の算定方法と法人への影響額。",
            },
            {
              href: "/how-procurement-affects-corporate-rates",
              title: "調達構成の違いが法人料金にどう影響するか",
              description: "電力会社の仕入れ構造と料金水準の関係。",
            },
            {
              href: "/market-price-reflected-in-corporate-rates",
              title: "市場価格が法人料金に反映される仕組み",
              description: "JEPXから請求書までの価格波及の流れ。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "燃料費調整額の算定方法と変動要因。",
            },
            {
              href: "/demand-response-cost-benefit",
              title: "DRは電気料金対策としてどう考えるか",
              description: "需要応答への参加と容量市場の関係。",
            },
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人電気料金の明細の見方",
              description: "請求書の各項目と容量拠出金の確認方法。",
            },
          ]}
        />

        <ContentCta
          heading="容量拠出金増加を含めたリスクを把握する"
          description="容量市場コストの上昇を含めた電気料金の変動リスクをシミュレーションできます。"
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
