import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "オンサイトPPAとオフサイトPPAの違い｜設置条件とコスト比較";
const pageDescription =
  "オンサイトPPAとオフサイトPPAの違いを、設置場所・規模・コスト・契約期間の観点で比較し、企業タイプ別の選び方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/onsite-vs-offsite-ppa";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "コーポレートPPA"],
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
          { name: "コーポレートPPA", url: "https://simulator.eic-jp.org/articles/corporate-ppa" },
          { name: "オンサイトPPAとオフサイトPPAの違い" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/corporate-ppa" className="underline-offset-2 hover:underline">コーポレートPPA</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">オンサイトPPAとオフサイトPPAの違い</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">オンサイトPPAとオフサイトPPAの違い｜設置条件とコスト比較</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">オンサイトPPAとオフサイトPPAの違いを、設置場所・規模・コスト・契約期間の観点で比較し、企業タイプ別の選び方を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">オンサイトPPAの特徴と向き不向き</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オンサイトPPAは、企業が所有または賃借している建物屋根・敷地内駐車場・遊休地に発電事業者が太陽光パネルを設置し、発電した電力を自社が買い取る方式です。企業側の初期投資はゼロで、工事費用・メンテナンスは発電事業者負担が基本です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">向いているのは、広い屋根を持つ工場・物流倉庫・ショッピングセンター・学校・病院などです。発電容量は敷地面積で上限が決まり、自社電力需要の全てをまかなうのは難しいケースが多く、他の再エネ調達と組み合わせる運用が現実的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">オフサイトPPAの特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オフサイトPPAでは、発電事業者が自社とは離れた場所に太陽光や風力の発電所を建設し、送電網を通じて企業へ供給します。発電容量を自由に設計でき、企業の需要量に合わせたスケールで調達できる点がメリットです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ただし託送料金（送電利用料）や需給管理手数料が上乗せされるため、オンサイトよりも1kWhあたり3〜6円程度のコスト増になりやすい傾向があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">コスト・契約条件の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オンサイトは託送料不要で単価が比較的低く、初期規模は数百kW〜数MW。オフサイトは託送料ありで単価は高めだが規模は10MW以上も可能。大規模な再エネ調達を目指す場合はオフサイトが選ばれやすく、敷地条件の良い企業は両方の併用を検討します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/corporate-ppa", label: "コーポレートPPAの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
