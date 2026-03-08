import { supabase } from "../../../lib/supabase";

type SimulationResultPayload = {
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
  risk_score?: number;
  risk_label?: string;
  seasonal_variation_score?: number;
  peak_score?: number;
  usage_pattern_score?: number;
  unit_cost_score?: number;
  contract_type_score?: number;
  region_score?: number;
  building_type_score?: number;
};

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

const fieldNameJaMap: Record<string, string> = {
  contract_type: "契約種別",
  region: "エリア",
  spring_cost: "春の月間電気代",
  summer_cost: "夏の月間電気代",
  autumn_cost: "秋の月間電気代",
  winter_cost: "冬の月間電気代",
  start_month: "グラフ開始月",
  building_type: "建物用途",
  usage_pattern: "使用パターン",
  floor_area: "延床面積",
  fixed_total: "固定プラン累計",
  market_total: "市場連動累計",
  diff_rate: "差分率",
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<SimulationResultPayload>;

    const requiredFields = [
      "contract_type",
      "region",
      "spring_cost",
      "summer_cost",
      "autumn_cost",
      "winter_cost",
      "building_type",
      "usage_pattern",
      "floor_area",
      "fixed_total",
      "market_total",
      "diff_rate",
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
    const safeStartMonthRaw = Number(body.start_month);
    const safeStartMonth =
      Number.isFinite(safeStartMonthRaw) && safeStartMonthRaw >= 1 && safeStartMonthRaw <= 12
        ? Math.round(safeStartMonthRaw)
        : 1;
    const basePayload = {
      id,
      contract_type: body.contract_type,
      region: body.region,
      spring_cost: body.spring_cost,
      summer_cost: body.summer_cost,
      autumn_cost: body.autumn_cost,
      winter_cost: body.winter_cost,
      start_month: safeStartMonth,
      building_type: body.building_type,
      usage_pattern: body.usage_pattern,
      floor_area: body.floor_area,
      fixed_total: body.fixed_total,
      market_total: body.market_total,
      diff_rate: body.diff_rate,
    };

    let { error } = await supabase.from("simulation_results").insert({
      ...basePayload,
      risk_score: body.risk_score,
      risk_label: body.risk_label,
      seasonal_variation_score: body.seasonal_variation_score,
      peak_score: body.peak_score,
      usage_pattern_score: body.usage_pattern_score,
      unit_cost_score: body.unit_cost_score,
      contract_type_score: body.contract_type_score,
      region_score: body.region_score,
      building_type_score: body.building_type_score,
    });

    // risk_score/risk_label column がまだ無い環境でも保存できるようにフォールバック
    if (
      error &&
      (error.message.includes("risk_score") ||
        error.message.includes("risk_label") ||
        error.message.includes("column"))
    ) {
      const retry = await supabase.from("simulation_results").insert(basePayload);
      error = retry.error;
    }

    if (error) {
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }

    return Response.json({
      ok: true,
      id,
      riskScore: body.risk_score ?? null,
      riskLabel: body.risk_label ?? null,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
