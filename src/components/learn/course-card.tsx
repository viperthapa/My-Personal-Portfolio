import Link from "next/link";
import { ArrowRight, Braces, Container, FileJson } from "lucide-react";
import type { Course } from "@/data/courses";

const iconMap = {
  python: Braces,
  javascript: FileJson,
  docker: Container,
};

export function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.slug as keyof typeof iconMap] ?? Braces;
  return (
    <article className="surface group rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-accent-400">
          <Icon size={23} />
        </div>
        <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-bold text-slate-500 dark:border-slate-800 dark:text-slate-400">{course.level}</span>
      </div>
      <p className="mt-8 text-xs font-black uppercase tracking-[0.16em] text-brand-600 dark:text-accent-400">{course.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{course.name}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{course.description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{course.lessons.length} lessons + final quiz</span>
        <Link href={`/learn/${course.slug}`} className="inline-flex items-center gap-1 text-sm font-black text-brand-600 dark:text-accent-400">Start <ArrowRight size={15} /></Link>
      </div>
    </article>
  );
}
