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

export const forgotPasswordSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email is required",
  }),
});

export const createAdminSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }),
  middleName: z.string({ required_error: "Middle name is required" }),
  lastName: z.string({ required_error: "Last name is required" }),
  contactNo: z.string({ required_error: "Contact no is required" }),
  address: z.string({ required_error: "Address is required" }),
  email: z.string().email().min(2, {
    message: "Email is required",
  }),
  gender: z.string({ required_error: "Gender is required" }),
  bloodGroup: z.string({ required_error: "Blood group is required" }),
  dateOfBirth: z.string({ required_error: "Date of birth is required" }),
});
