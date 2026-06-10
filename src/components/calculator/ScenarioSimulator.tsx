"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "../../lib/analytics/ga";
import { calculateScenarioSimulation } from "../../lib/calculator/scenarioElectricityCalc";
import type {
  ScenarioCostResult,
  ScenarioSimulationResult,
} from "../../lib/calculator/scenarioElectricityCalc";
import type { ScenarioId } from "../../lib/calculator/scenarioMatrix";
import type {
  BuildingType,
  ContractType,
  IndustryCalculatorInput,
  Region,
  ScaleType,
} from "../../lib/calculator/types";

type Option<T extends string> = { value: T; label: string; hint?: string };

/**
 * 入力選択肢は D-1（業種別電気代計算機）と同一の値・表記。
 * D-1エンジン（lib）と型は再利用し、選択肢ラベルのみ本コンポーネントに併記する。
 */
const BUILDING_OPTIONS: Option<BuildingType>[] = [
  { value: "office", label: "オフィス・サービス業" },
  { value: "retail", label: "小売・商業" },
  { value: "restaurant", label: "飲食" },
  { value: "factory", label: "製造業" },
  { value: "welfare", label: "医療・福祉" },
  { value: "hotel", label: "ホテル・宿泊" },
  { value: "warehouse", label: "物流・倉庫" },
  { value: "school", label: "教育" },
  { value: "datacenter", label: "データセンター" },
  { value: "public", label: "その他・公共" },
];

const CONTRACT_OPTIONS: Option<ContractType>[] = [
  { value: "low", label: "低圧", hint: "契約電力 50kW 未満" },
  { value: "high", label: "高圧", hint: "契約電力 50kW 以上 2,000kW 未満" },
  { value: "special", label: "特別高圧", hint: "契約電力 2,000kW 以上" },
];

const SCALE_OPTIONS: Option<ScaleType>[] = [
  { value: "small", label: "中小", hint: "月 10 万 kWh 未満" },
  { value: "medium", label: "中堅", hint: "月 10 万〜100 万 kWh" },
  { value: "large", label: "大規模", hint: "月 100 万 kWh 超" },
];

const REGION_OPTIONS: Option<Region>[] = [
  { value: "hokkaido", label: "北海道" },
  { value: "tohoku", label: "東北" },
  { value: "kita-kanto", label: "北関東" },
  { value: "shutoken", label: "首都圏（東京）" },
  { value: "hokuriku", label: "北陸" },
  { value: "chubu", label: "中部" },
  { value: "kansai", label: "関西" },
  { value: "chugoku", label: "中国" },
  { value: "shikoku", label: "四国" },
  { value: "kyushu", label: "九州" },
  { value: "okinawa", label: "沖縄" },
];

/**
 * 各シナリオに対応する有事シナリオ分析特集の該当ページ（全URL実在確認済）。
 * baseline は特集トップ、その他は最も近いシナリオページへ送客する。
 */
const SCENARIO_FEATURE_LINK: Record<ScenarioId, { href: string; label: string }> = {
  baseline: {
    href: "/special/emergency-scenario-analysis",
    label: "有事シナリオ分析（特集トップ）",
  },
  upside: {
    href: "/special/emergency-scenario-analysis/scenario-2",
    label: "シナリオ2: 夏まで長期化した場合の電気代リスク",
  },
  structural: {
    href: "/special/emergency-scenario-analysis/quadruple-pressure",
    label: "四重苦: 原油・補助金終了・再エネ賦課金・円安の複合影響",
  },
  easing: {
    href: "/special/emergency-scenario-analysis/scenario-1",
    label: "シナリオ1: 短期安定化での法人電気代影響",
  },
};

const SCENARIO_TONE: Record<
  ScenarioId,
  { bar: string; border: string; badge: string; chip: string }
> = {
  baseline: {
    bar: "bg-slate-400",
    border: "border-slate-300",
    badge: "bg-slate-100 text-slate-700",
    chip: "bg-slate-500",
  },
  upside: {
    bar: "bg-rose-500",
    border: "border-rose-300",
    badge: "bg-rose-100 text-rose-800",
    chip: "bg-rose-500",
  },
  structural: {
    bar: "bg-amber-500",
    border: "border-amber-300",
    badge: "bg-amber-100 text-amber-800",
    chip: "bg-amber-500",
  },
  easing: {
    bar: "bg-emerald-500",
    border: "border-emerald-300",
    badge: "bg-emerald-100 text-emerald-800",
    chip: "bg-emerald-500",
  },
};

