import { useContext } from "react";
import { UserContext } from "../contexts/userContext/UserContext";

export const useUser = () => {
  const userContext = useContext(UserContext);

  return userContext;
};
