import { z } from "zod";

export const addressSchema = z.object({
  cep: z
    .string()
    .min(1, "CEP é obrigatório")
    .max(8, "CEP deve ter no máximo 8 caracteres"),
  state: z.string().min(1, "Estado é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  street_name: z
    .string()
    .min(1, "Rua é obrigatória")
    .max(60, "Rua deve ter no máximo 60 caracteres"),
  street_number: z
    .string()
    .min(1, "Número é obrigatório")
    .max(10, "Número deve ter no máximo 10 caracteres"),
  complement: z.string().max(8, "Complemento deve ter no máximo 8 caracteres"),
});

export const registerFormSchema = z
  .object({
    email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
    password: z
      .string()
      .min(6, "A senha é obrigatória e precisa ter no mínimo 6 caracteres")
      .max(100, "A senha pode ter no máximo 100 caracteres")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "A senha deve conter pelo menos 1 letra e 1 número"
      ),
    confirmPassword: z.string().nonempty("Campo obrigatório"),
    name: z.string().min(2, "Nome precisa ter mais de 2 caracteres"),
    description: z
      .string()
      .min(2, "Descrição precisa ter mais de 2 caracteres"),
    phone: z
      .string()
      .min(10, "Telefone precisa ter mais de 10 caracteres")
      .max(11, "Telefone precisa ter menos de 12 caracteres"),
    birthdate: z
      .string()
      .min(10, "Data de nascimento precisa ter 10 caracteres"),
    cpf: z.string().min(11, "CPF com máximo 11 caracteres"),
    address: addressSchema,
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

export type iUserRequest = z.infer<typeof registerFormSchema>;
export type iAddressRequest = z.infer<typeof addressSchema>;
