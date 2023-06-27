import {
  CommentsAboutCar,
  ContainerAnnoucement,
  ContentAnnoucement,
  ContentDescriptionComment,
  ContentImgs,
  ContentPhotosCar,
  DescriptionCar,
  DivImageCar,
  FormComment,
  ImageAndDescription,
  InformationCar,
  InformationCarDetails,
  InputAndButtonFormComment,
  NameDiv,
  PhotoAndProfile,
  PhotosCar,
  ProfileComments,
  ProfileInitials,
  ProfileUser,
  YearMileage,
} from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import exteriorCarro from "../../imagensMock/exterior-carro.png";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { FooterComponent } from "../../components/footer";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { useUser } from "../../hooks/useUser";
import { StyledButton } from "../../styles/buttons";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/productContext";
// import { UserContext } from "../../contexts/userContext/UserContext";
import { StyledText } from "../../styles/tipography";
import carImage from "../../assets/car.png";
import { InitialsCircle } from "../../components/initialsCircle";
import Textarea, { TextareaAutosize } from "@mui/material";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { CommentItemLi } from "../../components/vehicleComment";
import { CssTextField } from "../../components/forms/muiStyle";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "./schema";
import { SyncLoader } from "react-spinners";

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
  // const { user } = useContext(UserContext);
  const { carSeller } = useContext(ProductContext);
  const navigate = useNavigate();

  const actionOverAllAnnouncements = () => {
    if (carSeller?.seller.id === user?.id) {
      navigate("/profileviewadmin");
    } else {
      navigate("/profileview");
    }
  };

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

  async function getComments() {
    const token = localStorage.getItem("@KenzieKars:token");
    try {
      const response = await api.get(`comments/${carSeller?.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      reset();
      setComments(response.data);
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado.`);
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
    <ContainerAnnoucement>
      {user ? <HeaderLoggedIn /> : <HeaderNotLoggedIn />}
      <ContentAnnoucement>
        <ContentImgs>
          <ImageAndDescription>
            <DivImageCar>
              <img src={carImage} alt="" />
            </DivImageCar>
            <InformationCar>
              <StyledText tag="p" textStyle={"heading-6-600"} textColor="grey1">
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
          <PhotoAndProfile>
            {/* <div className="responsivePhotosAndProfile"> */}
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
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
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
                    {carSeller?.seller?.name
                      ? carSeller?.seller?.name?.substring(0, 2).toUpperCase()
                      : ""}
                    {/* {carSeller?.seller.name} */}
                  </StyledText>
                  {/* <h4>SL</h4> */}
                </div>

                {/* <p>Samuel Leão</p> */}
                <StyledText
                  tag="span"
                  textStyle={"heading-5-500"}
                  textColor="grey1"
                >
                  {carSeller?.seller?.name}
                </StyledText>
                <StyledText
                  tag="span"
                  textStyle={"body-2-400"}
                  textColor="grey1"
                >
                  {carSeller?.seller?.description}
                </StyledText>
                {/* <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </span> */}
                <StyledButton
                  type="button"
                  buttonStyle="sm"
                  buttonColor="grey1"
                  onClick={() => actionOverAllAnnouncements()}
                >
                  Ver todos os anúncios
                </StyledButton>
                {/* <button>Ver todos os anúncios</button> */}
              </div>
            </ProfileUser>
          </PhotoAndProfile>
        </ContentImgs>
        <ContentDescriptionComment>
          <CommentsAboutCar>
            <StyledText tag="h2" textStyle={"heading-6-600"} textColor="grey1">
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
                <InitialsCircle
                  text={user ? user.name.substring(0, 2).toUpperCase() : ""}
                />
                <StyledText tag="p" textStyle={"body-1-600"} textColor="grey1">
                  {user ? user.name : ""}
                </StyledText>
              </NameDiv>
              <div>
                <FormComment onSubmit={handleSubmit(createComment)} noValidate>
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
      </ContentAnnoucement>
      <FooterComponent />
    </ContainerAnnoucement>
  );
};
