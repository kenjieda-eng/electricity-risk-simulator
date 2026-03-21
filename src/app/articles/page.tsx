import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "解説ページ一覧 | 法人向け電気料金上昇、高騰リスクシミュレーター",
  description:
    "法人向けに、契約見直しタイミング・新電力比較・再エネ賦課金・燃料費調整額・高圧料金の見方などを実務視点で整理した解説ページ一覧です。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/articles",
  },
  openGraph: {
    title: "解説ページ一覧 | 法人向け電気料金上昇、高騰リスクシミュレーター",
    description:
      "法人向けに、契約見直しタイミング・新電力比較・再エネ賦課金・燃料費調整額・高圧料金の見方などを実務視点で整理した解説ページ一覧です。",
    url: "https://simulator.eic-jp.org/articles",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "解説ページ一覧",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "解説ページ一覧 | 法人向け電気料金上昇、高騰リスクシミュレーター",
    description:
      "法人向けに、契約見直しタイミング・新電力比較・再エネ賦課金・燃料費調整額・高圧料金の見方などを実務視点で整理した解説ページ一覧です。",
    images: ["/twitter-default.png"],
  },
};

const articleLinks = [
  {
    href: "/when-to-review-electricity-contract",
    title: "法人が電力契約を見直すタイミング",
    description:
      "電気料金の上昇、契約更新、使用状況の変化など、法人が電力契約を見直すべき場面と確認ポイントを整理します。",
  },
  {
    href: "/how-to-compare-electricity-suppliers",
    title: "新電力を比較するときのポイント",
    description:
      "単価だけでなく、燃料費調整額、市場連動、契約条件、リスクまで含めて法人が比較時に確認したい視点を解説します。",
  },
  {
    href: "/renewable-energy-surcharge",
    title: "再エネ賦課金とは",
    description:
      "再エネ賦課金の仕組み、法人の電気料金への影響、請求書での見方、燃料費調整額との違いを整理します。",
  },
  {
    href: "/fuel-cost-adjustment",
    title: "燃料費調整額（燃調費）とは",
    description:
      "発電用燃料の価格変動が法人の電気料金にどう影響するか、請求書で確認したいポイントとあわせて解説。",
  },
  {
    href: "/why-business-electricity-prices-rise",
    title: "法人の電気料金が上がる理由",
    description:
      "燃料価格、為替、市場価格、制度要因、使用量や契約条件など、法人の電気料金が上がる主な要因を整理。",
  },
  {
    href: "/high-voltage-electricity-pricing",
    title: "高圧電力の料金の見方",
    description:
      "高圧電力の請求書にある基本料金、電力量料金、燃料費調整額などの見方を法人向けに解説。",
  },
  {
    href: "/extra-high-voltage-electricity-pricing",
    title: "特別高圧電力の料金の見方",
    description:
      "特別高圧電力の料金構造や請求書で確認したいポイント、高圧との違いを法人向けに整理します。",
  },
  {
    href: "/contract-demand-what-is-it",
    title: "契約電力とは",
    description:
      "契約電力の意味や基本料金との関係、請求書・見積書で確認したいポイントを法人向けに解説します。",
  },
  {
    href: "/business-electricity-bill-breakdown",
    title: "法人向け電気料金の内訳とは",
    description:
      "基本料金、電力量料金、燃料費調整額、再エネ賦課金など、法人向け電気料金の内訳を整理します。",
  },
  {
    href: "/how-to-read-electricity-bill",
    title: "電気料金の請求書で確認したいポイント",
    description:
      "契約電力、基本料金、電力量料金、燃料費調整額など、法人担当者が請求書でまず見るべき項目を整理します。",
  },
  {
    href: "/how-to-read-electricity-quote",
    title: "法人向け電気料金見積書の見方",
    description:
      "見積比較時に確認したい料金項目や契約条件、注意点を法人向けに解説します。",
  },
  {
    href: "/lng-electricity-price",
    title: "法人の電気料金とLNGの関係",
    description:
      "なぜ海外のLNG市場が日本の法人向け電気料金に影響するのかを、JEPX・燃料費調整額・契約見直しの観点で整理しています。",
  },
  {
    href: "/market-linked-plan",
    title: "市場連動プランとは",
    description:
      "市場価格に連動して単価が動く仕組み、向いている法人・向きにくい法人、検討時の注意点を整理しています。",
  },
  {
    href: "/fixed-price-plan",
    title: "固定プランとは",
    description:
      "電気料金を安定させやすい理由、予算管理との相性、メリットと注意点を法人向けにまとめています。",
  },
  {
    href: "/market-linked-vs-fixed",
    title: "市場連動プランと固定プランの違い",
    description:
      "料金の動き方、予算管理、リスクの出方、向いている法人像を比較し、選び方の軸を確認できます。",
  },
];

export default function ArticlesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">解説ページ一覧</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直し時に押さえたい基礎知識を、法人担当者向けに整理した解説ページです。まずは気になるテーマから読み、
          その後にシミュレーションや比較ページで条件差を確認すると判断しやすくなります。
        </p>
      </header>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articleLinks.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="rounded-xl border border-slate-200 bg-white p-5 transition hover:bg-slate-50"
          >
            <h2 className="text-lg font-semibold text-slate-900">{article.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">{article.description}</p>
          </Link>
        ))}
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">次に進むページ</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          読み進めた後は、使い方ページで入力手順を確認し、比較ページやトップのシミュレーターで実際の条件を試算してください。
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/how-to"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            使い方ページを見る
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            比較ページを見る
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            法人向け電気料金上昇、高騰リスクシミュレーターへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
