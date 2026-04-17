import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "非常用電源の選び方｜ディーゼル・ガス・蓄電池・ハイブリッドの比較";
const pageDescription =
  "非常用電源の主要な種類（ディーゼル発電機・ガス発電機・蓄電池・ハイブリッド）をコスト・稼働時間・用途別に比較します。";
const pageUrl = "https://simulator.eic-jp.org/emergency-power-source-options";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "非常用電源"],
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
          { name: "電力BCP・災害対策", url: "https://simulator.eic-jp.org/articles/energy-bcp" },
          { name: "非常用電源の選び方" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-bcp" className="underline-offset-2 hover:underline">電力BCP・災害対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">非常用電源の選び方</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">非常用電源の選び方｜ディーゼル・ガス・蓄電池・ハイブリッドの比較</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">非常用電源の主要な種類（ディーゼル発電機・ガス発電機・蓄電池・ハイブリッド）をコスト・稼働時間・用途別に比較します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ディーゼル発電機</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">最も普及している非常用電源で、導入コストが比較的低く、燃料確保も容易です。出力は数十kW〜数MWまで幅広く対応。ただし燃料保管量で稼働時間が制約され、72時間連続運転には燃料タンクの増設が必要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">排気ガス・騒音の問題から、都市部のオフィスビルでは設置場所に制約が生じます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ガス発電機</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">都市ガスをそのまま利用できるため燃料補給が不要で、長時間の稼働が可能です。地震時にガス供給が途絶えるリスクはあるものの、中圧供給の場合は比較的復旧が早いです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">コジェネレーション（熱電併給）との組み合わせで、平常時の電気・熱供給にも使える二重用途が特徴です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">蓄電池・ハイブリッド</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">大容量蓄電池は瞬断対策・短時間の停電対応に有効で、太陽光と組み合わせることで日中の停電時にも継続運転が可能です。長時間停電には不向きで、発電機との併用が標準的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ハイブリッド（発電機＋蓄電池）は、発電機の起動遅延をカバーでき、瞬間的な需要増にも対応できる柔軟性が魅力です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/energy-bcp", label: "電力BCP・災害対策の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
