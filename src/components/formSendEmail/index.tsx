import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { StyledDivForm, StyledFormContainer } from "./style";
import { api } from "../../services/api";
import { iSendEmail, sendEmailSchema } from "./schema";
import { useNavigate } from "react-router-dom";
import { Input } from "../input";

export const FormSendEmail = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const sendEmailResetPassword = async (email: iSendEmail) => {
    try {
      setLoading(true);

      await api.post("users/resetPassword", email);
      toast.success("Email enviado com sucesso");

      navigate("/");
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          if (error.response.status === 404 || error.response.status === 400) {
            toast.error("Email não encontrado ou não existe.");
          } else {
            navigate("/");
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
  } = useForm<iSendEmail>({
    resolver: zodResolver(sendEmailSchema),
    mode: "onTouched",
  });

  const submit: SubmitHandler<iSendEmail> = (data) => {
    sendEmailResetPassword(data);
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit(submit)} noValidate>
      <StyledText tag="h1" $textStyle="heading-5-500" $textColor="grey1">
        Recuperação de senha
      </StyledText>
      <StyledText tag="h2" $textStyle="body-2-500" $textColor="grey1">
        Preencha seu email:
      </StyledText>
      <StyledDivForm>
        <Input
          id="email"
          label="Email"
          placeHolder="Digitar email"
          type="email"
          register={register("email")}
          error={errors.email}
          disabled={loading}
        />
        <StyledButton
          $buttonStyle="big"
          $buttonColor="brand1"
          disabled={loading}
        >
          {loading ? <ClipLoader color="#F8F9FA" size={"3rem"} /> : "Enviar"}
        </StyledButton>
      </StyledDivForm>
    </StyledFormContainer>
  );
};
