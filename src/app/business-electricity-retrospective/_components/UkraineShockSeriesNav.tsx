import Link from "next/link";
import { UKRAINE_SHOCK_SERIES, getUkraineShockNeighbors } from "../_lib/ukraine-shock-series";

type Props = {
  currentSlug: string;
};

export default function UkraineShockSeriesNav({ currentSlug }: Props) {
  const { previous, next } = getUkraineShockNeighbors(currentSlug);

  return (
    <>
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">ウクライナ特集</span>
      </nav>

      {/* シリーズナビ */}
      <section className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-base font-semibold text-slate-900">検証特集：ウクライナショックと法人電気料金（全{UKRAINE_SHOCK_SERIES.length}本）</h2>
        <ol className="mt-3 list-inside list-decimal space-y-1.5 text-sm leading-7 text-slate-700">
          {UKRAINE_SHOCK_SERIES.map((page) =>
            page.slug === currentSlug ? (
              <li key={page.slug} className="font-semibold text-slate-900">{page.title}</li>
            ) : (
              <li key={page.slug}>
                <Link href={page.href} className="text-sky-700 underline-offset-2 hover:underline">
                  {page.title}
                </Link>
              </li>
            ),
          )}
        </ol>
      </section>
    </>
  );
}

export function UkraineShockPrevNext({ currentSlug }: Props) {
  const { previous, next } = getUkraineShockNeighbors(currentSlug);

  return (
    <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
      <h2 className="text-base font-semibold text-slate-900">この特集の前後ページ</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link
            href={previous.href}
            className="rounded-lg border border-sky-200 bg-white p-4 text-sm transition hover:bg-sky-100"
          >
            <p className="text-xs font-semibold text-slate-500">← 前のページ</p>
            <p className="mt-1 font-semibold text-slate-900">{previous.title}</p>
          </Link>
        ) : (
          <Link
            href="/business-electricity-retrospective"
            className="rounded-lg border border-sky-200 bg-white p-4 text-sm transition hover:bg-sky-100"
          >
            <p className="text-xs font-semibold text-slate-500">← 戻る</p>
            <p className="mt-1 font-semibold text-slate-900">法人電気料金振り返りトップ</p>
          </Link>
        )}
        {next ? (
          <Link
            href={next.href}
            className="rounded-lg border border-sky-200 bg-white p-4 text-sm transition hover:bg-sky-100"
          >
            <p className="text-xs font-semibold text-slate-500">次のページ →</p>
            <p className="mt-1 font-semibold text-slate-900">{next.title}</p>
          </Link>
        ) : (
          <Link
            href="/business-electricity-retrospective"
            className="rounded-lg border border-sky-200 bg-white p-4 text-sm transition hover:bg-sky-100"
          >
            <p className="text-xs font-semibold text-slate-500">戻る →</p>
            <p className="mt-1 font-semibold text-slate-900">法人電気料金振り返りトップ</p>
          </Link>
        )}
      </div>
    </section>
  );
}
