import { useLocation } from "react-router-dom";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { FooterComponent } from "../../components/footer";
import { RegisterFormMui } from "../../components/forms/registerFormMui";
import { RegisterSection, RegisterFormDiv } from "./style";
import { ContainerWrapper } from "../login/style";

export const Register = () => {
  const location = useLocation();
  console.log(location.pathname);

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
