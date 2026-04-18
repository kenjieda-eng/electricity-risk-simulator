import { NextResponse } from "next/server";

export const dynamic = "force-static";

const BLACKOUTS = [
  { date: "2011-03-11", location: "東日本全域", cause: "東日本大震災", duration: "数時間〜数週間", affectedHouseholds: 8500000 },
  { date: "2018-09-06", location: "北海道全域", cause: "北海道胆振東部地震→ブラックアウト", duration: "約2日", affectedHouseholds: 2950000 },
  { date: "2019-09-09", location: "千葉県", cause: "台風15号", duration: "最大2週間超", affectedHouseholds: 934000 },
  { date: "2020-09-06", location: "九州", cause: "台風10号", duration: "最大2日", affectedHouseholds: 470000 },
  { date: "2022-03-16", location: "東京・東北", cause: "福島県沖地震（火力発電停止）", duration: "約3時間", affectedHouseholds: 2200000 },
  { date: "2022-03-22", location: "東京・東北", cause: "需給ひっ迫警報（寒波・火力停止）", duration: "1日", affectedHouseholds: 0, note: "実停電回避、節電要請のみ" },
  { date: "2022-06-27", location: "東京", cause: "需給ひっ迫注意報（猛暑）", duration: "3日", affectedHouseholds: 0, note: "警報発令なし・節電要請" },
  { date: "2023-01-24", location: "西日本", cause: "大寒波・電力供給ひっ迫", duration: "1日", affectedHouseholds: 0, note: "融通・節電で乗切" },
  { date: "2023-09-08", location: "千葉", cause: "台風13号・線状降水帯", duration: "最大5日", affectedHouseholds: 160000 },
  { date: "2024-01-01", location: "能登半島", cause: "能登半島地震", duration: "最大数週間", affectedHouseholds: 40000 },
  { date: "2024-11-20", location: "東北", cause: "大雪・倒木による送電線被害", duration: "最大2日", affectedHouseholds: 18000 },
  { date: "2025-08-15", location: "九州", cause: "台風10号", duration: "最大3日", affectedHouseholds: 85000 },
];

export async function GET() {
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", total: BLACKOUTS.length, events: BLACKOUTS },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
