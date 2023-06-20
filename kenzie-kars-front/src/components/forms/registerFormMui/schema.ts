import * as yup from "yup";

const addressSchema = yup.object().shape({
  cep: yup
    .string()
    .required("CEP é obrigatório")
    .max(8, "CEP com max de 8 caracteres"),
  state: yup.string().required("Estado é obrigatório"),
  city: yup.string().required("Cidade é obrigatória"),
  street_name: yup
    .string()
    .required("Rua é obrigatória")
    .max(60, "Rua com max de 60 caracteres"),
  street_number: yup
    .string()
    .required("Número é obrigatório")
    .max(10, "Número com max de 10 caracteres"),
  complement: yup.string().max(8, "Número com max de 8 caracteres"),
});

export const registerFormSchema = yup.object().shape({
  email: yup.string().required("Email é obrigatorio").email("Email inválido"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial"
    )
    .min(6, "Senha precisa ter mais de 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(2, "Nome precisa ter mais de 2 caracteres "),
  description: yup
    .string()
    .required("Descrição é obrigatória")
    .min(2, "Descrição precisa ter mais de 2 caracteres "),
  phone: yup
    .string()
    .required("Contato é obrigatório")
    .min(10, "Telefone precisa ter mais de 10 caracteres ")
    .max(11, "Telefone precisa ter menos de 12 caracteres "),
  birthdate: yup
    .string()
    .required("Data de nascimento obrigatória")
    .min(10, "Data de nascimento com 10 caracteres "),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .min(11, "CPF com 11 caracteres ")
    .max(11, "CPF com 11 caracteres "),
  address: addressSchema.required(),
});
