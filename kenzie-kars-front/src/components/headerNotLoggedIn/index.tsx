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
import { StyledButton } from "../../styles/buttons";
import { useLocation } from "react-router-dom";

export function HeaderNotLoggedIn() {
  const [menu, setMenu] = useState(false);
  // const location = useLocation();

  return (
    <Header id="header">
      <DivHeader>
        <a>
          <img src={logo_blue}></img>
        </a>

        <DivLinkHeader>
          <StyledButton
            tag="a"
            buttonStyle={"bg"}
            buttonColor="link"
            // buttonColor={location.pathname !== "/login" ? "link" : "disable"}
          >{`Fazer Login`}</StyledButton>
          <StyledButton
            tag="a"
            buttonStyle={"bg"}
            // buttonColor={
            //   location.pathname !== "/register" ? "outline1" : "disable"
            // }
            buttonColor="outline1"
          >{`Cadastrar`}</StyledButton>
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
          <StyledButton
            tag="a"
            buttonStyle={"sm"}
            // buttonColor={location.pathname !== "/login" ? "link" : "disable"}
            buttonColor="link"
          >{`Fazer Login`}</StyledButton>
          <StyledButton
            tag="a"
            buttonStyle={"sm-header"}
            // buttonColor={
            //   location.pathname !== "/register" ? "outline1" : "disable"
            // }
            buttonColor="outline1"
          >{`Cadastrar`}</StyledButton>
        </div>
      </DivMenu>
    </Header>
  );
}
