"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export function ProgressButton({ courseSlug, lessonSlug }: { courseSlug: string; lessonSlug: string }) {
  const key = `course-progress:${courseSlug}`;
  const [done, setDone] = useState(false);

  useEffect(() => {
    const current: string[] = JSON.parse(localStorage.getItem(key) ?? "[]");
    setDone(current.includes(lessonSlug));
  }, [key, lessonSlug]);

  function toggle() {
    const current: string[] = JSON.parse(localStorage.getItem(key) ?? "[]");
    const next = current.includes(lessonSlug)
      ? current.filter((slug) => slug !== lessonSlug)
      : [...current, lessonSlug];
    localStorage.setItem(key, JSON.stringify(next));
    setDone(next.includes(lessonSlug));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${done ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "border border-slate-300 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"}`}
    >
      <CheckCircle2 size={17} /> {done ? "Completed" : "Mark complete"}
    </button>
  );
}
