import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "有事シナリオ分析 特集一覧｜法人向けシナリオ特集";
const pageDescription =
  "法人のエネルギー関連コスト上昇リスクをシナリオ別に確認できる特集ページです。電気料金版・原油物流版・ガス料金版の3テーマから選んで確認できます。";
const canonicalUrl = "https://simulator.eic-jp.org/special";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const specialLinks = [
  {
    href: "/special/emergency-scenario-analysis",
    title: "有事シナリオ分析（電気料金）",
    description:
      "原油高騰・補助金終了・再エネ賦課金・円安の四重苦を前提に、法人電気代の上振れリスクを3シナリオで比較します。",
  },
  {
    href: "/special/oil-scenario-analysis",
    title: "有事シナリオ分析（原油・物流コスト）",
    description:
      "イラン情勢を前提に、ガソリン・軽油価格の変動と物流コスト・社用車費用・出張旅費への影響をシナリオ別に確認できます。",
  },
  {
    href: "/special/gas-scenario-analysis",
    title: "有事シナリオ分析（法人ガス代）",
    description:
      "都市ガス・LPガスの料金見通し、補助金の持続性、業種別コスト増、電化比較をシナリオ別に確認できます。",
  },
] as const;

export default function SpecialTopPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">有事シナリオ分析 特集一覧</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          地政学リスクの影響を受ける局面で、法人コストの上振れリスクをテーマ別に確認できる特集ページです。目的に合わせて、下記の特集からご確認ください。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">特集ページを選ぶ</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {specialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50"
            >
              <p className="text-lg font-semibold text-slate-900">{link.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
