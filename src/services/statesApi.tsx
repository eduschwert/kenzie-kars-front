import axios from "axios";

export const statesAPI = axios.create({
  baseURL:
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
  timeout: 5000,
});
