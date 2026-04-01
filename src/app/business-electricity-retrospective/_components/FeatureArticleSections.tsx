import Link from "next/link";

export function ConclusionThreePoints({ points }: { points: [string, string, string] }) {
  return (
    <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">まず結論</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ol>
    </section>
  );
}

export function DataNote({ note }: { note: string }) {
  return (
    <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
      ※{note}
    </p>
  );
}

export function EventNotes({ items }: { items: readonly { label: string; when: string }[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <h3 className="text-base font-semibold text-slate-900">主要局面の注記</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
        {items.map((item) => (
          <li key={item.label}>
            {item.label}（{item.when.slice(0, 7)}）
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HormuzInsight({
  same,
  diff,
  actions,
}: {
  same: string;
  diff: string;
  actions: string[];
}) {
  return (
    <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">ウクライナショックから2026年3月ホルムズ海峡封鎖への示唆</h2>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
        <span className="font-semibold text-slate-900">同じ点：</span>
        {same}
      </p>
      <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
        <span className="font-semibold text-slate-900">違う点：</span>
        {diff}
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
        {actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>
      <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
        ※2026年3月以降の電気料金実績は本特集の算定対象外です。将来の数値を置かず、契約実務への示唆として整理しています。
      </p>
    </section>
  );
}

export function RelatedLinks({ links }: { links: Array<{ href: string; label: string }> }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">関連ページ</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SourceList({ items }: { items: Array<{ href: string; label: string }> }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">参考にした公開情報</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noreferrer" className="text-sky-700 underline-offset-2 hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
