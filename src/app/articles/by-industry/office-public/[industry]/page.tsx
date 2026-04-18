import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OfficePublicIndustryArticlePage from "../../../../../components/articles/OfficePublicIndustryArticlePage";
import {
  getOfficePublicIndustryArticle,
  getOfficePublicIndustrySlugs,
} from "../../../../../lib/industryOfficePublicArticles";
import { getIndustryMiddleCategory } from "../../../../../lib/articleIndustryCategories";
import { ArticleJsonLd } from "../../../../../components/seo/JsonLd";

type PageParams = {
  industry: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const middle = "office-public";

export function generateStaticParams() {
  return getOfficePublicIndustrySlugs().map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;

  const article = getOfficePublicIndustryArticle(industry);

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
      siteName: "法人電気料金ナビ",
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

export default async function OfficePublicIndustryArticleRoute({ params }: PageProps) {
  const { industry } = await params;

  const article = getOfficePublicIndustryArticle(industry);

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
          { name: middleCategory?.name ?? "業務・公共系", url: `https://simulator.eic-jp.org/articles/by-industry/${middle}` },
          { name: article.name },
        ]}
      />
      <OfficePublicIndustryArticlePage article={article} />
    </>
  );
}
