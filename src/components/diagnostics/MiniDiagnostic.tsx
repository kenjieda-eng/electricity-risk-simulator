"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Choice = {
  label: string;
  value: number;
};

export type MiniDiagnosticQuestion = {
  id: string;
  question: string;
  choices: Choice[];
};

export type MiniDiagnosticResult = {
  /** スコアの下限（以上） */
  minScore: number;
  label: string;
  description: string;
  cta?: { href: string; label: string };
};

export type MiniDiagnosticProps = {
  heading: string;
  intro: string;
  questions: MiniDiagnosticQuestion[];
  /** スコア昇順にソートして使うので、上限は次のステップのminScoreとして解釈される */
  results: MiniDiagnosticResult[];
};

export function MiniDiagnostic({ heading, intro, questions, results }: MiniDiagnosticProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const score = useMemo(
    () => questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0),
    [answers, questions],
  );

  const sortedResults = useMemo(
    () => [...results].sort((a, b) => a.minScore - b.minScore),
    [results],
  );

  const resolvedResult = useMemo(() => {
    if (!submitted) return null;
    let current = sortedResults[0];
    for (const r of sortedResults) {
      if (score >= r.minScore) current = r;
    }
    return current;
  }, [score, sortedResults, submitted]);

  return (
    <section className="rounded-xl border border-sky-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">{intro}</p>

      <ol className="mt-4 space-y-5">
        {questions.map((q, idx) => (
          <li key={q.id}>
            <p className="text-sm font-semibold text-slate-900">
              Q{idx + 1}. {q.question}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {q.choices.map((c) => {
                const active = answers[q.id] === c.value;
                return (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, [q.id]: c.value }));
                      setSubmitted(false);
                    }}
                    className={
                      active
                        ? "rounded-md border-2 border-sky-500 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-800"
                        : "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    }
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className={
            allAnswered
              ? "inline-flex rounded-md border-2 border-sky-500 bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
              : "inline-flex rounded-md border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400 cursor-not-allowed"
          }
        >
          診断結果を見る
        </button>
        {submitted ? (
          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
            className="text-sm text-slate-600 underline-offset-2 hover:underline"
          >
            やり直す
          </button>
        ) : null}
      </div>

      {submitted && resolvedResult ? (
        <div className="mt-5 rounded-xl border border-sky-300 bg-sky-50 p-4">
          <p className="text-xs font-semibold text-sky-800">診断結果（スコア {score}）</p>
          <h3 className="mt-1 text-lg font-bold text-slate-900">{resolvedResult.label}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">{resolvedResult.description}</p>
          {resolvedResult.cta ? (
            <Link
              href={resolvedResult.cta.href}
              className="mt-3 inline-flex rounded-md border border-sky-300 bg-white px-3 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
            >
              {resolvedResult.cta.label}
            </Link>
          ) : null}
          <p className="mt-3 text-xs text-slate-500">
            ※ 本診断は一般的な傾向を示す簡易チェックです。最終判断は自社の使用実態・契約条件に基づいて行ってください。
          </p>
        </div>
      ) : null}
    </section>
  );
}
