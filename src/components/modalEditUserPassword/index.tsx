import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";

import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { StyledDivForm, StyledFormContainer } from "./style";
import { Input } from "../input";
import { Modal } from "../modal";
import { useUser } from "../../hooks/useContexts";
import { iPasswordUpdate, passwordUpdateSchema } from "./schema";

export const ModalEditUserPassword = () => {
  const { loading, updatePassword } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPasswordUpdate>({
    resolver: zodResolver(passwordUpdateSchema),
    mode: "onTouched",
  });

  const submit: SubmitHandler<iPasswordUpdate> = async (data) => {
    updatePassword(data);
  };

  return (
    <Modal title="Alterar senha">
      <StyledFormContainer onSubmit={handleSubmit(submit)} noValidate>
        <StyledText tag="h2" $textStyle="body-2-500" $textColor="grey1">
          Preencha sua senha antiga e confirme sua nova senha:
        </StyledText>
        <StyledDivForm>
          <Input
            id="password"
            label="Senha Antiga"
            type="password"
            placeHolder="Digitar sua senha anterior"
            register={register("password")}
            error={errors.password}
            disabled={loading}
          />
          <div className="border"></div>
          <StyledText tag="p" $textStyle="body-2-500" $textColor="grey1">
            Senha atual
          </StyledText>
          <Input
            id="newPassword"
            label="Nova senha"
            type="password"
            placeHolder="Digitar nova senha"
            register={register("newPassword")}
            error={errors.newPassword}
            disabled={loading}
          />
          <Input
            id="newPasswordConfirm"
            label="Confirmar nova senha"
            type="password"
            placeHolder="Confirmar nova senha"
            register={register("newPasswordConfirm")}
            error={errors.newPasswordConfirm}
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
              "Alterar senha"
            )}
          </StyledButton>
        </StyledDivForm>
      </StyledFormContainer>
    </Modal>
  );
};
