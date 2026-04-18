import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export const dynamic = "force-static";

export async function GET() {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const addPage = () => pdf.addPage([595, 842]); // A4

  // Page 1: Cover
  let page = addPage();
  page.drawRectangle({ x: 0, y: 642, width: 595, height: 200, color: rgb(0.012, 0.518, 0.78) });
  page.drawText("Corporate Decarbonization", { x: 50, y: 760, size: 28, font: fontBold, color: rgb(1, 1, 1) });
  page.drawText("White Paper 2026", { x: 50, y: 720, size: 22, font: fontBold, color: rgb(1, 1, 1) });
  page.drawText("Energy Information Center", { x: 50, y: 680, size: 14, font, color: rgb(0.88, 0.95, 0.99) });
  page.drawText("https://simulator.eic-jp.org", { x: 50, y: 580, size: 11, font, color: rgb(0.4, 0.4, 0.4) });
  page.drawText("License: CC BY 4.0", { x: 50, y: 560, size: 11, font, color: rgb(0.4, 0.4, 0.4) });

  // Page 2: Executive Summary
  page = addPage();
  page.drawText("1. Executive Summary", { x: 50, y: 800, size: 18, font: fontBold, color: rgb(0.012, 0.518, 0.78) });
  const summary = [
    "Japanese corporate electricity costs are facing structural pressure from",
    "fuel cost volatility, renewable surcharge, capacity market contributions,",
    "and the new GX-ETS emissions trading scheme launching in FY2026.",
    "",
    "Forward-looking decarbonization strategies require coordinated action",
    "across Scope2 accounting, RE100 procurement (PPA, certificates), and",
    "internal energy management. This white paper provides a framework",
    "for executive-level decision making.",
  ];
  summary.forEach((line, i) => page.drawText(line, { x: 50, y: 760 - i * 18, size: 11, font, color: rgb(0.1, 0.1, 0.1) }));

  // Page 3: Key Numbers
  page = addPage();
  page.drawText("2. Key Numbers", { x: 50, y: 800, size: 18, font: fontBold, color: rgb(0.012, 0.518, 0.78) });
  const kn = [
    "FY2026 Renewable Surcharge: JPY 3.98 / kWh (record high)",
    "Capacity Market Contribution: JPY 8,000-10,000 / kW per year",
    "GX-ETS Carbon Price (estimated): JPY 3,000-10,000 / t-CO2",
    "Average Scope2 Emission Factor: 0.000432 kg-CO2 / kWh",
    "Corporate PPA Price Range: JPY 11-19 / kWh",
    "Non-fossil Certificate Price: JPY 0.30-0.90 / kWh",
  ];
  kn.forEach((line, i) => page.drawText(`- ${line}`, { x: 60, y: 760 - i * 22, size: 12, font, color: rgb(0.1, 0.1, 0.1) }));

  // Page 4: Action Plan
  page = addPage();
  page.drawText("3. Action Plan (90-day)", { x: 50, y: 800, size: 18, font: fontBold, color: rgb(0.012, 0.518, 0.78) });
  const ap = [
    ["Phase 1 (0-30d)", "Inventory: 12-month bills, contract conditions, current Scope2"],
    ["Phase 2 (31-60d)", "Vendor RFP: solicit 3+ quotes, simulate scenarios"],
    ["Phase 3 (61-90d)", "Decision: executive approval, contract execution"],
  ];
  ap.forEach((row, i) => {
    page.drawText(row[0], { x: 50, y: 760 - i * 50, size: 12, font: fontBold, color: rgb(0.012, 0.518, 0.78) });
    page.drawText(row[1], { x: 50, y: 740 - i * 50, size: 11, font, color: rgb(0.2, 0.2, 0.2) });
  });

  // Page 5: References
  page = addPage();
  page.drawText("4. References", { x: 50, y: 800, size: 18, font: fontBold, color: rgb(0.012, 0.518, 0.78) });
  const refs = [
    "METI - Agency for Natural Resources and Energy",
    "MOE - Emission Factor Database",
    "OCCTO - Supply Demand Data",
    "JEPX - Spot Market Prices",
    "RE100 / SBTi / CDP - International Standards",
    "Energy Information Center (https://simulator.eic-jp.org)",
  ];
  refs.forEach((line, i) => page.drawText(`- ${line}`, { x: 60, y: 760 - i * 22, size: 11, font, color: rgb(0.1, 0.1, 0.1) }));
  page.drawText("(c) 2026 Energy Information Center. CC BY 4.0", { x: 50, y: 50, size: 9, font, color: rgb(0.5, 0.5, 0.5) });

  const bytes = await pdf.save();
  return new NextResponse(new Uint8Array(bytes) as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="whitepaper-decarbon-2026.pdf"',
      "Access-Control-Allow-Origin": "*",
    },
  });
}
