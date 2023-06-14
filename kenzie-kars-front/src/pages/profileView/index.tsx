import { useState } from "react";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import {
  BlueBox,
  Circle,
  Container,
  Flex,
  PerfilBox,
  StyledDiv,
} from "./style";
import { ModalAddCar } from "../../components/ModalAddCar";
import { CarListProfileSellerPage } from "../../components/carListProfileView";

export const ProfileView = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  return (
    <>
      {isOpenModal && <ModalAddCar toggleModal={toggleModal} />}
      <Container>
        <HeaderLoggedIn />
        <BlueBox />
        <PerfilBox>
          <div>
            <Circle>SL</Circle>
            <Flex>
              <StyledText tag="h1" textColor="grey1" textStyle="heading-6-600">
                Samuel Leão
              </StyledText>
              <StyledDiv>Anunciante</StyledDiv>
            </Flex>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </StyledText>
            <StyledButton
              onClick={toggleModal}
              tag="button"
              buttonStyle="bg"
              buttonColor="outlineBrand1"
            >
              Criar anuncio
            </StyledButton>
          </div>
        </PerfilBox>
        {/* <CarListProfileSellerPage /> */}
      </Container>
    </>
  );
};
