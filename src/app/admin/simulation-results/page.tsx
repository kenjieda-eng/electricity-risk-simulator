import Link from "next/link";

import { createAdminServerClient } from "../../../lib/supabase/adminServerClient";

const PAGE_SIZE = 500;

type SimulationResultRow = {
  id: string;
  created_at: string | null;
  contract_type: string | null;
  region: string | null;
  building_type: string | null;
  usage_pattern: string | null;
  floor_area: number | null;
  spring_cost: number | null;
  summer_cost: number | null;
  autumn_cost: number | null;
  winter_cost: number | null;
  fixed_total: number | null;
  market_total: number | null;
  risk_score: number | null;
  risk_label: string | null;
};

const dateTimeFormatter = new Intl.DateTimeFormat("ja-JP", {
  dateStyle: "medium",
  timeStyle: "short",
});

const numberFormatter = new Intl.NumberFormat("ja-JP");

function formatDate(value: string | null): string {
  if (!value) return "-";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return dateTimeFormatter.format(parsed);
}

function formatNumber(value: number | null, unit?: string): string {
  if (value === null || value === undefined || Number.isNaN(value)) return "-";
  return unit ? `${numberFormatter.format(value)} ${unit}` : numberFormatter.format(value);
}

function resolveCurrentPlan(fixedTotal: number | null, marketTotal: number | null): string {
  if (fixedTotal === null || marketTotal === null) return "-";
  if (fixedTotal < marketTotal) return "固定プラン優位";
  if (marketTotal < fixedTotal) return "市場連動優位";
  return "同水準";
}

export default async function AdminSimulationResultsPage() {
  const supabase = createAdminServerClient();

  const selectColumns =
    "id,created_at,contract_type,region,building_type,usage_pattern,floor_area,spring_cost,summer_cost,autumn_cost,winter_cost,fixed_total,market_total,risk_score,risk_label";

  let { data, error, count } = await supabase
    .from("simulation_results")
    .select(selectColumns, { count: "exact" })
    .order("created_at", { ascending: false })
    .limit(PAGE_SIZE);

  if (error && error.message.includes("created_at")) {
    const retry = await supabase
      .from("simulation_results")
      .select(selectColumns, { count: "exact" })
      .limit(PAGE_SIZE);
    data = retry.data;
    error = retry.error;
    count = retry.count;
  }

  const rows = ((data ?? []) as SimulationResultRow[]).sort((a, b) => {
    if (!a.created_at && !b.created_at) return 0;
    if (!a.created_at) return 1;
    if (!b.created_at) return -1;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1500px] px-6 py-8 text-slate-800">
      <header className="mb-6 flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">シミュレーション結果一覧</h1>
          <p className="mt-2 text-sm text-slate-600">
            現在 {formatNumber(count ?? rows.length)} 件（表示中: {formatNumber(rows.length)} 件 / 最大{" "}
            {PAGE_SIZE} 件）
          </p>
        </div>
        <Link href="/admin" className="text-sm font-semibold text-slate-700 underline underline-offset-4">
          管理画面トップへ戻る
        </Link>
      </header>

      {error ? (
        <section className="rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
          データ取得に失敗しました: {error.message}
        </section>
      ) : rows.length === 0 ? (
        <section className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          表示できる保存データがありません。
        </section>
      ) : (
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-[1450px] table-auto border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-3 py-3 font-semibold">作成日時</th>
                <th className="px-3 py-3 font-semibold">契約種別</th>
                <th className="px-3 py-3 font-semibold">エリア</th>
                <th className="px-3 py-3 font-semibold">建物用途</th>
                <th className="px-3 py-3 font-semibold">使用パターン</th>
                <th className="px-3 py-3 font-semibold">延床面積(㎡)</th>
                <th className="px-3 py-3 font-semibold">春/夏/秋/冬 月額(万円)</th>
                <th className="px-3 py-3 font-semibold">固定累計(万円)</th>
                <th className="px-3 py-3 font-semibold">市場連動累計(万円)</th>
                <th className="px-3 py-3 font-semibold">現在優位プラン</th>
                <th className="px-3 py-3 font-semibold">リスクスコア</th>
                <th className="px-3 py-3 font-semibold">リスク判定</th>
                <th className="px-3 py-3 font-semibold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-slate-100 align-top hover:bg-slate-50">
                  <td className="px-3 py-3 whitespace-nowrap">{formatDate(row.created_at)}</td>
                  <td className="px-3 py-3">{row.contract_type ?? "-"}</td>
                  <td className="px-3 py-3">{row.region ?? "-"}</td>
                  <td className="px-3 py-3">{row.building_type ?? "-"}</td>
                  <td className="px-3 py-3">{row.usage_pattern ?? "-"}</td>
                  <td className="px-3 py-3">{formatNumber(row.floor_area)}</td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {formatNumber(row.spring_cost)} / {formatNumber(row.summer_cost)} /{" "}
                    {formatNumber(row.autumn_cost)} / {formatNumber(row.winter_cost)}
                  </td>
                  <td className="px-3 py-3">{formatNumber(row.fixed_total)}</td>
                  <td className="px-3 py-3">{formatNumber(row.market_total)}</td>
                  <td className="px-3 py-3">
                    {resolveCurrentPlan(row.fixed_total, row.market_total)}
                  </td>
                  <td className="px-3 py-3">{formatNumber(row.risk_score)}</td>
                  <td className="px-3 py-3">{row.risk_label ?? "-"}</td>
                  <td className="px-3 py-3">
                    <Link
                      href={`/admin/simulation-results/${encodeURIComponent(row.id)}`}
                      className="font-semibold text-slate-700 underline underline-offset-4"
                    >
                      開く
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
}
