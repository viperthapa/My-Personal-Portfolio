"use client";

import Link from "next/link";
import { ArrowRight, Check, Clock3, Network } from "lucide-react";
import { useEffect, useState } from "react";
import { systemDesignCourseSlug, systemDesignTopics } from "@/data/system-design";
import { SystemDesignDiagram } from "@/components/learn/system-design-diagram";

const progressKey = `course-progress:${systemDesignCourseSlug}`;

export function SystemDesignOverview() {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => {
    const sync = () => setCompleted(JSON.parse(localStorage.getItem(progressKey) ?? "[]"));
    sync();
    window.addEventListener("storage", sync);
    const timer = window.setInterval(sync, 600);
    return () => { window.removeEventListener("storage", sync); window.clearInterval(timer); };
  }, []);
  const percentage = Math.round((completed.length / systemDesignTopics.length) * 100);

  return <>
    <div className="surface mb-8 rounded-3xl p-5 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700 dark:text-accent-400">Your path</p><p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{completed.length}/{systemDesignTopics.length} topics completed</p></div><span className="text-sm font-bold text-slate-500 dark:text-slate-400">{percentage}% complete</span></div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${percentage}%` }} /></div>
    </div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {systemDesignTopics.map((topic, index) => { const isDone = completed.includes(topic.slug); return <article key={topic.slug} className="system-topic-card surface group rounded-3xl p-4 sm:p-5">
        <div className="flex items-center justify-between"><span className="topic-number">{String(index + 1).padStart(2, "0")}</span><span className={`rounded-full px-2.5 py-1 text-[11px] font-black ${topic.level === "Beginner" ? "bg-teal-50 text-teal-700" : "bg-amber-50 text-amber-700"}`}>{topic.level}</span></div>
        <div className="mt-4 overflow-hidden rounded-2xl"><SystemDesignDiagram type={topic.diagram} labels={topic.diagramLabels} /></div>
        <div className="mt-5"><h2 className="text-xl font-black text-slate-950 dark:text-white">{topic.title}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">{topic.description}</p></div>
        <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800"><span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500"><Clock3 size={14} /> 1 min</span><Link href={`/learn/system-design/${topic.slug}`} className="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-3.5 py-2.5 text-xs font-black text-white transition hover:bg-teal-700 dark:bg-white dark:text-slate-950"><span>{isDone ? "Review" : "Start"}</span>{isDone ? <Check size={15} /> : <ArrowRight size={15} />}</Link></div>
        {isDone && <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600"><Check size={14} /> Completed</p>}
      </article>; })}
    </div>
  </>;
}
