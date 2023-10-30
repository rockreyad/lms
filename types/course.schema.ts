import { z } from "zod";

const courseSchema = z.object({
  id: z.string(),
  name: z.string(),
  featured: z.boolean(),
  image: z.string(),
  description: z.string(),
  duration: z.string(),
  categoryId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Course = z.infer<typeof courseSchema>;
