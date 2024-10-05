import { ClipLoader } from "react-spinners";

import { useModal, useUser } from "../../hooks/useContexts";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { StyledDivFlexEnd, StyledDivModalBody } from "./style";

export const ModalDeleteUser = () => {
  const { deleteUser, loading } = useUser();
  const { closeModal } = useModal();

  return (
    <Modal title="Excluir perfil">
      <StyledDivModalBody>
        <StyledText tag="h2" $textStyle="heading-7-500" $textColor="grey1">
          Tem certeza que deseja remover sua conta?
        </StyledText>
        <StyledText tag="p" $textStyle="body-1-400" $textColor="grey2">
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </StyledText>
        <StyledDivFlexEnd>
          <div>
            <StyledButton
              onClick={closeModal}
              type="button"
              $buttonStyle="big"
              $buttonColor="negative"
            >
              Cancelar
            </StyledButton>
            <StyledButton
              onClick={deleteUser}
              type="button"
              $buttonStyle="big"
              $buttonColor="alert"
              $minWidth="24rem"
            >
              {loading ? (
                <ClipLoader color="#F8F9FA" size={"3rem"} />
              ) : (
                "Sim, excluir minha conta"
              )}
            </StyledButton>
          </div>
        </StyledDivFlexEnd>
      </StyledDivModalBody>
    </Modal>
  );
};
