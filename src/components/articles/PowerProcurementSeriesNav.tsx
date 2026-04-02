import Link from "next/link";
import {
  POWER_PROCUREMENT_SERIES,
  getPowerProcurementSeriesItem,
  getPowerProcurementSeriesNeighbors,
} from "../../lib/powerProcurementSeries";

type ExtraLink = {
  href: string;
  title: string;
};

type PowerProcurementSeriesNavProps = {
  currentSlug: string;
  extraLinks?: ExtraLink[];
};

export default function PowerProcurementSeriesNav({
  currentSlug,
  extraLinks = [],
}: PowerProcurementSeriesNavProps) {
  const current = getPowerProcurementSeriesItem(currentSlug);
  const { previous, next } = getPowerProcurementSeriesNeighbors(currentSlug);

  return (
    <section className="rounded-xl border border-sky-300 bg-sky-50 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <p className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700">次に読む記事</p>
        {current ? (
          <p className="text-xs text-slate-600">
            シリーズ {current.order}/{POWER_PROCUREMENT_SERIES.length} ・ {current.stage}
          </p>
        ) : null}
      </div>

      <p className="mt-3 text-sm leading-7 text-slate-700">
        読む順番を意識して、前後の記事へつなげて読めるようにしています。調達手段の違いを単発で見るより、
        全体像から順に追う方が背景をつかみやすくなります。
      </p>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {previous ? (
          <Link
            href={`/${previous.slug}`}
            className="rounded-lg border border-sky-200 bg-white p-4 transition hover:bg-sky-100"
          >
            <p className="text-xs font-semibold tracking-wide text-slate-500">前の記事</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{previous.title}</p>
          </Link>
        ) : (
          <Link
            href="/articles/power-procurement"
            className="rounded-lg border border-sky-200 bg-white p-4 transition hover:bg-sky-100"
          >
            <p className="text-xs font-semibold tracking-wide text-slate-500">カテゴリへ戻る</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">電力調達の仕組みを知る</p>
          </Link>
        )}

        {next ? (
          <Link
            href={`/${next.slug}`}
            className="rounded-lg border border-sky-200 bg-white p-4 transition hover:bg-sky-100"
          >
            <p className="text-xs font-semibold tracking-wide text-slate-500">次の記事</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{next.title}</p>
          </Link>
        ) : (
          <Link
            href="/articles/power-procurement"
            className="rounded-lg border border-sky-200 bg-white p-4 transition hover:bg-sky-100"
          >
            <p className="text-xs font-semibold tracking-wide text-slate-500">シリーズ一覧</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">10本構成をカテゴリで見直す</p>
          </Link>
        )}
      </div>

      {extraLinks.length > 0 ? (
        <div className="mt-4 rounded-lg border border-sky-200 bg-white p-4">
          <h3 className="text-sm font-semibold text-slate-900">あわせて見たい記事</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {extraLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-100"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
