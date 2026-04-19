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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
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
