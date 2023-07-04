import { z } from "zod";

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(6, "A senha é obrigatória e precisa ter no mínimo 6 caracteres")
      .max(100, "A senha pode ter no máximo 100 caracteres")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "A senha deve conter pelo menos 1 letra e 1 número"
      ),
    passwordConfirm: z.string().nonempty("Campo obrigatório"),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: "As senhas não conferem",
    path: ["passwordConfirm"],
  });

export type iPasswordRequest = z.infer<typeof passwordSchema>;
