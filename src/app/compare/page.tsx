import type { Metadata } from "next";
import ComparePageClient from "./ComparePageClient";

export const metadata: Metadata = {
  title: "固定プランと市場連動プランの比較 | 法人向け電気料金リスクシミュレーター",
  description:
    "法人向けに、固定プランと市場連動プランの特徴や、電気料金上昇リスクの違いを比較できるページです。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/compare",
  },
  openGraph: {
    title: "固定プランと市場連動プランの比較 | 法人向け電気料金リスクシミュレーター",
    description:
      "法人向けに、固定プランと市場連動プランの特徴や、電気料金上昇リスクの違いを比較できるページです。",
    url: "https://simulator.eic-jp.org/compare",
    siteName: "法人向け電気料金リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "固定プランと市場連動プランの比較 | 法人向け電気料金リスクシミュレーター",
    description:
      "法人向けに、固定プランと市場連動プランの特徴や、電気料金上昇リスクの違いを比較できるページです。",
  },
};

export default function ComparePage() {
  return <ComparePageClient />;
}
