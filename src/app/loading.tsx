export default function Loading() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <div className="h-8 w-2/3 rounded bg-slate-200" />
          <div className="mt-4 h-4 w-full rounded bg-slate-200" />
          <div className="mt-2 h-4 w-4/5 rounded bg-slate-200" />
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="h-6 w-1/3 rounded bg-slate-200" />
            <div className="mt-3 h-4 w-full rounded bg-slate-200" />
            <div className="mt-2 h-4 w-5/6 rounded bg-slate-200" />
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="h-6 w-1/4 rounded bg-slate-200" />
            <div className="mt-3 h-4 w-full rounded bg-slate-200" />
            <div className="mt-2 h-4 w-3/4 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </main>
  );
}
