"use client";

import { useState } from "react";

type Language = "python" | "javascript";

declare global {
  interface Window {
    loadPyodide?: (options: { indexURL: string }) => Promise<{ runPythonAsync: (code: string) => Promise<unknown> }>;
  }
}

export function CodeCompiler({ language, initialCode }: { language: Language; initialCode: string }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  async function runCode() {
    setRunning(true);
    setOutput("");
    try {
      if (language === "javascript") {
        const lines: string[] = [];
        const consoleProxy = { log: (...values: unknown[]) => lines.push(values.map(String).join(" ")) };
        new Function("console", code)(consoleProxy);
        setOutput(lines.join("\n") || "Code ran successfully with no console output.");
        return;
      }

      if (!window.loadPyodide) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js";
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Could not load Python runtime."));
          document.body.appendChild(script);
        });
      }
      const pyodide = await window.loadPyodide?.({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/" });
      if (!pyodide) throw new Error("Python runtime is unavailable.");
      const result = await pyodide.runPythonAsync(`import sys\nfrom io import StringIO\n_capture = StringIO()\nsys.stdout = _capture\ntry:\n${code.split("\n").map((line) => `    ${line}`).join("\n")}\nfinally:\n    sys.stdout = sys.__stdout__\n_capture.getvalue()`);
      setOutput(String(result) || "Python code ran successfully with no output.");
    } catch (error) {
      setOutput(error instanceof Error ? error.message : "Could not run code.");
    } finally {
      setRunning(false);
    }
  }

  return (
    <section className="surface mt-8 rounded-3xl p-5 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-brand-600 dark:text-accent-400">Try it yourself</p>
          <h2 className="mt-2 text-xl font-black text-slate-950 dark:text-white">{language === "python" ? "Python compiler" : "JavaScript compiler"}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Runs in your browser. Nothing is sent to a server.</p>
        </div>
        <button type="button" onClick={runCode} disabled={running} className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-black text-white disabled:opacity-50 dark:bg-accent-400 dark:text-slate-950">
          {running ? "Running..." : "Run code"}
        </button>
      </div>
      <textarea value={code} onChange={(event) => setCode(event.target.value)} rows={9} spellCheck={false} className="tool-input mt-5 font-mono text-sm" />
      <pre className="code-block mt-4 min-h-20 whitespace-pre-wrap">{output || "Output appears here"}</pre>
      {language === "python" ? <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">First run downloads the Python runtime, so it may take a moment.</p> : null}
    </section>
  );
}
