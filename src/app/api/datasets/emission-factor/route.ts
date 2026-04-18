import { NextResponse } from "next/server";

export const dynamic = "force-static";

// 環境省 電気事業者別CO2排出係数 2024年度公表値（kg-CO2/kWh）
// 系統平均（基礎排出係数）の代表値
const EMISSION_FACTORS = {
  description: "電気事業者別CO2排出係数（基礎排出係数）代表値 kg-CO2/kWh",
  source: "環境省 温対法に基づく事業者別排出係数（2024年度公表値）",
  methodology: "各エリアの主要一般送配電事業者の平均値を参考値として掲載",
  updatedAt: "2026-04",
  byArea: [
    { area: "北海道", utility: "北海道電力", basicFactor: 0.000596, adjustedFactor: 0.000483 },
    { area: "東北", utility: "東北電力", basicFactor: 0.000457, adjustedFactor: 0.000411 },
    { area: "東京", utility: "東京電力エナジーパートナー", basicFactor: 0.000441, adjustedFactor: 0.000393 },
    { area: "中部", utility: "中部電力ミライズ", basicFactor: 0.000425, adjustedFactor: 0.000378 },
    { area: "北陸", utility: "北陸電力", basicFactor: 0.000484, adjustedFactor: 0.000437 },
    { area: "関西", utility: "関西電力", basicFactor: 0.000358, adjustedFactor: 0.000295 },
    { area: "中国", utility: "中国電力", basicFactor: 0.000585, adjustedFactor: 0.000529 },
    { area: "四国", utility: "四国電力", basicFactor: 0.000497, adjustedFactor: 0.000422 },
    { area: "九州", utility: "九州電力", basicFactor: 0.000370, adjustedFactor: 0.000294 },
    { area: "沖縄", utility: "沖縄電力", basicFactor: 0.000691, adjustedFactor: 0.000641 },
  ],
  trends: [
    { year: 2018, japanAverage: 0.000462 },
    { year: 2019, japanAverage: 0.000455 },
    { year: 2020, japanAverage: 0.000444 },
    { year: 2021, japanAverage: 0.000435 },
    { year: 2022, japanAverage: 0.000447 },
    { year: 2023, japanAverage: 0.000439 },
    { year: 2024, japanAverage: 0.000432 },
  ],
};

export async function GET() {
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", data: EMISSION_FACTORS },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
