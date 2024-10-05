import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { iUserRequestWithoutIsSeller, userRequestSchema } from "./schema";
import { useUser } from "../../hooks/useContexts";
import { removeMask, states } from "../../utils";
import { ClipLoader } from "react-spinners";
import { StyledDivForm, StyledFormContainer } from "./style";
import { Input } from "../input";
import { CssAutoComplete, CssTextField } from "../../styles/muiStyles";

export const FormRegister = () => {
  const [isSeller, setIsSeller] = useState(true);
  const { signUpUser, loading } = useUser();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<iUserRequestWithoutIsSeller>({
    resolver: zodResolver(userRequestSchema),
    mode: "onTouched",
  });

  const submit: SubmitHandler<iUserRequestWithoutIsSeller> = (data) => {
    const cleanedData = {
      ...data,
      cpf: removeMask(data.cpf),
      phone: removeMask(data.phone),
      cep: removeMask(data.cep),
      description: isSeller ? data.description : null,
    };

    const { cep, state, city, street, number, complement, ...userData } =
      cleanedData;

    const requestData = {
      ...userData,
      isSeller: isSeller,
      address: {
        cep,
        state,
        city,
        street,
        number,
        complement,
      },
    };

    signUpUser(requestData);
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit(submit)} noValidate>
      <StyledText tag="h1" $textStyle="heading-5-500" $textColor="grey1">
        Cadastro
      </StyledText>
      <StyledDivForm>
        <StyledText tag="p" $textStyle="body-2-500" $textColor="grey1">
          Infomações pessoais
        </StyledText>
        <Input
          id="name"
          label="Nome"
          type="text"
          placeHolder="Digitar nome"
          register={register("name")}
          error={errors.name}
          disabled={loading}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          placeHolder="Digitar email"
          register={register("email")}
          error={errors.email}
          disabled={loading}
        />
        <Controller
          name="cpf"
          control={control}
          render={({ field }) => (
            <Input
              field={field}
              id="cpf"
              label="CPF"
              type="text"
              placeHolder="Digitar CPF"
              error={errors.cpf}
              disabled={loading}
              mask="999.999.999-99"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              field={field}
              id="phone"
              label="Celular"
              type="tel"
              placeHolder="Digitar celular"
              error={errors.phone}
              disabled={loading}
              mask="(99) 99999-9999"
            />
          )}
        />
        <Controller
          name="birthdate"
          control={control}
          render={({ field }) => (
            <Input
              field={field}
              id="birthdate"
              label="Data de nascimento"
              placeHolder="Digitar data"
              type="text"
              error={errors.birthdate}
              disabled={loading}
              mask="99-99-9999"
            />
          )}
        />
        {isSeller && (
          <Input
            id="description"
            label="Descrição"
            placeHolder="Digitar descrição"
            register={register("description")}
            error={errors.description}
            disabled={loading}
            textarea={true}
          />
        )}
        <StyledText tag="p" $textStyle="body-2-500" $textColor="grey1">
          Infomações de endereço
        </StyledText>
        <Controller
          name="cep"
          control={control}
          render={({ field }) => (
            <Input
              field={field}
              id="cep"
              label="CEP"
              placeHolder="Digitar CEP"
              type="text"
              error={errors.cep}
              disabled={loading}
              mask="99999-999"
            />
          )}
        />
        <Controller
          control={control}
          name="state"
          render={({ field }) => (
            <CssAutoComplete
              {...field}
              value={field.value || null}
              onChange={(_, value) => {
                const newValue = value
                  ? typeof value === "string"
                    ? value
                    : null
                  : null;
                field.onChange(newValue);
              }}
              disablePortal
              options={states}
              renderInput={(params) => (
                <CssTextField
                  {...params}
                  label="Estado"
                  error={!!errors.state}
                  helperText={errors.state?.message}
                  type="text"
                />
              )}
            />
          )}
        />
        <Input
          id="city"
          label="Cidade"
          type="text"
          placeHolder="Digitar cidade"
          register={register("city")}
          error={errors.city}
          disabled={loading}
        />
        <Input
          id="street"
          label="Rua"
          type="text"
          placeHolder="Digitar rua"
          register={register("street")}
          error={errors.street}
          disabled={loading}
        />
        <div className="flexRow">
          <Input
            id="number"
            label="Número"
            type="number"
            placeHolder="Digitar número"
            register={register("number")}
            error={errors.number}
            disabled={loading}
          />
          <Input
            id="complement"
            label="Complemento"
            type="text"
            placeHolder="Digitar complemento"
            register={register("complement")}
            error={errors.complement}
            disabled={loading}
          />
        </div>
        <StyledText tag="p" $textStyle="body-2-500" $textColor="grey1">
          Tipo de conta
        </StyledText>
        <div className="flexRow">
          <StyledButton
            $buttonStyle="big"
            $buttonColor={!isSeller ? "brand1" : "outline2"}
            type="button"
            disabled={loading}
            onClick={() => setIsSeller(false)}
          >
            Comprador
          </StyledButton>
          <StyledButton
            $buttonStyle="big"
            $buttonColor={isSeller ? "brand1" : "outline2"}
            type="button"
            disabled={loading}
            onClick={() => setIsSeller(true)}
          >
            Anunciante
          </StyledButton>
        </div>
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
            "Finalizar cadastro"
          )}
        </StyledButton>
      </StyledDivForm>
    </StyledFormContainer>
  );
};
