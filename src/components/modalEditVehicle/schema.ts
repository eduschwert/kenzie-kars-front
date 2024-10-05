import { z } from "zod";

export const vehicleSchema = z.object({
  brand: z.preprocess(
    (value) => (value === null ? "" : value),
    z
      .string({ required_error: "Marca é obrigatória" })
      .min(1, "Marca é obrigatória")
  ),
  model: z.preprocess(
    (value) => (value === null ? "" : value),
    z
      .string({ required_error: "Modelo é obrigatório" })
      .min(1, "Modelo é obrigatório")
  ),
  year: z.string({ required_error: "Ano é obrigatório" }),
  fuel: z.string({ required_error: "Combustível é obrigatório" }),
  mileage: z
    .string({ required_error: "Quilometragem é obrigatória" })
    .min(1, "Quilometragem é obrigatória"),
  color: z.preprocess(
    (value) => (value === null ? "" : value),
    z
      .string({ required_error: "Cor é obrigatória" })
      .min(1, "Cor é obrigatória")
  ),
  fipePrice: z.string({ required_error: "Preço da tabela FIPE é obrigatório" }),
  price: z
    .string({ required_error: "Preço é obrigatório" })
    .min(1, "Preço é obrigatório"),
  description: z.string().max(2000).nullish(),
  coverImage: z
    .string({ required_error: "Imagem de capa é obrigatória" })
    .min(1, "Imagem de capa é obrigatória")
    .url("Link inválido"),
  image1: z.union([z.string().url("Link inválido"), z.literal("")]).nullish(),
  image2: z.union([z.string().url("Link inválido"), z.literal("")]).nullish(),
  image3: z.union([z.string().url("Link inválido"), z.literal("")]).nullish(),
  image4: z.union([z.string().url("Link inválido"), z.literal("")]).nullish(),
  image5: z.union([z.string().url("Link inválido"), z.literal("")]).nullish(),
  image6: z.union([z.string().url("Link inválido"), z.literal("")]).nullish(),
});

export type iVehicleRequest = z.infer<typeof vehicleSchema>;
