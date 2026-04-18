import { NextResponse } from "next/server";
import { articleList, articleCategories } from "../../../data/articles";

export const dynamic = "force-static";

/**
 * 外部 RAG（検索拡張生成）基盤から取り込めるよう、
 * 全313記事+35カテゴリのメタ情報+サマリーを1ファイルにまとめた JSON を返します。
 * CC BY 4.0 ライセンスで配布。AI チャットコンシェルジュ・社内検索・研究利用などに活用できます。
 */
export async function GET() {
  const BASE = "https://simulator.eic-jp.org";

  const categories = articleCategories.map((c) => ({
    slug: c.slug,
    name: c.name,
    order: c.order,
    description: c.description,
    intro: c.intro,
    learnPoints: c.learnPoints,
    recommendedReadingOrder: c.recommendedReadingOrder,
    url: `${BASE}/articles/${c.slug}`,
  }));

  const articles = articleList.map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    categorySlug: a.categorySlug,
    category: a.category,
    order: a.order,
    publishedAt: a.publishedAt,
    lastVerifiedAt: a.lastVerifiedAt,
    applicationDeadline: a.applicationDeadline,
    taxYear: a.taxYear,
    dataCoverage: a.dataCoverage,
    featured: a.featured ?? false,
    url: a.slug.startsWith("business-electricity-retrospective/") ? `${BASE}/${a.slug}` : `${BASE}/${a.slug}`,
  }));

  return NextResponse.json(
    {
      source: BASE,
      license: "CC BY 4.0 (attribution required)",
      attribution: "一般社団法人エネルギー情報センター",
      generatedAt: new Date().toISOString(),
      schemaVersion: "1.0",
      usage: "Ingest this JSON into a vector store (Embedding target: title + description). Recommend chunk per article.",
      counts: {
        categories: categories.length,
        articles: articles.length,
      },
      categories,
      articles,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    },
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
}
