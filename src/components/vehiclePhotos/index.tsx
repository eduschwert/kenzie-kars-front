import { ClipLoader } from "react-spinners";

import brokenImage from "../../assets/imageBroken.svg";
import { useModal } from "../../hooks/useContexts";
import { iImageResponse } from "../../interfaces";
import { StyledUl } from "./style";

export const VehiclePhotos = ({
  images,
  setSelectedImage,
}: {
  setSelectedImage: React.Dispatch<
    React.SetStateAction<{ imageUrl: string; imageNumber: number }>
  >;
  images: iImageResponse[] | null | undefined;
}) => {
  const { openModal, setModalType } = useModal();

  return (
    <StyledUl>
      {!images ? (
        <ClipLoader color="#212529" size={"5rem"} />
      ) : (
        <>
          {images.length > 0 && (
            <>
              {images.map((image, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      openModal();
                      setModalType("image");
                      setSelectedImage({
                        imageUrl: image.imageUrl,
                        imageNumber: i + 1,
                      });
                    }}
                  >
                    <img
                      src={image.imageUrl}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.width = "5rem";
                        target.style.height = "5rem";
                        target.src = brokenImage;
                      }}
                      alt={`Imagem ${i + 1}`}
                    />
                  </button>
                </li>
              ))}
            </>
          )}
        </>
      )}
    </StyledUl>
  );
};
