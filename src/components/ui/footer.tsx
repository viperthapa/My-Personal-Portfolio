import Link from "next/link";
import { BriefcaseBusiness, Code2, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { VisitorCounter } from "@/components/ui/visitor-counter";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-[#050913]">
      <div className="container-shell grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-black text-slate-950 dark:text-white">
            <Code2 className="text-brand-600 dark:text-accent-400" /> {siteConfig.name}
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">{siteConfig.intro}</p>
           <div className="mt-5 flex gap-3">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg border border-slate-200 p-2 dark:border-slate-800"><Code2 size={17} /></a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg border border-slate-200 p-2 dark:border-slate-800"><BriefcaseBusiness size={17} /></a>
             <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="rounded-lg border border-slate-200 p-2 dark:border-slate-800"><Mail size={17} /></a>
           </div>
           <VisitorCounter />
         </div>

        <div>
          <p className="font-bold text-slate-950 dark:text-white">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/projects">Projects</Link>
            <Link href="/learn">Learning Hub</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="font-bold text-slate-950 dark:text-white">Get in touch</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2"><Mail size={15} /> {siteConfig.email}</span>
            <span className="flex items-center gap-2"><MapPin size={15} /> {siteConfig.location}</span>
          </div>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
         © 2026 {siteConfig.name}. Full Stack Software Engineer based in Kathmandu, Nepal.
      </div>
    </footer>
  );
}
