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

export const CarListProfileView = ({ vehicles }: iCarListProfileViewProps) => {
  const formatteNumber = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

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
              <StyledText tag="h4" textStyle="heading-7-600" textColor="grey1">
                {vehicle.model}
              </StyledText>
              <StyledText tag="p" textStyle="body-2-400" textColor="grey2">
                {vehicle.description}
              </StyledText>
              <Flex>
                <div>
                  <div>{vehicle.mileage}</div>
                  <div>{vehicle.year}</div>
                </div>
                <StyledText tag="p" textStyle="heading-7-500" textColor="grey1">
                  {formatteNumber(vehicle.price)}
                </StyledText>
              </Flex>
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
                >
                  Ver detalhes
                </StyledButton>
              </Flex2>
            </TextBox>
          </StyledCar>
        ))}
      </ul>
    </StyledCarList>
  );
};
