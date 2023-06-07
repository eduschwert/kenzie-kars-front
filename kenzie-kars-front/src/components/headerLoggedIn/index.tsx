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

export function HeaderLoggedIn() {
  const [menu, setMenu] = useState(false);

  return (
    <Header id="header">
      <DivHeader>
        <img src={logo_blue}></img>
        <DivInfoHeader>
          <div>
            <InitialsCircle text="SL" />
          </div>
          <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
            {`Samuel Leão`}
          </StyledText>
          <section>
            <MenuList>
              <li>
                <button>
                  {" "}
                  <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
                    {`Editar perfil`}
                  </StyledText>
                </button>
              </li>
              <li>
                <button>
                  {" "}
                  <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
                    {`Editar endereço`}
                  </StyledText>
                </button>
              </li>
              <li>
                <button>
                  {" "}
                  <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
                    {`Meus anúncios`}
                  </StyledText>
                </button>
              </li>
              <li>
                <button>
                  {" "}
                  <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
                    {`Sair`}
                  </StyledText>
                </button>
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
              <InitialsCircle text="SL" />
            </div>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              {`Samuel Leão`}
            </StyledText>
          </MenuUserInfo>

          <MenuUserItems>
            <li>
              <button>
                {" "}
                <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
                  {`Editar perfil`}
                </StyledText>
              </button>
            </li>
            <li>
              <button>
                {" "}
                <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
                  {`Editar endereço`}
                </StyledText>
              </button>
            </li>
            <li>
              <button>
                {" "}
                <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
                  {`Meus anúncios`}
                </StyledText>
              </button>
            </li>
            <li>
              <button>
                {" "}
                <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
                  {`Sair`}
                </StyledText>
              </button>
            </li>
          </MenuUserItems>
        </div>
      </DivMenu>
    </Header>
  );
}
