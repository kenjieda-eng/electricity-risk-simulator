"use client";

import { useState, useMemo } from "react";

// ============================================================
// PpaVsGridComparator: 20年LCOE比較
// ============================================================
export function PpaVsGridComparator() {
  const [annualKwh, setAnnualKwh] = useState(2000000);
  const [gridUnit, setGridUnit] = useState(22);
  const [gridGrowthPct, setGridGrowthPct] = useState(2);
  const [ppaUnit, setPpaUnit] = useState(15);
  const [contractYears, setContractYears] = useState(20);

  const result = useMemo(() => {
    let gridTotal = 0;
    let ppaTotal = 0;
    for (let y = 0; y < contractYears; y++) {
      const gUnit = gridUnit * Math.pow(1 + gridGrowthPct / 100, y);
      gridTotal += annualKwh * gUnit;
      ppaTotal += annualKwh * ppaUnit;
    }
    return {
      gridTotal: Math.round(gridTotal),
      ppaTotal: Math.round(ppaTotal),
      saving: Math.round(gridTotal - ppaTotal),
      gridYearN: Math.round(gridUnit * Math.pow(1 + gridGrowthPct / 100, contractYears - 1)),
    };
  }, [annualKwh, gridUnit, gridGrowthPct, ppaUnit, contractYears]);

  return (
    <section className="mt-6 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">📈 PPA vs 通常電力 LCOE比較</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        PPA固定単価と通常電力（成長率付き）の長期累計コストを比較します。長期PPA契約の経済性評価にご活用ください。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700">年間使用量（kWh）</label>
          <input type="number" value={annualKwh} onChange={(e) => setAnnualKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} step={100000} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">通常電力単価（円/kWh）</label>
          <input type="number" value={gridUnit} onChange={(e) => setGridUnit(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">通常電力 年間上昇率（%）</label>
          <input type="number" value={gridGrowthPct} onChange={(e) => setGridGrowthPct(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">PPA単価（円/kWh）</label>
          <input type="number" value={ppaUnit} onChange={(e) => setPpaUnit(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={0} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">PPA契約年数</label>
          <input type="number" value={contractYears} onChange={(e) => setContractYears(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" min={1} max={30} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">通常電力{contractYears}年累計</p>
          <p className="mt-1 text-xl font-bold text-red-700">{result.gridTotal.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">最終年単価{result.gridYearN}円/kWh</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">PPA{contractYears}年累計</p>
          <p className="mt-1 text-xl font-bold text-emerald-700">{result.ppaTotal.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-xs text-slate-500">PPA採用時の節約額</p>
          <p className="mt-1 text-2xl font-bold text-emerald-800">{result.saving.toLocaleString()}円</p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// BackupTcoCompare: 非常用電源TCO比較
// ============================================================
export function BackupTcoCompare() {
  const [requiredKwh, setRequiredKwh] = useState(500);

  const result = useMemo(() => {
    const battery = { initial: requiredKwh * 80000, opex: requiredKwh * 2000, life: 10 };
    const generator = { initial: 5000000 + requiredKwh * 500, opex: 800000, life: 15 };
    const microgrid = { initial: 100000000, opex: 3000000, life: 20 };
    const tco = (init: number, op: number, yrs: number) => init + op * yrs;
    return {
      batteryTco: Math.round(tco(battery.initial, battery.opex, 10)),
      generatorTco: Math.round(tco(generator.initial, generator.opex, 15)),
      microgridTco: Math.round(tco(microgrid.initial, microgrid.opex, 20)),
      battery,
      generator,
      microgrid,
    };
  }, [requiredKwh]);

  return (
    <section className="mt-6 rounded-xl border-2 border-orange-300 bg-orange-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🔋 非常用電源 TCO比較（蓄電池・発電機・マイクログリッド）</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        必要バックアップ電力量を入力し、3方式の総保有コスト（TCO）を比較します。BCP電源選定の判断材料としてご活用ください。
      </p>
      <div className="mt-4">
        <label className="block text-xs font-semibold text-slate-700">必要バックアップ電力量（kWh）</label>
        <input type="number" value={requiredKwh} onChange={(e) => setRequiredKwh(Number(e.target.value) || 0)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm md:w-1/3" min={0} step={50} />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-orange-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">蓄電池（10年）</p>
          <p className="mt-1 text-xs text-slate-500">初期{result.battery.initial.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">年間{result.battery.opex.toLocaleString()}円</p>
          <p className="mt-2 text-xl font-bold text-orange-700">{result.batteryTco.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">非常用発電機（15年）</p>
          <p className="mt-1 text-xs text-slate-500">初期{result.generator.initial.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">年間{result.generator.opex.toLocaleString()}円</p>
          <p className="mt-2 text-xl font-bold text-orange-700">{result.generatorTco.toLocaleString()}円</p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">マイクログリッド（20年）</p>
          <p className="mt-1 text-xs text-slate-500">初期{result.microgrid.initial.toLocaleString()}円</p>
          <p className="text-xs text-slate-500">年間{result.microgrid.opex.toLocaleString()}円</p>
          <p className="mt-2 text-xl font-bold text-orange-700">{result.microgridTco.toLocaleString()}円</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 概算値。需要規模・設置条件・保守契約・燃料費変動により実額は変動します。複数業者見積取得を推奨。
      </p>
    </section>
  );
}

// ============================================================
// AccountingBookingHelper: 仕訳・勘定科目サジェスト
// ============================================================
export function AccountingBookingHelper() {
  const [transaction, setTransaction] = useState<"electricity-bill" | "battery-purchase" | "solar-install" | "ppa-payment" | "non-fossil-cert">("electricity-bill");

  const advice = useMemo(() => {
    const map = {
      "electricity-bill": {
        debit: "水道光熱費（製造業：電力料）",
        credit: "未払金 / 当座預金",
        notes: "適格請求書発行事業者からの購入は仕入税額控除可。製造業は製造原価内処理。部門配賦は面積按分または個別計測。",
        scope: "Scope2 Location/Market両基準で計算可能",
      },
      "battery-purchase": {
        debit: "工具器具備品 または 機械装置（蓄電池）",
        credit: "未払金 / 当座預金",
        notes: "法定耐用年数6年（電気設備）。中小企業経営強化税制で即時償却 or 7%税額控除可能。資産計上後、減価償却で費用化。",
        scope: "削減CO2量はScope2 Market-based算定で控除可能",
      },
      "solar-install": {
        debit: "建物附属設備 または 機械装置（太陽光発電設備）",
        credit: "未払金 / 当座預金",
        notes: "法定耐用年数17年。自家消費型は固定資産、PPA型は契約に応じた費用処理。FIT売電は雑収入計上。",
        scope: "発電量×排出係数でScope2削減認定可能",
      },
      "ppa-payment": {
        debit: "水道光熱費 または 動力費",
        credit: "未払金 / 当座預金",
        notes: "PPA電力購入はオンサイト・オフサイトとも費用処理。バーチャルPPAは差金部分がデリバティブ評価対象になる可能性。",
        scope: "Market-basedでScope2削減認定（追加性要件確認）",
      },
      "non-fossil-cert": {
        debit: "支払手数料 または 環境関連費用",
        credit: "未払金 / 当座預金",
        notes: "非化石証書購入は無形資産計上または費用処理。トラッキング付きは原則費用処理が一般的。会計士確認推奨。",
        scope: "Market-basedでScope2排出量から控除可能",
      },
    };
    return map[transaction];
  }, [transaction]);

  return (
    <section className="mt-6 rounded-xl border-2 border-yellow-300 bg-yellow-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">💴 電気代・脱炭素関連 仕訳サジェスター</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        取引の種類を選択すると、推奨仕訳・勘定科目・税務上の注意点・Scope2への影響を整理します。経理処理の出発点としてご活用ください。
      </p>
      <div className="mt-4">
        <label className="block text-xs font-semibold text-slate-700">取引の種類</label>
        <select value={transaction} onChange={(e) => setTransaction(e.target.value as "electricity-bill" | "battery-purchase" | "solar-install" | "ppa-payment" | "non-fossil-cert")} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm md:w-2/3">
          <option value="electricity-bill">電気代の支払い</option>
          <option value="battery-purchase">蓄電池の購入</option>
          <option value="solar-install">太陽光発電設備の設置</option>
          <option value="ppa-payment">PPA電力料金の支払い</option>
          <option value="non-fossil-cert">非化石証書の購入</option>
        </select>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-yellow-200 bg-white p-4">
          <p className="text-xs text-slate-500">借方（Debit）</p>
          <p className="mt-1 text-sm font-bold text-slate-900">{advice.debit}</p>
        </div>
        <div className="rounded-lg border border-yellow-200 bg-white p-4">
          <p className="text-xs text-slate-500">貸方（Credit）</p>
          <p className="mt-1 text-sm font-bold text-slate-900">{advice.credit}</p>
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-yellow-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">税務・会計上の注意点</p>
        <p className="mt-1 text-sm text-slate-700">{advice.notes}</p>
      </div>
      <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
        <p className="text-sm font-semibold text-slate-900">Scope2排出量への影響</p>
        <p className="mt-1 text-sm text-slate-700">{advice.scope}</p>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ あくまで一般的な指針。個別案件の処理は税理士・会計士・監査法人にご相談ください。
      </p>
    </section>
  );
}
