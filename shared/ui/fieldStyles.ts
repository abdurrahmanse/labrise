/**
 * The one size for form fields: small. Every text input, select and textarea takes `fieldClass`;
 * every field caption takes `fieldLabelClass`. Buttons have a single size too (see Button).
 */
export const fieldClass =
  "w-full min-h-9 border-2 border-white/30 bg-white/[0.05] px-3 py-1.5 font-sans text-sm font-normal text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-indigo-400";

/** A field that sits inline with other controls, such as a filter select. It keeps its natural width. */
export const inlineFieldClass = fieldClass.replace("w-full ", "");

export const fieldLabelClass = "mb-1 block font-mono text-xs uppercase tracking-wider text-slate-400";
