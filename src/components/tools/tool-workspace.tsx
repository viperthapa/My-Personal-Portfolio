"use client";

import { useMemo, useState } from "react";
import { Check, Clipboard, RefreshCw, WandSparkles } from "lucide-react";
import {
  BS_MONTHS,
  adToBSParts,
  bsToADDate,
  buildBSMonth,
  calculateAge,
  dateDiffDays,
  formatAD,
  formatBS,
} from "@/lib/bs-calendar";

function Panel({ children, title, description }: { children: React.ReactNode; title?: string; description?: string }) {
  return (
    <section className="surface rounded-3xl p-5 sm:p-7">
      {title ? <h2 className="text-xl font-black text-slate-950 dark:text-white">{title}</h2> : null}
      {description ? <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p> : null}
      <div className={title || description ? "mt-6" : ""}>{children}</div>
    </section>
  );
}

function ActionButton({ children, onClick, disabled }: { children: React.ReactNode; onClick: () => void; disabled?: boolean }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-black text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-gradient-to-r dark:from-accent-500 dark:to-brand-500 dark:text-slate-950">
      {children}
    </button>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }
  return (
    <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold text-slate-700 dark:border-slate-700 dark:text-slate-200">
      {copied ? <Check size={14} /> : <Clipboard size={14} />} {copied ? "Copied" : "Copy"}
    </button>
  );
}

function Result({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{value}</p>
      {sub ? <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{sub}</p> : null}
    </div>
  );
}

function ErrorBox({ message }: { message: string }) {
  return <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">{message}</div>;
}

