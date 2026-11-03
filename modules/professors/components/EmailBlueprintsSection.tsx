"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Paperclip, Send, MessageSquare, FileText } from "lucide-react";
import { coldEmailTemplates, professorOutreachControlsData } from "@/data/professorsData";
import { CopyButton } from "@/components/ui/CopyButton";
import { legacyText } from "@/data/text/legacy";

export function EmailBlueprintsSection() {
  const [activeTemplateId, setActiveTemplateId] = useState(coldEmailTemplates[0].id);
  const { blueprintsTitle, blueprintsSubtitle } = professorOutreachControlsData.sections;

  const currentTemplate =
    coldEmailTemplates.find((t) => t.id === activeTemplateId) || coldEmailTemplates[0];

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Mail className="w-4 h-4" />
          <span>{legacyText.emailBlueprintsSection.t0}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {blueprintsTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {blueprintsSubtitle}
        </p>
      </div>

      {/* Template Selection Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900 border border-white/10 max-w-xl">
        {coldEmailTemplates.map((template) => (
          <button
            key={template.id}
            onClick={() => setActiveTemplateId(template.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTemplateId === template.id
                ? "bg-indigo-600 text-white border-transparent shadow-[3px_3px_0_0_rgba(15,23,42,0.18)] font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FileText className={`w-3 h-3 ${activeTemplateId === template.id ? "text-white" : "text-indigo-400"}`} />
            <span>{template.name}</span>
          </button>
        ))}
      </div>

      {/* Selected Template Display Box */}
      <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
          <div>
            <h4 className="text-base font-bold text-white">{currentTemplate.name}</h4>
            <span className="text-xs text-slate-400 font-mono">
              Audience: {currentTemplate.targetAudience} • Target: {currentTemplate.wordCount}
            </span>
          </div>
          <CopyButton textToCopy={currentTemplate.body} label={legacyText.emailBlueprintsSection.t5} />
        </div>

        {/* Subject Lines */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>{legacyText.emailBlueprintsSection.t1}</span>
          </span>
          <div className="space-y-1.5">
            {currentTemplate.subjectLines.map((subj, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-slate-950 font-mono text-xs text-cyan-300 border border-white/5 flex items-center justify-between"
              >
                <span>{subj}</span>
                <CopyButton textToCopy={subj} label={legacyText.emailBlueprintsSection.t6} className="px-2 py-0.5 text-[10px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Email Body */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>{legacyText.emailBlueprintsSection.t2}</span>
          </span>
          <pre className="p-4 sm:p-5 rounded-xl bg-slate-950 font-mono text-xs text-slate-200 border border-white/5 whitespace-pre-wrap leading-relaxed overflow-x-auto select-all">
            {currentTemplate.body}
          </pre>
        </div>

        {/* Attachments & Tips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
              <Paperclip className="w-3 h-3 text-teal-400" />
              <span>{legacyText.emailBlueprintsSection.t3}</span>
            </span>
            <ul className="space-y-1 text-xs text-slate-300">
              {currentTemplate.recommendedAttachments.map((att, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0" />
                  <span>{att}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block">
              <Send className="w-3 h-3 text-indigo-400" />
              <span>{legacyText.emailBlueprintsSection.t4}</span>
            </span>
            <ul className="space-y-1 text-xs text-slate-300">
              {currentTemplate.tips.map((tip, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailBlueprintsSection;
