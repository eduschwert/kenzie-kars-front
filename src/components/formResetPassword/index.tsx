import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { StyledDivForm, StyledFormContainer } from "./style";
import { api } from "../../services/api";
import { iPassword, passwordSchema } from "./schema";
import { Input } from "../input";

export const FormResetPassword = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { token } = useParams();

  const resetPassword = async (password: iPassword) => {
    if (!token) {
      navigate("/");
    }
    try {
      setLoading(true);

      await api.post(`users/resetPassword/${token}`, password);
      toast.success("Senha alterada com sucesso");

      navigate("/login");
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          navigate("/");
          if (error.response.status === 404 || error.response.status === 400) {
            toast.error("Token inválido");
          } else {
            toast.error(error.response?.data.message);
          }
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPassword>({
    resolver: zodResolver(passwordSchema),
    mode: "onTouched",
  });

  const submit: SubmitHandler<iPassword> = (data) => {
    resetPassword(data);
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit(submit)} noValidate>
      <StyledText tag="h1" $textStyle="heading-5-500" $textColor="grey1">
        Recuperação de senha
      </StyledText>
      <StyledText tag="h2" $textStyle="body-2-500" $textColor="grey1">
        Preencha sua senha:
      </StyledText>
      <StyledDivForm>
        <Input
          id="password"
          label="Senha"
          type="password"
          placeHolder="Digitar senha"
          register={register("password")}
          error={errors.password}
          disabled={loading}
        />
        <Input
          id="passwordConfirm"
          label="Confirmar Senha"
          type="password"
          placeHolder="Digitar senha"
          register={register("passwordConfirm")}
          error={errors.passwordConfirm}
          disabled={loading}
        />
        <StyledButton
          $buttonStyle="big"
          $buttonColor="brand1"
          disabled={loading}
        >
          {loading ? (
            <ClipLoader color="#F8F9FA" size={"3rem"} />
          ) : (
            "Editar senha"
          )}
        </StyledButton>
      </StyledDivForm>
    </StyledFormContainer>
  );
};
