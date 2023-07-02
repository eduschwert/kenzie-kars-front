import { RxDotFilled } from "react-icons/rx";
import { StyledText } from "../../styles/tipography";
import { InitialsCircle } from "../initialsCircle";
import {
  BodyComment,
  CommentItem,
  DateComment,
  DivBtns,
  NameDiv,
  TitleComment,
} from "./style";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext/UserContext";
import { StyledButton } from "../../styles/buttons";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { ModalDeleteComment } from "../modalDeleteComment";

interface iProp {
  owner: string;
  name: string;
  date: string;
  content: string;
  id: string;
}

export function CommentItemLi({ owner, name, date, content, id }: iProp) {
  const [modalOpen, setModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("none");
  const [commentId, setCommentId] = useState("");
  const toggleModal = () => setModalOpen(!modalOpen);
  const { user } = useContext(UserContext);

  function compareDatesComment(date: string) {
    const today: any = new Date();
    const commentDate: any = new Date(date);

    const totalDistance = Math.abs(today - commentDate);
    const daysDistance = Math.floor(totalDistance / (1000 * 60 * 60 * 24));
    const hoursDistance = Math.floor(totalDistance / (1000 * 60 * 60));
    const minutesDistance = Math.floor(totalDistance / (1000 * 60));
    const monthsDistance = Math.floor(daysDistance / 30);

    if (minutesDistance < 1) {
      return "agora mesmo";
    } else if (minutesDistance === 1) {
      return "1 minuto atrás";
    } else if (hoursDistance < 1) {
      return `${minutesDistance} minutos atrás`;
    } else if (hoursDistance === 1) {
      return "1 hora atrás";
    } else if (daysDistance < 1) {
      return `${hoursDistance} horas atrás`;
    } else if (daysDistance === 1) {
      return "1 dia atrás";
    } else if (daysDistance < 30) {
      return `${daysDistance} dias atrás`;
    } else if (daysDistance < 60) {
      return "1 mês atrás";
    } else {
      return `${monthsDistance} meses atrás`;
    }
  }
  return (
    <CommentItem>
      {modalOpen && typeModal == "delete" ? (
        <ModalDeleteComment toggleModal={toggleModal} id={commentId} />
      ) 
      // :   modalOpen && typeModal == "edit" ? (
      //   <ModalDeleteUser toggleModal={toggleModal} id={commentId} />
      // )
       : null}
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
        {owner == user?.id ? (
          <DivBtns>
            <StyledButton
              onClick={() => {
                toggleModal();
                setTypeModal("edit");
                setCommentId(id);
              }}
              buttonStyle={"sm-comment"}
              buttonColor="outlineBrand1"
            >
              {<BsFillPencilFill size={20} color={"#4529e6"} />}
            </StyledButton>

            <StyledButton
              onClick={() => {
                toggleModal();
                setTypeModal("delete");
                setCommentId(id);
              }}
              buttonStyle={"sm-comment"}
              buttonColor="outlineBrand1"
            >
              {<BsFillTrashFill size={20} color={"#4529e6"} />}
            </StyledButton>
          </DivBtns>
        ) : (
          ""
        )}
      </BodyComment>
    </CommentItem>
  );
}
