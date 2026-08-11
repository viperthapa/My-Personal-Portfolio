"use client";

import { useEffect, useState } from "react";

export function CourseProgress({ courseSlug, lessonSlugs }: { courseSlug: string; lessonSlugs: string[] }) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const key = `course-progress:${courseSlug}`;
    const sync = () => {
      const values: string[] = JSON.parse(localStorage.getItem(key) ?? "[]");
      setCompleted(values.filter((slug) => lessonSlugs.includes(slug)).length);
    };
    sync();
    window.addEventListener("storage", sync);
    const timer = window.setInterval(sync, 600);
    return () => {
      window.removeEventListener("storage", sync);
      window.clearInterval(timer);
    };
  }, [courseSlug, lessonSlugs]);

  const pct = lessonSlugs.length ? Math.round((completed / lessonSlugs.length) * 100) : 0;

  return (
    <div className="surface rounded-2xl p-5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-bold text-slate-700 dark:text-slate-200">Course progress</span>
        <span className="font-black text-brand-600 dark:text-accent-400">{completed}/{lessonSlugs.length}</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400 transition-all" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Progress is stored locally in this browser.</p>
    </div>
  );
}
