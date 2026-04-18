import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "主要20カ国の産業用電気料金水準（代表値）",
  source: "IEA / 各国統計 / 当社調べ",
  updatedAt: "2026-04",
  note: "為替・燃料・政策により変動。大規模需要家は個別交渉で別価格となるケースあり",
  countries: [
    { country: "日本", region: "アジア", unitPrice: 22, currency: "JPY/kWh", jpyEquivalent: 22 },
    { country: "米国", region: "北米", unitPrice: 0.10, currency: "USD/kWh", jpyEquivalent: 15 },
    { country: "カナダ", region: "北米", unitPrice: 0.08, currency: "USD/kWh", jpyEquivalent: 12 },
    { country: "ドイツ", region: "欧州", unitPrice: 0.25, currency: "EUR/kWh", jpyEquivalent: 41 },
    { country: "英国", region: "欧州", unitPrice: 0.22, currency: "GBP/kWh", jpyEquivalent: 42 },
    { country: "フランス", region: "欧州", unitPrice: 0.18, currency: "EUR/kWh", jpyEquivalent: 30 },
    { country: "イタリア", region: "欧州", unitPrice: 0.24, currency: "EUR/kWh", jpyEquivalent: 40 },
    { country: "スペイン", region: "欧州", unitPrice: 0.20, currency: "EUR/kWh", jpyEquivalent: 33 },
    { country: "オランダ", region: "欧州", unitPrice: 0.22, currency: "EUR/kWh", jpyEquivalent: 36 },
    { country: "中国", region: "アジア", unitPrice: 0.08, currency: "USD/kWh", jpyEquivalent: 12 },
    { country: "韓国", region: "アジア", unitPrice: 0.12, currency: "USD/kWh", jpyEquivalent: 18 },
    { country: "台湾", region: "アジア", unitPrice: 0.11, currency: "USD/kWh", jpyEquivalent: 17 },
    { country: "ベトナム", region: "アジア", unitPrice: 0.08, currency: "USD/kWh", jpyEquivalent: 12 },
    { country: "タイ", region: "アジア", unitPrice: 0.11, currency: "USD/kWh", jpyEquivalent: 17 },
    { country: "インドネシア", region: "アジア", unitPrice: 0.09, currency: "USD/kWh", jpyEquivalent: 14 },
    { country: "インド", region: "アジア", unitPrice: 0.09, currency: "USD/kWh", jpyEquivalent: 14 },
    { country: "オーストラリア", region: "オセアニア", unitPrice: 0.20, currency: "USD/kWh", jpyEquivalent: 30 },
    { country: "メキシコ", region: "中南米", unitPrice: 0.10, currency: "USD/kWh", jpyEquivalent: 15 },
    { country: "ブラジル", region: "中南米", unitPrice: 0.13, currency: "USD/kWh", jpyEquivalent: 20 },
    { country: "南アフリカ", region: "アフリカ", unitPrice: 0.10, currency: "USD/kWh", jpyEquivalent: 15 },
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
