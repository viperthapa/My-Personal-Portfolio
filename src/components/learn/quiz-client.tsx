"use client";

import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import type { QuizQuestion } from "@/data/courses";

export function QuizClient({ courseName, questions }: { courseName: string; questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0),
    [answers, questions],
  );

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="grid gap-6">
      {questions.map((question, index) => {
        const selected = answers[index];
        const correct = selected === question.answer;
        return (
          <article key={question.question} className="surface rounded-3xl p-6">
            <div className="flex gap-4">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-sm font-black text-brand-600 dark:bg-brand-500/10 dark:text-accent-400">{index + 1}</div>
              <div className="min-w-0 flex-1">
                <h2 className="font-black text-slate-950 dark:text-white">{question.question}</h2>
                <div className="mt-4 grid gap-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selected === optionIndex;
                    const isAnswer = question.answer === optionIndex;
                    let tone = "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950";
                    if (isSelected) tone = "border-brand-500 bg-brand-50 dark:border-brand-400 dark:bg-brand-500/10";
                    if (submitted && isAnswer) tone = "border-emerald-500 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-500/10";
                    if (submitted && isSelected && !isAnswer) tone = "border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-500/10";

                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={submitted}
                        onClick={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}
                        className={`rounded-xl border p-3 text-left text-sm font-semibold text-slate-700 transition hover:border-brand-400 dark:text-slate-200 ${tone}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {submitted ? (
                  <div className={`mt-4 flex gap-2 rounded-xl p-3 text-sm ${correct ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"}`}>
                    {correct ? <CheckCircle2 className="mt-0.5 shrink-0" size={17} /> : <XCircle className="mt-0.5 shrink-0" size={17} />}
                    <span>{question.explanation}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}

      <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 p-7 text-white">
        {submitted ? (
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-accent-400">{courseName} result</p>
              <p className="mt-2 text-4xl font-black">{score}/{questions.length}</p>
              <p className="mt-2 text-sm text-slate-300">{Math.round((score / questions.length) * 100)}% correct</p>
            </div>
            <button type="button" onClick={reset} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950"><RotateCcw size={16} /> Retry quiz</button>
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div><p className="text-xl font-black">Ready to check your understanding?</p><p className="mt-2 text-sm text-slate-300">Answer every question, then submit your quiz.</p></div>
            <button type="button" disabled={Object.keys(answers).length !== questions.length} onClick={() => setSubmitted(true)} className="rounded-xl bg-gradient-to-r from-accent-400 to-brand-500 px-5 py-3 text-sm font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">Submit quiz</button>
          </div>
        )}
      </div>
    </div>
  );
}
