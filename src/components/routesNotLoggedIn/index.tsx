import { Navigate, Outlet } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { useUser } from "../../hooks/useContexts";
import { StyledDivFullPage } from "./style";

export const RoutesNotLoggedIn = () => {
  const { user, globalLoading } = useUser();

  if (globalLoading) {
    return (
      <StyledDivFullPage>
        <div className="headerHeight"></div>
        <main className="loading">
          <ClipLoader color="#212529" size={"5rem"} loading={true} />
        </main>
      </StyledDivFullPage>
    );
  }

  return !user ? <Outlet /> : <Navigate to="/" />;
};
