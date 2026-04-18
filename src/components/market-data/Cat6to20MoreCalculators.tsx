"use client";

import { useState, useMemo } from "react";

const card = "rounded-lg border border-slate-200 bg-white p-4";
const inp = "mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm";
const lbl = "block text-xs font-semibold text-slate-700";

// ============================================================
// 1. Co2EmissionForecaster: 2030/2050シナリオ
// ============================================================
export function Co2EmissionForecaster() {
  const [currentTons, setCurrentTons] = useState(5000);
  const [reductionPct2030, setReductionPct2030] = useState(46);
  const [reductionPct2050, setReductionPct2050] = useState(100);
  const r = useMemo(() => ({
    t2030: Math.round(currentTons * (1 - reductionPct2030 / 100)),
    t2050: Math.round(currentTons * (1 - reductionPct2050 / 100)),
    cut2030: Math.round(currentTons * reductionPct2030 / 100),
    cut2050: Math.round(currentTons * reductionPct2050 / 100),
  }), [currentTons, reductionPct2030, reductionPct2050]);
  return (
    <section className="mt-6 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📉 CO2排出量 2030/2050シナリオ予測</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">現状排出量と目標削減率から、2030年・2050年の予測排出量を算出。日本のNDC（46%削減）・カーボンニュートラル（100%）目標との整合性を確認できます。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div><label className={lbl}>現状排出量(t-CO2/年)</label><input type="number" value={currentTons} onChange={(e) => setCurrentTons(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>2030削減目標(%)</label><input type="number" value={reductionPct2030} onChange={(e) => setReductionPct2030(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>2050削減目標(%)</label><input type="number" value={reductionPct2050} onChange={(e) => setReductionPct2050(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className={card}><p className="text-xs text-slate-500">2030年予測</p><p className="text-xl font-bold text-emerald-700">{r.t2030.toLocaleString()} t</p><p className="text-xs text-slate-500">削減{r.cut2030.toLocaleString()}t</p></div>
        <div className={card}><p className="text-xs text-slate-500">2050年予測</p><p className="text-xl font-bold text-emerald-800">{r.t2050.toLocaleString()} t</p><p className="text-xs text-slate-500">削減{r.cut2050.toLocaleString()}t</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 2. CarbonTaxImpactSim: 1万-20万円/t-CO2
// ============================================================
export function CarbonTaxImpactSim() {
  const [tons, setTons] = useState(5000);
  const [taxRate, setTaxRate] = useState(10000);
  const r = useMemo(() => ({
    annual: tons * taxRate,
    fiveYear: tons * taxRate * 5,
    perKwh: tons > 0 ? (tons * taxRate / (tons * 2000)).toFixed(2) : "0",
  }), [tons, taxRate]);
  return (
    <section className="mt-6 rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">💰 炭素税インパクトシミュレーター</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">炭素税率1万〜20万円/t-CO2で、年間追加コスト・5年累計を試算。GX-ETS本格化後のシナリオプランニングに活用できます。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div><label className={lbl}>年間排出量(t-CO2)</label><input type="number" value={tons} onChange={(e) => setTons(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>炭素税率(円/t-CO2)</label><input type="number" step="500" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className={card}><p className="text-xs text-slate-500">年間負担</p><p className="text-xl font-bold text-amber-700">{r.annual.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">5年累計</p><p className="text-xl font-bold text-red-700">{r.fiveYear.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">電力単価換算</p><p className="text-xl font-bold text-slate-900">+{r.perKwh}円/kWh</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 3. RenewableSurchargeForecast
// ============================================================
export function RenewableSurchargeForecast() {
  const [annualKwh, setAnnualKwh] = useState(1000000);
  const [surcharge2026, setSurcharge2026] = useState(3.98);
  const [growth, setGrowth] = useState(0.1);
  const r = useMemo(() => {
    const arr = [];
    let s = surcharge2026;
    for (let y = 0; y <= 9; y++) {
      arr.push({ year: 2026 + y, surcharge: Number(s.toFixed(2)), cost: Math.round(annualKwh * s) });
      s = Math.max(0, s + growth);
    }
    return arr;
  }, [annualKwh, surcharge2026, growth]);
  return (
    <section className="mt-6 rounded-xl border-2 border-lime-300 bg-lime-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📊 再エネ賦課金 10年予測</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">2026年単価と年間変動を入力し、2026-2035年の賦課金推移を試算。中期予算策定に活用。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div><label className={lbl}>年間使用量(kWh)</label><input type="number" value={annualKwh} onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>2026単価(円/kWh)</label><input type="number" step="0.01" value={surcharge2026} onChange={(e) => setSurcharge2026(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>年間変動(円/kWh)</label><input type="number" step="0.05" value={growth} onChange={(e) => setGrowth(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 overflow-x-auto"><table className="w-full text-xs"><thead className="bg-lime-100"><tr><th className="px-2 py-1">年度</th><th className="px-2 py-1">単価</th><th className="px-2 py-1">年間負担</th></tr></thead><tbody>{r.map((x) => (<tr key={x.year} className="border-b border-lime-100"><td className="px-2 py-1 text-center">{x.year}</td><td className="px-2 py-1 text-center">{x.surcharge}円/kWh</td><td className="px-2 py-1 text-right">{x.cost.toLocaleString()}円</td></tr>))}</tbody></table></div>
    </section>
  );
}

// ============================================================
// 4. WheelingChargeRevisionImpact
// ============================================================
export function WheelingChargeRevisionImpact() {
  const [annualKwh, setAnnualKwh] = useState(1000000);
  const [currentUnit, setCurrentUnit] = useState(2.5);
  const [newUnit, setNewUnit] = useState(2.8);
  const r = useMemo(() => ({
    current: Math.round(annualKwh * currentUnit),
    next: Math.round(annualKwh * newUnit),
    diff: Math.round(annualKwh * (newUnit - currentUnit)),
  }), [annualKwh, currentUnit, newUnit]);
  return (
    <section className="mt-6 rounded-xl border-2 border-blue-300 bg-blue-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🔌 託送料金改定インパクト試算</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">レベニューキャップ制度下での託送料金改定影響を試算。次期料金確定前の予算影響評価にご活用ください。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div><label className={lbl}>年間使用量(kWh)</label><input type="number" value={annualKwh} onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>現行託送料(円/kWh)</label><input type="number" step="0.1" value={currentUnit} onChange={(e) => setCurrentUnit(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>改定後託送料(円/kWh)</label><input type="number" step="0.1" value={newUnit} onChange={(e) => setNewUnit(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className={card}><p className="text-xs text-slate-500">現行年額</p><p className="text-xl font-bold text-slate-900">{r.current.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">改定後年額</p><p className="text-xl font-bold text-blue-700">{r.next.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">差額</p><p className="text-xl font-bold text-red-700">{r.diff > 0 ? "+" : ""}{r.diff.toLocaleString()}円</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 5. CapacityMarketCostProjector
// ============================================================
export function CapacityMarketCostProjector() {
  const [contractKw, setContractKw] = useState(500);
  const [yearlyUnit, setYearlyUnit] = useState(1500);
  const r = useMemo(() => ({
    annual: contractKw * yearlyUnit,
    fiveYear: contractKw * yearlyUnit * 5,
  }), [contractKw, yearlyUnit]);
  return (
    <section className="mt-6 rounded-xl border-2 border-purple-300 bg-purple-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🏗 容量拠出金 推計ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">容量市場約定価格×契約電力で、容量拠出金の年間負担額を推計。長期脱炭素電源オークション対応の予算化にご活用ください。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div><label className={lbl}>契約電力(kW)</label><input type="number" value={contractKw} onChange={(e) => setContractKw(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>容量単価(円/kW・年)</label><input type="number" step="100" value={yearlyUnit} onChange={(e) => setYearlyUnit(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className={card}><p className="text-xs text-slate-500">年間拠出金</p><p className="text-xl font-bold text-purple-700">{r.annual.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">5年累計</p><p className="text-xl font-bold text-purple-800">{r.fiveYear.toLocaleString()}円</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 6. DemandResponsePayoff
// ============================================================
export function DemandResponsePayoff() {
  const [contractKw, setContractKw] = useState(1000);
  const [drCapacityPct, setDrCapacityPct] = useState(20);
  const [drUnit, setDrUnit] = useState(8000);
  const r = useMemo(() => ({
    drKw: contractKw * drCapacityPct / 100,
    annual: Math.round(contractKw * drCapacityPct / 100 * drUnit),
  }), [contractKw, drCapacityPct, drUnit]);
  return (
    <section className="mt-6 rounded-xl border-2 border-teal-300 bg-teal-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">⚡ デマンドレスポンス報酬試算</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">DR参加時の調整可能容量と単価から、年間DR報酬を試算。アグリゲーター経由の参加経済性評価にご活用ください。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div><label className={lbl}>契約電力(kW)</label><input type="number" value={contractKw} onChange={(e) => setContractKw(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>調整可能比率(%)</label><input type="number" value={drCapacityPct} onChange={(e) => setDrCapacityPct(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>DR単価(円/kW・年)</label><input type="number" step="500" value={drUnit} onChange={(e) => setDrUnit(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className={card}><p className="text-xs text-slate-500">DR可能容量</p><p className="text-xl font-bold text-slate-900">{r.drKw.toLocaleString()} kW</p></div>
        <div className={card}><p className="text-xs text-slate-500">年間報酬</p><p className="text-xl font-bold text-teal-700">{r.annual.toLocaleString()}円</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 7. BatteryArbitrageRoi
// ============================================================
export function BatteryArbitrageRoi() {
  const [batteryKwh, setBatteryKwh] = useState(100);
  const [cyclesPerDay, setCyclesPerDay] = useState(1);
  const [priceSpread, setPriceSpread] = useState(15);
  const r = useMemo(() => ({
    daily: batteryKwh * cyclesPerDay * priceSpread,
    annual: Math.round(batteryKwh * cyclesPerDay * priceSpread * 365),
  }), [batteryKwh, cyclesPerDay, priceSpread]);
  return (
    <section className="mt-6 rounded-xl border-2 border-orange-300 bg-orange-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🔋 蓄電池アービトラージ収益試算</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">蓄電池容量・サイクル数・時間帯間価格差から、裁定取引の年間収益を試算。市場連動プラン併用の経済性評価にご活用ください。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div><label className={lbl}>蓄電池容量(kWh)</label><input type="number" value={batteryKwh} onChange={(e) => setBatteryKwh(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>1日サイクル数</label><input type="number" step="0.5" value={cyclesPerDay} onChange={(e) => setCyclesPerDay(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>時間帯価格差(円/kWh)</label><input type="number" value={priceSpread} onChange={(e) => setPriceSpread(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className={card}><p className="text-xs text-slate-500">日次収益</p><p className="text-xl font-bold text-slate-900">{r.daily.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">年間収益</p><p className="text-xl font-bold text-orange-700">{r.annual.toLocaleString()}円</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 8. SolarSelfConsumptionRatio
// ============================================================
export function SolarSelfConsumptionRatio() {
  const [pvCapacityKw, setPvCapacityKw] = useState(100);
  const [annualGenPerKw, setAnnualGenPerKw] = useState(1100);
  const [retailUnit, setRetailUnit] = useState(22);
  const [feedInUnit, setFeedInUnit] = useState(8);
  const [selfPct, setSelfPct] = useState(70);
  const r = useMemo(() => {
    const annualGen = pvCapacityKw * annualGenPerKw;
    const selfKwh = annualGen * selfPct / 100;
    const surplusKwh = annualGen - selfKwh;
    return {
      annualGen,
      selfBenefit: Math.round(selfKwh * retailUnit),
      surplusBenefit: Math.round(surplusKwh * feedInUnit),
      total: Math.round(selfKwh * retailUnit + surplusKwh * feedInUnit),
    };
  }, [pvCapacityKw, annualGenPerKw, retailUnit, feedInUnit, selfPct]);
  return (
    <section className="mt-6 rounded-xl border-2 border-yellow-300 bg-yellow-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">☀ 太陽光自家消費率最適化</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">PV容量・自家消費率・売電単価から、自家消費＋売電の年間収益を試算。蓄電池併用検討の出発点にご活用ください。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div><label className={lbl}>PV容量(kW)</label><input type="number" value={pvCapacityKw} onChange={(e) => setPvCapacityKw(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>kW当たり年間発電(kWh)</label><input type="number" value={annualGenPerKw} onChange={(e) => setAnnualGenPerKw(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>自家消費率(%)</label><input type="number" value={selfPct} onChange={(e) => setSelfPct(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>通常電力単価(円/kWh)</label><input type="number" value={retailUnit} onChange={(e) => setRetailUnit(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>余剰売電単価(円/kWh)</label><input type="number" value={feedInUnit} onChange={(e) => setFeedInUnit(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className={card}><p className="text-xs text-slate-500">年間発電量</p><p className="text-xl font-bold text-slate-900">{r.annualGen.toLocaleString()} kWh</p></div>
        <div className={card}><p className="text-xs text-slate-500">自家消費効果</p><p className="text-xl font-bold text-yellow-700">{r.selfBenefit.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">合計年間効果</p><p className="text-xl font-bold text-emerald-700">{r.total.toLocaleString()}円</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 9. HeatPumpEfficiencyCompare
// ============================================================
export function HeatPumpEfficiencyCompare() {
  const [annualHeatKwh, setAnnualHeatKwh] = useState(50000);
  const [boilerEff, setBoilerEff] = useState(0.85);
  const [heatPumpCop, setHeatPumpCop] = useState(4.0);
  const [gasUnit, setGasUnit] = useState(120);
  const [elecUnit, setElecUnit] = useState(22);
  const r = useMemo(() => {
    const gasMj = annualHeatKwh * 3.6 / boilerEff;
    const gasCost = gasMj / 45 * gasUnit;
    const hpKwh = annualHeatKwh / heatPumpCop;
    const hpCost = hpKwh * elecUnit;
    return { gasCost: Math.round(gasCost), hpCost: Math.round(hpCost), saving: Math.round(gasCost - hpCost) };
  }, [annualHeatKwh, boilerEff, heatPumpCop, gasUnit, elecUnit]);
  return (
    <section className="mt-6 rounded-xl border-2 border-rose-300 bg-rose-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">♨ ヒートポンプ vs ボイラー比較</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">熱需要・COP・ガス価格・電力単価から、ヒートポンプとガスボイラーの年間ランニングコストを比較します。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div><label className={lbl}>年間熱需要(kWh熱量)</label><input type="number" value={annualHeatKwh} onChange={(e) => setAnnualHeatKwh(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>ボイラー効率</label><input type="number" step="0.05" value={boilerEff} onChange={(e) => setBoilerEff(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>ヒートポンプCOP</label><input type="number" step="0.1" value={heatPumpCop} onChange={(e) => setHeatPumpCop(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>ガス単価(円/m3)</label><input type="number" value={gasUnit} onChange={(e) => setGasUnit(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>電力単価(円/kWh)</label><input type="number" value={elecUnit} onChange={(e) => setElecUnit(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className={card}><p className="text-xs text-slate-500">ガスボイラー年額</p><p className="text-xl font-bold text-slate-900">{r.gasCost.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">ヒートポンプ年額</p><p className="text-xl font-bold text-rose-700">{r.hpCost.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">年間削減額</p><p className="text-xl font-bold text-emerald-700">{r.saving.toLocaleString()}円</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 10. LedRetrofitRoi
// ============================================================
export function LedRetrofitRoi() {
  const [bulbCount, setBulbCount] = useState(200);
  const [hoursPerDay, setHoursPerDay] = useState(10);
  const [oldWattage, setOldWattage] = useState(80);
  const [newWattage, setNewWattage] = useState(20);
  const [unitRate, setUnitRate] = useState(22);
  const [investPerBulb, setInvestPerBulb] = useState(3000);
  const r = useMemo(() => {
    const annualHours = hoursPerDay * 365;
    const oldKwh = bulbCount * oldWattage / 1000 * annualHours;
    const newKwh = bulbCount * newWattage / 1000 * annualHours;
    const annualSaving = (oldKwh - newKwh) * unitRate;
    const investment = bulbCount * investPerBulb;
    return {
      annualSaving: Math.round(annualSaving),
      investment,
      paybackYears: annualSaving > 0 ? (investment / annualSaving).toFixed(1) : "—",
    };
  }, [bulbCount, hoursPerDay, oldWattage, newWattage, unitRate, investPerBulb]);
  return (
    <section className="mt-6 rounded-xl border-2 border-yellow-300 bg-yellow-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">💡 LED化ROI計算機</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">既存照明とLED置換の電気代差・投資回収期間を試算。施設の照明改修判断にご活用ください。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div><label className={lbl}>照明灯数</label><input type="number" value={bulbCount} onChange={(e) => setBulbCount(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>1日点灯時間(h)</label><input type="number" value={hoursPerDay} onChange={(e) => setHoursPerDay(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>既存灯ワット数</label><input type="number" value={oldWattage} onChange={(e) => setOldWattage(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>LED灯ワット数</label><input type="number" value={newWattage} onChange={(e) => setNewWattage(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>電力単価(円/kWh)</label><input type="number" value={unitRate} onChange={(e) => setUnitRate(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>1灯あたり投資(円)</label><input type="number" value={investPerBulb} onChange={(e) => setInvestPerBulb(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className={card}><p className="text-xs text-slate-500">年間削減額</p><p className="text-xl font-bold text-yellow-700">{r.annualSaving.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">投資総額</p><p className="text-xl font-bold text-slate-900">{r.investment.toLocaleString()}円</p></div>
        <div className={card}><p className="text-xs text-slate-500">投資回収期間</p><p className="text-xl font-bold text-emerald-700">{r.paybackYears} 年</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 11. AirConditioningSetTempSavings
// ============================================================
export function AirConditioningSetTempSavings() {
  const [acCount, setAcCount] = useState(20);
  const [acKw, setAcKw] = useState(3);
  const [hoursPerDay, setHoursPerDay] = useState(10);
  const [tempDelta, setTempDelta] = useState(2);
  const [unitRate, setUnitRate] = useState(22);
  const r = useMemo(() => {
    const annualHours = hoursPerDay * 365;
    const totalKwh = acCount * acKw * annualHours;
    const savedKwh = totalKwh * (tempDelta * 0.06);
    return { savedKwh: Math.round(savedKwh), saving: Math.round(savedKwh * unitRate) };
  }, [acCount, acKw, hoursPerDay, tempDelta, unitRate]);
  return (
    <section className="mt-6 rounded-xl border-2 border-cyan-300 bg-cyan-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">❄ 空調設定温度 削減効果</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">設定温度を1℃変更（夏は上げる、冬は下げる）した場合の年間削減効果を試算。投資ゼロのクイックウィン策の効果可視化に。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div><label className={lbl}>空調台数</label><input type="number" value={acCount} onChange={(e) => setAcCount(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>1台あたり消費電力(kW)</label><input type="number" step="0.5" value={acKw} onChange={(e) => setAcKw(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>1日稼働時間(h)</label><input type="number" value={hoursPerDay} onChange={(e) => setHoursPerDay(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>温度変更幅(℃)</label><input type="number" value={tempDelta} onChange={(e) => setTempDelta(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>電力単価(円/kWh)</label><input type="number" value={unitRate} onChange={(e) => setUnitRate(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className={card}><p className="text-xs text-slate-500">年間削減kWh</p><p className="text-xl font-bold text-slate-900">{r.savedKwh.toLocaleString()} kWh</p></div>
        <div className={card}><p className="text-xs text-slate-500">年間削減額</p><p className="text-xl font-bold text-cyan-700">{r.saving.toLocaleString()}円</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 12. ContractDemandRightsizer
// ============================================================
export function ContractDemandRightsizer() {
  const [currentContractKw, setCurrentContractKw] = useState(500);
  const [maxObservedKw, setMaxObservedKw] = useState(380);
  const [basicUnit, setBasicUnit] = useState(1700);
  const r = useMemo(() => {
    const recommendedKw = Math.ceil(maxObservedKw * 1.05 / 5) * 5;
    const reductionKw = Math.max(0, currentContractKw - recommendedKw);
    const annualSaving = reductionKw * basicUnit * 12;
    return { recommendedKw, reductionKw, annualSaving: Math.round(annualSaving) };
  }, [currentContractKw, maxObservedKw, basicUnit]);
  return (
    <section className="mt-6 rounded-xl border-2 border-indigo-300 bg-indigo-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📐 契約電力 適正化チェック</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">過去最大デマンド値と現契約電力から、適正契約電力と削減可能基本料金を試算。過剰契約の検出に。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div><label className={lbl}>現契約電力(kW)</label><input type="number" value={currentContractKw} onChange={(e) => setCurrentContractKw(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>過去12ヶ月最大デマンド(kW)</label><input type="number" value={maxObservedKw} onChange={(e) => setMaxObservedKw(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>基本料金単価(円/kW・月)</label><input type="number" step="50" value={basicUnit} onChange={(e) => setBasicUnit(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className={card}><p className="text-xs text-slate-500">推奨契約電力</p><p className="text-xl font-bold text-indigo-700">{r.recommendedKw} kW</p><p className="text-xs text-slate-500">余裕度1.05倍</p></div>
        <div className={card}><p className="text-xs text-slate-500">削減可能kW</p><p className="text-xl font-bold text-slate-900">{r.reductionKw} kW</p></div>
        <div className={card}><p className="text-xs text-slate-500">年間削減基本料金</p><p className="text-xl font-bold text-emerald-700">{r.annualSaving.toLocaleString()}円</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 13. PowerFactorPenaltyCalc
// ============================================================
export function PowerFactorPenaltyCalc() {
  const [contractKw, setContractKw] = useState(500);
  const [powerFactor, setPowerFactor] = useState(85);
  const [basicUnit, setBasicUnit] = useState(1700);
  const r = useMemo(() => {
    const standardPf = 85;
    const adjustment = (standardPf - powerFactor) * 0.01;
    const monthly = contractKw * basicUnit * adjustment;
    const annual = Math.round(monthly * 12);
    return {
      adjustmentPct: (adjustment * 100).toFixed(1),
      annual,
      isPenalty: powerFactor < standardPf,
    };
  }, [contractKw, powerFactor, basicUnit]);
  return (
    <section className="mt-6 rounded-xl border-2 border-purple-300 bg-purple-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">⚙ 力率割増・割引試算</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">力率に応じた基本料金の割増・割引額を試算。コンデンサ設置の経済性判断にご活用ください。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div><label className={lbl}>契約電力(kW)</label><input type="number" value={contractKw} onChange={(e) => setContractKw(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>力率(%)</label><input type="number" value={powerFactor} onChange={(e) => setPowerFactor(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>基本料金単価(円/kW・月)</label><input type="number" value={basicUnit} onChange={(e) => setBasicUnit(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className={card}><p className="text-xs text-slate-500">調整率</p><p className="text-xl font-bold text-slate-900">{r.adjustmentPct}%</p></div>
        <div className={card}><p className="text-xs text-slate-500">年間影響額</p><p className={`text-xl font-bold ${r.isPenalty ? "text-red-700" : "text-emerald-700"}`}>{r.isPenalty ? "+" : "-"}{Math.abs(r.annual).toLocaleString()}円</p></div>
      </div>
    </section>
  );
}

// ============================================================
// 14. NightShiftLoadShifter
// ============================================================
export function NightShiftLoadShifter() {
  const [shiftableKwh, setShiftableKwh] = useState(10000);
  const [dayUnit, setDayUnit] = useState(25);
  const [nightUnit, setNightUnit] = useState(15);
  const r = useMemo(() => {
    const annualSaving = shiftableKwh * 12 * (dayUnit - nightUnit);
    return { annualSaving: Math.round(annualSaving) };
  }, [shiftableKwh, dayUnit, nightUnit]);
  return (
    <section className="mt-6 rounded-xl border-2 border-slate-300 bg-slate-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🌙 夜間負荷シフト効果試算</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">昼間負荷のうち夜間に移行可能な量と単価差から、年間削減効果を試算。生産シフト・蓄熱式空調の効果評価に。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div><label className={lbl}>月間シフト可能量(kWh)</label><input type="number" value={shiftableKwh} onChange={(e) => setShiftableKwh(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>昼間単価(円/kWh)</label><input type="number" value={dayUnit} onChange={(e) => setDayUnit(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>夜間単価(円/kWh)</label><input type="number" value={nightUnit} onChange={(e) => setNightUnit(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4">
        <div className={card}><p className="text-xs text-slate-500">年間削減効果</p><p className="text-2xl font-bold text-slate-900">{r.annualSaving.toLocaleString()}円</p></div>
      </div>
    </section>
  );
}
