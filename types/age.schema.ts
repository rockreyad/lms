import { z } from "zod";

const ageSchema = z.object({
  id: z.string(),
  age: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Age = z.infer<typeof ageSchema>;
