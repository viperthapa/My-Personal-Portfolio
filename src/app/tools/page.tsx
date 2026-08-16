import type { Metadata } from "next";
import { ToolCard } from "@/components/tools/tool-card";
import { tools, toolCategories } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description: "Developer utilities, calculators and Nepal-focused date tools built into the portfolio platform.",
};

export default function ToolsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#f3f6f8] section-pad dark:bg-[#091018]">
      <div className="container-shell">
        <div className="relative mb-16 overflow-hidden rounded-[2rem] bg-[#102a43] px-7 py-10 text-white shadow-2xl shadow-sky-950/15 sm:px-12 sm:py-14">
          <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full border-[26px] border-[#62d6d0]/25" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#62d6d0]">Tools hub</p>
            <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] sm:text-6xl">Useful tools. Zero complexity.</h1>
            <p className="mt-6 text-lg leading-8 text-sky-100">A starter library of 14 browser-based utilities: six developer tools, three everyday calculators and five Nepal-focused date utilities.</p>
          </div>
        </div>

        <div className="grid gap-14">
          {toolCategories.map((category) => (
            <section key={category}>
              <div className="mb-6 flex items-end justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-brand-600 dark:text-accent-400">{tools.filter((tool) => tool.category === category).length} included</p><h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">{category}</h2></div><span className="text-sm text-slate-500 dark:text-slate-400">Expandable registry</span></div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{tools.filter((tool) => tool.category === category).map((tool) => <ToolCard key={tool.slug} tool={tool} />)}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
