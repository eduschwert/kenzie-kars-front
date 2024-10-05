import { Footer } from "../../components/footer";
import { FormLogin } from "../../components/formLogin";
import { StyledDivFullPage } from "./style";

export const LoginPage = () => {
  return (
    <>
      <StyledDivFullPage>
        <div className="headerHeight"></div>
        <main className="form">
          <FormLogin />
        </main>
        <Footer />
      </StyledDivFullPage>
    </>
  );
};
