"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      data-print="hide"
      className="rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700 hover:bg-slate-50"
      aria-label="このページを印刷・PDF保存"
    >
      🖨 印刷・PDF保存
    </button>
  );
}
