import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";

import brokenImage from "../../assets/imageBroken.svg";
import {
  StyledDivCommentInput,
  StyledDivComments,
  StyledDivCoverImage,
  StyledDivFullPage,
  StyledDivLeftContainer,
  StyledDivRightContainer,
  StyledDivUserDetails,
  StyledDivVehicleDescription,
  StyledDivVehicleDetailsPriceKm,
  StyledDivVehicleDetais,
  StyledDivVehiclePhotos,
  StyledMain,
} from "./style";
import { StyledText } from "../../styles/tipography";
import { DetailBox } from "../../components/detailBox";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { UserAvatar } from "../../components/userAvatar";
import { useModal, useUser } from "../../hooks/useContexts";
import { ModalImage } from "../../components/modalImage";
import { Footer } from "../../components/footer";
import { formatNumberBRWithPrefix } from "../../utils";
import { VehiclePhotos } from "../../components/vehiclePhotos";
import {
  iCommentResponse,
  iVehicleResponseWithUser,
  iVehicleResponseWithUserAndImagesAndComments,
  iVehicleResponseWithUserAndImagesAndCommentsPartial,
} from "../../interfaces";
import { api } from "../../services/api";
import { VehicleComments } from "../../components/vehicleComments";
import { VehicleCommentCreate } from "../../components/vehicleCommentCreate";
import { ModalDeleteComment } from "../../components/modalDeleteComment";
import { ModalEditComment } from "../../components/modalEditComment";

