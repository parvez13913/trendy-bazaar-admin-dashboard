import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string({
    message: "Name is required",
  }),
  price: z.number({
    message: "Price is required",
  }),
  description: z.string({
    message: "Description is required",
  }),
});
