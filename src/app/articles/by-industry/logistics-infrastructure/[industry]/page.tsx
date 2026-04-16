import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LogisticsInfrastructureIndustryArticlePage from "../../../../../components/articles/LogisticsInfrastructureIndustryArticlePage";
import {
  getLogisticsInfrastructureIndustryArticle,
  getLogisticsInfrastructureIndustrySlugs,
} from "../../../../../lib/industryLogisticsInfrastructureArticles";
import { getIndustryMiddleCategory } from "../../../../../lib/articleIndustryCategories";
import { ArticleJsonLd } from "../../../../../components/seo/JsonLd";

type PageParams = {
  industry: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const middle = "logistics-infrastructure";

export function generateStaticParams() {
  return getLogisticsInfrastructureIndustrySlugs().map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;

  const article = getLogisticsInfrastructureIndustryArticle(industry);

  if (!article) {
    return {};
  }

  const canonicalPath = `https://simulator.eic-jp.org/articles/by-industry/${middle}/${industry}`;

  return {
    title: article.metadataTitle,
    description: article.metadataDescription,
    ...(article.keywords?.length ? { keywords: article.keywords } : {}),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: article.metadataTitle,
      description: article.metadataDescription,
      url: canonicalPath,
      siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
      locale: "ja_JP",
      type: "article",
      images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: article.metadataTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metadataTitle,
      description: article.metadataDescription,
      images: ["/twitter-default.png"],
    },
  };
}

export default async function LogisticsInfrastructureIndustryArticleRoute({ params }: PageProps) {
  const { industry } = await params;

  const article = getLogisticsInfrastructureIndustryArticle(industry);

  if (!article) {
    notFound();
  }

  const middleCategory = getIndustryMiddleCategory(middle);

  return (
    <>
      <ArticleJsonLd
        headline={article.metadataTitle}
        description={article.metadataDescription}
        url={`https://simulator.eic-jp.org/articles/by-industry/${middle}/${industry}`}
        datePublished="2025-04-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "業種別", url: "https://simulator.eic-jp.org/articles/by-industry" },
          { name: middleCategory?.name ?? "物流・インフラ系", url: `https://simulator.eic-jp.org/articles/by-industry/${middle}` },
          { name: article.name },
        ]}
      />
      <LogisticsInfrastructureIndustryArticlePage article={article} />
    </>
  );
}