const buildingLabelOf = (value: BuildingType): string =>
  BUILDING_OPTIONS.find((o) => o.value === value)?.label ?? value;
const regionLabelOf = (value: Region): string =>
  REGION_OPTIONS.find((o) => o.value === value)?.label ?? value;
const contractLabelOf = (value: ContractType): string =>
  CONTRACT_OPTIONS.find((o) => o.value === value)?.label ?? value;
const scaleLabelOf = (value: ScaleType): string =>
  SCALE_OPTIONS.find((o) => o.value === value)?.label ?? value;

const formatYen = (value: number): string =>
  `¥${Math.round(value).toLocaleString("ja-JP")}`;
const formatSignedYen = (value: number): string =>
  `${value >= 0 ? "+" : "−"}¥${Math.abs(Math.round(value)).toLocaleString("ja-JP")}`;
const formatPercent = (value: number): string =>
  `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
const formatDelta = (value: number): string => {
  if (value === 0) return "±0.0";
  return `${value > 0 ? "+" : "−"}${Math.abs(value).toFixed(1)}`;
};

const parseOptionalNumber = (raw: string): number | undefined => {
  if (!raw.trim()) return undefined;
  const v = Number(raw.replace(/,/g, ""));
  if (!Number.isFinite(v) || v <= 0) return undefined;
  return v;
};

/** ログ保存（テーブル未作成でも graceful・失敗はクライアントで握りつぶす）。 */
async function persistScenarioResult(
  input: IndustryCalculatorInput,
  result: ScenarioSimulationResult,
  selectedScenario: ScenarioId
): Promise<void> {
  const byId = (id: ScenarioId): number =>
    result.scenarios.find((s) => s.id === id)?.estimatedAnnualCost.median ?? 0;
  try {
    await fetch("/api/scenario-simulation-results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        building_type: input.buildingType,
        contract_type: input.contractType,
        region: input.region,
        scale_type: input.scaleType,
        monthly_kwh: result.inputs.monthlyKwh,
        annual_kwh: result.inputs.annualKwh,
        selected_scenario: selectedScenario,
        baseline_annual_cost: byId("baseline"),
        upside_annual_cost: byId("upside"),
        structural_annual_cost: byId("structural"),
        easing_annual_cost: byId("easing"),
      }),
    });
  } catch {
    // 計算・表示を阻害しないため失敗は無視する。
  }
}

export function ScenarioSimulator() {
  const [buildingType, setBuildingType] = useState<BuildingType>("office");
  const [contractType, setContractType] = useState<ContractType>("high");
  const [region, setRegion] = useState<Region>("shutoken");
  const [scaleType, setScaleType] = useState<ScaleType>("medium");
  const [monthlyKwhRaw, setMonthlyKwhRaw] = useState<string>("");
  const [result, setResult] = useState<ScenarioSimulationResult | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<ScenarioId>("upside");

  const resultRef = useRef<HTMLDivElement | null>(null);
  const viewFiredRef = useRef(false);

  useEffect(() => {
    if (viewFiredRef.current) return;
    viewFiredRef.current = true;
    trackEvent("calculator_view", {
      calculator_id: "scenario_simulation",
      page_path: typeof window !== "undefined" ? window.location.pathname : null,
    });
  }, []);

  const handleCalculate = useCallback(() => {
    const input: IndustryCalculatorInput = {
      buildingType,
      contractType,
      region,
      scaleType,
      monthlyKwh: parseOptionalNumber(monthlyKwhRaw),
    };
    const r = calculateScenarioSimulation(input);
    setResult(r);

    trackEvent("calculator_calculate", {
      calculator_id: "scenario_simulation",
      building_type: buildingType,
      region,
      contract_type: contractType,
      scale_type: scaleType,
      selected_scenario: selectedScenario,
      monthly_kwh_provided: input.monthlyKwh != null,
    });

    void persistScenarioResult(input, r, selectedScenario);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [buildingType, contractType, region, scaleType, monthlyKwhRaw, selectedScenario]);

  const handleSelectScenario = useCallback((id: ScenarioId) => {
    setSelectedScenario(id);
    trackEvent("scenario_select", {
      calculator_id: "scenario_simulation",
      selected_scenario: id,
    });
  }, []);

  const handleCtaClick = useCallback(
    (ctaType: "expert_consult" | "industry_calculator" | "emergency_feature" | "pps_net") => {
      trackEvent("calculator_cta_click", {
        calculator_id: "scenario_simulation",
        cta_type: ctaType,
        building_type: buildingType,
        region,
        contract_type: contractType,
        scale_type: scaleType,
      });
    },
    [buildingType, contractType, region, scaleType]
  );

  // 棒グラフ用の最大値（年間額・高位）。
  const chartMax = useMemo(() => {
    if (!result) return 0;
    return Math.max(...result.scenarios.map((s) => s.estimatedAnnualCost.high));
  }, [result]);

  const widthOf = (value: number): string =>
    chartMax > 0 ? `${Math.max(2, (value / chartMax) * 100)}%` : "0%";

  return (
    <div className="space-y-6">
      {/* ===== 入力フォーム ===== */}
      <section className="rounded-xl border border-sky-300 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">自社の条件を選択</h2>
        <p className="mt-1 text-xs text-slate-500">
          ※ 入力内容はブラウザ内で計算します。条件は業種別電気代計算機（D-1）と同一です。
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-900">業種</span>
            <select
              value={buildingType}
              onChange={(e) => setBuildingType(e.target.value as BuildingType)}
              className="mt-1 w-full rounded-md border-2 border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
              aria-label="業種"
            >
              {BUILDING_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-900">電力エリア</span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
              className="mt-1 w-full rounded-md border-2 border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
              aria-label="電力エリア"
            >
              {REGION_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-900">契約区分</span>
            <select
              value={contractType}
              onChange={(e) => setContractType(e.target.value as ContractType)}
              className="mt-1 w-full rounded-md border-2 border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
              aria-label="契約区分"
            >
              {CONTRACT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}{o.hint ? `（${o.hint}）` : ""}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-900">規模</span>
            <select
              value={scaleType}
              onChange={(e) => setScaleType(e.target.value as ScaleType)}
              className="mt-1 w-full rounded-md border-2 border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
              aria-label="規模"
            >
              {SCALE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}{o.hint ? `（${o.hint}）` : ""}
                </option>
              ))}
            </select>
          </label>
        </div>

        <details className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3">
          <summary className="cursor-pointer text-sm font-semibold text-slate-700">
            任意項目（より精度の高い試算）
          </summary>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <label className="block">
              <span className="text-xs font-semibold text-slate-700">月間使用量 (kWh)</span>
              <input
                type="text"
                inputMode="numeric"
                value={monthlyKwhRaw}
                onChange={(e) => setMonthlyKwhRaw(e.target.value)}
                placeholder="未入力なら規模デフォルト"
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
              />
            </label>
          </div>
        </details>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCalculate}
            className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 sm:text-base"
          >
            4シナリオで試算する
          </button>
          {result ? (
            <button
              type="button"
              onClick={() => setResult(null)}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              入力をリセット
            </button>
          ) : null}
        </div>
      </section>

      {/* ===== 結果 ===== */}
      {result ? (
        <div ref={resultRef} className="space-y-6">
          {/* 法的免責（結果上部・必須） */}
          <section className="rounded-lg border border-amber-300 bg-amber-50 p-4" role="note">
            <p className="text-sm font-semibold text-amber-900">
              ※ 各シナリオは「起きた場合」の試算であり、予測ではありません
            </p>
            <p className="mt-1 text-xs leading-6 text-slate-700">
              変動幅（Δ）は公開情報に基づく目安レンジです。再エネ賦課金は2026年度の確定単価を基準（標準シナリオはΔ0）とし、将来の上昇はあくまで「想定」です。本シミュレーターは中立的立場で判断材料を提供するもので、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* シナリオ比較グラフ */}
          <section className="rounded-xl border-2 border-sky-400 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シナリオ別 推定年間電気代</h2>
            <p className="mt-1 text-xs text-slate-600">
              {buildingLabelOf(buildingType)}／{contractLabelOf(contractType)}／{regionLabelOf(region)}／{scaleLabelOf(scaleType)}（年間 {result.inputs.annualKwh.toLocaleString("ja-JP")} kWh）
            </p>

            <div className="mt-4 space-y-3" aria-label="シナリオ別年間電気代の棒グラフ">
              {result.scenarios.map((s) => (
                <ScenarioBar
                  key={s.id}
                  scenario={s}
                  width={widthOf(s.estimatedAnnualCost.median)}
                />
              ))}
            </div>
          </section>

          {/* 比較表 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">シナリオ比較表</h2>
            <p className="mt-1 text-xs text-slate-600">
              上振れ%・差額は「標準（現状継続）」シナリオを基準にした試算です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-300 text-left text-xs text-slate-500">
                    <th className="py-2 pr-3 font-semibold">シナリオ</th>
                    <th className="py-2 pr-3 font-semibold">推定年間電気代（中央値）</th>
                    <th className="py-2 pr-3 font-semibold">レンジ（±8%）</th>
                    <th className="py-2 pr-3 font-semibold">対標準 上振れ</th>
                    <th className="py-2 pr-3 font-semibold">差額</th>
                    <th className="py-2 font-semibold">想定総単価</th>
                  </tr>
                </thead>
                <tbody>
                  {result.scenarios.map((s) => (
                    <tr key={s.id} className="border-b border-slate-100 align-top">
                      <td className="py-2 pr-3">
                        <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${SCENARIO_TONE[s.id].badge}`}>
                          {s.label}
                        </span>
                      </td>
                      <td className="py-2 pr-3 font-bold text-slate-900">
                        {formatYen(s.estimatedAnnualCost.median)}
                      </td>
                      <td className="py-2 pr-3 text-xs text-slate-600">
                        {formatYen(s.estimatedAnnualCost.low)} 〜 {formatYen(s.estimatedAnnualCost.high)}
                      </td>
                      <td className={`py-2 pr-3 font-semibold ${
                        s.upliftVsBaselinePercent > 0 ? "text-rose-700"
                        : s.upliftVsBaselinePercent < 0 ? "text-emerald-700"
                        : "text-slate-700"
                      }`}>
                        {formatPercent(s.upliftVsBaselinePercent)}
                      </td>
                      <td className="py-2 pr-3 text-xs text-slate-700">
                        {s.annualCostDeltaVsBaseline === 0 ? "—" : formatSignedYen(s.annualCostDeltaVsBaseline)}
                      </td>
                      <td className="py-2 text-xs text-slate-700">
                        {s.unitPrice.scenarioTotalUnitPrice.toFixed(2)} 円/kWh
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 各シナリオのΔ内訳・想定注記 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">各シナリオの前提（Δ内訳・想定）</h2>
            <p className="mt-1 text-xs leading-6 text-slate-600">
              ▼ クリックで「注目シナリオ」を選択できます（ログの記録に使用します）。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {result.scenarios.map((s) => (
                <ScenarioDeltaCard
                  key={s.id}
                  scenario={s}
                  selected={selectedScenario === s.id}
                  onSelect={() => handleSelectScenario(s.id)}
                  featureLink={SCENARIO_FEATURE_LINK[s.id]}
                  onFeatureClick={() => handleCtaClick("emergency_feature")}
                />
              ))}
            </div>
          </section>

          {/* 導線・CTA */}
          <section className="rounded-xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-5 shadow-sm">
            <p className="inline-flex rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              NEXT STEP
            </p>
            <h2 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
              シナリオ別の上振れを踏まえて次のアクションを検討する
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              一般社団法人エネルギー情報センターは、中立的立場で電力契約の判断材料を整理します。特定の電力会社・契約形態への勧誘は行いません。
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={`/contact?from=scenario-simulation&building_type=${buildingType}&contract_type=${contractType}&region=${region}&scale_type=${scaleType}&scenario=${selectedScenario}`}
                onClick={() => handleCtaClick("expert_consult")}
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 sm:text-lg"
              >
                専門家に無料で相談する →
              </Link>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/industry-electricity-calculator"
                  onClick={() => handleCtaClick("industry_calculator")}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-sky-500 bg-white px-5 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
                >
                  業種別電気代計算機（現状の詳細試算）
                </Link>
                <Link
                  href="/special/emergency-scenario-analysis"
                  onClick={() => handleCtaClick("emergency_feature")}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  有事シナリオ分析（特集）を読む →
                </Link>
                <a
                  href="https://pps-net.org/unit"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCtaClick("pps_net")}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  電力単価の目安（pps-net）↗
                </a>
              </div>
            </div>
          </section>

          {/* Disclaimer 末尾 */}
          <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs leading-6 text-slate-600">{result.disclaimer}</p>
            <p className="mt-2 text-xs text-slate-500">
              出典: 各電力会社公式料金プラン・各社統合報告書・資源エネルギー庁・OCCTO・電力ガス取引監視等委員会の公表データ（2026年6月時点）。再エネ賦課金は経済産業省告示（2026年度確定値）を基準。
            </p>
          </section>
        </div>
      ) : (
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
          業種・電力エリア・契約区分・規模を選択して「4シナリオで試算する」を押すと、標準（現状継続）・上振れ・構造高止まり・緩和の4シナリオで推定年間電気代を比較表示します。各シナリオは「起きた場合」の目安で、特定の将来を予測するものではありません。
        </section>
      )}
    </div>
  );
}

