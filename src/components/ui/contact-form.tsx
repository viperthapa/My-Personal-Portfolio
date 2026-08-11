"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="surface rounded-3xl p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="tool-label">Name<input required className="tool-input" placeholder="Your name" /></label>
        <label className="tool-label">Email<input required type="email" className="tool-input" placeholder="you@example.com" /></label>
      </div>
      <label className="tool-label mt-4">What is this about?<input className="tool-input" placeholder="Project, role, collaboration…" /></label>
      <label className="tool-label mt-4">Message<textarea required rows={7} className="tool-input" placeholder="Tell me a little about the opportunity." /></label>
      <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-black text-white dark:bg-gradient-to-r dark:from-accent-500 dark:to-brand-500 dark:text-slate-950"><Send size={16} /> Send message</button>
      {sent ? <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">Demo form only. Connect this component to Formspree, Resend, your own API route, or another mail service before launch.</p> : null}
    </form>
  );
}
