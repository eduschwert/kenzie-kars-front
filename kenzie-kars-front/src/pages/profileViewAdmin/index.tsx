import { useEffect, useState } from "react";
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
import { CarListProfileView } from "../../components/carListProfileView";
import { useUser } from "../../hooks/useUser";
import { api } from "../../services/api";
// import { iVehicle } from "./types";
import { iProductItem } from "../../contexts/productContext/types";

export const ProfileViewAdmin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const [vehicles, setVehicles] = useState<Array<iProductItem> | null>(null);

  const { user } = useUser();

  const initials = user?.name?.substring(0, 2)?.toUpperCase();

  useEffect(() => {
    const fetchUserCars = async () => {
      const token = localStorage.getItem("@KenzieKars:token");
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const response = await api.get("users/user_vehicles");
      setVehicles(response.data.data);
    };
    fetchUserCars();
  }, []);

  return (
    <>
      {isOpenModal && (
        <ModalAddCar setVehicles={setVehicles} toggleModal={toggleModal} />
      )}
      <Container>
        <HeaderLoggedIn user={user} />
        <BlueBox />
        <PerfilBox>
          <div>
            <Circle>{initials}</Circle>
            <Flex>
              <StyledText tag="h1" textColor="grey1" textStyle="heading-6-600">
                {user && user.name}
              </StyledText>
              <StyledDiv>Anunciante</StyledDiv>
            </Flex>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              {user && user.description}
            </StyledText>
            <StyledButton
              onClick={toggleModal}
              buttonStyle="bg"
              buttonColor="outlineBrand1"
              width="160px"
            >
              Criar anuncio
            </StyledButton>
          </div>
        </PerfilBox>
        <CarListProfileView vehicles={vehicles} />
      </Container>
    </>
  );
};
