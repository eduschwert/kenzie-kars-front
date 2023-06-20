import * as z from "zod";

export const UpdateAddressSchema = z.object({
  cep: z
    .string()
    .max(8, "CEP com max de 8 caracteres")
    .optional()
    .or(z.literal("")),
  state: z.string().optional().or(z.literal("")),
  city: z.string().optional().or(z.literal("")),
  street_name: z
    .string()
    .max(60, "Rua com max de 60 caracteres")
    .optional()
    .or(z.literal("")),
  street_number: z
    .string()
    .max(10, "Número com max de 10 caracteres")
    .optional()
    .or(z.literal("")),
  complement: z
    .string()
    .max(8, "Número com max de 8 caracteres")
    .optional()
    .or(z.literal("")),
});

export type UpdateAddressInfo = z.infer<typeof UpdateAddressSchema>;
