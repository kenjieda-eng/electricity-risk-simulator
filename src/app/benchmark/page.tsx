import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import { BenchmarkTool } from "../../components/benchmark/BenchmarkTool";

const pageTitle = "業種×規模 電気代ベンチマークツール｜自社と業種平均の即時比較";
const pageDescription =
  "業種と月額電気代（+ 月間kWh）を入力すると、業種平均との乖離率・単価比較・判定バンドと推奨アクションが即座に表示されます。10業種に対応、ブラウザ内計算でデータ送信なし。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://simulator.eic-jp.org/benchmark" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/benchmark",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function BenchmarkPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "ベンチマークツール" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1200px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">ベンチマークツール</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">業種×規模 電気代ベンチマークツール</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            「うちの電気代は高いのか？」——業種・月額電気代・月間kWhを入力すると、業種平均との乖離率を即座に計算し、
            4段階の判定（良好/相場並み/高め/大幅に高い）と推奨アクションを表示します。
          </p>
          <p className="mt-2 text-xs text-slate-600">
            ※ 計算はブラウザ内で完結し、入力内容はサーバに送信されません。業種平均は2026年時点の目安で、地域・規模・稼働時間により変動します。
          </p>
        </header>

        <section className="mt-6">
          <BenchmarkTool />
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">関連コンテンツ</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link href="/articles/benchmarks" className="text-sky-700 underline-offset-2 hover:underline">
                → 相場・削減効果を知る（業種×規模マトリクス）
              </Link>
            </li>
            <li>
              <Link href="/articles/review-points" className="text-sky-700 underline-offset-2 hover:underline">
                → 見直しポイントを知る（4ステップ）
              </Link>
            </li>
            <li>
              <Link href="/simulate" className="text-sky-700 underline-offset-2 hover:underline">
                → 料金上昇リスク シミュレーター（30秒診断）
              </Link>
            </li>
            <li>
              <Link href="/journey" className="text-sky-700 underline-offset-2 hover:underline">
                → 一気通貫ジャーニー（読む→考える→診断→行動）
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
