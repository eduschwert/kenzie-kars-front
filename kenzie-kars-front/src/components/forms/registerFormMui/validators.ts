import { TypeOf, z } from "zod";

export const addressSchema = z.object({
  cep: z.string().nonempty("Cep é obrigatório"),
  street: z.string().nonempty("Rua é obrigatório"),
  streetNumber: z.string().nonempty("Número é obrigatório"),
  complement: z.string().optional(),
  state: z.string().nonempty("Estado é obrigatório"),
  city: z.string().nonempty("Cidade é obrigatório"),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Nome é obrigatório")
      .min(3, "Nome precisa ter no mínimo 3 caracteres"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Deve ser um e-mail válido"),
    cpf: z
      .string()
      .nonempty("CPF é obrigatório")
      .min(11, "Mínimo de 11 dígitos"),
    mobile: z.string().nonempty("Celular é obrigatório"),
    // .refine(validator.isMobilePhone),
    birthdate: z.string().nonempty("Nome é obrigatório"),
    description: z.string().nonempty("Nome é obrigatório"),
    address: addressSchema,
    isSeller: z.boolean().optional(),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(6, "Senha com 6 caracteres"),
    confirmPassword: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(6, "Senha com 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Senhas não conferem",
  });

export type RegisterData = z.infer<typeof registerSchema>;
