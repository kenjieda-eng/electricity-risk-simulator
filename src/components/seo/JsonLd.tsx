type ArticleJsonLdProps = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  breadcrumbItems?: { name: string; url?: string }[];
  faq?: { question: string; answer: string }[];
};

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumbItems,
  faq,
}: ArticleJsonLdProps) {
  const graphs: Record<string, unknown>[] = [
    {
      "@type": "Article",
      headline,
      description,
      url,
      datePublished,
      dateModified: dateModified ?? datePublished,
      author: {
        "@type": "Person",
        name: "江田健二",
        jobTitle: "代表理事",
        worksFor: {
          "@type": "Organization",
          name: "一般社団法人エネルギー情報センター",
          url: "https://eic-jp.org",
        },
      },
      publisher: {
        "@type": "Organization",
        name: "一般社団法人エネルギー情報センター",
        url: "https://eic-jp.org",
        logo: {
          "@type": "ImageObject",
          url: "https://simulator.eic-jp.org/ogp-default.png",
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: "https://simulator.eic-jp.org/ogp-default.png",
      inLanguage: "ja",
    },
  ];

  if (breadcrumbItems && breadcrumbItems.length > 0) {
    graphs.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        ...(item.url ? { item: item.url } : {}),
      })),
    });
  }

  if (faq && faq.length > 0) {
    graphs.push({
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graphs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

type WebSiteJsonLdProps = {
  name: string;
  url: string;
  description: string;
};

type BreadcrumbJsonLdProps = {
  items: { name: string; url?: string }[];
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd({ name, url, description }: WebSiteJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    publisher: {
      "@type": "Organization",
      name: "一般社団法人エネルギー情報センター",
      url: "https://eic-jp.org",
    },
    inLanguage: "ja",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
