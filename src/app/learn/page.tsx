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
        <SectionHeading eyebrow="Courses" title="Choose a learning path" description="Each course uses the same reusable lesson and quiz system, making it easy to add React, Git, SQL, Linux or other topics later." />
        <div className="mb-5 grid gap-5 lg:grid-cols-3">
          {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
        <Link href="/learn/system-design" className="surface group flex flex-col gap-6 rounded-3xl p-6 transition hover:-translate-y-1 hover:border-teal-300 sm:flex-row sm:items-center sm:p-7">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-accent-400"><Network size={26} /></div>
          <div className="flex-1"><p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700 dark:text-accent-400">Visual course</p><h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">System Design</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">Understand scalability, databases, distributed systems, and architecture trade-offs through 24 one-minute lessons.</p></div>
          <span className="inline-flex items-center gap-2 text-sm font-black text-teal-700 dark:text-accent-400">Explore 24 topics <ArrowRight size={16} /></span>
        </Link>
      </div>
    </div>
  );
}
