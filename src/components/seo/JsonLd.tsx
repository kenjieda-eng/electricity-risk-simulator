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
        jobTitle: "理事",
        url: "https://simulator.eic-jp.org/kenji-eda",
        sameAs: [
          "https://simulator.eic-jp.org/kenji-eda",
          "https://eic-jp.org",
          "https://pps-net.org",
          "https://ja.wikipedia.org/wiki/%E6%B1%9F%E7%94%B0%E5%81%A5%E4%BA%8C",
          "https://news.yahoo.co.jp/users/expert/edakenjiex/articles?page=1",
        ],
        worksFor: {
          "@type": "Organization",
          name: "一般社団法人エネルギー情報センター",
          url: "https://eic-jp.org",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "慶應義塾大学 経済学部",
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

type FaqPageJsonLdProps = {
  faqs: { question: string; answer: string }[];
};

export function FaqPageJsonLd({ faqs }: FaqPageJsonLdProps) {
  if (!faqs.length) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

type OrganizationJsonLdProps = {
  /** Defaults to the EIC organization when omitted. */
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
};

export function OrganizationJsonLd({
  name = "一般社団法人エネルギー情報センター",
  url = "https://eic-jp.org",
  logo = "https://simulator.eic-jp.org/ogp-default.png",
  sameAs = [
    "https://eic-jp.org",
    "https://pps-net.org",
    "https://simulator.eic-jp.org",
  ],
}: OrganizationJsonLdProps = {}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    sameAs,
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
