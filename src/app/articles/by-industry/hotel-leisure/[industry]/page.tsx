import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HotelLeisureIndustryArticlePage from "../../../../../components/articles/HotelLeisureIndustryArticlePage";
import {
  getHotelLeisureIndustryArticle,
  getHotelLeisureIndustrySlugs,
} from "../../../../../lib/industryHotelLeisureArticles";

type PageParams = {
  industry: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const middle = "hotel-leisure";

export function generateStaticParams() {
  return getHotelLeisureIndustrySlugs().map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;

  const article = getHotelLeisureIndustryArticle(industry);

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

export default async function HotelLeisureIndustryArticleRoute({ params }: PageProps) {
  const { industry } = await params;

  const article = getHotelLeisureIndustryArticle(industry);

  if (!article) {
    notFound();
  }

  return <HotelLeisureIndustryArticlePage article={article} />;
}
