"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const methodTone: Record<string, string> = {
  GET: "bg-leaf-500/15 text-leaf-300",
  POST: "bg-ember-500/15 text-ember-300",
  PUT: "bg-navy-400/20 text-navy-100",
  DELETE: "bg-red-500/15 text-red-300",
};

export default function CodeBlock({
  method,
  path,
  code,
  className = "",
}: {
  method?: string;
  path?: string;
  code: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className={`overflow-hidden rounded-2xl border border-navy-800 bg-navy-900 shadow-lift ${className}`}>
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3.5">
        {method && (
          <span className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-bold ${methodTone[method] ?? methodTone.GET}`}>
            {method}
          </span>
        )}
        {path && <code className="truncate font-mono text-[12.5px] text-navy-100">{path}</code>}
        <button
          onClick={copy}
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-2.5 py-1.5 text-[11.5px] font-semibold text-navy-100 transition-colors hover:border-leaf-400 hover:text-leaf-300"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed text-navy-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
