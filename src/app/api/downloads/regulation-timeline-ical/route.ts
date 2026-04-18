import { NextResponse } from "next/server";

export const dynamic = "force-static";

const EVENTS = [
  { date: "20260401", title: "GX-ETS本格稼働", description: "排出量取引制度の本格運用開始" },
  { date: "20270401", title: "託送料金レベニューキャップ第2期", description: "託送料金の次期改定" },
  { date: "20280401", title: "GX-ETS対象拡大（予定）", description: "対象事業者の拡大検討" },
  { date: "20320701", title: "FIT初期10年案件買取満了開始", description: "2012年FIT案件の買取期間満了" },
  { date: "20330401", title: "カーボンプライシング本格化（予定）", description: "政府検討中の炭素価格制度" },
];

function pad(s: string, len: number) { return s.padEnd(len).slice(0, len); }

function buildIcs(): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//eic-jp//electricity-regulation-timeline//JA",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:電気事業規制改正タイムライン",
    "X-WR-CALDESC:経産省・環境省等の主要な制度改正予定",
  ];
  for (const e of EVENTS) {
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${e.date}-${e.title}@eic-jp.org`);
    lines.push(`DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`);
    lines.push(`DTSTART;VALUE=DATE:${e.date}`);
    lines.push(`SUMMARY:${e.title}`);
    lines.push(`DESCRIPTION:${e.description} (https://simulator.eic-jp.org/articles/regulation-timeline)`);
    lines.push("END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export async function GET() {
  const body = buildIcs();
  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="regulation-timeline.ics"',
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
