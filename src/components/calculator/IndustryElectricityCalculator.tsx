"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "../../lib/analytics/ga";
import { calculateIndustryElectricity } from "../../lib/calculator";
import type {
  BuildingType,
  ContractType,
  IndustryCalculatorInput,
  IndustryCalculatorResult,
  Region,
  ScaleType,
} from "../../lib/calculator";

type Option<T extends string> = { value: T; label: string; hint?: string };

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
 * 業種別の関連記事マッピング（全URL grep 実在確認済・2026-05-30）。
 * フォールバックは /articles/by-industry（業種別ハブ）。
 */
const INDUSTRY_ARTICLE_MAP: Record<BuildingType, { href: string; label: string }> = {
  office: { href: "/office-electricity-cost-benchmark", label: "オフィスの電気代ベンチマーク" },
  retail: { href: "/retail-store-electricity-cost-review", label: "小売店舗の電気代見直し" },
  restaurant: { href: "/restaurant-chain-electricity-cost-review", label: "飲食チェーンの電気代見直し" },
  factory: { href: "/factory-electricity-cost-benchmark", label: "工場の電気代ベンチマーク" },
  welfare: { href: "/hospital-electricity-cost-review", label: "病院の電気代見直し" },
  hotel: { href: "/hotel-electricity-cost-review", label: "ホテルの電気代見直し" },
  warehouse: { href: "/warehouse-electricity-cost-review", label: "物流倉庫の電気代見直し" },
  school: { href: "/school-electricity-cost-review", label: "学校・教育施設の電気代見直し" },
  datacenter: { href: "/datacenter-electricity-contract-guide", label: "データセンターの電力契約ガイド" },
  public: { href: "/articles/by-industry", label: "業種別の電気代解説（ハブ）" },
};

const buildingLabelOf = (value: BuildingType): string =>
  BUILDING_OPTIONS.find((o) => o.value === value)?.label ?? value;
const regionLabelOf = (value: Region): string =>
  REGION_OPTIONS.find((o) => o.value === value)?.label ?? value;
const contractLabelOf = (value: ContractType): string =>
  CONTRACT_OPTIONS.find((o) => o.value === value)?.label ?? value;
const scaleLabelOf = (value: ScaleType): string =>
  SCALE_OPTIONS.find((o) => o.value === value)?.label ?? value;

