import { brand } from "@/content/site/brand";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, Mail, Search, ShieldCheck, Terminal, Users } from "lucide-react";

// Header text for the three long guide pages: documents, professors and scholarships.
export interface HubText {
  Icon: LucideIcon;
  phase: string;
  tagline: string;
  title: string;
  intro: string;
  points: { Icon: LucideIcon; label: string }[];
}

export const professorsHub: HubText = {
  Icon: Users,
  phase: "Phase 05 Protocol",
  tagline: "Supervisor Outreach & Email Generator",
  title: "Find and Contact Professors",
  intro: "A comprehensive, ethical guide to academic supervisor outreach for research Master's and PhD candidates. Learn how to audit faculty research alignment, draft concise 180-word cold emails, follow up gracefully, and determine when contacting faculty is legally required.",
  points: [
    { Icon: Mail, label: "Tested Cold Email Blueprints" },
    { Icon: ShieldCheck, label: "Supervisor Necessity Rules" },
    { Icon: CheckCircle2, label: "Research-Fit Checklist" }
  ]
};

export const scholarshipsHub: HubText = {
  Icon: Search,
  phase: "Phase 04 Methodology",
  tagline: "Official Database Directory",
  title: "Find Scholarships and Universities",
  intro: "A comprehensive, 11-step discovery workflow to locate legitimate, accredited university departments, government bilateral awards, and funded doctoral research positions without falling into commercial aggregator traps.",
  points: [
    { Icon: Terminal, label: "Copyable Boolean Search Formulas" },
    { Icon: ShieldCheck, label: "Verified Government Portals" },
    { Icon: CheckCircle2, label: "Anti-Fraud Detection Rules" }
  ]
};

export const ogText = {
  eyebrow: "FULLY FUNDED CS MASTER'S & PHD",
  title: brand.name,
  subtitle: "Countries, CS professors, funders and a step-by-step roadmap"
} as const;
