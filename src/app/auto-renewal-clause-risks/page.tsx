import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "自動更新条項のリスク｜意図しない長期拘束を避ける契約管理";
const pageDescription =
  "電力契約の自動更新条項による意図しない契約継続を防ぐため、通知期限管理と解除の流れを整理します。";
const pageUrl = "https://simulator.eic-jp.org/auto-renewal-clause-risks";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "自動更新条項のリスク" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">自動更新条項のリスク</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">自動更新条項のリスク｜意図しない長期拘束を避ける契約管理</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力契約の自動更新条項による意図しない契約継続を防ぐため、通知期限管理と解除の流れを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自動更新条項の典型</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">「契約期間満了の3ヶ月前までに解約通知がなければ、同条件で1年間自動更新する」といった条項が一般的です。通知を失念すると、意図せず1〜3年延長されることになります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に複数拠点を管理している企業では、拠点ごとに契約期間・通知期限が異なり、管理漏れが起きやすい領域です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">リスクと失敗事例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①通知期限を見逃し、高単価契約が延長、②新規見積取得中に自動更新が発動、③他社への切替予定だが違約金発生のため断念、の3パターンがよくある失敗です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年間数百万円規模のコスト増につながる可能性があり、契約台帳の整備が必須です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約管理のベストプラクティス</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①全拠点の契約期間・通知期限を一覧化、②更新3ヶ月前・6ヶ月前にアラート設定、③更新月の4〜6ヶ月前から見直し検討開始、④解約通知の書面送付と受領確認、の運用ルールを社内で整備します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="このテーマの理解を深めたら、シミュレーターで自社の電気料金リスクを確認しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/contract-legal", label: "契約書・約款の読み方の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
