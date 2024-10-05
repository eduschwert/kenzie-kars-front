import { z } from "zod";

export const userAddressSchema = z.object({
  cep: z
    .string()
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
});

export type iUserRequestAddress = z.infer<typeof userAddressSchema>;
