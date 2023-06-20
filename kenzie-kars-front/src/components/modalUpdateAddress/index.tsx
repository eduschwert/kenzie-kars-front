import { AiOutlineClose } from "react-icons/ai";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../Modal";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DivBtns,
  DivModalBody,
  DivTitle,
  SelectContainer,
  StyledTitle,
  SubmitButton,
} from "./style";
import { StyledButton } from "../../styles/buttons";
import { Form } from "../forms/style";
import { CssTextField } from "../forms/muiStyle";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { iUserAddressUpdate } from "../../contexts/userContext/types";
import { UserContext } from "../../contexts/userContext/UserContext";
import { UpdateAddressSchema, iAddress, iSchema } from "./schema";
import { CitiesContext } from "../../contexts/citiesContext/CitiesContext";
import { SelectComboBox } from "../selectComboBox";
import { SyncLoader } from "react-spinners";

interface iProp {
  toggleModal: () => void;
}

export const ModalUpdateAddress = ({ toggleModal }: iProp) => {
  const { spinner, setSpinner, errorApi, setErrorApi, registerUser } =
    useContext(UserContext);

  const { stateList, cityList, getStates, getCitiesOfState } =
    useContext(CitiesContext);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<iAddress>({
    mode: "onTouched",
    resolver: yupResolver(UpdateAddressSchema),
  });

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [isSubmitSuccessful, reset]);

  // useEffect(() => {
  //   setErrorApi(false);
  //   setErrorRegister(false);
  // }, [errorRegister]);

  // const submitForm: SubmitHandler<iRegisterFormValues> = (
  //   formData: iRegisterFormValues
  // ) => {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const { confirmPassword, ...dataWithoutConfirmPassword } = formData;
  //   const data: iUserRegisterInformation = {
  //     ...dataWithoutConfirmPassword,
  //     is_seller: sellerActiveButton,
  //   };
  //   console.log("DATA", data);

  //   setSpinner(true);
  //   registerUser(data, reset);
  // };
  // useEffect(() => {
  //   getStates();
  // }, []);
  return (
    <Modal toggleModal={toggleModal}>
      <StyledTitle>
        <DivTitle>
          <StyledText
            tag="h3"
            textStyle="heading-7-500"
          >{`Editar endereço`}</StyledText>
          <button onClick={() => toggleModal()}>
            <AiOutlineClose size={22} color={"#0b0d0d"} />
          </button>
        </DivTitle>

        <StyledText tag="p" textStyle="heading-2-500">
          {`Informações de endereço`}
        </StyledText>
      </StyledTitle>
      <DivModalBody>
        <Form
        // onSubmit={handleSubmit(submitForm)} noValidate
        >
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
                  helperText={
                    errors.address?.city && errors.address.city.message
                  }
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

          <SubmitButton>
            <StyledButton
              type="submit"
              buttonStyle="bg-full"
              buttonColor="brand1"
            >
              {spinner ? (
                <SyncLoader color="#FFFFFF" size={8} />
              ) : (
                "Finalizar cadastro"
              )}
            </StyledButton>
          </SubmitButton>
        </Form>
      </DivModalBody>
    </Modal>
  );
};
