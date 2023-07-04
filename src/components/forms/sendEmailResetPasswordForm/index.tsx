import { SubmitHandler, useForm } from "react-hook-form";
import { CssTextField } from "../muiStyle";
import { ContainerFormReset, FormReset } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext/UserContext";
import { StyledText } from "../../../styles/tipography";

import { zodResolver } from "@hookform/resolvers/zod";

import { StyledButton } from "../../../styles/buttons";
import { SyncLoader } from "react-spinners";
import { emailSchema, iEmailRequest } from "./schema";

export const SendEmailResetPasswordForm = () => {
  const { sendEmailResetPassword, spinner } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iEmailRequest>({
    mode: "onTouched",
    resolver: zodResolver(emailSchema),
  });
  const submit: SubmitHandler<iEmailRequest> = (data) => {
    sendEmailResetPassword(data.email);
  };

  return (
    <FormReset onSubmit={handleSubmit(submit)}>
      <ContainerFormReset>
        <StyledText tag="p" textStyle="heading-4-500" textColor="grey2">
          {`Insira o seu endereço de e-mail registrado abaixo e enviaremos um link para redefinir a sua senha`}
        </StyledText>
        <CssTextField
          required
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
        />
        <StyledButton
          type="submit"
          buttonStyle={"bg"}
          buttonColor={"brand1"}
          width="100%"
          disabled={!isValid}
        >
          {spinner ? <SyncLoader color="#FFFFFF" size={8} /> : "Enviar"}
        </StyledButton>
      </ContainerFormReset>
    </FormReset>
  );
};
