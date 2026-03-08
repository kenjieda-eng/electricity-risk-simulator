import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-10 text-slate-800">
      <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">管理画面</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          公開画面から保存されたシミュレーション結果を確認するための閲覧専用ページです。
        </p>

        <div className="mt-6">
          <Link
            href="/admin/simulation-results"
            className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            シミュレーション結果一覧を見る
          </Link>
        </div>
      </section>
    </main>
  );
}
