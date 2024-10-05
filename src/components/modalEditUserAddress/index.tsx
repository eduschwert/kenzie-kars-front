import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";

import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { useModal, useUser } from "../../hooks/useContexts";
import { removeMask, states } from "../../utils";
import { Modal } from "../modal";
import { iUserAddressRequest } from "../../contexts/userContext/interfaces";
import { userAddressSchema } from "./schema";
import { StyledFormFlexCol } from "./style";
import { Input } from "../input";
import { CssAutoComplete, CssTextField } from "../../styles/muiStyles";

export const ModalEditUserAddress = () => {
  const { updateUserAddress, loading, user } = useUser();

  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<iUserAddressRequest>({
    resolver: zodResolver(userAddressSchema),
    mode: "onTouched",
    defaultValues: {
      cep: user?.address.cep
        ? `${user.address.cep.slice(0, 5)}-${user.address.cep.slice(5, 8)}`
        : "",
      state: user?.address.state,
      city: user?.address.city,
      street: user?.address.street,
      number: user?.address.number,
      complement: user?.address.complement,
    },
  });

  const submit: SubmitHandler<iUserAddressRequest> = (data) => {
    const cleanedData = {
      ...data,
      cep: removeMask(data.cep),
    };

    updateUserAddress(cleanedData);
  };

  return (
    <Modal title="Editar Perfil">
      <StyledFormFlexCol onSubmit={handleSubmit(submit)} noValidate>
        <StyledText tag="p" $textStyle="body-2-500" $textColor="grey1">
          Infomações de endereço
        </StyledText>
        <Controller
          name="cep"
          control={control}
          render={({ field }) => (
            <Input
              id="cep"
              label="CEP"
              type="text"
              field={field}
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
        <div className="flexRowEnd">
          <StyledButton
            onClick={closeModal}
            type="button"
            $buttonStyle="big"
            $buttonColor="negative"
          >
            Cancelar
          </StyledButton>
          <StyledButton
            $buttonStyle="big"
            $buttonColor="brand1"
            disabled={loading}
            $minWidth="19rem"
          >
            {loading ? (
              <ClipLoader color="#F8F9FA" size={"3rem"} />
            ) : (
              "Salvar alterações"
            )}
          </StyledButton>
        </div>
      </StyledFormFlexCol>
    </Modal>
  );
};
