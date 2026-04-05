import Link from "next/link";
import {
  EMERGENCY_SCENARIO_SERIES,
  getEmergencyScenarioNeighbors,
  getEmergencyScenarioPageBySlug,
  getEmergencyScenarioPagePath,
} from "../../../../lib/emergencyScenarioAnalysis";

type EmergencyScenarioLayoutProps = {
  slug: string;
  lead: string;
  children: React.ReactNode;
};

export default function EmergencyScenarioLayout({ slug, lead, children }: EmergencyScenarioLayoutProps) {
  const page = getEmergencyScenarioPageBySlug(slug);
  if (!page) return null;
  const { previous, next } = getEmergencyScenarioNeighbors(slug);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="mb-4 text-sm text-slate-600">
        <Link href="/" className="underline underline-offset-2 hover:text-slate-900">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">有事シナリオ分析</span>
        {slug !== "index" ? (
          <>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{page.label}</span>
          </>
        ) : null}
      </nav>

      <header className={`rounded-xl border border-slate-200 bg-gradient-to-r p-6 text-white ${page.heroAccentClass}`}>
        <p className="text-xs font-semibold tracking-[0.18em] text-slate-200">{page.heroKicker}</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{page.title}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-100 sm:text-base">{lead}</p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">特集の全体構成（10ページ）</h2>
        <ol className="mt-3 grid gap-2 text-sm leading-7 text-slate-700 sm:grid-cols-2">
          {EMERGENCY_SCENARIO_SERIES.map((item, index) => {
            const href = getEmergencyScenarioPagePath(item.slug);
            const active = item.slug === slug;
            return (
              <li key={item.slug} className="list-decimal list-inside">
                {active ? (
                  <span className="font-semibold text-slate-900">
                    {index + 1}. {item.label}
                  </span>
                ) : (
                  <Link href={href} className="underline-offset-2 hover:underline">
                    {index + 1}. {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-6 space-y-6">{children}</section>

      <section className="mt-8 rounded-xl border border-sky-300 bg-sky-50 p-5">
        <h2 className="text-base font-semibold text-slate-900">シリーズ内ナビゲーション</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {previous ? (
            <Link href={getEmergencyScenarioPagePath(previous.slug)} className="rounded-lg border border-sky-200 bg-white p-4 hover:bg-sky-100">
              <p className="text-xs font-semibold text-slate-500">前のページ</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{previous.label}</p>
            </Link>
          ) : (
            <Link href={getEmergencyScenarioPagePath("index")} className="rounded-lg border border-sky-200 bg-white p-4 hover:bg-sky-100">
              <p className="text-xs font-semibold text-slate-500">特集トップ</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">総論トップへ戻る</p>
            </Link>
          )}
          {next ? (
            <Link href={getEmergencyScenarioPagePath(next.slug)} className="rounded-lg border border-sky-200 bg-white p-4 hover:bg-sky-100">
              <p className="text-xs font-semibold text-slate-500">次のページ</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{next.label}</p>
            </Link>
          ) : (
            <Link href={getEmergencyScenarioPagePath("index")} className="rounded-lg border border-sky-200 bg-white p-4 hover:bg-sky-100">
              <p className="text-xs font-semibold text-slate-500">特集トップ</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">総論トップを見直す</p>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
