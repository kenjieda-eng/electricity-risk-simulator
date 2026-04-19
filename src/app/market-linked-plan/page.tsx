import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import { JEPX_YEARLY_SUMMARY } from "../../data/jepxData";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

export const metadata: Metadata = {
  title: "市場連動プランのリスクとは｜法人が知るべき仕組み・固定プラン比較",
  description:
    "市場連動プランの料金変動リスクを、JEPX実績データと固定プラン比較で可視化。向いている法人・向かない法人、見直し時の注意点、2020-21年冬と2022年夏の実例まで法人向けに整理。",
  keywords: [
    "市場連動プラン",
    "法人 電気料金",
    "電力契約 見直し",
    "電気代 変動 リスク",
    "固定プラン 比較",
    "市場連動プラン メリット デメリット",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/market-linked-plan",
  },
  openGraph: {
    title: "市場連動プランとは？法人の電気料金が変動する仕組みと注意点",
    description:
      "市場連動プランの基本、料金が変動する仕組み、向いている法人・向かない法人、見直し時の注意点を法人向けにわかりやすく解説します。",
    url: "https://simulator.eic-jp.org/market-linked-plan",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "市場連動プランとは",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "市場連動プランのリスクとは｜法人が知るべき仕組み・固定プラン比較",
    description:
      "市場連動プランの料金変動リスクを、JEPX実績データと固定プラン比較で可視化。向いている法人・向かない法人、見直し時の注意点、2020-21年冬と2022年夏の実例まで法人向けに整理。",
    images: ["/twitter-default.png"],
  },
};

const faqItems = [
  { question: "市場連動プランとはどのような契約ですか？", answer: "JEPX（日本卸電力取引所）のスポット市場価格に連動して電力量料金の単価が変動する電力契約です。相場が低い局面ではコストを抑えられる可能性がある一方、相場急騰時は負担が増えるリスクがあります。" },
  { question: "市場連動プランが向いている法人の特徴は何ですか？", answer: "月次で電気代をモニタリングできる体制がある、価格変動をある程度許容できる、電力コスト管理の専任担当がいる、といった法人に向いています。逆に年間予算を固定管理したい法人には向きにくいです。" },
  { question: "市場連動プランのリスクはどのくらいですか？", answer: "FY2022年度のJEPX年度平均は約20円/kWhと、FY2019年度の約8円/kWhに比べ2.5倍以上に上昇しました。使用量の多い法人では単価の小さな変動でも年間コストへの影響が大きくなります。" },
];

const FY2016_ONWARDS = JEPX_YEARLY_SUMMARY.filter((r) => r.fy >= 2016 && r.fy <= 2025);
const MAX_AVG = Math.max(...FY2016_ONWARDS.map((r) => r.avg));

