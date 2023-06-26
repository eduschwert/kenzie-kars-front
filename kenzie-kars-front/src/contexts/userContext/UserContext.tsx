import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iUserProviderProps,
  iUserLoginInformation,
  iUserRegisterInformation,
  iDefaultErrorResponse,
  iUserResponse,
  iFormDataResetPassword,
} from "./types";
import { iChildren } from "../../interfaces/global";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
// import { AiOutlineConsoleSql } from "react-icons/ai";

export const UserContext = createContext({} as iUserProviderProps);

export const UserProvider = ({ children }: iChildren) => {
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
      id: "",
      createdAt: "",
    },
    is_seller: false,
    id: "",
    createdAt: "",
  };

  const [user, setUser] = useState({} as iUserResponse);
  const [loadingProfileView, setLoadingProfileView] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const [errorApi, setErrorApi] = useState<boolean>(false);
  const [newInputToken, setNewInputToken] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieKars:token");

    const autologin = async () => {
      if (!token) {
        setLoadingProfileView(false);
        return;
      } else {
        try {
          const { data } = await api.get("users", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(data);

          if (data.is_seller) {
            navigate("/profileviewadmin");
          } else {
            navigate("/");
          }
        } catch (error) {
          localStorage.clear();
          setUser(defaultValues);
          navigate("/");
          console.error(error);
        } finally {
          setLoadingProfileView(false);
        }
      }
    };

    autologin();
  }, []);

  const signInUser = async (formData: iUserLoginInformation) => {
    try {
      setSpinner(true);
      const response = await api.post("login", formData);
      toast.success("Usuário logado com sucesso");
      window.localStorage.clear();
      window.localStorage.setItem("@KenzieKars:token", response.data.token);
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

      const { data } = await api.get<iUserResponse>("/users");
      setUser(data);
      if (data.is_seller) {
        navigate("/profileviewadmin");
      } else {
        navigate("/");
      }

      // navigate("/");
    } catch (error) {
      error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado.`);
      setErrorApi(true);
    } finally {
      setSpinner(false);
    }
  };

  const registerUser = async (
    formData: iUserRegisterInformation,
    reset: () => void
  ) => {
    try {
      const response = await api.post("users", formData);
      response.statusText === "Created" &&
        toast.success("Conta criada com sucesso");
      navigate("/login");
      setSpinner(true);
      reset();
    } catch (error) {
      console.error(error);
      setErrorApi(true);
      toast.error(`Ops! Algo deu errado.`);
    } finally {
      setSpinner(false);
    }
  };
  const logoutUser = () => {
    window.localStorage.clear();
    setUser(defaultValues);
    navigate("/");
  };

  const tokenForResetPasswordUser = async (email: string) => {
    try {
      const response = await api.post("users/sendToken", { email });

      if (response.status == 200) {
        setNewInputToken(true);
        setSpinner(false);
        setShowButton(false);
        toast.success("Email enviado com sucesso");
      }
    } catch (error) {
      toast.error(`Ops! Algo deu errado`);
      setSpinner(false);
    }
  };

  const resetPasswordUser = async (formData: iFormDataResetPassword) => {
    try {
      const response = await api.post("users/resetPassword", formData);

      if (response.status == 200) {
        setSpinner(false);
        setNewInputToken(false);
        setShowButton(true);
        toast.success("Senha alterada com sucesso");

        navigate("/login");
      }
    } catch (error) {
      toast.error(`Senha não pode ser alterada`);
      setSpinner(false);
    }
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
        setUser,
        newInputToken,
        setNewInputToken,
        tokenForResetPasswordUser,
        showButton,
        setShowButton,
        resetPasswordUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
