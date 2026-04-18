import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "デマンドレスポンス（DR）プログラムの類型と報酬水準",
  source: "経産省 需給調整市場 / 各アグリゲーター公表情報",
  updatedAt: "2026-04",
  programs: [
    { name: "需給調整市場 三次調整力①", responseTime: "15-45分", minCapacity: "5MW以上", reward: "12,000-25,000円/kW・年", operator: "一般送配電事業者" },
    { name: "需給調整市場 三次調整力②", responseTime: "45分", minCapacity: "5MW以上", reward: "8,000-15,000円/kW・年", operator: "一般送配電事業者" },
    { name: "容量市場 発動指令", responseTime: "3時間前通知", minCapacity: "1MW以上", reward: "容量市場約定価格連動", operator: "OCCTO" },
    { name: "卸電力市場アービトラージ型DR", responseTime: "前日予告", minCapacity: "100kW以上", reward: "価格差収益", operator: "アグリゲーター経由" },
    { name: "地域BCP型DR", responseTime: "緊急時", minCapacity: "500kW以上", reward: "契約個別", operator: "自治体・地域新電力" },
  ],
  aggregators: [
    { name: "エナリス", services: "工場・大型ビル向けDRアグリゲーション" },
    { name: "アイ・グリッド・ソリューションズ", services: "小売店・物流センター向け" },
    { name: "エナジア", services: "中部電力系、中部エリア中心" },
    { name: "関電エネルギーソリューション", services: "関電系、関西エリア中心" },
  ],
  readinessCriteria: [
    "調整可能容量を特定できている（500kW以上推奨）",
    "通信設備・スマートメーターが整備済み",
    "業務への影響を社内調整できる",
    "長期契約（3-5年）に対応できる",
  ],
};

export async function GET() {
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", data: DATA },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400", "Access-Control-Allow-Origin": "*" } },
  );
}
