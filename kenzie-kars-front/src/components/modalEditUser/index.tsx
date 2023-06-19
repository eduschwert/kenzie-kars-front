import { StyledText } from "../../styles/tipography";
import { Modal } from "../Modal";
import { CssTextField } from "../forms/muiStyle";

import {
  DivBtns,
  DivTitle,
  Form,
  StyledRegForm,
  StyledTitle,
  SubmitButton,
} from "./style";
import { StyledButton } from "../../styles/buttons";
import { AiOutlineClose } from "react-icons/ai";

interface iProp {
  toggleModal: () => void;
}

export const ModalEditUser = ({ toggleModal }: iProp) => {
  return (
    <Modal toggleModal={toggleModal}>
      <StyledRegForm>
        <StyledTitle>
          <DivTitle>
            <StyledText
              tag="h3"
              textStyle="heading-6-500"
            >{`Editar perfil`}</StyledText>
            <button onClick={() => toggleModal()}>
              <AiOutlineClose size={22} color={"#0b0d0d"} />
            </button>
          </DivTitle>

          <StyledText tag="p" textStyle="heading-7-500">
            {`Informações pessoais`}
          </StyledText>
        </StyledTitle>

        <Form
        // onSubmit={handleSubmit(submitForm)} noValidate
        >
          <CssTextField
            required
            label="Nome"
            variant="outlined"
            size="small"
            id="registerName"
            type="text"
            placeholder="Ex: Samuel Leão"
            // {...register("name")}
            // error={!!errors.name}
            // helperText={errors.name && errors.name.message}
          />

          <CssTextField
            required
            label="E-mail"
            variant="outlined"
            size="small"
            id="registerEmail"
            type="email"
            placeholder="ex: samuel@mail.com.br"
            // {...register("email")}
            // error={!!errors.email}
            // helperText={errors.email && errors.email.message}
            // onKeyUp={
            //   errorApi
            //     ? () => setErrorRegister(true)
            //     : () => setErrorRegister(false)
            // }
          />

          <CssTextField
            required
            label="CPF"
            variant="outlined"
            size="small"
            id="registerCPF"
            type="text"
            placeholder="000.000.000-00"
            // {...register("cpf")}
            // error={!!errors.cpf}
            // helperText={errors.cpf && errors.cpf.message}
          />

          <CssTextField
            required
            label="Celular"
            variant="outlined"
            size="small"
            id="registerCelular"
            type="text"
            placeholder="(DDD)90000-0000"
            // {...register("phone")}
            // error={!!errors.phone}
            // helperText={errors.phone && errors.phone.message}
          />
          <CssTextField
            required
            label="Data de nascimento"
            variant="outlined"
            size="small"
            id="registerBirthdate"
            type="date"
            placeholder=""
            InputLabelProps={{ shrink: true }}
            // {...register("birthdate")}
            // error={!!errors.birthdate}
            // helperText={errors.birthdate && errors.birthdate.message}
          />

          <CssTextField
            required
            label="Descrição"
            variant="outlined"
            size="small"
            id="registerDescription"
            type="text"
            placeholder=""
            // {...register("description")}
            // error={!!errors.description}
            // helperText={errors.description && errors.description.message}
          />

          <CssTextField
            required
            label="Senha"
            variant="outlined"
            size="small"
            id="registerPwd"
            type="password"
            placeholder="Digite a senha"
            // {...register("password")}
            // error={!!errors.password}
            // helperText={errors.password && errors.password.message}
          />

          <CssTextField
            required
            label="Confirmar senha"
            variant="outlined"
            size="small"
            id="registerConfirmPwd"
            type="password"
            placeholder="Confirme a senha"
            // {...register("confirmPassword")}
            // error={!!errors.confirmPassword}
            // helperText={
            //   errors.confirmPassword && errors.confirmPassword.message
            // }
          />

          {/* {errorApi ? <ErrorMsg>Email já existente</ErrorMsg> : <></>} */}
          {/* <SubmitButton>
            <StyledButton
              tag="button"
              type="submit"
              buttonStyle="bg-full"
              buttonColor="brand1"
                disabled={
                  !!(
                    errors.name ||
                    errors.email ||
                    errors.cpf ||
                    errors.phone ||
                    errors.birthdate ||
                    errors.description ||
                    errors.address?.cep ||
                    errors.address?.state ||
                    errors.address?.city ||
                    errors.address?.street_name ||
                    errors.address?.street_number ||
                    errors.address?.complement ||
                    errors.password ||
                    errors.confirmPassword
                  )
                }
            >
              
              {spinner ? (
                <SyncLoader color="#FFFFFF" size={8} />
              ) : (
                "Finalizar cadastro"
              )} 
             </StyledButton> */}
          {/* </SubmitButton> */}
          <DivBtns>
            <div>
              {" "}
              <StyledButton
                tag="button"
                onClick={() => toggleModal()}
                buttonStyle="sm-modal"
                buttonColor="negative"
              >
                Cancelar
              </StyledButton>
              <StyledButton
                tag="button"
                onClick={() => toggleModal()}
                buttonStyle="sm-modal"
                buttonColor="alert"
              >
                Excluir perfil
              </StyledButton>
            </div>

            <StyledButton
              tag="button"
              type="submit"
              buttonStyle="sm-modal"
              buttonColor="brand1"
            >
              Salvar alterações
            </StyledButton>
          </DivBtns>
        </Form>
      </StyledRegForm>
    </Modal>
  );
};
