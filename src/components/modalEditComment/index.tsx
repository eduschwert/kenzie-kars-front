import { ClipLoader } from "react-spinners";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { useModal, useUser } from "../../hooks/useContexts";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { StyledFormFlexCol } from "./style";
import { api } from "../../services/api";
import {
  iCommentResponse,
  iVehicleResponseWithUserAndImagesAndCommentsPartial,
} from "../../interfaces";
import { Input } from "../input";
import { commentSchema, iCommentUpdate } from "./schema";

export const ModalEditComment = ({
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

  const editComment = async (commentData: iCommentUpdate) => {
    try {
      setLoading(true);

      const { data } = await api.patch<iCommentResponse>(
        `comments/${comment?.id}`,
        commentData
      );
      setVehicle((prevVehicle) => {
        if (!prevVehicle) return null;

        const updatedComments = prevVehicle.comments?.map((comment) =>
          comment.id === data.id ? data : comment
        );

        return {
          ...prevVehicle,
          comments: updatedComments,
        };
      });

      toast.success("Comentário atualizado com sucesso");
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCommentUpdate>({
    resolver: zodResolver(commentSchema),
    mode: "onTouched",
    defaultValues: {
      content: comment?.content,
    },
  });

  const submit: SubmitHandler<iCommentUpdate> = async (data) => {
    editComment(data);
  };

  return (
    <Modal title="Editar comentário">
      <StyledFormFlexCol onSubmit={handleSubmit(submit)} noValidate>
        <StyledText tag="p" $textStyle="body-2-500" $textColor="grey1">
          Editar comentário
        </StyledText>
        <Input
          id="editComment"
          label="Comentário"
          textarea={true}
          register={register("content")}
          error={errors.content}
          disabled={loading}
        />
        <div className="flexRowEnd">
          <StyledButton
            onClick={closeModal}
            type="button"
            $buttonStyle="big"
            $buttonColor="negative"
          >
            Cancelar
          </StyledButton>
          <StyledButton
            $buttonStyle="big"
            $buttonColor="alert"
            $minWidth="24rem"
          >
            {loading ? (
              <ClipLoader color="#F8F9FA" size={"3rem"} />
            ) : (
              "Salvar alterações"
            )}
          </StyledButton>
        </div>
      </StyledFormFlexCol>
    </Modal>
  );
};
