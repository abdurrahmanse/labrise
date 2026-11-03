"use client";

import React from "react";
import {
  FileText,
  Compass,
  Mail,
  Microscope,
  GraduationCap,
  Award,
  Users,
  Globe2,
  Binary,
  BookOpen
} from "lucide-react";
import { documentsData } from "@/data/documentsData";

const DOC_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "academic-cv": FileText,
  "statement-of-purpose": Compass,
  "motivation-letter": Mail,
  "research-proposal": Microscope,
  "academic-transcripts": GraduationCap,
  "degree-certificates": Award,
  "recommendation-letters": Users,
  "language-proficiency": Globe2,
  "standardized-tests-gre": Binary,
  "writing-samples-portfolio": BookOpen,
};

export interface DocumentTabsNavProps {
  selectedDocumentId: string;
  onSelectDocument: (id: string) => void;
}

export function DocumentTabsNav({ selectedDocumentId, onSelectDocument }: DocumentTabsNavProps) {
  return (
    <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl sticky top-20 z-30 shadow-xl">
      {documentsData.map((doc) => {
        const IconComponent = DOC_ICON_MAP[doc.id] || FileText;
        const isSelected = selectedDocumentId === doc.id;

        return (
          <button
            key={doc.id}
            onClick={() => onSelectDocument(doc.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              isSelected
                ? "bg-indigo-400 text-black border-black shadow-[3px_3px_0_0_rgba(255,255,255,0.85)] font-bold"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <IconComponent className={`w-3.5 h-3.5 ${isSelected ? "text-black" : "text-indigo-400"}`} />
            <span>{doc.name.split("(")[0].trim()}</span>
          </button>
        );
      })}
    </div>
  );
}

export default DocumentTabsNav;
