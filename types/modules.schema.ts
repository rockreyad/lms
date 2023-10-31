import { z } from "zod";

export const moduleSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  order: z.number(),
  lessonsDuration: z.string(),
  projectsDuration: z.string(),
  quizzesDuration: z.string(),
  totalDuration: z.string(),
  courseId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Module = z.infer<typeof moduleSchema>;
