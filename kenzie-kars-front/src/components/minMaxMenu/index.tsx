import { StyledText } from "../../styles/tipography";
import { HomePageMenuButtons, MinMaxButtons } from "./style";
import { iMinMax } from "./type";

export const MinMaxMenuButtons = ({ type }: iMinMax) => {
  console.log(type);
  return (
    <>
      <HomePageMenuButtons>
        <StyledText tag="h3" textStyle={"heading-7-600"} textColor="black">
          {`${type}`}
        </StyledText>
        <MinMaxButtons>
          <button type="button">Mínimo </button>
          <button type="button">Máximo </button>
        </MinMaxButtons>
      </HomePageMenuButtons>
    </>
  );
};
