import { Dispatch, SetStateAction } from "react";
import { iVehicle } from "../../pages/profileViewAdmin/types";
import { iProductItem } from "../../contexts/productContext/types";

export interface iModalAddCarProps {
  toggleModal: () => void;
  // setVehicles: Dispatch<SetStateAction<Array<iVehicle> | null>>;
  setVehicles: Dispatch<SetStateAction<Array<iProductItem> | null>>;
}

export interface iVehicleFipeApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}
