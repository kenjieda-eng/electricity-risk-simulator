import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import { buildSearchIndex } from "../../lib/searchIndex";
import { ConciergeSearch } from "../../components/concierge/ConciergeSearch";

const pageTitle = "AI コンシェルジュ｜35カテゴリ横断検索・意図判定型ガイド";
const pageDescription =
  "35カテゴリ・300超記事を横断検索し、質問の意図（理由/手順/比較/診断/行動）を自動判定して最短動線を提示するガイドです。法人電気料金の疑問を一箇所で解決できます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://simulator.eic-jp.org/concierge" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/concierge",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function ConciergePage() {
  const entries = buildSearchIndex();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "AI コンシェルジュ" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">AI コンシェルジュ</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">AI コンシェルジュ</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            キーワードや自然な質問を入力すると、35カテゴリ・{entries.length}件の横断インデックスから関連ページを提示します。
            意図（理由/手順/比較/診断/行動）を自動判定し、シミュレーターや診断ツールへの最短動線も併せて案内します。
          </p>
          <p className="mt-2 text-xs text-slate-600">
            ※ 本機能はサイト内コンテンツの横断検索＋意図判定で動作する軽量版です。外部LLMへは通信しないため、入力内容はサーバに送信されません。
          </p>
        </header>

        <section className="mt-6">
          <ConciergeSearch entries={entries} />
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">外部 RAG への接続</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            全記事メタデータを JSON で配布しています。外部の LLM / RAG 基盤（Claude / GPT / Gemini / ローカル LLM 等）に取り込み、
            本サイトを知識ソースとする社内 Q&A ボットやカスタムアシスタントを構築できます。
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/api/rag-index"
              className="inline-flex rounded-md border border-sky-300 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              /api/rag-index を開く
            </Link>
            <Link
              href="/data-freshness"
              className="inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              データ鮮度ダッシュボードを見る
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
