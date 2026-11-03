import { createRestScholarshipRepository } from "@/infrastructure/scholarships/restScholarshipRepository";
import { createScholarshipService } from "@/modules/scholarships/services/scholarshipService";

/**
 * Composition root for the browser. The browser never holds the bundled data: it always calls the API,
 * which is either the site's own /api routes (mock mode) or the real backend (NEXT_PUBLIC_API_BASE_URL).
 */
export const clientContainer = {
  scholarships: createScholarshipService(createRestScholarshipRepository())
};
