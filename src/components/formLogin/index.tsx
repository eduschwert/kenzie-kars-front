import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";

import { useUser } from "../../hooks/useContexts";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { iUserRequestLogin, userRequestLoginSchema } from "./schema";
import { StyledFormContainer } from "./style";
import { Link } from "react-router-dom";
import { Input } from "../input";

export const FormLogin = () => {
  const { signInUser, loading } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRequestLogin>({
    resolver: zodResolver(userRequestLoginSchema),
    mode: "onTouched",
  });

  const submit: SubmitHandler<iUserRequestLogin> = (data) => {
    signInUser(data);
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit(submit)} noValidate>
      <StyledText tag="h1" $textStyle="heading-5-500" $textColor="grey1">
        Login
      </StyledText>
      <div className="flexCol">
        <Input
          id="email"
          label="Email"
          placeHolder="Digitar email"
          type="email"
          register={register("email")}
          error={errors.email}
          disabled={loading}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeHolder="Digitar senha"
          register={register("password")}
          error={errors.password}
          disabled={loading}
        />
        <div className="flexEndPassword">
          <Link to="/resetPassword">Esqueci minha senha</Link>
        </div>
        <StyledButton
          $buttonStyle="big"
          $buttonColor="brand1"
          disabled={loading}
        >
          {loading ? <ClipLoader color="#F8F9FA" size={"3rem"} /> : "Entrar"}
        </StyledButton>
        <div className="center">
          <StyledText tag="span" $textStyle="body-2-400" $textColor="grey2">
            Ainda não possui conta?
          </StyledText>
        </div>
        <StyledLink to="/register" $buttonStyle="big" $buttonColor="outline1">
          Cadastrar
        </StyledLink>
      </div>
    </StyledFormContainer>
  );
};
