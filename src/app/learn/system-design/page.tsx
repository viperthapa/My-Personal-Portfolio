import type { Metadata } from "next";
import { Network } from "lucide-react";
import { SystemDesignOverview } from "@/components/learn/system-design-overview";

export const metadata: Metadata = {
  title: "System Design | Learning Hub",
  description: "Learn 24 system design concepts through one-minute visual lessons, diagrams, and quizzes.",
};

export default function SystemDesignPage() {
  return <main className="section-pad system-design-page"><div className="container-shell"><header className="system-design-hero"><div className="system-design-mark"><Network size={28} /></div><p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-teal-700 dark:text-accent-400">Learn / System Design</p><h1 className="mt-3 max-w-3xl text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl dark:text-white">See how systems hold together.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Twenty-four visual, one-minute lessons for understanding architecture without getting buried in textbook prose.</p><div className="mt-7 flex flex-wrap gap-3 text-sm font-black text-slate-600 dark:text-slate-300"><span className="rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-slate-800 dark:bg-slate-900">24 topics</span><span className="rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-slate-800 dark:bg-slate-900">2 questions each</span><span className="rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-slate-800 dark:bg-slate-900">Browser-saved progress</span></div></header><SystemDesignOverview /></div></main>;
}