function JSONViewer() {
  const [input, setInput] = useState('{\n  "name": "YourName",\n  "skills": ["React", "Python"]\n}');
  const [output, setOutput] = useState(input);
  const [error, setError] = useState("");

  function transform(mode: "pretty" | "minify" | "validate") {
    try {
      const parsed = JSON.parse(input);
      setError("");
      setOutput(mode === "minify" ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2));
      if (mode === "validate") setOutput("✓ Valid JSON\n\n" + JSON.stringify(parsed, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Panel title="Input JSON" description="Everything runs locally in your browser.">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={17} className="tool-input font-mono text-sm" spellCheck={false} />
        <div className="mt-4 flex flex-wrap gap-2"><ActionButton onClick={() => transform("pretty")}>Format</ActionButton><ActionButton onClick={() => transform("validate")}>Validate</ActionButton><button onClick={() => transform("minify")} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold dark:border-slate-700">Minify</button></div>
        {error ? <div className="mt-4"><ErrorBox message={error} /></div> : null}
      </Panel>
      <Panel title="Output" description="Formatted output is ready to copy.">
        <div className="mb-3 flex justify-end"><CopyButton value={output} /></div>
        <pre className="code-block min-h-[348px] whitespace-pre-wrap break-words">{output}</pre>
      </Panel>
    </div>
  );
}

function DiffChecker() {
  const [left, setLeft] = useState("Hello John\nThis is version one.\nReact is useful.");
  const [right, setRight] = useState("Hello David\nThis is version two.\nReact is useful.\nAdded line.");
  const rows = useMemo(() => {
    const a = left.split("\n");
    const b = right.split("\n");
    return Array.from({ length: Math.max(a.length, b.length) }, (_, i) => ({
      left: a[i] ?? "",
      right: b[i] ?? "",
      status: a[i] === undefined ? "added" : b[i] === undefined ? "removed" : a[i] === b[i] ? "same" : "changed",
    }));
  }, [left, right]);

  return (
    <div className="grid gap-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Original"><textarea value={left} onChange={(e) => setLeft(e.target.value)} rows={10} className="tool-input font-mono text-sm" /></Panel>
        <Panel title="Updated"><textarea value={right} onChange={(e) => setRight(e.target.value)} rows={10} className="tool-input font-mono text-sm" /></Panel>
      </div>
      <Panel title="Comparison" description="This starter uses a simple line-by-line comparison; you can later swap in a full diff library.">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-400 dark:bg-slate-950"><tr><th className="p-3">#</th><th className="p-3">Original</th><th className="p-3">Updated</th><th className="p-3">Status</th></tr></thead>
            <tbody>{rows.map((row, i) => <tr key={i} className="border-t border-slate-200 dark:border-slate-800"><td className="p-3 text-slate-400">{i + 1}</td><td className={`p-3 font-mono ${row.status === "removed" || row.status === "changed" ? "bg-red-50 dark:bg-red-500/8" : ""}`}>{row.left || "—"}</td><td className={`p-3 font-mono ${row.status === "added" || row.status === "changed" ? "bg-emerald-50 dark:bg-emerald-500/8" : ""}`}>{row.right || "—"}</td><td className="p-3 font-bold capitalize">{row.status}</td></tr>)}</tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}

function ReadmeBuilder() {
  const [project, setProject] = useState("My Awesome Project");
  const [description, setDescription] = useState("A practical project built with React and Next.js.");
  const [features, setFeatures] = useState("Responsive UI\nDark mode\nReusable components");
  const [install, setInstall] = useState("npm install\nnpm run dev");
  const [stack, setStack] = useState("Next.js, React, TypeScript, Tailwind CSS");
  const markdown = useMemo(() => {
    const featureLines = features.split("\n").filter(Boolean).map((item) => `- ${item}`).join("\n");
    return `# ${project}\n\n${description}\n\n## Features\n\n${featureLines || "- Add your key features"}\n\n## Tech Stack\n\n${stack}\n\n## Installation\n\n\`\`\`bash\n${install}\n\`\`\`\n\n## Usage\n\nDescribe how to use your project here.\n\n## License\n\nAdd your chosen license.\n`;
  }, [project, description, features, install, stack]);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Panel title="README details">
        <div className="grid gap-4">
          <label className="tool-label">Project name<input className="tool-input" value={project} onChange={(e) => setProject(e.target.value)} /></label>
          <label className="tool-label">Description<textarea rows={3} className="tool-input" value={description} onChange={(e) => setDescription(e.target.value)} /></label>
          <label className="tool-label">Features — one per line<textarea rows={5} className="tool-input" value={features} onChange={(e) => setFeatures(e.target.value)} /></label>
          <label className="tool-label">Tech stack<input className="tool-input" value={stack} onChange={(e) => setStack(e.target.value)} /></label>
          <label className="tool-label">Installation commands<textarea rows={4} className="tool-input font-mono" value={install} onChange={(e) => setInstall(e.target.value)} /></label>
        </div>
      </Panel>
      <Panel title="Generated README.md"><div className="mb-3 flex justify-end"><CopyButton value={markdown} /></div><pre className="code-block min-h-[520px] whitespace-pre-wrap">{markdown}</pre></Panel>
    </div>
  );
}

function Base64Tool() {
  const [input, setInput] = useState("Hello from your portfolio!");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const encode = () => {
    try {
      const bytes = new TextEncoder().encode(input);
      let binary = "";
      bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
      setOutput(btoa(binary)); setError("");
    } catch { setError("Could not encode this value."); }
  };
  const decode = () => {
    try {
      const binary = atob(input.trim());
      const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
      setOutput(new TextDecoder().decode(bytes)); setError("");
    } catch { setError("The input is not valid Base64."); }
  };
  return <Panel title="Base64 converter"><textarea rows={8} className="tool-input" value={input} onChange={(e) => setInput(e.target.value)} /><div className="mt-4 flex gap-2"><ActionButton onClick={encode}>Encode</ActionButton><button onClick={decode} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold dark:border-slate-700">Decode</button></div>{error ? <div className="mt-4"><ErrorBox message={error} /></div> : null}<div className="mt-6"><div className="mb-2 flex justify-end"><CopyButton value={output} /></div><pre className="code-block min-h-32 whitespace-pre-wrap break-all">{output || "Output appears here"}</pre></div></Panel>;
}

function URLTool() {
  const [input, setInput] = useState("name=Your Name&topic=React tools");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const run = (mode: "encode" | "decode") => {
    try { setOutput(mode === "encode" ? encodeURIComponent(input) : decodeURIComponent(input)); setError(""); }
    catch { setError("The value could not be decoded safely."); }
  };
  return <Panel title="URL component converter"><textarea rows={7} className="tool-input" value={input} onChange={(e) => setInput(e.target.value)} /><div className="mt-4 flex gap-2"><ActionButton onClick={() => run("encode")}>Encode</ActionButton><button onClick={() => run("decode")} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold dark:border-slate-700">Decode</button></div>{error ? <div className="mt-4"><ErrorBox message={error} /></div> : null}<div className="mt-6"><div className="mb-2 flex justify-end"><CopyButton value={output} /></div><pre className="code-block min-h-28 whitespace-pre-wrap break-all">{output || "Output appears here"}</pre></div></Panel>;
}

function UUIDTool() {
  const [count, setCount] = useState(5);
  const [values, setValues] = useState<string[]>([]);
  const generate = () => setValues(Array.from({ length: Math.max(1, Math.min(50, count)) }, () => crypto.randomUUID()));
  return <Panel title="UUID v4 generator" description="Uses the browser-native crypto.randomUUID() API."><label className="tool-label max-w-xs">How many?<input type="number" min={1} max={50} className="tool-input" value={count} onChange={(e) => setCount(Number(e.target.value))} /></label><div className="mt-4"><ActionButton onClick={generate}><RefreshCw size={15} /> Generate</ActionButton></div><div className="mt-6"><div className="mb-2 flex justify-end"><CopyButton value={values.join("\n")} /></div><pre className="code-block min-h-48 whitespace-pre-wrap">{values.length ? values.join("\n") : "Generate UUIDs to see them here."}</pre></div></Panel>;
}

function EMICalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(10.5);
  const [years, setYears] = useState(5);
  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const emi = monthlyRate === 0 ? principal / months : principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const total = emi * months;
  const interest = total - principal;
  const money = (value: number) => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);
  const interestPct = total > 0 ? (interest / total) * 100 : 0;
  return <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]"><Panel title="Loan details"><div className="grid gap-4"><label className="tool-label">Loan amount<input type="number" className="tool-input" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} /></label><label className="tool-label">Annual interest rate (%)<input type="number" step="0.1" className="tool-input" value={rate} onChange={(e) => setRate(Number(e.target.value))} /></label><label className="tool-label">Loan term (years)<input type="number" className="tool-input" value={years} onChange={(e) => setYears(Number(e.target.value))} /></label></div></Panel><Panel title="Estimated repayment"><div className="grid gap-3 sm:grid-cols-3"><Result label="Monthly EMI" value={money(emi)} /><Result label="Total interest" value={money(interest)} /><Result label="Total payment" value={money(total)} /></div><div className="mt-6 grid gap-3"><div className="flex justify-between text-xs font-bold text-slate-500"><span>Principal</span><span>Interest</span></div><div className="flex h-5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><div className="bg-brand-500" style={{ width: `${100 - interestPct}%` }} /><div className="bg-accent-400" style={{ width: `${interestPct}%` }} /></div><p className="text-xs leading-5 text-slate-500 dark:text-slate-400">Illustrative calculation using the standard reducing-balance EMI formula. Actual lender schedules can differ due to fees, rounding or rate changes.</p></div></Panel></div>;
}

