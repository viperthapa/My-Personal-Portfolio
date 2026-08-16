"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    void fetch("/api/visitors", { method: "POST" })
      .then((response) => response.json() as Promise<{ configured?: boolean; count?: number }>)
      .then((data) => {
        if (typeof data.count === "number") setCount(data.count);
        else setIsAvailable(false);
      })
      .catch(() => setIsAvailable(false));
  }, []);

  return (
    <div className="mt-7 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400" aria-live="polite">
      <Eye size={15} className="text-brand-600 dark:text-accent-400" />
      <span>
        {count !== null ? `${count.toLocaleString()} site visits` : isAvailable ? "Site visits loading" : "Visitor count unavailable"}
      </span>
    </div>
  );
}
