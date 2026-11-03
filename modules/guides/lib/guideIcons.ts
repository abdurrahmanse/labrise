import {
  Banknote, BookOpen, Briefcase, CalendarClock, ClipboardCheck, Compass, FileCheck, FileText, FlaskConical,
  GitBranch, GraduationCap, Handshake, Home, Languages, Mail, MessagesSquare, Newspaper, Plane, Scale, ScrollText,
  Search, ShieldAlert, Sigma, type LucideIcon
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "research-area": Compass,
  "master-vs-phd": Scale,
  "no-research-background": FlaskConical,
  "funding-types": Banknote,
  "deadlines-timeline": CalendarClock,
  cv: FileText,
  sop: ScrollText,
  "research-proposal": BookOpen,
  "reference-letter": Handshake,
  "proof-letters": FileCheck,
  "grade-conversion": Sigma,
  ielts: Languages,
  toefl: Languages,
  "english-and-gre": GraduationCap,
  "application-fee": Briefcase,
  "application-portals": ClipboardCheck,
  "cold-email": Mail,
  publications: Newspaper,
  "github-portfolio": GitBranch,
  "interview-prep": MessagesSquare,
  "offer-comparison": Search,
  "negotiating-and-declining": Handshake,
  "visa-interview": Plane,
  "arrival-checklist": Home,
  "scholarship-scams": ShieldAlert
};

export const guideIcon = (id: string): LucideIcon => ICONS[id] ?? BookOpen;
