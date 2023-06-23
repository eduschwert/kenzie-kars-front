import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { ProfileViewAdmin } from "../pages/profileViewAdmin";
import { AnnoucementPage } from "../pages/annoucement";
import { ProfileView } from "../pages/profileView";
import { ProtectedRoutes } from "../components/protectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/anouncement" element={<AnnoucementPage />} />
      <Route path="/profileview" element={<ProfileView />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/profileviewadmin" element={<ProfileViewAdmin />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