function PercentageCalculator() {
  const [value, setValue] = useState(250);
  const [percent, setPercent] = useState(18);
  const [oldValue, setOldValue] = useState(200);
  const pctValue = value * percent / 100;
  const change = oldValue === 0 ? 0 : ((value - oldValue) / Math.abs(oldValue)) * 100;
  return <Panel title="Percentage calculator"><div className="grid gap-5 md:grid-cols-2"><div className="grid gap-4"><label className="tool-label">Value<input type="number" className="tool-input" value={value} onChange={(e) => setValue(Number(e.target.value))} /></label><label className="tool-label">Percentage (%)<input type="number" className="tool-input" value={percent} onChange={(e) => setPercent(Number(e.target.value))} /></label><label className="tool-label">Previous value for change calculation<input type="number" className="tool-input" value={oldValue} onChange={(e) => setOldValue(Number(e.target.value))} /></label></div><div className="grid gap-3"><Result label={`${percent}% of ${value}`} value={pctValue.toLocaleString()} /><Result label="Percentage change" value={`${change.toFixed(2)}%`} sub={`From ${oldValue} to ${value}`} /><Result label="Value after adding percentage" value={(value + pctValue).toLocaleString()} /></div></div></Panel>;
}

function AgeCalculator() {
  const [dob, setDob] = useState("2000-01-01");
  const date = new Date(`${dob}T12:00:00Z`);
  const age = calculateAge(date);
  return <Panel title="Age calculator"><div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]"><label className="tool-label">Date of birth<input type="date" className="tool-input" value={dob} onChange={(e) => setDob(e.target.value)} /></label><div>{age ? <div className="grid gap-3 sm:grid-cols-3"><Result label="Years" value={String(age.years)} /><Result label="Months" value={String(age.months)} /><Result label="Days" value={String(age.days)} /></div> : <ErrorBox message="Please select a valid birth date that is not in the future." />}</div></div></Panel>;
}

function BSNotice() {
  return <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">Supported range: 1978–2099 BS / 1921–2040 AD. Dashain, Tihar, Holi, Teej, Buddha Jayanti, Maha Shivaratri and Eid dates follow lunar calendars and vary yearly.</p>;
}

