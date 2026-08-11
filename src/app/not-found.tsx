import Link from "next/link";

export default function NotFound() {
  return <div className="section-pad"><div className="container-shell text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600">404</p><h1 className="mt-3 text-5xl font-black text-slate-950 dark:text-white">Page not found</h1><p className="mt-4 text-slate-600 dark:text-slate-300">The page or tool you requested does not exist.</p><Link href="/" className="mt-7 inline-block rounded-xl bg-brand-600 px-5 py-3 text-sm font-black text-white">Back home</Link></div></div>;
}
