import { NextResponse } from "next/server";
import * as demandData from "../../../data/demandData";
import * as weatherData from "../../../data/weatherData";
import * as priceAdjustment from "../../../data/priceAdjustmentHistory";
import * as jepxData from "../../../data/jepxData";

export const dynamic = "force-static";

function pickExports(mod: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(mod)) {
    if (Array.isArray(v) || (typeof v === "object" && v !== null)) {
      out[k] = v;
    }
  }
  return out;
}

export async function GET() {
  return NextResponse.json(
    {
      source: "https://simulator.eic-jp.org",
      license: "CC BY 4.0 (attribution required)",
      generatedAt: new Date().toISOString(),
      attribution: {
        author: "一般社団法人エネルギー情報センター",
        citation: "電気料金上昇リスクシミュレーター（simulator.eic-jp.org）より引用",
      },
      datasets: {
        demand: pickExports(demandData),
        weather: pickExports(weatherData),
        priceAdjustment: pickExports(priceAdjustment),
        jepx: pickExports(jepxData),
      },
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
