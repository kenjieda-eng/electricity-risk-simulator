import type { Dispatch, RefObject, SetStateAction } from "react";
import type { RiskScoreResult } from "../../../lib/riskScore";
import type { ScenarioResult, SimulationInput } from "../../../lib/simulator";

export type InputState = SimulationInput;

export type ChartSeriesKey =
  | "baselineFixed"
  | "baselineMarket"
  | "currentFixed"
  | "currentMarket";

export type SeriesVisibility = Record<ChartSeriesKey, boolean>;

export type VisibleTotalCard = {
  key: ChartSeriesKey;
  label: string;
  total: number;
  className: string;
  textClassName: string;
  subTextClassName: string;
  requiresStress?: boolean;
};

export type SimulatorFormProps = {
  state: InputState;
  setState: Dispatch<SetStateAction<InputState>>;
  worstCaseRef: RefObject<HTMLInputElement | null>;
};

export type SimulatorChartProps = {
  state: InputState;
  setState: Dispatch<SetStateAction<InputState>>;
  orderedMonths: number[];
  baselineScenario: ScenarioResult;
  currentScenario: ScenarioResult;
  hasStressFactors: boolean;
  seriesVisibility: SeriesVisibility;
  toggleSeriesVisibility: (key: ChartSeriesKey) => void;
  visibleTotalCards: VisibleTotalCard[];
  commentaryLines: string[];
  riskScoreResult: RiskScoreResult;
  isSaving: boolean;
  saveError: string;
  onSave: () => void | Promise<void>;
};

export type SimulatorResultProps = {
  state: InputState;
  currentScenario: ScenarioResult;
  visibleTotalCards: VisibleTotalCard[];
  commentaryLines: string[];
  riskScoreResult: RiskScoreResult;
  isSaving: boolean;
  saveError: string;
  onSave: () => void | Promise<void>;
};
