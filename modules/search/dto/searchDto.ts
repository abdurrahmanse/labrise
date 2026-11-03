import type { z } from "zod";
import type { searchResponseDtoSchema, searchResultDtoSchema } from "../schemas/searchSchema";

export type SearchResultDto = z.infer<typeof searchResultDtoSchema>;
export type SearchResponseDto = z.infer<typeof searchResponseDtoSchema>;
