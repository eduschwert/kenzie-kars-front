import { FooterComponent } from "../../components/footer";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { ContainerWrapper, LoginFormDiv, LoginSection } from "./style";
import { LoginFormMui } from "../../components/forms/loginFormMui";

export const Login = () => {
  return (
    <ContainerWrapper>
      <HeaderNotLoggedIn />
      <main>
        <LoginSection>
          <LoginFormDiv id="form_login">
            <LoginFormMui />
          </LoginFormDiv>
        </LoginSection>
      </main>
      <FooterComponent />
    </ContainerWrapper>
  );
};
