import { Navigate, useParams } from "react-router-dom";
import { FooterComponent } from "../../components/footer";
import { ResetPasswordForm } from "../../components/forms/resetPasswordForm";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { ContainerResetPassword, ContentResetPassword } from "./style";

export const ResetPasswordPage = () => {
  const { token } = useParams();
  return token ? (
    <ContainerResetPassword>
      <HeaderNotLoggedIn />
      <ContentResetPassword>
        <ResetPasswordForm token={token} />
      </ContentResetPassword>
      <FooterComponent />
    </ContainerResetPassword>
  ) : (
    <Navigate to="/" replace={true} />
  );
};
