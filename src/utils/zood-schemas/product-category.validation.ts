import { z } from "zod";

export const ProductCategorySchema = z.object({
  name: z.string({
    message: "Name is required",
  }),
});
