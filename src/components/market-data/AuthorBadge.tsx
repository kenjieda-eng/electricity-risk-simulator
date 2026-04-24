import Link from "next/link";

type Props = {
  updatedAt?: string;
  publishedAt?: string;
};

export default function AuthorBadge({ updatedAt, publishedAt }: Props) {
  return (
    <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1">
          <span className="rounded-full bg-sky-600 px-2 py-0.5 text-white">監修</span>
          一般社団法人 エネルギー情報センター
        </span>
        {publishedAt && <span>📅 公開: {publishedAt}</span>}
        {updatedAt && updatedAt !== publishedAt && <span className="rounded bg-emerald-50 px-2 py-0.5 text-emerald-700">🔄 最終更新: {updatedAt}</span>}
      </div>
      <p className="mt-2 leading-6">
        当法人は法人向け電気料金の高騰リスク分析・脱炭素対応支援を行う非営利法人です。本記事は公的データ（経済産業省・OCCTO・JEPX・環境省等）と実務知見を基に編集しています。
      </p>
      <p className="mt-2 leading-6">
        <span className="font-semibold text-slate-700">この記事の著者:</span>{" "}
        <Link
          href="/kenji-eda"
          className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900"
        >
          江田 健二（一般社団法人エネルギー情報センター 理事 ／ RAUL株式会社 代表取締役）
        </Link>
        <span className="ml-1 text-slate-500">
          — 電力・エネルギー業界20年以上、書籍20冊以上執筆、内閣府・中小企業庁・商工会議所登壇多数
        </span>
        <Link
          href="/kenji-eda"
          className="ml-2 inline-flex items-center rounded-full border border-sky-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-sky-700 hover:bg-sky-50"
        >
          プロフィール →
        </Link>
      </p>
    </div>
  );
}
