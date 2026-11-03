"use client";

import React from "react";
import { ChevronDown, ChevronUp, HelpCircle, Tag } from "lucide-react";
import { GlassCard } from "@/shared/ui/GlassCard";
import { Badge } from "@/shared/ui/Badge";
import type { FAQItem } from "@/modules/content";

interface FaqAccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqAccordionItem({ faq, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <GlassCard borderGlow="none" className="p-0 overflow-hidden shadow-lg bg-canvas-card border border-white/10 hover:border-cyan-500/30 transition-all">
      <button
        onClick={onToggle}
        className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none hover:bg-white/[0.02] transition-colors cursor-pointer"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-canvas-base border border-white/10 shrink-0 mt-0.5">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <Badge variant="cyan" size="sm">
                {faq.category}
              </Badge>
            </div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-white leading-snug">
              {faq.question}
            </h3>
          </div>
        </div>
        <div className="p-1 rounded-lg bg-canvas-base border border-white/10 shrink-0 text-slate-400 mt-1">
          {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-canvas-base/60">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {faq.answer}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
            {faq.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-md bg-canvas-card text-slate-300 border border-white/5 font-mono"
              >
                <Tag className="w-2.5 h-2.5 text-cyan-400/70" />
                <span>#{tag}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </GlassCard>
  );
}
