import { useLocation } from "react-router-dom";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { FooterComponent } from "../../components/footer";
import { RegisterFormMui } from "../../components/forms/registerFormMui";
import { RegisterSection, RegisterFormDiv } from "./style";

export const Register = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <HeaderNotLoggedIn />
      <main>
        <RegisterSection>
          <RegisterFormDiv>
            <RegisterFormMui />
          </RegisterFormDiv>
        </RegisterSection>
      </main>
      <FooterComponent />
    </>
  );
};
