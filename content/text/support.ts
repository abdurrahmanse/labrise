import type { LucideIcon } from "lucide-react";
import { Compass, FileCheck2, Route } from "lucide-react";

// Every word on the support page. Written in the first person: the page is one person offering help.
// There are deliberately no prices, guarantees or testimonials here; add them only when they are true.

export interface SupportPlan {
  id: "guidance" | "review" | "full";
  title: string;
  tagline: string;
  audience: string;
  includes: string[];
  Icon: LucideIcon;
}

export const supportPlans: SupportPlan[] = [
  {
    id: "guidance",
    title: "Guidance",
    tagline: "Ask and plan",
    audience: "You are starting out, or stuck on a decision.",
    includes: [
      "Answers to your questions about funding, countries and programmes",
      "Help choosing where to apply and what to prepare first",
      "A clear step-by-step plan for your timeline"
    ],
    Icon: Compass
  },
  {
    id: "review",
    title: "Review",
    tagline: "Review and improve",
    audience: "You have drafts and want a second pair of eyes.",
    includes: [
      "Feedback on your CV, statement of purpose and research proposal",
      "Help writing and improving your emails to professors",
      "A final check of your application before you submit"
    ],
    Icon: FileCheck2
  },
  {
    id: "full",
    title: "Full support",
    tagline: "Done with you, start to finish",
    audience: "You want someone to take you through the whole process.",
    includes: [
      "A profile audit and a shortlist of programmes and funders",
      "Documents, professor outreach and applications prepared together",
      "Deadlines tracked and applications submitted on time"
    ],
    Icon: Route
  }
];

export const supportPageText = {
  title: "Support: one-to-one help with your scholarship application",
  description:
    "Get personal help with a fully funded Master's or PhD application: answers to your questions, a review of your documents, or full support from first plan to submission.",
  eyebrow: "Support",
  heading: "One-to-one help with your scholarship journey",
  lead: "The roadmap and every guide on this site are free. If you would rather work with a person, I can answer your questions, review your documents, or take you through the whole process.",
  plans: {
    title: "Choose how much help you need",
    cta: "Ask about this",
    forWho: "Good for"
  },
  process: {
    title: "How it works",
    steps: [
      { title: "Send a message", body: "Tell me your degree level, the countries you are considering and your deadline." },
      { title: "I reply", body: "I tell you what I can help with and what it involves, before you commit to anything." },
      { title: "We agree a plan", body: "You choose the level of help and we set a timeline that fits your deadlines." },
      { title: "We work together", body: "Step by step, until your applications are submitted." }
    ]
  },
  expectations: {
    title: "Before you reach out",
    yesTitle: "What you can expect",
    yes: [
      "A direct reply from me by email",
      "Honest advice, including when a programme is not a good fit",
      "Nothing submitted without your approval"
    ],
    noTitle: "What I will not do",
    no: [
      "Promise an admission, a scholarship or any other result",
      "Ask you to pay anyone for a \"guaranteed\" place",
      "Share your documents with anyone else"
    ]
  },
  contact: {
    title: "Not sure which one fits?",
    body: "Tell me where you are now and where you want to get to. I will point you to the right option, or to the free guides if that is all you need.",
    email: "Email me",
    form: "Use the contact form",
    free: "Prefer to start on your own?",
    freeLinks: [
      { label: "Follow the roadmap", href: "/steps" },
      { label: "Read the guides", href: "/guides" }
    ]
  },
  mail: {
    subject: (plan: string) => `Support request: ${plan}`,
    subjectGeneral: "Support request",
    body: (plan: string) =>
      [
        `Hello, I would like help with: ${plan}`,
        "",
        "Degree level (Master's or PhD):",
        "Countries I am considering:",
        "My field of study:",
        "My deadline:",
        "What I need help with:"
      ].join("\n")
  }
} as const;
