import * as z from "zod";

export const CommentFormSchema = z.object({
    username: z.string()
        .min(2, {
            message: "Bitte geben Sie einen Namen mit mindestens 2 Buchstaben ein.",
        })
        .max(20, {
            message: "Der Name darf maximal 20 Zeichen lang sein.",
        }),
    comment: z.string()
        .min(2, {
            message: "Bitte geben Sie eine Nachricht mit mindestens 2 Buchstaben ein.",
        })
        .max(400, {
            message: "Die Nachricht darf maximal 400 Zeichen lang sein.",
        }),
});

