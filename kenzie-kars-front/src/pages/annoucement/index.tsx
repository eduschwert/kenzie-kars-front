import {
  CommentsAboutCar,
  ContainerAnnoucement,
  ContentAnnoucement,
  ContentDescriptionComment,
  ContentPhotosCar,
  DescriptionCar,
  DivImagemCar,
  InformationCar,
  InputAndButtonForComment,
  PhotosCar,
  ProfileComment,
  ProfileUser,
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
import { UserContext } from "../../contexts/userContext/UserContext";
import { StyledText } from "../../styles/tipography";

export const AnnoucementPage = () => {
  // const { user } = useUser();
  const { user } = useContext(UserContext);
  const { carSeller } = useContext(ProductContext);
  const navigate = useNavigate();

  const actionOverAllAnnouncements = () => {
    console.log("ALL ANNOUNCEMENTS");
    console.log("CAR SELLER", carSeller);
    console.log("USER", user);
    if (carSeller?.seller.id === user.id) {
      navigate("/profileviewadmin");
    } else {
      navigate("/profileview");
    }
  };

  return (
    <ContainerAnnoucement>
      {user.name !== "" ? (
        <HeaderLoggedIn user={user} />
      ) : (
        <HeaderNotLoggedIn />
      )}
      <ContentAnnoucement>
        <div className="contentImgs">
          <div className="responsiveImgsAndDescription">
            <DivImagemCar>
              <img src={exteriorCarro} alt="" className="externalCar" />
            </DivImagemCar>
            <InformationCar>
              <span>{carSeller?.model}</span>
              <div className="infosPriceYearKm">
                <div className="yearAndKm">
                  <p>{carSeller?.year}</p>
                  <p>{`${carSeller?.mileage}Km`}</p>
                </div>
                <p>{carSeller?.price}</p>
              </div>
              <button>Comprar</button>
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
          </div>
          <div className="responsivePhotosAndProfile">
            <ContentPhotosCar>
              <h2>Fotos</h2>
              <PhotosCar>
                <div>
                  <img src={exteriorCarro} alt="" className="photoCar" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" className="photoCar" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" className="photoCar" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" className="photoCar" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" className="photoCar" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" className="photoCar" />
                </div>
              </PhotosCar>
            </ContentPhotosCar>
            <ProfileUser>
              <div>
                <div className="photoProfile">
                  <h4>SL</h4>
                </div>
                <StyledText
                  tag="p"
                  textStyle={"heading-6-600"}
                  textColor="grey1"
                >
                  {carSeller?.seller.name}
                </StyledText>
                {/* <p>Samuel Leão</p> */}
                <StyledText
                  tag="span"
                  textStyle={"body-2-400"}
                  textColor="grey1"
                >
                  {carSeller?.seller.description}
                </StyledText>
                {/* <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </span> */}
                <StyledButton
                  type="button"
                  buttonStyle="sm"
                  buttonColor="grey1"
                  width="126px"
                  onClick={() => actionOverAllAnnouncements()}
                >
                  Ver todos os anúncios
                </StyledButton>
                {/* <button>Ver todos os anúncios</button> */}
              </div>
            </ProfileUser>
          </div>
        </div>
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
          <InputAndButtonForComment>
            <div className="allignProfileAndInput">
              <ProfileComment>
                <div className="photoProfileComment">
                  <h2>SL</h2>
                </div>
                <StyledText
                  tag="p"
                  textStyle={"heading-6-600"}
                  textColor="grey1"
                >
                  {user.name}
                </StyledText>
                {/* <p>Samuel Leão</p> */}
              </ProfileComment>
              <textarea placeholder="Digite um comentário..." />
              <button>Comentar</button>
            </div>
          </InputAndButtonForComment>
        </ContentDescriptionComment>
      </ContentAnnoucement>
      <FooterComponent />
    </ContainerAnnoucement>
  );
};
