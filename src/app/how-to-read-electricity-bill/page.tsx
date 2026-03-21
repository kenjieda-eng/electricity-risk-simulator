import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気料金の請求書で確認したいポイント｜法人担当者がまず見るべき項目を整理";
const pageDescription =
  "電気料金の請求書で法人担当者が確認したいポイントを解説。契約電力、基本料金、電力量料金、燃料費調整額、再エネ賦課金など、どこを見るべきかを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 請求書 見方 法人",
    "高圧 請求書 見るポイント",
    "電気料金 明細 どこを見る",
    "請求書 確認項目 法人",
    "法人 電気料金 請求書",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-read-electricity-bill",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-electricity-bill",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "電気料金の請求書で確認したいポイント",
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

export default function HowToReadElectricityBillPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金の請求書で確認したいポイント</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          請求書は毎月届きますが、総額だけを見て終わることも少なくありません。ただ、料金上昇の要因分析や契約見直し判断には、
          内訳を確認することが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人担当者が請求書でまず確認したい項目を、実務で使いやすい順番で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書でまず見るべき項目</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">契約電力</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力は基本料金の前提になるため、最初に確認したい項目です。前月から条件が変わっていないかもあわせて見ます。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定的にかかる部分として、金額水準と条件変化の有無を確認します。使用量が減っても総額が下がりにくいときの説明材料になります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">電力量料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実際の使用量に応じた部分です。使用量増減の影響を把握し、季節要因や稼働変化との関係を確認します。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">燃料費調整額</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価変動要因として確認したい項目です。使用量が同程度でも請求額が変わる背景になるため、別枠で切り分けます。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">再エネ賦課金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            制度要因として確認します。使用量との掛け合わせで金額影響が出るため、燃料費調整額とは分けて見ることが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">総額が上がったときに切り分けたいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量が増えたのか</li>
            <li>単価が上がったのか</li>
            <li>燃料費調整額が影響したのか</li>
            <li>再エネ賦課金が影響したのか</li>
            <li>契約条件に変化があったのか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">前月・前年同月と比べて見たいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量</li>
            <li>基本料金</li>
            <li>調整項目の変化</li>
            <li>季節要因</li>
            <li>変化理由を説明できるかどうか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書確認が役立つ場面</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電気料金が急に上がったとき</li>
            <li>契約見直し前</li>
            <li>見積比較前</li>
            <li>拠点ごとの料金差を確認したいとき</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書を見るときの注意点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>総額だけで判断しない</li>
            <li>1か月分だけで結論を出さない</li>
            <li>内訳を分けて見る</li>
            <li>見積書との比較前提をそろえる</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書は総額だけでなく、契約電力、基本料金、使用量、燃料費調整額、再エネ賦課金を分けて確認することが重要です。
            内訳理解を進めると、見直し判断や社内説明を行いやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="請求書確認を、要因分析と比較判断につなげるための関連ページです。"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "料金全体の構造を先に俯瞰できます。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "基本料金の前提となる概念を確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "単価変動要因を個別に理解できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度要因の見方を整理できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "請求確認結果を見直し判断につなげる視点を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="請求確認を比較判断へつなげる"
          description="請求書で増減要因を切り分けた後に比較へ進むと、条件差を実務的に判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
