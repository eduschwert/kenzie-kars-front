import { FooterComponent } from "../../components/footer";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { ContainerResetPassword, ContentResetPassword } from "./style";
import { SendEmailResetPasswordForm } from "../../components/forms/sendEmailResetPasswordForm";

export const SendEmailResetPasswordPage = () => {
  return (
    <ContainerResetPassword>
      <HeaderNotLoggedIn />
      <ContentResetPassword>
        <SendEmailResetPasswordForm />
      </ContentResetPassword>
      <FooterComponent />
    </ContainerResetPassword>
  );
};
