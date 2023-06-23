import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext/UserContext";
import { StyledText } from "../../styles/tipography";

export const ProtectedRoutes = () => {
  const { loadingProfileView, user } = useContext(UserContext);
  const navigate = useNavigate();

  if (loadingProfileView) {
    return (
      <StyledText tag="h2" textStyle="tiheading-2-600tle1">
        Carregando...
      </StyledText>
    );
  }

  if (!user.is_seller) {
    navigate("/");
  }

  return <Outlet />;
};
