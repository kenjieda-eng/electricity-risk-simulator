import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "最終保障供給とは？法人・自治体向けに仕組みをわかりやすく解説";
const pageDescription =
  "最終保障供給とは何か、対象になる法人・自治体、契約の考え方、注意点をわかりやすく解説します。高圧・特別高圧の需要家が確認したい基本を整理したページです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 法人",
    "最終保障供給 自治体",
    "最終保障供給 高圧 特別高圧",
    "最終保障供給 対象",
    "最終保障供給 切り替え",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給とは",
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

export default function LastResortSupplyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="mb-4 text-sm text-slate-600">
        <Link href="/" className="underline underline-offset-2 hover:text-slate-900">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <Link href="/articles" className="underline underline-offset-2 hover:text-slate-900">
          法人向け電気料金の基礎知識
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">最終保障供給とは</span>
      </nav>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          最終保障供給とは？法人・自治体向けに仕組みをわかりやすく解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、高圧または特別高圧で電気を使う法人・企業・自治体などが、どの小売電気事業者とも契約合意に至らない場合に、
          一般送配電事業者から臨時的に供給を受ける仕組みです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          通常の法人向け電力契約の代替として長期利用する前提ではなく、供給を止めないためのセーフティネットとして位置づけて理解することが重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は、通常の小売契約が成立しない局面で電気供給を継続するための制度です。料金の安さを競う契約ではなく、
            事業継続や公共サービス継続の観点で電気を途切れさせないことが主眼です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の対象になるのはどんな需要家か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            主な対象は高圧・特別高圧で受電する需要家です。工場、オフィスビル、商業施設、病院、学校、自治体施設などが該当し得ます。
            まずは受電区分と契約電力の確認が出発点になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            詳細は{" "}
            <Link href="/last-resort-supply-target" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              最終保障供給の対象は誰か
            </Link>{" "}
            で整理できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ最終保障供給が必要になるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、既存契約の終了、切り替え交渉の不成立、価格高騰局面での小売撤退、自治体の入札不調などを契機に利用されます。
            特に公共施設では電気供給の継続が不可欠なため、次の調達先が決まるまでの橋渡しとして使われる場面があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給はずっと続ける前提の契約ではない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は、通常の法人向け小売契約と役割が異なります。長く使い続けるよりも、次の契約へ切り替える計画を早めに進めるほうが、
            料金面・契約運用面の見通しを立てやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            切り替えの進め方は{" "}
            <Link href="/last-resort-supply-switch" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              最終保障供給から切り替えるには
            </Link>{" "}
            で確認してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給中に確認したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自社・自施設が高圧か特別高圧か</li>
            <li>料金表と約款で確認すべき項目</li>
            <li>次契約の見積依頼に必要なデータ</li>
            <li>契約切り替えまでの社内・庁内スケジュール</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連する解説ページ"
          intro="制度の位置づけを押さえたら、通常契約との違いと切替実務へ進むと次の手が決めやすくなります。"
          links={[
            {
              href: "/last-resort-vs-retail-contract",
              title: "最終保障供給と通常契約の違い",
              description: "役割、料金、継続前提の差を比較して判断軸を整理します。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替えるには",
              description: "次契約への移行で必要な実務ステップを確認できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "橋渡しから本契約へ戻るタイミングの整理に使えます。",
            },
            {
              href: "/switching-business-electricity-contract",
              title: "法人が電力契約を切り替えるときの注意点",
              description: "切替時の期限・請求のズレなど実行フェーズの論点です。",
            },
            {
              href: "/articles/power-procurement",
              title: "電力調達の仕組みを知る（カテゴリ）",
              description: "通常契約側の調達構造をあわせて押さえられます。",
            },
          ]}
        />

        <ContentCta
          heading="通常契約への見直しを進める"
          description="最終保障供給の基本を整理したら、比較ページとシミュレーターで次契約の方向性を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーターを使う" },
          ]}
        />
      </section>
    </main>
  );
}
