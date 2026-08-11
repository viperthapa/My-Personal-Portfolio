import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5";
  const tone =
    variant === "primary"
      ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 dark:bg-gradient-to-r dark:from-accent-500 dark:to-brand-500 dark:text-slate-950 dark:shadow-accent-500/10"
      : "border border-slate-300 bg-white text-slate-800 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-accent-400 dark:hover:text-accent-300";

  return (
    <Link href={href} className={`${base} ${tone}`} download={download}>
      {children}
    </Link>
  );
}
