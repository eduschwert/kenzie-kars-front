import {
  CommentsAboutCar,
  ContainerAnnoucement,
  ContentAnnoucement,
  ContentDescriptionComment,
  ContentImgs,
  ContentPhotosCar,
  DescriptionCar,
  DivImageCar,
  ImageAndDescription,
  InformationCar,
  InformationCarDetails,
  InputAndButtonFormComment,
  PhotoAndProfile,
  PhotosCar,
  ProfileComment,
  ProfileInitials,
  ProfileUser,
  YearMileage,
} from "./style";
import exteriorCarro from "../../imagensMock/exterior-carro.png";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { FooterComponent } from "../../components/footer";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { useUser } from "../../hooks/useUser";
import { StyledButton } from "../../styles/buttons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
// import { UserContext } from "../../contexts/userContext/UserContext";
import { StyledText } from "../../styles/tipography";
import carImage from "../../assets/car.png";

export const AnnoucementPage = () => {
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
            {/* <h2>Comentários</h2> */}
            <div className="allignCommentAndProfile">
              <ProfileComment>
                <div className="photoProfileComment">
                  <h2>JL</h2>
                </div>
                <p>Júlia Lima</p>
                <span> há 3 dias</span>
              </ProfileComment>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="allignCommentAndProfile">
              <ProfileComment>
                <div className="photoProfileComment">
                  <h2>MA</h2>
                </div>
                <p>Marcos Antônio</p>
                <span> há 7 dias</span>
              </ProfileComment>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="allignCommentAndProfile">
              <ProfileComment>
                <div className="photoProfileComment">
                  <h2>CS</h2>
                </div>

                <p>Camila Silva</p>
                <span> há 1 mês</span>
              </ProfileComment>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </CommentsAboutCar>
          <InputAndButtonFormComment>
            <div>
              <ProfileComment>
                <ProfileInitials>
                  <StyledText
                    tag="h2"
                    textStyle={"heading-7-600"}
                    textColor="white"
                  >
                    {`SL`}
                  </StyledText>
                  {/* <h2>SL</h2> */}
                </ProfileInitials>
                <StyledText
                  tag="p"
                  textStyle={"heading-6-600"}
                  textColor="grey1"
                >
                  {user?.name}
                </StyledText>
                {/* <p>Samuel Leão</p> */}
              </ProfileComment>
              <textarea placeholder="Digite um comentário..." />
              <button>Comentar</button>
            </div>
          </InputAndButtonFormComment>
        </ContentDescriptionComment>
      </ContentAnnoucement>
      <FooterComponent />
    </ContainerAnnoucement>
  );
};
