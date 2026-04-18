import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "EV充電の従量課金・サブスク比較｜従業員向け課金の方法";
const pageDescription =
  "社内EV充電設備を従業員に開放する際の、従量課金・サブスク・無料供与の各選択肢と法務・税務整理を解説します。";
const pageUrl = "https://simulator.eic-jp.org/ev-charging-employee-billing";

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
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "EV・充電インフラ", url: "https://simulator.eic-jp.org/articles/ev-charging" },
          { name: "EV充電の従量課金・サブスク比較" },
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
          <span className="text-slate-800">EV充電の従量課金・サブスク比較</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">EV充電の従量課金・サブスク比較｜従業員向け課金の方法</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">社内EV充電設備を従業員に開放する際の、従量課金・サブスク・無料供与の各選択肢と法務・税務整理を解説します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">従業員向け課金のパターン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①無料供与：事業所に設置した充電器を従業員が自由利用。福利厚生として税務処理。②従量課金：充電量に応じて従業員に請求。③サブスク：月額固定で使い放題。④割引券・ポイント：利用実績に応じてインセンティブ。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">米国・欧州では多様な課金方式が導入されており、日本でも大企業中心に普及が進んでいます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">税務上の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従業員への無料充電提供は、経済的利益として給与扱い（源泉徴収・社保対象）となるケースがあります。税務調査で指摘を受けない設計には、①実費徴収または相当額課金、②業務使用のみの限定、などのルール明示が有効です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">福利厚生としての無償提供が可能な範囲は、1人あたり月額数千円までが目安ですが、社員全員に均等提供が前提です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">運用システムの選定</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従業員別の充電量データ・請求・決済を自動化するには、充電管理クラウドサービスが便利です。OCPP対応の充電器なら、複数メーカー混在でも統合管理できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">給与天引き・経費精算との連携、個人識別（RFIDカード・アプリ）、の2点が運用効率化の鍵です。</p>
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
