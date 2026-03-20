import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "解説ページ一覧 | 法人向け電気料金上昇、高騰リスクシミュレーター",
  description:
    "法人向けに、市場連動プラン・固定プラン・両者の違いを実務視点で整理した解説ページ一覧です。契約見直しや比較検討の入口としてご利用ください。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/articles",
  },
  openGraph: {
    title: "解説ページ一覧 | 法人向け電気料金上昇、高騰リスクシミュレーター",
    description:
      "法人向けに、市場連動プラン・固定プラン・両者の違いを実務視点で整理した解説ページ一覧です。契約見直しや比較検討の入口としてご利用ください。",
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
      "法人向けに、市場連動プラン・固定プラン・両者の違いを実務視点で整理した解説ページ一覧です。契約見直しや比較検討の入口としてご利用ください。",
    images: ["/twitter-default.png"],
  },
};

const articleLinks = [
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
      <header className="rounded-xl border border-slate-200 bg-white p-6">
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
