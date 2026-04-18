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
    </div>
  );
}
