import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { QuizClient } from "@/components/learn/quiz-client";
import { courses, getCourse } from "@/data/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ course: course.slug }));
}

export default async function QuizPage({ params }: { params: Promise<{ course: string }> }) {
  const { course: courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  return (
    <div className="section-pad">
      <div className="container-shell max-w-4xl">
        <Link href={`/learn/${course.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-brand-600 dark:text-accent-400"><ArrowLeft size={16} /> Back to course</Link>
        <p className="mt-10 text-xs font-black uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">Final knowledge check</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">{course.name} Quiz</h1>
        <p className="mb-10 mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">Answer all {course.quiz.length} questions. After submission, every question shows a short explanation.</p>
        <QuizClient courseName={course.name} questions={course.quiz} />
      </div>
    </div>
  );
}
