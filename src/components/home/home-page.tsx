import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  Braces,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Mail,
  Puzzle,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import {
  achievements,
  expertise,
  experience,
  projects,
  siteConfig,
  skills,
  stats,
  testimonials,
} from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

const expertiseIcons = [Code2, Braces, Bot, Puzzle, Wrench];
const skillIcons = [Code2, Braces, Database, Wrench, Sparkles];

function ProjectVisual({ index }: { index: number }) {
  const variants = [
    {
      label: "Forum",
      blocks: ["Questions", "Answers", "Reactions", "Comments"],
    },
    {
      label: "RAG",
      blocks: ["Documents", "Embeddings", "Search", "Answers"],
    },
    {
      label: "NLP",
      blocks: ["Products", "Discounts", "Inventory", "Chatbot"],
    },
    {
      label: "Travel",
      blocks: ["Search", "Bookings", "Itinerary", "Support"],
    },
    {
      label: "Exams",
      blocks: ["Candidates", "Questions", "Results", "Reports"],
    },
  ];
  const item = variants[index] ?? variants[0];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-brand-50 p-4 dark:border-slate-800 dark:from-slate-950 dark:to-brand-950/30">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {item.blocks.map((block, i) => (
          <div key={block} className="rounded-xl border border-white bg-white/80 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <div className={`mb-3 h-1.5 rounded-full ${i % 2 === 0 ? "bg-brand-500/70" : "bg-accent-500/70"}`} style={{ width: `${60 + i * 8}%` }} />
            <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{block}</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800" />
            <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-slate-100 dark:bg-slate-800" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="overflow-hidden pb-10 pt-10 sm:pt-16 lg:pt-20">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/35 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for opportunities
            </div>
            <p className="text-2xl font-semibold tracking-tight text-slate-700 sm:text-3xl dark:text-slate-200">
              Hi, I&apos;m <span className="font-black text-brand-600 dark:text-accent-400">{siteConfig.name}</span>
            </p>
            <h1 className="mt-2 max-w-2xl text-5xl font-black leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-6xl dark:text-white">
              I build scalable <span className="text-brand-600 dark:text-transparent dark:bg-gradient-to-r dark:from-accent-400 dark:to-brand-400 dark:bg-clip-text">web applications.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">{siteConfig.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects">View My Work <ArrowRight size={16} /></ButtonLink>
              <ButtonLink href={siteConfig.resumeUrl} variant="secondary" download>Download Resume <Download size={16} /></ButtonLink>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <span className="mr-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Connect</span>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"><Code2 size={18} /></a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"><BriefcaseBusiness size={18} /></a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"><Mail size={18} /></a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] py-8">
            
            <div className="grid-dots absolute right-2 top-4 h-28 w-28 opacity-70" />
            <div className="grid-dots absolute bottom-12 left-0 h-24 w-24 opacity-60" />

            <div className="relative mx-auto flex h-[360px] w-[300px] flex-col items-center justify-end overflow-hidden rounded-[42px] border border-white/70 bg-gradient-to-b from-slate-100 to-slate-200 shadow-2xl shadow-brand-500/10 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
              <div className="absolute inset-0 overflow-hidden rounded-[42px] border-4 border-white/80 bg-gradient-to-br from-brand-500 to-violet-500 shadow-xl shadow-brand-500/30 dark:border-slate-700">
                <Image src="/myprofile.jpeg" alt={`${siteConfig.name} profile`} fill sizes="300px" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10" />
              </div>
              {/* <blockquote className="absolute inset-x-7 bottom-10 text-center text-base font-black italic leading-5 tracking-[-0.02em] text-white [text-shadow:0_0_18px_rgba(45,212,191,0.65)]">
                &ldquo;Build with purpose. Solve with clarity.&rdquo;
              </blockquote> */}
            </div>

            {/* {stats.map((stat, index) => {
              const positions = ["left-0 top-16", "right-0 top-10", "left-3 bottom-12", "right-1 bottom-20"];
              return (
                <div key={stat.label} className={`surface absolute ${positions[index]} hidden w-32 rounded-2xl p-4 sm:block`}>
                  <p className="text-xl font-black text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              );
            })} */}
          </div>
        </div>

        <div className="container-shell mt-12 grid gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-2 lg:grid-cols-5 dark:border-slate-800 dark:bg-slate-900/70">
          {expertise.map((item, index) => {
            const Icon = expertiseIcons[index];
            return (
              <div key={item.title} className="flex gap-3 rounded-xl p-3 transition hover:bg-slate-50 dark:hover:bg-slate-800/70">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-accent-400"><Icon size={20} /></div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500 dark:text-slate-400">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">About me</p>
            <h2 className="mt-3 max-w-lg text-4xl font-black tracking-tight text-slate-950 dark:text-white">Python backend. React frontend. Product focus.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
              I develop Python-heavy backends and React.js interfaces for SaaS platforms, client products and AI applications. My experience includes healthcare technology, team leadership, cloud deployments and tested web systems.
            </p>
            <div className="mt-6 grid gap-3">
              {["Clean, efficient and maintainable code", "User-focused and detail-oriented implementation", "Always learning and exploring useful technology"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 size={18} className="text-emerald-500" /> {item}
                </div>
              ))}
            </div>
            <div className="mt-8"><ButtonLink href="/learn" variant="secondary">Explore how I teach <ArrowRight size={16} /></ButtonLink></div>
          </div>

          <div className="surface rounded-3xl p-7">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">At a Glance</h3>
              <Target className="text-brand-600 dark:text-accent-400" />
            </div>
            <dl className="grid gap-5 text-sm sm:grid-cols-2">
              {[
                ["Based in", siteConfig.location],
                ["Experience", "6 Years"],
                ["Specialization", "Full Stack, Python, Automation"],
                ["Languages", "Python, JavaScript, TypeScript, SQL"],
                ["Education", "Completed BSC CSIT"],
                ["Availability", "Freelance / Full-time opportunities"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</dt>
                  <dd className="mt-1.5 font-semibold leading-6 text-slate-800 dark:text-slate-100">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="skills" className="pb-16">
        <div className="container-shell">
          <SectionHeading eyebrow="My skills" title="Technologies I work with" description="Grouped by the kind of work they help me deliver rather than arbitrary skill percentages." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {skills.map((group, index) => {
              const Icon = skillIcons[index];
              return (
                <div key={group.group} className="surface rounded-2xl p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-accent-400"><Icon size={20} /></div>
                    <p className="text-sm font-black text-slate-900 dark:text-white">{group.group}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => <span key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">{item}</span>)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="section-pad border-y border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Experience" title="My professional journey" />
            <div className="relative border-l border-brand-200 pl-7 dark:border-brand-500/30">
              {experience.map((item) => (
                <article key={item.period} className="relative pb-9 last:pb-0">
                  <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand-600 ring-4 ring-brand-100 dark:border-slate-950 dark:ring-brand-500/15" />
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600 dark:text-accent-400">{item.period}</p>
                  <h3 className="mt-2 text-lg font-black text-slate-950 dark:text-white">{item.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{item.company} · {item.location}</p>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.points.map((point) => <li key={point}>• {point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="self-center rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8 text-white shadow-2xl shadow-brand-950/20">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent-400">What I do</p>
            <div className="mt-6 grid gap-6">
              {[
                [Rocket, "Build", "Create robust, user-focused web applications that solve practical problems."],
                [Bot, "Automate", "Turn repetitive workflows into faster, clearer and more reliable systems."],
                [Target, "Optimize", "Improve performance, structure, maintainability and user experience."],
                [Sparkles, "Teach", "Break technical topics into beginner-friendly lessons, examples and quizzes."],
              ].map(([Icon, title, text]) => {
                const IconComponent = Icon as typeof Rocket;
                return (
                  <div key={title as string} className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/8 text-accent-300"><IconComponent size={19} /></div>
                    <div><h3 className="font-black">{title as string}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{text as string}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Featured projects"
            title="A few things I’ve built"
            description="Project cards are structured like mini case studies so recruiters see the problem, approach and stack—not just a screenshot."
            action={<Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-accent-400">View all projects <ArrowRight size={16} /></Link>}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="surface group rounded-3xl p-4 transition hover:-translate-y-1 hover:shadow-xl">
                <ProjectVisual index={index} />
                <div className="p-2 pb-1 pt-5">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-brand-600 dark:bg-brand-500/10 dark:text-accent-400">{project.category}</span>
                  <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => <span key={tech} className="rounded-md border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-500 dark:border-slate-800 dark:text-slate-400">{tech}</span>)}
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{project.metric}</span>
                    <Link href="/projects" className="inline-flex items-center gap-1 text-xs font-black text-brand-600 dark:text-accent-400">Case study <ArrowRight size={13} /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="pb-16">
        <div className="container-shell">
          <SectionHeading eyebrow="Achievements" title="Milestones I’m proud of" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {achievements.map((item, index) => {
              const icons = [Trophy, Users, Target, Code2, Rocket];
              const Icon = icons[index];
              return (
                <div key={item.label} className="surface flex items-center gap-4 rounded-2xl p-5">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-accent-400"><Icon size={20} /></div>
                  <div><p className="text-lg font-black text-slate-950 dark:text-white">{item.value}</p><p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/35">
        <div className="container-shell">
          <SectionHeading eyebrow="Learning + tools" title="More than a portfolio" description="The same site demonstrates technical depth through structured learning tracks and useful browser-based utilities." />
          <div className="grid gap-5 lg:grid-cols-2">
            <Link href="/learn" className="group rounded-3xl bg-gradient-to-br from-brand-600 to-violet-600 p-8 text-white shadow-xl shadow-brand-600/20 transition hover:-translate-y-1">
              <div className="flex items-center justify-between"><Braces size={28} /><ArrowRight className="transition group-hover:translate-x-1" /></div>
              <p className="mt-10 text-xs font-black uppercase tracking-[0.18em] text-brand-100">Learning hub</p>
              <h3 className="mt-2 text-3xl font-black">Python, JavaScript & Docker</h3>
              <p className="mt-3 max-w-lg leading-7 text-brand-100">Beginner-friendly lessons, code examples, practice challenges and end-of-course quizzes.</p>
            </Link>
            <Link href="/tools" className="group rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-1">
              <div className="flex items-center justify-between"><Wrench size={28} className="text-accent-400" /><ArrowRight className="transition group-hover:translate-x-1" /></div>
              <p className="mt-10 text-xs font-black uppercase tracking-[0.18em] text-accent-400">17 utilities included</p>
              <h3 className="mt-2 text-3xl font-black">Developer, Calculator & Nepal Tools</h3>
              <p className="mt-3 max-w-lg leading-7 text-slate-300">JSON, diff, README, EMI, percentage, BS/AD conversion and more—all organized for easy expansion.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="What people say" title="Professional feedback" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="surface rounded-3xl p-7">
                <p className="text-4xl font-black leading-none text-brand-200 dark:text-brand-800">“</p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.quote}</p>
                <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <p className="font-black text-slate-950 dark:text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 px-7 py-10 text-white shadow-2xl md:px-10">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold text-accent-400">Have a project or opportunity?</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Let’s work together 👋</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Available for full-stack engineering opportunities and client work involving Python backends, React applications and practical AI solutions.</p>
            </div>
            <ButtonLink href="/contact">Let’s Talk <ArrowRight size={16} /></ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
