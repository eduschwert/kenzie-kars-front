import { Navigate, Route, Routes } from "react-router-dom";
import { SellerProvider } from "../contexts/sellerContext";

import { HomePage } from "../pages/home";
import { VehiclePage } from "../pages/vehicle";
import { SellerPage } from "../pages/seller";
import { ResetPasswordPage } from "../pages/resetPassword";
import { SendEmailPage } from "../pages/sendEmail";
import { RoutesSeller } from "../components/routesSeller";
import { RoutesNotLoggedIn } from "../components/routesNotLoggedIn";
import { RegisterPage } from "../pages/register";
import { LoginPage } from "../pages/login";
import { ProfileViewPage } from "../pages/profileView";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vehicle/:vehicleId" element={<VehiclePage />} />
      <Route path="/seller/:sellerId" element={<SellerPage />} />

      <Route element={<RoutesNotLoggedIn />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resetPassword" element={<SendEmailPage />} />
        <Route path="/resetPassword/:token" element={<ResetPasswordPage />} />
      </Route>

      <Route element={<RoutesSeller />}>
        <Route
          path="/profileview"
          element={
            <SellerProvider>
              <ProfileViewPage />
            </SellerProvider>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
