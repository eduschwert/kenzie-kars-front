import { useUser } from "../../hooks/useUser";
import { StyledText } from "../../styles/tipography";
import { CircleDiv } from "./style";

interface iProp {
  text: string;
}

export function InitialsCircle({ text }: iProp) {
  const { user } = useUser();

  function colorCreator() {
    if (user?.name.substring(0, 2).toUpperCase() == text) {
      return "4529e6";
    } else {
      return Math.floor(Math.random() * 16777215).toString(16);
    }
  }

  return (
    <CircleDiv color={colorCreator()}>
      {" "}
      <StyledText tag="p" textStyle="button-medium-text" textColor="white">
        {text}
      </StyledText>
    </CircleDiv>
  );
}
