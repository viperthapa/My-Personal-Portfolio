import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { ToolWorkspace } from "@/components/tools/tool-workspace";
import { getTool, tools } from "@/data/tools";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <div className="section-pad">
      <div className="container-shell">
        <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-black text-brand-600 dark:text-accent-400"><ArrowLeft size={16} /> All tools</Link>
        <div className="mt-8 mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">{tool.category}</p><h1 className="mt-3 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl dark:text-white">{tool.name}</h1><p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{tool.description}</p></div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/35 dark:text-emerald-300"><ShieldCheck size={16}/> Client-side utility</div>
        </div>
        <ToolWorkspace slug={slug} />
      </div>
    </div>
  );
}
