"use client";

import Link from "next/link";
import { useMemo } from "react";
import { trackEvent } from "../../lib/analytics/ga";

/**
 * シミュレーター結果→問い合わせ導線の再利用型CTA。
 *
 * 設計方針（DECISIONS.md 2026-04-18）:
 *   - サイトの最終ゴールは「問い合わせ」であり、本コンポーネントはその主要接点。
 *   - /compare の結果直下・下部など、ユーザーが結果を見た直後の「熱量が高い瞬間」に配置。
 *   - 結果の文脈（リスクスコア・契約区分・地域など）を /contact に query params として引き継ぎ、
 *     問い合わせ窓口で「シミュレーター結果を踏まえた相談」であることが一目で分かるUXにする。
 */

export type ContactCtaContext = {
  /** 診断結果のリスクラベル（低・中・高 など） */
  riskLabel?: string | null;
  /** リスクスコア（0〜100） */
  riskScore?: number | null;
  /** 契約区分（low / high / special） */
  contractType?: string | null;
  /** 地域（tokyo / kansai など） */
  region?: string | null;
  /** 固定プランと市場連動プランの差分率（%） */
  diffRate?: number | null;
  /** 結果ID（トレース用） */
  resultId?: string | null;
};

export type ContactCtaCardProps = {
  /** 配置場所の識別子。GA4 送信値 / query param(`from`)にも使う */
  source: string;
  /** 視覚強度 */
  variant?: "primary" | "secondary";
  /** 見出し */
  heading?: string;
  /** サブコピー */
  description?: string;
  /** ボタンラベル */
  ctaLabel?: string;
  /** シミュレーター結果の文脈（空なら付与しない） */
  context?: ContactCtaContext;
  /** 追加の注記（任意） */
  note?: string;
};

function buildContactHref(source: string, context?: ContactCtaContext): string {
  const params = new URLSearchParams();
  params.set("from", source);
  if (context?.riskLabel) params.set("risk_label", context.riskLabel);
  if (context?.riskScore != null) params.set("risk_score", String(Math.round(context.riskScore)));
  if (context?.contractType) params.set("contract_type", context.contractType);
  if (context?.region) params.set("region", context.region);
  if (context?.diffRate != null) params.set("diff_rate", context.diffRate.toFixed(1));
  if (context?.resultId) params.set("result_id", context.resultId);
  return `/contact?${params.toString()}`;
}

export default function ContactCtaCard({
  source,
  variant = "primary",
  heading = "この結果をもとに専門家に相談する",
  description = "シミュレーション結果で見えた上昇リスクや契約メニューの判断について、一般社団法人エネルギー情報センターの専門スタッフに無料でご相談いただけます。",
  ctaLabel = "専門家に相談する（無料）",
  context,
  note = "中立的な立場で、特定の電力会社への勧誘は一切行いません。",
}: ContactCtaCardProps) {
  const href = useMemo(() => buildContactHref(source, context), [source, context]);

  const handleClick = () => {
    trackEvent("contact_cta_click", {
      source,
      variant,
      risk_label: context?.riskLabel ?? null,
      risk_score: context?.riskScore ?? null,
      contract_type: context?.contractType ?? null,
      region: context?.region ?? null,
    });
  };

  const isPrimary = variant === "primary";

  const containerClass = isPrimary
    ? "mt-6 rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-6 shadow-sm sm:p-8"
    : "mt-4 rounded-xl border border-sky-200 bg-sky-50/60 p-5";

  const buttonClass = isPrimary
    ? "inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 sm:text-lg"
    : "inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 sm:text-base";

  return (
    <section className={containerClass} aria-labelledby={`contact-cta-${source}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          {isPrimary ? (
            <span className="inline-flex rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              NEXT STEP
            </span>
          ) : null}
          <h2
            id={`contact-cta-${source}`}
            className={isPrimary ? "mt-3 text-2xl font-bold text-slate-900 sm:text-3xl" : "text-lg font-semibold text-slate-900"}
          >
            {heading}
          </h2>
          <p className={isPrimary ? "mt-3 text-sm leading-7 text-slate-700 sm:text-base" : "mt-1 text-sm leading-6 text-slate-700"}>
            {description}
          </p>
          {context && (context.riskLabel || context.riskScore != null) ? (
            <p className="mt-3 inline-flex flex-wrap items-center gap-2 rounded-lg border border-sky-200 bg-white/80 px-3 py-2 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">シミュレーター結果:</span>
              {context.riskLabel ? (
                <span className="rounded-full bg-sky-100 px-2 py-0.5 font-semibold text-sky-800">
                  リスク: {context.riskLabel}
                </span>
              ) : null}
              {context.riskScore != null ? (
                <span className="rounded-full bg-slate-100 px-2 py-0.5 font-semibold text-slate-800">
                  スコア: {Math.round(context.riskScore)}
                </span>
              ) : null}
              <span className="text-slate-500">— 相談窓口にも引き継がれます</span>
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link href={href} className={buttonClass} onClick={handleClick}>
          {ctaLabel} →
        </Link>
        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
          {note}
        </p>
      </div>

      {isPrimary ? (
        <div className="mt-5 border-t border-amber-200/70 pt-4">
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            初回ご相談は無料です。電力契約の見直し、値上げ通知への対応、社内説明資料の作成支援まで、担当者さまの状況に応じて伴走します。
          </p>
        </div>
      ) : null}
    </section>
  );
}
