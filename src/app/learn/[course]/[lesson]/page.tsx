import Link from "next/link";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import { notFound } from "next/navigation";
import { ProgressButton } from "@/components/learn/progress-button";
import { courses, getCourse, getLesson } from "@/data/courses";

export function generateStaticParams() {
  return courses.flatMap((course) => course.lessons.map((lesson) => ({ course: course.slug, lesson: lesson.slug })));
}

export default async function LessonPage({ params }: { params: Promise<{ course: string; lesson: string }> }) {
  const { course: courseSlug, lesson: lessonSlug } = await params;
  const course = getCourse(courseSlug);
  const lesson = getLesson(courseSlug, lessonSlug);
  if (!course || !lesson) notFound();

  const index = course.lessons.findIndex((item) => item.slug === lesson.slug);
  const previous = course.lessons[index - 1];
  const next = course.lessons[index + 1];

  return (
    <div className="section-pad">
      <div className="container-shell grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="surface sticky top-24 rounded-2xl p-4">
            <Link href={`/learn/${course.slug}`} className="mb-4 inline-flex items-center gap-2 text-xs font-black text-brand-600 dark:text-accent-400"><ArrowLeft size={14} /> {course.name}</Link>
            <div className="grid gap-1">
              {course.lessons.map((item, itemIndex) => (
                <Link key={item.slug} href={`/learn/${course.slug}/${item.slug}`} className={`rounded-xl px-3 py-2.5 text-sm font-semibold ${item.slug === lesson.slug ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-accent-300" : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"}`}>{itemIndex + 1}. {item.title}</Link>
              ))}
              <Link href={`/learn/${course.slug}/quiz`} className="mt-2 rounded-xl bg-slate-950 px-3 py-2.5 text-sm font-bold text-white dark:bg-white dark:text-slate-950">Final Quiz</Link>
            </div>
          </div>
        </aside>

        <article className="min-w-0 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">Lesson {index + 1} of {course.lessons.length}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">{lesson.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{lesson.summary}</p>

          <div className="prose-copy mt-9">
            {lesson.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          {lesson.code ? (
            <div className="mt-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-slate-400">Example</p>
              <pre className="code-block"><code>{lesson.code}</code></pre>
            </div>
          ) : null}

          {lesson.challenge ? (
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-500/20 dark:bg-amber-500/8">
              <div className="flex gap-3"><Lightbulb className="mt-0.5 shrink-0 text-amber-500" size={20} /><div><p className="font-black text-amber-900 dark:text-amber-200">Practice challenge</p><p className="mt-1 text-sm leading-6 text-amber-800 dark:text-amber-300">{lesson.challenge}</p></div></div>
            </div>
          ) : null}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
            <div className="flex gap-2">
              {previous ? <Link href={`/learn/${course.slug}/${previous.slug}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 dark:border-slate-700 dark:text-slate-200"><ArrowLeft size={16} /> Previous</Link> : null}
              <ProgressButton courseSlug={course.slug} lessonSlug={lesson.slug} />
            </div>
            {next ? <Link href={`/learn/${course.slug}/${next.slug}`} className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white">Next <ArrowRight size={16} /></Link> : <Link href={`/learn/${course.slug}/quiz`} className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white">Take quiz <ArrowRight size={16} /></Link>}
          </div>
        </article>
      </div>
    </div>
  );
}
