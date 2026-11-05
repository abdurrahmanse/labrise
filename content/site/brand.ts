// The one place that names the site. Change the name here and every page, title, logo label and share card follows.
// Labrise is for engineering students (any department) who want a fully funded research Master's or PhD abroad.
// The site address comes from NEXT_PUBLIC_SITE_URL once a real domain is registered.
export const brand = {
  /** A short coined word: "lab" + "rise", a student rising through research. */
  name: "Labrise",
  first: "Lab",
  second: "rise",
  /** Short line used under the logo and in share cards. */
  tagline: "Funded research Master's & PhD roadmap for engineers",
  /** Who the site is for. */
  audience: "Engineering students applying for research Master's and PhD programmes",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://scholarship-roadmap.vercel.app").replace(/\/$/, ""),
  locale: "en_US",
  /** Colours used by the logo, the icon and the share card. */
  colors: { blue: "#3a5fe0", gold: "#e0b53e", ink: "#0f1b3d", paper: "#f5f6fa" },
  /** Who writes to us. */
  contactEmail: "abdurrahmansoftw@gmail.com",
  /** Names people may also type when they look for the site. */
  alternateNames: ["Lab rise", "Labrise Roadmap"]
} as const;

export const brandTitle = (page?: string) => (page ? `${page} | ${brand.name}` : `${brand.name}: ${brand.tagline}`);