const formatYen = (value: number): string => `¥${Math.round(value).toLocaleString("ja-JP")}`;
const formatPercent = (value: number): string =>
  `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;

type DeviationBand = { label: string; tone: "positive" | "neutral" | "caution" | "warning"; advice: string };

const classifyDeviation = (percent: number): DeviationBand => {
  if (percent <= -10) {
    return {
      label: "業種中央値より低水準",
      tone: "positive",
      advice: "業種平均より効率的に運用できている水準の試算です。現契約の更新期限管理と再エネ調達の上乗せ余地を確認しましょう。",
    };
  }
  if (percent < 10) {
    return {
      label: "ほぼ業種中央値",
      tone: "neutral",
      advice: "業種平均と同程度の水準の試算です。相見積を取ると 5〜10% 程度の削減機会が見つかりやすい水準です。",
    };
  }
  if (percent < 25) {
    return {
      label: "業種中央値より高め",
      tone: "caution",
      advice: "業種平均より高めの水準の試算です。契約プラン・契約電力・設備対策の見直しと相見積取得を推奨します。",
    };
  }
  return {
    label: "業種中央値より大幅に高い",
    tone: "warning",
    advice: "業種平均を大きく上回る水準の試算です。契約プラン改定・デマンド見直し・設備対策を組み合わせた包括見直しを推奨します。",
  };
};

const toneToBadgeClass = (tone: DeviationBand["tone"]): string => {
  switch (tone) {
    case "positive":
      return "bg-emerald-100 text-emerald-800";
    case "caution":
      return "bg-amber-100 text-amber-800";
    case "warning":
      return "bg-rose-100 text-rose-800";
    default:
      return "bg-sky-100 text-sky-800";
  }
};

const parseOptionalNumber = (raw: string): number | undefined => {
  if (!raw.trim()) return undefined;
  const v = Number(raw.replace(/,/g, ""));
  if (!Number.isFinite(v) || v <= 0) return undefined;
  return v;
};

export function IndustryElectricityCalculator() {
  const [buildingType, setBuildingType] = useState<BuildingType>("office");
  const [contractType, setContractType] = useState<ContractType>("high");
  const [region, setRegion] = useState<Region>("shutoken");
  const [scaleType, setScaleType] = useState<ScaleType>("medium");
  const [monthlyKwhRaw, setMonthlyKwhRaw] = useState<string>("");
  const [currentAnnualCostRaw, setCurrentAnnualCostRaw] = useState<string>("");
  const [floorAreaRaw, setFloorAreaRaw] = useState<string>("");
  const [result, setResult] = useState<IndustryCalculatorResult | null>(null);

  const resultRef = useRef<HTMLDivElement | null>(null);
  const viewFiredRef = useRef(false);

  // 初回マウントでGA4ページ閲覧イベント
  useEffect(() => {
    if (viewFiredRef.current) return;
    viewFiredRef.current = true;
    trackEvent("calculator_view", {
      calculator_id: "industry_electricity",
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
      currentAnnualCost: parseOptionalNumber(currentAnnualCostRaw),
      floorArea: parseOptionalNumber(floorAreaRaw),
    };
    const r = calculateIndustryElectricity(input);
    setResult(r);

    trackEvent("calculator_calculate", {
      calculator_id: "industry_electricity",
      building_type: buildingType,
      region,
      contract_type: contractType,
      scale_type: scaleType,
      monthly_kwh_provided: input.monthlyKwh != null,
    });

    // 結果領域へスクロール
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [buildingType, contractType, region, scaleType, monthlyKwhRaw, currentAnnualCostRaw, floorAreaRaw]);

  const handleCtaClick = useCallback((ctaType: "expert_consult" | "simulator" | "article") => {
    trackEvent("calculator_cta_click", {
      calculator_id: "industry_electricity",
      cta_type: ctaType,
      building_type: buildingType,
      region,
      contract_type: contractType,
      scale_type: scaleType,
    });
  }, [buildingType, contractType, region, scaleType]);

  const deviationBand = useMemo(
    () => (result ? classifyDeviation(result.benchmark.deviationFromMedianPercent) : null),
    [result]
  );

  // 横棒グラフ用の最大値
  const benchmarkMax = useMemo(() => {
    if (!result) return 0;
    return Math.max(
      result.benchmark.selfEstimatedAnnualCost,
      result.benchmark.industryMedianAnnualCost,
      result.benchmark.industryTop25PercentAnnualCost
    );
  }, [result]);

  const widthOf = (value: number): string =>
    benchmarkMax > 0 ? `${Math.max(2, (value / benchmarkMax) * 100)}%` : "0%";

  const article = INDUSTRY_ARTICLE_MAP[buildingType];

  return (
    <div className="space-y-6">
      {/* ===== 入力フォーム ===== */}
      <section className="rounded-xl border border-sky-300 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">自社の条件を選択</h2>
        <p className="mt-1 text-xs text-slate-500">
          ※ 入力内容はブラウザ内で計算するのみで、サーバには送信されません。
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
            <label className="block">
              <span className="text-xs font-semibold text-slate-700">現在の年間電気代 (円)</span>
              <input
                type="text"
                inputMode="numeric"
                value={currentAnnualCostRaw}
                onChange={(e) => setCurrentAnnualCostRaw(e.target.value)}
                placeholder="参考表示用（任意）"
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-slate-700">建物面積 (m²)</span>
              <input
                type="text"
                inputMode="numeric"
                value={floorAreaRaw}
                onChange={(e) => setFloorAreaRaw(e.target.value)}
                placeholder="任意"
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
            計算する
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
      {result && deviationBand ? (
        <div ref={resultRef} className="space-y-6">
          {/* 法的免責（結果上部・必須） */}
          <section className="rounded-lg border border-amber-300 bg-amber-50 p-4" role="note">
            <p className="text-sm font-semibold text-amber-900">
              ※ 本試算はあくまで目安です
            </p>
            <p className="mt-1 text-xs leading-6 text-slate-700">
              実際の電気代は契約条件・使用パターン・燃料費調整・各種制度負担により変動します。具体的な単価・条件は契約書および個別見積で確認してください。本計算機は中立的立場で判断材料を提供するもので、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 推定年間電気代 */}
          <section className="rounded-xl border-2 border-sky-400 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">推定年間電気代</h2>
            <p className="mt-1 text-xs text-slate-600">
              {buildingLabelOf(buildingType)}／{contractLabelOf(contractType)}／{regionLabelOf(region)}／{scaleLabelOf(scaleType)}
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-sky-200 bg-white p-4">
                <p className="text-xs text-slate-500">中央値（試算）</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">{formatYen(result.estimatedAnnualCost.median)}</p>
                <p className="mt-2 text-xs text-slate-600">月平均 {formatYen(Math.round(result.estimatedAnnualCost.median / 12))}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs text-slate-500">レンジ</p>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  {formatYen(result.estimatedAnnualCost.low)} 〜 {formatYen(result.estimatedAnnualCost.high)}
                </p>
                <p className="mt-2 text-xs text-slate-600">中央値 ±8%（条件差・燃調変動を織り込み）</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs text-slate-500">業種中央値との差</p>
                <p className={`mt-1 text-xl font-bold ${
                  result.benchmark.deviationFromMedianPercent >= 10 ? "text-rose-700"
                  : result.benchmark.deviationFromMedianPercent <= -10 ? "text-emerald-700"
                  : "text-slate-900"
                }`}>
                  {formatPercent(result.benchmark.deviationFromMedianPercent)}
                </p>
                <p className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${toneToBadgeClass(deviationBand.tone)}`}>
                  {deviationBand.label}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">{deviationBand.advice}</p>

            <div className="mt-4 rounded-md border border-sky-200 bg-white p-3 text-xs leading-6 text-slate-600">
              <p>
                単価内訳（円/kWh）: 業務用基準 {result.unitPrice.baseUnitPrice.toFixed(1)}
                ／契約係数 ×{result.unitPrice.contractFactor}
                ／エリア係数 ×{result.unitPrice.regionFactor}
                ／燃料費調整 +{result.unitPrice.fuelAdjustment.toFixed(2)}
                ／再エネ賦課金 +{result.unitPrice.renewableSurcharge.toFixed(2)}
                ／基本料金均し +{result.unitPrice.baseChargeEquivalent.toFixed(2)}
                <br />
                <strong>= 推定総単価 {result.unitPrice.totalUnitPrice.toFixed(2)} 円/kWh</strong>（年間 {result.inputs.annualKwh.toLocaleString("ja-JP")} kWh）
              </p>
            </div>
          </section>

          {/* 業種ベンチマーク横棒 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種ベンチマーク比較</h2>
            <p className="mt-1 text-xs text-slate-600">
              業種中央値・上位 25% との比較。値は試算ベース、業種中央値は全国基準（首都圏×高圧）に正規化。
            </p>

            <div className="mt-4 space-y-3" aria-label="業種ベンチマーク横棒グラフ">
              <BenchmarkBar
                label="自社推定"
                amount={result.benchmark.selfEstimatedAnnualCost}
                width={widthOf(result.benchmark.selfEstimatedAnnualCost)}
                color="bg-sky-500"
              />
              <BenchmarkBar
                label="業種中央値"
                amount={result.benchmark.industryMedianAnnualCost}
                width={widthOf(result.benchmark.industryMedianAnnualCost)}
                color="bg-slate-400"
              />
              <BenchmarkBar
                label="業種上位 25%（高効率）"
                amount={result.benchmark.industryTop25PercentAnnualCost}
                width={widthOf(result.benchmark.industryTop25PercentAnnualCost)}
                color="bg-emerald-500"
              />
            </div>
          </section>

          {/* 削減余地 3案 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">削減余地（3案・並列の判断材料）</h2>
            <p className="mt-1 text-xs leading-6 text-slate-600">
              3案は中立的立場で並列に整理した判断材料です。特定の打ち手を推奨するものではなく、自社条件・経営方針に応じて組み合わせて検討してください。
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <ReductionCard
                title="① 契約見直し"
                description={result.reductionPotential.contractReview.description}
                low={result.reductionPotential.contractReview.annualSavingsLow}
                median={result.reductionPotential.contractReview.annualSavingsMedian}
                high={result.reductionPotential.contractReview.annualSavingsHigh}
                rateLow={result.reductionPotential.contractReview.reductionRateLow}
                rateHigh={result.reductionPotential.contractReview.reductionRateHigh}
                paybackNote={result.reductionPotential.contractReview.paybackNote}
              />
              <ReductionCard
                title="② 省エネ投資"
                description={result.reductionPotential.energySavingInvestment.description}
                low={result.reductionPotential.energySavingInvestment.annualSavingsLow}
                median={result.reductionPotential.energySavingInvestment.annualSavingsMedian}
                high={result.reductionPotential.energySavingInvestment.annualSavingsHigh}
                rateLow={result.reductionPotential.energySavingInvestment.reductionRateLow}
                rateHigh={result.reductionPotential.energySavingInvestment.reductionRateHigh}
                paybackNote={result.reductionPotential.energySavingInvestment.paybackNote}
              />
              <ReductionCard
                title="③ 再エネ調達（PPA）"
                description={result.reductionPotential.renewableProcurement.description}
                low={result.reductionPotential.renewableProcurement.annualSavingsLow}
                median={result.reductionPotential.renewableProcurement.annualSavingsMedian}
                high={result.reductionPotential.renewableProcurement.annualSavingsHigh}
                rateLow={result.reductionPotential.renewableProcurement.reductionRateLow}
                rateHigh={result.reductionPotential.renewableProcurement.reductionRateHigh}
                paybackNote={result.reductionPotential.renewableProcurement.paybackNote}
              />
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-5 shadow-sm">
            <p className="inline-flex rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              NEXT STEP
            </p>
            <h2 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
              この試算をもとに次のアクションを検討する
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              一般社団法人エネルギー情報センターは、中立的立場で電力契約の判断材料を整理します。特定の電力会社・契約形態への勧誘は行いません。
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={`/contact?from=industry-calculator&building_type=${buildingType}&contract_type=${contractType}&region=${region}&scale_type=${scaleType}`}
                onClick={() => handleCtaClick("expert_consult")}
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 sm:text-lg"
              >
                専門家に無料で相談する →
              </Link>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/simulate"
                  onClick={() => handleCtaClick("simulator")}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-sky-500 bg-white px-5 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
                >
                  シミュレーターで詳細診断
                </Link>
                <Link
                  href={article.href}
                  onClick={() => handleCtaClick("article")}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  {buildingLabelOf(buildingType)}の解説を読む →
                </Link>
              </div>
            </div>
          </section>

          {/* Disclaimer 末尾 */}
          <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs leading-6 text-slate-600">{result.disclaimer}</p>
            <p className="mt-2 text-xs text-slate-500">
              出典: 各電力会社公式料金プラン・各社統合報告書・資源エネルギー庁・OCCTO・電力ガス取引監視等委員会の公表データ（2025年10月時点）。
            </p>
          </section>
        </div>
      ) : (
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
          業種・電力エリア・契約区分・規模を選択して「計算する」を押すと、推定年間電気代・業種ベンチマーク比較・削減余地3案を即時に表示します。月間 kWh が分かる場合は任意項目欄に入力するとより精度の高い試算になります。
        </section>
      )}
    </div>
  );
}

