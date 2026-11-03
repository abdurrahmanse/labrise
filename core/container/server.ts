import "server-only";
import { createRestContentRepository } from "@/infrastructure/content/restContentRepository";
import { mockContentRepository } from "@/infrastructure/content/mockContentRepository";
import { createRestScholarshipRepository } from "@/infrastructure/scholarships/restScholarshipRepository";
import { mockScholarshipRepository } from "@/infrastructure/scholarships/mockScholarshipRepository";
import { createScholarshipService } from "@/modules/scholarships/services/scholarshipService";
import { createContentService } from "@/modules/content/services/contentService";
import { serverAuthHeaders, serverDataProvider, serverEnv } from "../config/env.server";

/**
 * Composition root for the server: the one place that decides which implementation backs each contract.
 * Switching from bundled data to a backend means setting API_BASE_URL; nothing else imports a concrete repository.
 */
const contentRepository =
  serverDataProvider === "rest"
    ? createRestContentRepository({ baseUrl: serverEnv.apiBaseUrl, headers: serverAuthHeaders() })
    : mockContentRepository;

const scholarshipRepository =
  serverDataProvider === "rest"
    ? createRestScholarshipRepository({ baseUrl: serverEnv.apiBaseUrl, headers: serverAuthHeaders() })
    : mockScholarshipRepository;

export const container = {
  content: createContentService(contentRepository),
  scholarships: createScholarshipService(scholarshipRepository)
};
