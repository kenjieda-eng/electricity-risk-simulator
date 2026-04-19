import { NextResponse } from "next/server";
import {
  JEPX_FY_LABELS, JEPX_FY_AVG, JEPX_FY_MEDIAN, JEPX_FY_MAX, JEPX_FY_MIN, JEPX_FY_STD,
  DEMAND_FY_LABELS, DEMAND_FY_TOTAL,
  SEASON_LABELS, SEASON_DEMAND, SEASON_PRICE_AVG, SEASON_PRICE_STD,
  WARMING_YEARS, WARMING_TOKYO, WARMING_OSAKA, WARMING_SAPPORO,
  DECILE_LABELS, DECILE_DEMAND, DECILE_PRICE, DECILE_STD,
} from "../../../../data/marketData";

export const dynamic = "force-static";

/**
 * 市場データのCSV配布エンドポイント。
 * Excel / Pandas / Rにそのまま取り込める形でJEPX年次・需要・季節・温暖化・分位別のコア時系列を提供します。
 * CC BY 4.0 ライセンス、出典明記で自由利用可能。
 */
export async function GET() {
  const lines: string[] = [];
  lines.push("# 出典: 一般社団法人エネルギー情報センター (https://simulator.eic-jp.org)");
  lines.push("# ライセンス: CC BY 4.0 (attribution required)");
  lines.push(`# 生成日時: ${new Date().toISOString()}`);
  lines.push("");

  // Section 1: JEPX年度別統計
  lines.push("# [SECTION] JEPX FY Statistics (JPY/kWh)");
  lines.push("fy,avg,median,max,min,std");
  for (let i = 0; i < JEPX_FY_LABELS.length; i++) {
    lines.push([
      JEPX_FY_LABELS[i],
      JEPX_FY_AVG[i] ?? "",
      JEPX_FY_MEDIAN[i] ?? "",
      JEPX_FY_MAX[i] ?? "",
      JEPX_FY_MIN[i] ?? "",
      JEPX_FY_STD[i] ?? "",
    ].join(","));
  }
  lines.push("");

  // Section 2: 需要総量
  lines.push("# [SECTION] Demand FY Total (TWh)");
  lines.push("fy,total_twh");
  for (let i = 0; i < DEMAND_FY_LABELS.length; i++) {
    lines.push(`${DEMAND_FY_LABELS[i]},${DEMAND_FY_TOTAL[i] ?? ""}`);
  }
  lines.push("");

  // Section 3: 季節別
  lines.push("# [SECTION] Seasonal Demand & Price");
  lines.push("season,demand,price_avg,price_std");
  for (let i = 0; i < SEASON_LABELS.length; i++) {
    lines.push([
      SEASON_LABELS[i],
      SEASON_DEMAND[i] ?? "",
      SEASON_PRICE_AVG[i] ?? "",
      SEASON_PRICE_STD[i] ?? "",
    ].join(","));
  }
  lines.push("");

  // Section 4: 温暖化トレンド
  lines.push("# [SECTION] Warming Trend (Annual Average Temp)");
  lines.push("year,tokyo,osaka,sapporo");
  for (let i = 0; i < WARMING_YEARS.length; i++) {
    lines.push([
      WARMING_YEARS[i],
      WARMING_TOKYO[i] ?? "",
      WARMING_OSAKA[i] ?? "",
      WARMING_SAPPORO[i] ?? "",
    ].join(","));
  }
  lines.push("");

  // Section 5: 需要分位別価格リスク
  lines.push("# [SECTION] Demand Decile vs Price");
  lines.push("decile,demand,price,std");
  for (let i = 0; i < DECILE_LABELS.length; i++) {
    lines.push([
      DECILE_LABELS[i],
      DECILE_DEMAND[i] ?? "",
      DECILE_PRICE[i] ?? "",
      DECILE_STD[i] ?? "",
    ].join(","));
  }
  lines.push("");

  const body = lines.join("\n");
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="market-data.csv"',
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
