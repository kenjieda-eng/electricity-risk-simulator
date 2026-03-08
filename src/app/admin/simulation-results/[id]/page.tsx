import Link from "next/link";
import { notFound } from "next/navigation";

import { createAdminServerClient } from "../../../../lib/supabase/adminServerClient";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const dateTimeFormatter = new Intl.DateTimeFormat("ja-JP", {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatValue(value: unknown): string {
  if (value === null || value === undefined) return "-";

  if (typeof value === "string") {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime()) && value.includes("T")) {
      return dateTimeFormatter.format(date);
    }
    return value;
  }

  if (typeof value === "number") {
    return new Intl.NumberFormat("ja-JP").format(value);
  }

  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  return String(value);
}

export default async function AdminSimulationResultDetailPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = createAdminServerClient();

  const { data, error } = await supabase
    .from("simulation_results")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return (
      <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-10 text-slate-800">
        <section className="rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
          データ取得に失敗しました: {error.message}
        </section>
        <div className="mt-4">
          <Link
            href="/admin/simulation-results"
            className="text-sm font-semibold text-slate-700 underline underline-offset-4"
          >
            一覧へ戻る
          </Link>
        </div>
      </main>
    );
  }

  if (!data) {
    notFound();
  }

  const entries = Object.entries(data).sort(([a], [b]) => a.localeCompare(b));

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-10 text-slate-800">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">シミュレーション結果詳細</h1>
        <p className="mt-2 font-mono text-xs text-slate-500">id: {id}</p>
      </header>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <dl className="space-y-4">
          {entries.map(([key, value]) => {
            const isJson = typeof value === "object" && value !== null;
            return (
              <div key={key} className="border-b border-slate-100 pb-4">
                <dt className="text-sm font-semibold text-slate-500">{key}</dt>
                <dd className="mt-1 text-sm text-slate-800">
                  {isJson ? (
                    <pre className="overflow-x-auto rounded-md bg-slate-50 p-3 text-xs leading-6 text-slate-700">
                      {formatValue(value)}
                    </pre>
                  ) : (
                    formatValue(value)
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      <div className="mt-6">
        <Link
          href="/admin/simulation-results"
          className="text-sm font-semibold text-slate-700 underline underline-offset-4"
        >
          一覧へ戻る
        </Link>
      </div>
    </main>
  );
}
