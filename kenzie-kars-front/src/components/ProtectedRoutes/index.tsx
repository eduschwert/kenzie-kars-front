import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/userContext/UserContext";
import { StyledText } from "../../styles/tipography";

export const ProtectedRoutes = () => {
  const { loadingProfileView } = useContext(UserContext);

  if (loadingProfileView) {
    return (
      <StyledText tag="h2" textStyle="tiheading-2-600tle1">
        Carregando...
      </StyledText>
    );
  }

  return <Outlet />;
};
