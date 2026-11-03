const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;

/** How long each kind of data counts as fresh. The directory changes only when the site is redeployed. */
export const staleTimes = {
  directory: HOUR,
  content: HOUR,
  scholarships: 10 * MINUTE,
  entry: HOUR,
  search: 5 * MINUTE
} as const;

export const gcTimes = {
  default: 24 * HOUR
} as const;
