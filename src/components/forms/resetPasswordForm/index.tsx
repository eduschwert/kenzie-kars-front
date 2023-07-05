import { SubmitHandler, useForm } from "react-hook-form";
import { CssTextField } from "../muiStyle";
import { ContainerFormReset, FormReset } from "./style";
import { StyledText } from "../../../styles/tipography";
import { zodResolver } from "@hookform/resolvers/zod";
import { iPasswordRequest, passwordSchema } from "./schema";
import { StyledButton } from "../../../styles/buttons";
import { SyncLoader } from "react-spinners";
import { useUser } from "../../../hooks/useUser";

export const ResetPasswordForm = ({ token }: { token: string }) => {
  const { resetPasswordUser, spinner } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iPasswordRequest>({
    mode: "onTouched",
    resolver: zodResolver(passwordSchema),
  });
  const submit: SubmitHandler<iPasswordRequest> = (data) => {
    const { password } = data;
    resetPasswordUser(password, token);
  };

  return (
    <FormReset onSubmit={handleSubmit(submit)}>
      <ContainerFormReset>
        <StyledText tag="p" textStyle="heading-4-500" textColor="grey2">
          {`Digite a sua nova senha`}
        </StyledText>
        <CssTextField
          required
          label="Senha"
          variant="outlined"
          size="small"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
        />
        <CssTextField
          required
          label="Confirmar senha"
          variant="outlined"
          size="small"
          type="password"
          {...register("passwordConfirm")}
          error={!!errors.passwordConfirm}
          helperText={errors.passwordConfirm && errors.passwordConfirm.message}
        />
        <StyledButton
          type="submit"
          buttonStyle={"bg"}
          buttonColor={"brand1"}
          width="100%"
          disabled={!isValid}
        >
          {spinner ? <SyncLoader color="#FFFFFF" size={8} /> : "Enviar"}
        </StyledButton>
      </ContainerFormReset>
    </FormReset>
  );
};
