import { z } from "zod";

export const sendEmailSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
});

export type iSendEmail = z.infer<typeof sendEmailSchema>;
