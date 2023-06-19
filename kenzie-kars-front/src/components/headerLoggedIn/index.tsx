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

export function HeaderLoggedIn() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <Header id="header">
      <DivHeader>
        <a href={location.pathname !== "/" ? "/" : ""}>
          <img src={logo_blue}></img>
        </a>

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

// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { useState } from "react";
// import { InitialsCircle } from "../initialsCircle";
// import { useUser } from "../../hooks/useUser";
// import { iUserResponse } from "../../interfaces/user";
// import {
//   BtnMenuHeader,
//   DivHeader,
//   DivInfoHeader,
//   DivMenu,
//   Header,
//   MenuList,
//   MenuUserInfo,
//   MenuUserItems,
// } from "./style";
// import logo_blue from "../../assets/logo_blue.png";
// import { StyledText } from "../../styles/tipography";

// interface HeaderLoggedInProps {
//   user: iUserResponse;
// }

// export function HeaderLoggedIn({ user }: HeaderLoggedInProps) {
//   const [menu, setMenu] = useState(false);
//   const location = useLocation();

//   const menuItems = [
//     { label: "Editar perfil", path: "" }, //onclick = {()=>{toogleModal}}
//     { label: "Editar endereço", path: "" }, //onclick = {()=>{toogleModal}}
//     { label: "Sair", path: "/logout" },
//   ];

//   const menuItemsBuyerUser = menuItems;
//   const menuItemsSellerUser = [...menuItems, { label: "Meus anúncios", path: "/my-ads" }];

//   const renderMenuItems = () => {
//     return menuItems.map((item, index) => (
//       <li key={index}>
//         <Link to={item.path}>
//           <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
//             {item.label}
//           </StyledText>
//         </Link>
//       </li>
//     ));
//   };

//   const toggleMenu = () => {
//     setMenu(!menu);
//   };

//   return (
//     <Header id="header">
//       <DivHeader>
//         <Link to={location.pathname !== "/" ? "/" : ""}>
//           <img src={logo_blue} alt="Logo" />
//         </Link>

//         <DivInfoHeader>
//           <div>
//             <InitialsCircle text={user.name.substring(0, 2)} />
//           </div>
//           <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
//             {user.name}
//           </StyledText>
//           <section>
//             <MenuList>
//               {renderMenuItems()}
//             </MenuList>
//           </section>
//         </DivInfoHeader>
//         <BtnMenuHeader onClick={toggleMenu}>
//           {menu ? (
//             <AiOutlineClose size={22} color={"#0b0d0d"} />
//           ) : (
//             <AiOutlineMenu size={22} color={"#0b0d0d"} />
//           )}
//         </BtnMenuHeader>
//       </DivHeader>
//       <DivMenu display={menu}>
//         <div>
//           <MenuUserInfo>
//             <div>
//               <InitialsCircle text={user.name.substring(0, 2)} />
//             </div>
//             <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
//               {user.name}
//             </StyledText>
//           </MenuUserInfo>

//           <MenuUserItems>
//             {renderMenuItems()}
//           </MenuUserItems>
//         </div>
//       </DivMenu>
//     </Header>
//   );
// }
