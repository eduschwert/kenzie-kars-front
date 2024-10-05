import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import axios from "axios";

import {
  iCommentResponse,
  iVehicleResponseWithUserAndImagesAndCommentsPartial,
} from "../../interfaces";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { UserAvatar } from "../userAvatar";
import { StyledForm } from "./style";
import { commentSchema, iCommentRequest } from "./schema";
import { api } from "../../services/api";
import { useUser } from "../../hooks/useContexts";

export const VehicleCommentCreate = ({
  vehicle,
  setVehicle,
}: {
  vehicle: iVehicleResponseWithUserAndImagesAndCommentsPartial;
  setVehicle: React.Dispatch<
    React.SetStateAction<iVehicleResponseWithUserAndImagesAndCommentsPartial | null>
  >;
}) => {
  const { user, logoutUser } = useUser();

  const isVehicleOwner = vehicle.user.id === user?.id;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<iCommentRequest>({
    resolver: zodResolver(commentSchema),
    mode: "onTouched",
  });

  const [loading, setLoading] = useState(false);

  const submit: SubmitHandler<iCommentRequest> = async (formData) => {
    try {
      setLoading(true);

      const { data } = await api.post<iCommentResponse>(
        `comments/${vehicle.id}`,
        formData
      );

      setVehicle((prevVehicle) =>
        prevVehicle
          ? {
              ...prevVehicle,
              comments: prevVehicle.comments
                ? [data, ...prevVehicle.comments]
                : [data],
            }
          : null
      );
      reset();
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          toast.error(
            "O servidor está demorando muito para responder. Por favor, aguarde um momento e tente novamente."
          );
        } else if (error.response) {
          logoutUser();
          toast.error(error.response?.data.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <div className="commentInputUserInformation">
        <UserAvatar
          size="small"
          color="#4529E6"
          username={user ? user.name : ""}
        />
        <StyledText tag="h5" $textStyle="body-2-500" $textColor="grey1">
          {user ? user.name : ""}
        </StyledText>
      </div>
      <div className="commentInput">
        <textarea
          disabled={isVehicleOwner || !user}
          placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          {...register("content")}
        />
        <StyledButton
          disabled={isVehicleOwner || !user}
          $buttonStyle="big"
          $buttonColor="brand1"
          style={{ width: "13.5rem" }}
        >
          {loading ? <ClipLoader color="#F8F9FA" size={"3rem"} /> : "Comentar"}
        </StyledButton>
      </div>
      {errors.content && (
        <StyledText tag="span" $textStyle="body-2-500" $textColor="negative">
          {errors.content.message}
        </StyledText>
      )}
      <div className="inputSuggestions">
        <button
          type="button"
          disabled={isVehicleOwner || !user}
          onClick={() => setValue("content", "Gostei muito!")}
        >
          Gostei muito!
        </button>
        <button
          type="button"
          disabled={isVehicleOwner || !user}
          onClick={() => setValue("content", "Incrível")}
        >
          Incrível
        </button>
        <button
          type="button"
          disabled={isVehicleOwner || !user}
          onClick={() => setValue("content", "Recomendarei para meus amigos!")}
        >
          Recomendarei para meus amigos!
        </button>
      </div>
    </StyledForm>
  );
};
