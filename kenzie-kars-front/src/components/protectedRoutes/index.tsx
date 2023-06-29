import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext/UserContext";
import { StyledText } from "../../styles/tipography";

export const ProtectedRoutes = () => {
  const { globalLoading, user } = useContext(UserContext);
  const navigate = useNavigate();

  if (globalLoading) {
    return (
      <StyledText tag="h2" textStyle="tiheading-2-600tle1">
        Carregando...
      </StyledText>
    );
  }

  if (!user?.is_seller) {
    navigate("/");
    return <></>;
  } else {
    return <Outlet />;
  }
};
