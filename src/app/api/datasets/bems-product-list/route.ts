import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "BEMS/FEMS/EMS製品の代表的仕様・価格帯",
  source: "各ベンダー公表資料・当社調べ",
  updatedAt: "2026-04",
  products: [
    { category: "BEMS", vendor: "パナソニック", product: "Smart Power Vision", scaleMax: "中規模ビル", priceRange: "300-800万円" },
    { category: "BEMS", vendor: "三菱電機", product: "MELCloud Energy", scaleMax: "中〜大規模ビル", priceRange: "500-1500万円" },
    { category: "BEMS", vendor: "ダイキン", product: "D-BIEMS", scaleMax: "中規模ビル", priceRange: "400-1000万円" },
    { category: "FEMS", vendor: "オムロン", product: "Envision Energy", scaleMax: "中〜大規模工場", priceRange: "800-3000万円" },
    { category: "FEMS", vendor: "富士電機", product: "F-MPC", scaleMax: "大規模工場", priceRange: "1500-5000万円" },
    { category: "EMS", vendor: "日立", product: "Energy Viewer", scaleMax: "全規模", priceRange: "200-2000万円" },
    { category: "EMS", vendor: "NEC", product: "NEC CONNEXIVE", scaleMax: "中〜大規模", priceRange: "500-2500万円" },
    { category: "CEMS", vendor: "東芝", product: "Smart Community EMS", scaleMax: "地域単位", priceRange: "要見積" },
    { category: "xEMS", vendor: "シュナイダーエレクトリック", product: "EcoStruxure", scaleMax: "グローバル横断", priceRange: "要見積" },
  ],
  subsidies: [
    { name: "省エネルギー投資促進支援事業費補助金", coverage: "1/2以内", maxAmount: "1.5億円/年" },
    { name: "中小企業経営強化税制（B類型）", coverage: "即時償却 or 7%税額控除", maxAmount: "—" },
  ],
};

export async function GET() {
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", data: DATA },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400", "Access-Control-Allow-Origin": "*" } },
  );
}
