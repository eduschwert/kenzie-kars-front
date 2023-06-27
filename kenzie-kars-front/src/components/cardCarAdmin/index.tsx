import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { Flex, Flex2, ImageBox, StyledCar, TextBox } from "./style";
import { useProduct } from "../../hooks/useProduct";
import { iProductItem } from "../../contexts/productContext/types";
import { iCardCarAdminProps } from "./types";

export const CardCarAdmin = ({ car }: iCardCarAdminProps) => {
  const formatteNumber = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  const navigate = useNavigate();

  const { setCarSeller } = useProduct();

  const actionOverDetails = (car: iProductItem) => {
    navigate("/anouncement");
    setCarSeller(car);
  };

  return (
    <StyledCar key={car.id}>
      <ImageBox is_active={car.is_active}>
        <div>{car.is_active ? "Ativo" : "Inativo"}</div>
        <img src={car.cover_image} alt="" />
      </ImageBox>
      <TextBox>
        <div>
          <StyledText tag="h4" textStyle="heading-7-600" textColor="grey1">
            {car.model}
          </StyledText>
        </div>
        <div>
          <StyledText tag="p" textStyle="body-2-400" textColor="grey2">
            {car.description}
          </StyledText>
        </div>
        <Flex>
          <div>
            <div>
              <StyledText tag="p" textStyle="heading-7-500" textColor="brand1">
                {`${car.mileage} km`}
              </StyledText>
            </div>
            <div>
              <StyledText tag="p" textStyle="heading-7-500" textColor="brand1">
                {car.year}
              </StyledText>
            </div>
          </div>
          <StyledText tag="p" textStyle="heading-7-500" textColor="grey1">
            {formatteNumber(car.price)}
          </StyledText>
        </Flex>
        <Flex2>
          <StyledButton buttonStyle="sm" buttonColor="outline1">
            Editar
          </StyledButton>
          <StyledButton
            buttonStyle="sm"
            buttonColor="outline1"
            onClick={() => actionOverDetails(car)}
          >
            Ver detalhes
          </StyledButton>
        </Flex2>
      </TextBox>
    </StyledCar>
  );
};
