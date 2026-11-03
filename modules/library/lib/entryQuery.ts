import { isApiError } from "@/shared/api/errors";

/** True when the entry no longer exists (a 404), as opposed to a failure worth retrying. */
export const isMissingEntry = (error: unknown) => isApiError(error) && error.status === 404;
