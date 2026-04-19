import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getArticlesByCategory,
  getArticlesBySlugs,
  getLatestArticles,
  getSortedCategories,
} from "../../lib/articles";
import {
  INDUSTRY_ARTICLES_CATEGORY_CARD,
  INDUSTRY_ARTICLES_QUICK_GUIDE_CARD,
  INDUSTRY_MIDDLE_CATEGORIES,
} from "../../lib/articleIndustryCategories";
import { ARTICLES_THEME_ROWS, CATEGORY_HUB_SPOTLIGHT } from "../../lib/articleHubFeatured";
import type { ArticleCategorySlug } from "../../data/articles";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import { CATEGORY_MAJOR_GROUPS } from "../../lib/articleCategoryGroups";
import { ARTICLE_PERSONA_ENTRANCES } from "../../lib/articlePersonaEntrances";

const pageTitle = "法人向け電気料金の基礎知識";
const pageDescription =
  "法人向け電気料金の見直しや比較の前に押さえたい基礎知識を、テーマ別に整理した解説ページ一覧です。料金の仕組み、上昇要因、契約メニューの違い、見直し時の確認ポイントを、必要なテーマから確認できます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電力契約見直し", "電力会社比較"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/articles",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/articles",
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

const quickGuideCards = [
  {
    title: "初めての方へ",
    description: "電気料金の構造や請求書・見積書の見方から確認したい方向けです。",
    ctaLabel: "基礎から知るへ",
    href: "/articles/basic",
    icon: "/icons/articles/book-guide.svg",
    alt: "開いたガイドブックのアイコン",
  },
  {
    title: "見直しを検討中の方へ",
    description: "契約更新や比較検討の前に、見直しの進め方を整理したい方向けです。",
    ctaLabel: "見直しポイントを知るへ",
    href: "/articles/review-points",
    icon: "/icons/articles/checklist-document.svg",
    alt: "チェック付き書類のアイコン",
  },
  {
    title: "月次の動向を見たい方へ",
    description: "補助政策や単価推移を確認し、次月以降の予算判断につなげたい方向けです。",
    ctaLabel: "法人電気料金振り返りへ",
    href: "/business-electricity-retrospective",
    icon: "/icons/articles/trend-chart.svg",
    alt: "推移チャートのアイコン",
  },
  INDUSTRY_ARTICLES_QUICK_GUIDE_CARD,
] as const;

const categoryDescriptions: Record<string, string> = {
  basic: "料金の基本構造や請求書・見積書の見方を確認できます。",
  "price-increase": "料金上昇の背景を燃料・市場・制度の観点で整理します。",
  "price-trends": "推移データと制度変化から高止まりの背景を確認できます。",
  "plan-types": "市場連動と固定を中心に契約メニューの違いを比較できます。",
  "review-points": "見直し準備から比較・切替まで実務の流れを整理できます。",
  "last-resort-supply": "最終保障供給の対象、料金、切替の基本を確認できます。",
  "risk-scenarios": "リスク要因別の上振れパターンと確認順を整理できます。",
  "power-procurement": "電力会社の仕入れ・調達構造を、JEPXから再エネ価値まで段階的に把握できます。",
  "for-executives": "経営層・CFO向けに、電気料金の財務インパクトや取締役会報告、ESG開示の論点を整理できます。",
  decarbonization: "Scope2算定、RE100、非化石証書、GX-ETSなど脱炭素対応を整理します。",
  "corporate-ppa": "オンサイト・オフサイト・バーチャルPPAの違いと契約・会計の論点を整理します。",
  "energy-dx": "BEMS/FEMS/EMS、AI最適化、スマートメーターデータ活用を整理します。",
  "energy-bcp": "停電・需給ひっ迫・新電力撤退時の電源確保と事業継続を整理します。",
  "sme-guide": "低圧・小規模事業者向けに、限られた予算で成果を出す手順を整理します。",
  "accounting-tax": "勘定科目・インボイス・蓄電池の減価償却など経理処理を整理します。",
  glossary: "契約・市場・設備・制度の専門用語を分野別に整理した用語集です。",
  faq: "「電気代なぜ高い」「契約見直し何から」など検索されやすい疑問のFAQ集です。",
  "regulation-timeline": "電力自由化・容量市場・GX-ETSなど制度改正の時系列と影響を整理します。",
  "ev-charging": "EV充電設備の契約区分、基本料金影響、補助金を整理します。",
  "contract-legal": "電力契約書の主要条項、不可抗力、自動更新を法務視点で整理します。",
  "ma-organizational-change": "合併・分社・事業譲渡時の電力契約承継と再契約手続きを整理します。",
  "global-energy": "海外拠点の電気料金、エネルギー戦略、多国籍企業の脱炭素対応を整理します。",
  "datacenter-ai-demand": "AI時代のデータセンター電力需要急増、立地、PUE最適化を整理します。",
};

