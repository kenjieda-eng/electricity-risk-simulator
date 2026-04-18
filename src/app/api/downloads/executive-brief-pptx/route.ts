import { NextResponse } from "next/server";
import PptxGenJS from "pptxgenjs";

export const dynamic = "force-static";

export async function GET() {
  const p = new PptxGenJS();
  p.author = "一般社団法人エネルギー情報センター";
  p.company = "一般社団法人エネルギー情報センター";
  p.title = "電気料金リスク・経営層報告";
  p.layout = "LAYOUT_16x9";

  // Slide 1: Title
  const s1 = p.addSlide();
  s1.background = { color: "0284C7" };
  s1.addText("電気料金リスク\n経営層報告テンプレート", { x: 0.5, y: 1.5, w: 9, h: 2, fontSize: 40, bold: true, color: "FFFFFF", align: "center" });
  s1.addText("2026年4月 / 一般社団法人エネルギー情報センター", { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 14, color: "E0F2FE", align: "center" });

  // Slide 2: Summary
  const s2 = p.addSlide();
  s2.addText("エグゼクティブサマリー", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: "0284C7" });
  s2.addText([
    { text: "• 燃料費・賦課金・容量拠出金の複合で年間電気代+15%の見通し\n", options: { bullet: false } },
    { text: "• 脱炭素対応（Scope2開示、GX-ETS）で追加コスト発生の可能性\n", options: { bullet: false } },
    { text: "• 対策: プラン見直し・省エネ投資・PPA導入で10-20%圧縮余地\n", options: { bullet: false } },
    { text: "• 意思決定の緊急性: 高（2026年度予算策定前に実行推奨）", options: { bullet: false } },
  ], { x: 0.5, y: 1.2, w: 9, h: 4, fontSize: 18, color: "1E293B" });

  // Slide 3: Cost Structure
  const s3 = p.addSlide();
  s3.addText("電気料金の構造（年額ベース）", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, bold: true, color: "0284C7" });
  s3.addChart(p.ChartType.bar, [
    { name: "現状", labels: ["基本料金", "電力量料金", "燃調", "賦課金", "容量拠出金"], values: [3000000, 4000000, 1300000, 800000, 500000] },
    { name: "2030年見通し", labels: ["基本料金", "電力量料金", "燃調", "賦課金", "容量拠出金"], values: [3200000, 4300000, 1500000, 1200000, 900000] },
  ], { x: 0.5, y: 1.2, w: 9, h: 5 });

  // Slide 4: Actions
  const s4 = p.addSlide();
  s4.addText("推奨アクション（90日プラン）", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, bold: true, color: "0284C7" });
  const actions = [
    { phase: "0-30日", act: "現状棚卸し: 請求書12ヶ月分・契約条件・リスク評価" },
    { phase: "31-60日", act: "相見積取得: 3社以上比較、シミュレーション" },
    { phase: "61-90日", act: "意思決定: 経営層承認、契約切替・投資実行" },
  ];
  actions.forEach((a, i) => {
    s4.addShape(p.ShapeType.roundRect, { x: 0.5, y: 1.2 + i * 1.4, w: 2, h: 1, fill: { color: "0284C7" }, line: { color: "0284C7" } });
    s4.addText(a.phase, { x: 0.5, y: 1.2 + i * 1.4, w: 2, h: 1, fontSize: 20, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
    s4.addText(a.act, { x: 2.7, y: 1.2 + i * 1.4, w: 6.8, h: 1, fontSize: 16, color: "1E293B", valign: "middle" });
  });

  // Slide 5: KPI
  const s5 = p.addSlide();
  s5.addText("KPI・意思決定", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, bold: true, color: "0284C7" });
  s5.addText([
    { text: "投資回収期間: 3-5年\n", options: {} },
    { text: "年間削減想定: 10-20%\n", options: {} },
    { text: "CO2削減: Scope2 20-40%減\n", options: {} },
    { text: "投資総額: 未定（見積取得後）", options: {} },
  ], { x: 0.5, y: 1.2, w: 9, h: 4, fontSize: 20, color: "1E293B" });

  // Slide 6: References
  const s6 = p.addSlide();
  s6.addText("参考情報・出典", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, bold: true, color: "0284C7" });
  s6.addText([
    { text: "• 経済産業省・資源エネルギー庁 公表資料\n" },
    { text: "• 電力広域的運営推進機関（OCCTO）需給データ\n" },
    { text: "• 日本卸電力取引所（JEPX）取引データ\n" },
    { text: "• 環境省 電気事業者別排出係数\n" },
    { text: "• 一般社団法人エネルギー情報センター（https://simulator.eic-jp.org）\n" },
    { text: "\nテンプレートライセンス: CC BY 4.0" },
  ], { x: 0.5, y: 1.2, w: 9, h: 5, fontSize: 16, color: "1E293B" });

  const buffer = (await p.write({ outputType: "nodebuffer" })) as Buffer;
  return new NextResponse(new Uint8Array(buffer as unknown as ArrayBuffer) as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "Content-Disposition": 'attachment; filename="executive-brief-template.pptx"',
      "Access-Control-Allow-Origin": "*",
    },
  });
}
