import { NextResponse } from "next/server";
import ExcelJS from "exceljs";

export const dynamic = "force-static";

export async function GET() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "一般社団法人エネルギー情報センター";

  // Sheet 1: 部門別配賦テンプレ
  const ws = wb.addWorksheet("部門別配賦");
  ws.columns = [
    { header: "部門", key: "dept", width: 20 },
    { header: "床面積(m²)", key: "area", width: 14 },
    { header: "従業員数", key: "emp", width: 12 },
    { header: "サブメーター実測(kWh)", key: "meter", width: 22 },
    { header: "面積按分", key: "allocArea", width: 14 },
    { header: "人数按分", key: "allocEmp", width: 14 },
    { header: "実測按分", key: "allocMeter", width: 14 },
  ];
  ws.getRow(1).font = { bold: true };
  ws.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE0F2FE" } };

  const depts = [
    { dept: "生産部門", area: 3000, emp: 50, meter: 50000 },
    { dept: "倉庫", area: 2000, emp: 10, meter: 25000 },
    { dept: "事務・管理", area: 500, emp: 20, meter: 8000 },
    { dept: "研究開発", area: 800, emp: 15, meter: 15000 },
    { dept: "食堂・休憩", area: 300, emp: 0, meter: 3000 },
  ];
  depts.forEach((d, i) => {
    const row = ws.addRow({ dept: d.dept, area: d.area, emp: d.emp, meter: d.meter });
    const rowNum = i + 2;
    row.getCell("allocArea").value = { formula: `B${rowNum}/SUM(B$2:B$6)*SUM(E$10)` };
    row.getCell("allocEmp").value = { formula: `C${rowNum}/SUM(C$2:C$6)*SUM(E$10)` };
    row.getCell("allocMeter").value = { formula: `D${rowNum}/SUM(D$2:D$6)*SUM(E$10)` };
  });
  ws.addRow([]);
  ws.addRow([]);
  ws.addRow({ dept: "総電気代(円)", area: "", emp: "", meter: "", allocArea: 5000000, allocEmp: 5000000, allocMeter: 5000000 });

  const memo = wb.addWorksheet("使い方");
  memo.getColumn(1).width = 80;
  memo.addRow(["部門別電気代配賦テンプレート"]);
  memo.addRow([""]);
  memo.addRow(["1. 部門ごとに床面積・従業員数・実測値（あれば）を入力"]);
  memo.addRow(["2. 総電気代を E10 セルに入力（例: 500万円）"]);
  memo.addRow(["3. 3つの按分方式（面積/人数/実測）で配賦額が自動計算されます"]);
  memo.addRow(["4. 監査上の精度は 実測 > 面積 > 人数 の順"]);
  memo.addRow([""]);
  memo.addRow(["出典: 一般社団法人エネルギー情報センター"]);
  memo.addRow(["ライセンス: CC BY 4.0"]);

  const buffer = await wb.xlsx.writeBuffer();
  return new NextResponse(new Uint8Array(buffer as unknown as ArrayBuffer) as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="cost-allocation-template.xlsx"',
      "Access-Control-Allow-Origin": "*",
    },
  });
}
