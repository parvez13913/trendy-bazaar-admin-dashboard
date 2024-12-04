import z from "zod";

export const loginSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email is required",
  }),
  password: z
    .string()
    .min(4, {
      message: "Password must be at lest 4 character.",
    })
    .max(30),
});
