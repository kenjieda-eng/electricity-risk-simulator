import { NextResponse } from "next/server";

export const dynamic = "force-static";

const DATA = {
  description: "中小企業向けエネルギー関連補助金",
  source: "経済産業省 / 中小企業庁 / 各自治体 公式発表",
  updatedAt: "2026-04",
  subsidies: [
    { name: "省エネルギー投資促進支援事業費補助金", operator: "経産省・SII", target: "中小企業中心", coverage: "1/2〜2/3", maxAmount: "1.5億円" },
    { name: "ものづくり補助金", operator: "中小企業庁", target: "中小企業・小規模", coverage: "1/2〜2/3", maxAmount: "4,000万円" },
    { name: "事業再構築補助金", operator: "中小企業庁", target: "中小企業", coverage: "1/2〜2/3", maxAmount: "1.5億円" },
    { name: "IT導入補助金（EMS）", operator: "中小企業庁", target: "中小企業", coverage: "1/2〜2/3", maxAmount: "450万円" },
    { name: "カーボンニュートラル投資促進税制", operator: "経産省", target: "全企業", coverage: "10%税額控除 or 50%特別償却", maxAmount: "—" },
    { name: "中小企業経営強化税制", operator: "中小企業庁", target: "青色申告法人", coverage: "即時償却 or 7%税額控除", maxAmount: "—" },
    { name: "地域脱炭素移行・再エネ推進交付金", operator: "環境省", target: "自治体経由", coverage: "1/2〜2/3", maxAmount: "案件により変動" },
    { name: "レジリエンス強化型蓄電池導入支援事業", operator: "経産省・SII", target: "中小含む", coverage: "1/3〜1/2", maxAmount: "2,000万円/件" },
    { name: "クリーンエネルギー自動車等導入促進補助金", operator: "環境省", target: "全企業", coverage: "1/3〜1/2", maxAmount: "車種により" },
    { name: "地産地消型再エネ推進事業", operator: "環境省", target: "自治体・民間", coverage: "1/2", maxAmount: "案件により" },
  ],
  municipalSubsidies: [
    { prefecture: "東京都", name: "中小企業向け省エネ設備導入支援", coverage: "1/2〜2/3" },
    { prefecture: "大阪府", name: "省エネ・再エネ設備導入補助", coverage: "1/3〜1/2" },
    { prefecture: "愛知県", name: "エネルギー設備導入支援", coverage: "1/3" },
    { prefecture: "神奈川県", name: "中小企業向け省エネ支援", coverage: "1/2以内" },
  ],
};

export async function GET() {
  return NextResponse.json(
    { source: "https://simulator.eic-jp.org", license: "CC BY 4.0", data: DATA },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400", "Access-Control-Allow-Origin": "*" } },
  );
}
