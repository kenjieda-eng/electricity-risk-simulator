import type { Metadata } from "next";
import { Suspense } from "react";
import { GoogleAnalytics } from "../components/analytics/GoogleAnalytics";
import { Footer } from "../components/Footer";
import { PublicHeader } from "../components/PublicHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://simulator.eic-jp.org"),
  title: "法人向け電気料金上昇、高騰リスクシミュレーター",
  description: "法人向けの電気代・電気料金の上昇、高騰リスクを試算するシミュレーションツール",
  alternates: {
    canonical: "/",
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
      <body id="page-top">
        <PublicHeader />
        <main>{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
