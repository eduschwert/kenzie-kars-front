import { Modal } from "../modal";
import { StyledDivImage } from "./style";
import brokenImage from "../../assets/imageBroken.svg";

export const ModalImage = ({
  image,
}: {
  image: { imageUrl: string; imageNumber: number };
}) => {
  const string = `Imagem ${image.imageNumber}`;

  return (
    <Modal title={string}>
      <StyledDivImage>
        <img
          src={image.imageUrl}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.width = "5rem";
            target.src = brokenImage;
          }}
          alt="Imagem de capa do veículo"
        />
      </StyledDivImage>
    </Modal>
  );
};
