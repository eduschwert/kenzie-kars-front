import { useEffect, useState } from "react";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { StyledText } from "../../styles/tipography";
import {
  BlueBox,
  Circle,
  Container,
  ContainerList,
  Flex,
  PerfilBox,
  StyledDiv,
} from "./style";
import { useUser } from "../../hooks/useUser";
import { api } from "../../services/api";
import { useProduct } from "../../hooks/useProduct";
import { iProductItem } from "../../contexts/productContext/types";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { CarList } from "../../components/carList";
import { FooterComponent } from "../../components/footer";

export const ProfileView = () => {
  const [vehicles, setVehicles] = useState<Array<iProductItem>>(
    [] as iProductItem[]
  );
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
        {user ? <HeaderLoggedIn /> : <HeaderNotLoggedIn />}
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
        <ContainerList>
          <CarList cars={vehicles} />
        </ContainerList>
        <FooterComponent />
      </Container>
    </>
  );
};
