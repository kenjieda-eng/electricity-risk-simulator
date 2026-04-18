type Event = {
  date: string;
  title: string;
  impact: string;
  category: "policy" | "fuel" | "weather" | "geopolitics" | "tech";
};

const CATEGORY_COLORS: Record<Event["category"], string> = {
  policy: "border-purple-300 bg-purple-50 text-purple-900",
  fuel: "border-orange-300 bg-orange-50 text-orange-900",
  weather: "border-amber-300 bg-amber-50 text-amber-900",
  geopolitics: "border-red-300 bg-red-50 text-red-900",
  tech: "border-blue-300 bg-blue-50 text-blue-900",
};

const CATEGORY_LABELS: Record<Event["category"], string> = {
  policy: "制度",
  fuel: "燃料",
  weather: "気象",
  geopolitics: "地政学",
  tech: "技術",
};

type Props = {
  heading?: string;
  intro?: string;
  events: Event[];
};

export default function HistoricalEventTimeline({
  heading = "電力市場に影響したイベント年表",
  intro,
  events,
}: Props) {
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>
      {intro ? <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{intro}</p> : null}
      <ol className="mt-4 space-y-3">
        {events.map((e, i) => (
          <li key={i} className={`rounded-lg border p-4 ${CATEGORY_COLORS[e.category]}`}>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-bold">{e.date}</span>
              <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-semibold">
                {CATEGORY_LABELS[e.category]}
              </span>
              <span className="text-sm font-semibold">{e.title}</span>
            </div>
            <p className="mt-2 text-xs leading-6 sm:text-sm">{e.impact}</p>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-slate-500">
        ※ 主要な電力市場・料金に影響を与えたイベントを年表化したものです。詳細は各種公的資料をご参照ください。
      </p>
    </section>
  );
}

// 主要な共通イベントセット（使い回し用）
export const MAJOR_ENERGY_EVENTS: Event[] = [
  { date: "2011-03", title: "東日本大震災・福島第一原発事故", impact: "原発全停止により火力依存上昇。LNG輸入急増、電気料金構造が大きく変化。", category: "geopolitics" },
  { date: "2012-07", title: "FIT（固定価格買取制度）開始", impact: "再エネ普及の起点。再エネ賦課金が新たな料金構成要素に。", category: "policy" },
  { date: "2016-04", title: "電力小売全面自由化", impact: "低圧需要家も電力会社を選択可能に。新電力急増。", category: "policy" },
  { date: "2018-09", title: "北海道胆振東部地震・ブラックアウト", impact: "全国初のエリア全停電。BCP・分散電源への注目高まる。", category: "weather" },
  { date: "2020-12", title: "JEPX史上最高値（251円/kWh）", impact: "LNG在庫不足と寒波で年末年始に異常高騰。新電力撤退の発端。", category: "fuel" },
  { date: "2022-02", title: "ロシア・ウクライナ戦争開戦", impact: "LNG・石炭価格急騰。法人電気料金の歴史的高騰の引き金に。", category: "geopolitics" },
  { date: "2022-03", title: "需給ひっ迫警報（東京・東北）", impact: "全国初の警報発令。需給ひっ迫対応の重要性が認識される。", category: "weather" },
  { date: "2023-01", title: "電気・ガス価格激変緩和対策事業開始", impact: "国の補助金で電気代を一時的に抑制。2024年度以降段階的縮小。", category: "policy" },
  { date: "2023-04", title: "託送料金レベニューキャップ制度導入", impact: "送配電事業者の総収入規制を本格運用。長期の料金安定化を狙う。", category: "policy" },
  { date: "2023-05", title: "GX推進法成立", impact: "GX-ETS・化石燃料賦課金の段階導入が決定。中長期のカーボンコスト上昇要因。", category: "policy" },
  { date: "2024-04", title: "容量市場 本格供給開始", impact: "容量拠出金が小売事業者・需要家のコスト増要因として顕在化。", category: "policy" },
  { date: "2026-04", title: "GX-ETS本格稼働予定", impact: "排出量取引が義務化。電力会社の排出枠コストが料金に転嫁される段階へ。", category: "policy" },
];
