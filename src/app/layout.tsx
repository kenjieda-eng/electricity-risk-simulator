import type { Metadata } from "next";
import { Suspense } from "react";
import { GoogleAnalytics } from "../components/analytics/GoogleAnalytics";
import ArticleScrollTracker from "../components/analytics/ArticleScrollTracker";
import { Footer } from "../components/Footer";
import { PublicHeader } from "../components/PublicHeader";
import { WebSiteJsonLd } from "../components/seo/JsonLd";
import BackToTop from "../components/BackToTop";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "https://simulator.eic-jp.org/feed.xml",
    },
  },
  verification: {
    google: "fO91QoZppqZzi-hvqHuPm5m_Cjdb5Lh4gmpAnynN_8c",
  },
};

const SUPABASE_ORIGIN = (() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) return null;
  try {
    return new URL(url).origin;
  } catch {
    return null;
  }
})();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {SUPABASE_ORIGIN && (
          <>
            <link rel="preconnect" href={SUPABASE_ORIGIN} crossOrigin="" />
            <link rel="dns-prefetch" href={SUPABASE_ORIGIN} />
          </>
        )}
      </head>
      <body id="page-top" className="bg-violet-50/30">
        <WebSiteJsonLd
          name={SITE_NAME}
          url={SITE_URL}
          description={SITE_DESCRIPTION}
        />
        <PublicHeader />
        <main className="bg-violet-50/30">{children}</main>
        <Footer />
        <BackToTop />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <ArticleScrollTracker />
      </body>
    </html>
  );
}