export default function MarketLinkedPlanPage() {
  return (
    <>
      <ArticleJsonLd
        headline="市場連動プランのリスクとは｜法人が知るべき仕組み・固定プラン比較"
        description="市場連動プランの料金変動リスクを、JEPX実績データと固定プラン比較で可視化。向いている法人・向かない法人、見直し時の注意点、2020-21年冬と2022年夏の実例まで法人向けに整理。"
        url="https://simulator.eic-jp.org/market-linked-plan"
        datePublished="2025-08-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "市場連動プランとは" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">市場連動プランとは</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場連動プランのリスクとは｜仕組み・固定プラン比較</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <strong>結論：市場連動プランのリスクは「JEPXスポット価格の急騰時に単価が青天井で上がる」こと。</strong>
          2020-21年冬には250円/kWh超（平時の10倍以上）、2022年度の年平均も約20円/kWh（2019年度の2.5倍以上）に跳ね上がった実績があります。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          市場価格が落ち着いている局面ではコストを抑えやすい一方、急騰局面では固定プランより負担が大きく増える可能性があります。
          本ページでは仕組み・<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額との違い</Link>・向いている法人／向かない法人・見直し時の注意点までを実データで整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランの基本的な仕組み</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランは、電力の市場価格に応じて<Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>の単価が変わる設計です。固定単価の契約と比べると、毎月の単価の読みやすさは下がるものの、
            市場価格が低位で推移した期間には、固定プランより有利に見えるケースもあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、実務では「平均的に安そうか」だけで判断しないことが大切です。使用量の多い法人は単価変動の影響が金額に直結しやすく、単価の小さな変動でも
            年間コスト差が大きくなる場合があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ料金が変動するのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランは、市場で形成される価格を契約単価に反映するため、需給の逼迫、燃料価格、為替、気象要因などの影響を受けやすくなります。
            そのため、同じ使用量でも月によって請求見込みが変わる点が特徴です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>需要が高まる季節や時間帯では単価が上がりやすい</li>
            <li>燃料関連コストや為替変動が価格に反映されやすい</li>
            <li>相場急騰時は、短期間でも負担増が生じることがある</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランのメリット</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>相場が低位で推移する局面では、固定プランより単価を抑えられる可能性がある</li>
            <li>市場環境の変化を料金に反映しやすく、運用次第でコスト最適化を狙いやすい</li>
            <li>月次の実績管理と見直しを回せる法人では、改善アクションにつなげやすい</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランのデメリット・注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランのデメリットは、相場急騰時に電力量料金の単価が上振れしやすく、同じ使用量でも請求額が大きく変わる可能性があることです。
            そのため、導入時はメリットだけでなく上振れリスクの管理方法もセットで検討する必要があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>月次の予算見通しがぶれやすく、社内説明の負担が増える場合がある</li>
            <li>電力使用量が多い法人ほど、相場上昇局面でコスト影響が大きくなりやすい</li>
            <li>変動を前提としたモニタリング体制がないと、リスクが顕在化しやすい</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランが向いている法人</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>相場変動を前提に、月次でコスト管理と見直しを回せる体制がある</li>
            <li>一定の価格変動を許容しつつ、下落局面のメリットも取り込みたい</li>
            <li>複数拠点の使用実績を継続的に把握し、運用改善に生かせる</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            価格リスクへの感度を把握できる担当体制がある法人ほど、市場連動の特徴を運用で吸収しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランが向きにくい法人</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>予算を年単位で固定的に管理し、月次変動を許容しにくい</li>
            <li>電力使用量が大きく、上振れ時の影響が損益に出やすい</li>
            <li>社内説明で「毎月の見通しの明確さ」を強く求められる</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動は「安いか高いか」の単純比較より、リスク許容度と社内運用体制との適合性を見て判断することが実務上は重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランの仕入れ単価推移（JEPXデータ）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランの電力量料金は、この<Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link>価格に調達コスト・マージンを上乗せした単価で決まります。
            FY2019の7.93円とFY2022の20.41円では、同じ使用量でも仕入れ単価が2.6倍に開きました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold">年度平均（円/kWh）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold">最低値</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold">最高値</th>
                </tr>
              </thead>
              <tbody>
                {FY2016_ONWARDS.map((row) => (
                  <tr key={row.fy} className="align-top hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">FY{row.fy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.avg.toFixed(2)}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.min.toFixed(2)}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.max.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold text-slate-600">年度平均の推移（CSSバーチャート）</p>
            <div className="space-y-2">
              {FY2016_ONWARDS.map((row) => (
                <div key={row.fy} className="flex items-center gap-2">
      <MarketDataDownload
        apiPath="/api/datasets/jepx"
        caption="JEPX市場データ（CC BY 4.0、商用利用可）"
      />
                  <span className="w-14 shrink-0 text-right text-xs text-slate-600">FY{row.fy}</span>
                  
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="flex-1 rounded bg-slate-100">
                    <div
                      className="rounded bg-sky-500 py-1 text-right pr-2 text-xs font-medium text-white"
                      style={{ width: `${Math.max((row.avg / MAX_AVG) * 100, 8)}%` }}
                    >
                      {row.avg.toFixed(2)}円
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-1 text-xs text-slate-500">出典: JEPX公表データ（スポット市場システムプライス年度平均）</p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約を検討するときに確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>想定単価だけでなく、上振れ時の許容レンジを決めておく</li>
            <li>繁忙期・季節変動時の使用量増加を含めて試算する</li>
            <li>社内承認に必要な説明資料を、比較結果とセットで準備する</li>
            <li>契約条件や見直しタイミングを事前に確認する</li>
          </ul>
        </section>

        <SourcesAndFaq
          faq={faqItems}
          sources={[
            { name: "JEPX（日本卸電力取引所）", url: "http://www.jepx.org", description: "スポット市場システムプライス公表データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・自由化に関する情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力取引監視・市場動向に関する情報" },
          ]}
          publishedAt="2025-08-19"
        />

        <RelatedLinks
          heading="固定プランとの違いを知りたい方へ"
          intro="市場連動プラン単体の理解に加えて、固定プランの考え方や比較軸も押さえると、契約方針を整理しやすくなります。"
          links={[
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "単価を読みやすくしたい法人向けに、固定プランの特徴と注意点を整理しています。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方、予算管理、リスクの出方を比較しながら選び方を確認できます。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "法人の電力契約見直しは何から始めるべきか",
              description: "市場連動プランへの切替を検討する際の見直し手順の入口。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "市場連動プランで発生する調整項目の仕組みと変動幅を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="シミュレーターで確認したい方へ"
          description="考え方を把握したら、実際の条件を入れて試算すると判断しやすくなります。使い方の確認から進める方法と、比較結果を先に見る方法のどちらにも対応しています。"
          links={[
            { href: "/how-to", label: "まずは使い方を確認する" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
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
