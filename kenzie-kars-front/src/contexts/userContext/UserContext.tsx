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
    const token = localStorage.getItem("@Kenziehub:token");
    const userId = localStorage.getItem("@Kenziehub:userid");
    async function loadUser() {
      if (!token) {
        console.log("NÃO TEM TOKEN");
        setLoadingProfileView(false);
        return;
      } else {
        try {
          setLoadingProfileView(true);
          const { data } = await api.get(`/users/${userId}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigate("/");
        } catch (error) {
          localStorage.clear();
          navigate("/");
          console.error(error);
        } finally {
          setLoadingProfileView(false);
        }
      }
    }

    loadUser();
  }, []);

  const signInUser = async (formData: iUserLoginInformation) => {
    try {
      setSpinner(true);
      const response = await api.post("/login", formData);
      toast.success("Usuário logado com sucesso");
      const { accessToken, user: userResponse } = response.data;
      window.localStorage.clear();
      window.localStorage.setItem("@KenzieKars:token", accessToken);
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
      setUser(userResponse);
      navigate("/profileview");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
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
