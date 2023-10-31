import { z } from "zod";
import { CategorySchema } from "./category.schema";

const courseSchema = z.object({
  id: z.string(),
  name: z.string(),
  featured: z.boolean(),
  image: z.string(),
  description: z.string(),
  duration: z.string(),
  category: CategorySchema.optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Course = z.infer<typeof courseSchema>;
