import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { HomePage } from "../pages/homePage";
import { Register } from "../pages/register";
import { Login } from "../pages/login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        {/* <Route path="/profileview" element={<ProfileView />} /> */}
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
