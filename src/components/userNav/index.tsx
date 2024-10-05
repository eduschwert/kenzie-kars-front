import { Link } from "react-router-dom";

import { useModal, useUser } from "../../hooks/useContexts";
import { UserAvatar } from "../userAvatar";
import { StyledNavUser } from "./style";
import { StyledText } from "../../styles/tipography";

export const UserNav = ({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { openModal, setModalType } = useModal();
  const { user, logoutUser } = useUser();

  const firstTwoNames = (name: string | undefined) =>
    name && name.split(" ").slice(0, 2).join(" ");

  return (
    <StyledNavUser $menu={menu}>
      <div className="navUserDiv">
        <div className="navUserInformation">
          <UserAvatar size="small" username={user?.name} color="#5126EA" />
          <StyledText tag="p" $textStyle="body-1-400" $textColor="grey2">
            {firstTwoNames(user?.name)}
          </StyledText>
        </div>
        <ul className="navUserMenu">
          <li>
            <button
              onClick={() => {
                openModal();
                setModalType("editUser");
              }}
              className="navUserMenuButton"
            >
              Editar perfil
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                openModal();
                setModalType("editUserAddress");
              }}
              className="navUserMenuButton"
            >
              Editar endereço
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                openModal();
                setModalType("editUserPassword");
              }}
              className="navUserMenuButton"
            >
              Alterar senha
            </button>
          </li>
          {user?.isSeller && (
            <li>
              <Link
                onClick={() => setMenu(false)}
                className="navUserMenuButton"
                to="/profileview"
              >
                Meus anúncios
              </Link>
            </li>
          )}
          <li>
            <button
              className="navUserMenuButton"
              onClick={() => {
                logoutUser();
                setMenu(false);
              }}
            >
              Sair
            </button>
          </li>
        </ul>
      </div>
    </StyledNavUser>
  );
};
