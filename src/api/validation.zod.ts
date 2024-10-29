import { z } from 'zod';

export const FruitSchema = z.object({
  id: z.number(),
  name: z.string(),
  family: z.string(),
  order: z.string(),
  genus: z.string(),
  nutritions: z.object({
    calories: z.number(),
    fat: z.number(),
    sugar: z.number(),
    carbohydrates: z.number(),
    protein: z.number(),
  }),
});

export const FruitArraySchema = z.array(FruitSchema);

export type Fruit = z.infer<typeof FruitSchema>;