"use client";

import { useState, useMemo } from "react";

type Question = {
  id: string;
  text: string;
  options: { label: string; scoreOnsite: number; scorePhysical: number; scoreVirtual: number }[];
};

const QUESTIONS: Question[] = [
  {
    id: "site",
    text: "Q1: 自社敷地内に発電設備を設置するスペースがありますか？",
    options: [
      { label: "十分にある（屋根・遊休地）", scoreOnsite: 3, scorePhysical: 0, scoreVirtual: 0 },
      { label: "限定的にある", scoreOnsite: 1, scorePhysical: 1, scoreVirtual: 1 },
      { label: "まったくない", scoreOnsite: 0, scorePhysical: 2, scoreVirtual: 3 },
    ],
  },
  {
    id: "scale",
    text: "Q2: 年間電力使用量規模は？",
    options: [
      { label: "1,000万kWh以上（特高・大規模高圧）", scoreOnsite: 1, scorePhysical: 3, scoreVirtual: 3 },
      { label: "100〜1,000万kWh（中規模）", scoreOnsite: 2, scorePhysical: 2, scoreVirtual: 1 },
      { label: "100万kWh未満", scoreOnsite: 3, scorePhysical: 1, scoreVirtual: 0 },
    ],
  },
  {
    id: "term",
    text: "Q3: 長期契約（15-25年）への許容度は？",
    options: [
      { label: "問題ない（経営方針として脱炭素を推進）", scoreOnsite: 3, scorePhysical: 3, scoreVirtual: 3 },
      { label: "10年程度なら可", scoreOnsite: 2, scorePhysical: 2, scoreVirtual: 2 },
      { label: "短期契約を希望", scoreOnsite: 0, scorePhysical: 0, scoreVirtual: 1 },
    ],
  },
  {
    id: "accounting",
    text: "Q4: 会計処理の複雑性への対応は？",
    options: [
      { label: "デリバティブ評価可（IFRS対応企業）", scoreOnsite: 1, scorePhysical: 1, scoreVirtual: 3 },
      { label: "シンプルな費用処理を希望", scoreOnsite: 3, scorePhysical: 3, scoreVirtual: 0 },
      { label: "監査法人と都度相談", scoreOnsite: 2, scorePhysical: 2, scoreVirtual: 2 },
    ],
  },
  {
    id: "purpose",
    text: "Q5: PPA導入の主目的は？",
    options: [
      { label: "電気代削減＋脱炭素", scoreOnsite: 3, scorePhysical: 2, scoreVirtual: 1 },
      { label: "RE100・Scope2目標達成", scoreOnsite: 2, scorePhysical: 3, scoreVirtual: 3 },
      { label: "再エネ価格ヘッジ", scoreOnsite: 1, scorePhysical: 2, scoreVirtual: 3 },
    ],
  },
];

export default function PpaTypeRecommender() {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const result = useMemo(() => {
    let onsite = 0, physical = 0, virtual = 0;
    QUESTIONS.forEach((q) => {
      const idx = answers[q.id];
      if (idx !== undefined && q.options[idx]) {
        onsite += q.options[idx].scoreOnsite;
        physical += q.options[idx].scorePhysical;
        virtual += q.options[idx].scoreVirtual;
      }
    });
    const max = Math.max(onsite, physical, virtual);
    let recommended = "";
    if (max === 0) recommended = "";
    else if (onsite === max) recommended = "オンサイトPPA";
    else if (physical === max) recommended = "フィジカル（オフサイト）PPA";
    else recommended = "バーチャルPPA";
    return { onsite, physical, virtual, recommended, answeredCount: Object.keys(answers).length };
  }, [answers]);

  return (
    <section className="mt-6 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🔍 PPA形態 5問診断</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        5問に答えると、自社に最適なPPA形態（オンサイト／フィジカル／バーチャル）を推奨します。導入検討の出発点としてご活用ください。
      </p>
      <div className="mt-4 space-y-4">
        {QUESTIONS.map((q) => (
          <div key={q.id} className="rounded-lg border border-emerald-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">{q.text}</p>
            <div className="mt-2 space-y-1">
              {q.options.map((opt, idx) => (
                <label key={idx} className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-700">
                  <input type="radio" name={q.id} checked={answers[q.id] === idx} onChange={() => setAnswers({ ...answers, [q.id]: idx })} />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {result.answeredCount === QUESTIONS.length && (
        <div className="mt-4 rounded-lg border-2 border-emerald-400 bg-white p-5">
          <p className="text-sm font-semibold text-slate-900">診断結果</p>
          <p className="mt-2 text-2xl font-bold text-emerald-700">推奨：{result.recommended}</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            <div className="rounded border border-slate-200 p-2 text-xs">
              <p className="text-slate-500">オンサイト適合度</p>
              <p className="font-bold text-slate-900">{result.onsite}/15</p>
            </div>
            <div className="rounded border border-slate-200 p-2 text-xs">
              <p className="text-slate-500">フィジカル適合度</p>
              <p className="font-bold text-slate-900">{result.physical}/15</p>
            </div>
            <div className="rounded border border-slate-200 p-2 text-xs">
              <p className="text-slate-500">バーチャル適合度</p>
              <p className="font-bold text-slate-900">{result.virtual}/15</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ あくまで初期適合度判定です。詳細検討は専門家相談・複数事業者見積比較を推奨します。
          </p>
        </div>
      )}
    </section>
  );
}
