"use client";

import Link from "next/link";
import { trackEvent } from "../lib/analytics/ga";

type ConsultCtaProps = {
  /** 来訪元（/contact?from=<source> に渡す。例: "simulate" / "compare" / "scenario" / "home"）。 */
  from: string;
  /** 見出し（省略時は汎用の相談オファー文言）。 */
  heading?: string;
  /** 説明（省略時は中立・無料・返信スピード・営業電話なしの安心文言）。 */
  description?: string;
};

const DEFAULT_HEADING = "電気代、下げられるか無料で相談しませんか？";
const DEFAULT_DESCRIPTION =
  "一般社団法人エネルギー情報センター（中立・非営利）。初回相談は無料、2営業日以内に返信、営業電話は一切いたしません。";

/**
 * 目立つ相談CTAボックス。ツール結果の直後などに置き、/contact へ送客する。
 * クリック時に GA4 へ cta_click（label:"consult"）を送信し、来訪元（from）を計測できる。
 */
export default function ConsultCta({
  from,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
}: ConsultCtaProps) {
  const href = `/contact?from=${encodeURIComponent(from)}`;

  return (
    <section className="rounded-xl border-2 border-sky-400 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">{heading}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{description}</p>
      <div className="mt-5">
        <Link
          href={href}
          onClick={() =>
            trackEvent("cta_click", { label: "consult", href, from })
          }
          className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-sky-700"
        >
          無料で相談する →
        </Link>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※特定の電力会社・プランへの勧誘は行いません（中立）。
      </p>
    </section>
  );
}
