import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

import { createAdminServerClient } from "../../../../lib/supabase/adminServerClient";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const dateTimeFormatter = new Intl.DateTimeFormat("ja-JP", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Tokyo",
});

const numberFormatter = new Intl.NumberFormat("ja-JP");
const percentFormatter = new Intl.NumberFormat("ja-JP", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const fieldLabels: Record<string, string> = {
  id: "ID",
  created_at: "作成日時",
  contract_type: "契約種別",
  region: "エリア",
  building_type: "建物用途",
  usage_pattern: "使用パターン",
  floor_area: "延床面積(㎡)",
  spring_cost: "春の月額(万円)",
  summer_cost: "夏の月額(万円)",
  autumn_cost: "秋の月額(万円)",
  winter_cost: "冬の月額(万円)",
  start_month: "開始月",
  fixed_total: "固定プラン累計(万円)",
  market_total: "市場連動プラン累計(万円)",
  diff_rate: "市場連動差分率(%)",
  risk_score: "リスクスコア",
  risk_label: "リスク判定",
  seasonal_variation_score: "季節変動スコア",
  peak_score: "ピークスコア",
  usage_pattern_score: "使用パターンスコア",
  unit_cost_score: "単位面積コストスコア",
  contract_type_score: "契約種別スコア",
  region_score: "エリアスコア",
  building_type_score: "建物用途スコア",
};

const codeValueLabels: Record<string, Record<string, string>> = {
  contract_type: {
    low: "低圧",
    high: "高圧",
    special: "特別高圧",
  },
  region: {
    hokkaido: "北海道",
    tohoku: "東北",
    "kita-kanto": "北関東",
    shutoken: "首都圏",
    tokyo: "東京",
    chubu: "中部",
    hokuriku: "北陸",
    kansai: "関西",
    chugoku: "中国",
    shikoku: "四国",
    kyushu: "九州",
    okinawa: "沖縄",
  },
  building_type: {
    office: "オフィス",
    retail: "商業店舗",
    restaurant: "飲食店・外食",
    factory: "工場",
    welfare: "病院・福祉施設",
    hotel: "ホテル・宿泊施設",
    store: "店舗",
    warehouse: "倉庫",
    datacenter: "データセンター",
    public: "公共施設",
    hospital: "病院",
    school: "学校",
  },
  usage_pattern: {
    balanced: "終日バランス型",
    daytime: "平日日中メイン",
    "24h": "24時間稼働",
    night: "夜間中心",
    "weekend-busy": "土日稼働型",
    "seasonal-heavy": "季節偏重",
  },
};

const riskLabelLabels: Record<string, string> = {
  "very low": "低い",
  low: "やや低い",
  medium: "注意",
  caution: "注意",
  high: "高い",
  "very high": "非常に高い",
  "very_low": "低い",
  "very_high": "非常に高い",
  "slightly low": "やや低い",
  "slightly_low": "やや低い",
  低い: "低い",
  やや低い: "やや低い",
  注意: "注意",
  高い: "高い",
  非常に高い: "非常に高い",
};

const moneyFields = new Set([
  "spring_cost",
  "summer_cost",
  "autumn_cost",
  "winter_cost",
  "fixed_total",
  "market_total",
]);

function getFieldLabel(key: string): string {
  return fieldLabels[key] ?? key;
}

function toJapaneseCodeValue(key: string, value: string): string {
  const labels = codeValueLabels[key];
  if (!labels) return value;
  return labels[value] ?? value;
}

function toJapaneseRiskLabel(value: string): string {
  const normalized = value.toLowerCase().trim();
  return riskLabelLabels[normalized] ?? riskLabelLabels[value] ?? value;
}

function formatValue(key: string, value: unknown): string {
  if (value === null || value === undefined) return "-";

  if (typeof value === "string") {
    if (key === "risk_label") return toJapaneseRiskLabel(value);

    const translated = toJapaneseCodeValue(key, value);
    if (translated !== value) return translated;

    const date = new Date(value);
    if (!Number.isNaN(date.getTime()) && value.includes("T")) {
      return dateTimeFormatter.format(date);
    }
    return value;
  }

  if (typeof value === "number") {
    if (key === "start_month" && value >= 1 && value <= 12) return `${value}月`;
    if (key === "diff_rate") return `${percentFormatter.format(value)} %`;
    if (moneyFields.has(key)) return `${numberFormatter.format(value)} 万円`;
    return numberFormatter.format(value);
  }

  if (typeof value === "boolean") {
    return value ? "はい" : "いいえ";
  }

  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  return String(value);
}

export default async function AdminSimulationResultDetailPage({ params }: PageProps) {
  noStore();
  const { id } = await params;
  const supabase = createAdminServerClient();

  const { data, error } = await supabase
    .from("simulation_results")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return (
      <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-10 text-slate-800">
        <section className="rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
          データ取得に失敗しました: {error.message}
        </section>
        <div className="mt-4">
          <Link
            href="/admin/simulation-results"
            className="text-sm font-semibold text-slate-700 underline underline-offset-4"
          >
            一覧へ戻る
          </Link>
        </div>
      </main>
    );
  }

  if (!data) {
    notFound();
  }

  const entries = Object.entries(data).sort(([a], [b]) => a.localeCompare(b));

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-10 text-slate-800">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">シミュレーション結果詳細</h1>
        <p className="mt-2 font-mono text-xs text-slate-500">id: {id}</p>
      </header>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <dl className="space-y-4">
          {entries.map(([key, value]) => {
            const isJson = typeof value === "object" && value !== null;
            return (
              <div key={key} className="border-b border-slate-100 pb-4">
                <dt className="text-sm font-semibold text-slate-500">{getFieldLabel(key)}</dt>
                <dd className="mt-1 text-sm text-slate-800">
                  {isJson ? (
                    <pre className="overflow-x-auto rounded-md bg-slate-50 p-3 text-xs leading-6 text-slate-700">
                      {formatValue(key, value)}
                    </pre>
                  ) : (
                    formatValue(key, value)
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      <div className="mt-6">
        <Link
          href="/admin/simulation-results"
          className="text-sm font-semibold text-slate-700 underline underline-offset-4"
        >
          一覧へ戻る
        </Link>
      </div>
    </main>
  );
}
