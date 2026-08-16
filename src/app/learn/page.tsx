import type { Metadata } from "next";
import { CourseCard } from "@/components/learn/course-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { courses } from "@/data/courses";
import Link from "next/link";
import { ArrowRight, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Hub",
  description: "Beginner-friendly learning tracks with short lessons, visual system design concepts, and quizzes.",
};

export default function LearnPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#fffaf0] section-pad dark:bg-[#11100d]">
      <div className="container-shell">
        <div className="relative mb-16 overflow-hidden rounded-[2rem] bg-[#18251d] px-7 py-10 text-[#fffaf0] shadow-2xl shadow-amber-950/10 sm:px-12 sm:py-14">
          <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border-[22px] border-[#e8b85c]/30" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e8b85c]">Learning hub</p>
            <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] sm:text-6xl">Learn technology without the confusion.</h1>
            <p className="mt-6 text-lg leading-8 text-[#d8e0d8]">Short explanations, practical examples, small challenges and quizzes designed for newcomers who learn best by doing.</p>
          </div>
        </div>
        <SectionHeading eyebrow="Core courses" title="Build your developer foundation" description="Python, JavaScript, System Design and Docker paths help you build practical skills from fundamentals to real-world engineering." />
        <div className="mb-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
          <Link href="/learn/system-design" className="group flex flex-col rounded-3xl border border-teal-200 bg-teal-50 p-6 transition hover:-translate-y-1 hover:border-teal-400 dark:border-teal-500/20 dark:bg-teal-500/10">
            <div className="flex items-start justify-between gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-600 text-white"><Network size={24} /></div><span className="rounded-full bg-teal-200 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-teal-900 dark:bg-teal-400/20 dark:text-teal-200">Intermediate</span></div>
            <p className="mt-7 text-xs font-black uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">Visual course</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">System Design</h2>
            <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">Understand scalability, databases, distributed systems and architecture trade-offs.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-teal-700 dark:text-teal-300">Explore 24 topics <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
          </Link>
        </div>
        <section aria-labelledby="interview-guide-heading" className="relative mb-10 overflow-hidden rounded-[2rem] bg-[#18251d] p-7 text-[#fffaf0] shadow-xl shadow-emerald-950/15 sm:p-10">
          <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border-[22px] border-[#e8b85c]/30" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#e8b85c]">Next mission · Coming soon</p>
              <h2 id="interview-guide-heading" className="mt-2 text-3xl font-black sm:text-4xl">Interview Preparation Guide</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#d8e0d8]">A separate preparation track for coding rounds, behavioral questions, system design interviews and confident technical communication.</p>
            </div>
            <span className="shrink-0 rounded-full bg-[#e8b85c] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#18251d]">Coming soon</span>
          </div>
        </section>
      </div>
    </div>
  );
}