function BSFields({ year, month, day, onYear, onMonth, onDay }: { year: number; month: number; day: number; onYear: (v:number)=>void; onMonth:(v:number)=>void; onDay:(v:number)=>void }) {
  return <div className="grid gap-3 sm:grid-cols-3"><label className="tool-label">BS year<input type="number" className="tool-input" value={year} onChange={(e)=>onYear(Number(e.target.value))} /></label><label className="tool-label">Month<select className="tool-input" value={month} onChange={(e)=>onMonth(Number(e.target.value))}>{BS_MONTHS.map((name,i)=><option key={name} value={i+1}>{i+1}. {name}</option>)}</select></label><label className="tool-label">Day<input type="number" min={1} max={32} className="tool-input" value={day} onChange={(e)=>onDay(Number(e.target.value))} /></label></div>;
}

function BSToAD() {
  const [year,setYear]=useState(2083), [month,setMonth]=useState(4), [day,setDay]=useState(25);
  const [result,setResult]=useState(""); const [error,setError]=useState("");
  const convert=()=>{ const date=bsToADDate({year,month,day}); if(date){setResult(formatAD(date));setError("");}else{setResult("");setError("No matching date was found. Check that the BS date is valid and inside the supported conversion range.");}};
  return <Panel title="BS → AD"><BSNotice/><div className="mt-4"><BSFields year={year} month={month} day={day} onYear={setYear} onMonth={setMonth} onDay={setDay}/></div><div className="mt-4"><ActionButton onClick={convert}><WandSparkles size={15}/> Convert</ActionButton></div>{error?<div className="mt-4"><ErrorBox message={error}/></div>:null}{result?<div className="mt-5"><Result label="Gregorian date" value={result}/></div>:null}</Panel>;
}

function ADToBS() {
  const [date,setDate]=useState("2026-08-09");
  const value=adToBSParts(new Date(`${date}T12:00:00Z`));
  return <Panel title="AD → BS"><BSNotice/><label className="tool-label mt-4 max-w-sm">Gregorian date<input type="date" className="tool-input" value={date} onChange={(e)=>setDate(e.target.value)}/></label><div className="mt-5">{value?<Result label="Bikram Sambat date" value={formatBS(value)} sub={`${value.year}-${String(value.month).padStart(2,"0")}-${String(value.day).padStart(2,"0")}`}/>:<ErrorBox message="Could not convert this date. Check that it falls inside the supported conversion range."/>}</div></Panel>;
}

function BSADConverter() {
  return <div className="grid gap-5 lg:grid-cols-2"><BSToAD /><ADToBS /></div>;
}

function NepaliToday() {
  const now = new Date();
  const utcDate = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 12));
  const bs=adToBSParts(utcDate);
  return <Panel title="Today's date"><BSNotice/><div className="mt-4 grid gap-3 sm:grid-cols-2"><Result label="Gregorian AD" value={formatAD(utcDate)}/>{bs?<Result label="Bikram Sambat" value={formatBS(bs)}/>:<Result label="Bikram Sambat" value="Unavailable"/>}</div></Panel>;
}

function BSDateDifference() {
  const [aY,setAY]=useState(2083),[aM,setAM]=useState(1),[aD,setAD]=useState(1);
  const [bY,setBY]=useState(2083),[bM,setBM]=useState(4),[bD,setBD]=useState(25);
  const a=bsToADDate({year:aY,month:aM,day:aD}), b=bsToADDate({year:bY,month:bM,day:bD});
  return <div className="grid gap-5"><Panel title="Start BS date"><BSFields year={aY} month={aM} day={aD} onYear={setAY} onMonth={setAM} onDay={setAD}/></Panel><Panel title="End BS date"><BSFields year={bY} month={bM} day={bD} onYear={setBY} onMonth={setBM} onDay={setBD}/></Panel><Panel>{a&&b?<div className="grid gap-3 sm:grid-cols-3"><Result label="Total days" value={String(dateDiffDays(a,b))}/><Result label="Start AD" value={formatAD(a)}/><Result label="End AD" value={formatAD(b)}/></div>:<ErrorBox message="One or both BS dates could not be converted."/>}</Panel></div>;
}

function NepaliAge() {
  const [y,setY]=useState(2060),[m,setM]=useState(1),[d,setD]=useState(1);
  const dob=bsToADDate({year:y,month:m,day:d}); const age=dob?calculateAge(dob):null;
  return <Panel title="Age from BS birth date"><BSNotice/><div className="mt-4"><BSFields year={y} month={m} day={d} onYear={setY} onMonth={setM} onDay={setD}/></div><div className="mt-5">{age&&dob?<div className="grid gap-3 sm:grid-cols-4"><Result label="Years" value={String(age.years)}/><Result label="Months" value={String(age.months)}/><Result label="Days" value={String(age.days)}/><Result label="Birth date AD" value={formatAD(dob)}/></div>:<ErrorBox message="Enter a valid BS birth date that converts to a date in the past."/>}</div></Panel>;
}

