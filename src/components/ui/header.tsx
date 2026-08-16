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
    <header className="sticky top-0 z-50 border-b border-[#26365C] bg-gradient-to-b from-[#03071F] via-[#050F2D] to-[#071650] text-white shadow-[0_8px_24px_rgba(3,10,40,0.2)] backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-5">
         <Link href="/" className="flex items-center gap-2 font-black tracking-tight text-white">
           <Code2 className="text-white" size={24} />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
               onClick={() => setActiveSection(link.section)}
              aria-current={isActive(link.section) ? "page" : undefined}
                className={`text-sm font-semibold transition hover:text-white ${link.section === "learn" ? "ml-2 border-l border-[#26365C] pl-5" : ""} ${isActive(link.section) ? "text-white" : "text-[#D7E2FF]"}`}
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
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#26365C] bg-[#0B1738] text-white"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open ? (
         <div className="border-t border-[#26365C] bg-[#071650] p-4 text-white xl:hidden">
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
                 className={`rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white/10 ${link.section === "learn" ? "mt-2 border-t border-[#26365C] pt-5" : ""} ${isActive(link.section) ? "bg-white/10 text-white" : "text-[#D7E2FF]"}`}
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
