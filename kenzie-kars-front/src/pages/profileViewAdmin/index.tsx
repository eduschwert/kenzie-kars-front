import { useEffect, useState } from "react";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import {
  BlueBox,
  Circle,
  Container,
  ContainerList,
  Flex,
  NoVehiclesContainer,
  PerfilBox,
  StyledDiv,
} from "./style";
import { ModalAddCar } from "../../components/modalAddCar";
import { useUser } from "../../hooks/useUser";
import { api } from "../../services/api";
import { CarListAdmin } from "../../components/carListAdmin";
import { FooterComponent } from "../../components/footer";
import { useProduct } from "../../hooks/useProduct";
import { CustomIconsPagination } from "../../components/pagination";

export const ProfileViewAdmin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const [totalPages, setTotalPages] = useState(0);

  const { vehiclesProfileViewAdmin, setVehiclesProfileViewAdmin } =
    useProduct();

  const { user } = useUser();

  const initials = user?.name?.substring(0, 2)?.toUpperCase();

  useEffect(() => {
    const fetchUserCars = async () => {
      const token = localStorage.getItem("@KenzieKars:token");
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const response = await api.get("users/user_vehicles");
      setVehiclesProfileViewAdmin(response.data.data);
    };
    fetchUserCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVehiclesPaginationProfileAdm = async (
    perPage: number,
    page: number
  ) => {
    try {
      const token = localStorage.getItem("@KenzieKars:token");
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.get(
        `users/user_vehicles?perPage=${perPage}&page=${page}`
      );

      setVehiclesProfileViewAdmin(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isOpenModal && <ModalAddCar toggleModal={toggleModal} />}
      <Container>
        <HeaderLoggedIn />
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
            >
              Criar anuncio
            </StyledButton>
          </div>
        </PerfilBox>
        <ContainerList>
          {vehiclesProfileViewAdmin && vehiclesProfileViewAdmin.length > 0 ? (
            <CarListAdmin />
          ) : (
            <NoVehiclesContainer>
              <StyledText
                tag="span"
                textStyle={"heading-5-500"}
                textColor="black"
              >
                Você ainda não possui nenhum anúncio cadastrado.
              </StyledText>
            </NoVehiclesContainer>
          )}
          <CustomIconsPagination
            getVehiclesPaginationProfileAdm={getVehiclesPaginationProfileAdm}
            totalPagesOtherPage={totalPages}
          />
        </ContainerList>
        <FooterComponent />
      </Container>
    </>
  );
};
