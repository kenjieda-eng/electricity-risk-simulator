import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";


const pageTitle = "法人の電気料金の値上げはおかしいのか｜請求額に違和感があるときの確認ポイント";
const pageDescription =
  "法人の電気料金の値上げが急すぎる、おかしいと感じるときに、請求書や契約条件のどこを確認すべきかを解説します。燃料費調整額、市場価格要因、補助金終了、契約更新の見分け方も整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 値上げ おかしい",
    "法人 電気代 違和感",
    "使用量 変わっていないのに 高い",
    "請求書 確認 ポイント",
    "法人向け電気料金 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/is-business-electricity-price-increase-unreasonable",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/is-business-electricity-price-increase-unreasonable",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人の電気料金の値上げはおかしいのか" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function IsBusinessElectricityPriceIncreaseUnreasonablePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">値上げはおかしいのか</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電気料金の値上げはおかしいのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          請求額が急に増えると「おかしいのではないか」と感じることがあります。実際には、使用量が大きく変わっていなくても、単価や調整項目、
          補助政策、契約更新の影響で請求額が増えることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、断定的に判断するのではなく、違和感があるときに何を確認すべきかを法人実務向けに整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電気料金の値上げはおかしいのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まずは「おかしい」と感じる原因を、使用量増加か、単価・調整項目の変化かに分けることが重要です。事実確認を先に行うことで、
            交渉・見直しの判断が進めやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まず確認したいのは使用量か単価か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求総額だけでは理由が分かりません。使用量（kWh）と実質単価を分けて見ると、節電で対応すべき論点か、契約条件を見直すべき論点かを
            切り分けやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書で増えやすい項目</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金・電力量料金の単価改定</li>
            <li>燃料費調整額（燃調費）</li>
            <li>市場価格調整額</li>
            <li>再エネ賦課金</li>
            <li>補助政策の縮小・終了</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            調整項目の詳細は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額
            </Link>{" "}
            と{" "}
            <Link href="/market-price-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場価格調整額
            </Link>
            の解説で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金終了や契約更新で見え方が変わることがある</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金終了と契約更新が重なると、上昇幅が大きく見えやすくなります。この場合は単一原因ではなく、政策要因と契約要因を分けて確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動型では振れが大きく見えることがある</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動要素がある契約では、需給や市場価格の変動が請求へ反映されやすく、短期間で振れ幅が大きくなることがあります。契約方式を確認し、
            許容できる変動幅かどうかを見直すことが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんなときに見直しを検討したいか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量が大きく変わらないのに請求増が続く</li>
            <li>契約更新後に想定以上の上昇が続く</li>
            <li>調整項目の影響が予算許容を超える</li>
            <li>社内説明に必要な根拠が明確に示せない</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較時に確認したいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単純な単価比較だけではなく、調整項目の扱い、契約期間、更新条件、違約金などを同時に確認します。違和感があるときほど、
            「高いか安いか」ではなく「自社条件として妥当か」で判断することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金に違和感があるときは、まず請求内訳を確認し、そのうえで契約条件との整合を見ます。原因を分解して整理することで、
            感覚的な不安を実務的な見直し判断につなげやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="請求確認から契約見直し判断へ進むための導線です。"
          links={[
            {
              href: "/why-business-electricity-bills-rise-suddenly",
              title: "法人の電気料金はなぜ急に上がるのか",
              description: "急上昇時の要因切り分けを確認できます。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどのくらい上がるのか",
              description: "値上げ幅の見方を整理できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "見直し開始の判断軸を確認できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "比較時の確認観点を整理できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description: "自社条件で妥当性を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="違和感の原因を比較で確かめる"
          description="請求内訳と契約条件を切り分けたうえで比較すると、見直しの必要性を具体的に判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/review-points", label: "見直しポイントカテゴリを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
