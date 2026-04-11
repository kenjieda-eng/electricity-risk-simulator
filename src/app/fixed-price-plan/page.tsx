import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

export const metadata: Metadata = {
  title: "固定プランとは？法人の電気料金を安定させやすい契約の考え方",
  description:
    "固定プランの基本、料金が安定しやすい理由、メリット・注意点、どんな法人に向いているかを法人向けにわかりやすく解説します。",
  keywords: [
    "固定プラン",
    "法人 電気料金",
    "予算管理 電力契約",
    "市場連動 比較",
    "電力契約 見直し",
    "固定プラン メリット デメリット",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/fixed-price-plan",
  },
  openGraph: {
    title: "固定プランとは？法人の電気料金を安定させやすい契約の考え方",
    description:
      "固定プランの基本、料金が安定しやすい理由、メリット・注意点、どんな法人に向いているかを法人向けにわかりやすく解説します。",
    url: "https://simulator.eic-jp.org/fixed-price-plan",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "固定プランとは",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "固定プランとは？法人の電気料金を安定させやすい契約の考え方",
    description:
      "固定プランの基本、料金が安定しやすい理由、メリット・注意点、どんな法人に向いているかを法人向けにわかりやすく解説します。",
    images: ["/twitter-default.png"],
  },
};

export default function FixedPricePlanPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">固定プランとは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          固定プランは、一定期間の単価を比較的読みやすくし、電気料金の見通しを立てやすくする契約です。法人の契約見直しでは、単価の安さだけでなく、
          予算策定や社内説明のしやすさを重視して選ばれることが多くあります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランの基本的な考え方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランは、契約期間中の単価が大きく変わりにくい設計のため、月次・四半期・年度単位での予算管理を行いやすい点が特徴です。
            担当者にとっては、契約期間中の見積もり精度を高めやすく、稟議資料の作成でも説明軸を揃えやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金が安定しやすい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動よりも単価の変動幅を抑えやすい契約設計になっているため、相場の短期変動をそのまま請求に受けにくいことが主な理由です。
            その結果、電力使用量の多い法人でも、上振れ見込みを早期に把握しやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>単価の読みやすさが高く、予算計画に反映しやすい</li>
            <li>社内説明時に前提条件を揃えやすい</li>
            <li>短期的な市況変化に振られにくい</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランのメリット</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>年間予算や月次予実管理の精度を上げやすい</li>
            <li>複数拠点の管理でも、比較軸が統一しやすい</li>
            <li>契約更改時の説明が定型化しやすい</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            価格変動リスクを抑える視点が明確なため、安定性を重視する法人にとっては実務運用に乗せやすい選択肢です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランのデメリット・注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランは安定性に強みがありますが、相場が下落した局面では、結果として割高に見えることがあります。固定だから絶対安心という考え方ではなく、
            契約条件や期間、見直しタイミングを含めて確認することが必要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>市場下落局面で相対的に高く見える可能性がある</li>
            <li>契約条件によって柔軟な見直しが難しい場合がある</li>
            <li>使用実態と契約前提がずれると、想定外の差が出ることがある</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランが向いている法人</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>予算管理や稟議で、コスト見通しの明確さが重要な法人</li>
            <li>価格変動リスクを抑えて、安定運用を優先したい法人</li>
            <li>電力使用量が多く、急な上振れを避けたい法人</li>
          </ul>
        </section>

        <RelatedLinks
          heading="市場連動プランとの違い"
          intro="固定プランを検討する際は、市場連動プラン単体の特徴や比較ページもあわせて確認すると判断しやすくなります。"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格に連動して単価が動く仕組みと、向いている法人像を解説しています。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方、予算管理、リスクの出方を並べて整理した比較ページです。",
            },
          ]}
        />

        <ContentCta
          heading="シミュレーターで確認したい方へ"
          description="考え方を理解した後は、実際の条件で比較することで判断精度が上がります。導入手順の確認、比較結果の確認、シミュレーション開始のいずれにも進めます。"
          links={[
            { href: "/market-linked-plan", label: "市場連動プランの解説を見る" },
            { href: "/market-linked-vs-fixed", label: "違いを比較して確認する" },
            { href: "/how-to", label: "使い方ページを見る" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="fixed-price-plan" />
      </div>
    </main>
  );
}
