import { z } from "zod";
import { contactTopics } from "@/data/text/contact";

export const MIN_MESSAGE = 20;

const topicValues = contactTopics.map((t) => t.value) as [string, ...string[]];

export const contactSchema = z.object({
  topic: z.enum(topicValues),
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  page: z.string().trim().max(200),
  message: z.string().trim().min(MIN_MESSAGE).max(4000)
});

export type ContactValues = z.infer<typeof contactSchema>;
export type ContactErrors = Partial<Record<keyof ContactValues, true>>;
