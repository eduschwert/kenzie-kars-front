import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { FooterComponent } from "../../components/footer";
import { RegisterFormMui } from "../../components/forms/registerFormMui";
import { RegisterSection, RegisterFormDiv } from "./style";
import { ContainerWrapper } from "../login/style";

export const Register = () => {
  return (
    <ContainerWrapper>
      <HeaderNotLoggedIn />
      <main>
        <RegisterSection>
          <RegisterFormDiv id="form_register">
            <RegisterFormMui />
          </RegisterFormDiv>
        </RegisterSection>
      </main>
      <FooterComponent />
    </ContainerWrapper>
  );
};
