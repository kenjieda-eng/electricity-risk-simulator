"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { REGULATION_TIMELINE_EVENTS, type RegulationImpact } from "../../lib/regulationTimelineData";

const IMPACT_CONFIG: Record<RegulationImpact, { label: string; dotClass: string; bgClass: string; textClass: string }> = {
  increase: {
    label: "料金増要因",
    dotClass: "bg-rose-500",
    bgClass: "bg-rose-50 border-rose-200",
    textClass: "text-rose-700",
  },
  decrease: {
    label: "料金減要因",
    dotClass: "bg-emerald-500",
    bgClass: "bg-emerald-50 border-emerald-200",
    textClass: "text-emerald-700",
  },
  neutral: {
    label: "中立/運用影響",
    dotClass: "bg-slate-400",
    bgClass: "bg-slate-50 border-slate-200",
    textClass: "text-slate-700",
  },
};

type Filter = RegulationImpact | "all";

export function RegulationTimeline() {
  const [filter, setFilter] = useState<Filter>("all");

  const events = useMemo(() => {
    const sorted = [...REGULATION_TIMELINE_EVENTS].sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return (a.month ?? 0) - (b.month ?? 0);
    });
    if (filter === "all") return sorted;
    return sorted.filter((e) => e.impact === filter);
  }, [filter]);

  const currentYear = new Date().getFullYear();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">制度改正インタラクティブ年表</h2>
          <p className="mt-1 text-sm leading-6 text-slate-700">
            自由化から GX-ETS まで、法人電気料金に影響する制度改正を時系列で表示。料金増/減/中立のフィルタで絞り込めます。
          </p>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="影響区分フィルタ">
          {(["all", "increase", "decrease", "neutral"] as Filter[]).map((f) => {
            const active = filter === f;
            const label = f === "all" ? "すべて" : IMPACT_CONFIG[f].label;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={
                  active
                    ? "rounded-full border-2 border-sky-500 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800"
                    : "rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                }
                aria-pressed={active}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <ol className="relative mt-6 space-y-5 border-l-2 border-slate-200 pl-6">
        {events.map((event, idx) => {
          const cfg = IMPACT_CONFIG[event.impact];
          const isFuture = event.year > currentYear;
          return (
            <li key={`${event.year}-${event.month ?? 0}-${idx}`} className="relative">
              <span
                className={`absolute -left-[33px] top-2 block h-4 w-4 rounded-full border-2 border-white shadow ${cfg.dotClass}`}
                aria-hidden
              />
              <div className={`rounded-lg border p-4 ${cfg.bgClass}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-lg font-bold text-slate-900">
                    {event.year}年{event.month ? `${event.month}月` : ""}
                  </span>
                  <span className={`rounded-full bg-white px-2 py-0.5 text-xs font-semibold ${cfg.textClass}`}>
                    {cfg.label}
                  </span>
                  {isFuture ? (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                      今後の予定
                    </span>
                  ) : null}
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs text-slate-700">対象: {event.target}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{event.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">{event.summary}</p>
                {event.relatedSlug ? (
                  <Link
                    href={`/${event.relatedSlug}`}
                    className="mt-2 inline-flex text-xs font-semibold text-sky-700 underline-offset-2 hover:underline"
                  >
                    関連記事を見る →
                  </Link>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
