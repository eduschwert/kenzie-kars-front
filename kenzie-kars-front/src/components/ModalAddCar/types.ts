import { Dispatch, SetStateAction } from "react";
import { iVehicle } from "../../pages/profileViewAdmin/types";

export interface iModalAddCarProps {
  toggleModal: () => void;
  setVehicles: Dispatch<SetStateAction<Array<iVehicle> | null>>;
}

export interface iVehicleFipeApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}
