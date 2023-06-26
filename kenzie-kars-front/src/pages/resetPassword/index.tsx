import { FooterComponent } from "../../components/footer";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { ContainerResetPassword, ContentResetPassword } from "./style";
import { ResetPasswordMui } from "../../components/forms/resetPasswordForm";

export const ResetPasswordPage = () => {
  return (
    <ContainerResetPassword>
      <HeaderNotLoggedIn />
      <ContentResetPassword>
        <ResetPasswordMui />
      </ContentResetPassword>
      <FooterComponent />
    </ContainerResetPassword>
  );
};