/* ---- 子コンポーネント ---- */

function BenchmarkBar({
  label,
  amount,
  width,
  color,
}: {
  label: string;
  amount: number;
  width: string;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-semibold text-slate-700">{label}</span>
        <span className="font-bold text-slate-900">{formatYen(amount)}</span>
      </div>
      <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full ${color} transition-all`}
          style={{ width }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function ReductionCard({
  title,
  description,
  low,
  median,
  high,
  rateLow,
  rateHigh,
  paybackNote,
}: {
  title: string;
  description: string;
  low: number;
  median: number;
  high: number;
  rateLow: number;
  rateHigh: number;
  paybackNote: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-xs leading-6 text-slate-600">{description}</p>
      <dl className="mt-3 space-y-1 text-xs">
        <div className="flex justify-between">
          <dt className="text-slate-500">削減率レンジ</dt>
          <dd className="font-semibold text-slate-700">
            {Math.round(rateLow * 100)}〜{Math.round(rateHigh * 100)}%
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">概算削減額（中央値・年）</dt>
          <dd className="font-bold text-emerald-700">{formatYen(median)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">レンジ（低位〜高位）</dt>
          <dd className="text-slate-700">{formatYen(low)}〜{formatYen(high)}</dd>
        </div>
      </dl>
      <p className="mt-3 border-t border-slate-200 pt-2 text-xs leading-6 text-slate-500">{paybackNote}</p>
    </div>
  );
}
