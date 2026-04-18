// Server-rendered SVG visualizations. No client interaction needed.

// 1. Sankey（発電→送電→需要）
export function InteractiveSankey() {
  const sources = [
    { name: "火力 56%", y: 20, h: 280, color: "#94a3b8" },
    { name: "再エネ 28%", y: 300, h: 140, color: "#10b981" },
    { name: "原子力 12%", y: 440, h: 60, color: "#a855f7" },
    { name: "その他 4%", y: 500, h: 20, color: "#94a3b8" },
  ];
  const demands = [
    { name: "製造業 35%", y: 30, h: 175, color: "#0284c7" },
    { name: "業務 28%", y: 205, h: 140, color: "#0ea5e9" },
    { name: "家庭 28%", y: 345, h: 140, color: "#38bdf8" },
    { name: "その他 9%", y: 485, h: 45, color: "#7dd3fc" },
  ];
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">📊 電力フロー Sankey図（発電→需要）</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">2024年度日本の電源構成と需要区分の流れ。発電側から需要側への電力フローを可視化。</p>
      <svg viewBox="0 0 800 550" className="mt-4 w-full">
        {sources.map((s) => (
          <g key={s.name}>
            <rect x={20} y={s.y} width={150} height={s.h} fill={s.color} />
            <text x={95} y={s.y + s.h / 2} fill="white" textAnchor="middle" fontSize="13">{s.name}</text>
          </g>
        ))}
        {demands.map((d) => (
          <g key={d.name}>
            <rect x={630} y={d.y} width={150} height={d.h} fill={d.color} />
            <text x={705} y={d.y + d.h / 2} fill="white" textAnchor="middle" fontSize="13">{d.name}</text>
          </g>
        ))}
        {sources.map((s, si) => (
          demands.map((d, di) => {
            const flow = (s.h * d.h) / 520;
            const yOffset = si * 30 + di * 5;
            return (
              <path key={`${si}-${di}`}
                d={`M 170 ${s.y + s.h / 2} C 400 ${s.y + yOffset}, 400 ${d.y + yOffset}, 630 ${d.y + d.h / 2}`}
                stroke={s.color} strokeWidth={flow * 0.5} fill="none" opacity={0.3} />
            );
          })
        ))}
        <text x={400} y={540} textAnchor="middle" fontSize="11" fill="#94a3b8">出典: 資源エネルギー庁 / 一般社団法人エネルギー情報センター</text>
      </svg>
    </section>
  );
}

// 2. EmissionFactorMap（日本地図・排出係数）
export function EmissionFactorMap() {
  // Simplified 9-area rectangle map
  const areas = [
    { name: "北海道", factor: 0.596, x: 420, y: 20, color: "#dc2626" },
    { name: "東北", factor: 0.457, x: 420, y: 95, color: "#ea580c" },
    { name: "東京", factor: 0.441, x: 420, y: 170, color: "#ea580c" },
    { name: "中部", factor: 0.425, x: 320, y: 170, color: "#f59e0b" },
    { name: "北陸", factor: 0.484, x: 320, y: 95, color: "#ea580c" },
    { name: "関西", factor: 0.358, x: 220, y: 170, color: "#10b981" },
    { name: "中国", factor: 0.585, x: 140, y: 170, color: "#dc2626" },
    { name: "四国", factor: 0.497, x: 220, y: 245, color: "#ea580c" },
    { name: "九州", factor: 0.370, x: 60, y: 245, color: "#10b981" },
  ];
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">🗾 排出係数マップ（9エリア）</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">エリア別のCO2排出係数（g-CO2/kWh）。低排出は緑・高排出は赤で表示。</p>
      <svg viewBox="0 0 600 320" className="mt-4 w-full max-w-2xl">
        {areas.map((a) => (
          <g key={a.name}>
            <rect x={a.x} y={a.y} width={80} height={60} fill={a.color} rx={4} opacity={0.9} />
            <text x={a.x + 40} y={a.y + 22} fill="white" textAnchor="middle" fontSize="12" fontWeight="bold">{a.name}</text>
            <text x={a.x + 40} y={a.y + 42} fill="white" textAnchor="middle" fontSize="11">{(a.factor * 1000).toFixed(0)}</text>
            <text x={a.x + 40} y={a.y + 55} fill="white" textAnchor="middle" fontSize="8">g-CO2/kWh</text>
          </g>
        ))}
        <g>
          <rect x={20} y={20} width={15} height={15} fill="#10b981" rx={2} />
          <text x={40} y={32} fontSize="11" fill="#475569">&lt; 400 (低)</text>
          <rect x={20} y={40} width={15} height={15} fill="#f59e0b" rx={2} />
          <text x={40} y={52} fontSize="11" fill="#475569">400-450</text>
          <rect x={20} y={60} width={15} height={15} fill="#ea580c" rx={2} />
          <text x={40} y={72} fontSize="11" fill="#475569">450-550</text>
          <rect x={20} y={80} width={15} height={15} fill="#dc2626" rx={2} />
          <text x={40} y={92} fontSize="11" fill="#475569">&gt; 550 (高)</text>
        </g>
        <text x={300} y={310} textAnchor="middle" fontSize="11" fill="#94a3b8">出典: 環境省 電気事業者別排出係数2024</text>
      </svg>
    </section>
  );
}

