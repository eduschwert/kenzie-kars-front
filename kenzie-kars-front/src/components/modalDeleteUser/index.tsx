import { AiOutlineClose } from "react-icons/ai";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../Modal";
import { DivBtns, DivModalBody, DivTitle, StyledTitle } from "./style";
import { StyledButton } from "../../styles/buttons";

interface iProp {
  toggleModal: () => void;
}

export const ModalDeleteUser = ({ toggleModal }: iProp) => {
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
            tag="button"
            onClick={() => toggleModal()}
            buttonStyle="sm-modal"
            buttonColor="negative"
          >
            Cancelar
          </StyledButton>
          <StyledButton
            tag="button"
            // onClick={() => {

            // }}
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
