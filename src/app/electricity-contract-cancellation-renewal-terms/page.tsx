import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "法人向け電力契約で確認したい違約金・契約期間・更新条件｜比較時の見落とし防止";
const pageDescription =
  "法人向け電力契約を比較するときに確認したい、違約金、契約期間、更新条件の見方を解説します。単価だけでは分からない契約条件の違いを整理し、見直しや乗り換えの判断に役立てます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-contract-cancellation-renewal-terms",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-contract-cancellation-renewal-terms",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人向け電力契約で確認したい違約金・契約期間・更新条件" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function ElectricityContractCancellationRenewalTermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電力契約で確認したい違約金・契約期間・更新条件</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の見積比較では単価が目に入りやすい一方、契約期間・違約金・更新条件は後回しになりがちです。実務では、これらの条件が運用のしやすさや
          乗り換えの自由度に直結するため、初期比較の段階から確認することが重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金の比較は単価だけでは足りない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積単価が有利でも、契約期間が長すぎたり、途中解約条件が厳しかったりすると、結果的に見直ししづらい契約になることがあります。価格と条件を分けて比較し、
            将来の運用変更に対応できるかまで確認する視点が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約期間で変わる見え方</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>1年契約か複数年契約か</li>
            <li>契約期間中の条件変更や拠点追加が可能か</li>
            <li>契約満了時の扱い（再見積、更新単価の提示方法など）</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">違約金で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>中途解約時にどの条件で発生するか</li>
            <li>どのタイミングから発生対象になるか</li>
            <li>計算方法が明示されているか</li>
            <li>拠点の統廃合や用途変更時に影響するか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">更新条件で見落としやすい点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自動更新の有無</li>
            <li>更新時の単価見直し条件</li>
            <li>更新案内が届く時期</li>
            <li>解約申し出期限</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約タイプ別の比較を同時に整理したい場合は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動と固定の比較
            </Link>
            も参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">乗り換えや見直し前に確認したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現在契約の満了時期と通知期限</li>
            <li>施設再編や拠点統廃合の予定</li>
            <li>使用量の増減見込み</li>
            <li>将来の入札・稟議スケジュールとの整合</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            どのタイミングで検討を始めるべきかは{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見直しタイミングの解説
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電力契約では、安い契約かどうかだけでなく、運用しやすい契約かどうかを見る必要があります。契約期間・違約金・更新条件を先に確認しておくことで、
            乗り換え時の想定外を減らしやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="単価比較に加えて契約条件を確認する際に、あわせて見ておきたいページです。"
          links={[
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "見直しの開始時期と準備順序を整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "単価以外の比較軸を全体で確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約タイプの違いと条件確認を接続できます。",
            },
            {
              href: "/articles",
              title: "解説ページ一覧",
              description: "契約メニューカテゴリ全体を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="契約条件まで含めて比較する"
          description="比較時は、単価と契約条件を別々に整理したうえで総合判断すると、導入後の運用ギャップを減らしやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles", label: "解説ページ一覧に戻る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="electricity-contract-cancellation-renewal-terms" />
      </div>
    </main>
  );
}
