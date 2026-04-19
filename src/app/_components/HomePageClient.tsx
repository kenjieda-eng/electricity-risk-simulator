"use client";

import Link from "next/link";
import { SimulatorInputs, StressFactorChecks } from "./simulator/SimulatorForm";
import { SimulatorChart } from "./simulator/SimulatorChart";
import { SimulatorResult } from "./simulator/SimulatorResult";
import { useSimulatorState } from "./simulator/useSimulatorState";

export default function HomePageClient() {
  const {
    state,
    setState,
    simulationCount,
    averageRiskScore,
    isSaving,
    saveError,
    seriesVisibility,
    worstCaseRef,
    orderedMonths,
    baselineScenario,
    currentScenario,
    hasStressFactors,
    visibleTotalCards,
    commentaryLines,
    riskScoreResult,
    toggleSeriesVisibility,
    handleAnonymousShare,
  } = useSimulatorState();

  return (
    <main className="mx-auto max-w-[1600px] px-4 py-5 text-slate-800 antialiased sm:px-6 lg:px-8">
      <header className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            法人向け 電気料金上昇リスクシュミレーターにデータ入力する（診断をする）
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            企業向け・法人向けに、契約条件や価格上昇リスク要因をもとに開始月から12か月間の累計電気代と上昇リスクを比較・可視化できます。
          </p>
        </div>
        <Link
          href="/how-to"
          className="inline-flex items-center self-start rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          使い方
        </Link>
      </header>

      <section
        aria-label="これまでの診断実施実績"
        className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-2"
      >
        <div className="rounded-lg border border-sky-200 bg-sky-50/70 px-3 py-2">
          <p className="text-sm font-semibold text-slate-700 sm:text-base">
            診断実施回数:{" "}
            <span className="text-base font-bold text-slate-900 sm:text-xl">
              {simulationCount !== null
                ? `${simulationCount.toLocaleString("ja-JP")} 回`
                : "-"}
            </span>
          </p>
        </div>
        <div className="rounded-lg border border-sky-200 bg-sky-50/70 px-3 py-2">
          <p className="text-sm font-semibold text-slate-700 sm:text-base">
            リスク平均スコア:{" "}
            <span className="text-base font-bold text-slate-900 sm:text-xl">
              {averageRiskScore !== null
                ? `${averageRiskScore.toFixed(1)} / 100`
                : "-"}
            </span>
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
        <SimulatorInputs state={state} setState={setState} />

        <div className="flex flex-col gap-6">
          <section className="order-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <SimulatorChart
              state={state}
              setState={setState}
              orderedMonths={orderedMonths}
              baselineScenario={baselineScenario}
              currentScenario={currentScenario}
              hasStressFactors={hasStressFactors}
              seriesVisibility={seriesVisibility}
              toggleSeriesVisibility={toggleSeriesVisibility}
            />
            <SimulatorResult
              state={state}
              currentScenario={currentScenario}
              visibleTotalCards={visibleTotalCards}
              commentaryLines={commentaryLines}
              riskScoreResult={riskScoreResult}
              isSaving={isSaving}
              saveError={saveError}
              onSave={handleAnonymousShare}
            />
          </section>

          <StressFactorChecks state={state} setState={setState} worstCaseRef={worstCaseRef} />
        </div>
      </section>
    </main>
  );
}
