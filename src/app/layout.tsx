import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <body>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" aria-label="法人向け電気料金上昇、高騰リスクシミュレーターへ戻る">
              <Image
                src="/logo.png"
                alt="法人向け電気料金上昇、高騰リスクシミュレーターのロゴ"
                width={230}
                height={44}
                className="h-auto w-[210px] sm:w-[230px]"
                priority
              />
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
