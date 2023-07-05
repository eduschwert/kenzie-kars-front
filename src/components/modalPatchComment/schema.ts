import * as yup from "yup";
export const commentSchema = yup.object().shape({
  content: yup
    .string()
    .min(4, "Mínimo de 4 caracteres")
    .max(2000, "Máximo de 2000 caracteres"),
});

export interface iComment {
  content: string | undefined;
}
