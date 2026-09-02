"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackEvent } from "../lib/analytics/ga";
import {
  CONSULT_CARD_HIDDEN_EVENT,
  CONSULT_CARD_VISIBLE_EVENT,
  readConsultBarDismissed,
  writeConsultBarDismissed,
} from "../lib/consultCta";

const HREF = "/contact?from=sticky";

/**
 * 全ページ追従の薄い相談バー（画面下に常設）。
 * - /contact（と配下）では非表示（フォーム重複回避）。
 * - 「✕」で閉じると同一セッション中は非表示（sessionStorage。localStorage は使わない）。
 * - ContactCtaCard が画面内にある間は非表示（#335。下端 57px の帯がカードの CTA
 *   ボタンのクリックを奪っていたため。カード側の通知の詳細は consultCta.ts）。
 * - クリックで /contact?from=sticky へ送客し、GA4 へ cta_click / cta_dismiss を送信。
 * コンテンツを覆わないよう「薄い1行帯」に限定。
 */
export default function StickyConsultBar() {
  const pathname = usePathname() ?? "";
  const [dismissed, setDismissed] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0);

  // 「✕」の保存状態の読み出しは mount 後に行う。初期値を sessionStorage から取ると
  // SSR の出力（常に表示）と hydration の結果が食い違うため。
  useEffect(() => {
    if (readConsultBarDismissed()) setDismissed(true);
  }, []);

  // ContactCtaCard の可視状態を購読する。カードは1ページに複数あり得るので
  // カウンタで持ち、1つでも可視ならバーを出さない。
  useEffect(() => {
    const onVisible = () => setVisibleCards((n) => n + 1);
    const onHidden = () => setVisibleCards((n) => (n > 0 ? n - 1 : 0));
    document.addEventListener(CONSULT_CARD_VISIBLE_EVENT, onVisible);
    document.addEventListener(CONSULT_CARD_HIDDEN_EVENT, onHidden);
    return () => {
      document.removeEventListener(CONSULT_CARD_VISIBLE_EVENT, onVisible);
      document.removeEventListener(CONSULT_CARD_HIDDEN_EVENT, onHidden);
    };
  }, []);

  const onContact = pathname === "/contact" || pathname.startsWith("/contact/");
  if (dismissed || onContact || visibleCards > 0) return null;

  return (
    <>
      {/* U-7 対応: 本バーは fixed bottom-0 で通常フローから外れるため、そのままだと
          最下部コンテンツ（Footer 末尾）に重なる。バー1本分の余白を文書末尾に確保する。
          バー非表示時（/contact 配下・✕で閉じた後・カード可視中）はこの余白も出ない。
          この余白は body 末尾にあり後続要素が無いため、出し入れしても他要素は動かない。 */}
      <div aria-hidden="true" className="h-14" />
      <aside
        aria-label="無料相談のご案内"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-sky-200 bg-white/95 py-2.5 backdrop-blur"
      >
        <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <p className="min-w-0 flex-1 text-sm leading-tight text-slate-800">
            <span className="font-semibold">電気代、下げられるか無料相談</span>
            <span className="ml-2 hidden text-xs text-slate-500 sm:inline">
              一般社団法人・中立・営業電話なし・3営業日以内に返信
            </span>
          </p>
          <Link
            href={HREF}
            onClick={() =>
              trackEvent("cta_click", {
                label: "sticky",
                href: HREF,
                from: "sticky",
                cta_from: "sticky",
              })
            }
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-sky-700"
          >
            無料で相談 →
          </Link>
          <button
            type="button"
            onClick={() => {
              // GA は実際の「✕」時のみ。セッション復元では発火しない。
              trackEvent("cta_dismiss", { label: "sticky", from: "sticky", cta_from: "sticky" });
              writeConsultBarDismissed();
              setDismissed(true);
            }}
            aria-label="相談バーを閉じる"
            className="shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>
      </aside>
    </>
  );
}
