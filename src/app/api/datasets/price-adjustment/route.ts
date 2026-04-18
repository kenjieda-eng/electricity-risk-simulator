import { NextResponse } from "next/server";
import * as priceAdjustment from "../../../../data/priceAdjustmentHistory";

export const dynamic = "force-static";

export async function GET() {
  const datasets: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(priceAdjustment)) {
    if (Array.isArray(v) || (typeof v === "object" && v !== null)) {
      datasets[k] = v;
    }
  }
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", datasets },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
