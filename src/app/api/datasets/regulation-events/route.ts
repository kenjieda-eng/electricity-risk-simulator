import { NextResponse } from "next/server";

export const dynamic = "force-static";

const EVENTS = [
  { date: "2000-03", category: "自由化", title: "特別高圧の小売自由化開始", impact: "high" },
  { date: "2004-04", category: "自由化", title: "高圧500kW以上の自由化", impact: "high" },
  { date: "2005-04", category: "自由化", title: "高圧50kW以上の自由化", impact: "high" },
  { date: "2011-03", category: "危機対応", title: "東日本大震災・原発事故", impact: "critical" },
  { date: "2012-07", category: "再エネ", title: "FIT制度開始", impact: "high" },
  { date: "2015-04", category: "市場", title: "電力広域的運営推進機関（OCCTO）設立", impact: "medium" },
  { date: "2016-04", category: "自由化", title: "小売全面自由化（家庭・業務用含む）", impact: "critical" },
  { date: "2017-04", category: "自由化", title: "ガス全面自由化", impact: "medium" },
  { date: "2020-04", category: "市場", title: "発送電分離（一般送配電事業者の法的分離）", impact: "high" },
  { date: "2020-12", category: "市場危機", title: "冬季JEPX価格高騰（最高251円/kWh）", impact: "critical" },
  { date: "2020-04", category: "市場", title: "容量市場 第1回メインオークション開札", impact: "high" },
  { date: "2022-03", category: "市場危機", title: "需給ひっ迫警報（東京・東北）初発令", impact: "critical" },
  { date: "2022-06", category: "市場危機", title: "新電力14社撤退（燃料高騰）", impact: "critical" },
  { date: "2023-06", category: "FIP", title: "FIP制度開始", impact: "medium" },
  { date: "2024-04", category: "市場", title: "容量市場 実供給開始", impact: "high" },
  { date: "2024-04", category: "市場", title: "長期脱炭素電源オークション初回", impact: "high" },
  { date: "2025-04", category: "再エネ", title: "再エネ賦課金 3.98円/kWh（過去最高水準）", impact: "high" },
  { date: "2026-04", category: "脱炭素", title: "GX-ETS本格稼働", impact: "critical" },
  { date: "2027-04", category: "市場", title: "託送料金 レベニューキャップ第2期", impact: "medium" },
  { date: "2028-04", category: "脱炭素", title: "GX-ETS 対象拡大（予定）", impact: "high" },
  { date: "2032-07", category: "再エネ", title: "FIT初期10年案件 買取期間満了開始", impact: "high" },
  { date: "2033-04", category: "脱炭素", title: "カーボンプライシング本格化（予定）", impact: "critical" },
];

export async function GET() {
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", total: EVENTS.length, events: EVENTS },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
