import { SubmitHandler, useForm } from "react-hook-form";
import { CssTextField } from "../muiStyle";
import { iEmailResetPassword } from "../registerFormMui/types";
import { ContainerFormReset, FormReset } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext/UserContext";
import { StyledButton } from "../../../styles/buttons";
import { SyncLoader } from "react-spinners";
import { StyledText } from "../../../styles/tipography";
import { iFormDataResetPassword } from "../../../contexts/userContext/types";

export const ResetPasswordMui = () => {
  const {
    tokenForResetPasswordUser,
    resetPasswordUser,
    newInputToken,
    showButton,
    spinner,
    setSpinner,
  } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: "onTouched",
  });
  const submitForm: SubmitHandler<iEmailResetPassword> = (
    data: iEmailResetPassword
  ) => {
    const { email } = data;
    setSpinner(true);
    tokenForResetPasswordUser(email);
  };

  const submitResetPassword = (data: iFormDataResetPassword) => {
    resetPasswordUser(data);
    setSpinner(true);
  };

  return (
    <FormReset onSubmit={handleSubmit(submitForm)}>
      <ContainerFormReset>
        <StyledText tag="p" textStyle="heading-4-500" textColor="grey2">
          {`Recuperação de senha`}
        </StyledText>
        <CssTextField
          required
          label="E-mail"
          variant="outlined"
          size="small"
          id="registerEmail"
          type="email"
          placeholder="ex: samuel@mail.com.br"
          {...register("email")}
          error={!!errors.email}
          // helperText={errors.email && errors.email.message}
        />

        {newInputToken ? (
          <div>
            <CssTextField
              required
              label="Token"
              variant="outlined"
              size="small"
              id="token"
              type="text"
              placeholder="ex: xxxx-xxxx-xxxx-xxxx"
              {...register("token")}
              error={!!errors.token}
              // helperText={errors.token && errors.token.message}
            />
            <CssTextField
              required
              label="Password"
              variant="outlined"
              size="small"
              id="password"
              type="password"
              {...register("password")}
              error={!!errors.password}
              // helperText={errors.password && errors.password.message}
            />
            <StyledButton
              type="submit"
              buttonStyle="sm"
              buttonColor="brand1"
              onClick={handleSubmit(submitResetPassword)}
            >
              {spinner ? (
                <SyncLoader color="#FFFFFF" size={8} />
              ) : (
                "Alterar Senha"
              )}
            </StyledButton>
          </div>
        ) : (
          false
        )}
        {showButton ? (
          <StyledButton type="submit" buttonStyle="sm" buttonColor="brand1">
            {spinner ? <SyncLoader color="#FFFFFF" size={6} /> : "Enviar Token"}
          </StyledButton>
        ) : (
          false
        )}
      </ContainerFormReset>
    </FormReset>
  );
};
