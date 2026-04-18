import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "非化石証書の種類と購入方法｜FIT非化石・非FIT非化石・再エネ指定の違い";
const pageDescription =
  "非化石証書の3分類と購入手段を整理し、トラッキング情報の扱いやScope2反映の実務を解説します。";
const pageUrl = "https://simulator.eic-jp.org/non-fossil-certificate-types-purchase";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "Scope2", "非化石証書"],
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
          { name: "脱炭素・GX対応", url: "https://simulator.eic-jp.org/articles/decarbonization" },
          { name: "非化石証書の種類と購入方法" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/decarbonization" className="underline-offset-2 hover:underline">脱炭素・GX対応</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">非化石証書の種類と購入方法</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">非化石証書の種類と購入方法｜FIT非化石・非FIT非化石・再エネ指定の違い</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">非化石証書の3分類と購入手段を整理し、トラッキング情報の扱いやScope2反映の実務を解説します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">非化石証書とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">非化石証書は、非化石電源（再エネ・原子力）で発電された電力の「環境価値」を切り離して取引できるようにしたものです。2018年に創設され、日本卸電力取引所（JEPX）の非化石価値取引市場で売買されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">発行単位は1kWh単位、取引は小売電気事業者と需要家が市場を通じて行います。需要家直接取引は、制度上は2021年以降の需要家公募枠のみで、通常は小売電気事業者経由で購入します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3種類の証書の違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①FIT非化石証書：FIT電源由来。再エネ指定ありで、価格は最低0.3円/kWh、取引量は最大規模。②非FIT非化石証書（再エネ指定あり）：卒FIT太陽光・大規模水力などが由来。③非FIT非化石証書（再エネ指定なし）：原子力も含む。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">RE100や再エネ調達を明示したい場合は再エネ指定ありの証書が必要です。単に非化石比率を上げるだけなら指定なしで十分です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Scope2算定への反映</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">証書はマーケット基準のScope2算定で使えますが、トラッキング情報付きである必要があります。FIT非化石証書は2021年度からトラッキング対応され、発電所・電源種別が明記されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">購入コストは、FIT非化石（再エネ指定）で0.3〜1.3円/kWh、非FIT再エネ指定でそれ以上の水準で推移しており、制度改正や需給で変動します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/decarbonization", label: "脱炭素・GX対応の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
