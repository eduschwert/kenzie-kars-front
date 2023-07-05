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
import { iProductItem } from "../../contexts/productContext/types";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { CarList } from "../../components/carList";
import { FooterComponent } from "../../components/footer";
import { CustomIconsPagination } from "../../components/pagination";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const ProfileView = () => {
  const [vehicles, setVehicles] = useState<null | iProductItem[]>(null);
  const { user } = useUser();
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const initials =
    vehicles && vehicles[0]?.seller.name.substring(0, 2)?.toUpperCase();

  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    } else {
      const fetchSellerCars = async () => {
        try {
          const response = await api.get(`vehicles/user/${userId}`);
          setVehicles(response.data.data);
        } catch (error: unknown) {
          console.error(error);
          if (axios.isAxiosError(error)) {
            console.log("dasdsadsadasdas");
            const axiosError = error as AxiosError;
            if (axiosError.response) {
              const status = axiosError.response.status;
              if (status === 404 || status === 400) {
                toast.error("Usuário não encontrado");
              } else if (axiosError.code === "ECONNABORTED") {
                toast.error("Erro de timeout. Tente novamente mais tarde.");
              }
            }
          }
          navigate("/");
        }
      };
      fetchSellerCars();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVehiclesPaginationProfile = async (
    perPage: number,
    page: number
  ) => {
    try {
      const response = await api.get(
        `vehicles/user/${userId}?perPage=${perPage}&page=${page}`
      );

      setVehicles(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };
  console.log();
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
                {vehicles && vehicles[0]?.seller.name}
              </StyledText>
              <StyledDiv>Anunciante</StyledDiv>
            </Flex>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              {vehicles && vehicles[0]?.seller.description}
            </StyledText>
          </div>
        </PerfilBox>
        <ContainerList>
          <CarList cars={vehicles} />
          <CustomIconsPagination
            getVehiclesPaginationProfile={getVehiclesPaginationProfile}
            totalPagesOtherPage={totalPages}
          />
        </ContainerList>
        <FooterComponent />
      </Container>
    </>
  );
};