// 3. RegulationTimelineHorizontal（横スクロール年表）
export function RegulationTimelineHorizontal() {
  const events = [
    { year: 2016, label: "小売全面自由化", type: "liberalization" },
    { year: 2020, label: "発送電分離", type: "market" },
    { year: 2022, label: "新電力撤退・需給ひっ迫警報", type: "crisis" },
    { year: 2023, label: "FIP制度開始", type: "renewable" },
    { year: 2024, label: "容量市場実供給開始", type: "market" },
    { year: 2026, label: "GX-ETS本格稼働", type: "decarbon" },
    { year: 2027, label: "託送料金第2期", type: "market" },
    { year: 2030, label: "NDC 46%削減目標", type: "decarbon" },
    { year: 2032, label: "FIT買取満了開始", type: "renewable" },
    { year: 2033, label: "炭素価格本格化", type: "decarbon" },
  ];
  const colors = { liberalization: "#0284c7", market: "#f59e0b", crisis: "#dc2626", renewable: "#10b981", decarbon: "#a855f7" };
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">📅 制度改正タイムライン（2016-2033）</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">主要制度改正と電力市場イベントの時系列。色は分類: 青=自由化、橙=市場、赤=危機、緑=再エネ、紫=脱炭素。</p>
      <div className="mt-4 overflow-x-auto">
        <svg viewBox="0 0 1200 200" className="min-w-[1000px]">
          <line x1="20" y1="100" x2="1180" y2="100" stroke="#cbd5e1" strokeWidth="2" />
          {events.map((e, i) => {
            const x = 60 + (e.year - 2016) * 65;
            const color = colors[e.type as keyof typeof colors];
            const top = i % 2 === 0;
            return (
              <g key={e.year}>
                <circle cx={x} cy={100} r={8} fill={color} />
                <line x1={x} y1={100} x2={x} y2={top ? 60 : 140} stroke={color} strokeWidth="1" />
                <text x={x} y={top ? 50 : 160} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">{e.year}</text>
                <text x={x} y={top ? 36 : 175} textAnchor="middle" fontSize="10" fill={color}>{e.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="mt-3 text-xs text-slate-500">出典: 経済産業省・環境省公表資料 / 一般社団法人エネルギー情報センター</p>
    </section>
  );
}

// 4. PriceHeatmap（時間×日のJEPXヒートマップ）
export function PriceHeatmap() {
  const days = ["月", "火", "水", "木", "金", "土", "日"];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  // Synthetic heatmap data - peak hours higher prices
  const getPrice = (day: number, hour: number) => {
    const base = 10;
    const peak = (hour >= 8 && hour <= 22) ? 10 : 0;
    const evening = (hour >= 17 && hour <= 20) ? 8 : 0;
    const weekend = (day >= 5) ? -3 : 0;
    return Math.max(3, base + peak + evening + weekend + (day % 3));
  };
  const colorFor = (p: number) => {
    if (p < 10) return "#d1fae5";
    if (p < 15) return "#a7f3d0";
    if (p < 20) return "#fde68a";
    if (p < 25) return "#fdba74";
    return "#fca5a5";
  };
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">🔥 JEPX価格ヒートマップ（時間×曜日）</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">代表的な1週間のJEPXスポット価格パターン。色が濃いほど高値。夕方17-20時と平日日中がピーク。</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="px-1 py-1"></th>
              {hours.map((h) => (<th key={h} className="px-1 py-1 text-center text-[10px]">{h}</th>))}
            </tr>
          </thead>
          <tbody>
            {days.map((d, di) => (
              <tr key={d}>
                <td className="px-1 py-1 text-xs font-semibold">{d}</td>
                {hours.map((h) => {
                  const p = getPrice(di, h);
                  return (
                    <td key={h} style={{ background: colorFor(p) }} className="text-center text-[10px]" title={`${d}${h}時: ${p}円/kWh`}>
                      {p}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs">
        <span>低</span>
        {["#d1fae5", "#a7f3d0", "#fde68a", "#fdba74", "#fca5a5"].map((c) => (<span key={c} style={{ background: c }} className="inline-block h-4 w-6" />))}
        <span>高</span>
      </div>
      <p className="mt-3 text-xs text-slate-500">※ 代表的パターン。実際は季節・天候・需給で変動します。</p>
    </section>
  );
}

// 5. ScenarioWaterfall（シナリオ別コストwaterfall）
export function ScenarioWaterfall() {
  const items = [
    { label: "現状年間コスト", value: 10000000, type: "start" },
    { label: "燃料費上昇", value: 1500000, type: "up" },
    { label: "賦課金上昇", value: 500000, type: "up" },
    { label: "託送改定", value: 300000, type: "up" },
    { label: "容量拠出金", value: 400000, type: "up" },
    { label: "省エネ効果", value: -800000, type: "down" },
    { label: "PPA導入効果", value: -600000, type: "down" },
    { label: "将来年間コスト", value: 11300000, type: "end" },
  ];
  const max = 14000000;
  const baseY = 300;
  const scale = 250 / max;
  let cumulative = 0;
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">📈 シナリオ別コストWaterfall</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">現状から2030年見込みまでのコスト変動要因を積み上げ型で可視化。赤=上昇要因、緑=削減効果。</p>
      <svg viewBox="0 0 900 380" className="mt-4 w-full">
        {items.map((it, i) => {
          const x = 40 + i * 108;
          let barY: number; let h: number; let color: string;
          if (it.type === "start" || it.type === "end") {
            h = it.value * scale;
            barY = baseY - h;
            color = it.type === "start" ? "#0284c7" : "#a855f7";
            cumulative = it.value;
          } else if (it.type === "up") {
            h = it.value * scale;
            barY = baseY - (cumulative + it.value) * scale;
            color = "#dc2626";
            cumulative += it.value;
          } else {
            h = -it.value * scale;
            barY = baseY - (cumulative) * scale;
            color = "#10b981";
            cumulative += it.value;
          }
          return (
            <g key={i}>
              <rect x={x} y={barY} width={80} height={Math.abs(h)} fill={color} opacity={0.8} />
              <text x={x + 40} y={350} textAnchor="middle" fontSize="10" fill="#475569">{it.label}</text>
              <text x={x + 40} y={370} textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">{it.value > 0 ? "+" : ""}{(it.value / 10000).toFixed(0)}万円</text>
            </g>
          );
        })}
        <line x1={20} y1={baseY} x2={880} y2={baseY} stroke="#cbd5e1" strokeWidth="1" />
      </svg>
      <p className="mt-3 text-xs text-slate-500">※ 代表例の試算。実際の影響は事業規模・契約条件・市場動向で変動。</p>
    </section>
  );
}

// 6. ComparisonRadar（PPAタイプのレーダー）
export function ComparisonRadar() {
  const axes = ["コスト", "Scope2削減", "契約柔軟性", "会計簡便性", "導入ハードル低さ"];
  const types = [
    { name: "オンサイト", color: "#10b981", scores: [3, 5, 3, 5, 2] },
    { name: "フィジカル", color: "#0284c7", scores: [4, 5, 4, 4, 3] },
    { name: "バーチャル", color: "#a855f7", scores: [5, 4, 5, 2, 4] },
  ];
  const cx = 200, cy = 200, maxR = 150;
  const axisPoint = (idx: number, score: number) => {
    const angle = (idx / axes.length) * Math.PI * 2 - Math.PI / 2;
    const r = (score / 5) * maxR;
    return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r };
  };
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">🎯 PPA 3形態 レーダー比較</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">オンサイト・フィジカル・バーチャルPPAを5軸でスコアリング（1-5点）。形態選定時の視覚的指針に。</p>
      <div className="mt-4 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-8">
        <svg viewBox="0 0 400 400" className="w-full max-w-md">
          {[1, 2, 3, 4, 5].map((ring) => (
            <polygon key={ring} points={axes.map((_, i) => {
              const angle = (i / axes.length) * Math.PI * 2 - Math.PI / 2;
              const r = (ring / 5) * maxR;
              return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
            }).join(" ")} fill="none" stroke="#cbd5e1" strokeWidth={0.5} />
          ))}
          {axes.map((label, i) => {
            const angle = (i / axes.length) * Math.PI * 2 - Math.PI / 2;
            const x = cx + Math.cos(angle) * (maxR + 25);
            const y = cy + Math.sin(angle) * (maxR + 25);
            return (<text key={i} x={x} y={y} textAnchor="middle" fontSize="11" fill="#475569" dominantBaseline="middle">{label}</text>);
          })}
          {types.map((t) => (
            <polygon key={t.name}
              points={t.scores.map((s, i) => { const p = axisPoint(i, s); return `${p.x},${p.y}`; }).join(" ")}
              fill={t.color} fillOpacity={0.2} stroke={t.color} strokeWidth={2} />
          ))}
        </svg>
        <div className="mt-3 space-y-1 text-sm lg:mt-0">
          {types.map((t) => (
            <div key={t.name} className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full" style={{ background: t.color }} />
              <span>{t.name} PPA</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