const categoryIcons: Record<string, { src: string; alt: string }> = {
  basic: { src: "/icons/articles/book-guide.svg", alt: "ガイドブックのアイコン" },
  "price-increase": { src: "/icons/articles/electricity-plug.svg", alt: "電力プラグのアイコン" },
  "price-trends": { src: "/icons/articles/trend-chart.svg", alt: "折れ線グラフのアイコン" },
  "plan-types": { src: "/icons/articles/factory-building.svg", alt: "事業所のアイコン" },
  "review-points": { src: "/icons/articles/checklist-document.svg", alt: "チェックリストのアイコン" },
  "last-resort-supply": { src: "/icons/articles/shield-safety.svg", alt: "保護を示す盾のアイコン" },
  "risk-scenarios": { src: "/icons/articles/warning-risk.svg", alt: "リスク注意のアイコン" },
  "power-procurement": { src: "/icons/articles/network-procurement.svg", alt: "調達ネットワークのアイコン" },
  "monthly-review": { src: "/icons/articles/trend-chart.svg", alt: "月次推移のアイコン" },
  "industry-guide": { src: "/icons/articles/factory-building.svg", alt: "業種別事業所のアイコン" },
  "energy-equipment": { src: "/icons/articles/battery-solar.svg", alt: "蓄電池・太陽光のアイコン" },
  "internal-explanation": { src: "/icons/articles/checklist-document.svg", alt: "社内説明・稟議のアイコン" },
  "diagnostic-tools": { src: "/icons/articles/question-faq.svg", alt: "診断・チェックツールのアイコン" },
  "case-studies": { src: "/icons/articles/book-guide.svg", alt: "事例集のアイコン" },
  "emergency-response": { src: "/icons/articles/warning-risk.svg", alt: "緊急対応のアイコン" },
  municipality: { src: "/icons/articles/map-region.svg", alt: "自治体・公共のアイコン" },
  benchmarks: { src: "/icons/articles/trend-chart.svg", alt: "相場データのアイコン" },
  subsidies: { src: "/icons/articles/coin-subsidy.svg", alt: "補助金・助成金のアイコン" },
  "for-executives": { src: "/icons/articles/briefcase-executive.svg", alt: "経営層向けのアイコン" },
  "by-region": { src: "/icons/articles/map-region.svg", alt: "地域別のアイコン" },
  "market-data": { src: "/icons/articles/trend-chart.svg", alt: "市場データのアイコン" },
  decarbonization: { src: "/icons/articles/leaf-eco.svg", alt: "脱炭素・GXのアイコン" },
  "corporate-ppa": { src: "/icons/articles/leaf-eco.svg", alt: "コーポレートPPAのアイコン" },
  "energy-dx": { src: "/icons/articles/circuit-dx.svg", alt: "エネマネ・DXのアイコン" },
  "energy-bcp": { src: "/icons/articles/shield-safety.svg", alt: "電力BCPのアイコン" },
  "sme-guide": { src: "/icons/articles/factory-building.svg", alt: "中小企業向けのアイコン" },
  "accounting-tax": { src: "/icons/articles/calculator.svg", alt: "経理・税務のアイコン" },
  glossary: { src: "/icons/articles/book-guide.svg", alt: "用語集のアイコン" },
  faq: { src: "/icons/articles/question-faq.svg", alt: "FAQのアイコン" },
  "regulation-timeline": { src: "/icons/articles/timeline-scroll.svg", alt: "制度改正タイムラインのアイコン" },
  "ev-charging": { src: "/icons/articles/ev-charger.svg", alt: "EV充電のアイコン" },
  "contract-legal": { src: "/icons/articles/contract-legal.svg", alt: "契約書・約款のアイコン" },
  "ma-organizational-change": { src: "/icons/articles/briefcase-executive.svg", alt: "M&A・組織再編のアイコン" },
  "global-energy": { src: "/icons/articles/globe-world.svg", alt: "海外拠点のアイコン" },
  "datacenter-ai-demand": { src: "/icons/articles/server-rack.svg", alt: "データセンター・AIのアイコン" },
};

