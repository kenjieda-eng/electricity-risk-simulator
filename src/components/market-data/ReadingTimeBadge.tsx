type Props = {
  characters: number;
  publishedAt?: string;
  updatedAt?: string;
};

export default function ReadingTimeBadge({ characters, publishedAt, updatedAt }: Props) {
  // 日本語の読書速度: 平均400〜600字/分。中央値の500字/分で計算
  const minutes = Math.max(1, Math.round(characters / 500));

  return (
    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
      <span className="inline-flex items-center gap-1">
        ⏱ 読了時間 約{minutes}分
      </span>
      {publishedAt && (
        <span className="inline-flex items-center gap-1">
          📅 公開: {publishedAt}
        </span>
      )}
      {updatedAt && updatedAt !== publishedAt && (
        <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-emerald-700">
          🔄 更新: {updatedAt}
        </span>
      )}
    </div>
  );
}
