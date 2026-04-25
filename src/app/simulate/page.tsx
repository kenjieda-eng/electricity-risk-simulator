import type { Metadata } from "next";
import HomePageClient from "../_components/HomePageClient";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "電気料金上昇リスク診断｜法人電気料金ナビ";
const pageDescription =
  "法人向けに、契約条件や価格上昇・高騰リスク要因をもとに、年間の電気代と電気料金の変動や上昇リスクを試算できるシミュレーターです。30秒で診断できます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電気料金シミュレーター"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/simulate",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/simulate",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function SimulatePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "シミュレーター" },
        ]}
      />
      <section id="simulator">
        <HomePageClient />
      </section>

      <section className="mx-auto mb-8 max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
          <RelatedLinks
            heading="あわせて使いたいツール・解説"
            links={[
              {
                href: "/compare",
                title: "料金メニュー比較",
                description: "固定プランと市場連動プランの違いを比較診断",
              },
              {
                href: "/how-to",
                title: "電力料金上昇リスク診断の使い方",
                description: "入力とリスク要因の読み方をステップで確認できます。",
              },
              {
                href: "/articles",
                title: "解説記事一覧",
                description: "料金の仕組み・上昇要因・契約見直しのポイントをテーマ別に整理。",
              },
            ]}
          />
          <AuthorBadge />
        </div>
      </section>
    </>
  );
}