const starterArticleSlugs = [
  "business-electricity-bill-breakdown",
  "why-business-electricity-prices-rise",
  "market-linked-vs-fixed",
  "how-to-start-electricity-contract-review",
  "when-to-review-electricity-contract",
];

const learningCategories = getSortedCategories().filter((category) => category.group === "learning");
const monthlyCategory = getSortedCategories().find((category) => category.slug === "monthly-review");

function quickSlugsForCategoryCard(slug: ArticleCategorySlug): string[] {
  const spotlight = CATEGORY_HUB_SPOTLIGHT[slug];
  if (spotlight) {
    return spotlight.slugs.slice(0, 3);
  }
  const category = learningCategories.find((c) => c.slug === slug);
  return category ? category.recommendedReadingOrder.slice(0, 3) : [];
}

export default function ArticlesPage() {
  const latestArticles = getLatestArticles(3);
  const starterArticles = getArticlesBySlugs(starterArticleSlugs);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人向け電気料金の基礎知識" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-6 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <Image src="/icons/articles/book-guide.svg" alt="基礎知識ガイドのアイコン" width={36} height={36} />
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{pageDescription}</p>

        <nav
          className="mt-5 flex flex-wrap gap-x-4 gap-y-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
          aria-label="サイト内の主な入口"
        >
          <span className="font-semibold text-slate-900">主な入口:</span>
          <Link href="/how-to" className="text-sky-700 underline-offset-2 hover:underline">
            シミュレーターの使い方
          </Link>
          <span className="text-slate-300" aria-hidden>
            |
          </span>
          <Link href="/compare" className="text-sky-700 underline-offset-2 hover:underline">
            料金メニューの比較・診断
          </Link>
          <span className="text-slate-300" aria-hidden>
            |
          </span>
          <Link href="/articles/basic" className="text-sky-700 underline-offset-2 hover:underline">
            基礎から知る
          </Link>
          <span className="text-slate-300" aria-hidden>
            |
          </span>
          <Link href="/articles/price-increase" className="text-sky-700 underline-offset-2 hover:underline">
            料金が上がる理由
          </Link>
          <span className="text-slate-300" aria-hidden>
            |
          </span>
          <Link href="/articles/risk-scenarios" className="text-sky-700 underline-offset-2 hover:underline">
            リスクシナリオ
          </Link>
          <span className="text-slate-300" aria-hidden>
            |
          </span>
          <Link href="/business-electricity-retrospective" className="text-sky-700 underline-offset-2 hover:underline">
            法人電気料金振り返り
          </Link>
        </nav>

      </header>

      <section className="mt-8" aria-labelledby="persona-entrances-heading">
        <h2 id="persona-entrances-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          役割から読み始める
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          担当業務や立場に合わせて「どこから読めば最短か」を3ペルソナで整理しました。該当するカードから、推奨順に読み進められます。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {ARTICLE_PERSONA_ENTRANCES.map((persona) => (
            <article
              key={persona.key}
              className="flex h-full flex-col rounded-xl border-2 border-sky-300 bg-gradient-to-br from-sky-50 to-white p-5"
            >
              <h3 className="text-lg font-semibold text-slate-900">{persona.title}</h3>
              <p className="mt-1 text-xs font-semibold text-sky-700">{persona.subtitle}</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{persona.description}</p>
              <div className="mt-4 border-t border-sky-200/70 pt-3">
                <p className="text-xs font-semibold text-slate-500">このペルソナに最適な読み順</p>
                <ul className="mt-2 space-y-2 text-sm">
                  {persona.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-semibold text-sky-700 underline-offset-2 hover:underline"
                      >
                        {link.label}
                      </Link>
                      <p className="mt-0.5 text-xs leading-5 text-slate-600">{link.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8" aria-labelledby="quick-guide-heading">
        <h2 id="quick-guide-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          目的から読み始める
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          読み始めやすい4つの入口です。ペルソナに当てはまらない場合も、この中から最も近い目的を選んでください。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {quickGuideCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <Image src={card.icon} alt={card.alt} width={39} height={39} />
                <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
              <Link
                href={card.href}
                className="mt-3 inline-flex rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                {card.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8" aria-labelledby="platform-tools">
        <h2 id="platform-tools" className="text-2xl font-semibold tracking-tight text-slate-900">
          プラットフォーム機能
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          読むだけで終わらせず「読む→考える→診断→行動」を一気通貫で進めるためのツール群です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <Link href="/journey" className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 transition hover:bg-sky-100">
            <p className="text-xs font-semibold text-sky-700">JOURNEY</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">一気通貫ジャーニー</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">読む→考える→診断→行動の4ステップガイド</p>
          </Link>
          <Link href="/benchmark" className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 transition hover:bg-sky-100">
            <p className="text-xs font-semibold text-sky-700">BENCHMARK</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">業種×規模 ベンチマーク</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">月額電気代を業種平均と即座に比較</p>
          </Link>
          <Link href="/concierge" className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 transition hover:bg-sky-100">
            <p className="text-xs font-semibold text-sky-700">AI</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">AI コンシェルジュ</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">35カテゴリを横断検索・意図判定</p>
          </Link>
          <Link href="/knowledge-graph" className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 transition hover:bg-sky-100">
            <p className="text-xs font-semibold text-sky-700">GRAPH</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">ナレッジグラフ</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">カテゴリ・記事の意味関係マップ</p>
          </Link>
          <Link href="/downloads" className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 transition hover:bg-sky-100">
            <p className="text-xs font-semibold text-sky-700">DOWNLOADS</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">実務テンプレ10種</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">稟議書・比較表・議会スライドなど</p>
          </Link>
        </div>
      </section>

      <section className="mt-8" aria-labelledby="theme-hub-heading">
        <h2 id="theme-hub-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          テーマから読み始める
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          カテゴリ全体に入る前に、文脈の近い代表記事から入ると読み進めやすい組み合わせです。
        </p>
        <div className="mt-5 space-y-8">
          {ARTICLES_THEME_ROWS.map((row) => {
            const articles = row.slugList.length ? getArticlesBySlugs(row.slugList) : [];
            return (
              <section key={row.key} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{row.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">{row.intro}</p>
                  </div>
                  <Link
                    href={row.categoryHref}
                    className="mt-2 inline-flex shrink-0 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 sm:mt-0"
                  >
                    カテゴリを見る
                  </Link>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {articles.map((article) => (
                    <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-4">
                      <h4 className="text-base font-semibold text-slate-900">
                        <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                          {article.title}
                        </Link>
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{article.description}</p>
                      <p className="mt-2 text-xs text-slate-500">最終更新日: {article.publishedAt}</p>
                    </article>
                  ))}
                  {row.extraCards?.map((card) => (
                    <article key={card.href} className="rounded-xl border border-sky-200 bg-sky-50/80 p-4">
                      <h4 className="text-base font-semibold text-slate-900">
                        <Link href={card.href} className="underline-offset-2 hover:underline">
                          {card.title}
                        </Link>
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="mt-8" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          カテゴリから探す
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          全カテゴリを4つの大分類にまとめました。初期状態はすべて開いており、閉じたブロックもタイトルをクリックで再展開できます。
        </p>
        <nav aria-label="大分類" className="mt-4 flex flex-wrap gap-2">
          {CATEGORY_MAJOR_GROUPS.map((group) => (
            <a
              key={group.key}
              href={`#group-${group.key}`}
              className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-800"
            >
              {group.title}
            </a>
          ))}
        </nav>
        <div className="mt-6 space-y-8">
          {CATEGORY_MAJOR_GROUPS.map((group) => {
            const renderCategoryCard = (slug: ArticleCategorySlug) => {
              const category = learningCategories.find((c) => c.slug === slug);
              if (!category) return null;
              const icon = categoryIcons[category.slug] ?? categoryIcons.basic;
              const quick = getArticlesBySlugs(quickSlugsForCategoryCard(category.slug));
              return (
                <article key={category.slug} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Image src={icon.src} alt={icon.alt} width={36} height={36} />
                    <p className="text-xs font-semibold tracking-wide text-slate-500">カテゴリ {category.order}</p>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{category.name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-700">{categoryDescriptions[category.slug] ?? category.description}</p>
                  <p className="mt-2 text-sm text-slate-600">記事数: {getArticlesByCategory(category.slug).length}件</p>
                  {quick.length ? (
                    <div className="mt-3 border-t border-slate-100 pt-3">
                      <p className="text-xs font-semibold text-slate-500">代表記事</p>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        {quick.map((a) => (
                          <li key={a.slug}>
                            <Link href={`/${a.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                              {a.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <Link
                    href={`/articles/${category.slug}`}
                    className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                  >
                    カテゴリを見る
                  </Link>
                </article>
              );
            };

            const industryHubCardForGroup =
              group.key === "practice" ? (
                <article key="by-industry-hub" className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={INDUSTRY_ARTICLES_CATEGORY_CARD.icon.src}
                      alt={INDUSTRY_ARTICLES_CATEGORY_CARD.icon.alt}
                      width={36}
                      height={36}
                    />
                    <p className="text-xs font-semibold tracking-wide text-slate-500">カテゴリ {INDUSTRY_ARTICLES_CATEGORY_CARD.order}</p>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{INDUSTRY_ARTICLES_CATEGORY_CARD.name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-700">{INDUSTRY_ARTICLES_CATEGORY_CARD.description}</p>
                  <p className="mt-2 text-sm text-slate-600">記事数: {INDUSTRY_ARTICLES_CATEGORY_CARD.articleCount}件</p>
                  <div className="mt-3 border-t border-slate-100 pt-3">
                    <p className="text-xs font-semibold text-slate-500">代表カテゴリ</p>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {INDUSTRY_MIDDLE_CATEGORIES.slice(0, 3).map((middle) => (
                        <li key={middle.slug}>
                          <Link href={`/articles/by-industry/${middle.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                            {middle.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={INDUSTRY_ARTICLES_CATEGORY_CARD.href} className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline">
                    カテゴリを見る
                  </Link>
                </article>
              ) : null;

            const groupCategoryCount =
              group.categorySlugs.filter((slug) => learningCategories.some((c) => c.slug === slug)).length +
              (industryHubCardForGroup ? 1 : 0);

            return (
              <details
                key={group.key}
                id={`group-${group.key}`}
                open
                className="group/details rounded-2xl border border-slate-200 bg-slate-50/60 p-5 scroll-mt-16 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  id={`group-${group.key}-title`}
                  className="flex cursor-pointer list-none items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800">
                        {groupCategoryCount}カテゴリ
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
                    </div>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">{group.description}</p>
                  </div>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 select-none text-xs font-semibold text-slate-500 transition group-open/details:rotate-180"
                  >
                    &#x25BC;
                  </span>
                </summary>
                <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {group.categorySlugs.map((slug) => renderCategoryCard(slug))}
                  {industryHubCardForGroup}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {monthlyCategory ? (
        <section className="mt-8" aria-labelledby="monthly-heading">
          <h2 id="monthly-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            月次の動向を確認する
          </h2>
          <article className="mt-3 rounded-2xl border border-sky-200 bg-sky-50 p-5">
            <div className="flex items-center gap-3">
              <Image src="/icons/articles/trend-chart.svg" alt="月次推移のアイコン" width={36} height={36} />
              <h3 className="text-lg font-semibold text-slate-900">{monthlyCategory.name}</h3>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              補助政策や単価推移をもとに、法人向け電気料金の月次動向を整理したシリーズです。直近の動きを確認し、予算・調達判断の参考にできます。
            </p>
            <p className="mt-2 text-sm text-slate-600">記事数: {getArticlesByCategory(monthlyCategory.slug).length}件</p>
            <Link
              href="/business-electricity-retrospective"
              className="mt-3 inline-flex rounded-md border border-sky-300 bg-white px-3 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
            >
              カテゴリを見る
            </Link>
          </article>
        </section>
      ) : null}

      <section className="mt-8" aria-labelledby="starter-heading">
        <div className="flex items-center gap-3">
          <Image src="/icons/articles/book-guide.svg" alt="初心者向けガイドのアイコン" width={33} height={33} />
          <h2 id="starter-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            初めて読むならこの5本
          </h2>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {starterArticles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-700">{article.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-xs text-slate-500">最終更新日: {article.publishedAt}</span>
                <Link
                  href={`/${article.slug}`}
                  className="inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                >
                  詳しく見る
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8" aria-labelledby="latest-heading">
        <h2 id="latest-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          新着記事
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {latestArticles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">{article.publishedAt}</p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-700">{article.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8" aria-labelledby="deep-dive-heading">
        <h2 id="deep-dive-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          注目テーマを深掘りする
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          カテゴリ横断で関連性の高いページをピックアップしています。気になるテーマから読み進められます。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <Link href="/capacity-contribution-explained" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
            <p className="text-xs font-semibold text-amber-700">NEW</p>
            <p className="mt-1 text-base font-semibold text-slate-900">容量拠出金とは</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">2024年度から始まった新たな制度負担の仕組みと影響を解説</p>
          </Link>
          <Link href="/market-linked-plan" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
            <p className="text-base font-semibold text-slate-900">市場連動プランとは</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">市場価格に連動するプランの特徴と注意点</p>
          </Link>
          <Link href="/fixed-price-plan" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
            <p className="text-base font-semibold text-slate-900">固定プランとは</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">単価が安定しやすい固定プランの特徴と活用場面</p>
          </Link>
          <Link href="/electricity-price-trend-2019-2025" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
            <p className="text-base font-semibold text-slate-900">法人向け電気料金は高止まりしているのか</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">推移データをもとに急騰後の高止まり実態を確認</p>
          </Link>
          <Link href="/what-is-electricity-price-risk-scenario" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
            <p className="text-base font-semibold text-slate-900">電気料金のリスクシナリオとは</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">リスクシナリオの意味と予算策定での使い方</p>
          </Link>
          <Link href="/articles/by-industry/manufacturing" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
            <p className="text-base font-semibold text-slate-900">業種別ガイド：製造業</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">鉄鋼・化学・自動車・半導体など製造業の電力リスク</p>
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
