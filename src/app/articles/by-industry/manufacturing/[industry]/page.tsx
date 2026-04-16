import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ManufacturingIndustryArticlePage from "../../../../../components/articles/ManufacturingIndustryArticlePage";
import {
  getManufacturingIndustryArticle,
  getManufacturingIndustrySlugs,
} from "../../../../../lib/industryManufacturingArticles";
import { getIndustryMiddleCategory } from "../../../../../lib/articleIndustryCategories";
import { BreadcrumbJsonLd } from "../../../../../components/seo/JsonLd";

type PageParams = {
  industry: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const middle = "manufacturing";

export function generateStaticParams() {
  return getManufacturingIndustrySlugs().map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;

  const article = getManufacturingIndustryArticle(industry);

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

export default async function ManufacturingIndustryArticleRoute({ params }: PageProps) {
  const { industry } = await params;

  const article = getManufacturingIndustryArticle(industry);

  if (!article) {
    notFound();
  }

  const middleCategory = getIndustryMiddleCategory(middle);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎知識", url: "https://simulator.eic-jp.org/articles" },
          { name: "業種別", url: "https://simulator.eic-jp.org/articles/by-industry" },
          { name: middleCategory?.name ?? "製造業系", url: `https://simulator.eic-jp.org/articles/by-industry/${middle}` },
          { name: article.name },
        ]}
      />
      <ManufacturingIndustryArticlePage article={article} />
    </>
  );
}
