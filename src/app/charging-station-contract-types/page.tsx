import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "EV充電設備の電力契約タイプ｜事業用・従業員用・一般開放の違い";
const pageDescription =
  "EV充電設備の利用範囲（社内専用・従業員用・一般開放）により電力契約と課金方法が変わります。それぞれの要件を整理します。";
const pageUrl = "https://simulator.eic-jp.org/charging-station-contract-types";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "EV充電", "充電設備"],
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
          { name: "EV・充電インフラ", url: "https://simulator.eic-jp.org/articles/ev-charging" },
          { name: "EV充電設備の電力契約タイプ" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ev-charging" className="underline-offset-2 hover:underline">EV・充電インフラ</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">EV充電設備の電力契約タイプ</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">EV充電設備の電力契約タイプ｜事業用・従業員用・一般開放の違い</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">EV充電設備の利用範囲（社内専用・従業員用・一般開放）により電力契約と課金方法が変わります。それぞれの要件を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">社内専用充電</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">社用車・役員車専用の充電設備では、通常の電気代として処理できます。特別な電気事業法上の手続きは不要で、使用電力は自社の経費として計上します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約電力の見直しと、EV充電のピークが通常業務のピークと重ならないよう時間帯制御が推奨されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">従業員向け開放</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従業員の個人EVへの充電サービスを提供する場合、給与課税の取り扱いが論点になります。実費相当の従業員負担を徴収するか、現物給与として処理するかの判断が必要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従業員から実費を徴収する場合、充電量の個別計測と請求の仕組みが必要になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">一般開放（有料充電）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">駐車場・店舗で一般車両向けに有料充電を提供する場合、「電気事業法上の自家発電ではなく電気事業者になる可能性」「決済システム導入」「24時間対応体制」など複数のハードルがあります。専業事業者との提携が現実的なケースが多いです。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/ev-charging", title: "EV・充電インフラ", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/ev-charging", label: "EV・充電インフラの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
