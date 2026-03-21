import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "契約電力とは｜法人の電気料金・基本料金・見積比較で押さえたい考え方";
const pageDescription =
  "契約電力とは何かを法人向けに解説。基本料金との関係、請求書や見積書での見方、見直し時に確認したいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "契約電力とは 法人",
    "契約電力 基本料金 関係",
    "高圧 契約電力",
    "電気料金 契約電力 見方",
    "法人 見積比較 電力契約",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/contract-demand-what-is-it",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/contract-demand-what-is-it",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "契約電力とは",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function ContractDemandWhatIsItPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">契約電力とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向けの電気料金では、契約電力という言葉が請求書や見積書で頻繁に登場します。記載は見つけられても、
          実務上どのように重要なのか分かりにくいケースがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、契約電力の基本的な考え方と、請求確認・見積比較で押さえたい確認ポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力は、電力契約の前提となる重要な数値のひとつです。基本料金の計算や契約条件に関わることが多く、
            単なる使用量とは役割が異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求書や見積書で金額を正しく読むためには、契約電力を「契約の枠組みを決める値」として理解することが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量とは何が違うか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量は、実際に使った電力量を示す値</li>
            <li>契約電力は、契約条件の前提となる値</li>
            <li>この2つを混同すると、請求書や見積書の解釈を誤りやすい</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力はなぜ重要か</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金に関係しやすい</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力は固定費部分に影響します。使用量が少ない月でも基本料金に関係するため、総額を見るうえで見逃せません。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">見積比較の前提になる</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力が異なる見積同士は単純比較しにくくなります。比較時は、同じ前提条件で算出されているかを必ず確認する必要があります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">設備更新や稼働変化とも関係する</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            拠点の使用実態が変わると、以前に設定した契約条件が現在に合わなくなる場合があります。設備増設や稼働パターンの変化は、
            契約電力見直しのきっかけになります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書や見積書ではどこを見ればよいか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力の記載欄</li>
            <li>基本料金との関係</li>
            <li>他の条件とあわせた前提の一致</li>
            <li>見積比較時に同じ前提条件かどうか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力を確認したい主な場面</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>請求額が高いと感じたとき</li>
            <li>契約更新時</li>
            <li>見積比較時</li>
            <li>設備増設・更新時</li>
            <li>拠点の使用状況が変わったとき</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力を見るときの注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力は数字だけで判断しにくい項目です。使用量、契約条件、料金体系をセットで確認し、一部分だけで結論を出さないことが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力は、請求書と見積書の理解に欠かせない基礎概念です。使用量とは別の概念として押さえ、比較や見直しでは基本料金との関係を含めて確認することが大切です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="契約電力の理解を、請求確認と見積比較の実務に接続するための導線です。"
          links={[
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "契約電力が請求構造にどう影響するかを確認できます。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧電力の料金の見方",
              description: "より大口契約での影響の見方を整理できます。",
            },
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "料金全体の構造を俯瞰して確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "請求書で見る順番と確認項目を整理できます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積比較で契約条件をどう確認するかが分かります。",
            },
          ]}
        />

        <ContentCta
          heading="前提をそろえて比較する"
          description="契約電力を含む前提条件をそろえて比較することで、見積の差を実務的に判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
