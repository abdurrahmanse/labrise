import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const fieldClass =
  "w-full border-2 border-white/30 bg-white/[0.05] px-4 py-3 font-sans text-base font-normal text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-indigo-400";
export const labelClass = "mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400";

interface ContactFieldProps {
  id: string;
  label: string;
  error?: string;
  /** Marks the field invalid without an error line, for callers that show their own message. */
  invalid?: boolean;
  /** Receives the id and the input class (red border included when there is an error). */
  children: (props: { id: string; className: string; invalid: boolean }) => ReactNode;
}

/** Label, input slot and error line shared by the contact form's text fields. */
export function ContactField({ id, label, error, invalid = !!error, children }: ContactFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>{label}</label>
      {children({ id, className: cn(fieldClass, invalid && "border-rose-400"), invalid })}
      {error && <p className="mt-1 text-sm text-rose-400">{error}</p>}
    </div>
  );
}
