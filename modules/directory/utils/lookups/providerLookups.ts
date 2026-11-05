import { providers } from "../../data/providers";
import { providerSlug } from "../slugs";

export const findProvider = (slug: string) => providers.find((p) => providerSlug(p) === slug);

/** The organisation that runs a scholarship programme, if listed. */
export const providerOfScholarship = (scholarshipName: string) =>
  providers.find((p) => p.programs.includes(scholarshipName));
