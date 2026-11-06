import type { StepGridItem } from "@/shared/components/StepGrid";

export const APPLY_STEPS: StepGridItem[] = [
  { label: "Read the program page" },
  { label: "Pick 2–3 professors", href: "/directory/professors" },
  { label: "Email them", href: "/guides/cold-email" },
  { label: "Prepare CV and SOP", href: "/guides/sop" },
  { label: "Apply before the deadline", href: "/guides/deadlines-timeline" }
];

export const EMAIL_STEPS: StepGridItem[] = [
  { label: "Read 2 recent papers" },
  { label: "Check the lab is hiring" },
  { label: "Write a short email", href: "/guides/cold-email" },
  { label: "Attach your CV", href: "/guides/cv" },
  { label: "Follow up once", href: "/guides/cold-email" }
];
