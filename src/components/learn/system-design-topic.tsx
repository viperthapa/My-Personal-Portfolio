"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleHelp, List, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import type { SystemDesignTopic } from "@/data/system-design";
import { systemDesignTopics } from "@/data/system-design";
import { SystemDesignDiagram } from "@/components/learn/system-design-diagram";

export function SystemDesignTopicPage({ topic, index }: { topic: SystemDesignTopic; index: number }) {
  const [answers, setAnswers] = useState<(number | null)[]>([null, null]);
  const [complete, setComplete] = useState(false);
  const previous = systemDesignTopics[index - 1];
  const next = systemDesignTopics[index + 1];
  const answered = answers.filter((answer) => answer !== null).length;
  const score = answers.reduce<number>((total, answer, questionIndex) => total + (answer === topic.questions[questionIndex].answer ? 1 : 0), 0);

  useEffect(() => {
    const current: string[] = JSON.parse(localStorage.getItem("course-progress:system-design") ?? "[]");
    setComplete(current.includes(topic.slug));
  }, [topic.slug]);

  function choose(questionIndex: number, optionIndex: number) {
    if (answers[questionIndex] !== null) return;
    setAnswers((current) => current.map((answer, index) => index === questionIndex ? optionIndex : answer));
  }
  function markComplete() {
    const key = "course-progress:system-design";
    const current: string[] = JSON.parse(localStorage.getItem(key) ?? "[]");
    if (!current.includes(topic.slug)) localStorage.setItem(key, JSON.stringify([...current, topic.slug]));
    setComplete(true);
  }

  return <div className="system-topic-shell">
    <div className="mb-8 flex flex-wrap items-center justify-between gap-3"><Link href="/learn/system-design" className="inline-flex items-center gap-2 text-sm font-black text-teal-700 dark:text-accent-400"><ArrowLeft size={16} /> All topics</Link><span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Topic {String(index + 1).padStart(2, "0")} / 24</span></div>
    <header className="max-w-3xl"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-black text-teal-700">{topic.level}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"><List size={13} className="mr-1 inline" /> 1 minute</span></div><h1 className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">{topic.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{topic.introduction}</p></header>
    <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start"><section className="surface rounded-3xl p-6 sm:p-8"><p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700 dark:text-accent-400">Key idea</p><p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-slate-900 dark:text-white">{topic.keyIdea}</p></section><aside className="surface rounded-3xl p-5"><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Your 1-minute path</p><div className="mt-4 grid gap-3 text-sm font-bold text-slate-700 dark:text-slate-200"><span className="learning-step"><b>01</b> Read the idea</span><span className="learning-step"><b>02</b> Follow the arrows</span><span className="learning-step"><b>03</b> Try two questions</span><span className="learning-step"><b>04</b> Keep going</span></div></aside></div>
    <section className="mt-6"><div className="mb-3 flex flex-wrap items-center justify-between gap-2"><h2 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">See it in one picture</h2><span className="text-xs font-bold text-slate-400">Follow the arrows</span></div><SystemDesignDiagram type={topic.diagram} labels={topic.diagramLabels} /></section>
    <section className="surface mt-6 rounded-3xl p-6 sm:p-8"><p className="text-xs font-black uppercase tracking-[0.16em] text-amber-700">Real-world example</p><p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">{topic.example}</p></section>
    <section className="mt-12"><div className="flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700 dark:text-accent-400">Quick check</p><h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">Can you spot it?</h2></div><span className="text-sm font-bold text-slate-500">{answered}/2 answered</span></div><div className="mt-5 grid gap-5 md:grid-cols-2">{topic.questions.map((question, questionIndex) => { const selected = answers[questionIndex]; const isCorrect = selected === question.answer; return <fieldset key={question.question} className="surface rounded-3xl p-5"><legend className="sr-only">Question {questionIndex + 1}</legend><p className="font-black text-slate-950 dark:text-white">{questionIndex + 1}. {question.question}</p><div className="mt-4 grid gap-2">{question.options.map((option, optionIndex) => { const chosen = selected === optionIndex; const correct = selected !== null && optionIndex === question.answer; return <button type="button" key={option} disabled={selected !== null} onClick={() => choose(questionIndex, optionIndex)} className={`quiz-option ${chosen ? (isCorrect ? "quiz-correct" : "quiz-wrong") : ""} ${correct ? "quiz-answer" : ""}`}><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-current text-[11px] font-black">{String.fromCharCode(65 + optionIndex)}</span>{option}</button>; })}</div>{selected !== null && <p className={`mt-4 rounded-xl p-3 text-sm leading-6 ${isCorrect ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}><strong>{isCorrect ? "Correct. " : "Not quite. "}</strong>{question.explanation}{!isCorrect && <> Correct answer: <strong>{question.options[question.answer]}</strong>.</>}</p>}</fieldset>; })}</div></section>
    {answered === 2 && <section className="surface mt-6 rounded-3xl border-teal-200 p-6 text-center"><CircleHelp className="mx-auto text-teal-600" size={25} /><h2 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">You scored {score}/2</h2><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{score === 2 ? "Strong grasp. Keep moving." : "Review the idea, then try the next topic."}</p><div className="mt-5 flex flex-wrap justify-center gap-3"><button type="button" onClick={() => setAnswers([null, null])} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-black text-slate-700"><RotateCcw size={16} /> Try again</button><button type="button" onClick={markComplete} className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-black text-white ${complete ? "bg-emerald-600" : "bg-teal-700"}`}><Check size={16} /> {complete ? "Topic complete" : "Mark topic complete"}</button></div></section>}
    <nav className="mt-10 flex items-center justify-between gap-3 border-t border-slate-200 pt-6 dark:border-slate-800"><div>{previous && <Link href={`/learn/system-design/${previous.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-slate-600 dark:text-slate-300"><ArrowLeft size={16} /> Previous</Link>}</div><div>{next ? <Link href={`/learn/system-design/${next.slug}`} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-black text-white dark:bg-white dark:text-slate-950">Next topic <ArrowRight size={16} /></Link> : <Link href="/learn/system-design" className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-black text-white">All topics <ArrowRight size={16} /></Link>}</div></nav>
  </div>;
}
