import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected development projects presented as concise recruiter-friendly case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="section-pad">
      <div className="container-shell">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">Selected work</p>
          <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl dark:text-white">Projects with context, not just screenshots.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">Selected work across AI applications, full-stack platforms and tested web systems, with technologies and contributions clearly documented.</p>
        </div>

        <div className="grid gap-7">
          {projects.map((project, index) => (
            <article key={project.title} className="surface overflow-hidden rounded-3xl">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="min-h-[280px] bg-gradient-to-br from-brand-100 via-violet-100 to-sky-100 p-6 dark:from-brand-500/10 dark:via-violet-500/10 dark:to-slate-950">
                  <div className="h-full rounded-2xl border border-white/70 bg-white/80 p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950/80">
                    <div className="flex items-center justify-between"><span className="text-xs font-black uppercase tracking-[0.14em] text-brand-600 dark:text-accent-400">Project {String(index + 1).padStart(2, "0")}</span><ArrowUpRight size={19} /></div>
                    <div className="mt-8 grid grid-cols-2 gap-3">{["Problem", "Solution", "Delivery", "Result"].map((label, i) => <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900"><div className={`h-2 rounded-full ${i % 2 ? "bg-accent-400" : "bg-brand-500"}`} style={{ width: `${54 + i * 11}%` }} /><p className="mt-4 text-sm font-black text-slate-800 dark:text-white">{label}</p><div className="mt-2 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" /><div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-slate-200 dark:bg-slate-800" /></div>)}</div>
                  </div>
                </div>
                <div className="p-7 sm:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-600 dark:text-accent-400">{project.category}</p>
                  <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">{project.title}</h2>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800"><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Role</p><p className="mt-2 font-black text-slate-900 dark:text-white">Full-stack implementation</p></div>
                    <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800"><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Result</p><p className="mt-2 font-black text-slate-900 dark:text-white">{project.metric}</p></div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{tech}</span>)}</div>
                   <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-slate-500 dark:text-slate-400"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-500" /> Project links were not included in the provided CV.</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
