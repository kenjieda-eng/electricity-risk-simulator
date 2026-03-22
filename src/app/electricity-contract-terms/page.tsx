import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人向け電力契約で確認したい契約条件とは？更新・違約金を整理";
const pageDescription =
  "法人向け電力契約で確認したい契約期間、更新条件、違約金、中途解約の注意点を整理。見積比較前後で見落としたくないポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電力契約 条件",
    "電力契約 更新条件",
    "電力契約 違約金",
    "中途解約 電力契約",
    "見積比較 契約書",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-contract-terms",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-contract-terms",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電力契約で確認したい契約条件",
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

export default function ElectricityContractTermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電力契約で確認したい契約条件とは？更新・違約金・解約条件を整理
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電力契約では、料金単価だけでなく、契約期間、更新条件、違約金、解約時の扱いなども重要です。
          見積書の数字が魅力的でも、契約条件を十分に確認しないまま切り替えると、後から想定外の制約が見つかることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、見直し時に確認したい契約条件を整理し、比較後に詰めるべき実務ポイントを解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ単価だけで決めない方がよいのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積単価が低く見えても、契約条件が厳しいと運用負担が増える場合があります。料金比較と同じくらい、契約期間・解約条件・更新条件の確認が重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較の基本軸は
            {" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力を比較するときのポイント
            </Link>
            でも整理できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約期間で確認したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約開始日と終了日が明確か</li>
            <li>途中で条件変更が可能か</li>
            <li>複数拠点で期間がそろっているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約更新時期の管理は
            {" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見直しタイミングのページ
            </Link>
            とあわせて確認すると実務で使いやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">更新条件と自動更新の確認ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自動更新の有無、更新通知の期限、更新時に単価や条件が変更される可能性を確認します。更新時の手続き期限を見落とすと、想定しない条件で契約が継続されることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">違約金・中途解約で確認したいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中途解約時の違約金有無、算定方法、対象期間を確認します。契約切替の時期や拠点統廃合の予定がある場合は、違約金条件が意思決定に直結します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「安いように見えても条件が厳しい」ケースは、解約条件を確認すると把握しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">切替時に見落としやすい条件</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>供給開始日までの必要書類と提出期限</li>
            <li>切替直前の解約申請期限</li>
            <li>供給開始前後で適用される料金条件</li>
            <li>検針日と請求締め日の取り扱い</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較とあわせて確認したい視点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、見積書だけで判断せず、約款・契約書・補足条件をセットで確認することが重要です。特に市場連動型か固定型かで、変動許容度と条件確認の重点が変わります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約タイプの違いは
            {" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動と固定の比較
            </Link>
            、見積の読み方は
            {" "}
            <Link href="/how-to-read-electricity-quote" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見積書の見方
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電力契約では、単価比較に加えて契約条件を確認することが不可欠です。契約期間、更新条件、違約金、切替手続きまで含めて整理することで、導入後のギャップを減らせます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="契約条件の確認を、見直しと比較の実務へ接続するための導線です。"
          links={[
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "見直し着手の時期と確認順序を整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "単価以外で比較すべき軸を確認できます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "契約条件の記載箇所と確認方法を確認できます。",
            },
            {
              href: "/articles",
              title: "解説ページ一覧",
              description: "見直し関連テーマを一覧でたどれます。",
            },
          ]}
        />

        <ContentCta
          heading="条件をそろえて比較する"
          description="契約条件を整理した後に比較ページで候補を並べると、単価と運用条件を一体で判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
