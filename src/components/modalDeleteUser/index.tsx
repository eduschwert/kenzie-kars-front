import { AiOutlineClose } from "react-icons/ai";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { DivBtns, DivModalBody, DivTitle, StyledTitle } from "./style";
import { StyledButton } from "../../styles/buttons";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { iDefaultErrorResponse } from "../../interfaces/global";
import { useUser } from "../../hooks/useUser";

interface iProp {
  toggleModal: () => void;
}

export const ModalDeleteUser = ({ toggleModal }: iProp) => {
  const { logoutUser } = useUser();

  async function deleteUser() {
    const token = localStorage.getItem("@KenzieKars:token");
    try {
      await api.delete("users", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      logoutUser();
    } catch (error) {
      console.error(error);
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data.error}`);
    }
  }

  return (
    <Modal toggleModal={toggleModal}>
      <StyledTitle>
        <DivTitle>
          <StyledText
            tag="h3"
            textStyle="heading-6-500"
          >{`Excluir perfil`}</StyledText>
          <button onClick={() => toggleModal()}>
            <AiOutlineClose size={22} color={"#0b0d0d"} />
          </button>
        </DivTitle>

        <StyledText tag="p" textStyle="heading-7-500">
          {`Tem certeza que deseja excluir seu perfil?`}
        </StyledText>
      </StyledTitle>
      <DivModalBody>
        {" "}
        <StyledText
          tag="p"
          textStyle="body-1-400"
        >{`Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
        `}</StyledText>
        <DivBtns>
          <StyledButton
            onClick={() => toggleModal()}
            buttonStyle="sm-modal"
            buttonColor="negative"
          >
            Cancelar
          </StyledButton>
          <StyledButton
            onClick={() => {
              deleteUser();
            }}
            buttonStyle="sm-modal"
            buttonColor="alert"
          >
            Sim, excluir perfil
          </StyledButton>
        </DivBtns>
      </DivModalBody>
    </Modal>
  );
};
