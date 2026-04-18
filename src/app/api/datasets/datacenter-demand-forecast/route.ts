import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "データセンター電力需要予測（日本・世界）",
  source: "IEA / OCCTO / 経産省 DC 政策 / 当社試算",
  updatedAt: "2026-04",
  japanForecast: [
    { year: 2024, demandTWh: 18, shareOfTotal: 2.0 },
    { year: 2026, demandTWh: 23, shareOfTotal: 2.5 },
    { year: 2028, demandTWh: 30, shareOfTotal: 3.2 },
    { year: 2030, demandTWh: 40, shareOfTotal: 4.3 },
    { year: 2035, demandTWh: 55, shareOfTotal: 5.8 },
    { year: 2040, demandTWh: 70, shareOfTotal: 7.2 },
  ],
  worldForecast: [
    { year: 2024, demandTWh: 460, shareOfTotal: 1.7 },
    { year: 2026, demandTWh: 600, shareOfTotal: 2.1 },
    { year: 2030, demandTWh: 950, shareOfTotal: 3.0 },
    { year: 2035, demandTWh: 1400, shareOfTotal: 3.8 },
  ],
  pueBenchmark: {
    industryAverage: 1.55,
    hyperscaleTarget: 1.15,
    bestInClass: 1.08,
    worstCase: 2.20,
  },
  majorHubs: [
    { location: "印西エリア（千葉）", description: "首都圏最大のDC集積地", approxCapacityMW: 800 },
    { location: "京阪奈エリア", description: "西日本のDC拠点", approxCapacityMW: 200 },
    { location: "石狩・千歳", description: "冷涼気候活用型", approxCapacityMW: 150 },
    { location: "福岡エリア", description: "アジア接続ハブ", approxCapacityMW: 100 },
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
