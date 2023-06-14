import { CitiesProvider } from "./CitiesContext/CitiesContext";
import { iDefaultPropsProvider } from "./types";
import { UserProvider } from "./userContext/UserContext";

export const Providers = ({ children }: iDefaultPropsProvider) => {
  return (
    <CitiesProvider>
      <UserProvider>
        {/* <ProfileProvider>{children}</ProfileProvider> */}
      </UserProvider>
    </CitiesProvider>
  );
};
