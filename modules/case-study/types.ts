/** Shapes for the case study. Everything described with them is made up. */
export interface Fact { label: string; value: string }
export interface Row { cells: string[]; href?: string }
export interface Table { head: string[]; rows: Row[]; note?: string }
export interface EmailMessage { subject: string; to: string; sent: string; body: string[]; notes: { part: string; why: string }[] }
export interface Step { when: string; title: string; detail: string; guide: string; guideLabel: string }
