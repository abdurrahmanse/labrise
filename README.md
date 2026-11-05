# ResearchBound

A free roadmap to a fully funded **research** Master's or PhD abroad, for engineering students in any department.

---

## About

ResearchBound shows engineering students how to win a funded research place abroad, step by step. It brings the plan, the guides and a directory of research professors, universities and funders into one simple site. Research is the focus: research Master's and PhD programmes, in any engineering department.

## Mission

Make funded research study abroad clear and fair for every engineering student, whatever their background.

## Vision

A world where a good student never misses a funded research place because they did not know where to look or what to do next.

---

## Overview

| What | Where |
| :--- | :--- |
| 6-step roadmap | `/steps` |
| Profile checklist | `/profile` |
| How to apply | `/apply` |
| 27 guides (CV, SOP, IELTS, visa and more) | `/guides` |
| Countries, universities, research professors, funders, scholarships | `/directory` |
| Common problems and fixes | `/problems` |
| Contact and corrections | `/contact` |

**In numbers:** 45 countries, about 400 universities, about 1,170 professors, about 110 funders, 53 scholarships.

Every country links to its universities, professors and funders. Every entry has its own page.

## Who it is for

Engineering students, in any department, who want a funded research Master's or PhD abroad and need a clear path.

## Our promise

- **Real data only.** Entries come from official pages. Links are re-checked with `npm run verify:links`, and professors are checked against OpenAlex with `npm run verify:professors`.
- **Research only.** Funders limited to other fields (humanities, health, peace studies, regional studies) are left out. Entries that need a human look are marked on their page.
- **No made-up emails.** A professor's email is shown only if an official page lists it.
- **Always check the source.** Each page shows its review date and a link to the official site.
- **Free and private.** No account. Your notes stay in your browser.

## Contact

Found a mistake or want to suggest an entry? Use the contact page or write to abdurrahmansoftw@gmail.com.

Based in Dhaka, Bangladesh.

---

## Keeping the data honest

| Command | What it does |
| :--- | :--- |
| `npm run check:data` | Finds duplicates, bad links, unlinked professors and country mismatches |
| `npm run verify:links` | Visits every official link in the directory |
| `npm run verify:professors` | Compares each professor with OpenAlex (name, institution, country) |
| `npm run discover:professors -- --missing 2` | Finds engineering researchers for universities that have few professors |

OpenAlex allows about 1,000 calls a day without a key, so the last two work in batches.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). It runs on the bundled data, with no backend needed.

## Project structure

```
app/              Routes (pages, layouts, API routes)
modules/          Features: components, hooks, types, schemas, mappers, services per feature
shared/           Feature-agnostic UI, hooks, utils, API client, query setup
core/             Config, composition roots, site layout, providers
infrastructure/   Data sources: bundled data and REST
content/          Bundled content and UI copy
```

How the pieces connect, how to plug in a backend, and the rules the linter enforces are in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

Before pushing: `npx tsc --noEmit && npx eslint . && npm test && npm run build`.

## License

[MIT](LICENSE)
