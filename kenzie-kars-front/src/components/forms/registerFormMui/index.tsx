import { useContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  StyledRegForm,
  StyledRegisterTitle,
  SellerOrBuyerButtons,
  SubmitButton,
  SelectContainer,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { StyledButton } from "../../../styles/buttons";
import { UserContext } from "../../../contexts/userContext/UserContext";
import { StyledText } from "../../../styles/tipography";
import { CitiesContext } from "../../../contexts/citiesContext/CitiesContext";
import { CssTextField } from "../muiStyle";
import { Form } from "../style";
import { Autocomplete, TextField } from "@mui/material";
import { registerFormSchema } from "./schema";
import { SyncLoader } from "react-spinners";
import { iUserRegisterInformation } from "../../../contexts/userContext/types";
import { iRegisterFormValues } from "./types";

export const RegisterFormMui = () => {
  const { spinner, setSpinner, errorApi, setErrorApi, registerUser } =
    useContext(UserContext);
  // const [loadingRegForm, setLoadingRegForm] = useState(false);

  const { stateList, cityList, getStates, getCitiesOfState } =
    useContext(CitiesContext);
  const [errorRegister, setErrorRegister] = useState(false);

  const [buyerActiveButton, setBuyerActiveButton] = useState<boolean>(true);
  const [sellerActiveButton, setSellerActiveButton] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<iRegisterFormValues>({
    mode: "onTouched",
    resolver: yupResolver(registerFormSchema),
  });

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    setErrorApi(false);
    setErrorRegister(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorRegister]);

  const selectSeller = () => {
    setBuyerActiveButton(false);
    setSellerActiveButton(true);
  };
  const selectBuyer = () => {
    setBuyerActiveButton(true);
    setSellerActiveButton(false);
  };

  const submitForm: SubmitHandler<iRegisterFormValues> = (
    formData: iRegisterFormValues
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...dataWithoutConfirmPassword } = formData;
    const data: iUserRegisterInformation = {
      ...dataWithoutConfirmPassword,
      is_seller: sellerActiveButton,
    };
    console.log("DATA", data);

    setSpinner(true);
    registerUser(data, reset);
  };
  useEffect(() => {
    getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log("NEW STATE LIST", stateList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledRegForm>
      <StyledRegisterTitle>
        <StyledText tag="h3" textStyle="heading-4-500">{`Cadastro`}</StyledText>
        <StyledText tag="p" textStyle="body-1-600">
          {`Informações pessoais`}
        </StyledText>
      </StyledRegisterTitle>

      <Form onSubmit={handleSubmit(submitForm)} noValidate>
        <CssTextField
          required
          label="Nome"
          variant="outlined"
          size="small"
          id="registerName"
          type="text"
          placeholder="Ex: Samuel Leão"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
        />

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
          helperText={errors.email && errors.email.message}
          onKeyUp={
            errorApi
              ? () => setErrorRegister(true)
              : () => setErrorRegister(false)
          }
        />
        {errorApi ? (
          <StyledText
            tag="p"
            textColor="negative"
            textStyle="body-2-500"
          >{`Email já existente`}</StyledText>
        ) : (
          <></>
        )}

        <CssTextField
          required
          label="CPF"
          variant="outlined"
          size="small"
          id="registerCPF"
          type="text"
          placeholder="000.000.000-00"
          {...register("cpf")}
          error={!!errors.cpf}
          helperText={errors.cpf && errors.cpf.message}
        />

        <CssTextField
          required
          label="Celular"
          variant="outlined"
          size="small"
          id="registerCelular"
          type="text"
          placeholder="(DDD)90000-0000"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone && errors.phone.message}
        />
        <CssTextField
          required
          label="Data de nascimento"
          variant="outlined"
          size="small"
          id="registerBirthdate"
          type="date"
          placeholder=""
          InputLabelProps={{ shrink: true }}
          {...register("birthdate")}
          error={!!errors.birthdate}
          helperText={errors.birthdate && errors.birthdate.message}
        />

        <CssTextField
          required
          label="Descrição"
          variant="outlined"
          size="small"
          id="registerDescription"
          type="text"
          placeholder=""
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description && errors.description.message}
        />

        <StyledText tag="p" textStyle="body-1-600">
          {`Informações de endereço`}
        </StyledText>

        <CssTextField
          required
          label="CEP"
          variant="outlined"
          size="small"
          id="registerCEP"
          type="text"
          placeholder="00000.000"
          {...register("address.cep")}
          error={!!errors.address?.cep}
          helperText={errors.address?.cep && errors.address.cep.message}
        />
        <SelectContainer>
          <Autocomplete
            disablePortal
            id={`combo-box-state`}
            options={stateList}
            size="small"
            sx={{ width: "33%" }}
            clearOnEscape={false}
            clearIcon={null}
            onChange={(event, value) => getCitiesOfState(event, value)}
            onBlur={() => trigger("address.state")}
            renderInput={(params) => (
              <CssTextField
                {...params}
                label={"Estado"}
                InputLabelProps={{
                  style: { fontSize: "12px", padding: "0.3rem 0" },
                }}
                {...register("address.state")}
                error={!!errors.address?.state}
                helperText={
                  errors.address?.state && errors.address.state.message
                }
              />
            )}
          />

          <Autocomplete
            disablePortal
            id={`combo-box-city`}
            options={cityList}
            size="small"
            sx={{ minWidth: "63%" }}
            onBlur={() => trigger("address.city")}
            renderInput={(params) => (
              <CssTextField
                {...params}
                label={"Cidade"}
                InputLabelProps={{
                  style: { fontSize: "12px", padding: "0.3rem 0" },
                }}
                {...register("address.city")}
                error={!!errors.address?.city}
                helperText={errors.address?.city && errors.address.city.message}
              />
            )}
          />
        </SelectContainer>

        <CssTextField
          required
          label="Rua"
          variant="outlined"
          size="small"
          id="registerRua"
          type="text"
          placeholder="Digite a rua..."
          {...register("address.street_name")}
          error={!!errors.address?.street_name}
          helperText={
            errors.address?.street_name && errors.address.street_name.message
          }
        />

        <CssTextField
          required
          label="Número"
          variant="outlined"
          size="small"
          id="registerNumero"
          type="text"
          placeholder="Digite o número"
          {...register("address.street_number")}
          error={!!errors.address?.street_number}
          helperText={
            errors.address?.street_number &&
            errors.address.street_number.message
          }
        />

        <CssTextField
          label="Complemento"
          variant="outlined"
          size="small"
          id="registerComplement"
          type="text"
          placeholder="Digite o complemento"
          {...register("address.complement")}
          error={!!errors.address?.complement}
          helperText={
            errors.address?.complement && errors.address.complement.message
          }
        />

        <StyledText tag="p" textStyle="body-1-600">
          {`Tipo de conta:`}
        </StyledText>

        <SellerOrBuyerButtons>
          <StyledButton
            type="button"
            buttonStyle="bg"
            buttonColor={buyerActiveButton ? "brand1" : "outline2"}
            width="50%"
            onClick={() => selectBuyer()}
          >
            {`Comprador`}
          </StyledButton>
          <StyledButton
            type="button"
            buttonStyle="bg"
            buttonColor={sellerActiveButton ? "brand1" : "outline2"}
            width="50%"
            onClick={() => selectSeller()}
          >
            {`Anunciante`}
          </StyledButton>
        </SellerOrBuyerButtons>

        <CssTextField
          required
          label="Senha"
          variant="outlined"
          size="small"
          id="registerPwd"
          type="password"
          placeholder="Digite a senha"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
        />

        <CssTextField
          required
          label="Confirmar senha"
          variant="outlined"
          size="small"
          id="registerConfirmPwd"
          type="password"
          placeholder="Confirme a senha"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword && errors.confirmPassword.message}
        />

        <SubmitButton>
          <StyledButton
            type="submit"
            buttonStyle="bg"
            buttonColor="brand1"
            width="100%"
            disabled={
              !!(
                errors.name ||
                errors.email ||
                errors.cpf ||
                errors.phone ||
                errors.birthdate ||
                errors.description ||
                errors.address?.cep ||
                errors.address?.state ||
                errors.address?.city ||
                errors.address?.street_name ||
                errors.address?.street_number ||
                errors.address?.complement ||
                errors.password ||
                errors.confirmPassword
              )
            }
          >
            {spinner ? (
              <SyncLoader color="#FFFFFF" size={8} />
            ) : (
              "Finalizar cadastro"
            )}
          </StyledButton>
        </SubmitButton>
      </Form>
    </StyledRegForm>
  );
};
