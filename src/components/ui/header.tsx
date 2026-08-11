"use client";

import Link from "next/link";
import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Skills", href: "/#skills", section: "skills" },
  { label: "Projects", href: "/projects", section: "projects" },
  { label: "Achievements", href: "/#achievements", section: "achievements" },
  { label: "Learn", href: "/learn", section: "learn" },
  { label: "Tools", href: "/tools", section: "tools" },
  { label: "Contact", href: "/contact", section: "contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      const current = links.find((link) => link.href !== "/" && pathname.startsWith(link.href) && !link.href.includes("#"));
      setActiveSection(current?.section ?? "");
      return;
    }

    const sections = ["about", "experience", "skills", "projects", "achievements"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
         setActiveSection((current) => visible?.target.id ?? (window.scrollY < 120 ? "home" : current));
      },
      { rootMargin: "-20% 0px -65%", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));

     const updateFromHash = () => setActiveSection((current) => window.location.hash.slice(1) || (window.scrollY < 120 ? "home" : current));
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [pathname]);

  const isActive = (section: string) => activeSection === section;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-xl dark:border-slate-800/70 dark:bg-[#060b16]/85">
      <div className="container-shell flex h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight text-slate-950 dark:text-white">
          <Code2 className="text-brand-600 dark:text-accent-400" size={24} />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
               onClick={() => setActiveSection(link.section)}
              aria-current={isActive(link.section) ? "page" : undefined}
              className={`text-sm font-semibold transition hover:text-brand-600 dark:hover:text-accent-400 ${link.section === "learn" ? "ml-2 border-l border-slate-200 pl-5 dark:border-slate-700" : ""} ${isActive(link.section) ? "text-brand-600 dark:text-accent-400" : "text-slate-600 dark:text-slate-300"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white p-4 xl:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="container-shell grid gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                   setActiveSection(link.section);
                }}
                aria-current={isActive(link.section) ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 ${link.section === "learn" ? "mt-2 border-t border-slate-200 pt-5 dark:border-slate-800" : ""} ${isActive(link.section) ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-accent-400" : "text-slate-700 dark:text-slate-200"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
