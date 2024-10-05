export const formatNumberBRNoPrefix = (value: number | undefined): string => {
  if (value === undefined || isNaN(value)) {
    return "";
  }
  return new Intl.NumberFormat("pt-BR").format(value);
};

export const formatNumberBRWithPrefix = (value: number | undefined): string => {
  if (value === undefined || isNaN(value)) {
    return "";
  }
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const removeMask = (value: string) => value.replace(/\D/g, "");

export const fuelOptions = ["flex", "híbrido", "elétrico"];

export const colors = [
  "Branco",
  "Preto",
  "Cinza",
  "Prata",
  "Vermelho",
  "Azul",
  "Verde",
  "Amarelo",
  "Laranja",
  "Roxo",
  "Marrom",
];

export const states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];
