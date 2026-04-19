import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import { getSortedCategories, getArticlesByCategory } from "../../lib/articles";
import { CATEGORY_MAJOR_GROUPS } from "../../lib/articleCategoryGroups";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "ナレッジグラフ｜カテゴリと記事の意味関係マップ";
const pageDescription =
  "法人電気料金シミュレーターの35カテゴリ・300超記事の関係性を可視化。4大分類から各カテゴリ、主要記事・用語集・診断・比較への意味的リンクをたどれます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://simulator.eic-jp.org/knowledge-graph" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/knowledge-graph",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

/** 主要な意味的接続（カテゴリ間のナレッジリンク） */
const KNOWLEDGE_EDGES: Array<{ from: string; to: string; relation: string }> = [
  { from: "basic", to: "price-increase", relation: "基礎→上昇要因" },
  { from: "price-increase", to: "price-trends", relation: "要因→推移" },
  { from: "price-increase", to: "regulation-timeline", relation: "要因の制度背景" },
  { from: "price-trends", to: "market-data", relation: "定性推移→定量分析" },
  { from: "plan-types", to: "review-points", relation: "メニュー理解→見直し" },
  { from: "plan-types", to: "industry-guide", relation: "メニュー×業種適性" },
  { from: "review-points", to: "benchmarks", relation: "見直し→相場確認" },
  { from: "review-points", to: "internal-explanation", relation: "見直し→社内説明" },
  { from: "review-points", to: "case-studies", relation: "見直し→事例参照" },
  { from: "last-resort-supply", to: "emergency-response", relation: "制度→初動" },
  { from: "risk-scenarios", to: "for-executives", relation: "リスク→経営判断" },
  { from: "power-procurement", to: "market-data", relation: "調達→市場データ" },
  { from: "energy-equipment", to: "subsidies", relation: "設備→補助金" },
  { from: "energy-equipment", to: "ev-charging", relation: "設備→EV" },
  { from: "decarbonization", to: "corporate-ppa", relation: "脱炭素→長期調達" },
  { from: "decarbonization", to: "for-executives", relation: "脱炭素→開示" },
  { from: "energy-bcp", to: "emergency-response", relation: "備え→初動" },
  { from: "energy-dx", to: "energy-equipment", relation: "DX→設備最適化" },
  { from: "datacenter-ai-demand", to: "corporate-ppa", relation: "AI需要→長期調達" },
  { from: "datacenter-ai-demand", to: "market-data", relation: "AI需要→市場波及" },
  { from: "global-energy", to: "datacenter-ai-demand", relation: "海外拠点×AI" },
  { from: "ma-organizational-change", to: "contract-legal", relation: "M&A→契約条項" },
  { from: "municipality", to: "subsidies", relation: "自治体→交付金" },
  { from: "sme-guide", to: "basic", relation: "中小企業→基礎" },
  { from: "accounting-tax", to: "subsidies", relation: "税務→補助金併用" },
  { from: "glossary", to: "faq", relation: "用語→よくある質問" },
];

const GROUP_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  fundamentals: { bg: "bg-sky-100", border: "border-sky-400", text: "text-sky-900" },
  practice: { bg: "bg-emerald-100", border: "border-emerald-400", text: "text-emerald-900" },
  attributes: { bg: "bg-amber-100", border: "border-amber-400", text: "text-amber-900" },
  frontier: { bg: "bg-violet-100", border: "border-violet-400", text: "text-violet-900" },
};

