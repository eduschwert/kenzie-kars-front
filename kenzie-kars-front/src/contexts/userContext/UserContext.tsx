import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iUserProviderProps,
  iUserInformation,
  iUserLoginInformation,
  iUserRegisterInformation,
  iDefaultErrorResponse,
} from "./types";
import { iChildren } from "../../interfaces/global";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { AiOutlineConsoleSql } from "react-icons/ai";

export const UserContext = createContext({} as iUserProviderProps);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUserRegisterInformation | null>(null);
  const [loadingProfileView, setLoadingProfileView] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const [errorApi, setErrorApi] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieKars:token");

    async function loadUser() {
      if (!token) {
        setLoadingProfileView(false);
        return;
      } else {
        try {
          const { data } = await api.get<iUserRegisterInformation>("/users", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          setUser(data);
          if (data.is_seller) {
            navigate("/profileview");
          } else {
            navigate("/");
          }
        } catch (error) {
          localStorage.clear();
          navigate("/");
          console.error(error);
          const currentError = error as AxiosError<iDefaultErrorResponse>;
          toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
        } finally {
          setLoadingProfileView(false);
        }
      }
    }

    loadUser();
  }, [navigate]);

  const signInUser = async (formData: iUserLoginInformation) => {
    try {
      setSpinner(true);
      const response = await api.post("/login", formData);
      toast.success("Usuário logado com sucesso");
      window.localStorage.clear();
      window.localStorage.setItem("@KenzieKars:token", response.data.token);
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

      const { data } = await api.get<iUserRegisterInformation>("/users");
      setUser(data);
      if (data.is_seller) {
        navigate("/profileview");
      } else {
        navigate("/");
      }
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data.error}`);
    } finally {
      setSpinner(false);
    }
  };

  async function registerUser(
    formData: iUserRegisterInformation,
    reset: () => void
  ) {
    try {
      console.log("REGISTER DATA", formData);
      const response = await api.post("users", formData);
      response.statusText === "Created" &&
        toast.success("Conta criada com sucesso");
      navigate("/login");
      setSpinner(true);
      reset();
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      setErrorApi(true);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
    } finally {
      setSpinner(false);
      reset();
    }
  }
  const logoutUser = () => {
    window.localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signInUser,
        loadingProfileView,
        registerUser,
        logoutUser,
        spinner,
        setSpinner,
        errorApi,
        setErrorApi,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
