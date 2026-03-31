import { supabase } from "../../../../lib/supabase";

type RiskScoreRow = {
  risk_score: number | null;
};

export async function GET() {
  try {
    const { count: totalSimulationCount, error: totalCountError } = await supabase
      .from("simulation_results")
      .select("id", { count: "exact", head: true });

    if (totalCountError) {
      return Response.json({ ok: false, error: totalCountError.message }, { status: 500 });
    }

    const { data, error } = await supabase
      .from("simulation_results")
      .select("risk_score")
      .not("risk_score", "is", null);

    // risk_score column がまだ無い環境では平均を null で返す
    if (
      error &&
      (error.message.includes("risk_score") || error.message.includes("column"))
    ) {
      return Response.json({
        ok: true,
        averageRiskScore: null,
        count: totalSimulationCount ?? 0,
      });
    }

    if (error) {
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }

    const rows = (data ?? []) as RiskScoreRow[];
    const scores = rows
      .map((row) => Number(row.risk_score))
      .filter((score) => Number.isFinite(score));

    if (scores.length === 0) {
      return Response.json({
        ok: true,
        averageRiskScore: null,
        count: totalSimulationCount ?? 0,
      });
    }

    const sum = scores.reduce((total, score) => total + score, 0);
    const averageRiskScore = Number((sum / scores.length).toFixed(1));

    return Response.json({
      ok: true,
      averageRiskScore,
      count: totalSimulationCount ?? 0,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
