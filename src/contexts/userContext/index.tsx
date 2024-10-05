import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { api } from "../../services/api";
import {
  iUserProviderProps,
  iUserResponse,
  iUserLoginRequest,
  iUserLoginResponse,
  iUserRequest,
  iUserResponseWithoutAddress,
  iUserAddressRequest,
  iUserAddressResponse,
  iUserRequestUpdate,
  iUserUpdatePassword,
} from "./interfaces";
import { useModal } from "../../hooks/useContexts";

export const UserContext = createContext({} as iUserProviderProps);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<iUserResponse | null>(null);
  const [globalLoading, setGlobalLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const { closeModal } = useModal();

  const navigate = useNavigate();

  useEffect(() => {
    const autologin = async () => {
      const token = localStorage.getItem("@KenzieKars:token");
      if (!token) {
        setGlobalLoading(false);
        return;
      }
      try {
        const { data } = await api.get<iUserResponse>("users", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
      } catch (error) {
        console.error(error);
        localStorage.removeItem("@KenzieKars:token");
      } finally {
        setGlobalLoading(false);
      }
    };
    autologin();
  }, []);

  const signInUser = async (formData: iUserLoginRequest) => {
    try {
      setLoading(true);

      const response = await api.post<iUserLoginResponse>("login", formData);

      localStorage.setItem("@KenzieKars:token", response.data.accessToken);
      api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;

      const { data } = await api.get<iUserResponse>("/users");
      setUser(data);
      if (data.isSeller) {
        navigate("/profileview");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          if (error.response.status === 401) {
            toast.error(
              "Email ou senha incorretos. Por favor, verifique suas credenciais e tente novamente."
            );
          } else {
            toast.error(error.response?.data.message);
          }
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const signUpUser = async (formData: iUserRequest) => {
    try {
      setLoading(true);

      const { data } = await api.post<iUserResponse>("users", formData);

      const response = await api.post<iUserLoginResponse>("/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("@KenzieKars:token", response.data.accessToken);
      api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;

      setUser(data);
      if (data.isSeller) {
        navigate("/profileviewadmin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          if (error.response.status === 409) {
            toast.error("Email já está em uso.");
          } else {
            toast.error(error.response?.data.message);
          }
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (formData: iUserRequestUpdate) => {
    try {
      setLoading(true);

      const { data } = await api.patch<iUserResponseWithoutAddress>(
        "users",
        formData
      );

      setUser((prevUser) =>
        prevUser ? { ...data, address: prevUser.address } : null
      );
      closeModal();
      toast.success("Perfil atualizado com sucesso");
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          if (error.response.status === 409) {
            toast.error("Email já está em uso.");
          } else {
            toast.error(error.response?.data.message);
            closeModal();
            logoutUser();
          }
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const updateUserAddress = async (formData: iUserAddressRequest) => {
    try {
      setLoading(true);

      const { data } = await api.patch<iUserAddressResponse>(
        "users/address",
        formData
      );

      setUser((prevUser) => (prevUser ? { ...prevUser, address: data } : null));
      closeModal();
      toast.success("Endereço atualizado com sucesso");
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          toast.error(error.response?.data.message);
          closeModal();
          logoutUser();
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (formData: iUserUpdatePassword) => {
    try {
      setLoading(true);

      await api.patch("users/password", formData);
      closeModal();
      toast.success("Senha alterada com sucesso");
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          if (error.response.status === 401) {
            toast.error(
              "Senha incorreta, verifique sua senha e tente novamente."
            );
          } else {
            toast.error(error.response?.data.message);
            closeModal();
            logoutUser();
          }
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async () => {
    try {
      setLoading(true);

      await api.delete("users");

      toast.success("Usuário deletado com sucesso");

      logoutUser();
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

  const logoutUser = () => {
    localStorage.removeItem("@KenzieKars:token");
    api.defaults.headers.common.authorization = undefined;
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        globalLoading,
        loading,
        signInUser,
        signUpUser,
        updateUser,
        updateUserAddress,
        updatePassword,
        deleteUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
