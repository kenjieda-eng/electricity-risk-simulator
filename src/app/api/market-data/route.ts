import { NextResponse } from "next/server";
import {
  JEPX_FY_LABELS, JEPX_FY_AVG, JEPX_FY_MEDIAN, JEPX_FY_MAX, JEPX_FY_MIN, JEPX_FY_STD, JEPX_HOURLY, JEPX_SPIKE_FY,
  DEMAND_FY_LABELS, DEMAND_FY_TOTAL, DEMAND_AREA_SHARE, DEMAND_HOURLY, DEMAND_MONTHLY,
  TEMP_BIN_LABELS, TEMP_BIN_DEMAND, TEMP_BIN_PRICE,
  SPIKE_HOURS, SPIKE_MONTHS,
  REN_SHARE_LABELS, REN_SHARE_PRICE, REN_SHARE_COUNT,
  SPREAD_MONTHS, SPREAD_TK_KYUSHU, SPREAD_TK_HOKKAIDO, SPREAD_TK_KANSAI,
  AREA_FY_PRICE,
  SEASON_LABELS, SEASON_DEMAND, SEASON_PRICE_AVG, SEASON_PRICE_STD,
  WARMING_YEARS, WARMING_TOKYO, WARMING_OSAKA, WARMING_SAPPORO,
  HEAT_YEARS, HOT_DAYS_TOKYO, HOT_DAYS_OSAKA, HOT_DAYS_NAGOYA, TROPICAL_NIGHTS_TOKYO, TROPICAL_NIGHTS_OSAKA,
  DECILE_LABELS, DECILE_DEMAND, DECILE_PRICE, DECILE_STD,
  PEAK_DATES, PEAK_VALUES,
} from "../../../data/marketData";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(
    {
      source: "https://simulator.eic-jp.org",
      license: "CC BY 4.0 (attribution required)",
      generatedAt: new Date().toISOString(),
      datasets: {
        jepx: {
          fyLabels: JEPX_FY_LABELS,
          avg: JEPX_FY_AVG,
          median: JEPX_FY_MEDIAN,
          max: JEPX_FY_MAX,
          min: JEPX_FY_MIN,
          std: JEPX_FY_STD,
          hourly: JEPX_HOURLY,
          spikesByFy: JEPX_SPIKE_FY,
        },
        demand: {
          fyLabels: DEMAND_FY_LABELS,
          fyTotal: DEMAND_FY_TOTAL,
          areaShare: DEMAND_AREA_SHARE,
          hourly: DEMAND_HOURLY,
          monthly: DEMAND_MONTHLY,
        },
        tempBin: { labels: TEMP_BIN_LABELS, demand: TEMP_BIN_DEMAND, price: TEMP_BIN_PRICE },
        spikeDist: { hours: SPIKE_HOURS, months: SPIKE_MONTHS },
        renewable: {
          shareLabels: REN_SHARE_LABELS,
          price: REN_SHARE_PRICE,
          count: REN_SHARE_COUNT,
        },
        areaSpread: {
          months: SPREAD_MONTHS,
          tkKyushu: SPREAD_TK_KYUSHU,
          tkHokkaido: SPREAD_TK_HOKKAIDO,
          tkKansai: SPREAD_TK_KANSAI,
        },
        areaFyPrice: AREA_FY_PRICE,
        season: {
          labels: SEASON_LABELS,
          demand: SEASON_DEMAND,
          priceAvg: SEASON_PRICE_AVG,
          priceStd: SEASON_PRICE_STD,
        },
        warming: {
          years: WARMING_YEARS,
          tokyo: WARMING_TOKYO,
          osaka: WARMING_OSAKA,
          sapporo: WARMING_SAPPORO,
        },
        extremeHeat: {
          years: HEAT_YEARS,
          hotDaysTokyo: HOT_DAYS_TOKYO,
          hotDaysOsaka: HOT_DAYS_OSAKA,
          hotDaysNagoya: HOT_DAYS_NAGOYA,
          tropicalNightsTokyo: TROPICAL_NIGHTS_TOKYO,
          tropicalNightsOsaka: TROPICAL_NIGHTS_OSAKA,
        },
        decile: {
          labels: DECILE_LABELS,
          demand: DECILE_DEMAND,
          price: DECILE_PRICE,
          std: DECILE_STD,
        },
        peakDays: { dates: PEAK_DATES, values: PEAK_VALUES },
      },
      attribution: {
        author: "一般社団法人エネルギー情報センター",
        url: "https://simulator.eic-jp.org/articles/market-data",
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
