import { FooterComponent } from "../../components/footer";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { LoginFormDiv, LoginSection } from "./style";
import { LoginFormMui } from "../../components/forms/loginFormMui";

export const Login = () => {
  return (
    <>
      <HeaderNotLoggedIn />
      <main>
        <LoginSection>
          <LoginFormDiv>
            <LoginFormMui />
          </LoginFormDiv>
        </LoginSection>
      </main>
      <FooterComponent />
    </>
  );
};