export const VehiclePage = () => {
  const [vehicle, setVehicle] =
    useState<iVehicleResponseWithUserAndImagesAndCommentsPartial | null>(null);

  const [selectedImage, setSelectedImage] = useState({
    imageUrl: "",
    imageNumber: 1,
  });

  const [comment, setComment] = useState<iCommentResponse | null>(null);

  const { user, globalLoading } = useUser();
  const { isOpenModal, modalType } = useModal();

  const navigate = useNavigate();

  const { vehicleId } = useParams();
  const location = useLocation();
  const localVehicle: iVehicleResponseWithUser | undefined =
    location.state?.vehicle;

  console.log(localVehicle);
  useEffect(() => {
    if (localVehicle && localVehicle.id === vehicleId) {
      setVehicle(localVehicle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getVehicle = async (vehicleId: string | undefined) => {
      try {
        if (!vehicleId) {
          navigate("/");
          return;
        }
        const { data } =
          await api.get<iVehicleResponseWithUserAndImagesAndComments>(
            `vehicles/${vehicleId}`
          );

        setVehicle(data);
      } catch (error) {
        console.error(error);
        if (axios.isAxiosError(error)) {
          if (error.code === "ECONNABORTED") {
            toast.error(
              "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
            );
          } else if (error.response) {
            navigate("/");
            toast.error(error.response?.data.message);
          }
        }
      }
    };
    if (!globalLoading) {
      getVehicle(vehicleId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalLoading]);

  return (
    <>
      {isOpenModal && (
        <>
          {(() => {
            switch (modalType) {
              case "image":
                return <ModalImage image={selectedImage} />;

              case "editComment":
                return (
                  <ModalEditComment comment={comment} setVehicle={setVehicle} />
                );

              case "deleteComment":
                return (
                  <ModalDeleteComment
                    comment={comment}
                    setVehicle={setVehicle}
                  />
                );
            }
          })()}
        </>
      )}
      <StyledDivFullPage>
        {!vehicle ? (
          <>
            <div className="headerHeight"></div>
            <main className="loading">
              <ClipLoader color="#212529" size={"5rem"} />
            </main>
          </>
        ) : (
          <StyledMain>
            <div className="background"></div>
            <div className="toTop">
              <div className="container">
                <StyledDivLeftContainer>
                  <StyledDivCoverImage>
                    <img
                      src={vehicle.coverImage}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.width = "5rem";
                        target.style.minWidth = "5rem";
                        target.src = brokenImage;
                      }}
                      alt="Imagem de capa do veículo"
                    />
                  </StyledDivCoverImage>
                  <StyledDivVehicleDetais>
                    <div>
                      <StyledText
                        tag="h1"
                        $textStyle="heading-6-600"
                        $textColor="grey1"
                      >
                        {`${vehicle.brand} - ${vehicle.model}`}
                      </StyledText>
                      <StyledText
                        tag="p"
                        $textStyle="body-1-600"
                        $textColor="grey2"
                      >
                        {vehicle.color}
                      </StyledText>
                      <StyledDivVehicleDetailsPriceKm>
                        <div>
                          <DetailBox value={vehicle.year} />
                          <DetailBox value={`${vehicle.mileage} KM`} />
                        </div>
                        <StyledText
                          tag="h3"
                          $textStyle="heading-7-500"
                          $textColor="grey1"
                        >
                          {formatNumberBRWithPrefix(vehicle.price)}
                        </StyledText>
                      </StyledDivVehicleDetailsPriceKm>
                      {user && vehicle.user.phone ? (
                        <a
                          target="_blank"
                          href={`https://wa.me/${vehicle.user.phone.replace(
                            /^(\d{2})(9)(\d{8})$/,
                            "$1$3"
                          )}?text=Ol%C3%A1%2C+venho+por+meio+do+seu+an%C3%BAncio%2C+para+negociarmos+o+ve%C3%ADculo+${
                            vehicle?.model
                          }`}
                        >
                          Comprar
                        </a>
                      ) : (
                        <StyledButton
                          disabled={true}
                          $buttonStyle="big"
                          $buttonColor="brand1"
                        >
                          Comprar
                        </StyledButton>
                      )}
                    </div>
                  </StyledDivVehicleDetais>
                  <StyledDivVehicleDescription>
                    <div>
                      <StyledText
                        tag="h4"
                        $textStyle="heading-6-600"
                        $textColor="grey1"
                      >
                        Descrição
                      </StyledText>
                      <StyledText
                        tag="p"
                        $textStyle="body-1-400"
                        $textColor="grey2"
                      >
                        {vehicle.description}
                      </StyledText>
                    </div>
                  </StyledDivVehicleDescription>
                </StyledDivLeftContainer>
                <StyledDivRightContainer>
                  <StyledDivVehiclePhotos>
                    <div>
                      <StyledText
                        tag="h3"
                        $textStyle="heading-6-600"
                        $textColor="grey1"
                      >
                        Fotos
                      </StyledText>
                      <VehiclePhotos
                        images={vehicle.images}
                        setSelectedImage={setSelectedImage}
                      />
                    </div>
                  </StyledDivVehiclePhotos>
                  <StyledDivUserDetails>
                    <div>
                      <UserAvatar
                        size="big"
                        color="#4529E6"
                        username={vehicle.user.name}
                      />
                      <StyledText
                        tag="h4"
                        $textStyle="heading-6-600"
                        $textColor="grey1"
                      >
                        {vehicle.user.name}
                      </StyledText>
                      <StyledText
                        tag="p"
                        $textStyle="body-1-400"
                        $textColor="grey2"
                      >
                        {vehicle.user.description}
                      </StyledText>
                      <StyledLink
                        to={`/seller/${vehicle.user.id}`}
                        $buttonStyle="big"
                        $buttonColor="grey1"
                        state={{ seller: vehicle.user }}
                      >
                        Ver todos anuncios
                      </StyledLink>
                    </div>
                  </StyledDivUserDetails>
                </StyledDivRightContainer>
              </div>
              <div className="container">
                <StyledDivLeftContainer>
                  <StyledDivComments>
                    <div>
                      <StyledText
                        tag="h4"
                        $textStyle="heading-6-600"
                        $textColor="grey1"
                      >
                        Comentários
                      </StyledText>
                      <VehicleComments
                        comments={vehicle.comments}
                        setComment={setComment}
                      />
                    </div>
                  </StyledDivComments>
                  {vehicle.comments && (
                    <StyledDivCommentInput>
                      <VehicleCommentCreate
                        vehicle={vehicle}
                        setVehicle={setVehicle}
                      />
                    </StyledDivCommentInput>
                  )}
                </StyledDivLeftContainer>
                <StyledDivRightContainer></StyledDivRightContainer>
              </div>
            </div>
          </StyledMain>
        )}
        <Footer />
      </StyledDivFullPage>
    </>
  );
};
