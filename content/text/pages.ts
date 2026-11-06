import type { LucideIcon } from "lucide-react";
import { Ban, BookOpen, Building2, Cookie, Database, FileWarning, Flag, Globe, Lock, Users } from "lucide-react";
import { brand } from "@/content/site/brand";

// Text for the static pages: About, Disclaimer, Privacy and Contact.
export interface TextSection {
  title: string;
  Icon: LucideIcon;
  paragraphs: string[];
}

export interface StaticPageText {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  sections: TextSection[];
}

export const aboutText: StaticPageText = {
  title: `About ${brand.name}`,
  description: "What this site is, who it is for and how its directory is built.",
  eyebrow: "About",
  heading: "A free guide to funded engineering research abroad",
  lead: "A step-by-step roadmap and a directory of countries, research professors and funders for Master's and PhD applicants.",
  sections: [
    {
      title: "What it is",
      Icon: BookOpen,
      paragraphs: [
        `${brand.name} helps engineering students plan a fully funded research Master's or PhD abroad. It is built for research, in any engineering department: it explains each step, from choosing a research area to the visa, and lists the countries, universities, research professors and funding organisations connected to each route. Coursework-only degrees are not the focus.`
      ]
    },
    {
      title: "How the directory is built",
      Icon: Database,
      paragraphs: [
        "Entries are compiled from official university, agency and foundation pages. Professor email addresses are added only when an official page lists them.",
        "Each detail page shows when the data was last reviewed and links to the official source."
      ]
    },
    {
      title: "What it is not",
      Icon: Ban,
      paragraphs: ["It is not an admissions office, a scholarship provider or an agent. It never asks for money. Always apply through the official channel of the university or funder."]
    }
  ]
};

export const disclaimerText: StaticPageText = {
  title: "Disclaimer",
  description: "Information here is general guidance. Confirm deadlines, funding and eligibility on official sources.",
  eyebrow: "Disclaimer",
  heading: "Check the official source",
  lead: "Use this site to plan. Use the official page to decide.",
  sections: [
    {
      title: "General information only",
      Icon: FileWarning,
      paragraphs: ["Deadlines, stipends, fees, eligibility rules and open positions change every cycle. The figures and descriptions here are typical and may be out of date."]
    },
    {
      title: "People and affiliations",
      Icon: Users,
      paragraphs: ["Professors move, retire or change groups. A listing does not mean a professor is accepting students. Confirm the current position on the university page before you write."]
    },
    {
      title: "No affiliation",
      Icon: Building2,
      paragraphs: ["This site is independent. Listing an organisation does not mean it endorses the site, and the site has no power to grant admission or funding."]
    },
    {
      title: "Found a mistake?",
      Icon: Flag,
      paragraphs: ["Use the Report a correction link on any detail page, or the contact page. Corrections are checked against the official source before they are applied."]
    }
  ]
};

export const privacyText: StaticPageText = {
  title: "Privacy",
  description: "What this site stores in your browser and what it does not collect.",
  eyebrow: "Privacy",
  heading: "Your data stays in your browser",
  lead: "No account, no sign-up, no tracking cookies.",
  sections: [
    {
      title: "What is stored",
      Icon: Cookie,
      paragraphs: ["Your theme choice, guide checklists, saved professors, status and private notes are saved in your browser's local storage. They never leave your device and you can clear them in your browser settings."]
    },
    {
      title: "What is not collected",
      Icon: Lock,
      paragraphs: ["The site has no accounts and does not collect names, emails or documents. Email drafts are built in your browser and sent by your own email app."]
    },
    {
      title: "External links",
      Icon: Globe,
      paragraphs: ["Links to universities, funders and search engines open other websites, which have their own privacy rules."]
    }
  ]
};

export const directoryIndexText = {
  title: "Directory: countries, universities and professors",
  description: "Browse funded destinations, universities and professors with details for each.",
  eyebrow: "Directory",
  heading: "Where to apply, whom to contact",
  lead: "Confirm funding and deadlines on the official page.",
  prev: "Guides",
  next: "Problems",
  cards: {
    providers: (n: number) => ({ title: "Scholarship providers", meta: `${n} government and foundation funders, with requirements` }),
    scholarships: (n: number) => ({ title: "Scholarships", meta: `${n} programs` }),
    countries: (n: number) => ({ title: "Countries", meta: `${n} listed` }),
    universities: (n: number) => ({ title: "Universities", meta: `${n} listed` }),
    professors: (n: number) => ({ title: "Professors", meta: `${n} listed` }),
    labs: (n: number) => ({ title: "Labs & groups", meta: `${n} labs, institutes and communities` })
  },
  more: {
    title: "More resources",
    items: [
      { href: "/countries", title: "Country dossiers", meta: "20 detailed guides" },
      { href: "/scholarships", title: "Scholarship finder", meta: "Search workflow" },
      { href: "/professors", title: "Email templates", meta: "Cold email and checklist" },
      { href: "/documents", title: "Documents", meta: "Required papers" },
      { href: "/planner", title: "Application planner", meta: "Deadlines and timeline" },
      { href: "/glossary", title: "Glossary", meta: "SOP, LoR, RA and more" }
    ]
  }
} as const;
