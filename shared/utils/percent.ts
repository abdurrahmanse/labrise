/** `part` as a whole-number percentage of `total`; 0 when there is nothing to count. */
export const percentOf = (part: number, total: number) => (total > 0 ? Math.round((part / total) * 100) : 0);