export default function KnowledgeGraphPage() {
  const categories = getSortedCategories();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "ナレッジグラフ" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">ナレッジグラフ</span>
        </nav>

        <header className="mt-4 rounded-xl border border-violet-200 bg-violet-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">ナレッジグラフ</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            35カテゴリ・300超記事を「4大分類」「意味的リンク」で俯瞰できる地図です。
            関連するカテゴリ間の矢印と、各カテゴリ→代表記事の関係をまとめて表示します。
          </p>
        </header>

        <section className="mt-8" aria-labelledby="group-overview">
          <h2 id="group-overview" className="text-2xl font-semibold text-slate-900">4大分類 俯瞰図</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">各ブロックのカテゴリ数と、ブロック間の典型的な読み進め動線を示します。</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {CATEGORY_MAJOR_GROUPS.map((group) => {
              const c = GROUP_COLORS[group.key] ?? GROUP_COLORS.fundamentals;
              return (
                <article key={group.key} className={`rounded-xl border-2 ${c.border} ${c.bg} p-4`}>
                  <h3 className={`text-lg font-bold ${c.text}`}>{group.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-700">{group.description}</p>
                  <p className={`mt-3 text-xs font-semibold ${c.text}`}>カテゴリ数: {group.categorySlugs.length}</p>
                  <ul className="mt-2 space-y-1 text-xs leading-5">
                    {group.categorySlugs.slice(0, 5).map((slug) => {
                      const cat = categories.find((c) => c.slug === slug);
                      if (!cat) return null;
                      return (
                        <li key={slug}>
                          <Link href={`/articles/${slug}`} className={`${c.text} underline-offset-2 hover:underline`}>
                            cat{cat.order}. {cat.name}
                          </Link>
                        </li>
                      );
                    })}
                    {group.categorySlugs.length > 5 ? (
                      <li className="text-xs text-slate-600">ほか{group.categorySlugs.length - 5}カテゴリ</li>
                    ) : null}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-10" aria-labelledby="edges-heading">
          <h2 id="edges-heading" className="text-2xl font-semibold text-slate-900">カテゴリ間の意味的リンク</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            読者が自然にたどる26本の意味的接続を一覧化。起点カテゴリから矢印先のカテゴリへ読み進めると、理解が深まります。
          </p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
            <table className="min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">起点カテゴリ</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">→</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">移動先カテゴリ</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">関係</th>
                </tr>
              </thead>
              <tbody>
                {KNOWLEDGE_EDGES.map((edge, i) => {
                  const from = categories.find((c) => c.slug === edge.from);
                  const to = categories.find((c) => c.slug === edge.to);
                  if (!from || !to) return null;
                  return (
                    <tr key={i} className="align-top">
                      <td className="border border-slate-200 px-3 py-2">
                        <Link href={`/articles/${edge.from}`} className="text-sky-700 underline-offset-2 hover:underline">
                          {from.name}
                        </Link>
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-center">→</td>
                      <td className="border border-slate-200 px-3 py-2">
                        <Link href={`/articles/${edge.to}`} className="text-sky-700 underline-offset-2 hover:underline">
                          {to.name}
                        </Link>
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">{edge.relation}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="per-category">
          <h2 id="per-category" className="text-2xl font-semibold text-slate-900">各カテゴリの記事マップ</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            カテゴリごとに、代表記事と記事数を一覧表示。各リンクから直接カテゴリページにアクセスできます。
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {categories.filter((c) => c.group === "learning").map((cat) => {
              const articles = getArticlesByCategory(cat.slug);
              const top = articles.slice(0, 3);
              return (
                <article key={cat.slug} className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <Link href={`/articles/${cat.slug}`} className="text-base font-semibold text-slate-900 underline-offset-2 hover:underline">
                      cat{cat.order}. {cat.name}
                    </Link>
                    <span className="text-xs text-slate-500">{articles.length}本</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs leading-5">
                    {top.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/${a.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">データ提供</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            本グラフの元データは <Link href="/api/rag-index" className="text-sky-700 underline-offset-2 hover:underline">/api/rag-index</Link>（JSON）で配布しています。
            外部のナレッジグラフ可視化ツール（Neo4j、Gephi 等）や RAG ストアに投入することも可能です。
          </p>
        </section>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

      </main>
    </>
  );
}
