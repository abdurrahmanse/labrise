/**
 * Link looks, shared by every page. The palette is black and white, so hover never changes the text colour:
 * it is shown with a light tint (--hover-tint) and a firmer underline (--hover-line). See styles/hover.css.
 */

/** A link inside text: underlined so it reads as clickable; the underline firms up and a tint appears on hover. */
export const inlineLinkClass =
  "underline decoration-[var(--hover-fill)] decoration-1 underline-offset-4 transition-colors duration-150 hover:bg-[var(--hover-tint)] hover:decoration-[var(--hover-line)]";

/** A short bold action link such as "Open" or "Reset": it shows its underline only on hover. */
export const actionLinkClass =
  "font-bold underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:bg-[var(--hover-tint)] hover:decoration-[var(--hover-line)]";

/** A title that is a link: underlined, so it reads as clickable; on hover the underline firms up and a light tint appears. */
export const titleLinkClass =
  "underline decoration-[var(--hover-tint)] decoration-2 underline-offset-4 transition-colors duration-150 hover:bg-[var(--hover-tint)] hover:decoration-[var(--hover-line)] focus-visible:outline-2 focus-visible:outline-indigo-400";

/** The same look for a title inside a card that is a link: it reacts when the card is hovered. */
export const titleGroupClass =
  "underline decoration-[var(--hover-fill)] decoration-2 underline-offset-4 transition-colors duration-150 group-hover:bg-[var(--hover-tint)] group-hover:decoration-[var(--hover-line)]";
