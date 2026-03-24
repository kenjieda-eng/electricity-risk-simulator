import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "最終保障供給と通常の電力契約の違いを法人向けに比較";
const pageDescription =
  "最終保障供給と通常の法人向け電力契約の違いを、料金、契約の考え方、継続前提、見直しの必要性の観点から比較します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 通常契約 違い",
    "最終保障供給 比較",
    "最終保障供給 料金 高い 理由",
    "法人 電力契約 見直し",
    "最終保障供給 切り替え 判断",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-vs-retail-contract",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-vs-retail-contract",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給と通常契約の違い",
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

export default function LastResortVsRetailContractPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給と通常の電力契約の違い</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          同じ「法人向け電力契約」に見えても、最終保障供給と通常契約では役割が大きく異なります。差分を整理すると、
          そのまま維持するか、切り替えを急ぐかの判断がしやすくなります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">役割の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は供給継続のセーフティネット、通常契約は比較して選ぶ契約です。前者は「止めないため」、後者は「条件を選ぶため」という前提の違いがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金の考え方の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            通常契約は見積競争や契約設計を通じた最適化余地がありますが、最終保障供給はその性質上、料金が高く見えやすくなります。
            単価だけでなく、契約前提そのものを分けて理解することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            詳しくは{" "}
            <Link href="/last-resort-supply-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              最終保障供給の料金はなぜ高いのか
            </Link>{" "}
            で解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約期間と継続前提の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は次契約までの橋渡しとして考えるのが基本です。通常契約は中長期での運用を前提に、料金、契約期間、更新条件、違約金などを設計して選びます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな企業が早めに見直したほうがよいか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電気料金上昇の影響が損益に直結しやすい企業</li>
            <li>高圧・特別高圧で使用量が大きい企業</li>
            <li>契約更新期限や切り替え期限が近い企業</li>
            <li>複数拠点で契約条件がばらついている企業</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較するときに見るべきポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>総額ベースでの料金差</li>
            <li>燃料費調整額・市場調整項目の扱い</li>
            <li>契約期間、更新条件、違約金</li>
            <li>上振れ時のリスク許容度</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            変動リスクの見方は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの違い
            </Link>{" "}
            も参考になります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度の全体像と基本事項を確認できます。",
            },
            {
              href: "/last-resort-supply-price",
              title: "最終保障供給の料金はなぜ高いのか",
              description: "料金が高く見えやすい背景を整理できます。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替えるには",
              description: "次契約への移行実務を確認できます。",
            },
            {
              href: "/compare",
              title: "比較ページ",
              description: "実際の候補比較を進める入口です。",
            },
          ]}
        />

        <ContentCta
          heading="違いを理解して切り替え判断へ進む"
          description="前提の違いを整理したら、比較ページで通常契約の候補を並べ、実務に落とし込んでいくのが有効です。"
          links={[
            { href: "/last-resort-supply-switch", label: "切り替え手順を見る" },
            { href: "/compare", label: "比較ページを見る" },
          ]}
        />
      </section>
    </main>
  );
}
