# Scholarship Roadmap

A step-by-step guide for students who want a fully funded Master's or PhD abroad. It covers the roadmap, every document and test, and a directory of countries, universities, scholarships and professors.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
upda
| Command | Description |
| :--- | :--- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

---

## What is inside

| Area | Routes |
| :--- | :--- |
| Home | `/` |
| 6-step roadmap | `/steps` |
| Profile checklist | `/profile` |
| How to apply (university and scholarship routes) | `/apply`, `/apply/[track]` |
| Guides (27 topics, grouped) | `/guides`, `/guides/[id]` |
| Directory (card lists with search, filters and pagination) | `/directory`, `/directory/[type]`, `/directory/[type]/[slug]` where `type` is `countries`, `universities`, `providers`, `scholarships` or `professors` |
| Common problems | `/problems` |
| Older detailed pages | `/roadmap`, `/countries`, `/scholarships`, `/professors`, `/documents`, `/faqs` |
| JSON API | `/api/directory/[type]` |
| SEO | `/sitemap.xml`, `/robots.txt`, `/opengraph-image` |

The professors list is a card grid with filters (region, field, has email, saved only), sorting, pagination, a status tracker (To contact, Emailed, Replied, Not a fit), private notes and CSV export. Every list links to a detail page, and every detail page links onward (country to universities to professors, guide to next guide).

---

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4**, **shadcn/ui-style components** (`cva`, `cn`, Radix `Slot`)
- **TanStack Query**: directory lists render from bundled data first, then refresh from `/api/directory/[type]`
- **nuqs**: search, filters and page number live in the URL, so any list view can be shared
- **Zustand**: guide checklists and the professor tracker (save, status, notes), persisted in the browser
- **Zod**: validates the API type and payload
- **next-themes**: light (default) and dark theme with a toggle in the header
- **schema-dts**: typed JSON-LD (HowTo, BreadcrumbList, CollegeOrUniversity, Person, WebSite)
- **lucide-react** icons

---

## Folder structure

New code is a modular monolith: each feature owns its data, components, hooks and store.

```text
app/                     routes, API handler, sitemap, robots, OG image
modules/
  directory/             countries, universities, scholarships, professors
    data/  lib/  api/  hooks/  store/  components/ (cards/, lists/, professors/, detail/)
  guides/                27 guides: data/details/<id>.ts, components, store
  roadmap/               steps, profile checklist, common problems
  apply/                 the two application tracks
  home/                  hero and the two home sections
  seo/                   buildMetadata, JsonLd, schema builders
  theme/                 ThemeProvider, ThemeToggle
shared/                  PageShell, Block, Facts, Chips, StepList, providers, hooks
components/              older pages and the header/footer (not yet migrated)
data/                    older page data
lib/utils.ts             cn() helper
```

Each file does one small job. To add a guide, create `modules/guides/data/details/<id>.ts`, register it in `details/index.ts` and `data/topics.ts`, and add its id to `data/groups.ts`.

---

## Text and icons

All interface text lives in `data/text/`, not in components. Components only read it.

| File | Holds |
| :--- | :--- |
| `common.ts` | Brand, header/footer, buttons, search and data-notice text |
| `directory.ts` | Cards, list placeholders, toolbars, detail-page headings and hints |
| `site.ts` | Page titles, descriptions and navigation labels |
| `pages.ts`, `contact.ts`, `hubs.ts` | About, Disclaimer, Privacy, Contact (with the contact email and location) and the guide-page headers |
| `status.ts` | 404, error, loading and empty-result screens |
| `legacy.ts` | Text for the older country, roadmap and FAQ pages |
| `iconRules.ts` | Which icon goes with which heading or label (`IconFor` reads it) |

To reword something, edit the matching file. To give a new heading word its own icon, add a rule to `iconRules.ts`.

---

## Design system

Minimalism, brutalism and glassmorphism, with an academic palette and the **Rajdhani** font (unchanged).

- **Minimal:** quiet navy-tinted neutrals, one scholarly blue accent and a small gold highlight. Lines are kept to faint hairlines.
- **Brutalist:** square corners and hard, flat offset shadows.
- **Glass:** frosted translucent surfaces (`backdrop-blur`) over soft colour washes.
- **Type scale:** one body size for all paragraph and detail text, one label size, and separate card and page title sizes. They are set as CSS variables in `app/globals.css` (`--text-body`, `--text-label`, `--text-card-title`).
- **Theming:** the dark palette is the base. `.light` swaps the neutral scale and overlays so utilities flip without component changes.

---

## Connections

Country, university, professor and funder are linked. A country page leads to its universities, professors and funding organisations. A university page lists its professors and the funders connected to it. A funder page lists its requirements and the universities where it applies. The rules live in `modules/directory/data/connections.ts`.

---

## Data policy

- Coverage: 27 countries, about 300 universities, about 630 professors and about 90 funding organisations. Every country page lists its universities, professors and funders, and each one has its own detail page.
- New professor entries carry no email. An address is added only when it is copied from the person's official university page.
- Professor emails are included **only** when an official university or institute page (or its directory entry) lists them. Others are left empty and link to a search for the official page. Add one with `email: "..."` in `modules/directory/data/professors.ts`.
- People move. Professors who were retired, on leave or whose affiliation was unclear were removed, and `Richard Zemel` is listed at Columbia University.
- Deadlines, stipends, fees and scholarship terms are typical ranges and change every cycle. Each page tells the reader to confirm on the official source.
- Last email verification pass: November 2026.

---

## License

[MIT](LICENSE)
