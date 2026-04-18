import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "非化石証書（FIT・非FIT・再エネ指定）取引価格推移 円/kWh",
  source: "JEPX 非化石価値取引市場 公表データ",
  updatedAt: "2026-04",
  priceHistory: [
    { fy: 2020, fitAverage: 1.30, nonFitLow: 0.60, nonFitHigh: 1.20, volumeMWh: 48000 },
    { fy: 2021, fitAverage: 1.30, nonFitLow: 0.60, nonFitHigh: 1.30, volumeMWh: 320000 },
    { fy: 2022, fitAverage: 1.30, nonFitLow: 0.40, nonFitHigh: 1.30, volumeMWh: 1200000 },
    { fy: 2023, fitAverage: 0.40, nonFitLow: 0.30, nonFitHigh: 0.90, volumeMWh: 2800000 },
    { fy: 2024, fitAverage: 0.40, nonFitLow: 0.30, nonFitHigh: 0.80, volumeMWh: 3500000 },
    { fy: 2025, fitAverage: 0.40, nonFitLow: 0.30, nonFitHigh: 0.75, volumeMWh: 4200000 },
  ],
  certificateTypes: [
    { type: "FIT非化石証書（再エネ指定）", trackingAvailable: true, re100Eligible: true, priceRange: "0.40円/kWh" },
    { type: "非FIT非化石証書（再エネ指定）", trackingAvailable: true, re100Eligible: true, priceRange: "0.30-0.90円/kWh" },
    { type: "非FIT非化石証書（再エネ指定なし）", trackingAvailable: false, re100Eligible: false, priceRange: "0.10-0.40円/kWh" },
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
