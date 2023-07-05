import { z } from "zod";
export const updateUserSchemaZod = z
  .object({
    email: z.preprocess((email) => {
      if (!email || typeof email !== "string") return undefined;
      return email === "" ? undefined : email;
    }, z.string().email().optional()),

    password: z.preprocess(
      (password) => {
        if (!password || typeof password !== "string") return undefined;
        return password === "" ? undefined : password;
      },
      z
        .string()
        .min(6, "A senha é obrigatória e precisa ter no mínimo 6 caracteres")
        .max(100, "A senha pode ter no máximo 100 caracteres")
        .regex(
          /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]*$/,
          "A senha deve conter pelo menos 1 letra e 1 número"
        )
        .optional()
    ),

    confirmPassword: z.preprocess(
      (confirmPassword) => {
        if (!confirmPassword || typeof confirmPassword !== "string")
          return undefined;
        return confirmPassword === "" ? undefined : confirmPassword;
      },
      z
        .string()
        .min(6, "A senha é obrigatória e precisa ter no mínimo 6 caracteres")
        .max(100, "A senha pode ter no máximo 100 caracteres")
        .regex(
          /^(?=.*[a-zA-Z])(?=.*\d)/,
          "A senha deve conter pelo menos 1 letra e 1 número"
        )
        .optional()
    ),

    name: z.preprocess((name) => {
      if (!name || typeof name !== "string") return undefined;
      return name === "" ? undefined : name;
    }, z.string().min(2, "Nome precisa ter mais de 2 caracteres").optional()),

    description: z.preprocess((description) => {
      if (!description || typeof description !== "string") return undefined;
      return description === "" ? undefined : description;
    }, z.string().min(2, "Descrição precisa ter mais de 2 caracteres").optional()),

    phone: z.preprocess((phone) => {
      if (!phone || typeof phone !== "string") return undefined;
      return phone === "" ? undefined : phone;
    }, z.string().min(10, "Telefone precisa ter mais de 10 caracteres").max(11, "Telefone precisa ter menos de 12 caracteres").optional()),

    birthdate: z.preprocess((birthdate) => {
      if (!birthdate || typeof birthdate !== "string") return undefined;
      return birthdate === "" ? undefined : birthdate;
    }, z.string().min(10, "Data de nascimento com 10 caracteres").optional()),

    cpf: z.preprocess((cpf) => {
      if (!cpf || typeof cpf !== "string") return undefined;
      return cpf === "" ? undefined : cpf;
    }, z.string().min(11, "CPF com 11 caracteres").max(11, "CPF com máximo 11 caracteres").optional()),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });

export interface iSchema {
  name: string | undefined;
  email: string | undefined;
  cpf: string | undefined;
  phone: string | undefined;
  birthdate: string | undefined;
  description: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}
