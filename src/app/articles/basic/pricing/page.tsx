import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqPageJsonLd } from "../../../../components/seo/JsonLd";
import AuthorBadge from "../../../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../../../components/market-data/MarketDataFaq";
import ContentCta from "../../../../components/simulator/ContentCta";
import { getArticlesByCategory } from "../../../../lib/articles";

const pageTitle = "料金構造の基礎知識｜法人電気料金の値上がり要因と推移を完全マップ";
const pageDescription =
  "法人電気料金の値上がり要因と推移を学ぶサブハブ。燃料費調整額、再エネ賦課金、容量拠出金、市場価格調整、燃料別価格動向まで、料金構造の基礎を体系的に整理。";
const publishedDate = "2026-04-25";
const pageUrl = "https://simulator.eic-jp.org/articles/basic/pricing";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "料金構造の基礎から学ぶには何から始めれば良いですか？",
    answer:
      "「法人の電気料金が上がる理由」と「請求書の構成要素」の 2 本から始めるのが効率的です。電気料金がなぜ複雑なのか、どの費目が変動するのかを把握できれば、その後の各論記事（燃調費、再エネ賦課金、容量拠出金など）が「全体のどの部分の話か」を意識しながら読めるようになります。",
  },
  {
    question: "燃料費調整額・再エネ賦課金・容量拠出金はどう違いますか？",
    answer:
      "燃料費調整額は化石燃料の輸入価格変動を毎月反映する仕組み、再エネ賦課金は再エネ電力の固定価格買取制度（FIT/FIP）の費用を全需要家で負担する仕組み、容量拠出金は将来の供給力確保のための新制度です。3 者は独立した費目で、それぞれ別の改定タイミングと算定式があり、合計で電気料金の 20〜35% を占めます。",
  },
  {
    question: "今後 2〜3 年の電気料金推移はどう見るべきですか？",
    answer:
      "短期的には燃料価格の地政学リスクが最大の変動要因、中期的には容量拠出金の段階的増額（2026〜2028 年度）が確実なコスト増として効きます。長期的には再エネ拡大・原発再稼働による化石燃料依存度低下が下方圧力となります。3 つの要素を別々に追いかけ、シナリオ別に予算を試算することが推奨されます。",
  },
];

const TARGET_CATEGORY_SLUGS = ["price-increase", "price-trends"] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 構造",
    "燃料費調整額 仕組み",
    "再エネ賦課金 仕組み",
    "容量拠出金 仕組み",
    "電気料金 推移",
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

export default function BasicPricingHubPage() {
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
          { name: "料金構造の基礎" },
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
          { name: "料金構造の基礎" },
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
        <span className="text-slate-800">料金構造の基礎</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">基礎知識ハブ ／ 料金構造</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人電気料金の値上がり要因と推移を体系的に学ぶサブハブです。燃料費調整額、再エネ賦課金、容量拠出金、市場価格調整など複雑に絡み合う費目を分解し、過去の推移と今後の見通しを踏まえた予算策定の基盤を構築できます。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このハブの学習目的</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          料金構造の基礎を学ぶ目的は 3 つあります。第一に「電気料金の費目を分解して理解し、どこが変動して請求が動いているかを特定できる状態になる」こと。第二に「燃料費調整額・再エネ賦課金・容量拠出金などの仕組みと算定式を押さえ、改定タイミングを先読みできるようになる」こと。第三に「過去の推移と今後 2〜3 年の見通しを把握し、シナリオ別に予算を試算できるようになる」こと。これにより、契約見直しと予算策定が定量的に進められるようになります。
        </p>
      </section>

      {articleGroups.map((group) => (
        <section key={group.slug} className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            {group.slug === "price-increase" ? "電気料金が上がる理由を知る" : "電気料金の推移と高止まり"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {group.slug === "price-increase"
              ? "燃料費調整額・再エネ賦課金・市場価格調整など、料金上昇の主要要因を仕組みから解説する記事群です。"
              : "電気料金の年度別・契約区分別の推移データと、今後の高止まり予想に関する解説記事群です。"}
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
          description="料金構造の基礎を踏まえたら、契約系の基礎とリスク理解の基礎にも進むと、法人電気料金の全体像が体系的に整理できます。"
          links={[
            { href: "/articles/basic", label: "基礎知識ハブに戻る" },
            { href: "/articles/basic/contracts", label: "契約系の基礎を学ぶ" },
            { href: "/articles/basic/risk", label: "リスク理解の基礎を学ぶ" },
          ]}
        />
      </div>
    </main>
  );
}
