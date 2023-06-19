import { useContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  StyledRegForm,
  StyledRegisterTitle,
  SubmitButton,
  StyledForgotPassword,
  StyledMessage,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { StyledButton, StyledLinkButton } from "../../../styles/buttons";
import { UserContext } from "../../../contexts/userContext/UserContext";
import { StyledText } from "../../../styles/tipography";
import { CssTextField } from "../muiStyle";
import { Form } from "../style";
import { SyncLoader } from "react-spinners";
import { iUserLoginFormValues } from "./types";
import { loginFormSchema } from "./schema";

export const LoginFormMui = () => {
  const { spinner, setSpinner, errorApi, setErrorApi, signInUser } =
    useContext(UserContext);

  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<iUserLoginFormValues>({
    mode: "onTouched",
    resolver: yupResolver(loginFormSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    setErrorApi(false);
    setErrorLogin(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorLogin]);

  const submitForm: SubmitHandler<iUserLoginFormValues> = (
    formData: iUserLoginFormValues
  ) => {
    console.log("DATA", formData);
    setSpinner(true);
    signInUser(formData);
  };

  return (
    <StyledRegForm>
      <StyledRegisterTitle>
        <StyledText tag="h3" textStyle="heading-5-500">{`Login`}</StyledText>
      </StyledRegisterTitle>

      <Form onSubmit={handleSubmit(submitForm)} noValidate>
        <CssTextField
          required
          label="E-mail"
          variant="outlined"
          size="small"
          id="registerEmail"
          type="email"
          placeholder="Digite seu email..."
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          onKeyUp={
            errorApi ? () => setErrorLogin(true) : () => setErrorLogin(false)
          }
        />

        <CssTextField
          required
          label="Senha"
          variant="outlined"
          size="small"
          id="registerPwd"
          type="password"
          placeholder="Digite sua senha..."
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
          onKeyUp={
            errorApi === true
              ? () => setErrorLogin(true)
              : () => setErrorLogin(false)
          }
        />

        <StyledForgotPassword>
          <StyledText tag="p" textStyle="body-2-500">
            {`Esqueci minha senha`}
          </StyledText>
        </StyledForgotPassword>

        <SubmitButton>
          <StyledButton
            type="submit"
            buttonStyle={"bg"}
            buttonColor={"brand1"}
            width="100%"
            disabled={!!(errors.email || errors.password)}
          >
            {spinner ? <SyncLoader color="#FFFFFF" size={8} /> : "Entrar"}
          </StyledButton>
        </SubmitButton>

        <StyledMessage>
          <StyledText tag="p" textStyle="body-2-500">
            {`Ainda não possui conta?`}
          </StyledText>
        </StyledMessage>

        <StyledLinkButton
          buttonStyle={"bg"}
          buttonColor={"outline2"}
          to={"/register"}
        >
          {`Cadastrar`}
        </StyledLinkButton>
      </Form>
    </StyledRegForm>
  );
};
