import {
  BtnMenuHeader,
  DivHeader,
  DivLinkHeader,
  DivMenu,
  Header,
} from "./style";
import logo_blue from "../../assets/logo_blue.png";
import { StyledText } from "../../styles/tipography";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export function HeaderNotLoggedIn() {
  const [menu, setMenu] = useState(false);

  return (
    <Header id="header">
      <DivHeader>
        <img src={logo_blue}></img>
        <DivLinkHeader>
          <StyledText tag="a" textStyle="body-1-600" textColor="grey2">
            {`Fazer Login`}
          </StyledText>
          <StyledText tag="a" textStyle="body-1-600" textColor="grey2">
            {`Cadastrar`}
          </StyledText>
        </DivLinkHeader>
        <BtnMenuHeader onClick={() => setMenu(!menu)}>
          {menu ? (
            <AiOutlineClose size={22} color={"#0b0d0d"} />
          ) : (
            <AiOutlineMenu size={22} color={"#0b0d0d"} />
          )}
        </BtnMenuHeader>
      </DivHeader>
      <DivMenu display={menu}>
        <div>
          <StyledText tag="a" textStyle="body-1-600" textColor="grey2">
            {`Fazer Login`}
          </StyledText>

          <StyledText tag="a" textStyle="body-1-600" textColor="grey2">
            {`Cadastrar`}
          </StyledText>
        </div>
      </DivMenu>
    </Header>
  );
}
