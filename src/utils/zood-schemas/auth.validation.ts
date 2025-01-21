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

export const updateProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters.",
    })
    .optional(),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .optional(),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .optional(),
  contactNo: z
    .string()
    .min(10, {
      message: "Please enter a valid contact number.",
    })
    .optional(),
  gender: z.enum(["Male", "Female", "Other"]).optional(),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  dateBirth: z
    .date({
      required_error: "Please select a date",
    })
    .optional(),
  address: z
    .string()
    .min(5, {
      message: "Address must be at least 5 characters.",
    })
    .optional(),
  profileImage: z
    .string()
    .min(5, {
      message: "Address must be at least 5 characters.",
    })
    .optional(),
});

export const resetPasswordSchema = z.object({
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
