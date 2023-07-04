import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { CssTextField } from "../forms/muiStyle";
import { useForm } from "react-hook-form";
import { DivBtns, DivTitle, Form, StyledRegForm, StyledTitle } from "./style";
import { StyledButton } from "../../styles/buttons";
import { AiOutlineClose } from "react-icons/ai";
import { commentSchema, iComment } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext/UserContext";
import { SyncLoader } from "react-spinners";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { ProductContext } from "../../contexts/productContext";

interface iProp {
  toggleModal: () => void;
  id: string;
  content: string;
}

export function ModalPatchComment({ toggleModal, id, content }: iProp) {
  const [spinner, setSpinner] = useState(false);
  const [contentValue, setContentValue] = useState(content);
  const { getComments } = useContext(ProductContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iComment>({
    mode: "onTouched",
    resolver: yupResolver(commentSchema),
  });

  async function submitForm(data: iComment) {
    setSpinner(true);
    const token = localStorage.getItem("@KenzieKars:token");
    try {
      const response = await api.put(`comments/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setSpinner(false);
      toggleModal();
      getComments();
      toast.success("Comentário atualizado com sucesso!");
    } catch (error) {
      setSpinner(false);
      console.error(error);
      toast.error(`Ops! Algo deu errado.`);
    }
  }

  return (
    <Modal toggleModal={toggleModal}>
      <StyledRegForm>
        <StyledTitle>
          <DivTitle>
            <StyledText
              tag="h3"
              textStyle="heading-6-500"
            >{`Editar comentário`}</StyledText>
            <button onClick={() => toggleModal()}>
              <AiOutlineClose size={22} color={"#0b0d0d"} />
            </button>
          </DivTitle>

          <StyledText tag="p" textStyle="heading-7-500">
            {`Novo comentário`}
          </StyledText>
        </StyledTitle>

        <Form onSubmit={handleSubmit(submitForm)} noValidate>
          <CssTextField
            required
            label="Descrição"
            variant="outlined"
            size="small"
            id="registerDescription"
            multiline
            rows={3}
            type="text"
            placeholder=""
            {...register("content")}
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
            error={!!errors.content}
            helperText={errors.content && errors.content.message}
          />

          <DivBtns>
            <div>
              {" "}
              <StyledButton
                onClick={() => toggleModal()}
                buttonStyle="sm-modal-edit"
                buttonColor="negative"
              >
                Cancelar
              </StyledButton>
              <StyledButton
                type="submit"
                buttonStyle="sm-modal-edit"
                buttonColor="brand1"
                disabled={spinner}
              >
                {spinner ? (
                  <SyncLoader color="#FFFFFF" size={8} />
                ) : (
                  "Salvar alterações"
                )}
              </StyledButton>
            </div>
          </DivBtns>
        </Form>
      </StyledRegForm>
    </Modal>
  );
}
