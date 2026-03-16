import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://simulator.eic-jp.org"),
  title: "法人向け 電気料金上昇リスク シナリオ分析",
  description: "法人向け電気料金シミュレーションツール",
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
