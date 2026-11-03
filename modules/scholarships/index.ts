/**
 * Public API of the scholarships module. Server-only reads live in "@/modules/scholarships/server".
 */
export type { Scholarship, ScholarshipLevel } from "./types/scholarship";
export type { ScholarshipFilters, ScholarshipSearchParams, ScholarshipSort } from "./types/search";
export { useScholarships } from "./hooks/useScholarships";
export { useInfiniteScholarships } from "./hooks/useInfiniteScholarships";
export { useScholarshipDetails } from "./hooks/useScholarshipDetails";
export { useFeaturedScholarships } from "./hooks/useFeaturedScholarships";
export { useScholarshipSearch } from "./hooks/useScholarshipSearch";
export { useScholarshipFilters } from "./hooks/useScholarshipFilters";
export { FinderStats } from "./components/FinderStats";
export { FinderProgressBadge } from "./components/FinderProgressBadge";
export { WorkflowStepper } from "./components/WorkflowStepper";
export { useFinderProgress } from "./store/useFinderProgress";
export { ScholarshipBrowse } from "./components/listing/ScholarshipBrowse";
