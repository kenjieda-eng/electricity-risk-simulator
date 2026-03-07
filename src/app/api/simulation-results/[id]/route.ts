import { supabase } from "../../../../lib/supabase";

type SimulationResultRow = {
  id: string;
  contract_type: string;
  region: string;
  spring_cost: number;
  summer_cost: number;
  autumn_cost: number;
  winter_cost: number;
  start_month: number;
  building_type: string;
  usage_pattern: string;
  floor_area: number;
  fixed_total: number;
  market_total: number;
  diff_rate: number;
  risk_score?: number | null;
  risk_label?: string | null;
  seasonal_variation_score?: number | null;
  peak_score?: number | null;
  usage_pattern_score?: number | null;
  unit_cost_score?: number | null;
  contract_type_score?: number | null;
  region_score?: number | null;
  building_type_score?: number | null;
};

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    if (!id) {
      return Response.json({ ok: false, error: "Missing id" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("simulation_results")
      .select(
        "id,contract_type,region,spring_cost,summer_cost,autumn_cost,winter_cost,start_month,building_type,usage_pattern,floor_area,fixed_total,market_total,diff_rate,risk_score,risk_label,seasonal_variation_score,peak_score,usage_pattern_score,unit_cost_score,contract_type_score,region_score,building_type_score"
      )
      .eq("id", id)
      .maybeSingle();

    if (error) {
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }
    if (!data) {
      return Response.json({ ok: false, error: "対象データが見つかりません。" }, { status: 404 });
    }

    const row = data as SimulationResultRow;
    return Response.json({
      ok: true,
      data: {
        id: row.id,
        input: {
          contract_type: row.contract_type,
          region: row.region,
          spring_cost: row.spring_cost,
          summer_cost: row.summer_cost,
          autumn_cost: row.autumn_cost,
          winter_cost: row.winter_cost,
          start_month: row.start_month,
          building_type: row.building_type,
          usage_pattern: row.usage_pattern,
          floor_area: row.floor_area,
        },
        output: {
          fixed_total: row.fixed_total,
          market_total: row.market_total,
          diff_rate: row.diff_rate,
          risk_score: row.risk_score ?? null,
          risk_label: row.risk_label ?? null,
          seasonal_variation_score: row.seasonal_variation_score ?? null,
          peak_score: row.peak_score ?? null,
          usage_pattern_score: row.usage_pattern_score ?? null,
          unit_cost_score: row.unit_cost_score ?? null,
          contract_type_score: row.contract_type_score ?? null,
          region_score: row.region_score ?? null,
          building_type_score: row.building_type_score ?? null,
        },
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
