import { Footer } from "../../components/footer";
import { FormResetPassword } from "../../components/formResetPassword";
import { StyledDivFullPage } from "./style";

export const ResetPasswordPage = () => {
  return (
    <>
      <StyledDivFullPage>
        <div className="headerHeight"></div>
        <main className="form">
          <FormResetPassword />
        </main>
        <Footer />
      </StyledDivFullPage>
    </>
  );
};
