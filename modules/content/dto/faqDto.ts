import type { z } from "zod";
import type { faqDtoSchema } from "../schemas/faqSchema";

export type FaqDto = z.infer<typeof faqDtoSchema>;
