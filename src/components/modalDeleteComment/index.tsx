import { AiOutlineClose } from "react-icons/ai";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { DivBtns, DivModalBody, DivTitle, StyledTitle } from "./style";
import { StyledButton } from "../../styles/buttons";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { iDefaultErrorResponse } from "../../interfaces/global";
import { ProductContext } from "../../contexts/productContext";

interface iProp {
  toggleModal: () => void;
  id: string;
}

export function ModalDeleteComment({ toggleModal, id }: iProp) {
  const { getComments } = useContext(ProductContext);

  async function deleteComment() {
    const token = localStorage.getItem("@KenzieKars:token");
    try {
      await api.delete(`comments/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toggleModal();
      toast.success("Comentário excluido com sucesso!");
      getComments();
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado.`);
    }
  }

  return (
    <Modal toggleModal={toggleModal}>
      <StyledTitle>
        <DivTitle>
          <StyledText
            tag="h3"
            textStyle="heading-6-500"
          >{`Excluir comentário`}</StyledText>
          <button onClick={() => toggleModal()}>
            <AiOutlineClose size={22} color={"#0b0d0d"} />
          </button>
        </DivTitle>

        <StyledText tag="p" textStyle="heading-7-500">
          {`Tem certeza que deseja excluir seu comentário?`}
        </StyledText>
      </StyledTitle>
      <DivModalBody>
        {" "}
        <StyledText
          tag="p"
          textStyle="body-1-400"
        >{`Essa ação não pode ser desfeita. Isso excluirá permanentemente o comentário e removerá seus dados de nossos servidores.
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
              deleteComment();
            }}
            buttonStyle="sm-modal"
            buttonColor="alert"
          >
            Sim, excluir comentário
          </StyledButton>
        </DivBtns>
      </DivModalBody>
    </Modal>
  );
}
