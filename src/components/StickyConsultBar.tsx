"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { trackEvent } from "../lib/analytics/ga";

const HREF = "/contact?from=sticky";

/**
 * 全ページ追従の薄い相談バー（画面下に常設）。
 * - /contact（と配下）では非表示（フォーム重複回避）。
 * - 「✕」で閉じると以後非表示（useState のみ。localStorage は使わない）。
 * - クリックで /contact?from=sticky へ送客し、GA4 へ cta_click / cta_dismiss を送信。
 * コンテンツを覆わないよう「薄い1行帯」に限定。
 */
export default function StickyConsultBar() {
  const pathname = usePathname() ?? "";
  const [dismissed, setDismissed] = useState(false);

  const onContact = pathname === "/contact" || pathname.startsWith("/contact/");
  if (dismissed || onContact) return null;

  return (
    <aside
      aria-label="無料相談のご案内"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-sky-200 bg-white/95 py-2.5 backdrop-blur"
    >
      <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <p className="min-w-0 flex-1 text-sm leading-tight text-slate-800">
          <span className="font-semibold">電気代、下げられるか無料相談</span>
          <span className="ml-2 hidden text-xs text-slate-500 sm:inline">
            一般社団法人・中立・営業電話なし
          </span>
        </p>
        <Link
          href={HREF}
          onClick={() =>
            trackEvent("cta_click", { label: "sticky", href: HREF, from: "sticky" })
          }
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-sky-700"
        >
          無料で相談 →
        </Link>
        <button
          type="button"
          onClick={() => {
            trackEvent("cta_dismiss", { label: "sticky", from: "sticky" });
            setDismissed(true);
          }}
          aria-label="相談バーを閉じる"
          className="shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>
    </aside>
  );
}
