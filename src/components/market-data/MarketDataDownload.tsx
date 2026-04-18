"use client";

type Row = Record<string, string | number>;

type Props = {
  filename: string;
  headers: string[];
  rows: Row[];
  apiPath?: string;
  caption?: string;
};

function toCsv(headers: string[], rows: Row[]) {
  const head = headers.join(",");
  const body = rows
    .map((r) =>
      headers
        .map((h) => {
          const v = r[h];
          const s = v === undefined || v === null ? "" : String(v);
          return s.includes(",") || s.includes('"') || s.includes("\n")
            ? `"${s.replace(/"/g, '""')}"`
            : s;
        })
        .join(","),
    )
    .join("\n");
  return `${head}\n${body}\n`;
}

export default function MarketDataDownload({ filename, headers, rows, apiPath, caption }: Props) {
  const handleDownload = () => {
    const csv = toCsv(headers, rows);
    const bom = "\uFEFF";
    const blob = new Blob([bom + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-3 flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
      <span className="text-slate-700">📊 このデータを活用</span>
      <button
        type="button"
        onClick={handleDownload}
        className="inline-flex items-center gap-1 rounded-md border border-sky-300 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700 hover:bg-sky-50"
      >
        ⬇ CSVダウンロード
      </button>
      {apiPath ? (
        <a
          href={apiPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
        >
          📡 JSON APIで取得
        </a>
      ) : null}
      {caption ? <span className="text-xs text-slate-500">{caption}</span> : null}
    </div>
  );
}
