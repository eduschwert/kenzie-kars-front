import { z } from "zod";

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Senha é obrigatória")
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .max(100, "Senha deve ter no máximo 100 caracteres")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&* ]*$/,
        "Senha deve ter pelo menos uma letra e um número"
      ),
    passwordConfirm: z.string().min(1, "Confirmação de senha é obrigatória"),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: "As senhas não conferem",
    path: ["passwordConfirm"],
  });

export type iPassword = z.infer<typeof passwordSchema>;
