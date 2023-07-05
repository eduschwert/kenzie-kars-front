import {
  CommentsAboutCar,
  ContainerAnnoucement,
  ContentAnnoucement,
  ContentDescriptionComment,
  ContentImgs,
  ContentPhotosCar,
  DescriptionCar,
  DivImageCar,
  FirstColumn,
  FormComment,
  ImageAndDescription,
  InformationCar,
  InformationCarDetails,
  InputAndButtonFormComment,
  NameDiv,
  PhotoAndProfile,
  PhotoAndProfileWide,
  PhotosCar,
  ProfileComments,
  ProfileUser,
  YearMileage,
} from "./style";
import { useForm } from "react-hook-form";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { FooterComponent } from "../../components/footer";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { useUser } from "../../hooks/useUser";
import { StyledButton, StyledLinkButton } from "../../styles/buttons";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../contexts/productContext";
import { StyledText } from "../../styles/tipography";
import { InitialsCircle } from "../../components/initialsCircle";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { CommentItemLi } from "../../components/vehicleComment";
import { CssTextField } from "../../components/forms/muiStyle";
import { SyncLoader } from "react-spinners";
import { iComment, iImage } from "../../contexts/productContext/types";
import { ModalShowCarImage } from "../../components/modalShowCarImage";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchemaZod } from "./validators";

