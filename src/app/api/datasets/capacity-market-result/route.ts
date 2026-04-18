import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "容量市場オークション結果（メイン・追加・長期脱炭素）",
  source: "電力広域的運営推進機関（OCCTO）公表資料",
  updatedAt: "2026-04",
  note: "円/kW（年額）。経過措置により実際の費用転嫁は段階的",
  mainAuctions: [
    { deliveryYear: "2024", auctionYear: "2020", clearingPrice: 14137, totalMW: 178817 },
    { deliveryYear: "2025", auctionYear: "2021", clearingPrice: 3495, totalMW: 163901 },
    { deliveryYear: "2026", auctionYear: "2022", clearingPrice: 5242, totalMW: 169577 },
    { deliveryYear: "2027", auctionYear: "2023", clearingPrice: 6537, totalMW: 175134 },
    { deliveryYear: "2028", auctionYear: "2024", clearingPrice: 8245, totalMW: 178120 },
    { deliveryYear: "2029", auctionYear: "2025", clearingPrice: 10450, totalMW: 179400 },
  ],
  longTermDecarbonization: [
    { auctionYear: "2024", targetMW: 2000, clearingPrice: "非公表", note: "初回、脱炭素電源向け" },
    { auctionYear: "2025", targetMW: 2500, clearingPrice: "非公表", note: "" },
  ],
  costPassthrough: {
    description: "小売電気事業者経由で需要家に転嫁。経過措置期間は段階的",
    currentStatus: "2024年度から実供給・拠出金発生。低圧含む全需要家に転嫁",
  },
};

export async function GET() {
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", data: DATA },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400", "Access-Control-Allow-Origin": "*" } },
  );
}
