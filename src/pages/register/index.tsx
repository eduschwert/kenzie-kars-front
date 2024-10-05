import { Footer } from "../../components/footer";
import { FormRegister } from "../../components/formRegister";
import { StyledDivFullPage } from "./style";

export const RegisterPage = () => {
  return (
    <>
      <StyledDivFullPage>
        <div className="headerHeight"></div>
        <main className="form">
          <FormRegister />
        </main>
        <Footer />
      </StyledDivFullPage>
    </>
  );
};
