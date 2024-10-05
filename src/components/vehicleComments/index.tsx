import { ClipLoader } from "react-spinners";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { iCommentResponse } from "../../interfaces";
import { StyledText } from "../../styles/tipography";
import { UserAvatar } from "../userAvatar";
import { StyledUl } from "./style";
import { useModal, useUser } from "../../hooks/useContexts";

export const VehicleComments = ({
  comments,
  setComment,
}: {
  comments: iCommentResponse[] | null | undefined;
  setComment: React.Dispatch<React.SetStateAction<iCommentResponse | null>>;
}) => {
  const { user } = useUser();
  const { openModal, setModalType } = useModal();
  return (
    <>
      <StyledUl>
        {comments ? (
          comments.length > 0 ? (
            comments.map((comment, i) => (
              <li key={i} className="comment">
                <div className="commentUserInformation">
                  <UserAvatar
                    size="small"
                    color="#4529E6"
                    username={comment.user.name}
                  />
                  <StyledText
                    tag="h5"
                    $textStyle="body-2-500"
                    $textColor="grey1"
                  >
                    {comment.user.name}
                  </StyledText>
                  <div className="circle"></div>
                  <span>
                    {formatDistanceToNow(comment.updatedAt, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                  {comment.user.id === user?.id && (
                    <>
                      <button
                        onClick={() => {
                          setComment(comment);
                          openModal();
                          setModalType("editComment");
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          setComment(comment);
                          openModal();
                          setModalType("deleteComment");
                        }}
                      >
                        Excluir
                      </button>
                    </>
                  )}
                </div>
                <StyledText tag="p" $textStyle="body-2-400" $textColor="grey2">
                  {comment.content}
                </StyledText>
              </li>
            ))
          ) : (
            <StyledText tag="p" $textStyle="body-1-600" $textColor="grey1">
              Nenhum comentário ainda
            </StyledText>
          )
        ) : (
          <ClipLoader color="#212529" size={"5rem"} />
        )}
      </StyledUl>
    </>
  );
};
