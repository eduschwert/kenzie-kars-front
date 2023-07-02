import { AiOutlineClose } from "react-icons/ai";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { DivBtns, DivModalBody, DivTitle, StyledTitle } from "./style";
import { StyledButton } from "../../styles/buttons";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { iDefaultErrorResponse } from "../../interfaces/global";
import { useUser } from "../../hooks/useUser";

interface iProp {
  toggleModal: () => void;
  id: string;
}

export const ModalDeleteComment = ({ toggleModal, id }: iProp) => {
  const { logoutUser } = useUser();

  async function deleteUser() {
    const token = localStorage.getItem("@KenzieKars:token");
    try {
      await api.delete("users", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      logoutUser();
    } catch (error) {
      console.error(error);
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data.error}`);
    }
  }
  return <p></p>;
};
