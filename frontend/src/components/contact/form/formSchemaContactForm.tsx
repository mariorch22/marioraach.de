import * as z from "zod"

export const FormSchemaContactForm = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    company: z.string().min(2, {
      message: "Company name must be at least 2 characters.",
    }),
    requirements: z.string().min(2, {
      message: "Requirements must be at least 2 characters.",
    }),
    message: z.string().min(2, {
      message: "Message must be at least 2 characters.",
    }),
  });
  