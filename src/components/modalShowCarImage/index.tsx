import { AiOutlineClose } from "react-icons/ai";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { DivTitle, ModalInnerContainer, StyledCarImage } from "./style";
import { iModalShowCarImage } from "./types";

export const ModalShowCarImage = ({
  toggleImageModal,
  carImage,
}: iModalShowCarImage) => {
  return (
    <Modal toggleModal={toggleImageModal}>
      <ModalInnerContainer>
        <DivTitle>
          <StyledText
            tag="h3"
            textStyle="heading-6-500"
          >{`Imagem do Carro`}</StyledText>
          <button onClick={() => toggleImageModal()}>
            <AiOutlineClose size={22} color={"#0b0d0d"} />
          </button>
        </DivTitle>
        <StyledCarImage>
          <img src={carImage} alt="Imagem do Carro" />
        </StyledCarImage>
      </ModalInnerContainer>
    </Modal>
  );
};
