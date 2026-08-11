import type { Metadata } from "next";
import { BriefcaseBusiness, Code2, Mail, MapPin, Music2, PlayCircle } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">Contact</p>
          <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">Let’s build something useful.</h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-300">Use this area for recruiter outreach, freelance enquiries, collaboration or technical opportunities.</p>
          <div className="mt-8 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3"><Mail size={18} className="text-brand-600 dark:text-accent-400" /> {siteConfig.email}</a>
            <span className="flex items-center gap-3"><MapPin size={18} className="text-brand-600 dark:text-accent-400" /> {siteConfig.location}</span>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="flex items-center gap-3"><Code2 size={18} className="text-brand-600 dark:text-accent-400" /> GitHub</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3"><BriefcaseBusiness size={18} className="text-brand-600 dark:text-accent-400" /> LinkedIn</a>
            <a href={siteConfig.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-3"><Music2 size={18} className="text-brand-600 dark:text-accent-400" /> TikTok</a>
            <a href={siteConfig.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-3"><PlayCircle size={18} className="text-brand-600 dark:text-accent-400" /> YouTube</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
