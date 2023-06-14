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
  const [user, setUser] = useState({} as iUserRegisterInformation);
  const [loadingProfileView, setLoadingProfileView] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const [errorApi, setErrorApi] = useState<boolean>(false);
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birthdate: "",
    description: "",
    address: {
      cep: "",
      state: "",
      city: "",
      street_name: "",
      street_number: "",
      complement: "",
    },
    is_seller: false,
    password: "",
  };

  useEffect(() => {
    const token = localStorage.getItem("@KenzieKars:token");

    async function loadUser() {
      if (!token) {
        setLoadingProfileView(false);
        return;
      } else {
        try {
          const { data } = await api.get("/users", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          setUser(data);
          navigate("/");
          // navigate("/profileview");
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

    // loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const signInUser = async (formData: iUserLoginInformation) => {
    try {
      setSpinner(true);
      const response = await api.post("/login", formData);
      toast.success("Usuário logado com sucesso");
      console.log("LOGIN RESPONSE", response);
      const { token } = response.data;
      window.localStorage.clear();
      window.localStorage.setItem("@KenzieKars:token", token);
      // setUser(userResponse);
      navigate("/");
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
    setUser(defaultValues);
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
