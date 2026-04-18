import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "EV充電器の代表的仕様・価格帯",
  source: "各メーカー公表スペック・当社調べ",
  updatedAt: "2026-04",
  chargers: [
    { type: "普通充電（ケーブル式）", outputKw: 3, priceRangeJpy: "100,000-200,000", installJpy: "200,000-500,000", subsidyEligible: true, annualKwh: 2000 },
    { type: "普通充電（200V）", outputKw: 6, priceRangeJpy: "200,000-400,000", installJpy: "300,000-700,000", subsidyEligible: true, annualKwh: 4500 },
    { type: "急速充電（中出力）", outputKw: 25, priceRangeJpy: "1,500,000-3,000,000", installJpy: "1,000,000-2,500,000", subsidyEligible: true, annualKwh: 20000 },
    { type: "急速充電（高出力）", outputKw: 50, priceRangeJpy: "2,500,000-5,000,000", installJpy: "2,000,000-4,000,000", subsidyEligible: true, annualKwh: 45000 },
    { type: "超急速充電", outputKw: 150, priceRangeJpy: "5,000,000-10,000,000", installJpy: "5,000,000-10,000,000", subsidyEligible: true, annualKwh: 135000 },
  ],
  subsidies: [
    { name: "クリーンエネルギー自動車等導入促進補助金（CEV）", operator: "経済産業省/環境省", coverage: "1/2〜2/3", note: "充電設備本体・工事費対象" },
    { name: "充電インフラ補助事業", operator: "自治体", coverage: "1/3〜1/2", note: "自治体により額・要件異なる" },
  ],
};

export async function GET() {
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", data: DATA },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
