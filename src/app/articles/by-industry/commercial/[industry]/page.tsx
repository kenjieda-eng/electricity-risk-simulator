import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialIndustryArticlePage from "../../../../../components/articles/CommercialIndustryArticlePage";
import {
  getCommercialIndustryArticle,
  getCommercialIndustrySlugs,
} from "../../../../../lib/industryCommercialArticles";

type PageParams = {
  industry: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const middle = "commercial";

export function generateStaticParams() {
  return getCommercialIndustrySlugs()
    .filter((industry) => industry !== "supermarket-large-scale")
    .map((industry) => ({
    industry,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;

  const article = getCommercialIndustryArticle(industry);

  if (!article) {
    return {};
  }

  const canonicalPath = `https://simulator.eic-jp.org/articles/by-industry/${middle}/${industry}`;

  return {
    title: article.metadataTitle,
    description: article.metadataDescription,
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

export default async function CommercialIndustryArticleRoute({ params }: PageProps) {
  const { industry } = await params;

  const article = getCommercialIndustryArticle(industry);

  if (!article) {
    notFound();
  }

  return <CommercialIndustryArticlePage article={article} />;
}