/* ---- 子コンポーネント ---- */

function ScenarioBar({
  scenario,
  width,
}: {
  scenario: ScenarioCostResult;
  width: string;
}) {
  const tone = SCENARIO_TONE[scenario.id];
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-semibold text-slate-700">{scenario.label}</span>
        <span className="font-bold text-slate-900">
          {formatYen(scenario.estimatedAnnualCost.median)}
          <span className="ml-2 text-xs font-normal text-slate-500">
            {scenario.upliftVsBaselinePercent === 0 ? "（基準）" : formatPercent(scenario.upliftVsBaselinePercent)}
          </span>
        </span>
      </div>
      <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full ${tone.bar} transition-all`}
          style={{ width }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function ScenarioDeltaCard({
  scenario,
  selected,
  onSelect,
  featureLink,
  onFeatureClick,
}: {
  scenario: ScenarioCostResult;
  selected: boolean;
  onSelect: () => void;
  featureLink: { href: string; label: string };
  onFeatureClick: () => void;
}) {
  const tone = SCENARIO_TONE[scenario.id];
  const u = scenario.unitPrice;
  const isStructuralSurcharge = scenario.id === "structural" && u.deltaSurcharge > 0;
  return (
    <div className={`rounded-lg border ${selected ? "border-sky-500 ring-1 ring-sky-300" : tone.border} bg-white p-4`}>
      <div className="flex items-center justify-between gap-2">
        <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${tone.badge}`}>
          {scenario.label}
        </span>
        <button
          type="button"
          onClick={onSelect}
          aria-pressed={selected}
          className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
            selected
              ? "bg-sky-600 text-white"
              : "border border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
          }`}
        >
          {selected ? "✓ 注目中" : "注目シナリオにする"}
        </button>
      </div>

      <p className="mt-2 text-xs leading-6 text-slate-600">{scenario.description}</p>

      <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
        <dt className="text-slate-500">Δ燃料費調整</dt>
        <dd className="text-right font-semibold text-slate-700">{formatDelta(u.deltaFuelAdjustment)} 円/kWh</dd>
        <dt className="text-slate-500">
          Δ再エネ賦課金{isStructuralSurcharge ? "（想定）" : ""}
        </dt>
        <dd className="text-right font-semibold text-slate-700">{formatDelta(u.deltaSurcharge)} 円/kWh</dd>
        <dt className="text-slate-500">市場プレミアム</dt>
        <dd className="text-right font-semibold text-slate-700">{formatDelta(u.marketPremium)} 円/kWh</dd>
        <dt className="text-slate-500">想定総単価</dt>
        <dd className="text-right font-bold text-slate-900">{u.scenarioTotalUnitPrice.toFixed(2)} 円/kWh</dd>
      </dl>

      {isStructuralSurcharge ? (
        <p className="mt-2 rounded border border-amber-200 bg-amber-50 px-2 py-1 text-[11px] leading-5 text-amber-900">
          ※ 賦課金の上昇は確定値ではなく「次年度以降の想定」です。基準は2026年度の確定単価。
        </p>
      ) : null}

      <p className="mt-2 text-[11px] leading-5 text-slate-500">{scenario.sourceNote}</p>

      <Link
        href={featureLink.href}
        onClick={onFeatureClick}
        className="mt-3 inline-flex text-xs font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900"
      >
        → {featureLink.label}
      </Link>
    </div>
  );
}
