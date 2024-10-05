import { useContext } from "react";

import { SellerContext } from "../contexts/sellerContext";
import { UserContext } from "../contexts/userContext";
import { ModalContext } from "../contexts/modalContext";
import { FipeApiContext } from "../contexts/fipeApiContext";

export const useSeller = () => useContext(SellerContext);

export const useUser = () => useContext(UserContext);

export const useModal = () => useContext(ModalContext);

export const useFipeApi = () => useContext(FipeApiContext);
