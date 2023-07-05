import { AiOutlineClose } from "react-icons/ai";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { useContext } from "react";
import {
  DivBtns,
  DivModalBody,
  DivTitle,
  SelectContainer,
  StyledTitle,
} from "./style";
import { StyledButton } from "../../styles/buttons";
import { Form } from "../forms/style";
import { CssTextField } from "../forms/muiStyle";
import { Autocomplete } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext/UserContext";
import { CitiesContext } from "../../contexts/citiesContext/CitiesContext";
import { SyncLoader } from "react-spinners";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateAddressSchemaZod, iAddress } from "./validators";

interface iProp {
  toggleModal: () => void;
}

export const ModalUpdateAddress = ({ toggleModal }: iProp) => {
  const { spinner, setSpinner, setErrorApi, setUser } = useContext(UserContext);

  const { stateList, cityList, getCitiesOfState } = useContext(CitiesContext);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<iAddress>({
    mode: "onTouched",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(UpdateAddressSchemaZod),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  async function submitForm(data: iAddress) {
    setSpinner(true);
    const token = localStorage.getItem("@KenzieKars:token");
    try {
      const response = await api.patch("users/address", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setSpinner(false);
      toggleModal();
      toast.success("Endereço atualizado com sucesso!");
      setUser(response.data);
    } catch (error) {
      setSpinner(false);
      console.error(error);
      setErrorApi(true);
      toast.error(`Ops! Algo deu errado.`);
    }
  }
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
        <Form onSubmit={handleSubmit(submitForm)} noValidate>
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

          <DivBtns>
            <div>
              {" "}
              <StyledButton
                onClick={() => toggleModal()}
                buttonStyle="sm-modal-edit"
                buttonColor="negative"
              >
                Cancelar
              </StyledButton>
              <StyledButton
                type="submit"
                buttonStyle="sm-modal-edit"
                buttonColor="brand1"
                disabled={spinner}
              >
                {spinner ? (
                  <SyncLoader color="#FFFFFF" size={8} />
                ) : (
                  "Salvar alterações"
                )}
              </StyledButton>
            </div>
          </DivBtns>
        </Form>
      </DivModalBody>
    </Modal>
  );
};
