import { BtnFooter, DivFooter, Footer } from "./style";
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
        <BtnFooter>
          <MdKeyboardDoubleArrowUp size="16px" color="#FFFFFF" />
        </BtnFooter>
      </DivFooter>
    </Footer>
  );
}
