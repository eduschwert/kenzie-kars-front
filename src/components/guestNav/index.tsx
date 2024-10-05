import { StyledNav } from "./style";
import { StyledLink } from "../../styles/buttons";

export const GuestNav = ({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <StyledNav $menu={menu}>
    <StyledLink
      $buttonStyle="big"
      $buttonColor="link2"
      to="/login"
      onClick={() => setMenu(false)}
    >
      Fazer Login
    </StyledLink>
    <StyledLink
      $buttonStyle="big"
      $buttonColor="outline2"
      to="/register"
      onClick={() => setMenu(false)}
    >
      Cadastrar
    </StyledLink>
  </StyledNav>
);
