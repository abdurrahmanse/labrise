"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { commonText } from "@/data/text/common";

export interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}

export function CopyButton({
  textToCopy,
  label = commonText.actions.copy,
  copiedLabel = commonText.actions.copied,
  className = ""
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
        copied
          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
          : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
      } ${className}`}
      aria-label={copied ? copiedLabel : label}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 opacity-70" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

export default CopyButton;
