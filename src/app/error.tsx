"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col items-center justify-center bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-5xl font-bold text-slate-300">Error</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">エラーが発生しました</h1>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          一時的な問題が発生しています。しばらくしてからもう一度お試しください。
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700"
        >
          もう一度試す
        </button>
      </div>
    </main>
  );
}
