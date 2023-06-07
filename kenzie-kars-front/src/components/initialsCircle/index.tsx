import { StyledText } from "../../styles/tipography";
import { CircleDiv } from "./style";

interface iProp {
  text: string;
}

export function InitialsCircle({ text }: iProp) {
  return (
    <CircleDiv>
      {" "}
      <StyledText tag="p" textStyle="button-medium-text" textColor="white">
        {text}
      </StyledText>
    </CircleDiv>
  );
}
