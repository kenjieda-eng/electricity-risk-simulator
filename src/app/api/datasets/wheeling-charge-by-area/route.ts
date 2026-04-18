import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "9エリア託送料金（高圧・低圧）代表値",
  source: "各一般送配電事業者 託送料金認可 / レベニューキャップ第1規制期",
  updatedAt: "2026-04",
  note: "2023年4月改定値。次期改定は2028年頃。kWhあたり単価（円/kWh）",
  areas: [
    { area: "北海道", utility: "北海道電力ネットワーク", highVoltage: 2.68, lowVoltage: 9.12 },
    { area: "東北", utility: "東北電力ネットワーク", highVoltage: 2.55, lowVoltage: 8.77 },
    { area: "東京", utility: "東京電力パワーグリッド", highVoltage: 2.57, lowVoltage: 8.57 },
    { area: "中部", utility: "中部電力パワーグリッド", highVoltage: 2.50, lowVoltage: 8.75 },
    { area: "北陸", utility: "北陸電力送配電", highVoltage: 2.22, lowVoltage: 7.92 },
    { area: "関西", utility: "関西電力送配電", highVoltage: 2.35, lowVoltage: 7.89 },
    { area: "中国", utility: "中国電力ネットワーク", highVoltage: 2.51, lowVoltage: 8.72 },
    { area: "四国", utility: "四国電力送配電", highVoltage: 2.45, lowVoltage: 8.65 },
    { area: "九州", utility: "九州電力送配電", highVoltage: 2.31, lowVoltage: 8.23 },
    { area: "沖縄", utility: "沖縄電力", highVoltage: 3.12, lowVoltage: 10.56 },
  ],
  components: [
    { name: "需要家料金（基本部分）", description: "kW基本料金" },
    { name: "電力量料金", description: "kWh従量" },
    { name: "調整金", description: "燃料費調整相当分（託送側）" },
  ],
};

export async function GET() {
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", data: DATA },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400", "Access-Control-Allow-Origin": "*" } },
  );
}
