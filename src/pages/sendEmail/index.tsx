import { Footer } from "../../components/footer";
import { FormSendEmail } from "../../components/formSendEmail";
import { StyledDivFullPage } from "./style";

export const SendEmailPage = () => {
  return (
    <>
      <StyledDivFullPage>
        <div className="headerHeight"></div>
        <main className="form">
          <FormSendEmail />
        </main>
        <Footer />
      </StyledDivFullPage>
    </>
  );
};
