import { z } from "zod";

export const commentSchemaZod = z.object({
  content: z.preprocess((content) => {
    if (!content || typeof content !== "string") return undefined;
    return content === "" ? undefined : content;
  }, z.string().min(4, "Mínimo de 4 caracteres").max(2000, "Máximo de 2000 caracteres")),
});

export interface iCommentUpdate {
  content: string;
}
