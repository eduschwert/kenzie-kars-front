import { z } from "zod";

const passwordSchema = z
  .string()
  .min(1, "Senha é obrigatória")
  .min(6, "Senha deve ter no mínimo 6 caracteres")
  .max(100, "Senha deve ter no máximo 100 caracteres")
  .regex(
    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&* ]*$/,
    "Senha deve ter pelo menos uma letra e um número"
  );

export const passwordUpdateSchema = z
  .object({
    password: passwordSchema,
    newPassword: passwordSchema,
    newPasswordConfirm: passwordSchema,
  })
  .refine(
    ({ newPassword, newPasswordConfirm }) => newPassword === newPasswordConfirm,
    {
      message: "As senhas não conferem",
      path: ["newPasswordConfirm"],
    }
  );

export type iPasswordUpdate = z.infer<typeof passwordUpdateSchema>;
