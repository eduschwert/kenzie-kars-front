import { z } from "zod";

const transformDate = (value: string): string => {
  const [day, month, year] = value.split("-");
  if (value) {
    return `${year}-${month}-${day}`;
  }
  return "";
};

export const userRequestSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  birthdate: z.preprocess((val) => {
    if (typeof val === "string") {
      return transformDate(val);
    }
    return val;
  }, z.string().min(1, "Data é obrigatória").date("Data inválida")),
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .max(100, "Email deve ter no máximo 100 caracteres")
    .email("Email inválido"),
  cpf: z
    .string()
    .min(1, "CPF é obrigatório")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido"),
  description: z
    .string()
    .max(1000, "Descrição pode ter no máximo 1000 caracteres")
    .nullish(),
});

export type iUserRequestWithoutIsSeller = z.infer<typeof userRequestSchema>;
