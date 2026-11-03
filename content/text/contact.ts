import type { LucideIcon } from "lucide-react";
import { BadgePlus, Flag, Lightbulb, MessageCircleQuestion } from "lucide-react";

// Contact details and every word on the contact page and form.
export const contactInfo = {
  email: "abdurrahmansoftw@gmail.com",
  locality: "Dhaka",
  country: "Bangladesh",
  countryCode: "BD",
  latitude: 23.8103,
  longitude: 90.4125
} as const;

export interface ContactTopic {
  value: "correction" | "new-entry" | "feedback" | "question";
  label: string;
  hint: string;
  Icon: LucideIcon;
}

export const contactTopics: ContactTopic[] = [
  { value: "correction", label: "Report a correction", hint: "Something on a page is wrong or out of date", Icon: Flag },
  { value: "new-entry", label: "Suggest an entry", hint: "A university, professor or funder to add", Icon: BadgePlus },
  { value: "feedback", label: "Share feedback", hint: "An idea or something that confused you", Icon: Lightbulb },
  { value: "question", label: "Ask a question", hint: "About the site or how it works", Icon: MessageCircleQuestion }
];

export const contactPageText = {
  title: "Contact and corrections",
  description: "Write to the Scholarship Roadmap team in Dhaka, Bangladesh. Report a mistake, suggest a university, professor or funder, or ask a question.",
  eyebrow: "Contact",
  heading: "Let's keep the directory accurate",
  lead: "Found a mistake, know a funder we missed, or have a question? Write to us. Every correction is checked against the official source before it goes live.",
  form: {
    title: "Send a message",
    topic: "What is this about?",
    name: "Your name",
    namePlaceholder: "Full name",
    email: "Your email",
    emailPlaceholder: "you@example.com",
    page: "Page or entry (optional)",
    pagePlaceholder: "e.g. a university name or a page link",
    message: "Message",
    messagePlaceholder: "Tell us what is wrong and, if you can, link the official page that shows the right detail.",
    counter: (n: number, min: number) => `${n} characters, at least ${min}`,
    submit: "Open in my email app",
    note: "This opens your own email app with the message filled in. Nothing is stored on this site."
  },
  errors: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    message: (min: number) => `Please write at least ${min} characters.`
  },
  sent: {
    title: "Your email app should be open",
    body: "Press send there to deliver the message. If nothing opened, copy the message below and email it to us.",
    copy: "Copy message",
    again: "Write another message"
  },
  mail: {
    subject: (topic: string, page: string) => (page ? `${topic}: ${page}` : topic),
    from: (name: string, email: string) => `From: ${name} <${email}>`,
    page: (page: string) => `Page or entry: ${page}`
  },
  side: {
    email: { title: "Email", hint: "We read every message" },
    location: { title: "Based in", hint: "Dhaka, Bangladesh", mapLink: "View on map", coordinates: "23.81° N, 90.41° E" },
    checklist: {
      title: "To help us fix it faster",
      items: [
        "The page or name that is wrong, and what is wrong with it",
        "A link to the official page that shows the correct detail",
        "For a new entry: the name, country and the official page"
      ]
    },
    promise: {
      title: "How we handle corrections",
      body: "We compare your note with the official university, agency or foundation page. If it matches, we update the entry and the review date."
    }
  }
} as const;
