export const libraryText = {
  title: "Saved and recently viewed",
  description: "Your saved universities, professors, funders and scholarships, and the pages you opened recently. Kept in this browser only.",
  eyebrow: "Saved",
  heading: "Your shortlist",
  lead: "Everything you saved or opened lately, in one place.",
  privacy: "Saved in this browser only. Nothing is sent anywhere.",
  tabs: { saved: "Saved", recent: "Recently viewed" },
  empty: {
    saved: { title: "Nothing saved yet", hint: "Press the bookmark on any university, professor, funder or scholarship to keep it here." },
    recent: { title: "Nothing viewed yet", hint: "Pages you open from the directory show up here." }
  },
  save: "Save",
  saved: "Saved",
  unsave: "Remove from saved",
  clear: "Clear all",
  count: (n: number) => `${n} items`,
  loading: "Loading…",
  failed: "Could not load this item.",
  retry: "Try again",
  retryAll: (n: number) => `Retry ${n} failed`,
  missing: "This entry is no longer in the directory.",
  open: "Open",
  kinds: { countries: "Country", universities: "University", professors: "Professor", scholarships: "Scholarship", providers: "Funder", labs: "Lab" }
} as const;

export const searchDialogText = {
  recentTitle: "Recent searches",
  clearRecent: "Clear",
  loadMore: "Show more",
  resultsFor: (total: number) => `${total} results`,
  searching: "Searching…",
  failed: "Search is not available right now.",
  retry: "Try again",
  saved: "Open your saved list"
} as const;
