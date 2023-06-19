import { AiOutlineClose } from "react-icons/ai";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../Modal";
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
import { Autocomplete, TextField } from "@mui/material";

interface iProp {
  toggleModal: () => void;
}

export const ModalUpdateAddress = ({ toggleModal }: iProp) => {
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
    </Modal>
  );
};
