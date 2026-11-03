import type { LucideIcon } from "lucide-react";
import {
  Award, BookOpen, Bookmark, Brain, CalendarClock, CircleHelp, Clock, ExternalLink, FileText, Globe, GraduationCap, Landmark,
  Layers, Lightbulb, ListChecks, Mail, MapPin, Medal, Send, Sparkles, StickyNote, TriangleAlert, Users, Wallet
} from "lucide-react";

// Which icon goes with which kind of heading or label. The first matching rule wins.
// Add a rule here to give a new word its own icon everywhere it appears.
export const iconRules: [pattern: RegExp, icon: LucideIcon][] = [
  [/mistake|avoid|scam|risk|problem|warning|caution/i, TriangleAlert],
  [/why/i, CircleHelp],
  [/when to|how long|timeline|deadline|window|date|schedule/i, CalendarClock],
  [/requirement|eligib|who can|criteria|checklist/i, ListChecks],
  [/document|paper|cv|sop|letter|draft|statement/i, FileText],
  [/email|contact|mail/i, Mail],
  [/scholarship|award|fellowship/i, Award],
  [/fee|cost|price|stipend|covers|you get|funding|funds|fund|money|salary/i, Wallet],
  [/professor|supervisor|people|referee|group/i, Users],
  [/universit|college|school|study|studying|academic/i, GraduationCap],
  [/provider|organisation|agency|foundation|awarded|government/i, Landmark],
  [/country|countries|region|host|based|where|location|destination/i, MapPin],
  [/official|site|website|page|link|source/i, ExternalLink],
  [/apply|submit|steps|how to|route|process/i, Send],
  [/programme|program|track/i, Layers],
  [/tip|advice|hint|note to/i, Lightbulb],
  [/skill|topic|field|research|area/i, Brain],
  [/read|guide|learn|next|resource/i, BookOpen],
  [/level|selection|rank|best/i, Medal],
  [/saved|status|tracker|outreach/i, Bookmark],
  [/note/i, StickyNote],
  [/world|global|international|language/i, Globe],
  [/time|month|year|week|day/i, Clock]
];

export const fallbackIcon: LucideIcon = Sparkles;
