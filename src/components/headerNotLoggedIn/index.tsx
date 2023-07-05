import {
  BtnMenuHeader,
  DivHeader,
  DivLinkHeader,
  DivMenu,
  Header,
} from "./style";
import logo_blue from "../../assets/logo_blue.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { StyledLinkButton } from "../../styles/buttons";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function HeaderNotLoggedIn() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <Header id="header">
      <DivHeader>
        <Link to={"/"}>
          <img src={logo_blue}></img>
        </Link>

        <DivLinkHeader>
          <StyledLinkButton
            to="/login"
            buttonStyle={"bg"}
            buttonColor={"link"}
            disabled={location.pathname === "/login"}
          >{`Fazer Login`}</StyledLinkButton>
          <StyledLinkButton
            to="/register"
            buttonStyle={"bg"}
            buttonColor={"outline2"}
            disabled={location.pathname === "/register"}
          >
            {`Cadastrar`}
          </StyledLinkButton>
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
          <StyledLinkButton
            to="/login"
            buttonStyle={"bg"}
            buttonColor={"link"}
            disabled={location.pathname === "/login"}
          >{`Fazer Login`}</StyledLinkButton>
          <StyledLinkButton
            to="/register"
            buttonStyle={"bg"}
            buttonColor={"outline2"}
            disabled={location.pathname === "/register"}
          >{`Cadastrar`}</StyledLinkButton>
        </div>
      </DivMenu>
    </Header>
  );
}
