import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col items-center justify-center bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-6xl font-bold text-slate-300">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">ページが見つかりません</h1>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          お探しのページは移動または削除された可能性があります。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700">
            シミュレーターへ戻る
          </Link>
          <Link href="/articles" className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            解説記事を読む
          </Link>
        </div>
      </div>
    </main>
  );
}
