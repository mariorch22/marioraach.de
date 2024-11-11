import * as z from "zod";

export const FormSchemaContactForm = z.object({
    username: z.string()
        .min(2, {
            message: "Bitte geben Sie einen Namen mit mindestens 2 Buchstaben ein.",
        })
        .max(20, {
            message: "Der Name darf maximal 20 Zeichen lang sein.",
        }),
    email: z.string()
        .email({
            message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        })
        .max(40, {
            message: "Die E-Mail-Adresse darf maximal 40 Zeichen lang sein.",
        }),
    company: z.string()
        .optional(),
    requirements: z.string()
        .optional(),
    message: z.string()
        .min(2, {
            message: "Bitte geben Sie eine Nachricht mit mindestens 2 Buchstaben ein.",
        })
        .max(400, {
            message: "Die Nachricht darf maximal 400 Zeichen lang sein.",
        }),
});
