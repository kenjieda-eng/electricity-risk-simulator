"use client";

import Link from "next/link";
import { trackEvent } from "../../lib/analytics/ga";
import {
  CONSULT_FACTS,
  buildInlineConsultEvent,
  buildInlineConsultHref,
} from "../../lib/consultCta";

type Props = {
  /** 配置場所の識別子。GA4 の cta_from / source と、/contact への query param(`from`) に使う */
  from: string;
  /** 余白の調整用（配置先のレイアウトに合わせる） */
  className?: string;
};

/**
 * 記事内に置く軽量な相談導線（テキスト1ブロック）。
 *
 * 背景（.ai-team/CONTACT_FUNNEL_AUDIT_2026-07-29.md §7-1）:
 *   ContactCtaCard は 836ページに設置されているが、本文内の相対位置が中央値 98.3%
 *   （836枚中831枚が90%以深）で、可視到達は全PVの 9.7% にとどまる。
 *   カードより手前で相談窓口の存在を伝えることが目的。
 *
 * 設計上の制約:
 *   - カードの複製ではない。画像・大型要素を持たず、テキストと枠線のみで構成する。
 *   - `contact_cta_view` は送信しない。ファネル指標 `contact_cta_view` を ContactCtaCard
 *     単独の系列として維持し（7/29 実測 2,867 との比較可能性を保つ）、
 *     IntersectionObserver のインスタンスを増やさないため。
 *     クリックは `contact_cta_click` に `cta_from` を分けて送る。
 */
export default function InlineConsultLink({ from, className = "" }: Props) {
  const href = buildInlineConsultHref(from);

  return (
    <aside
      className={`rounded-lg border border-sky-200 bg-sky-50/60 px-4 py-3 ${className}`}
      aria-label="電気料金の相談窓口"
    >
      <p className="text-xs leading-6 text-slate-700 sm:text-sm">
        <span className="font-semibold text-slate-900">電気料金の相談窓口:</span>{" "}
        一般社団法人エネルギー情報センターが対応します（{CONSULT_FACTS.join("／")}）。{" "}
        <Link
          href={href}
          onClick={() => trackEvent("contact_cta_click", buildInlineConsultEvent(from))}
          className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900"
        >
          相談する（無料）
        </Link>
      </p>
    </aside>
  );
}
