import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "最終保障供給の約款はどう読むか 法人担当者向けの確認ポイント";
const pageDescription =
  "最終保障供給の約款や料金表を見るときに、法人担当者がどこを確認すればよいかを、難しい条文をそのまま並べずに整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 約款",
    "最終保障供給 料金表 見方",
    "最終保障供給 法人 担当者",
    "最終保障供給 高圧 特別高圧 約款",
    "最終保障供給 供給条件",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-terms",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-terms",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給の約款はどう読むか",
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

export default function LastResortSupplyTermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給の約款はどう読むか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給の情報は、一般送配電事業者ごとに約款や料金表として公表されています。条文を最初から順に読むと負担が大きいため、
          実務では「何を先に確認するか」を決めて読むことが重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">約款でまず確認したい項目</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>対象需要家の条件（高圧・特別高圧）</li>
            <li>供給開始・終了に関する取り扱い</li>
            <li>契約期間や変更手続き</li>
            <li>供給継続に関する前提条件</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金表で見たいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金単価だけでなく、基本料金、電力量料金、調整項目の扱いをセットで確認します。どの項目が固定的で、どの項目が変動しやすいかを分けて見ると、
            請求額の読み違いを減らせます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約期間や供給条件の確認ポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約の継続前提と位置づけ</li>
            <li>供給条件変更時の扱い</li>
            <li>次契約への移行時に必要な手続き</li>
            <li>自社・自施設で必要な社内承認プロセス</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">エリアごとに見るときの注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            約款・料金表はエリアごとに記載形式や表現が異なる場合があります。条文そのものを比較するより、
            「対象」「料金」「供給条件」「切り替え時の実務」を同じ観点で横並びに確認するのが実務的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">約款を読んだ後に確認したい実務対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            約款確認の目的は、制度理解で終わらず次契約への行動に移すことです。対象判定、料金構造の把握、切り替えスケジュールの作成までつなげることで、
            実務で使える情報になります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度全体の前提を整理できます。",
            },
            {
              href: "/last-resort-supply-price",
              title: "最終保障供給の料金はなぜ高いのか",
              description: "料金表確認時の見方を実務寄りに整理できます。",
            },
            {
              href: "/last-resort-supply-target",
              title: "最終保障供給の対象は誰か",
              description: "対象判定の考え方を確認できます。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替えるには",
              description: "約款確認後に進める切り替え準備を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="約款確認を切り替え実務へつなげる"
          description="確認項目を整理したら、比較ページとシミュレーターで次契約の判断を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーターを使う" },
          ]}
        />
      </section>
    </main>
  );
}
