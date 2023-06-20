import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    }),
  password: yup
    .string()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    })
    .matches(/(?=.?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial"
    )
    .min(6, "Senha precisa ter mais de 6 caracteres")
    .notRequired(),
  confirmPassword: yup.string().when("password", {
    is: (val: any) => val !== undefined,
    then: (schema) =>
      schema
        .oneOf([yup.ref("password")], "Senha não confere")
        .required("Confirmação de senha é obrigatória"),
    otherwise: (schema) => schema.notRequired(),
  }),

  name: yup
    .string()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    })
    .min(2, "Nome precisa ter mais de 2 caracteres"),
  description: yup
    .string()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    })
    .min(2, "Descrição precisa ter mais de 2 caracteres"),
  phone: yup
    .string()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    })
    .min(10, "Telefone precisa ter mais de 10 caracteres")
    .max(11, "Telefone precisa ter menos de 12 caracteres"),
  birthdate: yup
    .string()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    })
    .min(10, "Data de nascimento com 10 caracteres"),
  cpf: yup
    .string()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    })
    .min(11, "CPF com 11 caracteres")
    .max(11, "CPF com máximo 11 caracteres"),
});

export interface iSchema {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  password?: string;
  confirmPassword?: string;
}

