import Link from "next/link";
import { ArrowRight, Calculator, Code2, MapPinned } from "lucide-react";
import type { ToolDefinition } from "@/data/tools";

export function ToolCard({ tool }: { tool: ToolDefinition }) {
  const Icon = tool.category === "Developer" ? Code2 : tool.category === "Calculators" ? Calculator : MapPinned;
  return (
    <Link href={`/tools/${tool.slug}`} className="surface group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-accent-400"><Icon size={22} /></div>
        {tool.badge ? <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-500 dark:bg-slate-800 dark:text-slate-300">{tool.badge}</span> : null}
      </div>
      <p className="mt-7 text-xs font-black uppercase tracking-[0.16em] text-brand-600 dark:text-accent-400">{tool.category}</p>
      <h2 className="mt-2 text-xl font-black text-slate-950 dark:text-white">{tool.name}</h2>
      <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">{tool.description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
        <span className="text-xs font-semibold text-slate-400">Runs in your browser</span>
        <ArrowRight size={17} className="text-brand-600 transition group-hover:translate-x-1 dark:text-accent-400" />
      </div>
    </Link>
  );
}
