import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "世界主要国の電気料金比較｜日本の水準を国際ベンチマークで見る";
const pageDescription =
  "日本・米国・欧州主要国・東南アジア・中東の産業用電気料金を比較し、日本の水準がどこに位置するかを整理します。";
const pageUrl = "https://simulator.eic-jp.org/global-electricity-price-benchmark";

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
          { name: "海外拠点・グローバルエネルギー", url: "https://simulator.eic-jp.org/articles/global-energy" },
          { name: "世界主要国の電気料金比較" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/global-energy" className="underline-offset-2 hover:underline">海外拠点・グローバルエネルギー</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">世界主要国の電気料金比較</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">世界主要国の電気料金比較｜日本の水準を国際ベンチマークで見る</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">日本・米国・欧州主要国・東南アジア・中東の産業用電気料金を比較し、日本の水準がどこに位置するかを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">産業用電気料金の世界比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">IEA統計による2023〜2024年の産業用電気料金は、日本約25円/kWh、ドイツ30〜35円/kWh、英国40円/kWh超、米国10〜15円/kWh、中国8〜12円/kWh、ベトナム10〜13円/kWhが概観です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本は先進国のなかでは中位〜やや高め、アジア諸国と比較すると明確に高い水準です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">価格差の背景</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本の高価格の要因は、化石燃料輸入比率の高さ、原子力稼働率の低さ、再エネ賦課金、送配電インフラの維持コスト、電源構成の多様性確保コストなどが挙げられます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一方、米国の安価さはシェールガス・原子力の寄与、中国の安価さは石炭火力の大規模運用が背景です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">拠点戦略への示唆</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">新規生産拠点の立地判断では、電気料金は用地費・人件費・物流費と並ぶ重要コスト要因です。中長期の価格推移（脱炭素・炭素税導入）を踏まえた判断が必要です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/global-energy", title: "海外拠点・グローバルエネルギー", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/global-energy", label: "海外拠点・グローバルエネルギーの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
