// The one place that names the site. Change the name here and every page, title, logo label and share card follows.
// The site address comes from NEXT_PUBLIC_SITE_URL once a real domain is registered.
export const brand = {
  /** A coined, searchable word: "AI" + "Grad" (graduate study) + "Path" (the roadmap). */
  name: "AIGradPath",
  first: "AIGrad",
  second: "Path",
  /** Short line used under the logo and in share cards. */
  tagline: "Fully funded AI/ML & Computer Science research roadmap",
  /** Who the site is for. */
  audience: "Computer Science students in AI/ML research and engineering",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://scholarship-roadmap.vercel.app").replace(/\/$/, ""),
  locale: "en_US",
  /** Colours used by the logo, the icon and the share card. */
  colors: { blue: "#3a5fe0", gold: "#e0b53e", ink: "#0f1b3d", paper: "#f5f6fa" },
  /** Who writes to us. */
  contactEmail: "abdurrahmansoftw@gmail.com",
  /** Names people may also type when they look for the site. */
  alternateNames: ["AI Grad Path", "AIGradPath Roadmap"]
} as const;

export const brandTitle = (page?: string) => (page ? `${page} | ${brand.name}` : `${brand.name}: ${brand.tagline}`);
