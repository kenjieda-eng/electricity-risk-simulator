import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "コーポレートPPA（日本国内）市場価格帯",
  source: "当社調べ・各社公表案件・業界誌掲載情報",
  updatedAt: "2026-04",
  note: "契約規模・期間・立地・証書付帯で変動。個別案件により価格帯外のケースあり",
  priceByType: [
    { type: "オンサイト太陽光（屋根設置）", unit: "12-18円/kWh", contractYears: "15-20年", note: "自家消費型、需要家投資ゼロモデル" },
    { type: "オンサイト太陽光（地上設置）", unit: "10-15円/kWh", contractYears: "15-25年", note: "遊休地活用型" },
    { type: "オフサイトフィジカルPPA（太陽光）", unit: "11-16円/kWh", contractYears: "15-20年", note: "託送料金別途" },
    { type: "オフサイトフィジカルPPA（風力）", unit: "13-19円/kWh", contractYears: "15-25年", note: "陸上風力、海洋風力は更に高値" },
    { type: "バーチャルPPA（太陽光）", unit: "8-13円/kWh", contractYears: "10-20年", note: "差金決済、環境価値のみ需要家受領" },
    { type: "バーチャルPPA（風力）", unit: "10-15円/kWh", contractYears: "10-20年", note: "差金決済" },
  ],
  contractTermDistribution: [
    { years: "10年未満", share: 5 },
    { years: "10-15年", share: 25 },
    { years: "15-20年", share: 50 },
    { years: "20年以上", share: 20 },
  ],
  majorPlayers: [
    "自然電力", "グリーンパワーインベストメント", "オリックス", "Looop",
    "東急不動産", "シェルエネルギー・ジャパン", "リニューアブル・ジャパン",
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
