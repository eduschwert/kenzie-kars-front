import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import {
  Flex,
  Flex2,
  ImageBox,
  StyledCar,
  StyledCarList,
  TextBox,
} from "./style";
import { iCarListProfileViewProps } from "./types";
import { useProduct } from "../../hooks/useProduct";
import { iProductItem } from "../../contexts/productContext/types";

export const CarListProfileView = ({ vehicles }: iCarListProfileViewProps) => {
  const formatteNumber = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  const navigate = useNavigate();

  const { user } = useUser();
  const { setCarSeller } = useProduct();

  const actionOverDetails = (vehicle: iProductItem) => {
    navigate("/anouncement");
    setCarSeller(vehicle);
  };

  return (
    <StyledCarList>
      <ul>
        {vehicles?.map((vehicle) => (
          <StyledCar key={vehicle.id}>
            <ImageBox is_active={vehicle.is_active}>
              <div>{vehicle.is_active ? "Ativo" : "Inativo"}</div>
              <img src={vehicle.cover_image} alt="" />
            </ImageBox>
            <TextBox>
              <div>
                <StyledText
                  tag="h4"
                  textStyle="heading-7-600"
                  textColor="grey1"
                >
                  {vehicle.model}
                </StyledText>
              </div>
              <div>
                <StyledText tag="p" textStyle="body-2-400" textColor="grey2">
                  {vehicle.description}
                </StyledText>
              </div>
              <Flex>
                <div>
                  <div>
                    <StyledText
                      tag="p"
                      textStyle="heading-7-500"
                      textColor="brand1"
                    >
                      {`${vehicle.mileage} km`}
                    </StyledText>
                  </div>
                  <div>
                    <StyledText
                      tag="p"
                      textStyle="heading-7-500"
                      textColor="brand1"
                    >
                      {vehicle.year}
                    </StyledText>
                  </div>
                  {/* <div>{vehicle.mileage}</div> */}
                  {/* <div>{vehicle.year}</div> */}
                </div>
                {/* <div> */}
                <StyledText tag="p" textStyle="heading-7-500" textColor="grey1">
                  {formatteNumber(vehicle.price)}
                </StyledText>
                {/* </div> */}
              </Flex>
              {user.id === vehicle.seller.id && (
                <Flex2>
                  <StyledButton
                    buttonStyle="sm"
                    buttonColor="outline1"
                    width="80px"
                  >
                    Editar
                  </StyledButton>
                  <StyledButton
                    buttonStyle="sm"
                    buttonColor="outline1"
                    width="126px"
                    onClick={() => actionOverDetails(vehicle)}
                  >
                    Ver detalhes
                  </StyledButton>
                </Flex2>
              )}
            </TextBox>
          </StyledCar>
        ))}
      </ul>
    </StyledCarList>
  );
};
