export type HotelLeisureMidDiagram =
  | {
      kind: "timeBlocks";
      title: string;
      caption?: string;
      footnote?: string;
      blocks: { label: string; relativeLoad: number }[];
    }
  | {
      kind: "compositionBars";
      title: string;
      caption?: string;
      footnote?: string;
      items: { label: string; share: string; width: string; color: string; description?: string }[];
    }
  | {
      kind: "seasonalCompare";
      title: string;
      caption?: string;
      footnote?: string;
      items: { label: string; level: string; width: string; note: string }[];
    }
  | {
      kind: "flatHighDay";
      title: string;
      caption?: string;
      footnote?: string;
      blocks: { label: string; relativeLoad: number }[];
    };

const defaultFootnote = "※概念図であり、施設・運用条件により異なります。";

export default function HotelLeisureDiagram({ spec }: { spec: HotelLeisureMidDiagram }) {
  const foot = spec.footnote ?? defaultFootnote;

  if (spec.kind === "compositionBars") {
    return (
      <section className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{spec.title}</h3>
        {spec.caption ? <p className="mt-2 text-sm leading-7 text-slate-700">{spec.caption}</p> : null}
        <div className="mt-4 space-y-4">
          {spec.items.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between gap-3 text-sm">
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="text-slate-600">{item.share}</p>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200" aria-hidden>
                <div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} />
              </div>
              {item.description ? <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p> : null}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-600">{foot}</p>
      </section>
    );
  }

  if (spec.kind === "seasonalCompare") {
    return (
      <section className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{spec.title}</h3>
        {spec.caption ? <p className="mt-2 text-sm leading-7 text-slate-700">{spec.caption}</p> : null}
        <div className="mt-4 space-y-4">
          {spec.items.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between gap-3 text-sm">
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="text-slate-600">{item.level}</p>
              </div>
              <div className="mt-2 h-4 overflow-hidden rounded-full bg-slate-200" aria-hidden>
                <div className="h-full rounded-full bg-rose-500" style={{ width: item.width }} />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-600">{foot}</p>
      </section>
    );
  }

  if (spec.kind === "timeBlocks" || spec.kind === "flatHighDay") {
    const max = Math.max(...spec.blocks.map((b) => b.relativeLoad), 1);
    const barMaxPx = 112;
    return (
      <section className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{spec.title}</h3>
        {spec.caption ? <p className="mt-2 text-sm leading-7 text-slate-700">{spec.caption}</p> : null}
        <div
          className="mt-4 flex h-40 items-end justify-between gap-1 sm:gap-2"
          role="img"
          aria-label={spec.title}
        >
          {spec.blocks.map((b) => {
            const h = Math.max(20, Math.round((b.relativeLoad / max) * barMaxPx));
            return (
              <div key={b.label} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                <div className="flex w-full min-w-[1.25rem] flex-1 flex-col justify-end">
                  <div className="w-full rounded-t bg-sky-600" style={{ height: `${h}px` }} />
                </div>
                <span className="max-w-full break-words text-center text-[10px] leading-tight text-slate-700 sm:text-xs">
                  {b.label}
                </span>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-600">{foot}</p>
      </section>
    );
  }

  return null;
}
