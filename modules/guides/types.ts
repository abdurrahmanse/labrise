export interface GuideSection {
  heading: string;
  /** Short intro line under the heading. */
  intro?: string;
  items: { title: string; detail: string }[];
}

export interface GuideDetail {
  id: string;
  summary: string;
  why: string;
  timeline: string;
  sections: GuideSection[];
  example?: { label: string; text: string };
  mistakes: string[];
  checklist: string[];
  links?: { label: string; href: string }[];
  related: string[];
}

