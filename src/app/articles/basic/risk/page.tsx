import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqPageJsonLd } from "../../../../components/seo/JsonLd";
import AuthorBadge from "../../../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../../../components/market-data/MarketDataFaq";
import ContentCta from "../../../../components/simulator/ContentCta";
import RelatedLinks from "../../../../components/simulator/RelatedLinks";
import { getArticlesByCategory } from "../../../../lib/articles";

const pageTitle = "リスク理解の基礎知識｜法人電気料金のリスクシナリオと緊急対応";
const pageDescription =
  "法人電気料金のリスク要因と対応策を学ぶサブハブ。最終保障供給、新電力撤退、市場価格急騰、リスクシナリオ別の影響度、電力 BCP まで、リスク理解の基礎を体系的に整理。";
const publishedDate = "2026-04-25";
const pageUrl = "https://simulator.eic-jp.org/articles/basic/risk";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "リスク理解の基礎から学ぶには何から始めれば良いですか？",
    answer:
      "「最終保障供給とは」「新電力の撤退・倒産リスク」「市場連動プランの価格急騰リスク」の 3 本から始めるのが効率的です。これらは法人が直面しうる代表的な 3 つのリスクで、それぞれの仕組みと対処法を理解できれば、リスクシナリオ記事と電力 BCP 記事への接続がスムーズになります。",
  },
  {
    question: "リスクシナリオはどのように使えば良いですか？",
    answer:
      "リスクシナリオは「最悪のケース」と「想定の範囲内」を線引きするツールです。猛暑・厳冬、円安、燃料高騰、地政学リスク、新電力撤退などのシナリオごとに、自社の電気料金がどれだけ上振れするかを試算しておくと、突発事象が起きたときに慌てず判断できます。年度予算の策定時に、シナリオ別の予算予備費を設定する用途にも有効です。",
  },
  {
    question: "電力 BCP はどんな法人に必要ですか？",
    answer:
      "業種により優先度が大きく異なります。データセンター・病院・食品工場のように停電許容時間がゼロまたは数時間以内の業種では電力 BCP は必須です。一般オフィスはテレワーク移行で部分代替可能なため、優先度は下がります。まず「自社が止まると 1 時間で何円失うか」を試算し、その金額に応じて投資額を判断するのが原則です。",
  },
];

const TARGET_CATEGORY_SLUGS = [
  "last-resort-supply",
  "risk-scenarios",
  "emergency-response",
  "energy-bcp",
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 リスク",
    "最終保障供給 法人",
    "新電力 撤退 倒産",
    "電力 BCP 法人",
    "リスクシナリオ 電気料金",
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

export default function BasicRiskHubPage() {
  const articleGroups = TARGET_CATEGORY_SLUGS.map((slug) => ({
    slug,
    articles: getArticlesByCategory(slug).slice(0, 6),
  }));

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "基礎知識", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "リスク理解の基礎" },
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
          { name: "リスク理解の基礎" },
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
        <span className="text-slate-800">リスク理解の基礎</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">基礎知識ハブ ／ リスク理解</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人電気料金のリスクシナリオと緊急対応を体系的に学ぶサブハブです。最終保障供給、新電力撤退、市場価格急騰、リスクシナリオ別の影響度、電力 BCP までを整理し、突発事象が起きたときに慌てず判断できる基盤を構築できます。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このハブの学習目的</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          リスク理解の基礎を学ぶ目的は 3 つあります。第一に「法人が直面し得る電力リスクの 3 大カテゴリ（停電・契約・市場価格）を整理し、自社の優先度を判断できる状態になる」こと。第二に「最終保障供給などの緊急時の制度を把握し、新電力撤退や供給停止に直面しても適切に対処できるようになる」こと。第三に「リスクシナリオを使って年度予算の予備費を設定し、突発事象に備えた財務計画を策定できるようになる」こと。これにより、平時の意思決定だけでなく有事の対応力が大幅に向上します。
        </p>
      </section>

      {articleGroups.map((group) => (
        <section key={group.slug} className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            {group.slug === "last-resort-supply"
              ? "最終保障供給を知る"
              : group.slug === "risk-scenarios"
              ? "リスクシナリオ別に知る"
              : group.slug === "emergency-response"
              ? "緊急対応の準備"
              : "電力 BCP・災害対策"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {group.slug === "last-resort-supply"
              ? "新電力の撤退・契約打ち切りで適用される最終保障供給の仕組み、料金水準、復帰手順を整理した記事群です。"
              : group.slug === "risk-scenarios"
              ? "猛暑・厳冬・円安・燃料高騰・地政学リスクなど、想定すべきリスクシナリオ別の影響額と備え方を整理した記事群です。"
              : group.slug === "emergency-response"
              ? "新電力撤退・供給停止リスクなど、法人が直面しうる緊急事態への事前準備と対処法を解説した記事群です。"
              : "停電・需給ひっ迫・新電力撤退に備える非常用電源、蓄電池、マイクログリッドの選び方と事業継続設計を解説した記事群です。"}
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
        <RelatedLinks
          heading="必読記事"
          links={[
            {
              href: "/what-is-capacity-contribution",
              title: "容量拠出金とは（必読）",
              description: "リスク評価で必ず把握すべき制度",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="リスク理解の基礎を踏まえたら、契約系と料金構造の基礎にも進むと、法人電気料金の全体像が体系的に整理できます。"
          links={[
            { href: "/articles/basic", label: "基礎知識ハブに戻る" },
            { href: "/articles/basic/contracts", label: "契約系の基礎を学ぶ" },
            { href: "/articles/basic/pricing", label: "料金構造の基礎を学ぶ" },
          ]}
        />
      </div>
    </main>
  );
}
