// 2030年電力需要予測セクション
const FORECAST_ROWS = [
  { source: "AI・データセンター", impact: "+150〜250億kWh", note: "ハイパースケーラー新設・GPUクラウド需要" },
  { source: "EV充電", impact: "+50〜100億kWh", note: "乗用EV普及・物流EV化進行" },
  { source: "産業電化（ヒートポンプ等）", impact: "+30〜80億kWh", note: "脱炭素規制対応" },
  { source: "省エネ・人口減少", impact: "▲100〜150億kWh", note: "省エネ法強化・産業構造変化" },
  { source: "ネット影響（2024年比）", impact: "+130〜280億kWh", note: "全国総需要の1〜3%増加" },
];

const SCENARIOS = [
  { name: "保守シナリオ", year2030: "+1.5%", note: "AI需要が想定より緩やか、省エネ進展" },
  { name: "標準シナリオ", year2030: "+2.5%", note: "経産省エネルギー基本計画レベル" },
  { name: "成長シナリオ", year2030: "+4.0%", note: "AI需要急増、EV普及加速" },
];

export default function Demand2030Forecast() {
  return (
    <section className="mt-6 rounded-xl border-2 border-blue-300 bg-blue-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📈 2030年電力需要予測</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        日本の電力需要は2010年代以降緩やかに減少傾向にありましたが、2025年以降はAI・データセンター、EV、産業電化を背景に再び増加局面に入る見通しです。経産省エネルギー基本計画・IEA・民間予測を統合した2030年見通しを整理します。
      </p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-blue-200 bg-white">
        <table className="min-w-[600px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-100 text-slate-900">
              <th className="border border-blue-200 px-3 py-2 text-left font-semibold">需要要因</th>
              <th className="border border-blue-200 px-3 py-2 text-left font-semibold">影響</th>
              <th className="border border-blue-200 px-3 py-2 text-left font-semibold">背景</th>
            </tr>
          </thead>
          <tbody>
            {FORECAST_ROWS.map((row) => (
              <tr key={row.source} className="odd:bg-white even:bg-blue-50/40">
                <td className="border border-blue-200 px-3 py-2 font-semibold text-slate-900">{row.source}</td>
                <td className="border border-blue-200 px-3 py-2 font-semibold text-blue-700">{row.impact}</td>
                <td className="border border-blue-200 px-3 py-2 text-xs text-slate-700">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="mt-5 text-base font-semibold text-slate-900">3シナリオの増減率（2024年比）</h3>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {SCENARIOS.map((s) => (
          <div key={s.name} className="rounded-lg border border-blue-200 bg-white p-4">
            <p className="text-xs text-slate-500">{s.name}</p>
            <p className="mt-1 text-2xl font-bold text-blue-700">{s.year2030}</p>
            <p className="mt-2 text-xs text-slate-600">{s.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 経産省総合エネルギー調査会・IEA Electricity Report・民間調査機関の公表データを参照した概算。実際の需要は技術革新・政策変更・国際情勢で変動します。
      </p>
    </section>
  );
}
