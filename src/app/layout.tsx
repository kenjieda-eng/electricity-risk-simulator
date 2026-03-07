import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "法人向け 電気料金上昇リスク シナリオ分析",
  description: "法人向け電気料金シミュレーションツール",
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
