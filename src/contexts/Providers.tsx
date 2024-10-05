import { FipeApiProvider } from "./fipeApiContext";
import { ModalProvider } from "./modalContext";
import { UserProvider } from "./userContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <FipeApiProvider>
      <ModalProvider>
        <UserProvider>{children}</UserProvider>
      </ModalProvider>
    </FipeApiProvider>
  );
};
