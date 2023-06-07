import {
  CommentsAboutCar,
  ContainBackgroundLinear,
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
export const AnnoucementPage = () => {
  return (
    <ContainerAnnoucement>
      <ContainBackgroundLinear></ContainBackgroundLinear>
      <ContentAnnoucement>
        <div className="contentImgs">
          <div className="responsiveImgsAndDescription">
            <DivImagemCar>
              <img src={exteriorCarro} alt="" className="externalCar" />
            </DivImagemCar>
            <InformationCar>
              <span>
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
              </span>
              <div className="infosPriceYearKm">
                <div className="yearAndKm">
                  <p>2013</p>
                  <p>0 KM</p>
                </div>
                <p>R$00.000,00</p>
              </div>
              <button>Comprar</button>
            </InformationCar>
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
                <p>Samuel Leão</p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </span>
                <button>Ver todos anúncios</button>
              </div>
            </ProfileUser>
          </div>
        </div>
        <ContentDescriptionComment>
          <DescriptionCar>
            <div>
              <p>Descrição</p>
              <span>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
          </DescriptionCar>
          <CommentsAboutCar>
            <h2>Comentários</h2>
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
                  <h2>CS</h2>
                </div>
                <p>Camila Silva</p>
                <span> há 3 dias</span>
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
                  <h2>CS</h2>
                </div>
                <p>Camila Silva</p>
              </ProfileComment>
              <input type="text" placeholder="Digitar comentário" />
              <button>Comentar</button>
            </div>
          </InputAndButtonForComment>
        </ContentDescriptionComment>
      </ContentAnnoucement>
    </ContainerAnnoucement>
  );
};
