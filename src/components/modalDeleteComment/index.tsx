import { ClipLoader } from "react-spinners";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { useModal, useUser } from "../../hooks/useContexts";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { StyledDivFlexEnd, StyledDivModalBody } from "./style";
import { api } from "../../services/api";
import {
  iCommentResponse,
  iVehicleResponseWithUserAndImagesAndCommentsPartial,
} from "../../interfaces";

export const ModalDeleteComment = ({
  comment,
  setVehicle,
}: {
  comment: iCommentResponse | null;
  setVehicle: React.Dispatch<
    React.SetStateAction<iVehicleResponseWithUserAndImagesAndCommentsPartial | null>
  >;
}) => {
  const [loading, setLoading] = useState(false);
  const { closeModal } = useModal();
  const { logoutUser } = useUser();

  const deleteComment = async (commentId: string | undefined) => {
    try {
      setLoading(true);

      await api.delete(`comments/${commentId}`);

      setVehicle((prevVehicle) => {
        if (!prevVehicle) return null;

        const updatedComments = prevVehicle.comments?.filter(
          (comment) => comment.id !== commentId
        );

        return {
          ...prevVehicle,
          comments: updatedComments,
        };
      });
      toast.success("Comentário deletado com sucesso");
      closeModal();
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          closeModal();
          logoutUser();
          toast.error(error.response?.data.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title="Excluir comentário">
      <StyledDivModalBody>
        <StyledText tag="h2" $textStyle="heading-7-500" $textColor="grey1">
          Tem certeza que deseja excluir seu comentário?
        </StyledText>
        <StyledText tag="p" $textStyle="body-1-400" $textColor="grey2">
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          comentário.
        </StyledText>
        <StyledDivFlexEnd>
          <div>
            <StyledButton
              onClick={closeModal}
              type="button"
              $buttonStyle="big"
              $buttonColor="negative"
            >
              Cancelar
            </StyledButton>
            <StyledButton
              onClick={() => deleteComment(comment?.id)}
              type="button"
              $buttonStyle="big"
              $buttonColor="alert"
              $minWidth="24rem"
            >
              {loading ? (
                <ClipLoader color="#F8F9FA" size={"3rem"} />
              ) : (
                "Sim, excluir meu comentário"
              )}
            </StyledButton>
          </div>
        </StyledDivFlexEnd>
      </StyledDivModalBody>
    </Modal>
  );
};
