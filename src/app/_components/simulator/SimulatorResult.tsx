"use client";

import ContactCtaCard from "../../../components/contact/ContactCtaCard";
import type { SimulatorResultProps } from "./types";

export function SimulatorResult({
  state,
  currentScenario,
  visibleTotalCards,
  commentaryLines,
  riskScoreResult,
  isSaving,
  saveError,
  onSave,
}: SimulatorResultProps) {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {visibleTotalCards.length > 0 ? (
          visibleTotalCards.map((card) => (
            <div key={card.key} className={card.className}>
              <p className={`text-sm font-semibold ${card.subTextClassName}`}>{card.label}</p>
              <p className={`mt-2 text-3xl font-bold ${card.textClassName}`}>
                {card.total.toLocaleString("ja-JP")} 万円
              </p>
            </div>
          ))
        ) : (
          <p className="rounded-xl border border-slate-200 bg-white p-4 text-base text-slate-600">
            表示するプランを選択してください。
          </p>
        )}
      </div>
      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
          結果解説
        </p>
        <div className="mt-2 space-y-1 text-base leading-7 text-slate-700">
          {commentaryLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <button
          type="button"
          onClick={onSave}
          disabled={isSaving}
          className="inline-flex items-center justify-center rounded-lg border border-rose-700 bg-rose-700 px-5 py-3 text-base font-bold text-white shadow-sm transition hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-rose-300 sm:text-lg"
        >
          {isSaving
            ? "移動中"
            : "この入力内容で電力料金上昇リスクスコア（点数）を確認する"}
        </button>
        {saveError && (
          <p className="mt-2 text-base text-rose-700">{saveError}</p>
        )}
      </div>

      <ContactCtaCard
        source="simulate-result"
        variant="primary"
        heading="この条件での判断、専門家と一緒に整理しませんか？"
        description="入力中のシナリオと診断結果を踏まえて、契約見直し・値上げ通知対応・社内説明の進め方まで、エネルギー情報センターの専門スタッフが無料でご相談に応じます。"
        context={{
          riskLabel: riskScoreResult.label,
          riskScore: riskScoreResult.score,
          contractType: state.contractType || null,
          region: state.region || null,
          diffRate:
            currentScenario.totalA > 0
              ? Number(
                  (
                    ((currentScenario.totalB - currentScenario.totalA) /
                      currentScenario.totalA) *
                    100
                  ).toFixed(1)
                )
              : null,
        }}
      />
    </>
  );
}
