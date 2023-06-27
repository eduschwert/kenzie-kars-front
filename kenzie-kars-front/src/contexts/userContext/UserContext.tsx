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

export const UserContext = createContext({} as iUserProviderProps);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUserResponse | null>(null);
  const [globalLoading, setGlobalLoading] = useState<boolean>(true);
  const [spinner, setSpinner] = useState<boolean>(false);
  const [errorApi, setErrorApi] = useState<boolean>(false);
  const [newInputToken, setNewInputToken] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(true);

  const navigate = useNavigate();

  const autologin = async () => {
    const token = localStorage.getItem("@KenzieKars:token");
    if (!token) {
      setGlobalLoading(false);
      return;
    }

    try {
      const { data } = await api.get("users", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      if ("is_seller" in data && data.is_seller) {
        navigate("/profileviewadmin");
      } else {
        navigate("/");
      }
    } catch (error) {
      localStorage.clear();
      setUser(null);
      navigate("/");
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  useEffect(() => {
    autologin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setUser(null);
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
        globalLoading,
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
