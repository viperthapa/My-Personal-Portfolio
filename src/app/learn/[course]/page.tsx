import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { CourseProgress } from "@/components/learn/course-progress";
import { courses, getCourse } from "@/data/courses";
import type { Metadata } from "next";

export function generateStaticParams() {
  return courses.map((course) => ({ course: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course: courseSlug } = await params;
  const course = getCourse(courseSlug);
  return course ? { title: course.name, description: course.description } : {};
}

export default async function CoursePage({ params }: { params: Promise<{ course: string }> }) {
  const { course: courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  return (
    <div className="section-pad">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">{course.eyebrow}</p>
            <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">{course.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{course.description}</p>

            <div className="mt-10 grid gap-3">
              {course.lessons.map((lesson, index) => (
                <Link key={lesson.slug} href={`/learn/${course.slug}/${lesson.slug}`} className="surface group flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-brand-300">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-sm font-black text-brand-600 dark:bg-brand-500/10 dark:text-accent-400">{String(index + 1).padStart(2, "0")}</div>
                  <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="font-black text-slate-950 dark:text-white">{lesson.title}</h2><span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">{lesson.level ?? "Beginner"}</span><span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">1–2 min</span></div><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{lesson.summary}</p></div>
                  <ArrowRight className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand-600" size={18} />
                </Link>
              ))}
              <Link href={`/learn/${course.slug}/quiz`} className="mt-3 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-brand-600 to-violet-600 p-5 text-white">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/12"><CheckCircle2 size={20} /></div>
                <div className="flex-1"><p className="font-black">Final Quiz</p><p className="mt-1 text-sm text-brand-100">{course.quiz.length} questions with explanations</p></div>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <aside className="grid content-start gap-4">
            <CourseProgress courseSlug={course.slug} lessonSlugs={course.lessons.map((lesson) => lesson.slug)} />
            <div className="surface rounded-2xl p-5">
              <div className="flex items-center gap-2 font-black text-slate-950 dark:text-white"><BookOpen size={18} className="text-brand-600 dark:text-accent-400" /> Course format</div>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                 <li>• Introduction and key insight</li>
                 <li>• Syntax-highlighted code example</li>
                 <li>• Real-world context and challenge</li>
                 <li>• Two-question topic quiz</li>
                <li>• Browser-saved completion</li>
                <li>• Final quiz with feedback</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
