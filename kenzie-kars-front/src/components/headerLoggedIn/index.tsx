import {
  BtnMenuHeader,
  DivHeader,
  DivInfoHeader,
  DivMenu,
  Header,
  MenuList,
  MenuUserInfo,
  MenuUserItems,
} from "./style";
import logo_blue from "../../assets/logo_blue.png";
import { StyledText } from "../../styles/tipography";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { InitialsCircle } from "../initialsCircle";
import { useLocation } from "react-router-dom";
import { iUserResponse } from "../../contexts/userContext/types";
import { StyledButton } from "../../styles/buttons";
import { ModalEditUser } from "../modalEditUser";

interface iProp {
  user: iUserResponse;
}

export function HeaderLoggedIn({ user }: iProp) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const [modalType, setMenuType] = useState("user");
  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const location = useLocation();

  return (
    <Header id="header">
      {isOpenModal && modalType == "user" ? (
        <ModalEditUser toggleModal={toggleModal} />
      ) : null}
      <DivHeader>
        <a href={location.pathname !== "/" ? "/" : ""}>
          <img src={logo_blue}></img>
        </a>

        <DivInfoHeader>
          <div>
            {" "}
            <InitialsCircle
              text={user.name ? user.name.substring(0, 2).toUpperCase() : ""}
            />{" "}
          </div>
          <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
            {user.name}
          </StyledText>
          <section>
            <MenuList>
              <li>
                <StyledButton
                  tag="button"
                  buttonStyle={"sm-header"}
                  buttonColor="link"
                  onClick={() => {
                    toggleModal();
                    setMenuType("user");
                  }}
                >{`Editar perfil`}</StyledButton>
              </li>
              <li>
                <StyledButton
                  tag="button"
                  buttonStyle={"sm-header"}
                  buttonColor="link"
                >{`Editar endereço`}</StyledButton>
              </li>
              <li>
                <StyledButton
                  tag="button"
                  buttonStyle={"sm-header"}
                  buttonColor="link"
                >{`Meus anúncios`}</StyledButton>
              </li>
              <li>
                <StyledButton
                  tag="button"
                  buttonStyle={"sm-header"}
                  buttonColor="link"
                >{`Sair`}</StyledButton>
              </li>
            </MenuList>
          </section>
        </DivInfoHeader>
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
          <MenuUserInfo>
            <div>
              {" "}
              <InitialsCircle
                text={user.name ? user.name.substring(0, 2).toUpperCase() : ""}
              />{" "}
            </div>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              {user.name}
            </StyledText>
          </MenuUserInfo>

          <MenuUserItems>
            <li>
              <StyledButton
                tag="button"
                buttonStyle={"sm-header"}
                buttonColor="link"
                onClick={() => {
                  toggleModal();
                  setMenuType("user");
                }}
              >{`Editar perfil`}</StyledButton>
            </li>
            <li>
              <StyledButton
                tag="button"
                buttonStyle={"sm-header"}
                buttonColor="link"
              >{`Editar endereço`}</StyledButton>
            </li>
            <li>
              <StyledButton
                tag="button"
                buttonStyle={"sm-header"}
                buttonColor="link"
              >{`Meus anúncios`}</StyledButton>
            </li>
            <li>
              <StyledButton
                tag="button"
                buttonStyle={"sm-header"}
                buttonColor="link"
              >{`Sair`}</StyledButton>
            </li>
          </MenuUserItems>
        </div>
      </DivMenu>
    </Header>
  );
}
