/** Shapes for the case study. Everything described with them is made up. */
export interface Fact { label: string; value: string }
export interface Row { cells: string[]; href?: string; /** Name of a sample PDF in public/case-study/documents, without the extension. */ file?: string }
export interface Table { head: string[]; rows: Row[]; note?: string }
export interface EmailMessage { subject: string; to: string; sent: string; body: string[]; notes: { part: string; why: string }[] }
export interface Step {
  /** Months before the start date, 14 down to 1. */
  monthsBefore: number;
  title: string;
  detail: string;
  /** What she had in her hands when the step was done. */
  output: string;
  guide: string;
  guideLabel: string;
}
export interface Phase { id: string; name: string; /** First and last month before the start, counting down. */ from: number; to: number; summary: string }
