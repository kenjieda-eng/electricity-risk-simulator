import { supabase } from "../../../lib/supabase";

/**
 * D-2 シナリオ別シミュレーション結果のログ保存 API（POST中心）。
 *
 * 既存 `src/app/api/simulation-results/route.ts` のフォールバック方式に倣う。
 * ★テーブル `scenario_simulation_results` が未作成でも graceful に動作する
 *   （insert 失敗時は 200 + persisted:false を返し、クライアントは握りつぶす）。
 *   計算・表示は API の成否に一切依存しない。
 * ★既存 `simulation_results` は非破壊（本ルートは新テーブルのみを扱う）。
 *
 * DDL（江田が Supabase で適用）:
 *   create table if not exists public.scenario_simulation_results (
 *     id uuid primary key,
 *     building_type text not null,
 *     contract_type text not null,
 *     region text not null,
 *     scale_type text not null,
 *     monthly_kwh numeric,
 *     annual_kwh numeric,
 *     selected_scenario text,
 *     baseline_annual_cost numeric not null,
 *     upside_annual_cost numeric not null,
 *     structural_annual_cost numeric not null,
 *     easing_annual_cost numeric not null,
 *     created_at timestamptz not null default now()
 *   );
 */

type ScenarioResultPayload = {
  building_type: string;
  contract_type: string;
  region: string;
  scale_type: string;
  monthly_kwh?: number;
  annual_kwh?: number;
  selected_scenario?: string;
  baseline_annual_cost: number;
  upside_annual_cost: number;
  structural_annual_cost: number;
  easing_annual_cost: number;
};

const fieldNameJaMap: Record<string, string> = {
  building_type: "業種",
  contract_type: "契約区分",
  region: "エリア",
  scale_type: "規模",
  baseline_annual_cost: "標準シナリオ年間額",
  upside_annual_cost: "上振れシナリオ年間額",
  structural_annual_cost: "構造高止まりシナリオ年間額",
  easing_annual_cost: "緩和シナリオ年間額",
};

/** テーブル未作成 / カラム不足など「スキーマ未整備」由来のエラーか判定。 */
function isMissingSchemaError(message: string): boolean {
  const m = message.toLowerCase();
  return (
    m.includes("scenario_simulation_results") ||
    m.includes("does not exist") ||
    m.includes("relation") ||
    m.includes("schema cache") ||
    m.includes("could not find") ||
    m.includes("column")
  );
}

const toFiniteNumber = (value: unknown): number | null => {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ScenarioResultPayload>;

    const requiredFields = [
      "building_type",
      "contract_type",
      "region",
      "scale_type",
      "baseline_annual_cost",
      "upside_annual_cost",
      "structural_annual_cost",
      "easing_annual_cost",
    ] as const;

    for (const field of requiredFields) {
      if (body[field] === undefined || body[field] === null || body[field] === "") {
        const fieldName = fieldNameJaMap[field] ?? field;
        return Response.json(
          { ok: false, error: `未入力の項目があります: ${fieldName}` },
          { status: 400 }
        );
      }
    }

    const id = crypto.randomUUID();
    const payload = {
      id,
      building_type: body.building_type,
      contract_type: body.contract_type,
      region: body.region,
      scale_type: body.scale_type,
      monthly_kwh: toFiniteNumber(body.monthly_kwh),
      annual_kwh: toFiniteNumber(body.annual_kwh),
      selected_scenario: body.selected_scenario ?? null,
      baseline_annual_cost: toFiniteNumber(body.baseline_annual_cost),
      upside_annual_cost: toFiniteNumber(body.upside_annual_cost),
      structural_annual_cost: toFiniteNumber(body.structural_annual_cost),
      easing_annual_cost: toFiniteNumber(body.easing_annual_cost),
    };

    const { error } = await supabase
      .from("scenario_simulation_results")
      .insert(payload);

    if (error) {
      // テーブル未整備（DDL未適用）でも計算・表示を阻害しないよう graceful に返す。
      if (isMissingSchemaError(error.message)) {
        return Response.json({ ok: true, persisted: false, id });
      }
      // それ以外のエラーも非致命扱い（クライアントは握りつぶす）。
      return Response.json(
        { ok: false, persisted: false, error: error.message },
        { status: 200 }
      );
    }

    return Response.json({ ok: true, persisted: true, id });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    // パース失敗等も計算・表示を阻害しない（非致命）。
    return Response.json({ ok: false, persisted: false, error: message }, { status: 200 });
  }
}
