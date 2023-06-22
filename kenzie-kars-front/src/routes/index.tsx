import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/protectedRoutes";
import { HomePage } from "../pages/homePage";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { ProfileView } from "../pages/profileView";
import { AnnoucementPage } from "../pages/annoucement";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/anouncement" element={<AnnoucementPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/profileview" element={<ProfileView />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
