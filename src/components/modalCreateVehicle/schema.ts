import { z } from "zod";

const imageSchema = z
  .union([
    z
      .string()
      .url("Link inválido")
      .max(
        600,
        "A URL da imagem é muito longa. Deve ter no máximo 600 caracteres."
      ),
    z.literal(""),
  ])
  .nullish();

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
    .string()
    .url("Link inválido")
    .max(
      600,
      "A URL da imagem é muito longa. Deve ter no máximo 600 caracteres."
    ),
  image1: imageSchema,
  image2: imageSchema,
  image3: imageSchema,
  image4: imageSchema,
  image5: imageSchema,
  image6: imageSchema,
});

export type iVehicleRequest = z.infer<typeof vehicleSchema>;
