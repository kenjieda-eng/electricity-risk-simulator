import type { Metadata } from "next";
import SupermarketLargeScaleIndustryPage from "../../[middle]/[industry]/page";

const pageTitle = "スーパーマーケットの電気料金はなぜ上がりやすい？値上がりリスク・契約プラン・見直しポイント";
const pageDescription =
  "スーパーマーケットは、冷蔵・冷凍設備を長時間動かし続けるため、電気料金の値上がり影響を受けやすい業種です。大型スーパーの電気の使い方、上がりやすい理由、契約プランの考え方、確認したいポイント、見直しの方向性を整理します。";
const canonicalPath = "https://simulator.eic-jp.org/articles/by-industry/commercial/supermarket-large-scale";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "スーパーマーケット 電気料金",
    "大型スーパー 電気代",
    "冷蔵 冷凍 設備 電気代",
    "市場連動 固定単価 スーパー",
    "スーパー 電力契約 見直し",
  ],
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalPath,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function CommercialSupermarketLargeScalePage() {
  return (
    <SupermarketLargeScaleIndustryPage
      params={Promise.resolve({
        middle: "commercial",
        industry: "supermarket-large-scale",
      })}
    />
  );
}
