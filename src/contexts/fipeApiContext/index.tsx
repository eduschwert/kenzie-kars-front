import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { iFipeApiProviderProps } from "./interfaces";
import { fipeApi } from "../../services/fipeApi";

export const FipeApiContext = createContext({} as iFipeApiProviderProps);

export const FipeApiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [brands, setBrands] = useState([] as Array<string>);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      try {
        const { data } = await fipeApi.get("/cars");
        const brands = Object.keys(data);
        setBrands(brands);
      } catch (error) {
        toast.error("Erro ao consultar as marcas");
        console.error("Error fetching car database", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  return (
    <FipeApiContext.Provider
      value={{
        brands,
        loading,
      }}
    >
      {children}
    </FipeApiContext.Provider>
  );
};
