import {
  CardSection,
  CardLi,
  DivUserInfo,
  DivCarDetails,
  DivCarItems,
  CarTagGoodDeal,
  DivCardText,
  DivCardTitle,
} from "./style";
import { StyledText } from "../../styles/tipography";
import { InitialsCircle } from "../initialsCircle";
import { useNavigate } from "react-router-dom";
import carImage from "../../assets/car.png";
import { iProductItem } from "../../contexts/productContext/types";
import { useProduct } from "../../hooks/useProduct";
import { Link } from "react-router-dom";

export const CardCar = (car: iProductItem) => {
  const formatteNumber = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <CardLi id={`${car.id}`}>
      <Link to={`/anouncement/${car.id}`}>
        <div>
          <img src={car.cover_image} />
          {car.is_good_buy && (
            <CarTagGoodDeal>
              <StyledText tag="p" textStyle="body-2-500" textColor="white">
                {`$`}
              </StyledText>
            </CarTagGoodDeal>
          )}
        </div>
        <CardSection>
          <DivCardTitle>
            <StyledText tag="p" textStyle="body-1-600" textColor="grey1">
              {`${car.brand} - ${car.model}`}
            </StyledText>
          </DivCardTitle>
          <DivCardText>
            <StyledText tag="p" textStyle="body-2-400" textColor="grey2">
              {car.description}
            </StyledText>
          </DivCardText>

          <DivUserInfo>
            <div>
              <InitialsCircle text="SL" />
            </div>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              {car.seller.name}
            </StyledText>
          </DivUserInfo>
          <DivCarDetails>
            <DivCarItems>
              <StyledText tag="p" textStyle="body-2-500" textColor="brand1">
                {`${car.mileage} km`}
              </StyledText>
              <StyledText tag="p" textStyle="body-2-500" textColor="brand1">
                {car.year}
              </StyledText>
            </DivCarItems>
            <StyledText tag="p" textStyle="heading-7-600" textColor="grey1">
              {formatteNumber(car.price)}
            </StyledText>
          </DivCarDetails>
        </CardSection>
      </Link>
    </CardLi>
  );
};
