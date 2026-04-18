import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "GX-ETS（排出量取引制度）が法人電気料金に与える影響｜2026年本格稼働の負担試算";
const pageDescription =
  "GX-ETSの本格稼働が電力会社と法人の電気料金に波及する仕組みを整理し、負担増の試算と備え方を解説します。";
const pageUrl = "https://simulator.eic-jp.org/gx-ets-impact-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "GX-ETS", "GX推進法"],
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
          { name: "GX-ETS（排出量取引制度）が法人電気料金に与える影響" },
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
          <span className="text-slate-800">GX-ETS（排出量取引制度）が法人電気料金に与える影響</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">GX-ETS（排出量取引制度）が法人電気料金に与える影響｜2026年本格稼働の負担試算</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">GX-ETSの本格稼働が電力会社と法人の電気料金に波及する仕組みを整理し、負担増の試算と備え方を解説します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">GX-ETSとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">GX-ETS（グリーン・トランスフォーメーション排出量取引制度）は、日本版のCap & Trade型排出量取引制度で、GX推進法に基づき2023年から試行運用が始まりました。2026年度には本格稼働し、排出量が一定規模以上の企業を対象に、排出枠の割当と取引が義務化されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力会社は発電に伴うCO2排出量が巨大なため、制度開始当初から対象事業者となる見込みです。電力会社が取得する排出枠のコストは、最終的には電力料金に転嫁される構造が想定されています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気料金への波及経路</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">GX-ETSが電気料金に波及する経路は、①電力会社が排出枠不足分を市場から購入するコストが燃料費調整額または基本単価に転嫁される、②排出係数の高い火力発電の稼働が抑制され、再エネ・原子力の比重が上がることで調達コスト構造が変わる、の2つです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">IEAや経産省資料によれば、CO2排出量1トンあたり1万円前後のカーボンプライス転嫁が想定されており、kWhあたり0.5〜2円程度の電気料金上昇要因になる試算もあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人が備えるべきアクション</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①自社のScope2排出量を把握し、GX-ETS対象となる規模か確認、②電力会社別の排出係数と電気料金の比較、③再エネ電源への切替検討、④長期契約（PPA）による価格ヘッジ、の順で備えを進めます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に製造業・物流業など電力多消費業種では、GX-ETS対応が中長期の競争力に直結するため、経営層を巻き込んだロードマップ策定が重要です。</p>
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
