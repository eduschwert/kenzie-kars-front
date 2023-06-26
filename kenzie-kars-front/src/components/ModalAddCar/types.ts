import { Dispatch, SetStateAction } from "react";
import { iProductItem } from "../../contexts/productContext/types";

export interface iModalAddCarProps {
  toggleModal: () => void;
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