export const AnnoucementPage = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const {
    carSeller,
    setCarSeller,
    comments,
    getComments,
    getVehicleId,
    filteredProducts,
  } = useContext(ProductContext);
  const [isOpenImageModal, setIsOpenImageModal] = useState(false);

  const [carSelectedImage, setCarSelectedImage] = useState<string>("");
  const navigate = useNavigate();

  const toggleImageModal = () => setIsOpenImageModal(!isOpenImageModal);

  const setActionOverCarImage = (carImage: iImage) => {
    setCarSelectedImage(carImage.image_url);
    toggleImageModal();
  };

  const { vehicleId } = useParams();

  useEffect(() => {
    if (!vehicleId) {
      navigate("/");
    } else {
      getComments();
      const findVehicle = filteredProducts.find(
        (vehicle) => vehicle.id === vehicleId
      );
      if (findVehicle) {
        setCarSeller(findVehicle);
      } else {
        getVehicleId(vehicleId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createComment(data: iComment) {
    setLoading(true);
    if (!user) {
      navigate("/login");
    } else {
      const token = localStorage.getItem("@KenzieKars:token");
      try {
        await api.post(`comments/${carSeller?.id}`, data, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
        toast.success(`Comentário criado com sucesso!`);
        getComments();
      } catch (error) {
        console.error(error);
        toast.error(`Ops! Algo deu errado.`);
        setLoading(false);
      }
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iComment>({
    mode: "onTouched",
    resolver: zodResolver(commentSchemaZod),
  });
  return (
    <>
      {isOpenImageModal && (
        <ModalShowCarImage
          carImage={carSelectedImage}
          toggleImageModal={toggleImageModal}
        />
      )}
      <ContainerAnnoucement>
        {user ? <HeaderLoggedIn /> : <HeaderNotLoggedIn />}
        <ContentAnnoucement>
          <ContentImgs>
            <FirstColumn>
              <ImageAndDescription>
                <DivImageCar>
                  <img src={carSeller?.cover_image} alt="" />
                </DivImageCar>
                <InformationCar>
                  <StyledText
                    tag="p"
                    textStyle={"heading-6-600"}
                    textColor="grey1"
                  >
                    {carSeller?.model}
                  </StyledText>

                  <YearMileage>
                    <InformationCarDetails>
                      <StyledText
                        tag="p"
                        textStyle={"heading-7-500"}
                        textColor="brand1"
                      >
                        {carSeller?.year}
                      </StyledText>

                      <StyledText
                        tag="p"
                        textStyle={"heading-7-500"}
                        textColor="brand1"
                      >
                        {`${carSeller?.mileage}Km`}
                      </StyledText>
                    </InformationCarDetails>
                    <StyledText
                      tag="p"
                      textStyle={"heading-7-500"}
                      textColor="grey1"
                    >
                      {`R$ ${carSeller?.price}`}
                    </StyledText>
                  </YearMileage>

                  {user ? (
                    <>
                      <a
                        target="_blank"
                        href={`https://wa.me/${carSeller?.seller.phone}?text=Ol%C3%A1%2C+venho+por+meio+do+seu+an%C3%BAncio%2C+para+negociarmos+o+ve%C3%ADculo+${carSeller?.model}`}
                      >
                        <StyledButton
                          buttonStyle={"sm"}
                          buttonColor="brand1"
                          width="7rem"
                        >
                          {`Comprar`}
                        </StyledButton>
                      </a>
                    </>
                  ) : (
                    <StyledButton
                      buttonStyle={"sm"}
                      buttonColor="brand1"
                      width="12rem"
                      onClick={() => navigate("/login")}
                    >
                      {`Faça o Login para entrar em contato`}
                    </StyledButton>
                  )}
                </InformationCar>
                <DescriptionCar>
                  <div>
                    <StyledText
                      tag="p"
                      textStyle={"heading-6-600"}
                      textColor="grey1"
                    >
                      {`Descrição`}
                    </StyledText>

                    <div>
                      <StyledText
                        tag="span"
                        textStyle={"body-2-400"}
                        textColor="grey1"
                      >
                        {carSeller?.description}
                      </StyledText>
                    </div>
                  </div>
                </DescriptionCar>
              </ImageAndDescription>
              <PhotoAndProfileWide>
                <ContentPhotosCar>
                  <StyledText
                    tag="h2"
                    textStyle={"heading-6-600"}
                    textColor="grey1"
                  >
                    {`Fotos`}
                  </StyledText>

                  <PhotosCar>
                    {carSeller?.images &&
                      carSeller.images.map((image) => (
                        <li
                          id={`${image.id}`}
                          onClick={() => setActionOverCarImage(image)}
                        >
                          <img src={image.image_url} alt={`${image.id}`} />
                        </li>
                      ))}
                  </PhotosCar>
                </ContentPhotosCar>
                <ProfileUser>
                  <div>
                    <div className="photoProfile">
                      <StyledText
                        tag="h4"
                        textStyle={"heading-2-600"}
                        textColor="white"
                      >
                        {carSeller?.seller.name
                          ? carSeller?.seller.name.substring(0, 2).toUpperCase()
                          : ""}
                      </StyledText>
                    </div>

                    <StyledText
                      tag="span"
                      textStyle={"heading-5-500"}
                      textColor="grey1"
                    >
                      {carSeller?.seller.name}
                    </StyledText>
                    <StyledText
                      tag="span"
                      textStyle={"body-2-400"}
                      textColor="grey1"
                    >
                      {carSeller?.seller.description}
                    </StyledText>

                    <StyledLinkButton
                      to={`/profileview/${carSeller?.seller.id}`}
                      type="button"
                      buttonStyle="sm"
                      buttonColor="grey1"
                      max-width="80%"
                    >
                      Ver todos os anúncios
                    </StyledLinkButton>
                  </div>
                </ProfileUser>
              </PhotoAndProfileWide>
              <ContentDescriptionComment>
                <CommentsAboutCar>
                  <StyledText
                    tag="h2"
                    textStyle={"heading-6-600"}
                    textColor="grey1"
                  >
                    {`Comentários`}
                  </StyledText>

                  <ProfileComments>
                    {comments.length == 0 ? (
                      <li>
                        <StyledText
                          tag="p"
                          textStyle={"body-1-600"}
                          textColor="grey3"
                        >
                          {`Veículo ainda não possui comentários`}
                        </StyledText>
                      </li>
                    ) : (
                      comments.map((item) => {
                        return (
                          <CommentItemLi
                            owner={item.owner.id}
                            name={item.owner.name}
                            content={item.content}
                            date={item.createdAt}
                            id={item.id}
                          />
                        );
                      })
                    )}
                  </ProfileComments>
                </CommentsAboutCar>

                <InputAndButtonFormComment>
                  <div>
                    <NameDiv>
                      {user ? (
                        <InitialsCircle
                          text={user.name.substring(0, 2).toUpperCase()}
                        />
                      ) : (
                        <StyledText
                          tag="p"
                          textStyle={"body-1-600"}
                          textColor="grey1"
                        >
                          É necessário fazer login para registrar comentários
                        </StyledText>
                      )}

                      <StyledText
                        tag="p"
                        textStyle={"body-1-600"}
                        textColor="grey1"
                      >
                        {user ? user.name : ""}
                      </StyledText>
                    </NameDiv>
                    <div>
                      <FormComment
                        onSubmit={handleSubmit(createComment)}
                        noValidate
                      >
                        <CssTextField
                          required
                          label="Descrição"
                          variant="outlined"
                          size="medium"
                          id="registerDescription"
                          type="text"
                          placeholder="Digite um comentário..."
                          multiline
                          rows={4}
                          {...register("content")}
                          error={!!errors.content}
                          helperText={errors.content && errors.content.message}
                        />

                        <StyledButton
                          buttonStyle={"sm"}
                          buttonColor="brand1"
                          type="submit"
                          disabled={loading}
                        >
                          {" "}
                          {loading ? (
                            <SyncLoader color="#FFFFFF" size={8} />
                          ) : (
                            "Comentar"
                          )}
                        </StyledButton>
                      </FormComment>
                    </div>
                  </div>
                </InputAndButtonFormComment>
              </ContentDescriptionComment>
            </FirstColumn>
            <PhotoAndProfile>
              <ContentPhotosCar>
                <StyledText
                  tag="h2"
                  textStyle={"heading-6-600"}
                  textColor="grey1"
                >
                  {`Fotos`}
                </StyledText>

                <PhotosCar>
                  {carSeller?.images &&
                    carSeller.images.map((image) => (
                      <li
                        id={`${image.id}`}
                        onClick={() => setActionOverCarImage(image)}
                      >
                        <img src={image.image_url} alt={`${image.id}`} />
                      </li>
                    ))}
                </PhotosCar>
              </ContentPhotosCar>
              <ProfileUser>
                <div>
                  <div className="photoProfile">
                    <StyledText
                      tag="h4"
                      textStyle={"heading-2-600"}
                      textColor="white"
                    >
                      {carSeller?.seller.name
                        ? carSeller?.seller.name.substring(0, 2).toUpperCase()
                        : ""}
                    </StyledText>
                  </div>

                  <StyledText
                    tag="span"
                    textStyle={"heading-5-500"}
                    textColor="grey1"
                  >
                    {carSeller?.seller.name}
                  </StyledText>
                  <StyledText
                    tag="span"
                    textStyle={"body-2-400"}
                    textColor="grey1"
                  >
                    {carSeller?.seller.description}
                  </StyledText>

                  <StyledLinkButton
                    to={
                      carSeller?.seller.id === user?.id
                        ? `/profileviewadmin`
                        : `/profileview/${carSeller?.seller.id}`
                    }
                    type="button"
                    buttonStyle="sm"
                    buttonColor="grey1"
                    max-width="80%"
                  >
                    Ver todos os anúncios
                  </StyledLinkButton>
                </div>
              </ProfileUser>
            </PhotoAndProfile>
          </ContentImgs>
        </ContentAnnoucement>
        <FooterComponent />
      </ContainerAnnoucement>
    </>
  );
};
