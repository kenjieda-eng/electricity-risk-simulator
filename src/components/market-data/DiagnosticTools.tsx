"use client";

import { useState, useMemo } from "react";

const inp = "mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm";
const lbl = "block text-xs font-semibold text-slate-700";

type Q = { id: string; text: string; options: { label: string; score: number }[] };

function Quiz({ title, color, intro, questions, evaluate }: {
  title: string;
  color: string;
  intro: string;
  questions: Q[];
  evaluate: (total: number) => { level: string; advice: string };
}) {
  const [ans, setAns] = useState<Record<string, number>>({});
  const total = useMemo(() => Object.entries(ans).reduce((s, [id, idx]) => {
    const q = questions.find((x) => x.id === id);
    return s + (q?.options[idx]?.score ?? 0);
  }, 0), [ans, questions]);
  const done = Object.keys(ans).length === questions.length;
  const result = evaluate(total);
  return (
    <section className={`mt-6 rounded-xl border-2 ${color} p-5`}>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">{intro}</p>
      <div className="mt-4 space-y-3">
        {questions.map((q) => (
          <div key={q.id} className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">{q.text}</p>
            <div className="mt-2 space-y-1">
              {q.options.map((opt, i) => (
                <label key={i} className="flex items-center gap-2 text-sm text-slate-700 hover:text-sky-700">
                  <input type="radio" name={q.id} checked={ans[q.id] === i} onChange={() => setAns({ ...ans, [q.id]: i })} />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {done && (
        <div className="mt-4 rounded-lg border-2 border-slate-300 bg-white p-5">
          <p className="text-sm font-semibold text-slate-900">診断結果</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">スコア: {total} / {questions.length * Math.max(...questions[0].options.map((o) => o.score))}</p>
          <p className="mt-2 text-lg font-bold text-sky-700">{result.level}</p>
          <p className="mt-2 text-sm text-slate-700">{result.advice}</p>
        </div>
      )}
    </section>
  );
}

// 1. BCP Readiness
export function BcpReadinessChecker() {
  const questions: Q[] = [
    { id: "1", text: "Q1: クリティカル負荷リストが作成されていますか？", options: [{ label: "完成・更新済み", score: 3 }, { label: "概略あり", score: 2 }, { label: "未着手", score: 0 }] },
    { id: "2", text: "Q2: 非常用電源（蓄電池・発電機）が設置されていますか？", options: [{ label: "十分な容量", score: 3 }, { label: "一部のみ", score: 1 }, { label: "なし", score: 0 }] },
    { id: "3", text: "Q3: 過去24ヶ月以内に停電訓練を実施しましたか？", options: [{ label: "毎年実施", score: 3 }, { label: "1回のみ", score: 2 }, { label: "未実施", score: 0 }] },
    { id: "4", text: "Q4: 需給ひっ迫警報時の社内対応マニュアルがありますか？", options: [{ label: "完成", score: 3 }, { label: "草案", score: 1 }, { label: "なし", score: 0 }] },
    { id: "5", text: "Q5: 電力会社撤退時の代替供給先候補は？", options: [{ label: "2社以上特定済み", score: 3 }, { label: "1社", score: 2 }, { label: "未検討", score: 0 }] },
    { id: "6", text: "Q6: 停電時の業務継続コスト（時間あたり損失）を試算済みですか？", options: [{ label: "正確に把握", score: 3 }, { label: "概算", score: 2 }, { label: "未試算", score: 0 }] },
    { id: "7", text: "Q7: BCP予算は明示されていますか？", options: [{ label: "年間予算化済", score: 3 }, { label: "都度判断", score: 1 }, { label: "なし", score: 0 }] },
  ];
  const evaluate = (t: number) => {
    if (t >= 18) return { level: "🟢 BCPレベル: 高（充実）", advice: "現状を維持しつつ、需給ひっ迫の最新動向監視と訓練継続を。" };
    if (t >= 10) return { level: "🟡 BCPレベル: 中", advice: "クリティカル項目（Q2/Q5/Q7）に重点投資を推奨。" };
    return { level: "🔴 BCPレベル: 低（早期対応必須）", advice: "Q1負荷リスト作成→Q2非常用電源確保→Q5代替先特定の順で着手を。" };
  };
  return <Quiz title="🆘 BCP対応度チェッカー（7問）" color="border-red-300 bg-red-50" intro="BCP整備状況を7問で評価し、不足分野とアクションを提案します。" questions={questions} evaluate={evaluate} />;
}

// 2. RE100 Pathway Diagnoser
export function Re100PathwayDiagnoser() {
  const questions: Q[] = [
    { id: "1", text: "Q1: 年間電力使用量100GWh以上ですか？", options: [{ label: "Yes", score: 3 }, { label: "近い", score: 2 }, { label: "No", score: 1 }] },
    { id: "2", text: "Q2: Scope2排出量を把握していますか？", options: [{ label: "Market/Location両基準", score: 3 }, { label: "片方", score: 2 }, { label: "未算定", score: 0 }] },
    { id: "3", text: "Q3: 経営層のRE100コミットメントはありますか？", options: [{ label: "公表済み", score: 3 }, { label: "検討中", score: 2 }, { label: "なし", score: 0 }] },
    { id: "4", text: "Q4: 自家発電・PPA・証書のいずれかを導入済みですか？", options: [{ label: "複数導入", score: 3 }, { label: "1種", score: 2 }, { label: "未導入", score: 0 }] },
    { id: "5", text: "Q5: 海外子会社含めた排出量集計体制は？", options: [{ label: "確立済み", score: 3 }, { label: "国内のみ", score: 1 }, { label: "未整備", score: 0 }] },
  ];
  const evaluate = (t: number) => {
    if (t >= 12) return { level: "🟢 RE100加盟準備完了レベル", advice: "加盟申請・RE100公式手続きへ進める段階。CDP評価向上にも繋がります。" };
    if (t >= 7) return { level: "🟡 段階的整備中", advice: "Scope2算定・経営層コミット・調達手段の3点強化を優先。" };
    return { level: "🔴 基盤整備段階", advice: "まずScope2算定・社内勉強会から着手を。" };
  };
  return <Quiz title="🌱 RE100加盟ロードマップ診断（5問）" color="border-emerald-300 bg-emerald-50" intro="自社のRE100加盟準備度を5問で診断し、次のアクションを提示します。" questions={questions} evaluate={evaluate} />;
}

// 3. SmeContractFitnessQuiz
export function SmeContractFitnessQuiz() {
  const questions: Q[] = [
    { id: "1", text: "Q1: 直近12ヶ月の請求書をすべて手元に保管していますか？", options: [{ label: "はい", score: 2 }, { label: "一部", score: 1 }, { label: "いいえ", score: 0 }] },
    { id: "2", text: "Q2: 月別kWh単価を計算したことがありますか？", options: [{ label: "毎月確認", score: 2 }, { label: "年1-2回", score: 1 }, { label: "なし", score: 0 }] },
    { id: "3", text: "Q3: 過去3年で電力会社・プラン見直しをしましたか？", options: [{ label: "1年以内", score: 2 }, { label: "1-3年前", score: 1 }, { label: "3年超", score: 0 }] },
    { id: "4", text: "Q4: 契約解約条件・違約金を把握していますか？", options: [{ label: "明確", score: 2 }, { label: "概略", score: 1 }, { label: "不明", score: 0 }] },
    { id: "5", text: "Q5: 相見積取得の経験は？", options: [{ label: "3社以上", score: 2 }, { label: "1-2社", score: 1 }, { label: "なし", score: 0 }] },
  ];
  const evaluate = (t: number) => {
    if (t >= 8) return { level: "🟢 契約管理レベル: 高", advice: "現状を維持し、年1回の契約棚卸しを継続を。" };
    if (t >= 4) return { level: "🟡 契約管理レベル: 中", advice: "相見積取得と単価追跡を強化すれば改善余地あり。" };
    return { level: "🔴 契約管理レベル: 低", advice: "請求書集計→単価計算→相見積、の3ステップから着手を。" };
  };
  return <Quiz title="🏪 中小企業 契約適合度クイズ（5問）" color="border-pink-300 bg-pink-50" intro="中小企業向け、現契約と契約管理レベルを5問で診断します。" questions={questions} evaluate={evaluate} />;
}

// 4. EvFleetReadinessScorer
export function EvFleetReadinessScorer() {
  const questions: Q[] = [
    { id: "1", text: "Q1: 社用車の年間走行距離は？", options: [{ label: "10万km/台超", score: 3 }, { label: "3-10万km", score: 2 }, { label: "3万km未満", score: 0 }] },
    { id: "2", text: "Q2: 駐車場で充電器設置可能なスペースは？", options: [{ label: "十分にある", score: 3 }, { label: "一部", score: 2 }, { label: "ほぼない", score: 0 }] },
    { id: "3", text: "Q3: 受電設備（キュービクル）の容量余力は？", options: [{ label: "余裕あり", score: 3 }, { label: "ギリギリ", score: 1 }, { label: "不足", score: 0 }] },
    { id: "4", text: "Q4: 充電補助金の活用検討は？", options: [{ label: "申請準備中", score: 3 }, { label: "情報収集", score: 2 }, { label: "未着手", score: 0 }] },
    { id: "5", text: "Q5: ESG/サステナビリティ目標とEVは整合しますか？", options: [{ label: "強く整合", score: 3 }, { label: "やや", score: 1 }, { label: "無関係", score: 0 }] },
  ];
  const evaluate = (t: number) => {
    if (t >= 12) return { level: "🟢 EV導入適合度: 高", advice: "本格導入可能。先行PoC導入で運用ノウハウ蓄積を。" };
    if (t >= 7) return { level: "🟡 段階的導入推奨", advice: "受電設備・補助金・走行距離の3軸で導入規模を検討。" };
    return { level: "🔴 現状ではEV導入難", advice: "受電設備強化・補助金リサーチから着手を。" };
  };
  return <Quiz title="🚗 EV社用車 導入適合度スコア（5問）" color="border-cyan-300 bg-cyan-50" intro="社用車EV化の準備度を5問で評価し、推奨アクションを提示します。" questions={questions} evaluate={evaluate} />;
}

// 5. ContractRiskRedFlagDetector
export function ContractRiskRedFlagDetector() {
  const [text, setText] = useState("");
  const flags = useMemo(() => {
    const checks = [
      { keyword: ["市場連動", "JEPX連動"], message: "🚨 市場連動条項あり: 価格スパイク時のリスク確認を。" },
      { keyword: ["自動更新"], message: "🚨 自動更新条項あり: 通知期限と更新後単価を確認。" },
      { keyword: ["違約金", "中途解約"], message: "🚨 違約金条項あり: 算定方法・金額上限を確認。" },
      { keyword: ["不可抗力"], message: "🚨 不可抗力条項あり: 適用範囲と免責内容を確認。" },
      { keyword: ["燃料費調整", "燃調"], message: "ℹ️ 燃料費調整条項あり: 上限有無と算定式を確認。" },
      { keyword: ["再エネ賦課金"], message: "ℹ️ 再エネ賦課金条項あり: 転嫁方法を確認。" },
      { keyword: ["容量拠出金", "容量市場"], message: "ℹ️ 容量拠出金条項あり: 単価転嫁ルールを確認。" },
      { keyword: ["値上げ", "改定"], message: "🚨 単価改定条項あり: 通知期限と異議申立権利を確認。" },
    ];
    return checks.filter((c) => c.keyword.some((k) => text.includes(k)));
  }, [text]);
  return (
    <section className="mt-6 rounded-xl border-2 border-rose-300 bg-rose-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🔍 契約レッドフラッグ検出</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">電力契約書の本文を貼り付けると、注意すべき条項を自動検出します。締結前のセルフチェックにご活用ください。</p>
      <div className="mt-4">
        <label className={lbl}>契約書テキストを貼り付け</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="契約条項を貼り付けてください..." className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" rows={6} />
      </div>
      {text && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-slate-900">検出された条項: {flags.length}件</p>
          {flags.length === 0 ? (<p className="mt-2 text-sm text-slate-500">該当キーワードなし。詳細は法務確認を推奨。</p>) : (
            <ul className="mt-2 space-y-2">
              {flags.map((f, i) => (<li key={i} className="rounded border border-rose-200 bg-white p-3 text-sm">{f.message}</li>))}
            </ul>
          )}
        </div>
      )}
      <p className="mt-3 text-xs text-slate-500">※ 機械的キーワード検出の補助ツール。実際の契約レビューは法務担当・弁護士の確認が必須。</p>
    </section>
  );
}

// 6. AccountingBookingWizard (extended over Cat22-35 helper)
export function AccountingBookingWizard() {
  const [scenario, setScenario] = useState<string>("ev-charger");
  const advice = useMemo(() => {
    const map: Record<string, { debit: string; credit: string; tax: string; depreciation: string }> = {
      "ev-charger": { debit: "工具器具備品（充電設備）", credit: "未払金", tax: "中小企業経営強化税制対象", depreciation: "耐用年数6年（電気設備）" },
      "led-retrofit": { debit: "建物附属設備（電気設備）", credit: "未払金", tax: "省エネ投資税額控除対象", depreciation: "15年" },
      "ems-system": { debit: "ソフトウエア仮勘定→ソフトウエア", credit: "未払金", tax: "DX投資促進税制対象", depreciation: "5年" },
      "demand-controller": { debit: "工具器具備品", credit: "未払金", tax: "省エネ補助金対象", depreciation: "6年" },
      "subsidy": { debit: "預金", credit: "雑収入（補助金）", tax: "圧縮記帳適用可", depreciation: "—" },
    };
    return map[scenario];
  }, [scenario]);
  return (
    <section className="mt-6 rounded-xl border-2 border-yellow-300 bg-yellow-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">💴 仕訳ウィザード（拡張版）</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">エネルギー設備投資の仕訳・税制適用・耐用年数を案件別に表示します。</p>
      <div className="mt-4">
        <label className={lbl}>取引種別</label>
        <select value={scenario} onChange={(e) => setScenario(e.target.value)} className={inp}>
          <option value="ev-charger">EV充電設備の取得</option>
          <option value="led-retrofit">LED照明改修</option>
          <option value="ems-system">EMS（管理ソフト）導入</option>
          <option value="demand-controller">デマンドコントローラー導入</option>
          <option value="subsidy">補助金受領</option>
        </select>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-yellow-200 bg-white p-4"><p className="text-xs text-slate-500">借方</p><p className="text-sm font-bold">{advice.debit}</p></div>
        <div className="rounded-lg border border-yellow-200 bg-white p-4"><p className="text-xs text-slate-500">貸方</p><p className="text-sm font-bold">{advice.credit}</p></div>
        <div className="rounded-lg border border-yellow-200 bg-white p-4"><p className="text-xs text-slate-500">税制優遇</p><p className="text-sm font-bold">{advice.tax}</p></div>
        <div className="rounded-lg border border-yellow-200 bg-white p-4"><p className="text-xs text-slate-500">減価償却</p><p className="text-sm font-bold">{advice.depreciation}</p></div>
      </div>
      <p className="mt-3 text-xs text-slate-500">※ あくまで一般的指針。個別案件は税理士・会計士へ確認推奨。</p>
    </section>
  );
}

// 7. Re100Roadmap
export function Re100Roadmap() {
  const [currentPct, setCurrentPct] = useState(15);
  const [targetYear, setTargetYear] = useState(2035);
  const r = useMemo(() => {
    const years = targetYear - 2026;
    const remaining = 100 - currentPct;
    const yearly = years > 0 ? remaining / years : 0;
    return {
      yearly: yearly.toFixed(1),
      milestones: [25, 50, 75, 100].filter((m) => m > currentPct).map((m) => ({
        pct: m,
        year: 2026 + Math.ceil((m - currentPct) / yearly),
      })),
    };
  }, [currentPct, targetYear]);
  return (
    <section className="mt-6 rounded-xl border-2 border-green-300 bg-green-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🌳 RE100ロードマップ生成</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">現状の再エネ比率と目標達成年から、年次マイルストーンと必要追加比率を逆算します。</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div><label className={lbl}>現在の再エネ比率(%)</label><input type="number" value={currentPct} onChange={(e) => setCurrentPct(Number(e.target.value) || 0)} className={inp} /></div>
        <div><label className={lbl}>100%達成目標年</label><input type="number" value={targetYear} onChange={(e) => setTargetYear(Number(e.target.value) || 0)} className={inp} /></div>
      </div>
      <div className="mt-4 rounded-lg border border-green-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">年あたり必要追加: {r.yearly}%</p>
        <table className="mt-3 w-full text-xs">
          <thead className="bg-green-100"><tr><th className="px-2 py-1">マイルストーン</th><th className="px-2 py-1">達成予定年</th></tr></thead>
          <tbody>
            {r.milestones.map((m) => (<tr key={m.pct} className="border-b border-green-100"><td className="px-2 py-1 text-center">{m.pct}%</td><td className="px-2 py-1 text-center">{m.year}年</td></tr>))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
