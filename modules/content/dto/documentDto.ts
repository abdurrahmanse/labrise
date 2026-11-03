import type { z } from "zod";
import type { documentDtoSchema } from "../schemas/documentSchema";

export type DocumentDto = z.infer<typeof documentDtoSchema>;
