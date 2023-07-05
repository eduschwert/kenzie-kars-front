import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { CssTextField } from "../forms/muiStyle";
import { useForm } from "react-hook-form";
import { DivBtns, DivTitle, Form, StyledRegForm, StyledTitle } from "./style";
import { StyledButton } from "../../styles/buttons";
import { AiOutlineClose } from "react-icons/ai";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext/UserContext";
import { SyncLoader } from "react-spinners";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchemaZod, iSchema } from "./validators";

interface iProp {
  toggleModal: () => void;
  setMenuType: (item: string) => void;
}

export const ModalEditUser = ({ toggleModal, setMenuType }: iProp) => {
  const [errorPatch, setErrorPatch] = useState(false);
  const { spinner, setSpinner, errorApi, setUser, setErrorApi } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSchema>({
    mode: "onTouched",
    resolver: zodResolver(updateUserSchemaZod),
  });

  useEffect(() => {
    setErrorApi(false);
    setErrorPatch(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorPatch]);

  async function submitForm(data: iSchema) {
    setSpinner(true);
    data.confirmPassword && delete data.confirmPassword;
    const token = localStorage.getItem("@KenzieKars:token");
    try {
      const response = await api.patch("users", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setSpinner(false);
      toggleModal();
      toast.success("Perfil atualizado com sucesso!");
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
      <StyledRegForm>
        <StyledTitle>
          <DivTitle>
            <StyledText
              tag="h3"
              textStyle="heading-6-500"
            >{`Editar perfil`}</StyledText>
            <button onClick={() => toggleModal()}>
              <AiOutlineClose size={22} color={"#0b0d0d"} />
            </button>
          </DivTitle>

          <StyledText tag="p" textStyle="heading-7-500">
            {`Informações pessoais`}
          </StyledText>
        </StyledTitle>

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
              errorApi ? () => setErrorPatch(true) : () => setErrorPatch(false)
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
            multiline
            rows={3}
            type="text"
            placeholder=""
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
          />

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
            helperText={
              errors.confirmPassword && errors.confirmPassword.message
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
                onClick={() => {
                  setMenuType("delete");
                }}
                buttonStyle="sm-modal-edit"
                buttonColor="alert"
              >
                Excluir perfil
              </StyledButton>
            </div>

            <StyledButton
              type="submit"
              buttonStyle="sm-modal"
              buttonColor="brand1"
              disabled={spinner}
            >
              {spinner ? (
                <SyncLoader color="#FFFFFF" size={8} />
              ) : (
                "Salvar alterações"
              )}
            </StyledButton>
          </DivBtns>
        </Form>
      </StyledRegForm>
    </Modal>
  );
};
