import { NextResponse } from "next/server";
import ExcelJS from "exceljs";

export const dynamic = "force-static";

export async function GET() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "一般社団法人エネルギー情報センター";
  wb.created = new Date();

  const ws = wb.addWorksheet("排出係数");
  ws.columns = [
    { header: "エリア", key: "area", width: 12 },
    { header: "一般送配電事業者", key: "utility", width: 30 },
    { header: "基礎排出係数(kg-CO2/kWh)", key: "basic", width: 24 },
    { header: "調整後排出係数(kg-CO2/kWh)", key: "adjusted", width: 26 },
  ];
  ws.getRow(1).font = { bold: true };
  ws.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE0F2FE" } };

  const data = [
    { area: "北海道", utility: "北海道電力", basic: 0.000596, adjusted: 0.000483 },
    { area: "東北", utility: "東北電力", basic: 0.000457, adjusted: 0.000411 },
    { area: "東京", utility: "東京電力エナジーパートナー", basic: 0.000441, adjusted: 0.000393 },
    { area: "中部", utility: "中部電力ミライズ", basic: 0.000425, adjusted: 0.000378 },
    { area: "北陸", utility: "北陸電力", basic: 0.000484, adjusted: 0.000437 },
    { area: "関西", utility: "関西電力", basic: 0.000358, adjusted: 0.000295 },
    { area: "中国", utility: "中国電力", basic: 0.000585, adjusted: 0.000529 },
    { area: "四国", utility: "四国電力", basic: 0.000497, adjusted: 0.000422 },
    { area: "九州", utility: "九州電力", basic: 0.000370, adjusted: 0.000294 },
    { area: "沖縄", utility: "沖縄電力", basic: 0.000691, adjusted: 0.000641 },
  ];
  data.forEach((d) => ws.addRow(d));

  const calcWs = wb.addWorksheet("Scope2計算");
  calcWs.columns = [
    { header: "項目", key: "item", width: 20 },
    { header: "値", key: "val", width: 20 },
    { header: "単位", key: "unit", width: 15 },
  ];
  calcWs.getRow(1).font = { bold: true };
  calcWs.addRow({ item: "年間電力使用量", val: 1000000, unit: "kWh" });
  calcWs.addRow({ item: "排出係数", val: 0.000441, unit: "kg-CO2/kWh" });
  calcWs.addRow({ item: "Scope2排出量", val: { formula: "B2*B3" }, unit: "t-CO2" });

  const srcWs = wb.addWorksheet("出典");
  srcWs.addRow(["出典", "環境省 温対法に基づく事業者別排出係数（2024年度公表値）"]);
  srcWs.addRow(["ライセンス", "CC BY 4.0"]);
  srcWs.addRow(["編集", "一般社団法人エネルギー情報センター"]);
  srcWs.addRow(["URL", "https://simulator.eic-jp.org"]);

  const buffer = await wb.xlsx.writeBuffer();
  return new NextResponse(new Uint8Array(buffer as unknown as ArrayBuffer) as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="emission-factor-2024.xlsx"',
      "Access-Control-Allow-Origin": "*",
    },
  });
}
