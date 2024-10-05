import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

import { api } from "../../services/api";
import { iSellerProviderProps, iVehicleUpdate } from "./interfaces";
import {
  iPaginationResult,
  iVehicleResponseWithImages,
  iVehicleRequest,
} from "../../interfaces";
import { useModal, useUser } from "../../hooks/useContexts";

export const SellerContext = createContext({} as iSellerProviderProps);

export const SellerProvider = ({ children }: { children: React.ReactNode }) => {
  const [sellerVehicles, setSellerVehicles] = useState<iPaginationResult<
    iVehicleResponseWithImages[]
  > | null>(null);

  const [selectedVehicle, setSelectedVehicle] =
    useState<iVehicleResponseWithImages | null>(null);

  const { logoutUser } = useUser();
  const { closeModal } = useModal();

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const getAllSellerVehicles = async () => {
    try {
      setLoading(true);

      const { data } = await api.get<
        iPaginationResult<iVehicleResponseWithImages[]>
      >("sellers", { params: { page } });

      setSellerVehicles(data);
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          logoutUser();
          toast.error(error.response?.data.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const location = useLocation();

  useEffect(() => {
    getAllSellerVehicles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, location]);

  const createVehicle = async (formData: iVehicleRequest) => {
    try {
      setLoading(true);

      const { data } = await api.post<iVehicleResponseWithImages>(
        "sellers",
        formData
      );

      setSellerVehicles((prevSellerVehicles) =>
        prevSellerVehicles
          ? {
              ...prevSellerVehicles,
              data: [data, ...prevSellerVehicles.data],
              count: prevSellerVehicles.count + 1,
            }
          : null
      );
      toast.success("Anúncio criado com sucesso");
      closeModal();
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else {
          closeModal();
          logoutUser();
          toast.error(error.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const updateVehicle = async (formData: iVehicleUpdate, vehicleId: string) => {
    try {
      setLoading(true);

      const { data } = await api.patch<iVehicleResponseWithImages>(
        `sellers/${vehicleId}`,
        formData
      );

      setSellerVehicles((prevSellerVehicles) =>
        prevSellerVehicles
          ? {
              ...prevSellerVehicles,
              data: prevSellerVehicles.data.map((vehicle) =>
                vehicle.id === data.id ? data : vehicle
              ),
            }
          : null
      );
      toast.success("Anúncio atualizado com sucesso");
      closeModal();
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else {
          closeModal();
          logoutUser();
          toast.error(error.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteVehicle = async (vehicleId: string) => {
    try {
      setLoading(true);

      await api.delete(`sellers/${vehicleId}`);

      setSellerVehicles((prevSellerVehicles) =>
        prevSellerVehicles
          ? {
              ...prevSellerVehicles,
              data: prevSellerVehicles.data.filter(
                (vehicle) => vehicle.id !== vehicleId
              ),
              count: prevSellerVehicles.count - 1,
            }
          : null
      );
      toast.success("Anúncio deletado com sucesso");
      closeModal();
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          closeModal();
          logoutUser();
          toast.error(error.response?.data.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SellerContext.Provider
      value={{
        sellerVehicles,
        setSellerVehicles,
        selectedVehicle,
        setSelectedVehicle,
        page,
        setPage,
        loading,
        createVehicle,
        getAllSellerVehicles,
        updateVehicle,
        deleteVehicle,
      }}
    >
      {children}
    </SellerContext.Provider>
  );
};
