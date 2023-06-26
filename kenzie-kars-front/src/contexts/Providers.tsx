import { CitiesProvider } from "./citiesContext/CitiesContext";
import { ProductProvider } from "./productContext";
import { iDefaultPropsProvider } from "./types";
import { UserProvider } from "./userContext/UserContext";

export const Providers = ({ children }: iDefaultPropsProvider) => {
  return (
    <CitiesProvider>
      <UserProvider>
        <ProductProvider>{children}</ProductProvider>
      </UserProvider>
    </CitiesProvider>
  );
};
