import { DivFooter, Footer, LinkFooter } from "./style";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import logo from "../../assets/logo.png";
import { StyledText } from "../../styles/tipography";

export function FooterComponent() {
  return (
    <Footer>
      <DivFooter>
        <img src={logo}></img>
        <StyledText tag="p" textStyle="body-2-400" textColor="white">
          {`@ 2022 - Todos os direitos reservados`}
        </StyledText>
        <LinkFooter href="#id">
          <MdKeyboardDoubleArrowUp size="16px" color="#FFFFFF" />
        </LinkFooter>
      </DivFooter>
    </Footer>
  );
}
