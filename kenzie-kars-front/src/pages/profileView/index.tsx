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
import { useProduct } from "../../hooks/useProduct";
import { iProductItem } from "../../contexts/productContext/types";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";

export const ProfileView = () => {
  const [vehicles, setVehicles] = useState<Array<iProductItem> | null>(null);
  const { user } = useUser();
  const { carSeller } = useProduct();

  const initials = carSeller?.seller.name.substring(0, 2)?.toUpperCase();

  useEffect(() => {
    const fetchSellerCars = async () => {
      const response = await api.get(`vehicles/user/${carSeller?.seller.id}`);
      setVehicles(response.data.data);
    };
    fetchSellerCars();
  }, [carSeller]);

  return (
    <>
      <Container>
        {user.name !== "" ? (
          <HeaderLoggedIn user={user} />
        ) : (
          <HeaderNotLoggedIn />
        )}

        <BlueBox />
        <PerfilBox>
          <div>
            <Circle>{initials}</Circle>
            <Flex>
              <StyledText tag="h1" textColor="grey1" textStyle="heading-6-600">
                {carSeller?.seller?.name}
              </StyledText>
              <StyledDiv>Anunciante</StyledDiv>
            </Flex>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              {carSeller?.seller?.description}
            </StyledText>
          </div>
        </PerfilBox>
        <CarListProfileView vehicles={vehicles} />
      </Container>
    </>
  );
};
