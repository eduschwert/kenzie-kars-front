import { RxDotFilled } from "react-icons/rx";
import { StyledText } from "../../styles/tipography";
import { InitialsCircle } from "../initialsCircle";
import {
  BodyComment,
  CommentItem,
  DateComment,
  NameDiv,
  TitleComment,
} from "./style";

interface iProp {
  name: string;
  date: string;
  content: string;
}

export function CommentItemLi({ name, date, content }: iProp) {
  function compareDatesComment(date: string) {
    const today: any = new Date();
    const commentDate: any = new Date(date);

    const totalDistance = Math.abs(today - commentDate);
    const daysDistance = Math.ceil(totalDistance / (1000 * 60 * 60 * 24));
    const monthsDistance = Math.ceil(daysDistance / 30);

    if (daysDistance < 1) {
      return "hoje";
    } else if (totalDistance === 1) {
      return "1 dia atrás";
    } else if (daysDistance < 30) {
      return `${daysDistance} dias atrás`;
    } else if (monthsDistance === 1) {
      return "1 mês atrás";
    } else {
      return `${monthsDistance} meses atrás`;
    }
  }
  return (
    <CommentItem>
      <TitleComment>
        {" "}
        <NameDiv>
          <InitialsCircle text={name.substring(0, 2).toUpperCase()} />
          <StyledText tag="p" textStyle={"body-1-600"} textColor="grey1">
            {name}
          </StyledText>
        </NameDiv>
        <DateComment>
          <RxDotFilled size={20} color={"#868e96"} />
          <StyledText tag="p" textStyle={"body-2-400"} textColor="grey3">
            {compareDatesComment(date)}
          </StyledText>
        </DateComment>
      </TitleComment>
      <BodyComment>
        <StyledText tag="p" textStyle={"body-2-400"} textColor="grey2">
          {content}
        </StyledText>
      </BodyComment>
    </CommentItem>
  );
}
