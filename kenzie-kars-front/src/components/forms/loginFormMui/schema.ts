import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup.string().required("Email é obrigatorio").email("Email inválido"),
  password: yup.string().required("Senha é obrigatória"),
});
