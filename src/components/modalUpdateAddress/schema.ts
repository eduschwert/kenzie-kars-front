import * as yup from "yup";
export const UpdateAddressSchema = yup.object().shape({
  cep: yup
    .string()
    .max(8, "CEP com max de 8 caracteres")
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    }),
  state: yup
    .string()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    })
    .notRequired(),
  city: yup.string().when("state", {
    is: (val: any) => val !== undefined,
    then: (schema) => schema.required("Cidade é obrigatória"),
    otherwise: (schema) => schema.notRequired(),
  }),
  street_name: yup
    .string()
    .max(60, "Rua com max de 60 caracteres")
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    }),
  street_number: yup
    .string()
    .max(10, "Número com max de 10 caracteres")
    .optional()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    }),
  complement: yup
    .string()
    .max(8, "Número com max de 8 caracteres")
    .optional()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    }),
});

export interface iSchema {
  cep?: string;
  street_name?: string;
  state?: string;
  city?: string;
  street_number?: string;
  complement?: string;
}

export interface iAddress {
  address: iSchema;
}
