import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

export const metadata: Metadata = {
  title: "市場連動プランとは？法人の電気料金が変動する仕組みと注意点",
  description:
    "市場連動プランの基本、料金が変動する仕組み、向いている法人・向かない法人、見直し時の注意点を法人向けにわかりやすく解説します。",
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
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
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
    title: "市場連動プランとは？法人の電気料金が変動する仕組みと注意点",
    description:
      "市場連動プランの基本、料金が変動する仕組み、向いている法人・向かない法人、見直し時の注意点を法人向けにわかりやすく解説します。",
    images: ["/twitter-default.png"],
  },
};

export default function MarketLinkedPlanPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場連動プランとは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金では、市場価格に連動して単価が動く契約が選択肢になることがあります。市場価格が落ち着いている局面ではコストを抑えやすく見える一方、
          相場が急騰した局面では負担が増える可能性があるため、仕組みだけでなく運用面まで含めて理解することが重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランの基本的な仕組み</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランは、電力の市場価格に応じて電力量料金の単価が変わる設計です。固定単価の契約と比べると、毎月の単価の読みやすさは下がるものの、
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
          <h2 className="text-xl font-semibold text-slate-900">契約を検討するときに確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>想定単価だけでなく、上振れ時の許容レンジを決めておく</li>
            <li>繁忙期・季節変動時の使用量増加を含めて試算する</li>
            <li>社内承認に必要な説明資料を、比較結果とセットで準備する</li>
            <li>契約条件や見直しタイミングを事前に確認する</li>
          </ul>
        </section>

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
          ]}
        />

        <ContentCta
          heading="シミュレーターで確認したい方へ"
          description="考え方を把握したら、実際の条件を入れて試算すると判断しやすくなります。使い方の確認から進める方法と、比較結果を先に見る方法のどちらにも対応しています。"
          links={[
            { href: "/how-to", label: "まずは使い方を確認する" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
