import { DivFooter, Footer, LinkFooter } from "./style";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import logo from "../../assets/logo.png";
import { StyledText } from "../../styles/tipography";
import { useLocation } from "react-router-dom";

export function FooterComponent() {
  const location = useLocation();

  return (
    <Footer>
      <DivFooter>
        <img src={logo}></img>
        <StyledText tag="p" textStyle="body-2-400" textColor="white">
          {`@ 2022 - Todos os direitos reservados`}
        </StyledText>
        <LinkFooter
          href={
            location.pathname == "/"
              ? "#advertising"
              : location.pathname == "/login"
              ? "#form_login"
              : "#form_register"
          }
        >
          <MdKeyboardDoubleArrowUp size="16px" color="#FFFFFF" />
        </LinkFooter>
      </DivFooter>
    </Footer>
  );
}
