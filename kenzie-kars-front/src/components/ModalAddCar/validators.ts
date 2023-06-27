import { z } from "zod";

export const vehicleSchema = z.object({
  brand: z.preprocess((brand) => {
    if (!brand || typeof brand !== "string") return "";
    return brand;
  }, z.string().nonempty("A marca é obrigatória")),
  model: z.preprocess((model) => {
    if (!model || typeof model !== "string") return "";
    return model;
  }, z.string().nonempty("O modelo é obrigatório")),
  mileage: z.string().nonempty("A quilometragem é obrigatória"),
  color: z.string().nonempty("A cor é obrigatória"),
  price: z.string().nonempty("O preço é obrigatório"),
  description: z.string().nonempty("A descrição é obrigatória"),
  cover_image: z.string().nonempty("A imagem de capa é obrigatória"),
  image1: z.preprocess((image1) => {
    if (!image1 || typeof image1 !== "string") return undefined;
    return image1 === "" ? undefined : image1;
  }, z.string().optional()),
  image2: z.preprocess((image2) => {
    if (!image2 || typeof image2 !== "string") return undefined;
    return image2 === "" ? undefined : image2;
  }, z.string().optional()),
  image3: z.preprocess((image2) => {
    if (!image2 || typeof image2 !== "string") return undefined;
    return image2 === "" ? undefined : image2;
  }, z.string().optional()),
  image4: z.preprocess((image2) => {
    if (!image2 || typeof image2 !== "string") return undefined;
    return image2 === "" ? undefined : image2;
  }, z.string().optional()),
  image5: z.preprocess((image2) => {
    if (!image2 || typeof image2 !== "string") return undefined;
    return image2 === "" ? undefined : image2;
  }, z.string().optional()),
  image6: z.preprocess((image2) => {
    if (!image2 || typeof image2 !== "string") return undefined;
    return image2 === "" ? undefined : image2;
  }, z.string().optional()),
});
