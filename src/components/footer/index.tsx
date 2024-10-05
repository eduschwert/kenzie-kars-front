import { StyledButtonFooter, StyledFooter } from "./style";
import logo from "../../assets/logoFooter.svg";
import up from "../../assets/up.svg";
import { StyledText } from "../../styles/tipography";

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledFooter>
      <div className="footerContainer">
        <img src={logo} alt="Logo" />
        <StyledText tag="p" $textStyle="body-2-400" $textColor="white">
          @ 2022 - Todos os direitos reservados
        </StyledText>
        <StyledButtonFooter onClick={handleScrollToTop}>
          <img src={up} alt="" />
        </StyledButtonFooter>
      </div>
    </StyledFooter>
  );
};
