import car from "../../assets/car.png";
import {
  CardSection,
  CardLi,
  DivUserInfo,
  DivCarDetails,
  DivCarItems,
  CarTagActive,
  CarTagInactive,
  CarTagGoodDeal,
  DivBtnsCard,
  DivCardText,
  DivCardTitle,
} from "./style";
import { StyledText } from "../../styles/tipography";
import { InitialsCircle } from "../initialsCircle";
import { StyledButton } from "../../styles/buttons";
import { iProductItem } from "../../contexts/productContext/types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import carImage from "../../assets/car.png";

export const CardCar = (car: iProductItem) => {
  const navigate = useNavigate();
  const { setCarSeller } = useContext(ProductContext);

  const setActionOverCarCard = (selectedCar: iProductItem) => {
    console.log("SELECTED CAR", selectedCar);
    setCarSeller(selectedCar);
    // navigate("/profileview");
    navigate("/anouncement");
  };

  return (
    <CardLi id={`${car.id}`} onClick={() => setActionOverCarCard(car)}>
      <a>
        <div>
          <img src={carImage} />
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
            {" "}
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
              {`R$ ${car.price}`}
            </StyledText>
          </DivCarDetails>
          {/* <DivBtnsCard>
            {" "}
            <StyledButton buttonStyle={"sm"} buttonColor="outline1">
              {`Filtros`}
            </StyledButton>
            <StyledButton
              buttonStyle={"sm"}
              buttonColor="outline1"
              onClick={showCarDetails}
            >
              {`Ver detalhes`}
            </StyledButton>
          </DivBtnsCard> */}
        </CardSection>
      </a>
    </CardLi>
  );
};
