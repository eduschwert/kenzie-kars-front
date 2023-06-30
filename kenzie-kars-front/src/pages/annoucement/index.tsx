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
// import exteriorCarro from "../../imagensMock/exterior-carro.png";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { FooterComponent } from "../../components/footer";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { useUser } from "../../hooks/useUser";
import { StyledButton } from "../../styles/buttons";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../contexts/productContext";
// import { UserContext } from "../../contexts/userContext/UserContext";
import { StyledText } from "../../styles/tipography";
// import carImage from "../../assets/car.png";
import { InitialsCircle } from "../../components/initialsCircle";
// import Textarea, { TextareaAutosize } from "@mui/material";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { CommentItemLi } from "../../components/vehicleComment";
import { CssTextField } from "../../components/forms/muiStyle";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "./schema";
import { SyncLoader } from "react-spinners";
import { iImage } from "../../contexts/productContext/types";
import { ModalShowCarImage } from "../../components/modalShowCarImage";

interface iComment {
  content: string;
  id: string;
  createdAt: string;
  owner: {
    name: string;
    id: string;
  };
  vehicle: {
    id: string;
  };
}

export const AnnoucementPage = () => {
  const [comments, setComments] = useState<iComment[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  // const { user, setUser } = useContext(UserContext);
  const { carSeller } = useContext(ProductContext);
  const [isOpenImageModal, setIsOpenImageModal] = useState(false);

  const [carSelectedImage, setCarSelectedImage] = useState<string>("");
  const navigate = useNavigate();

  const toggleImageModal = () => setIsOpenImageModal(!isOpenImageModal);

  const actionOverAllAnnouncements = () => {
    if (carSeller?.seller.id === user?.id) {
      navigate("/profileviewadmin");
    } else {
      navigate("/profileview");
    }
  };
  const setActionOverCarImage = (carImage: iImage) => {
    setCarSelectedImage(carImage.image_url);
    toggleImageModal();
  };

  async function getComments() {
    try {
      if (!carSeller?.id) {
        navigate("/");
      } else {
        const response = await api.get(`comments/${carSeller?.id}`);
        reset();
        setComments(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado ao obter os comentários.`);
    }
  }

  useEffect(() => {
    getComments();
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

  useEffect(() => {
    getComments();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iComment>({
    mode: "onTouched",
    resolver: yupResolver(commentSchema),
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
                  {/* <span>{carSeller?.model}</span> */}
                  <YearMileage>
                    <InformationCarDetails>
                      <StyledText
                        tag="p"
                        textStyle={"heading-7-500"}
                        textColor="brand1"
                      >
                        {carSeller?.year}
                      </StyledText>
                      {/* <p>{carSeller?.year}</p> */}
                      <StyledText
                        tag="p"
                        textStyle={"heading-7-500"}
                        textColor="brand1"
                      >
                        {`${carSeller?.mileage}Km`}
                      </StyledText>
                      {/* <p>{`${carSeller?.mileage}Km`}</p> */}
                    </InformationCarDetails>
                    <StyledText
                      tag="p"
                      textStyle={"heading-7-500"}
                      textColor="grey1"
                    >
                      {`R$ ${carSeller?.price}`}
                    </StyledText>
                    {/* <p>{carSeller?.price}</p> */}
                  </YearMileage>
                  <StyledButton
                    // onClick={() =>  }
                    buttonStyle={"sm"}
                    buttonColor="brand1"
                    width="7rem"
                  >
                    {`Comprar`}
                  </StyledButton>
                  {/* <button>Comprar</button> */}
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
                    {/* <p>Descrição</p> */}
                    <div>
                      <StyledText
                        tag="span"
                        textStyle={"body-2-400"}
                        textColor="grey1"
                      >
                        {carSeller?.description}
                      </StyledText>
                    </div>
                    {/* <span>
                  {carSeller?.description}
                  
                </span> */}
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
                  {/* <h2>Fotos</h2> */}
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

                    <StyledButton
                      type="button"
                      buttonStyle="sm"
                      buttonColor="grey1"
                      max-width="80%"
                      onClick={() => actionOverAllAnnouncements()}
                    >
                      Ver todos os anúncios
                    </StyledButton>
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
                            name={item.owner.name}
                            content={item.content}
                            date={item.createdAt}
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
                {/* <h2>Fotos</h2> */}
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

                  <StyledButton
                    type="button"
                    buttonStyle="sm"
                    buttonColor="grey1"
                    max-width="80%"
                    onClick={() => actionOverAllAnnouncements()}
                  >
                    Ver todos os anúncios
                  </StyledButton>
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
