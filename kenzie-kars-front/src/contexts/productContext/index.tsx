import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iChildren, iDefaultErrorResponse } from "../../interfaces/global";
import mockedProducts from "./mockedDatabase";

import {
  iFilterConditions,
  iProductItem,
  iProductProviderValue,
  iSeller,
} from "./types";
import { api } from "../../services/api";

export const ProductContext = createContext({} as iProductProviderValue);

export const ProductProvider = ({ children }: iChildren) => {
  const [products, setProducts] = useState([] as iProductItem[]);

  const [filteredProducts, setFilteredProducts] = useState(
    [] as iProductItem[]
  );

  const [filterConditions, setFilterConditions] = useState<iFilterConditions>(
    {}
  );

  const [carSeller, setCarSeller] = useState<iProductItem | null>(null);

  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoadingProducts(true);

        const carList = await api.get("vehicles");
        setProducts(carList.data.data);
        setFilteredProducts(carList.data.data);
      } catch (error) {
        console.error(error);
        const currentError = error as AxiosError<iDefaultErrorResponse>;
        toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
      } finally {
        setLoadingProducts(false);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getFilteredProducts = async () => {
      let getURL = "vehicles";
      filterConditions && (getURL = `${getURL}?`);

      filterConditions.brand &&
        (getURL = `${getURL}&brand=${filterConditions.brand}`);

      filterConditions.model &&
        (getURL = `${getURL}&model=${filterConditions.model}`);

      filterConditions.year &&
        (getURL = `${getURL}&year=${filterConditions.year}`);

      filterConditions.fuel &&
        (getURL = `${getURL}&fuel=${filterConditions.fuel}`);

      filterConditions.minMileage &&
        (getURL = `${getURL}&minMileage=${filterConditions.minMileage}`);

      filterConditions.maxMileage &&
        (getURL = `${getURL}&maxMileage=${filterConditions.maxMileage}`);

      filterConditions.minPrice &&
        (getURL = `${getURL}&minPrice=${filterConditions.minPrice}`);

      filterConditions.maxPrice &&
        (getURL = `${getURL}&maxPrice=${filterConditions.maxPrice}`);

      try {
        const response = await api.get(`${getURL}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@Token:EazyHome")}`,
          },
        });
        setFilteredProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getFilteredProducts();
  }, [filterConditions]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
        loadingProducts,
        filterConditions,
        setFilterConditions,
        carSeller,
        setCarSeller,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
