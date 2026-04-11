import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "最終保障供給の対象は誰か 高圧・特別高圧の違いも解説";
const pageDescription =
  "最終保障供給の対象になる法人・自治体、高圧と特別高圧の違い、低圧との違い、自社が対象か確認するときの考え方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 対象",
    "最終保障供給 高圧",
    "最終保障供給 特別高圧",
    "最終保障供給 法人 自治体",
    "最終保障供給 低圧 違い",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-target",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-target",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給の対象は誰か",
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

export default function LastResortSupplyTargetPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給の対象は誰か</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、誰でも使う制度ではありません。法人・企業・自治体のうち、高圧または特別高圧で受電している需要家が前提になります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の対象になる需要家</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            典型的には、高圧・特別高圧の契約区分で電気を使用する需要家が対象です。工場、オフィスビル、商業施設、病院、学校、自治体施設などが該当し得ます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧と特別高圧の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧と特別高圧は、受電電圧や契約規模、設備要件の観点で区分されます。どちらも法人向け電力契約の中核ですが、
            実務では請求額への影響の出方や見積比較時の確認項目が異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            区分ごとの料金の見方は{" "}
            <Link href="/high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧電力の料金の見方
            </Link>{" "}
            と{" "}
            <Link href="/extra-high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              特別高圧電力の料金の見方
            </Link>{" "}
            を参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">低圧とは何が違うのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧契約は一般家庭や小規模店舗で使われる契約区分で、最終保障供給の対象条件とは前提が異なります。自社契約が低圧か高圧以上かで、
            制度の関係性が大きく変わるため、まず契約区分の確認が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・工場・ビル・自治体での典型例</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>工場: 負荷が大きく、契約電力とデマンド管理が重要</li>
            <li>オフィスビル・商業施設: 稼働時間帯と空調負荷の影響が大きい</li>
            <li>病院・学校: 安定供給と契約継続性の優先度が高い</li>
            <li>自治体施設: 入札・予算・契約事務との連動が必要</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自社が対象か確認する方法</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            次の資料をそろえると、対象判定を進めやすくなります。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電気料金請求書（契約区分・契約電力の記載）</li>
            <li>受電設備の情報</li>
            <li>現行契約書・見積書</li>
            <li>直近の使用実績</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            迷う場合は{" "}
            <Link href="/last-resort-supply-high-voltage" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧・特別高圧の確認ポイント
            </Link>{" "}
            もあわせて確認してください。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度全体の位置づけと実務上の考え方を確認できます。",
            },
            {
              href: "/last-resort-supply-high-voltage",
              title: "高圧・特別高圧で確認したいポイント",
              description: "受電区分ごとの確認項目を実務視点で整理しています。",
            },
            {
              href: "/compare",
              title: "比較ページ",
              description: "対象区分を整理したあとに次契約の比較検討へ進めます。",
            },
          ]}
        />

        <ContentCta
          heading="対象区分を確認したら次の契約準備へ"
          description="対象判定を終えたら、切り替え準備と比較ページの活用で実務を前に進めやすくなります。"
          links={[
            { href: "/last-resort-supply-switch", label: "切り替え手順を見る" },
            { href: "/compare", label: "比較ページを見る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="last-resort-supply-target" />
      </div>
    </main>
  );
}
