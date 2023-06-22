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
} from "./style";
import { StyledText } from "../../styles/tipography";
import { InitialsCircle } from "../initialsCircle";
import { StyledButton } from "../../styles/buttons";
import { iProductItem } from "../../contexts/productContext/types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";

export const CardCar = ({
  id,
  brand,
  model,
  color,
  year,
  fuel,
  mileage,
  price,
  fipePrice,
  coverImage,
  description,
  is_good_buy,
  seller,
}: iProductItem) => {
  const showCarDetails = () => {
    console.log("SHOW CAR DETAILS");
    console.log(
      id,
      brand,
      model,
      color,
      year,
      fuel,
      mileage,
      price,
      fipePrice,
      coverImage,
      description,
      is_good_buy,
      seller
    );
  };

  const navigate = useNavigate();
  const { setCarSeller } = useContext(ProductContext);

  const setActionOverCarCard = () => {
    console.log(seller);
    setCarSeller(seller);
    navigate("/anouncement");
  };

  return (
    <CardLi id={`${id}`} onClick={() => setActionOverCarCard()}>
      <a>
        <div>
          <img src={coverImage} />
          {is_good_buy && (
            <CarTagGoodDeal>
              <StyledText tag="p" textStyle="body-2-500" textColor="white">
                {`$`}
              </StyledText>
            </CarTagGoodDeal>
          )}
        </div>
        <CardSection>
          <StyledText tag="p" textStyle="body-1-600" textColor="grey1">
            {`${brand} - ${model}`}
          </StyledText>
          <DivCardText>
            <StyledText tag="p" textStyle="body-2-400" textColor="grey2">
              {description}
            </StyledText>
          </DivCardText>

          <DivUserInfo>
            {" "}
            <div>
              <InitialsCircle text="SL" />
            </div>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              {seller.name}
            </StyledText>
          </DivUserInfo>
          <DivCarDetails>
            <DivCarItems>
              <StyledText tag="p" textStyle="body-2-500" textColor="brand1">
                {`${mileage} km`}
              </StyledText>
              <StyledText tag="p" textStyle="body-2-500" textColor="brand1">
                {year}
              </StyledText>
            </DivCarItems>
            <StyledText tag="p" textStyle="heading-7-600" textColor="grey1">
              {`R$ ${price}`}
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
