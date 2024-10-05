import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";

import { StyledText } from "../../styles/tipography";
import { iUserRequestWithoutIsSeller, userRequestSchema } from "./schema";
import { useModal, useUser } from "../../hooks/useContexts";
import { removeMask } from "../../utils";
import { StyledFormFlexCol } from "./style";
import { Modal } from "../modal";
import { Input } from "../input";
import { StyledButton } from "../../styles/buttons";

export const ModalEditUser = () => {
  const { updateUser, loading, user } = useUser();

  const { closeModal, setModalType } = useModal();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<iUserRequestWithoutIsSeller>({
    resolver: zodResolver(userRequestSchema),
    mode: "onTouched",
    defaultValues: {
      name: user?.name,
      email: user?.email,
      cpf: user?.cpf
        ? `${user.cpf.slice(0, 3)}.${user.cpf.slice(3, 6)}.${user.cpf.slice(
            6,
            9
          )}-${user.cpf.slice(9, 11)}`
        : "",
      phone: user?.phone
        ? `(${user.phone.slice(0, 2)}) ${user.phone.slice(
            2,
            7
          )}-${user.phone.slice(7, 11)}`
        : "",
      birthdate: user?.birthdate
        ? user.birthdate.split("-").reverse().join("-")
        : "",
      description: user?.description,
    },
  });

  const submit: SubmitHandler<iUserRequestWithoutIsSeller> = (data) => {
    const cleanedData = {
      ...data,
      cpf: removeMask(data.cpf),
      phone: removeMask(data.phone),
    };

    updateUser(cleanedData);
  };

  return (
    <Modal title="Editar Perfil">
      <StyledFormFlexCol onSubmit={handleSubmit(submit)} noValidate>
        <StyledText tag="p" $textStyle="body-2-500" $textColor="grey1">
          Infomações pessoais
        </StyledText>
        <Input
          id="name"
          label="Nome"
          type="text"
          register={register("name")}
          error={errors.name}
          disabled={loading}
        />
        <Input
          id="email"
          label="Email"
          type="email"
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
              id="phone"
              label="Celular"
              field={field}
              type="text"
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
              id="birthdate"
              label="Data de nascimento"
              field={field}
              type="text"
              error={errors.birthdate}
              disabled={loading}
              mask="99-99-9999"
            />
          )}
        />

        {user?.isSeller && (
          <Input
            id="description"
            label="Descrição"
            type="text"
            placeHolder="Digitar descrição"
            register={register("description")}
            error={errors.description}
            disabled={loading}
            textarea={true}
          />
        )}
        <div className="flexRow">
          <StyledButton
            onClick={closeModal}
            type="button"
            $buttonStyle="big"
            $buttonColor="negative"
          >
            Cancelar
          </StyledButton>
          <StyledButton
            onClick={() => {
              setModalType("deleteUser");
            }}
            type="button"
            $buttonStyle="big"
            $buttonColor="alert"
          >
            Excluir Perfil
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
