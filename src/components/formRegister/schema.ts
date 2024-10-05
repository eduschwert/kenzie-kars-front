import { z } from "zod";

const transformDate = (value: string): string => {
  const [day, month, year] = value.split("-");
  if (value) {
    return `${year}-${month}-${day}`;
  }
  return "";
};

export const userRequestSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nome é obrigatório")
      .min(3, "Nome deve ter no mínimo 3 caracteres")
      .max(100, "Nome deve ter no máximo 100 caracteres"),
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
    birthdate: z.preprocess((val) => {
      if (typeof val === "string") {
        return transformDate(val);
      }
      return val;
    }, z.string({ required_error: "Data é obrigatória" }).min(1, "Data é obrigatória").date("Data inválida")),
    email: z
      .string()
      .min(1, "Email é obrigatório")
      .max(100, "Email deve ter no máximo 100 caracteres")
      .email("Email inválido"),
    cpf: z
      .string({ required_error: "CPF é obrigatório" })
      .min(1, "CPF é obrigatório")
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
    phone: z
      .string({ required_error: "Telefone é obrigatório" })
      .min(1, "Telefone é obrigatório")
      .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido"),
    description: z
      .string()
      .max(1000, "Descrição pode ter no máximo 1000 caracteres")
      .nullish(),
    cep: z
      .string({ required_error: "CEP é obrigatório" })
      .min(1, "CEP é obrigatório")
      .regex(/^\d{5}-\d{3}$/, "CEP inválido"),
    state: z.preprocess(
      (value) => (value === null ? "" : value),
      z
        .string({ required_error: "Estado é obrigatório" })
        .min(1, "Estado é obrigatório")
    ),
    city: z
      .string()
      .min(1, "Cidade é obrigatória")
      .max(50, "Cidade deve ter no máximo 50 caracteres"),
    street: z
      .string()
      .min(1, "Rua é obrigatória")
      .max(50, "Rua deve ter no máximo 50 caracteres"),
    number: z
      .string()
      .min(1, "Numéro do endereço é obrigatório")
      .max(10, "Número deve ter no máximo 10 caracteres"),
    complement: z
      .string()
      .max(50, "Complemento pode ter no máximo 50 caracteres")
      .nullish(),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: "As senhas não conferem",
    path: ["passwordConfirm"],
  });

export type iUserRequestWithoutIsSeller = z.infer<typeof userRequestSchema>;
