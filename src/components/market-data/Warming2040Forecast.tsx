// 2040年までの気温上昇と電力需要影響予測
const CITY_FORECAST = [
  { city: "札幌", current: 11.32, y2030: 11.7, y2040: 12.1, note: "30年で+1.18℃実績、冬暖房減少・夏冷房増加" },
  { city: "東京", current: 17.80, y2030: 18.1, y2040: 18.4, note: "30年で+0.36℃実績、冷房需要中心の影響" },
  { city: "大阪", current: 18.68, y2030: 19.0, y2040: 19.3, note: "熱帯夜倍増（42→81日）、冷房負荷最大" },
];

const DEMAND_IMPACTS = [
  { area: "冷房需要（夏）", impact: "+8〜15%", note: "CDD上昇による全体需要押上げ" },
  { area: "暖房需要（冬）", impact: "▲5〜10%", note: "HDD低下による需要減（北海道で特に顕著）" },
  { area: "ピーク需要日数", impact: "+15〜25日/年", note: "猛暑日・熱帯夜の増加" },
  { area: "年間総需要", impact: "+2〜5%", note: "冷房増＞暖房減の構造" },
];

export default function Warming2040Forecast() {
  return (
    <section className="mt-6 rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🌡 2030年・2040年気温シナリオと電力需要</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        IPCC第6次評価報告書（AR6）の気候予測と過去30年の実績トレンドを踏まえ、主要都市の気温推移と電力需要への影響を整理します。特に夏の冷房需要増加は法人電力コストの中長期的上昇要因です。
      </p>
      <h3 className="mt-5 text-base font-semibold text-slate-900">主要都市の年平均気温予測（℃）</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-amber-200 bg-white">
        <table className="min-w-[640px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-amber-100 text-slate-900">
              <th className="border border-amber-200 px-3 py-2 text-left font-semibold">都市</th>
              <th className="border border-amber-200 px-3 py-2 text-right font-semibold">2025年実績</th>
              <th className="border border-amber-200 px-3 py-2 text-right font-semibold">2030年予測</th>
              <th className="border border-amber-200 px-3 py-2 text-right font-semibold">2040年予測</th>
              <th className="border border-amber-200 px-3 py-2 text-left font-semibold">特徴</th>
            </tr>
          </thead>
          <tbody>
            {CITY_FORECAST.map((row) => (
              <tr key={row.city} className="odd:bg-white even:bg-amber-50/40">
                <td className="border border-amber-200 px-3 py-2 font-semibold">{row.city}</td>
                <td className="border border-amber-200 px-3 py-2 text-right">{row.current.toFixed(2)}</td>
                <td className="border border-amber-200 px-3 py-2 text-right">{row.y2030.toFixed(2)}</td>
                <td className="border border-amber-200 px-3 py-2 text-right text-red-700 font-semibold">{row.y2040.toFixed(2)}</td>
                <td className="border border-amber-200 px-3 py-2 text-xs text-slate-700">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="mt-5 text-base font-semibold text-slate-900">電力需要への波及（2040年、2024年比）</h3>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {DEMAND_IMPACTS.map((row) => (
          <div key={row.area} className="rounded-lg border border-amber-200 bg-white p-4">
            <p className="text-xs text-slate-500">{row.area}</p>
            <p className="mt-1 text-xl font-bold text-amber-800">{row.impact}</p>
            <p className="mt-2 text-xs text-slate-700">{row.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ IPCC AR6（第6次評価報告書）のSSP2-4.5シナリオと気象庁長期変動統計を参照した概算。実際の気温・需要は気候変動の進行速度と社会経済条件で変動します。
      </p>
    </section>
  );
}
