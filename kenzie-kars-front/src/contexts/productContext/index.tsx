import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iChildren, iDefaultErrorResponse } from "../../interfaces/global";
import mockedProducts from "./mockedDatabase";
import { iFilterConditions, iProductItem, iProductProviderValue } from "./types";

export const ProductContext = createContext({} as iProductProviderValue);

export const ProductProvider = ({ children }: iChildren) => {
  const [products, setProducts] = useState([] as iProductItem[]);
  const [filteredProducts, setFilteredProducts] = useState([] as iProductItem[]);
  const [filterConditions, setFilterConditions] = useState<iFilterConditions>({});
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoadingProducts(true);
        const data: iProductItem[] = mockedProducts;
        setProducts(data);
        setFilteredProducts(data);
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

  return (
    <ProductContext.Provider value={{ products, filteredProducts, setFilteredProducts, loadingProducts, filterConditions, setFilterConditions }}>
      {children}
    </ProductContext.Provider>
  );
};