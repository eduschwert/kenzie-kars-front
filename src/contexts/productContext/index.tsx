import axios, { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iChildren } from "../../interfaces/global";

import {
  iComment,
  iFilterConditions,
  iProductItem,
  iProductProviderValue,
} from "./types";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext({} as iProductProviderValue);

export const ProductProvider = ({ children }: iChildren) => {
  const [products, setProducts] = useState([] as iProductItem[]);
  const [totalPages, setTotalPages] = useState(0);

  const [vehiclesProfileViewAdmin, setVehiclesProfileViewAdmin] =
    useState<Array<iProductItem> | null>(null);

  const [filteredProducts, setFilteredProducts] = useState(
    [] as iProductItem[]
  );

  const [filterConditions, setFilterConditions] = useState<iFilterConditions>(
    {}
  );

  const [carSeller, setCarSeller] = useState<iProductItem | null>(null);

  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoadingProducts(true);

        const carList = await api.get("vehicles");
        setProducts(carList.data.data);
        setFilteredProducts(carList.data.data);
      } catch (error) {
        console.error(error);
        toast.error(`Ops! Products could not be uploaded`);
      } finally {
        setLoadingProducts(false);
      }
    };
    getProducts();
  }, []);

  const getProductsPagination = async (perPage: number, page: number) => {
    try {
      setLoadingProducts(true);
      const response = await api.get(
        `vehicles?perPage=${perPage}&page=${page}`
      );

      setFilteredProducts(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

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

  const [comments, setComments] = useState<iComment[]>([]);

  async function getComments() {
    try {
      if (!carSeller?.id) {
        navigate("/");
      } else {
        const response = await api.get(`comments/${carSeller?.id}`);
        setComments(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado ao obter os comentários.`);
    }
  }

  const getVehicleId = async (vehicleId: string) => {
    try {
      setLoadingProducts(true);
      const response = await api.get<iProductItem>(`vehicles/${vehicleId}`);
      setCarSeller(response.data);

      const responseComments = await api.get(`comments/${vehicleId}`);
      setComments(responseComments.data);
    } catch (error: unknown) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          if (status === 404 || status === 400) {
            toast.error("Anúncio não encontrado");
          } else if (axiosError.code === "ECONNABORTED") {
            toast.error("Erro de timeout. Tente novamente mais tarde.");
          }
        }
      }
      navigate("/");
    } finally {
      setLoadingProducts(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
        vehiclesProfileViewAdmin,
        setVehiclesProfileViewAdmin,
        loadingProducts,
        filterConditions,
        setFilterConditions,
        carSeller,
        setCarSeller,
        getProductsPagination,
        totalPages,
        getComments,
        setComments,
        getVehicleId,
        comments,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
