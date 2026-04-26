import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqPageJsonLd } from "../../../../components/seo/JsonLd";
import AuthorBadge from "../../../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../../../components/market-data/MarketDataFaq";
import ContentCta from "../../../../components/simulator/ContentCta";
import { getArticlesByCategory } from "../../../../lib/articles";

const pageTitle = "契約系の基礎知識｜法人向け電力契約・約款・制度改正タイムライン";
const pageDescription =
  "法人向け電力契約の基礎を学ぶサブハブ。契約メニューの選び方、契約書・約款の読み方、制度改正タイムラインを体系的に整理し、契約見直しの判断基盤を構築できます。";
const publishedDate = "2026-04-25";
const pageUrl = "https://simulator.eic-jp.org/articles/basic/contracts";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "契約系の基礎知識から学び始めるべき記事はどれですか？",
    answer:
      "「市場連動プランとは」「固定プランとは」「市場連動プランと固定プランの違い」の 3 本から始めることをおすすめします。法人電力契約の選択軸が体系的に理解でき、その後の各論記事（向き不向き判定、違約金、契約期間など）への接続がスムーズになります。",
  },
  {
    question: "契約書・約款の読み方はどこから学べますか？",
    answer:
      "「電力契約の用語集」と「契約書・約款の読み方」系の記事を起点に、法務視点の記事へ進む順序が効率的です。供給約款の主要条項、不可抗力条項、自動更新条項、料金改定条項、違約金条項を押さえれば、契約交渉と更新判断の精度が大幅に上がります。",
  },
  {
    question: "制度改正タイムラインは実務にどう使いますか？",
    answer:
      "容量市場、需給調整市場、託送料金、省エネ法、GX 推進法など、法人電気料金に影響する制度改正は数年単位で順次施行されます。タイムラインで先回りに把握しておくと、契約タイミングの最適化や予算策定の精度向上、社内説明資料の作成が容易になります。",
  },
];

const TARGET_CATEGORY_SLUGS = ["plan-types", "contract-legal", "regulation-timeline"] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電力契約 基礎",
    "電力契約 約款 読み方",
    "契約メニュー 選び方",
    "市場連動 固定 違い",
    "制度改正 電力 タイムライン",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

export default function BasicContractsHubPage() {
  const articleGroups = TARGET_CATEGORY_SLUGS.map((slug) => ({
    slug,
    articles: getArticlesByCategory(slug).slice(0, 8),
  }));

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "基礎知識", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "契約系の基礎" },
        ]}
      />
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        dateModified={publishedDate}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "基礎知識", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "契約系の基礎" },
        ]}
        faq={FAQ_ITEMS}
      />
      <FaqPageJsonLd faqs={FAQ_ITEMS} />

      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
        <span className="px-2">›</span>
        <Link href="/articles/basic" className="underline-offset-2 hover:underline">基礎知識</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">契約系の基礎</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">基礎知識ハブ ／ 契約系</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          契約メニューの選び方、契約書・約款の読み方、制度改正タイムラインを体系的にまとめた契約系基礎知識のサブハブです。法人電力契約の選択軸（市場連動 vs 固定）から、約款の読み解き方、関連する制度改正までを一連の流れで学べます。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このハブの学習目的</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          契約系の基礎を学ぶ目的は 3 つあります。第一に「契約メニューの違いを理解して、自社に最適なプランタイプを判断できる状態になる」こと。第二に「契約書・約款の主要条項を読み解いて、不利な条件で契約しないための眼を養う」こと。第三に「制度改正の時系列を把握して、契約更新タイミングと社内予算策定を最適化する」こと。これらが揃うと、電力契約は『言われるがまま』ではなく『戦略的に選ぶ』対象に変わります。
        </p>
      </section>

      {articleGroups.map((group) => (
        <section key={group.slug} className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            {group.slug === "plan-types"
              ? "契約メニューの違いを知る"
              : group.slug === "contract-legal"
              ? "契約書・約款の読み方"
              : "制度改正タイムライン"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {group.slug === "plan-types"
              ? "市場連動・固定・両者のハイブリッドなど、契約メニューの構造と選び方を解説する記事群です。"
              : group.slug === "contract-legal"
              ? "供給約款・契約書の主要条項を法務視点で読み解く記事群。違約金・自動更新・不可抗力条項を中心に整理しています。"
              : "電力自由化以降の制度改正と今後のロードマップ。容量市場・託送料金・GX 推進法などの施行時期と影響を時系列で確認できます。"}
          </p>
          {group.articles.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">このカテゴリの記事は準備中です。</p>
          ) : (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {group.articles.map((article) => (
                <article key={article.slug} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-base font-semibold text-slate-900">
                    <Link href={`/${article.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{article.description}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
        <div className="mt-4">
          <MarketDataFaq items={FAQ_ITEMS} />
        </div>
      </section>

      <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="契約系の基礎を踏まえたら、料金構造の基礎とリスク理解の基礎にも進むと、法人電気料金の全体像が体系的に整理できます。"
          links={[
            { href: "/articles/basic", label: "基礎知識ハブに戻る" },
            { href: "/articles/basic/pricing", label: "料金構造の基礎を学ぶ" },
            { href: "/articles/basic/risk", label: "リスク理解の基礎を学ぶ" },
          ]}
        />
      </div>
    </main>
  );
}
