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
  const location = useLocation();

  return (
    <Header id="header">
      <DivHeader>
        <a>
          <img src={logo_blue}></img>
        </a>

        <DivLinkHeader>
          <StyledButton
            href="/login"
            tag="a"
            buttonStyle={"bg"}
            buttonColor={location.pathname !== "/login" ? "link" : "disable"}
            disabled={location.pathname !== "/login" ? false : true}
          >{`Fazer Login`}</StyledButton>
          <StyledButton
            href="/register"
            tag="a"
            buttonStyle={"bg"}
            buttonColor={
              location.pathname !== "/register" ? "outline1" : "disable"
            }
            disabled={location.pathname !== "/register" ? false : true}
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
            tag="Link"
            to="/login"
            buttonStyle={"sm"}
            buttonColor={location.pathname !== "/login" ? "link" : "disable"}
            disabled={location.pathname !== "/login" ? false : true}
          >{`Fazer Login`}</StyledButton>
          <StyledButton
            tag="Link"
            to="/register"
            buttonStyle={"sm-header"}
            buttonColor={
              location.pathname !== "/register" ? "outline1" : "disable"
            }
            disabled={location.pathname !== "/register" ? false : true}
          >{`Cadastrar`}</StyledButton>
        </div>
      </DivMenu>
    </Header>
  );
}
