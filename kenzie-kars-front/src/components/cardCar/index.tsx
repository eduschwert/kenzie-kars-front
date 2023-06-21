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

export function CardCar() {
  return (
    <CardLi>
      <a>
        {" "}
        <div>
          <img src={car} />
          {/* <CarTagActive>
            {" "}
            <StyledText tag="p" textStyle="body-2-500" textColor="white">
              {`Ativo`}
            </StyledText>
          </CarTagActive> */}
          {/* <CarTagInactive>
            {" "}
            <StyledText tag="p" textStyle="body-2-500" textColor="white">
              {`Inativo`}
            </StyledText>
          </CarTagInactive> */}
          <CarTagGoodDeal>
            <StyledText tag="p" textStyle="body-2-500" textColor="white">
              {`$`}
            </StyledText>
          </CarTagGoodDeal>
        </div>
        <CardSection>
          <StyledText tag="p" textStyle="body-1-600" textColor="grey1">
            {`Product title stays here - max 1 line`}
          </StyledText>
          <DivCardText>
            <StyledText tag="p" textStyle="body-2-400" textColor="grey2">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem`}
            </StyledText>
          </DivCardText>

          {/* <DivUserInfo>
            {" "}
            <div>
              <InitialsCircle text="SL" />
            </div>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              {`Samuel Leão`}
            </StyledText>
          </DivUserInfo> */}
          <DivCarDetails>
            <DivCarItems>
              {" "}
              <StyledText tag="p" textStyle="body-2-500" textColor="brand1">
                {`0 KM`}
              </StyledText>
              <StyledText tag="p" textStyle="body-2-500" textColor="brand1">
                {`2019`}
              </StyledText>
            </DivCarItems>
            <StyledText tag="p" textStyle="heading-7-600" textColor="grey1">
              {`R$10.000,00`}
            </StyledText>
          </DivCarDetails>
          <DivBtnsCard>
            {" "}
            <StyledButton buttonStyle={"sm"} buttonColor="outline1">
              {`Filtros`}
            </StyledButton>
            <StyledButton buttonStyle={"sm"} buttonColor="outline1">
              {`Ver detalhes`}
            </StyledButton>
          </DivBtnsCard>
        </CardSection>
      </a>
    </CardLi>
  );
}
