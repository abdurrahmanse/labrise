import type { LucideIcon } from "lucide-react";
import { Award, ClipboardCheck, FileUser, FlaskConical, FolderOpen, Languages, Mail, PenLine, ScrollText, Users } from "lucide-react";

// Text, icons and guide links for the documents hub and its detail pages.
export const documentsHubText = {
  title: "Required documents for funded Master's and PhD applications",
  description: "Every document you may need, with a clear structure, common mistakes, official checks and a readiness checklist that saves in your browser.",
  eyebrow: "Documents",
  heading: "Your application documents",
  lead: "Ten documents, each with a structure to follow, mistakes to avoid and a checklist. Open one to get started.",
  filterLabel: "Filter by level",
  filterAll: "All documents",
  count: (n: number) => `${n} documents`,
  empty: "No document matches this filter.",
  open: "Open guide",
  sections: (n: number) => `${n} sections`,
  checks: (n: number) => `${n} checks`,
  progress: {
    title: "Your readiness",
    done: (done: number, total: number) => `${done} of ${total} checks done`,
    percent: (n: number) => `${n}%`,
    note: "Saved in this browser only.",
    reset: "Reset checklist"
  },
  how: {
    title: "How to use these guides",
    steps: [
      { title: "Pick a document", body: "Start with the CV and the statement of purpose. Every other document builds on them." },
      { title: "Follow the structure", body: "Each guide lists the sections and what to write in each one." },
      { title: "Check before you send", body: "Tick the checklist, then compare with the official call for your programme." }
    ]
  }
} as const;

export const documentDetailText = {
  eyebrow: (badge: string) => `Document · ${badge}`,
  back: "All documents",
  what: "What it is",
  why: "Why it matters",
  structure: "Recommended structure",
  mistakes: "Mistakes to avoid",
  checks: "Official checks",
  checklist: "Readiness checklist",
  progress: (done: number, total: number) => `${done} of ${total} done`,
  guide: "Read the full guide",
  others: "Other documents",
  level: "Level",
  notFound: "Document not found",
  metaTitle: (name: string) => `${name}: structure, mistakes and checklist`,
  step: (n: number) => `Section ${n}`
} as const;

export interface DocumentMeta {
  Icon: LucideIcon;
  /** Guide that goes deeper on the same topic. */
  guide?: string;
}

export const documentMeta: Record<string, DocumentMeta> = {
  "academic-cv": { Icon: FileUser, guide: "cv" },
  "statement-of-purpose": { Icon: PenLine, guide: "sop" },
  "motivation-letter": { Icon: Mail, guide: "sop" },
  "research-proposal": { Icon: FlaskConical, guide: "research-proposal" },
  "academic-transcripts": { Icon: ScrollText, guide: "grade-conversion" },
  "degree-certificates": { Icon: Award, guide: "document-attestation" },
  "recommendation-letters": { Icon: Users, guide: "reference-letter" },
  "language-proficiency": { Icon: Languages, guide: "ielts" },
  "standardized-tests-gre": { Icon: ClipboardCheck, guide: "english-and-gre" },
  "writing-samples-portfolio": { Icon: FolderOpen, guide: "publications" }
};
