import type { Metadata } from "next";
import HomePageClient from "./_components/HomePageClient";

export const metadata: Metadata = {
  title: "法人向け電気料金リスクシミュレーター | 電気料金上昇リスクを試算",
  description:
    "法人向けに、契約条件や価格上昇リスク要因をもとに、年間の電気料金変動や上昇リスクを試算できるシミュレーターです。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/",
  },
  openGraph: {
    title: "法人向け電気料金リスクシミュレーター | 電気料金上昇リスクを試算",
    description:
      "法人向けに、契約条件や価格上昇リスク要因をもとに、年間の電気料金変動や上昇リスクを試算できるシミュレーターです。",
    url: "https://simulator.eic-jp.org/",
    siteName: "法人向け電気料金リスクシミュレーター",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "法人向け電気料金リスクシミュレーター | 電気料金上昇リスクを試算",
    description:
      "法人向けに、契約条件や価格上昇リスク要因をもとに、年間の電気料金変動や上昇リスクを試算できるシミュレーターです。",
  },
};

export default function Page() {
  return <HomePageClient />;
}
