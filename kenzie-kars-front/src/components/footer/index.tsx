import { DivFooter, Footer, LinkFooter } from "./style";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import logo from "../../assets/logo.png";
import { StyledText } from "../../styles/tipography";

export function FooterComponent() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Footer>
      <DivFooter>
        <img src={logo} alt="Logo" />
        <StyledText tag="p" textStyle="body-2-400" textColor="white">
          @ 2022 - Todos os direitos reservados
        </StyledText>
        <LinkFooter onClick={handleScrollToTop}>
          <MdKeyboardDoubleArrowUp size="16px" color="#FFFFFF" />
        </LinkFooter>
      </DivFooter>
    </Footer>
  );
}
