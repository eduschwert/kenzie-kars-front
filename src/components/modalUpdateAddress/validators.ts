import { z } from "zod";

export const UpdateAddressSchemaZod = z.object({
  cep: z.preprocess((cep) => {
    if (!cep || typeof cep !== "string") return undefined;
    return cep === "" ? undefined : cep;
  }, z.string().max(8, { message: "CEP com max de 8 caracteres" }).optional()),

  state: z.preprocess((state) => {
    if (!state || typeof state !== "string") return undefined;
    return state === "" ? undefined : state;
  }, z.string().optional()),

  city: z.preprocess((city) => {
    if (!city || typeof city !== "string") return undefined;
    return city === "" ? undefined : city;
  }, z.string().optional()),

  street_name: z.preprocess((street_name) => {
    if (!street_name || typeof street_name !== "string") return undefined;
    return street_name === "" ? undefined : street_name;
  }, z.string().optional()),

  street_number: z.preprocess((street_number) => {
    if (!street_number || typeof street_number !== "string") return undefined;
    return street_number === "" ? undefined : street_number;
  }, z.string().max(10, { message: "Número com max de 10 caracteres" }).optional()),

  complement: z.preprocess((complement) => {
    if (!complement || typeof complement !== "string") return undefined;
    return complement === "" ? undefined : complement;
  }, z.string().max(8, { message: "Número com max de 8 caracteres" }).optional()),
});

export interface iSchema {
  cep: string;
  street_name: string;
  state: string;
  city: string;
  street_number: string;
  complement?: string | undefined;
}

export interface iAddress {
  address: iSchema;
}
