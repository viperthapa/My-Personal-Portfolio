import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
