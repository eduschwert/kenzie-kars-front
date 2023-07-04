import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
});

export type iEmailRequest = z.infer<typeof emailSchema>;