function NepaliCalendar() {
  const [year,setYear]=useState(2083),[month,setMonth]=useState(4);
  const calendar=buildBSMonth(year,month);
  const blanks=calendar?Array.from({length:calendar.startWeekday}):[];
  const today = new Date();
  const todayAD = formatAD(new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), 12)));
  return <Panel title="Nepali calendar month" description="Dates are converted from Bikram Sambat. Observance names below use fixed official dates and well-established calendar facts; lunar festivals change date each year."><BSNotice/><div className="mt-4 grid max-w-md gap-3 sm:grid-cols-2"><label className="tool-label">BS year<input type="number" className="tool-input" value={year} onChange={(e)=>setYear(Number(e.target.value))}/></label><label className="tool-label">Month<select className="tool-input" value={month} onChange={(e)=>setMonth(Number(e.target.value))}>{BS_MONTHS.map((name,i)=><option key={name} value={i+1}>{name}</option>)}</select></label></div>{calendar?<><div className="mt-4 flex flex-wrap gap-3 text-xs font-bold text-slate-500 dark:text-slate-400"><span className="inline-flex items-center gap-2"><i className="size-3 rounded-full bg-accent-400"/> Today</span><span className="inline-flex items-center gap-2"><i className="size-3 rounded-full bg-brand-600"/> Holiday or observance</span></div><div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="bg-slate-950 px-5 py-4 text-center text-lg font-black text-white">{calendar.monthName} {year}</div><div className="grid grid-cols-7 bg-slate-50 text-center text-xs font-black text-slate-500 dark:bg-slate-900 dark:text-slate-400">{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d=><div key={d} className="p-3">{d}</div>)}</div><div className="grid grid-cols-7">{blanks.map((_,i)=><div key={`blank-${i}`} className="min-h-20 border-t border-r border-slate-100 dark:border-slate-800"/>)}{calendar.cells.map(cell=>{const isToday = formatAD(cell.ad) === todayAD; return <div key={cell.bs.day} className={`min-h-20 border-t border-r border-slate-100 p-2 dark:border-slate-800 ${isToday ? "bg-accent-50 ring-2 ring-inset ring-accent-400 dark:bg-accent-500/10" : ""}`}><div className="flex items-start justify-between gap-1"><p className="font-black text-slate-950 dark:text-white">{cell.bs.day}</p>{isToday ? <span className="rounded-full bg-accent-400 px-1.5 py-0.5 text-[9px] font-black text-slate-950">TODAY</span> : null}</div><p className="mt-1 text-[10px] text-slate-400">{formatAD(cell.ad)}</p>{cell.observances.map((observance)=><p key={observance.name} title={observance.note} className="mt-1 truncate text-[10px] font-black text-brand-700 dark:text-accent-300">{observance.name}</p>)}</div>})}</div></div><div className="mt-5 grid gap-2">{calendar.cells.flatMap((cell)=>cell.observances.map((observance)=><p key={`${cell.bs.day}-${observance.name}`} className="rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300"><strong>{cell.bs.day} {calendar.monthName}:</strong> {observance.name} — {observance.note}</p>))}</div></>:<div className="mt-5"><ErrorBox message="Could not build this BS month. Check that the year is inside the supported conversion range."/></div>}</Panel>;
}

export function ToolWorkspace({ slug }: { slug: string }) {
  switch (slug) {
    case "json-viewer": return <JSONViewer />;
    case "diff-checker": return <DiffChecker />;
    case "readme-builder": return <ReadmeBuilder />;
    case "base64": return <Base64Tool />;
    case "url-encoder": return <URLTool />;
    case "uuid-generator": return <UUIDTool />;
    case "emi-calculator": return <EMICalculator />;
    case "percentage-calculator": return <PercentageCalculator />;
    case "age-calculator": return <AgeCalculator />;
    case "bs-ad-converter": return <BSADConverter />;
    case "nepali-today": return <NepaliToday />;
    case "bs-date-difference": return <BSDateDifference />;
    case "nepali-age": return <NepaliAge />;
    case "nepali-calendar": return <NepaliCalendar />;
    default: return <ErrorBox message="Tool not implemented." />;
  }
}
