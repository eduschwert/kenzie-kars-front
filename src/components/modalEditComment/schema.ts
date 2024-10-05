import { z } from "zod";

export const commentSchema = z.object({
  content: z
    .string()
    .min(1, "Descrição é obrigatória")
    .max(2000, "Descrição pode ter no máximo 2000 caracteres"),
});

export type iCommentUpdate = z.infer<typeof commentSchema>;
